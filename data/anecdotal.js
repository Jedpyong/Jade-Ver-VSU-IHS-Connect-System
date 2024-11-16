import { student } from "./student";

export const anecdotalReport = [
    {
        anecdotalDocID: 'anecdotal1',
        studentID: '22-1-10076',
        peopleInvolved: 'Jedo Reyes',
        witness: 'pawpaw',
        dateOfIncident: 'July 07, 2024',
        purpose: 'home visitation and INC grade',
        placeOfIncident: 'Place1',
        thingsInvolved: 'INC Grade',
        details: '      Maam mimi visited and to to a student regarding the INC grade'.repeat(15),
        remarks: 'The home visitation was successful',
        datePrepared: 'July 8, 2024',
        preparedBy: 'Ma\'am MIMI',  
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal2',
        studentID: '22-1-10080',
        peopleInvolved: 'Alex Torres',
        witness: 'Sophie',
        dateOfIncident: 'August 10, 2024',
        purpose: 'student guidance and counseling',
        placeOfIncident: 'Counseling Room',
        thingsInvolved: 'Behavioral issues',
        details: 'Counselor discussed behavioral issues with the student and offered strategies.',
        remarks: 'The counseling session was constructive.',
        datePrepared: 'August 11, 2024',
        preparedBy: 'Mr. Johnson',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal3',
        studentID: '22-1-10085',
        peopleInvolved:'Emily Robles',
        witness: 'Nina',
        dateOfIncident: 'September 05, 2024',
        purpose: 'academic improvement',
        placeOfIncident: 'Library',
        thingsInvolved: 'Study habits',
        details: 'Teacher assisted the student in improving study habits and time management.',
        remarks: 'The student showed willingness to improve.',
        datePrepared: 'September 06, 2024',
        preparedBy: 'Mrs. Lee',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal4',
        studentID: '22-1-10094',
        peopleInvolved: 'Samantha Villamor',
        witness: 'Sarah',
        dateOfIncident: 'September 15, 2024',
        purpose: 'peer mediation',
        placeOfIncident: 'Cafeteria',
        thingsInvolved: 'Conflict resolution',
        details: 'A peer mediation session was conducted to resolve conflicts between students.',
        remarks: 'The session led to a mutual understanding.',
        datePrepared: 'September 16, 2024',
        preparedBy: 'Mr. Smith',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal5',
        studentID: '22-1-10086',
        peopleInvolved: 'Jake Aguilar',
        witness: 'Laura',
        dateOfIncident: 'October 01, 2024',
        purpose: 'family engagement',
        placeOfIncident: 'Home',
        thingsInvolved: 'Family support',
        details: 'Visited the family to discuss the student’s academic performance and needed support.',
        remarks: 'The family was cooperative and eager to help.',
        datePrepared: 'October 02, 2024',
        preparedBy: 'Ms. Taylor',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal6',
        studentID: '22-1-10089',
        peopleInvolved: 'Kevin Reyes',
        witness: 'Rita',
        dateOfIncident: 'October 15, 2024',
        purpose: 'behavioral intervention',
        placeOfIncident: 'Office',
        thingsInvolved: 'Attendance issues',
        details: 'Discussed the student’s attendance issues and potential consequences.',
        remarks: 'The intervention was well-received.',
        datePrepared: 'October 16, 2024',
        preparedBy: 'Mr. Brown',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal7',
        studentID: '22-1-10091',
        peopleInvolved:'Grace Castillo',
        witness: 'Ella',
        dateOfIncident: 'November 01, 2024',
        purpose: 'academic support',
        placeOfIncident: 'Tutoring Center',
        thingsInvolved: 'Math tutoring',
        details: 'Provided additional math tutoring sessions to help the student catch up.',
        remarks: 'The student made significant progress.',
        datePrepared: 'November 02, 2024',
        preparedBy: 'Mrs. Wilson',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal8',
        studentID:'22-1-10084',
        peopleInvolved: 'Mark Espinosa',
        witness: 'Ella',
        dateOfIncident: 'November 15, 2024',
        purpose: 'team collaboration',
        placeOfIncident: 'Classroom',
        thingsInvolved: 'Group project',
        details: 'Facilitated collaboration between students for a group project.',
        remarks: 'The students worked well together and achieved a good result.',
        datePrepared: 'November 16, 2024',
        preparedBy: 'Mr. White',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal9',
        studentID: '22-1-10077',
        peopleInvolved: 'Pawix Mendez',
        witness: 'Tom',
        dateOfIncident: 'December 05, 2024',
        purpose: 'monitoring progress',
        placeOfIncident: 'School',
        thingsInvolved: 'Performance tracking',
        details: 'Monitored the student’s progress in their subjects and offered assistance.',
        remarks: 'The student showed improvement in grades.',
        datePrepared: 'December 06, 2024',
        preparedBy: 'Ms. Green',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal10',
        studentID: '22-1-10075',
        peopleInvolved: 'Jade Lopez',
        witness: 'Jack',
        dateOfIncident: 'December 20, 2024',
        purpose: 'parent-teacher conference',
        placeOfIncident: 'School',
        thingsInvolved: 'Communication with parents',
        details: 'Conducted a parent-teacher conference to discuss student’s performance.',
        remarks: 'The parents were engaged and supportive.',
        datePrepared: 'December 21, 2024',
        preparedBy: 'Mr. Black',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal11',
        studentID: '22-1-10087',
        peopleInvolved: 'Sarah Panganiban',
        witness: 'Ms. Rodriguez',
        dateOfIncident: 'January 10, 2024',
        purpose: 'academic counseling',
        placeOfIncident: 'Guidance Office',
        thingsInvolved: 'Academic performance',
        details: 'Discussed strategies for improving academic performance and time management.',
        remarks: 'Student showed commitment to implementing suggested strategies.',
        datePrepared: 'January 11, 2024',
        preparedBy: 'Ms. Rodriguez',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal12',
        studentID: '22-1-10088',
        peopleInvolved: 'Michael Buenaflor',
        witness: 'Mr. Santos',
        dateOfIncident: 'January 15, 2024',
        purpose: 'behavioral guidance',
        placeOfIncident: 'Conference Room',
        thingsInvolved: 'Classroom behavior',
        details: 'Addressed concerns about classroom participation and engagement.',
        remarks: 'Student agreed to work on active participation.',
        datePrepared: 'January 16, 2024',
        preparedBy: 'Mr. Santos',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal13',
        studentID: '22-1-10101',
        peopleInvolved: 'Gerald Franco',
        witness: 'Mrs. Aquino',
        dateOfIncident: 'January 20, 2024',
        purpose: 'attendance follow-up',
        placeOfIncident: 'Admin Office',
        thingsInvolved: 'Attendance records',
        details: 'Discussed attendance patterns and importance of regular attendance.',
        remarks: 'Parent conference scheduled for follow-up.',
        datePrepared: 'January 21, 2024',
        preparedBy: 'Mrs. Aquino',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal14',
        studentID: '22-1-10109',
        peopleInvolved: 'Cindy Gonzales',
        witness: 'Ms. Reyes',
        dateOfIncident: 'February 05, 2024',
        purpose: 'career counseling',
        placeOfIncident: 'Career Center',
        thingsInvolved: 'Career planning materials',
        details: 'Discussed career aspirations and academic pathway alignment. Student showed interest in pursuing IT-related courses.',
        remarks: 'Follow-up session scheduled for course selection guidance.',
        datePrepared: 'February 06, 2024',
        preparedBy: 'Ms. Reyes',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal15',
        studentID: '22-1-10110',
        peopleInvolved: 'Miguel Rivera',
        witness: 'Mr. Garcia',
        dateOfIncident: 'February 12, 2024',
        purpose: 'academic excellence recognition',
        placeOfIncident: 'Principal\'s Office',
        thingsInvolved: 'Academic records',
        details: 'Recognition of outstanding academic performance in Mathematics and Science subjects. Discussion of potential academic competitions.',
        remarks: 'Student encouraged to join upcoming Math Olympics.',
        datePrepared: 'February 13, 2024',
        preparedBy: 'Mr. Garcia',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal16',
        studentID: '22-1-10111',
        peopleInvolved: 'Eunice Torralba',
        witness: 'Mrs. Santos',
        dateOfIncident: 'February 20, 2024',
        purpose: 'leadership development',
        placeOfIncident: 'Student Council Room',
        thingsInvolved: 'Leadership training materials',
        details: 'Participated in student leadership workshop. Demonstrated excellent communication and organizational skills.',
        remarks: 'Recommended for student council officer position.',
        datePrepared: 'February 21, 2024',
        preparedBy: 'Mrs. Santos',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal17',
        studentID: '22-1-10112',
        peopleInvolved: 'Roland Zabala',
        witness: 'Coach Torres',
        dateOfIncident: 'March 01, 2024',
        purpose: 'sports program consultation',
        placeOfIncident: 'Sports Complex',
        thingsInvolved: 'Athletic records',
        details: 'Discussed balance between academic requirements and sports training schedule. Created personalized study plan.',
        remarks: 'Monthly progress monitoring scheduled.',
        datePrepared: 'March 02, 2024',
        preparedBy: 'Coach Torres',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal18',
        studentID: '22-1-10113',
        peopleInvolved: 'Bea Lim',
        witness: 'Dr. Cruz',
        dateOfIncident: 'March 10, 2024',
        purpose: 'research mentoring',
        placeOfIncident: 'Science Laboratory',
        thingsInvolved: 'Research proposal',
        details: 'Review of research proposal for science fair. Provided guidance on methodology and data collection procedures.',
        remarks: 'Weekly mentoring sessions scheduled.',
        datePrepared: 'March 11, 2024',
        preparedBy: 'Dr. Cruz',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal19',
        studentID: '22-1-10075',
        peopleInvolved: 'Jade Lopez',
        witness: 'Ms. Martinez',
        dateOfIncident: 'March 15, 2024',
        purpose: 'academic performance review',
        placeOfIncident: 'Faculty Room',
        thingsInvolved: 'Progress reports',
        details: 'Quarterly review of academic performance. Discussed areas for improvement and study strategies.',
        remarks: 'Student committed to attending tutorial sessions.',
        datePrepared: 'March 16, 2024',
        preparedBy: 'Ms. Martinez',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal20',
        studentID: '22-1-10076',
        peopleInvolved: 'Jedo Reyes',
        witness: 'Mr. Dela Cruz',
        dateOfIncident: 'March 20, 2024',
        purpose: 'extracurricular involvement',
        placeOfIncident: 'Student Activities Center',
        thingsInvolved: 'Club membership forms',
        details: 'Discussion about joining academic clubs and participation in school activities.',
        remarks: 'Student showed interest in Science Club.',
        datePrepared: 'March 21, 2024',
        preparedBy: 'Mr. Dela Cruz',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal21',
        studentID: '22-1-10077',
        peopleInvolved: 'Maria Santos',
        witness: 'Dr. Reyes',
        dateOfIncident: 'March 25, 2024',
        purpose: 'career guidance',
        placeOfIncident: 'Guidance Office',
        thingsInvolved: 'Career assessment tools',
        details: 'Conducted career assessment and discussed future educational plans.',
        remarks: 'Follow-up session scheduled for next month.',
        datePrepared: 'March 26, 2024',
        preparedBy: 'Dr. Reyes',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal22',
        studentID: '22-1-10078',
        peopleInvolved: 'Carlos Mendoza',
        witness: 'Ms. Lim',
        dateOfIncident: 'March 28, 2024',
        purpose: 'academic mentoring',
        placeOfIncident: 'Study Hall',
        thingsInvolved: 'Study materials',
        details: 'Initiated academic mentoring program. Discussed study techniques and time management strategies.',
        remarks: 'Weekly mentoring sessions scheduled.',
        datePrepared: 'March 29, 2024',
        preparedBy: 'Ms. Lim',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal23',
        studentID: '22-1-10079',
        peopleInvolved: 'Patricia Santos',
        witness: 'Mr. Tan',
        dateOfIncident: 'April 02, 2024',
        purpose: 'leadership training',
        placeOfIncident: 'Student Council Office',
        thingsInvolved: 'Leadership modules',
        details: 'Conducted leadership training session. Student showed exceptional potential in organizing events.',
        remarks: 'Recommended for student council position.',
        datePrepared: 'April 03, 2024',
        preparedBy: 'Mr. Tan',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal24',
        studentID: '22-1-10081',
        peopleInvolved: 'Diana Cruz',
        witness: 'Mrs. Garcia',
        dateOfIncident: 'April 05, 2024',
        purpose: 'peer tutoring program',
        placeOfIncident: 'Library',
        thingsInvolved: 'Tutorial materials',
        details: 'Evaluated student\'s participation in peer tutoring program. Showing excellent teaching abilities.',
        remarks: 'Will continue as peer tutor for mathematics.',
        datePrepared: 'April 06, 2024',
        preparedBy: 'Mrs. Garcia',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal25',
        studentID: '22-1-10082',
        peopleInvolved: 'Rafael Gomez',
        witness: 'Dr. Santos',
        dateOfIncident: 'April 10, 2024',
        purpose: 'research project guidance',
        placeOfIncident: 'Science Laboratory',
        thingsInvolved: 'Research materials',
        details: 'Provided guidance on science research project. Student shows strong analytical skills.',
        remarks: 'Project on track for science fair submission.',
        datePrepared: 'April 11, 2024',
        preparedBy: 'Dr. Santos',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal26',
        studentID: '22-1-10083',
        peopleInvolved: 'Isabella Reyes',
        witness: 'Coach Rodriguez',
        dateOfIncident: 'April 15, 2024',
        purpose: 'sports performance review',
        placeOfIncident: 'Gymnasium',
        thingsInvolved: 'Athletic records',
        details: 'Reviewed sports performance and academic standing. Maintaining good balance between sports and studies.',
        remarks: 'Qualified for regional competition.',
        datePrepared: 'April 16, 2024',
        preparedBy: 'Coach Rodriguez',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal27',
        studentID: '22-1-10090',
        peopleInvolved: 'Marco dela Cruz',
        witness: 'Ms. Torres',
        dateOfIncident: 'April 20, 2024',
        purpose: 'career counseling',
        placeOfIncident: 'Guidance Office',
        thingsInvolved: 'Career assessment tools',
        details: 'Conducted career assessment and discussed future plans. Interest in engineering field noted.',
        remarks: 'Follow-up session scheduled for college applications.',
        datePrepared: 'April 21, 2024',
        preparedBy: 'Ms. Torres',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal28',
        studentID: '22-1-10092',
        peopleInvolved: 'Luis Martinez',
        witness: 'Mr. Flores',
        dateOfIncident: 'April 25, 2024',
        purpose: 'academic improvement',
        placeOfIncident: 'Tutorial Room',
        thingsInvolved: 'Progress reports',
        details: 'Reviewed academic progress and implemented intervention strategies for challenging subjects.',
        remarks: 'Weekly progress monitoring established.',
        datePrepared: 'April 26, 2024',
        preparedBy: 'Mr. Flores',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal29',
        studentID: '22-1-10093',
        peopleInvolved: 'Sofia Ramos',
        witness: 'Mrs. Cruz',
        dateOfIncident: 'May 02, 2024',
        purpose: 'extracurricular activities',
        placeOfIncident: 'Club Room',
        thingsInvolved: 'Activity plans',
        details: 'Discussed leadership role in school club activities. Demonstrated excellent organizational skills.',
        remarks: 'Appointed as club secretary.',
        datePrepared: 'May 03, 2024',
        preparedBy: 'Mrs. Cruz',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal30',
        studentID: '22-1-10095',
        peopleInvolved: 'Andrea Santos',
        witness: 'Dr. Reyes',
        dateOfIncident: 'May 05, 2024',
        purpose: 'academic excellence',
        placeOfIncident: 'Conference Room',
        thingsInvolved: 'Academic records',
        details: 'Recognized for consistent academic performance. Discussed opportunities for advanced studies.',
        remarks: 'Recommended for honors program.',
        datePrepared: 'May 06, 2024',
        preparedBy: 'Dr. Reyes',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal31',
        studentID: '22-1-10104',
        peopleInvolved: 'James Estrada',
        witness: 'Ms. Santos',
        dateOfIncident: 'May 10, 2024',
        purpose: 'academic planning',
        placeOfIncident: 'Guidance Office',
        thingsInvolved: 'Course planning materials',
        details: 'Discussed academic goals and course selection for next semester.',
        remarks: 'Student has clear academic objectives.',
        datePrepared: 'May 11, 2024',
        preparedBy: 'Ms. Santos',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal32',
        studentID: '22-1-10105',
        peopleInvolved: 'Leah Cruz',
        witness: 'Mr. Reyes',
        dateOfIncident: 'May 15, 2024',
        purpose: 'leadership development',
        placeOfIncident: 'Student Council Room',
        thingsInvolved: 'Leadership training materials',
        details: 'Participated in leadership workshop and demonstrated strong communication skills.',
        remarks: 'Excellent potential for student leadership roles.',
        datePrepared: 'May 16, 2024',
        preparedBy: 'Mr. Reyes',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal33',
        studentID: '22-1-10106',
        peopleInvolved: 'John Abad',
        witness: 'Mrs. Torres',
        dateOfIncident: 'May 20, 2024',
        purpose: 'career guidance',
        placeOfIncident: 'Career Center',
        thingsInvolved: 'Career assessment tools',
        details: 'Completed career assessment and discussed potential career paths.',
        remarks: 'Shows strong interest in technology field.',
        datePrepared: 'May 21, 2024',
        preparedBy: 'Mrs. Torres',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal34',
        studentID: '22-1-10107',
        peopleInvolved: 'Grace Bautista',
        witness: 'Dr. Garcia',
        dateOfIncident: 'May 25, 2024',
        purpose: 'academic excellence',
        placeOfIncident: 'Library',
        thingsInvolved: 'Academic records',
        details: 'Reviewed academic achievements and discussed scholarship opportunities.',
        remarks: 'Maintains consistently high academic performance.',
        datePrepared: 'May 26, 2024',
        preparedBy: 'Dr. Garcia',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal35',
        studentID: '22-1-10108',
        peopleInvolved: 'Ryan Fernandez',
        witness: 'Coach Martinez',
        dateOfIncident: 'June 01, 2024',
        purpose: 'sports and academics',
        placeOfIncident: 'Sports Complex',
        thingsInvolved: 'Performance records',
        details: 'Discussed balance between athletic commitments and academic requirements.',
        remarks: 'Successfully managing both sports and studies.',
        datePrepared: 'June 02, 2024',
        preparedBy: 'Coach Martinez',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal36',
        studentID: '22-1-10110',
        peopleInvolved: 'Miguel Rivera',
        witness: 'Ms. Lim',
        dateOfIncident: 'June 05, 2024',
        purpose: 'peer mentoring',
        placeOfIncident: 'Study Hall',
        thingsInvolved: 'Mentoring materials',
        details: 'Evaluated performance as peer mentor and discussed mentoring strategies.',
        remarks: 'Excellent mentor to junior students.',
        datePrepared: 'June 06, 2024',
        preparedBy: 'Ms. Lim',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal37',
        studentID: '22-1-10111',
        peopleInvolved: 'Eunice Torralba',
        witness: 'Mr. Cruz',
        dateOfIncident: 'June 10, 2024',
        purpose: 'club activities',
        placeOfIncident: 'Club Room',
        thingsInvolved: 'Activity plans',
        details: 'Reviewed club leadership role and upcoming event planning.',
        remarks: 'Shows excellent organizational skills.',
        datePrepared: 'June 11, 2024',
        preparedBy: 'Mr. Cruz',
        AY: '2024-2025',
    },
    {
        anecdotalDocID: 'anecdotal38',
        studentID: '22-1-10112',
        peopleInvolved: 'Roland Zabala',
        witness: 'Mrs. Santos',
        dateOfIncident: 'June 15, 2024',
        purpose: 'academic support',
        placeOfIncident: 'Tutorial Center',
        thingsInvolved: 'Study materials',
        details: 'Provided additional support for challenging subjects.',
        remarks: 'Shows improvement in problem areas.',
        datePrepared: 'June 16, 2024',
        preparedBy: 'Mrs. Santos',
        AY: '2024-2025',
    }
];