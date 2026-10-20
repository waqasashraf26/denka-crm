import boxIcon from '@/public/assets/icons/boxIcon.svg'
import bookIcon from '@/public/assets/icons/bookIcon.svg'
import tagIcon from '@/public/assets/icons/tagIcon.svg'
import activityIcon from '@/public/assets/icons/activityIcon.svg'
import barIcon from '@/public/assets/icons/barIcon.svg'
import calenderIcon from '@/public/assets/icons/calenderIcon.svg'
import integrationIcon from '@/public/assets/icons/integrationIcon.svg'
import meterIcon from '@/public/assets/icons/meterIcon.svg'
import otpIcon from '@/public/assets/icons/otpIcon.svg'
import chatIcon from '@/public/assets/icons/chatIcon.svg'
import bagIcon from '@/public/assets/icons/bagIcon.svg'
import targetIcon from '@/public/assets/icons/targetIcon.svg'
import downIcon from '@/public/assets/icons/downIcon.svg'
import conversIcon from '@/public/assets/icons/conversIcon.svg'
import upIcon from '@/public/assets/icons/upIcon.svg'
import classIcon from '@/public/assets/icons/classIcon.svg'
import img1 from '@/public/assets/images/profile1.svg'
import img2 from '@/public/assets/images/profile2.svg'
import img3 from '@/public/assets/images/profile3.svg'
import img4 from '@/public/assets/images/profile4.svg'
import logo1 from '@/public/assets/images/logo1.svg'
import logo2 from '@/public/assets/images/logo2.svg'
import logo3 from '@/public/assets/images/logo3.svg'
import logo4 from '@/public/assets/images/logo4.svg'
import logo5 from '@/public/assets/images/logo5.svg'
import zoomIcon from '@/public/assets/icons/zoom.svg'
import group1 from '@/public/assets/icons/group1.svg'
import group2 from '@/public/assets/icons/group2.svg'
import group3 from '@/public/assets/icons/group3.svg'
import chat2 from '@/public/assets/icons/chat2.svg'
import gmail from '@/public/assets/icons/gmail.svg'
import telephone from '@/public/assets/icons/telephone.svg'



export const SidebarMenu1 = [
    { icon: boxIcon, name: 'Dashboard', src: '/dashboard' },
    { icon: bookIcon, name: 'Contact Management', src: '/dashboard/contact-management' },
    { icon: tagIcon, name: 'Sales Management', src: '/dashboard/sales-management' },
    { icon: activityIcon, name: 'Activity Management', src: '/dashboard/activity-management' },
]

export const SidebarMenu2 = [
    { icon: barIcon, name: 'Reports and Analytics', src: '/dashboard/reports-analytics' },
    { icon: meterIcon, name: 'Perf and Goals', src: '/dashboard/performance-goals' },
]

export const SidebarMenu3 = [
    { icon: integrationIcon, name: 'E-com Integration', src: '/dashboard/ecom-integration' },
    { icon: calenderIcon, name: 'Meeting Scheduling', src: '/dashboard/meating-scheduling' },
    { icon: otpIcon, name: 'Role-based Access', src: '/dashboard/rolebase-access' },
    { icon: chatIcon, name: 'Chat', src: '/dashboard/chat' },
]

export const DashboardCards = [
    { icon: bagIcon, name: 'Total Sales', value: '$23,00.00', time: 'Last Period', periodIcon: downIcon, periodValue: '16.5%' },
    { icon: conversIcon, name: 'Total Leads', value: '1000', time: 'Last Period', periodIcon: upIcon, periodValue: '16.5%' },
    { icon: classIcon, name: 'Conversion Rate', value: '55%', time: 'Last Period', periodIcon: upIcon, periodValue: '16.5%' },
    { icon: targetIcon, name: 'Sales Target Progress', value: '700', time: 'Last Period', periodIcon: upIcon, periodValue: '16.5%' },
]


export const ContactManagementCards = [
    { icon: bagIcon, name: 'Total Contacts', value: '1694', time: 'Last Period', periodIcon: downIcon, periodValue: '16.5%' },
    { icon: conversIcon, name: 'New Leads This Month', value: '1000', time: 'Last Period', periodIcon: upIcon, periodValue: '16.5%' },
    { icon: classIcon, name: 'Contacted Leads', value: '7878', time: 'Last Period', periodIcon: upIcon, periodValue: '16.5%' },
    { icon: targetIcon, name: 'Qualified Leads', value: '700', time: 'Last Period', periodIcon: upIcon, periodValue: '16.5%' },
]


