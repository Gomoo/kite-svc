import { CompanyRegistrationForm } from "@/lib/types";

const companyRegistrationForm: CompanyRegistrationForm = [
  {
    section: "Company Director Details",
    description: "Please provide details of the a director in the company:",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "input",
        inputType: "text",
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "input",
        inputType: "text",
        required: true,
      },
      {
        name: "passportDataPage",
        label: "Passport Data Page",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
      },
      {
        name: "residentialAddress",
        label: "Residential Address / Proof of Address (e.g., bank statement or utility bill)",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
      },
      {
        name: "roleInCompany",
        label: "Role in the Company",
        type: "input",
        inputType: "text",
        required: true,
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "input",
        inputType: "tel",
        required: true,
      },
      {
        name: "validIdentification",
        label: "Valid Identification (NIN or Driver's License)",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
      },
    ],
  },
  {
    section: "Company Details",
    description: "Please provide details about the company:",

    fields: [
      {
        name: "registeredCompanyName",
        label: "Registered Company Name",
        type: "input",
        inputType: "text",
        required: true,
      },
      {
        name: "operatingName",
        label: "Operating Name (if different from registered name)",
        type: "input",
        inputType: "text",
        required: false,
      },
      {
        name: "rcNumber",
        label: "RC Number",
        type: "input",
        inputType: "text",
        required: true,
      },
      {
        name: "certificateOfIncorporation",
        label: "Certificate of Incorporation",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
        category: "Company Registration Documents",
      },
      {
        name: "memorandumOfAssociation",
        label: "Memorandum of Association",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
        category: "Company Registration Documents",
      },
      {
        name: "articlesOfIncorporation",
        label: "Articles of Incorporation / Organization",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
        category: "Company Registration Documents",
      },
      {
        name: "applicationForRegistration",
        label: "Application for Registration",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
        category: "Company Registration Documents",
      },
      {
        name: "taxIdentificationDocuments",
        label: "Tax Identification Documents",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
        category: "Company Registration Documents",
      },
      {
        name: "proofOfCompanyAddress",
        label: "Proof of Company Address (e.g., bank statement or utility bill)",
        type: "file",
        accept: "image/*,.pdf",
        required: true,
        category: "Company Registration Documents",
      },
      {
        name: "physicalOfficeLocation",
        label: "Physical Office Location / Address",
        type: "input",
        inputType: "text",
        required: true,
      },
      {
        name: "companyWebsite",
        label: "Company Website (if available)",
        type: "input",
        inputType: "url",
        required: false,
      },
    ],
  },
  // {
  //   section: "Payment Details",
  //   description: "Please provide details on your payment preferences:",

  //   fields: [
  //     {
  //       name: "tradingCurrencies",
  //       label: "Currency you'd be trading",
  //       type: "select",
  //       multiple: true,
  //       options: [
  //         { value: "USD", label: "US Dollar (USD)" },
  //         { value: "EUR", label: "Euro (EUR)" },
  //         { value: "GBP", label: "British Pound (GBP)" },
  //         { value: "NGN", label: "Nigerian Naira (NGN)" },
  //         { value: "CAD", label: "Canadian Dollar (CAD)" },
  //         { value: "AUD", label: "Australian Dollar (AUD)" },
  //         { value: "JPY", label: "Japanese Yen (JPY)" },
  //         { value: "CHF", label: "Swiss Franc (CHF)" },
  //         { value: "other", label: "Other (please specify)" },
  //       ],
  //       required: true,
  //     },
  //     {
  //       name: "receivingBankAccountDetails",
  //       label: "Receiving Company Bank Account Details (Account where you expect to receive funds)",
  //       type: "input",
  //       inputType: "textarea",
  //       placeholder:
  //         "Please provide bank name, account number, routing/sort code, and any other relevant details",
  //       required: true,
  //     },
  //   ],
  // },
];

// Export for use in applications
export default companyRegistrationForm;
