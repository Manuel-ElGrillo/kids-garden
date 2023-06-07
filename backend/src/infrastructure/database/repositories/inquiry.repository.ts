import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, catchError, from, map } from 'rxjs';

import { InquiryEntity } from '../entities';
import { InInquiryRepository, InquiryModel } from '../../../domain';

@Injectable()
export class InquiryRepository implements InInquiryRepository {

    constructor(
        @InjectRepository(InquiryEntity)
        private readonly repository: Repository<InquiryEntity>
    ) { }

    createInquiry(inquery: InquiryModel): Observable<InquiryModel> {
        return from(this.repository.save(inquery))
            .pipe(
                map(savedInquery => {
                    return savedInquery;
                }),
                catchError(err => {
                    throw new InternalServerErrorException(
                        'Error creating inquery',
                        err.message
                    )
                })
            )
    }
}