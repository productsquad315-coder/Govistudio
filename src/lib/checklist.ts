import { z, type ZodError } from 'zod';

export const BUSINESS_TYPES = [
  'Clinic / Healthcare',
  'Professional Services',
  'Home Services / Trades',
  'Real Estate',
  'E-commerce / Retail',
  'Hospitality / Restaurant',
  'Education / Coaching',
  'Agency',
  'Other',
] as const;

export const PINNED_COUNTRIES = ['United States', 'United Kingdom', 'India'] as const;

const REST_COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Cote d\'Ivoire',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czechia',
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const pinned = new Set<string>(PINNED_COUNTRIES);

export const OTHER_COUNTRIES = [...new Set(REST_COUNTRIES)]
  .filter((country) => !pinned.has(country))
  .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

export const COUNTRIES = [...PINNED_COUNTRIES, ...OTHER_COUNTRIES];

const COUNTRY_SET = new Set<string>(COUNTRIES);

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;

export type UtmKey = (typeof UTM_KEYS)[number];

export const UTM_STORAGE_KEY = 'govistudio_checklist_utms';

export const CALENDLY_URL =
  'https://calendly.com/hello-govistudio/30min?utm_source=checklist&utm_medium=landing&utm_campaign=lead_magnet';

export const CHECKLIST_PREVIEW = [
  'Does every missed call get an automatic text-back within 5 minutes?',
  'Does every new lead get an instant acknowledgement?',
  'Can a prospect get an answer or book a slot at 10 pm?',
  'Does every quote or proposal have a scheduled follow-up?',
  'Are WhatsApp and DM leads added to your CRM, not left in chat?',
] as const;

export function capUtm(value: string | null | undefined): string {
  return (value ?? '').trim().slice(0, 100);
}

/** Loose E.164: optional leading +, 7–15 digits, common separators allowed. */
export function isLooseE164(value: string): boolean {
  if (!value) return true;
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return false;
  if (value.startsWith('+') && digits.startsWith('0')) return false;
  return true;
}

function trimmedString(value: unknown): string {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' && Number.isFinite(value)) return String(value);
  return '';
}

const businessTypeValues = [...BUSINESS_TYPES] as [string, ...string[]];

export const checklistSchema = z.object({
  name: z
    .string({ required_error: 'Name is required', invalid_type_error: 'Name is required' })
    .trim()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be 100 characters or fewer'),
  email: z
    .string({ required_error: 'Work email is required', invalid_type_error: 'Work email is required' })
    .trim()
    .min(1, 'Work email is required')
    .email('Enter a valid work email')
    .max(200, 'Email must be 200 characters or fewer'),
  businessType: z.enum(businessTypeValues, {
    errorMap: () => ({ message: 'Select a business type' }),
  }),
  country: z
    .string({ required_error: 'Select a country', invalid_type_error: 'Select a country' })
    .trim()
    .refine((value) => COUNTRY_SET.has(value), 'Select a country'),
  phone: z.preprocess(
    trimmedString,
    z
      .string()
      .max(40, 'Phone number is too long')
      .refine(isLooseE164, 'Enter a valid phone number with a country code'),
  ),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please agree so we can send the checklist' }),
  }),
  utm_source: z.preprocess((value) => capUtm(trimmedString(value)), z.string().max(100)),
  utm_medium: z.preprocess((value) => capUtm(trimmedString(value)), z.string().max(100)),
  utm_campaign: z.preprocess((value) => capUtm(trimmedString(value)), z.string().max(100)),
  utm_content: z.preprocess((value) => capUtm(trimmedString(value)), z.string().max(100)),
  referrer: z.preprocess(
    (value) => trimmedString(value).slice(0, 500),
    z.string().max(500),
  ),
});

export type ChecklistLead = z.infer<typeof checklistSchema>;

export function zodFieldErrors(error: ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    const field = typeof key === 'string' && key.length > 0 ? key : 'form';
    if (!errors[field]) errors[field] = issue.message;
  }
  return errors;
}

export function isHoneypotTripped(value: unknown): boolean {
  if (typeof value === 'string') return value.trim() !== '';
  if (value == null) return false;
  return true;
}

function oneLine(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

export function leadEmailSubject(lead: ChecklistLead): string {
  return `New checklist lead: ${oneLine(lead.name)} (${oneLine(lead.businessType)}, ${oneLine(lead.country)})`;
}

export function leadEmailText(
  lead: ChecklistLead,
  meta: { submittedAt: string; referrer: string; userAgent: string },
): string {
  const show = (value: string) => oneLine(value) || '(none)';
  return [
    'New checklist lead',
    '',
    `Name: ${oneLine(lead.name)}`,
    `Work email: ${oneLine(lead.email)}`,
    `Business type: ${oneLine(lead.businessType)}`,
    `Country: ${oneLine(lead.country)}`,
    `Phone: ${lead.phone ? oneLine(lead.phone) : '(not provided)'}`,
    'Consent: yes',
    '',
    `utm_source: ${show(lead.utm_source)}`,
    `utm_medium: ${show(lead.utm_medium)}`,
    `utm_campaign: ${show(lead.utm_campaign)}`,
    `utm_content: ${show(lead.utm_content)}`,
    '',
    `Submitted at (UTC): ${meta.submittedAt}`,
    `Referrer: ${show(meta.referrer)}`,
    `User agent: ${show(meta.userAgent)}`,
  ].join('\n');
}