export const ContactManagementTable = [
    { name: 'Jane Cooper', userImg: img1, email: 'nevaeh.simmons@ee.com', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Wade Warren', userImg: img2, email: 'georgia.young@e.com', company: 'Ferrari', logo: logo5, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2C', },
    { name: 'Esther Howard', userImg: img3, email: 'michelle.rivera@exle.com', company: 'Louis Vuitton', logo: logo2, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Jenny Wilson', userImg: img4, email: 'jessica.hanson@.com', company: 'BMW', logo: logo3, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Robert Fox', userImg: img2, email: 'jessica.hanson@.com', company: 'Robert Fox', logo: logo4, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2C', },
    { name: 'Jacob Jones', userImg: img1, email: 'jessica.hanson@.com', company: 'Jacob Jones', logo: logo5, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Jane Cooper', userImg: img1, email: 'nevaeh.simmons@ee.com', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Wade Warren', userImg: img2, email: 'georgia.young@e.com', company: 'Ferrari', logo: logo5, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2C', },
    { name: 'Esther Howard', userImg: img3, email: 'michelle.rivera@exle.com', company: 'Louis Vuitton', logo: logo2, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Jenny Wilson', userImg: img4, email: 'jessica.hanson@.com', company: 'BMW', logo: logo3, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Robert Fox', userImg: img2, email: 'jessica.hanson@.com', company: 'Robert Fox', logo: logo4, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2C', },
    { name: 'Jacob Jones', userImg: img1, email: 'jessica.hanson@.com', company: 'Jacob Jones', logo: logo5, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Jane Cooper', userImg: img1, email: 'nevaeh.simmons@ee.com', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Wade Warren', userImg: img2, email: 'georgia.young@e.com', company: 'Ferrari', logo: logo5, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2C', },
    { name: 'Esther Howard', userImg: img3, email: 'michelle.rivera@exle.com', company: 'Louis Vuitton', logo: logo2, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Jenny Wilson', userImg: img4, email: 'jessica.hanson@.com', company: 'BMW', logo: logo3, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
    { name: 'Robert Fox', userImg: img2, email: 'jessica.hanson@.com', company: 'Robert Fox', logo: logo4, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2C', },
    { name: 'Jacob Jones', userImg: img1, email: 'jessica.hanson@.com', company: 'Jacob Jones', logo: logo5, phone: '(308) 555-0121', adress: '2464 Royal Ln. Mesa, New ', status: 'B2B', },
]


export const LeadManagementTable = [
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'Contacted', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'Contacted', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'Contacted', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'Contacted', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'Contacted', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'New', },
    { name: 'Jane Cooper', userImg: img1, lastContact: '01/03/2024', company: 'Gillette', logo: logo1, phone: '(308) 555-0121', status: 'Contacted', },
]



export const OpputunityNewData = [
    { JColor: '#335EEA', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#335EEA', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#B1D2FC', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#4BB817', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#335EEA', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
]

export const OpputunityInProgressData = [
    { JColor: '#FF272D', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FFC107', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#9646A3', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FF272D', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FFC107', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
]

export const OpputunityPerposalData = [
    { JColor: '#9646A3', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FF272D', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FFC107', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#B1D2FC', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#9646A3', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
]

export const OpputunityNegotiationData = [
    { JColor: '#9646A3', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#9646A3', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#335EEA', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#B1D2FC', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#9646A3', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
]

export const OpputunityClosedData = [
    { JColor: '#4BB817', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#B1D2FC', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FF272D', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FFC107', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
    { JColor: '#FF272D', name: 'James Williams', email: 'jondoe78@email.com', oprtName: 'Website Redesign', company: 'ABC Corp', value: '$10,000', closeDate: '12/31/2024' },
]


export const InvoicingTable = [
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Send', issueDate: '01/03/2024', dueDate: '01/03/2024' },
    { name: 'Jane Cooper', userImg: img1, invoice: 'Q-87786', amount: '$12000', status: 'Paid', issueDate: '01/03/2024', dueDate: '01/03/2024' },
]



export const TaskAssignmentTable = [
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Completed', dueDate: '09/05/2024' },
    { name: 'James Williams', taskName: 'Sales Marketing Srategy', userImg: img1, status: 'Pending', dueDate: '09/05/2024' },
]


export const BoardViewData = [
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
    {
        name: 'Increase Lead Generation', time: 'at 12:00 pm', status: 'Mark as completed', day: 'Thu', date: '20 July',
        image: [img1, img2, img3, img2, img1, img2,]
    },
]


export const CalenderDaysData = [
    {
        day: 'Sun',
        data: [
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
        ]
    },
    {
        day: 'Mon',
        data: [
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
        ]
    },
    {
        day: 'Tue',
        data: [
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
        ]
    },
    {
        day: 'Wed',
        data: [
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
        ]
    },
    {
        day: 'Thu',
        data: [
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
        ]
    },
    {
        day: 'Fri',
        data: [
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
        ]
    },
    {
        day: 'Sat',
        data: [
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
            { name: 'Increase Lead Generation', time: 'at 12:00 pm', image: [img1, img2, img3, img2,] },
        ]
    },
]



export const AutomatedReportTable = [
    { name: 'Sales Performance Report', des: 'Sales Performance Report', date: '09/05/2024' },
    { name: 'KPI Report', des: 'Detailed metrics on KPIs', date: '09/05/2024' },
    { name: 'Sales Forecast Report', des: 'Predictions of future sales', date: '09/05/2024' },
]



export const kpiSummaryCardsData = [
    { name: 'Sales Revenue', curretValue: '$450,000', target: '$500,000', progress: '90', progressColor: '#FF8E8F', des: 'Revenue for the current quarter is  $450,000, aiming for $500,000.' },
    { name: 'Satisfaction Score', curretValue: '85%', target: '90%', progress: '60', progressColor: '#8979FF', des: 'Customer satisfaction is currently at 85%, slightly below the target.   ' },
    { name: 'Training Comp Rate', curretValue: '85%', target: '90%', progress: '90', progressColor: '#E178C5', des: '90% of the training is completed,  with a target of 100% by the end of the quarter.   ' },
    { name: 'Quarterly Revenue', curretValue: '$450,000', target: '$500,000', progress: '30', progressColor: '#FFB38E', des: 'Revenue for the current quarter is  $450,000, aiming for $500,000.' },
]


export const TrackingTableData = [
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Individual', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
    { type: 'Team', des: 'Increase sales by 20%', person: ' John Doe', target: ' 20%', status: '15%', progress: '75%', deadline: '09/05/2024' },
]



export const IntegrationTableData = [
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Paid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'UnPaid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Left Cart', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Arrived', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Paid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'UnPaid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Left Cart', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Arrived', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Paid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'UnPaid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Left Cart', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Arrived', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Paid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'UnPaid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Left Cart', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Arrived', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Paid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'UnPaid', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Left Cart', },
    { id: '675675', date: '12/07/2024', amount: '$560', customer: 'John Doe', sent: '09/05/2024', status: 'Arrived', },
]



export const MeatingScheduleData = [
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
    { icon: zoomIcon, name: 'Sales Leads Meeting', time: '10 am to 12 pm', des: 'Dorewm ipsum sit amet, cosctor adispinting arli, nuc vhalu libero et bet', image: [img1, img2, img3, img2, img1, img2,] },
]



export const AccountContactTable = [
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
    { accountId: '675675', accountName: 'Delta Inc', contactName: 'John Doe', number: '+097 55544 3' },
]


export const RolesPermissionsTable = [
    { role: 'Admin', viewAccount: 'Yes', viewContact: 'Yes', number: 'Yes' },
    { role: 'Sales', viewAccount: 'Own', viewContact: 'Own', number: 'limited' },
    { role: 'Pre-sales', viewAccount: 'limited', viewContact: 'limited', number: 'No' },
]



export const ChatGroupsData = [
    { name: 'Friends Forever', sms: 'Hahahahah!', time: 'Today, 9.52pm', icon: group1, notification: '4' },
    { name: 'Mera Gang', sms: 'Kyuuuuu???', time: 'Today, 9.52pm', icon: group2, notification: '' },
    { name: 'Hiking', sms: 'It’s not going to happen', time: 'Today, 9.52pm', icon: group3, notification: '' },
]

export const ChatPeopleData = [
    { name: 'Friends Forever', sms: 'Hahahahah!', time: 'Today, 9.52pm', icon: group1, notification: '4' },
    { name: 'Mera Gang', sms: 'Kyuuuuu???', time: 'Today, 9.52pm', icon: group2, notification: '' },
    { name: 'Hiking', sms: 'It’s not going to happen', time: 'Today, 9.52pm', icon: group3, notification: '' },
    { name: 'Friends Forever', sms: 'Hahahahah!', time: 'Today, 9.52pm', icon: group1, notification: '' },
    { name: 'Mera Gang', sms: 'Kyuuuuu???', time: 'Today, 9.52pm', icon: group2, notification: '' },
    { name: 'Hiking', sms: 'It’s not going to happen', time: 'Today, 9.52pm', icon: group3, notification: '' },
]



export const ChatSenderSms = [
    { sms: 'Hey There!' },
    { sms: 'How are you?' },
]
export const ChatReceiverSms = [
    { sms: 'Hello!' },
    { sms: 'I am fine and how are you?' },
]


export const HistoryPanelTable = [
    { type: 'Call', icon: telephone, dateTime: '01/01/2024 10:00 AM', summary: 'Discussed Project in Detail' },
    { type: 'Call', icon: gmail, dateTime: '01/01/2024 10:00 AM', summary: 'Discussed Project in Detail' },
    { type: 'Call', icon: chat2, dateTime: '01/01/2024 10:00 AM', summary: 'Discussed Project in Detail' },
]