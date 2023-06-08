import { Observable, map } from 'rxjs';
import { Inject } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid'

import { MailService } from '../helpers';
import { CreateInquiryRequest, InInquiryRepository, InInquiryService, InquiryModel, InquiryResponse } from "../../domain";

export class InquiryService implements InInquiryService {

    constructor(
        @Inject('InInquiryRepository')
        private readonly repository: InInquiryRepository,
        private readonly mailService: MailService
    ) { }
    createInquiry(inquiry: CreateInquiryRequest): Observable<InquiryResponse> {

        const newInquiry: InquiryModel = {
            inquiryId: uuidv4(),
            clientName: inquiry.clientName,
            clientSurname: inquiry.clientSurname,
            clientEmail: inquiry.clientEmail,
            clientPhone: inquiry.clientPhone,
            clientInquiry: inquiry.clientInquiry,
            inqueryType: inquiry.inquiryType
        }

        return this.repository.createInquiry(newInquiry)
            .pipe(
                map((savedInquery) => {
                    this.mailService.inqueryMail(savedInquery)
                    // Create another function to notify the DATAENTRY
                    return {
                        success: true,
                        data: savedInquery
                    };
                })
            )
    }

}