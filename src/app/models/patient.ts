

export class Patient {
  id?: number;
  policliniC_CODE?: string;
  doctoR_REC_ID?: number;
  doctoR_NAME_SURNAME?: string;
  patienT_NAME?: string;
  patienT_SURNAME?: string;
  patienT_BIRTHDAY?: Date;
  patienT_SEX?: number;
  patienT_REC_ID?: number;
  patienT_PHONE?: number;
  visiT_DATETIME?: Date;
  nexT_VISIT_DATETIME?: Date;
  doctoR_NOTE?: string;



  constructor(
    id?: number,
  ) {
    this.id = id || -1

  }

}