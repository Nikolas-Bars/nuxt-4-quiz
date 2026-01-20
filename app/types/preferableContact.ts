export enum PreferableContactEnum {
  "phone",
  "telegram",
  "whatsapp",
  "mail"
}

export type corpFormDataType = {
    name: String,
    phone: String,
    mail: String,
    city_id: Number,
    question: String,
    date: String,
    preferable_contact: PreferableContactEnum,
    people_count: Number | null,
    corporate_type: Number | null,
}