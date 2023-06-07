import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './config/postgreSQL.config';
import { InquiryEntity } from './entities';
import { InquiryRepository } from './repositories';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmPostgresConfigService
        }),
        TypeOrmModule.forFeature(
            [InquiryEntity]
        )
    ],
    providers: [TypeOrmPostgresConfigService, {provide: 'InInquiryRepository', useClass: InquiryRepository}],
    exports: [TypeOrmPostgresConfigService, 'InInquiryRepository']
})
export class PostgreDatabaseModule {}
