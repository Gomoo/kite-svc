import { APIClient } from "@/utils/api-client";
import { UploadAsset } from "./type";

// Step 1: Submit string/number fields only
export const businessFormString = async (payload: {
  // Add all string/number fields required for business creation
  // Example fields (update as needed):
  firstName: string;
  lastName: string;
  roleInCompany: string;
  phoneNumber: string;
  registeredCompanyName: string;
  operatingName?: string;
  physicalOfficeLocation: string;
  companyWebsite?: string;
  tradingCurrencies: string[];
  receivingBankAccountDetails: string;
  // ...add any other string/number fields
}): Promise<{ data: { id: string } }> => {
  const { data } = await APIClient("business/create-otc-business", {
    method: "POST",
    data: payload,
  });
  // Ensure the response is wrapped as { data: { id: string } }
  if (data && typeof data === "object" && "businessId" in data) {
    return { data: { id: data.businessId } };
  }
  return { data: { id: data?.id || data?.businessId || "" } };
};

// Step 2: Submit documents/files, requires businessId from step 1
export const businessDocuments = async (payload: {
  businessId: string;
  passportDataPage?: File;
  residentialAddress?: File;
  validIdentification?: File;
  certificateOfIncorporation?: File;
  memorandumOfAssociation?: File;
  articlesOfIncorporation?: File;
  applicationForRegistration?: File;
  taxIdentificationDocuments?: File;
  proofOfCompanyAddress?: File;
  // ...add any other file fields
}): Promise<any> => {
  const formData = new FormData();
  for (let key in payload) {
    if (key === "businessId") continue;
    const value = payload[key as keyof typeof payload];
    if (value) {
      formData.append(key, value as Blob);
    }
  }
  const { data } = await APIClient(`business/upload-otc-business-document/${payload.businessId}`, {
    method: "POST",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const BusinessAPI = {
  businessFormString,
  businessDocuments,
};
