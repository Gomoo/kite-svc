import { BusinessAPI } from "@/services/business/api";
import { useMutation } from "@tanstack/react-query";

// Step 1: Create business (string/number fields)
export const useCreateBusiness = () => {
  return useMutation({
    mutationKey: ["create-business"],
    mutationFn: BusinessAPI.businessFormString,
  });
};

// Step 2: Upload business documents (file fields, needs businessId)
export const useUploadBusinessDocuments = () => {
  return useMutation({
    mutationKey: ["upload-business-documents"],
    mutationFn: BusinessAPI.businessDocuments,
  });
};
