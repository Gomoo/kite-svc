export interface UploadAsset {
  name: string;
  type: string | null;
  uri: string;
  source: "camera" | "document" | "image-library";
}
