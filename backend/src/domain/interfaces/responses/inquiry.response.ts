import { InquiryModel } from "../../../domain/models";

export interface InquiryResponse {
    success: boolean;
    data: InquiryModel;
}