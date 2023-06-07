import { Observable } from 'rxjs';

import { CreateInquiryRequest } from "../interfaces/requests";
import { InquiryModel } from "../models";

export interface InInquiryService {
    createInquiry(inquery: CreateInquiryRequest): Observable<boolean>
}