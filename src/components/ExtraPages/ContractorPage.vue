<template>
<div class="main-container">
    <div class="inner-container">
        <h2 class="styled-header">The Opportunity</h2>
        <p>We have several territories available for contractors in NJ, DE, and PA. 
            Territory work is Monday-Saturday. Typical day is 8 hours but there are 
            no guaranteed hours. Hours fluctuate based on volume.
        </p>

        <h2>Who are we?</h2>
        <p>We are a delivery enterprise with 100 years of shipping experience and we 
            want you to join us. We aren’t simply looking for drivers, we are looking 
            for business partners. We are growing rapidly, with roots in New Jersey, 
            our vision is to reach across the east coast together. Our philosophy is 
            simple. When small businesses come together, we are stronger.
        </p>

        <h2>How You are Paid</h2>
        <p>Dedicated Route Drivers are paid based on the assigned territory. 
            Drivers are paid by the stop and also receive mileage reimbursement for auto use.
        </p>

        <div class="list-container">
            <h2>What You Do</h2>
            <div class="inner-list-container">
                <ul>
                    <li>Deliver customer shipments accurately and timely. All Shipments are Next Day 
                        or Same Day. Priority Deliveries are shipments with customer scheduled delivery 
                        times.
                    </li>

                    <li>Collecting signatures and photos of deliveries – Many of customers are in 
                        regulated industries and require proof of delivery.
                    </li>

                    <li>Cold Storage and Specialty handling – All packages require care. We have temperature 
                        controlled products and special instructions deliveries.
                    </li>

                    <li>Lifting – Most of our packages are 5lbs or less but you may be required to deliver a 
                        package up to 25lbs.
                    </li>

                    <li>Pick Up – Our customers also schedule pickups. You are expected to arrive and secure pickups 
                        for return to one of our drop box or warehouse locations.
                    </li>

                    <li>97-98% on time and accurate performance expected.</li>
                </ul>
            </div>

            <h2>What You Need</h2>
            <p>To be considered, applicants must have:</p>
            <div class="inner-list-container">
                <ul>
                    <li>Registered Business</li>
                    <li>EIN Number</li>
                    <li>Reliable, clean, fuel-efficient transportation (you will be using your own vehicle)</li>
                    <li>Cargo vans are a plus</li>
                    <li>A neat appearance and professional demeanor</li>
                    <li>A clean valid license (CDL not required) – MVR CHECK WILL BE PERFORMED BEFORE EXECUTION OF THE CONTRACT AND PERIODICALLY THROUGHOUT THE DURATION OF THE CONTRACT</li>
                    <li>Commercial Auto Insurance – 300K Combined Single Limit. PLEASE DO NOT CONTACT US IF YOU DO NOT HAVE OR ARE NOT WILLING TO OBTAIN COMMERCIAL VEHICLE INSURANCE.</li>
                    <li>HIPPA training preferred</li>
                    <li>We support women and minority owned businesses</li>
                    <li>Applicants must be at least 21 years old</li>
                </ul>
            </div>
        </div>

        <h2>What We Do</h2>
        <p>Our talented <strong>Sales</strong> team brings new customers to us. As customers join our network our routes expand and so do you. Many of our current business owners manage multiple territories and drivers. <br>
            Our <strong>Contractor Care</strong> team supports you every mile of the way. We know every delivery isn’t easy. Our trained agents are able to help you with difficult deliveries, contacting clients, and correcting bad addresses. They are there to help you avoid repeat trips and unnecessary mileage. <br>
            <strong>Technology</strong> – Our app guides you efficiently to each destination while our highspeed scanner with camera built in makes delivery stops quick and easy. <br>
            <strong>Warehouse Locations</strong> – We have multiple locations in Union, Cherry Hill, Englewood Cliffs, and Manasquan. We shuttle work to our delivery areas making it easier for our contractors to launch each day. <br>
        </p>

        <h2 class="final-styled-header">Come join our mission.</h2>
        
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