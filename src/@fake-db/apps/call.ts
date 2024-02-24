// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Utils Import
import { getDateRange } from 'src/@core/utils/get-daterange'

// ** Types
import { InvoiceType, CallType } from 'src/types/apps/callTypes'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: 'short' })

const data2: { mycalls: CallType[] } = {
  mycalls: [
      {
        id: 1,
        issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
        project: 'Nike',
        customer: 'Cevahir AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Open'
      },
      {
        id: 2,
        issuedDate: `14 ${currentMonth} ${now.getFullYear()}`,
        project: 'Adidas',
        customer: 'Profilo AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Closed'
      },
      {
        id: 3,
        issuedDate: `15 ${currentMonth} ${now.getFullYear()}`,
        project: 'Nike',
        customer: 'Cevahir AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Closed'
      },
      {
        id: 4,
        issuedDate: `16 ${currentMonth} ${now.getFullYear()}`,
        project: 'Adidas',
        customer: 'Profilo AVM',
        maintainer: 'Ali Yildirim',
        duration: '01:01',
        elevatorId: '11-22-33',
        status: 'Open'
      },
  ]
};

const data: { calls: InvoiceType[] } = {
  calls: [
    {
      id: 4987,
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '11-22-33',
      company: 'Hall-Robbins PLC',
      customer: 'Profilo AVM',
      maintainer: 'USA',
      contact: '(616) 865-4180',
      project: 'Nike',
      service: 'Software Development',
      total: 11-22-33,
      avatar: '',
      avatarColor: 'primary',
      invoiceStatus: 'Open',
      balance: 'Ali Yildirim',
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4988,
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '04033 Wesley Wall Apt. 961',
      company: 'Mccann LLC and Sons',
      customer: 'brenda49@taylor.info',
      maintainer: 'Haiti',
      contact: '(226) 204-8287',
      project: 'Stephanie Burns',
      service: 'UI/UX Design & Development',
      total: 5219,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Closed',
      balance: 0,
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4989,
      issuedDate: `19 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '5345 Robert Squares',
      company: 'Leonard-Garcia and Sons',
      customer: 'smithtiffany@powers.com',
      maintainer: 'Denmark',
      contact: '(955) 676-1076',
      project: 'Tony Herrera',
      service: 'Unlimited Extended License',
      total: 3719,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `03 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4990,
      issuedDate: `06 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '19022 Clark Parks Suite 149',
      company: 'Smith, Miller and Henry LLC',
      customer: 'mejiageorge@lee-perez.com',
      maintainer: 'Cambodia',
      contact: '(832) 323-6914',
      project: 'Kevin Patton',
      service: 'Software Development',
      total: 4749,
      avatar: '/images/avatars/3.png',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `11 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4991,
      issuedDate: `08 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '8534 Saunders Hill Apt. 583',
      company: 'Garcia-Cameron and Sons',
      customer: 'brandon07@pierce.com',
      maintainer: 'Martinique',
      contact: '(970) 982-3353',
      project: 'Mrs. Julie Donovan MD',
      service: 'UI/UX Design & Development',
      total: 4056,
      avatar: '/images/avatars/4.png',
      invoiceStatus: 'Draft',
      balance: '$815',
      dueDate: `30 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4992,
      issuedDate: `26 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '661 Perez Run Apt. 778',
      company: 'Burnett-Young PLC',
      customer: 'guerrerobrandy@beasley-harper.com',
      maintainer: 'Botswana',
      contact: '(511) 938-9617',
      project: 'Amanda Phillips',
      service: 'UI/UX Design & Development',
      total: 2771,
      avatar: '',
      avatarColor: 'secondary',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `24 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4993,
      issuedDate: `17 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '074 Long Union',
      company: 'Wilson-Lee LLC',
      customer: 'williamshenry@moon-smith.com',
      maintainer: 'Montserrat',
      contact: '(504) 859-2893',
      project: 'Christina Collier',
      service: 'UI/UX Design & Development',
      total: 2713,
      avatar: '',
      avatarColor: 'success',
      invoiceStatus: 'Draft',
      balance: '$407',
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4994,
      issuedDate: `11 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '5225 Ford Cape Apt. 840',
      company: 'Schwartz, Henry and Rhodes Group',
      customer: 'margaretharvey@russell-murray.com',
      maintainer: 'Oman',
      contact: '(758) 403-7718',
      project: 'David Flores',
      service: 'Template Customization',
      total: 4309,
      avatar: '/images/avatars/5.png',
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: `10 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4995,
      issuedDate: `26 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '23717 James Club Suite 277',
      company: 'Henderson-Holder PLC',
      customer: 'dianarodriguez@villegas.com',
      maintainer: 'Cambodia',
      contact: '(292) 873-8254',
      project: 'Valerie Perez',
      service: 'Software Development',
      total: 3367,
      avatar: '/images/avatars/6.png',
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: `24 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4996,
      issuedDate: `15 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '4528 Myers Gateway',
      company: 'Page-Wise PLC',
      customer: 'bwilson@norris-brock.com',
      maintainer: 'Guam',
      contact: '(956) 803-2008',
      project: 'Susan Dickerson',
      service: 'Software Development',
      total: 4776,
      avatar: '/images/avatars/7.png',
      invoiceStatus: 'Downloaded',
      balance: '$305',
      dueDate: `02 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4997,
      issuedDate: `27 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '4234 Mills Club Suite 107',
      company: 'Turner PLC Inc',
      customer: 'markcampbell@bell.info',
      maintainer: 'United States Virgin Islands',
      contact: '(716) 962-8635',
      project: 'Kelly Smith',
      service: 'Unlimited Extended License',
      total: 3789,
      avatar: '/images/avatars/8.png',
      invoiceStatus: 'Partial Payment',
      balance: '$666',
      dueDate: `18 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4998,
      issuedDate: `31 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '476 Keith Meadow',
      company: 'Levine-Dorsey PLC',
      customer: 'mary61@rosario.com',
      maintainer: 'Syrian Arab Republic',
      contact: '(523) 449-0782',
      project: 'Jamie Jones',
      service: 'Unlimited Extended License',
      total: 5200,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `17 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 4999,
      issuedDate: `14 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '56381 Ashley Village Apt. 332',
      company: 'Hall, Thompson and Ramirez LLC',
      customer: 'sean22@cook.com',
      maintainer: 'Ukraine',
      contact: '(583) 470-8356',
      project: 'Ruben Garcia',
      service: 'Software Development',
      total: 4558,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5000,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '6946 Gregory Plaza Apt. 310',
      company: 'Lambert-Thomas Group',
      customer: 'mccoymatthew@lopez-jenkins.net',
      maintainer: 'Vanuatu',
      contact: '(366) 906-6467',
      project: 'Ryan Meyer',
      service: 'Template Customization',
      total: 3503,
      avatar: '/images/avatars/3.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5001,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '64351 Andrew Lights',
      company: 'Gregory-Haynes PLC',
      customer: 'novakshannon@mccarty-murillo.com',
      maintainer: 'Romania',
      contact: '(320) 616-3915',
      project: 'Valerie Valdez',
      service: 'Unlimited Extended License',
      total: 5285,
      avatar: '/images/avatars/4.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$202',
      dueDate: `02 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5002,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '5702 Sarah Heights',
      company: 'Wright-Schmidt LLC',
      customer: 'smithrachel@davis-rose.net',
      maintainer: 'Costa Rica',
      contact: '(435) 899-1963',
      project: 'Melissa Wheeler',
      service: 'UI/UX Design & Development',
      total: 3668,
      avatar: '/images/avatars/5.png',
      invoiceStatus: 'Downloaded',
      balance: '$731',
      dueDate: `15 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5003,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '668 Robert Flats',
      company: 'Russell-Abbott Ltd',
      customer: 'scott96@mejia.net',
      maintainer: 'Congo',
      contact: '(254) 399-4728',
      project: 'Alan Jimenez',
      service: 'Unlimited Extended License',
      total: 4372,
      avatar: '',
      avatarColor: 'warning',
      invoiceStatus: 'Sent',
      balance: '-$344',
      dueDate: `17 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5004,
      issuedDate: `27 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '55642 Chang Extensions Suite 373',
      company: 'Williams LLC Inc',
      customer: 'cramirez@ross-bass.biz',
      maintainer: 'Saint Pierre and Miquelon',
      contact: '(648) 500-4338',
      project: 'Jennifer Morris',
      service: 'Template Customization',
      total: 3198,
      avatar: '/images/avatars/6.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$253',
      dueDate: `16 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5005,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '56694 Eric Orchard',
      company: 'Hudson, Bell and Phillips PLC',
      customer: 'arielberg@wolfe-smith.com',
      maintainer: 'Uruguay',
      contact: '(896) 544-3796',
      project: 'Timothy Stevenson',
      service: 'Unlimited Extended License',
      total: 5293,
      avatar: '',
      avatarColor: 'error',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5006,
      issuedDate: `10 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '3727 Emma Island Suite 879',
      company: 'Berry, Gonzalez and Heath Inc',
      customer: 'yrobinson@nichols.com',
      maintainer: 'Israel',
      contact: '(236) 784-5142',
      project: 'Erik Hayden',
      service: 'Template Customization',
      total: 5612,
      avatar: '/images/avatars/7.png',
      invoiceStatus: 'Downloaded',
      balance: '$883',
      dueDate: `12 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5007,
      issuedDate: `01 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '953 Miller Common Suite 580',
      company: 'Martinez, Fuller and Chavez and Sons',
      customer: 'tatejennifer@allen.net',
      maintainer: 'Cook Islands',
      contact: '(436) 717-2419',
      project: 'Katherine Kennedy',
      service: 'Software Development',
      total: 2230,
      avatar: '/images/avatars/8.png',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `19 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5008,
      issuedDate: `22 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '808 Sullivan Street Apt. 135',
      company: 'Wilson and Sons LLC',
      customer: 'gdurham@lee.com',
      maintainer: 'Nepal',
      contact: '(489) 946-3041',
      project: 'Monica Fuller',
      service: 'Unlimited Extended License',
      total: 2032,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `30 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5009,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '25135 Christopher Creek',
      company: 'Hawkins, Johnston and Mcguire PLC',
      customer: 'jenny96@lawrence-thompson.com',
      maintainer: 'Kiribati',
      contact: '(274) 246-3725',
      project: 'Stacey Carter',
      service: 'UI/UX Design & Development',
      total: 3128,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `10 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5010,
      issuedDate: `06 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '81285 Rebecca Estates Suite 046',
      company: 'Huynh-Mills and Sons',
      customer: 'jgutierrez@jackson.com',
      maintainer: 'Swaziland',
      contact: '(258) 211-5970',
      project: 'Chad Davis',
      service: 'Software Development',
      total: 2060,
      avatar: '/images/avatars/3.png',
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: `08 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5011,
      issuedDate: `01 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '3102 Briggs Dale Suite 118',
      company: 'Jones-Cooley and Sons',
      customer: 'hunter14@jones.com',
      maintainer: 'Congo',
      contact: '(593) 965-4100',
      project: 'Chris Reyes',
      service: 'UI/UX Design & Development',
      total: 4077,
      avatar: '',
      avatarColor: 'info',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5012,
      issuedDate: `30 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '811 Jill Skyway',
      company: 'Jones PLC Ltd',
      customer: 'pricetodd@johnson-jenkins.com',
      maintainer: 'Brazil',
      contact: '(585) 829-2603',
      project: 'Laurie Summers',
      service: 'Template Customization',
      total: 2872,
      avatar: '/images/avatars/4.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `18 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5013,
      issuedDate: `05 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '2223 Brandon Inlet Suite 597',
      company: 'Jordan, Gomez and Ross Group',
      customer: 'perrydavid@chapman-rogers.com',
      maintainer: 'Congo',
      contact: '(527) 351-5517',
      project: 'Lindsay Wilson',
      service: 'Software Development',
      total: 3740,
      avatar: '/images/avatars/5.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5014,
      issuedDate: `01 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '08724 Barry Causeway',
      company: 'Gonzalez, Moody and Glover LLC',
      customer: 'leahgriffin@carpenter.com',
      maintainer: 'Equatorial Guinea',
      contact: '(628) 903-0132',
      project: 'Jenna Castro',
      service: 'Unlimited Extended License',
      total: 3623,
      avatar: '',
      avatarColor: 'primary',
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5015,
      issuedDate: `16 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '073 Holt Ramp Apt. 755',
      company: 'Ashley-Pacheco Ltd',
      customer: 'esparzadaniel@allen.com',
      maintainer: 'Seychelles',
      contact: '(847) 396-9904',
      project: 'Wendy Weber',
      service: 'Software Development',
      total: 2477,
      avatar: '/images/avatars/6.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `01 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5016,
      issuedDate: `24 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '984 Sherry Trail Apt. 953',
      company: 'Berry PLC Group',
      customer: 'todd34@owens-morgan.com',
      maintainer: 'Ireland',
      contact: '(852) 249-4539',
      project: 'April Yates',
      service: 'Unlimited Extended License',
      total: 3904,
      avatar: '',
      avatarColor: 'secondary',
      invoiceStatus: 'Paid',
      balance: '$951',
      dueDate: `30 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5017,
      issuedDate: `24 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '093 Jonathan Camp Suite 953',
      company: 'Allen Group Ltd',
      customer: 'roydavid@bailey.com',
      maintainer: 'Netherlands',
      contact: '(917) 984-2232',
      project: 'Daniel Marshall PhD',
      service: 'UI/UX Design & Development',
      total: 3102,
      avatar: '/images/avatars/7.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$153',
      dueDate: `25 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5018,
      issuedDate: `29 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '4735 Kristie Islands Apt. 259',
      company: 'Chapman-Schneider LLC',
      customer: 'baldwinjoel@washington.com',
      maintainer: 'Cocos (Keeling) Islands',
      contact: '(670) 409-3703',
      project: 'Randy Rich',
      service: 'UI/UX Design & Development',
      total: 2483,
      avatar: '/images/avatars/8.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `10 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5019,
      issuedDate: `07 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '92218 Andrew Radial',
      company: 'Mcclure, Hernandez and Simon Ltd',
      customer: 'psmith@morris.info',
      maintainer: 'Macao',
      contact: '(646) 263-0257',
      project: 'Mrs. Jodi Chapman',
      service: 'Unlimited Extended License',
      total: 2825,
      avatar: '/images/avatars/1.png',
      invoiceStatus: 'Partial Payment',
      balance: '-$459',
      dueDate: `14 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5020,
      issuedDate: `10 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '2342 Michelle Valley',
      company: 'Hamilton PLC and Sons',
      customer: 'lori06@morse.com',
      maintainer: 'Somalia',
      contact: '(751) 213-4288',
      project: 'Steven Myers',
      service: 'Unlimited Extended License',
      total: 2029,
      avatar: '/images/avatars/2.png',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: `28 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5021,
      issuedDate: `02 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '16039 Brittany Terrace Apt. 128',
      company: 'Silva-Reeves LLC',
      customer: 'zpearson@miller.com',
      maintainer: 'Slovakia (Slovak Republic)',
      contact: '(655) 649-7872',
      project: 'Charles Alexander',
      service: 'Software Development',
      total: 3208,
      avatar: '',
      avatarColor: 'success',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `06 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5022,
      issuedDate: `02 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '37856 Olsen Lakes Apt. 852',
      company: 'Solis LLC Ltd',
      customer: 'strongpenny@young.net',
      maintainer: 'Brazil',
      contact: '(402) 935-0735',
      project: 'Elizabeth Jones',
      service: 'Software Development',
      total: 3077,
      avatar: '',
      avatarColor: 'error',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `09 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5023,
      issuedDate: `23 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '11489 Griffin Plaza Apt. 927',
      company: 'Munoz-Peters and Sons',
      customer: 'carrietorres@acosta.com',
      maintainer: 'Argentina',
      contact: '(915) 448-6271',
      project: 'Heidi Walton',
      service: 'Software Development',
      total: 5578,
      avatar: '/images/avatars/3.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `23 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5024,
      issuedDate: `28 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '276 Michael Gardens Apt. 004',
      company: 'Shea, Velez and Garcia LLC',
      customer: 'zjohnson@nichols-powers.com',
      maintainer: 'Philippines',
      contact: '(817) 700-2984',
      project: 'Christopher Allen',
      service: 'Software Development',
      total: 2787,
      avatar: '/images/avatars/4.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `25 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5025,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '633 Bell Well Apt. 057',
      company: 'Adams, Simmons and Brown Group',
      customer: 'kayla09@thomas.com',
      maintainer: 'Martinique',
      contact: '(266) 611-9482',
      project: 'Joseph Oliver',
      service: 'UI/UX Design & Development',
      total: 5591,
      avatar: '',
      avatarColor: 'warning',
      invoiceStatus: 'Downloaded',
      balance: 0,
      dueDate: `07 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5026,
      issuedDate: `24 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '1068 Lopez Fall',
      company: 'Williams-Lawrence and Sons',
      customer: 'melvindavis@allen.info',
      maintainer: 'Mexico',
      contact: '(739) 745-9728',
      project: 'Megan Roberts',
      service: 'Template Customization',
      total: 2783,
      avatar: '/images/avatars/5.png',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5027,
      issuedDate: `13 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '86691 Mackenzie Light Suite 568',
      company: 'Deleon Inc LLC',
      customer: 'gjordan@fernandez-coleman.com',
      maintainer: 'Costa Rica',
      contact: '(682) 804-6506',
      project: 'Mary Garcia',
      service: 'Template Customization',
      total: 2719,
      avatar: '',
      avatarColor: 'info',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: `04 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5028,
      issuedDate: `18 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '86580 Sarah Bridge',
      company: 'Farmer, Johnson and Anderson Group',
      customer: 'robertscott@garcia.com',
      maintainer: 'Cameroon',
      contact: '(775) 366-0411',
      project: 'Crystal Mays',
      service: 'Template Customization',
      total: 3325,
      avatar: '',
      avatarColor: 'primary',
      invoiceStatus: 'Paid',
      balance: '$361',
      dueDate: `02 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5029,
      issuedDate: `29 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '49709 Edwin Ports Apt. 353',
      company: 'Sherman-Johnson PLC',
      customer: 'desiree61@kelly.com',
      maintainer: 'Macedonia',
      contact: '(510) 536-6029',
      project: 'Nicholas Tanner',
      service: 'Template Customization',
      total: 3851,
      avatar: '',
      avatarColor: 'secondary',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `25 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5030,
      issuedDate: `07 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '3856 Mathis Squares Apt. 584',
      company: 'Byrd LLC PLC',
      customer: 'jeffrey25@martinez-hodge.com',
      maintainer: 'Congo',
      contact: '(253) 230-4657',
      project: 'Mr. Justin Richardson',
      service: 'Template Customization',
      total: 5565,
      avatar: '',
      avatarColor: 'success',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: `06 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5031,
      issuedDate: `21 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '141 Adrian Ridge Suite 550',
      company: 'Stone-Zimmerman Group',
      customer: 'john77@anderson.net',
      maintainer: 'Falkland Islands (Malvinas)',
      contact: '(612) 546-3485',
      project: 'Jennifer Summers',
      service: 'Template Customization',
      total: 3313,
      avatar: '/images/avatars/6.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `09 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5032,
      issuedDate: `31 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '01871 Kristy Square',
      company: 'Yang, Hansen and Hart PLC',
      customer: 'ywagner@jones.com',
      maintainer: 'Germany',
      contact: '(203) 601-8603',
      project: 'Richard Payne',
      service: 'Template Customization',
      total: 5181,
      avatar: '',
      avatarColor: 'error',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5033,
      issuedDate: `12 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '075 Smith Views',
      company: 'Jenkins-Rosales Inc',
      customer: 'calvin07@joseph-edwards.org',
      maintainer: 'Colombia',
      contact: '(895) 401-4255',
      project: 'Lori Wells',
      service: 'Template Customization',
      total: 2869,
      avatar: '/images/avatars/7.png',
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5034,
      issuedDate: `10 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '2577 Pearson Overpass Apt. 314',
      company: 'Mason-Reed PLC',
      customer: 'eric47@george-castillo.com',
      maintainer: 'Paraguay',
      contact: '(602) 336-9806',
      project: 'Tammy Sanchez',
      service: 'Unlimited Extended License',
      total: 4836,
      avatar: '',
      avatarColor: 'warning',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: `22 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5035,
      issuedDate: `20 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '1770 Sandra Mountains Suite 636',
      company: 'Foster-Pham PLC',
      customer: 'jamesjoel@chapman.net',
      maintainer: 'Western Sahara',
      contact: '(936) 550-1638',
      project: 'Dana Carey',
      service: 'UI/UX Design & Development',
      total: 4263,
      avatar: '',
      avatarColor: 'info',
      invoiceStatus: 'Draft',
      balance: '$762',
      dueDate: `12 ${currentMonth} ${now.getFullYear()}`
    },
    {
      id: 5036,
      issuedDate: `19 ${currentMonth} ${now.getFullYear()}`,
      elevatorId: '78083 Laura Pines',
      company: 'Richardson and Sons LLC',
      customer: 'pwillis@cross.org',
      maintainer: 'Bhutan',
      contact: '(687) 660-2473',
      project: 'Andrew Burns',
      service: 'Unlimited Extended License',
      total: 3171,
      avatar: '/images/avatars/8.png',
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: `25 ${currentMonth} ${now.getFullYear()}`
    }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/apps/call/calls').reply(config => {
  const { q = '', status = '', dates = [] } = config.params ?? ''
  const queryLowered = q.toLowerCase()
  const filteredData = data.calls.filter(call => {
    if (dates.length) {
      const [start, end] = dates
      const filtered: number[] = []
      const range = getDateRange(start, end)
      const invoiceDate = new Date(call.issuedDate)

      range.filter(date => {
        const rangeDate = new Date(date)
        if (
          invoiceDate.getFullYear() === rangeDate.getFullYear() &&
          invoiceDate.getDate() === rangeDate.getDate() &&
          invoiceDate.getMonth() === rangeDate.getMonth()
        ) {
          filtered.push(call.id)
        }
      })

      if (filtered.length && filtered.includes(call.id)) {
        return (
          (call.customer.toLowerCase().includes(queryLowered) ||
            call.project.toLowerCase().includes(queryLowered) ||
            String(call.id).toLowerCase().includes(queryLowered) ||
            String(call.total).toLowerCase().includes(queryLowered) ||
            String(call.balance).toLowerCase().includes(queryLowered) ||
            call.dueDate.toLowerCase().includes(queryLowered)) &&
          call.invoiceStatus.toLowerCase() === (status.toLowerCase() || call.invoiceStatus.toLowerCase())
        )
      }
    } else {
      return (
        (call.customer.toLowerCase().includes(queryLowered) ||
          call.project.toLowerCase().includes(queryLowered) ||
          String(call.id).toLowerCase().includes(queryLowered) ||
          String(call.total).toLowerCase().includes(queryLowered) ||
          String(call.balance).toLowerCase().includes(queryLowered) ||
          call.dueDate.toLowerCase().includes(queryLowered)) &&
        call.invoiceStatus.toLowerCase() === (status.toLowerCase() || call.invoiceStatus.toLowerCase())
      )
    }
  })

  return [
    200,
    {
      params: config.params,
      allData: data.calls,
      calls: filteredData,
      total: filteredData.length
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet('apps/call/single-invoice').reply(config => {
  const { id } = config.params

  const invoiceData = data.calls.filter(call => call.id === parseInt(id, 10))
  if (invoiceData.length) {
    const responseData = {
      invoice: invoiceData[0],
      paymentDetails: {
        totalDue: '$12,110.55',
        bankproject: 'American Bank',
        maintainer: 'United States',
        iban: 'ETD95476213874685',
        swiftCode: 'BR91905'
      }
    }

    return [200, responseData]
  } else {
    return [404, { message: 'Unable to find the requested invoice!' }]
  }
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/apps/call/clients').reply(() => {
  const clients = data.calls.map(call => {
    const { elevatorId, company, customer, maintainer, contact, project } = call

    return {
      project,
      elevatorId,
      company,
      maintainer,
      contact,
      customer
    }
  })

  return [200, clients.slice(0, 5)]
})

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete('/apps/call/delete').reply(config => {
  // Get invoice id from URL
  const invoiceId = Number(config.data)
  const invoiceIndex = data.calls.findIndex(t => t.id === invoiceId)
  data.calls.splice(invoiceIndex, 1)

  return [200]
})
