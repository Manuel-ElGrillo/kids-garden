import { Observable } from "rxjs";

import { InquiryModel } from "../models";

export interface InInquiryRepository {
    createInquiry(inquery: InquiryModel): Observable<InquiryModel>;
}