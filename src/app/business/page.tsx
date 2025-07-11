"use client";
import StepsContainer from "@/components/stepSlider";
import StepsContainer2 from "@/components/stepSlider2";
import companyRegistrationForm from "@/constants/businessForm";
import useIsAppleDevice from "@/hooks/useIsApple";
import { Widget } from "@typeform/embed-react";
import { Download } from "lucide-react";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormField2, FormSection } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useCreateBusiness, useUploadBusinessDocuments } from "@/hooks/queries/useBusinessForm";

const formSchema = z.object({
  // Director's Details
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  passportDataPage: z.any(),
  residentialAddress: z.any(),
  roleInCompany: z.string().min(1, "Role is required"),
  rcNumber: z.string().min(1, "RC Number is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  validIdentification: z.any(),
  // Company Details
  registeredCompanyName: z.string().min(1, "Registered name is required"),
  operatingName: z.string().optional(),
  certificateOfIncorporation: z.any(),
  memorandumOfAssociation: z.any(),
  articlesOfIncorporation: z.any(),
  applicationForRegistration: z.any(),
  taxIdentificationDocuments: z.any(),
  proofOfCompanyAddress: z.any(),
  physicalOfficeLocation: z.string().min(1, "Office location is required"),
  companyWebsite: z.string().url().optional(),
  // Payment Details
  // tradingCurrencies: z.string().min(1, "Select at least one currency"),
  // receivingBankAccountDetails: z.string().min(1, "Bank details required"),
});

function Business() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const createBusiness = useCreateBusiness();
  const uploadBusinessDocuments = useUploadBusinessDocuments();

  const getFieldNamesByType = (type: string) => {
    return companyRegistrationForm
      .flatMap((section) => section.fields)
      .filter((field) => field.type === type)
      .map((field) => field.name);
  };

  const stringFieldNames = getFieldNamesByType("input").concat(getFieldNamesByType("select"));
  const fileFieldNames = getFieldNamesByType("file");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ values });
    const stringPayload = {
      company_name: values.registeredCompanyName,
      operational_name: values.operatingName,
      rc_number: values.rcNumber,
      country: values.physicalOfficeLocation,
      state: values.physicalOfficeLocation,
      address: values.physicalOfficeLocation,
      lga: values.physicalOfficeLocation,
      phone: values.phoneNumber,
      city: values.physicalOfficeLocation,
      website: values.companyWebsite,
      ubo_information: {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phoneNumber,
        role: values.roleInCompany,
      },
    };

    const filePayload: Record<string, any> = {};
    for (const key in values) {
      if (fileFieldNames.includes(key)) {
        // @ts-ignore
        filePayload[key] = values[key];
      }
    }
    try {
      // @ts-ignore
      const businessResult = await createBusiness.mutateAsync(stringPayload);
      console.log({ businessResult });
      const businessId = businessResult.data?.id;
      if (!businessId) throw new Error("No businessId returned");
      await uploadBusinessDocuments.mutateAsync({ businessId, ...filePayload });
      alert("Business registration successful!");
      form.reset(
        {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          physicalOfficeLocation: "",
          roleInCompany: "",
          registeredCompanyName: "",
          operatingName: "",
          rcNumber: "",
          residentialAddress: "",
          companyWebsite: "",
        },
        { keepValues: false },
      );
      // window.location.href = "/business";
    } catch (error: any) {
      alert(error?.message || "Submission failed");
    }
  }

  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative mx-auto mt-36 w-11/12 md:w-10/12 xl:w-6/12">
        <Form {...form}>
          <div className="space-y-8">
            <StepsContainer2 done={() => onSubmit(form.getValues())}>
              {companyRegistrationForm.map((section: FormSection, index) => (
                <FormSection
                  key={index}
                  section={section}
                  index={index}
                  form={form}
                  isFirstSection={index === 0}
                  isLastSection={index === companyRegistrationForm.length - 1}
                  onAction={() => onSubmit(form.getValues())}
                  isLoading={createBusiness.isPending || uploadBusinessDocuments.isPending}
                />
              ))}
            </StepsContainer2>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Business;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledBg, setIsScrolledBg] = useState(false);
  const [isScrolledBgDesktop, setIsScrolledBgDesktop] = useState(false);
  const { storeLink } = useIsAppleDevice();
  const whatsapplink = "https://wa.me/2349126671174";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > 10) {
        setIsScrolledBg(true);
      } else {
        setIsScrolledBg(false);
      }
      if (window.scrollY > 570) {
        setIsScrolledBgDesktop(true);
      } else {
        setIsScrolledBgDesktop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`inview-once container fixed top-[30px] z-[9999] mx-auto flex h-[58px] items-center justify-between opacity-0 transition-all duration-500 [--slidein-delay:100ms] inview:animate-slidein md:top-3 md:w-11/12 lg:w-11/12 ${
        isScrolled
          ? "px-[5.1%]" // Styles after scrolling 200px
          : "!px-[5.1%] lg:!px-[12.1%]" // Default styles
      } ${
        isScrolledBg && "!top-0 h-[80px] bg-white md:h-[58px] md:bg-transparent" // Styles after scrolling 700px
      } ${isScrolledBgDesktop && "!top-0 h-[80px] bg-white md:h-[58px]"} `}
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={74}
          height={44}
          alt="logo"
          // className="bg-white"
        />
      </Link>

      <div className={`flex items-center gap-3`}>
        <button
          className={`group flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white font-['Geist'] text-sm font-semibold transition-all duration-100 ease-in-out hover:border hover:border-green-500 md:w-fit ${
            isScrolled ? "bg-black md:bg-white" : ""
          }`}
        >
          <a
            href={whatsapplink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-full w-full items-center justify-center gap-2 md:px-3 ${isScrolled ? "" : "transition-colors duration-300 ease-in-out group-hover:text-green-500"} `}
          >
            <Image
              alt="whatsapp"
              src={"/images/whatsapp.png"}
              height={20}
              width={20}
              className="h-4 w-4 !shrink-0 object-contain md:h-5 md:w-5"
            />
            <span className="hidden md:block">Chat with us</span>
          </a>
        </button>
        <button
          className={`group flex h-[32px] w-[32px] items-center justify-center rounded-full font-['Geist'] text-sm font-semibold transition-all duration-300 ease-in-out hover:border hover:border-orange md:w-[115px] ${
            isScrolled
              ? "bg-black text-orange md:bg-orange md:text-white"
              : "text-orbg-orange bg-white"
          }`}
        >
          <a
            href={storeLink}
            className={`flex h-full w-full items-center justify-center ${isScrolled ? "" : "transition-colors duration-300 ease-in-out group-hover:text-orange"} `}
          >
            <Download className="md:hidden" size={16} />
            <span className="hidden md:block">Download</span>
          </a>
        </button>
      </div>
    </div>
  );
}

interface TSection {
  section: FormSection;
  index: number;
  isLastSection: boolean;
  isFirstSection: boolean;
  form: any;
  next?: (pos?: number) => void;
  back?: (pos?: number) => void;
  done?: () => void;
  onAction?: () => void;
  forceRender?: () => void;
  isLoading?: boolean;
}

function FormSection({
  section,
  index,
  isLastSection,
  isFirstSection,
  form,
  next,
  done,
  back,
  isLoading,
  forceRender,
  onAction,
}: TSection) {
  console.log(form.getValues());
  return (
    <div className="">
      <div className="flex items-center">
        <h1 className="text-xl font-light md:text-2xl">{index + 1}</h1>
        <ArrowRight size="24" className="ml-1" color="#000" />
        <h1 className="ml-3 text-xl font-light md:text-2xl">{section?.section}</h1>
      </div>
      <p className="font-light md:text-lg">{section.description}</p>
      <div className="mt-8 !space-y-8">
        {section?.fields.map((field, index) => (
          <FieldSelector key={index} field={field} field_type={field.type} form={form} />
        ))}
      </div>
      <div className="mt-16 flex gap-4">
        <Button
          disabled={isFirstSection}
          onClick={() => {
            if (!isFirstSection && back) {
              let pos = index - 1 < 0 ? 0 : index - 1;
              back(pos);
            } else {
            }
          }}
          className="h-14 rounded-md border-0 border-black bg-transparent px-4 py-2 text-xl font-normal text-black hover:bg-transparent"
        >
          Back
        </Button>
        <Button
          disabled={isLoading}
          onClick={async () => {
            const isValid = await validateSectionFields(form, section.fields);
            console.log(index, isLastSection, done, isValid);
            if (isValid) {
              if (isLastSection) {
                // Submit logic here
                if (onAction) onAction();
              } else if (next) {
                next(index + 1);
              }
            }
            // Optionally, scroll to first error or show a message if not valid
          }}
          className="h-12 rounded-md bg-black px-4 py-2 text-xl font-bold text-white"
        >
          {isLoading ? "Submitting..." : isLastSection ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}

function FieldSelector(props: { field_type: string; field: FormField2; form: any }) {
  const { field_type, form, field: formField } = props;
  switch (field_type) {
    case "input":
      return (
        <FormField
          control={form.control}
          name={formField?.name}
          render={({ field }) => (
            <FormItem className="mx-auto md:w-10/12">
              <FormLabel className="mb-2 font-light md:text-lg">{formField?.label}*</FormLabel>
              <FormControl className="my-0 py-0">
                <Input
                  {...field}
                  className="rounded-none border-0 border-b-[#9E9E9E] px-0 text-lg placeholder:text-lg placeholder:text-[#bbbbbb] focus-visible:border-b-black focus-visible:ring-0"
                  style={{ borderBottomWidth: "1px" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    case "file":
      return (
        <FormField
          control={form.control}
          name={formField?.name}
          render={({ field }) => (
            <FormItem className="relative mx-auto md:w-10/12">
              <FormLabel className="mb-2 font-light md:text-lg">{formField?.label}*</FormLabel>
              <FormControl className="my-0 py-0">
                <div className="relative flex w-full items-center justify-center">
                  <label
                    htmlFor={field.name}
                    className={cn(
                      "flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
                      form.getValues(field.name) &&
                        "border-green-200 bg-green-50 hover:bg-green-50",
                    )}
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      type="file"
                      className="absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
                      {...field}
                    />
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    case "select":
      return (
        <FormField
          control={form.control}
          name={formField?.name}
          render={({ field }) => (
            <FormItem className="mx-auto md:w-10/12">
              <FormLabel className="mb-2 font-light md:text-lg">{formField?.label}*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="rounded-none border-0 border-b-[#9E9E9E] px-0 text-lg placeholder:text-lg placeholder:text-[#bbbbbb] focus:border-b-black focus:ring-0"
                    style={{ borderBottomWidth: "1px" }}
                  >
                    <SelectValue placeholder={""} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* @ts-ignore */}
                  {formField?.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    default:
      return null;
  }
}

async function validateSectionFields(form: any, fields: { name: string }[]) {
  // Get all field names in this section
  const fieldNames = fields.map((field) => field.name);
  // Use RHF's trigger to validate only these fields
  const isValid = await form.trigger(fieldNames);
  return isValid;
}
