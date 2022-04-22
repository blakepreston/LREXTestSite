<template>
<div class="main-container">
    <div class="inner-container">
        <h2 class="styled-header">Privacy Policy</h2>
        <p>
            LREX has adopted a set of information management guidelines, 
            which serve as the basis for our customer and advertiser relationships. These guidelines 
            disclose the privacy policies, terms and conditions of use for the LREX Web site. Throughout 
            this document, the words, "Customer", "Subscriber", and "User" are used frequently and 
            interchangeably and all refer to You, the person, firm, company or other entity using the 
            LREX Website, its services or otherwise doing business with, or considering doing business 
            with, LREX. Please be advised that no employee or agent of LREX has the power, either express 
            or implied, to alter, amend, modify, remove relax or relieve from operation any policy, term 
            or condition set forth herein. All policies, terms and conditions are subject to change without 
            notice. All changes will be updated and posted on this page.
        </p>

        <h2>Protection of Customer Information</h2>
        <p>
            We understand the importance of privacy to our customers. We will not give or sell confidential or 
            personal information about our customer to any third party not affiliated with their transaction, 
            except as required by law or as necessary to provide services to the customer. We will, however, 
            share your information, as necessary, with certain strategic partners who help us to provide both 
            benefits and services to you. Some of the information collected by LREX are names, addresses, e-mail 
            addresses, credit card numbers and telephone numbers, and case information. We also collect telephone 
            numbers and e-mail addresses in the event that we have to contact the shipper, or the shipment 
            recipient or addressee, to resolve a question or provide shipment status information.
        </p>

        <h2>Shipment Information</h2>
        <p>
            Information, including Personal Information, provided as part of a shipping transaction represents a 
            record of that business transaction and cannot be altered after the transaction is complete. 
            Although we make reasonable efforts to limit access to our facilities and vehicles to authorized 
            personnel, we are not responsible for maintaining the confidentiality of information that is printed 
            and placed in plain view on a package or letter.
        </p>

        <h2>Security and Integrity of Information</h2>
        <p>
            We treat our data as assets that must be protected against loss and unauthorized access. We employ 
            information security techniques to appropriately protect confidential information from unauthorized 
            access by users inside and outside the company. Access to customer information is limited to those 
            employees who have a legitimate business need for that information.
            <br>
            We employ generally accepted information security techniques such as firewalls, access control procedures 
            and cryptography to appropriately protect confidential information from unauthorized access.
        </p>
        
        <h2>Retention of Customer Information</h2>
        <p>
            We retain information, including personal information, about customers as necessary for business purposes 
            and as required by government regulation. For example, we retain information about packages, including names 
            and addresses, so that we can provide proof of delivery information and to process claim requests. We 
            periodically dispose of records and delete information when required retention periods expire, but may also 
            archive information for future reference and research.
        </p>

        <h2>Links to Other Sites</h2>
        <p>
            LREX may provide links to external sites as a convenience to the user. The inclusion of any link does not 
            imply an endorsement of the external site company, its web site, or the products and services it promotes 
            and sells. We are not responsible for the privacy practices or the content of such web sites.
        </p>

        <h2>IP Addresses</h2>
        <p>
            LREX also logs IP addresses for systems administration and troubleshooting purposes. (Your IP address indicates 
            the location of your computer on the Internet.) We do not log IP addresses to track your session, nor do we link 
            IP addresses to anything personally identifiable. What does LREX.com do with the information it gathers and/or 
            tracks? Statistical Analysis LREX.com may perform statistical analyses of user behavior in order to measure interest 
            in the various areas of our site for product development purposes.
            <br>
            LREX also includes an address book that allows users to enter the names and addresses of the people to whom they frequently 
            ship packages or letters. Use of the address book is optional. It is provided as a convenience so that users will not have 
            to re-enter frequently used address information. The address information provided is stored in a secure manner on our systems. 
            While it is stored in the address book, we will carefully protect the confidentiality of this information. It will not be used 
            for any purpose other than the original intent (i.e. speeding up user shipping activities).
        </p>

        <h2>Anonymous Information</h2>
        <p>
            LREX may also gather anonymous information, which may be used by LREX. This is information which does not personally identify 
            you, but which may be helpful for improving the services we offer. Generally this information is collected through "traffic data"
             and may entail the use of "cookies," "IP addresses," or other numeric codes used to identify a computer.
        </p>

        <h2>E-Mail</h2>
        <p>
            Using the e-mail addresses provided at registration, we periodically send e-mails announcing enhancements to services offered by LREX. 
            We may also contact you regarding account status, changes to the subscriber agreement, and to confirm registration.
        </p>

        <h2>Data Security</h2>
        <p>
            To prevent unauthorized access, maintain data accuracy, and ensure the appropriate use of information, we have put in place appropriate
             physical, electronic, and managerial procedures to protect the information we collect online.
        </p>

        <h2>Communication with LREX Not Confidential</h2>
        <p>
            Because an attorney/client relationship is not created by use of LREX.com, any communication with LREX.com or its content providers does 
            not establish an attorney/client relationship and/or privilege.
        </p>

        <h2>Assent</h2>
        <p>
            Your continued use of this site signifies your assent to the LREX Privacy Policy. We reserve the right, at our discretion, to modify, add, or 
            remove portions of this policy at any time by posting the revised policy at the LREX Web Site. Please check this page periodically for changes.
        </p>

        <h2>Opting-Out, Corrections and Cancellations</h2>
        <p>
            Upon request, LREX will 
            <br>(a) remove you and your personal information from our Website user database, thereby canceling your registration; 
            <br>(b) correct personal information that you state is erroneous; or 
            <br>(c) permit you to "opt out" of further e-mail contact (excepting notification of major changes to the service) while still allowing access to the site. To request a correction, cancellation, or email-opt out please contact us by email at customerservice@lrex.com or by phone at (908) 686-7300.
        </p>
        
    </div>
</div>
</template>

<script>
export default {
    methods:{
        scrollToTop(){
            window.scrollTo(0,0);
        }
    },
    mounted(){
        this.scrollToTop();
    }
}
</script>

<style scoped>
    .main-container{
        margin-top: 10%;
        display: flex;
        justify-content: center;
    }

    .inner-container{
        width: 80%;
        text-align: left;
    }

    .inner-list-container{
        border-bottom: 1px solid #ffcccc;
    }

    .styled-header{
        color:#ffffff;
        background-color: #fe804d;
        text-align: center;
        padding-top: 2vw;
        padding-bottom: 2vw;
        width: 20%;
        border-radius: 200px;
        /* border-radius: 50% / 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0; */
    }

    .final-styled-header{
        color:#ffffff;
        background-color: #32ccfe;
        text-align: center;
        padding-top: 2vw;
        padding-bottom: 2vw;
        width: 20%;
        /* border-radius: 50% / 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0; */
        clip-path: polygon(15% 5%, 85% 5%, 100% 50%, 85% 95%, 15% 95%, 0% 50%);
    }

    @media screen and (max-width: 1000px) {
        .main-container{
            margin-top: 25%;
        }

        .inner-container{
            width: 90%;
        }

        .styled-header, .final-styled-header{
            width: 200px;
        }
    }
</style>