import academy from "@/assets/images/academy.png"
import onlineschool from "@/assets/images/online-school.png"
import preschool from "@/assets/images/preschool.png"
import school from "@/assets/images/school.png"


export const navItems = [
  ['/register-school', 'For schools'],
  ['https://getskooly.com/mpweb/#/school-form', 'Teach a course'],
  ['/signup', 'Signup'],
  ['/login', 'Login'],
];

export const hamburgerItems = ['Download app', 'Contact support', 'English', 'Add New'];

export const downloads = [
  ['https://play.google.com/store/apps/details?id=com.skooly.app&pli=1', 'Download it on the Play store'],
  ['https://apps.apple.com/us/app/skooly-messenger-for-teachers/id1153385847', 'Get it on the App store'],
];

export const schoolTypes = [
  ["/register-school",'Online school'],
  ["/register-school/preschool",'Preschool & Childcare'],
  ["/register-school",'Coaching & Tutoring'],
  ["/register-school",'Sports'],
  ["/register-school",'Music & Dance'],
  ["/register-school",'Fitness & Gym'],
  ["/register-school",'General Academy'],
  ["/register-school",'K12 School'],
];

export const stats = [25, 15, 5000, 20000];

export const statLabels = ['Countries', 'worth payments processed', 'Schools', 'Teachers & Coaches'];

export const about = [['https://getskooly.com/schools/en/support.html', 'Customer Support']];

export const schoolsAndBusinesses = [
  ['https://getskooly.com/schools/en/', 'For schools'],
  ['https://getskooly.com/schools/en/pricing-academies-and-schools.html', 'Pricing'],
  ['https://getskooly.com/schools/en/support.html', 'For partners'],
  ['https://getskooly.com/schools/en/schedule-a-demo.html', 'Schedule a Demo'],
];

export const legal = [
  ['https://getskooly.com/schools/en/terms-and-conditions.html', 'Terms of Service'],
  ['https://getskooly.com/schools/en/privacy-policy.html', 'Privacy Policy'],
];

export const userOnboarding = [
  ["Academy", "Book or schedule classes", academy, "/academy"],
  ["Online school", "Cohort based courses, online classes, remote teaching, hybrid", onlineschool, "/register-school/online-school"],
  ["Preschool", "Daycare, Nurseries, or Childcare", preschool, "/register-school/preschool"],
  ["School", "Regular day schools, Sunday schools, K12 Schools", school, "/register-school/school"]
]