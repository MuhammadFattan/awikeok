import favicon from './SchaleSync.png';
import favicon_dark from './SchaleSyncDark.png';
import profile_icon from './profile_icon.svg';
import club_icon from './club_icon.png';
import friend_icon from './friend_icon.webp';
import fullStar from './star_icon.svg';
import emptyStar from './star_dull_icon.svg';

//raid
import raid from './raid.webp';
import nextraid from './nextraid.webp';

//jfd
import jfd from './jfd.webp';

//frr
import frr from './frr.webp'
import nextfrr from './nextfrr.webp'

export const assets = {
    favicon,
    favicon_dark,
    profile_icon,
    club_icon,
    friend_icon,
    fullStar,
    emptyStar,
};

export const profileImages = { 
  default1: friend_icon,
}

export const banner = {
    //raid
    raid,
    nextraid,

    //jfd
    jfd,
    
    //frr
    frr,
    nextfrr,
}

export const categories = [
    {
        label: "Friend",
        path: "Players",
        image: friend_icon,
        bgLight: "bg-gray-100",
        bgDark: "bg-gray-700",
    },
    {
        label: "Club",
        path: "Clubs",
        image: club_icon,
        bgLight: "bg-gray-100",
        bgDark: "bg-gray-700",
    }
]

export const types_club = [
    {
        label:"Competitive",
        path:"Competitive",
        image: club_icon,
        bgColor:"#F3F5F5",
    },
    {
        label:"Semi-Competitive",
        path:"Semi-Competitive",
        image: club_icon,
        bgColor:"#F3F5F5",
    },
    {
        label:"Casual",
        path:"Casual",
        image: club_icon,
        bgColor:"#F3F5F5",
    }
]

export const dummyPlayer = [
    {
        friendcode: 1,
        nickname: "abdul",
        image: friend_icon,
        club: "abcd",
        category: "Player",
        Server: "Global",
        Region: "Asia",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        friendcode: 2,
        nickname: "joko",
        image: friend_icon,
        club: "abcd",
        category: "Player",
        Server: "Global",
        Region: "Asia",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        friendcode: 3,
        nickname: "abdul",
        image: friend_icon,
        club: "abcd",
        category: "Player",
        Server: "Global",
        Region: "Asia",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 4,
    },
]

export const dummyClub = [
    {
        id_club: 1,
        club_name: "abcd",
        image: club_icon,
        category: "club",
        type: "Competitive",
        Server: "Japan",
        Region: "Japan",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },    
    {
        id_club: 6,
        club_name: "efgh",
        image: club_icon,
        category: "club",
        type: "Casual",
        Server: "Japan",
        Region: "Japan",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },    
    {
        id_club: 7,
        club_name: "ijkl",
        image: club_icon,
        category: "club",
        type: "Casual",
        Server: "Japan",
        Region: "Japan",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },    
    {
        id_club: 8,
        club_name: "mnlo",
        image: club_icon,
        category: "club",
        type: "Semi-competitive",
        Server: "Japan",
        Region: "Japan",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id_club: 9,
        club_name: "pqrs",
        image: club_icon,
        category: "club",
        type: "Semi-competitive",
        Server: "Japan",
        Region: "Japan",
        isSlot: true,
        ContactMe: "081546216542",
        rating: 4,
        description: "",
    },
]

export const footerLinks = [
    {
        question: "Quick Links",
        links: [
            { text: "Home", url: "#" },
            { text: "Club", url: "#" },
            { text: "Friend", url: "#" },
            { text: "Contact Us", url: "#" },
            { text: "FAQs", url: "/about" },
        ]
    },
    {
        question: "Follow Us",
        links: [
            { text: "Instagram", url: "#" },
            { text: "Twitter", url: "#" },
            { text: "Facebook", url: "#" },
            { text: "Youtube", url: "#" },
        ]
    },
    {
        question: "Need help?",
        links: [
            { text: "Delivery Information", url: "#" },
            { text: "Return & Refund Policy", url: "#" },
            { text: "Payment Methods", url: "#" },
            { text: "Track your Order", url: "#" },
            { text: "Contact Us", url: "#" },
        ]
    },
]


export const resolveProfileImage = (profileImageName) => {

    console.log('profileImage:', player?.profileImage);
    console.log('resolvedSrc:', resolveProfileImage(player?.profileImage));

    return (
        profileImages[profileImageName] ||
        students.find((s) => s.student_name === profileImageName)?.student_image ||
        profileImages["default1"]
    );
};

export const FAQs = [
        {
            id: 1,
            question: "Do I need to register with email and password?",
            answer: "No. All you need to do is enter your Friend Code and Nickname from the game."
        },
        {
            id: 2,
            question: "Is my data secure?",
            answer: "Yes. This website does not store any personal data. Your Friend Code and Nickname are used only for display purposes and are not shared with third parties."
        },
        {
            id: 3,
            question: "Can I edit my profile later?",
            answer: "Yes, You just need to click the 'Account' button in the navbar, and you can edit your profile information."
        },
        {
            id: 4,
            question: "What is an Assistant?",
            answer: "A borrowed student is a student that you allow other to use in various modes, such as Total Assault & Grand Assault, Joint Firing Drill, conquest, or Final Restriction rls.."
        },
        {
            id: 5,
            question: "I want to change the student displayed, can I?",
            answer: "Sure. You can change the student displayed in your profile by going to the 'Account' page and selecting a different student from your list of borrowed students."
        },
        {
            id: 6,
            question: "What is a player rating system?",
            answer: "This system allows users to rate each other based on their experience with a player. Ratings are given in stars, with 1 star being the lowest and 5 stars being the highest. This helps other users gauge the reliability and skill level of a player."
        },
        {
            id: 7,
            question: "How do I rate a player?",
            answer: "Go to the player's profile and click 'Give Your Rating'. You can select a rating from 1 to 5 stars based on your experience with that player. Your rating will be saved and displayed on their profile."
        },
        {
            id: 8,
            question: "Can I rate my own profile?",
            answer: "No, you cannot rate your own profile. The rating system is designed to allow users to rate others based on their interactions and experiences."
        },
        {
            id: 9,
            question: "Can I see who gave me a rating?",
            answer: "No, the rating system is anonymous. You can see the average rating and total number of ratings, but you won't know who rated you."
        },
        {
            id: 10,
            question: "Is this website official from Nexon?",
            answer: "No. It's a fan-made website created by the community. It is not affiliated with or endorsed by Nexon in any way."
        },
        {
            id: 11,
            question: "I have more questions, how can I contact you?",
            answer: "Please contact us via our or email us at"
        },
    ]
