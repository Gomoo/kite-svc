type FieldType = "input" | "select" | "file" | "radio";

type InputType = "text" | "tel" | "url" | "textarea" | "email" | "number";

interface SelectOption {
  value: string;
  label: string;
}

interface BaseField {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  category?: string;
}

interface InputField extends BaseField {
  type: "input";
  inputType: InputType;
  placeholder?: string;
}

interface SelectField extends BaseField {
  type: "select";
  multiple?: boolean;
  options: SelectOption[];
}

interface FileField extends BaseField {
  type: "file";
  accept: string;
}

interface RadioField extends BaseField {
  type: "radio";
  options: SelectOption[];
}

type FormField = InputField | SelectField | FileField | RadioField;
export type FormField2 = InputField | SelectField | FileField | RadioField;

export interface FormSection {
  section: string;
  description?: string;
  fields: FormField[];
}

export type CompanyRegistrationForm = FormSection[];
