import {Report as ReportPrisma} from '@prisma/client';
import {Report} from '@/domain/entities';

export class Report {
  static toDomain(Report: ReportPrisma): Report {
    return new Report(
      report.id_report,
      report.data_report ?? 0,
      report.tipo_report ?? '',
      report. id_cliente ?? 0,
      report.id_image ?? 0,
    );
  }

  static toPersistence(report: Report): ReportPrisma {
    return {
        id_report: report.reportId,
        data_report: report.reportDate,
        tipo_report: report.reportType,
        id_cliente: report.clientId,
        id_image: report.imageId,
        };
  }
}
