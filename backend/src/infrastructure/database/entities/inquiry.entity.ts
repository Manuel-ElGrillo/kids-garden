import { Column, Entity, PrimaryColumn } from "typeorm";

import { InquiryModel } from "../../../domain/models";

@Entity('Inquerys', {schema: 'public'})
export class InquiryEntity implements InquiryModel{

    @PrimaryColumn(
        'uuid',
        {
            primary: true,
            name: 'inquery_id'
        }
    )
    inquiryId: string;
    
    @Column('character varying', {name: 'inquery_client_name', nullable: false})
    clientName: string;

    @Column('character varying', {name: 'inquery_client_surname', nullable: false})
    clientSurname: string;
    
    @Column('character varying', {name: 'inquery_client_email', nullable: false})
    clientEmail: string;

    @Column('character varying', {name: 'inquery_client_phone', nullable: false})
    clientPhone: string;

    @Column('character varying', {name: 'inquery_client_inquery', length: 255, nullable: false})
    clientInquiry: string;

    @Column('character varying', {name: 'inquery_type', nullable: false})
    inqueryType: string;

}