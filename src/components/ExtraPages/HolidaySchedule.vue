<template>
  <div class="container">
      <div class="inner-container">
          <table class="inner-table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Holiday Schedule</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="HolidaySchedule in HolidayScheduleData" :key="HolidaySchedule">
                        <td>{{HolidaySchedule.Holiday}}</td>
                        <td>{{HolidaySchedule.Date}}</td>
                        <td>{{HolidaySchedule.ExtraInfo}}</td>
                        <td>{{HolidaySchedule.Services}}</td>
                    </tr>
                </tbody>
          </table>
          <div class="text-container">
                <h2>Holiday Schedule</h2>
                    <p>
                        All New Jersey Courts, State and Federal, are closed for regular business on the following legal holidays, 
                        unless otherwise noted. LREX will also be closed for office pickups and courthouse deliveries, unless otherwise 
                        noted. LREX Same Day is always available, 24/7/365. Call us at (908) 686-7300, Option 3.
                        <br>
                        For any emergent court matters requiring judicial intervention, go to the AOC Web site, Notices to the Bar and
                         search on "Emergent" for the most recent judge designation order and contact procedures.
                    </p>
                <p>
                    *LREX will have limited Next Day operations these days; priorities-only will be delivered; Basic Monthly contracted
                     clients who have advised us they are open will receive their office visit. LREX Next Day operations will close at 
                     approximately 1pm. LREX Service of Process operations will be open until 1pm.
                    <br>
                    LREX Same Day is always available, 365 days a year, 24 hours a day. When everyone else is closed, we're open for you. 
                    Call (908) 686-7300, option 3.
                </p>
          </div>
      </div>
  </div>
</template>

<script>
import HolidayScheduleData from '/HolidaySchedule.json'
export default {
    data(){
        return{
            HolidayScheduleData
        }
    },
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
    .container{
        width: 100%;
        margin-top: 10%;
        display: flex;
        justify-content: center;
    }

    .inner-container{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .text-container{
        width: 35%;
        margin: 2.5%;
        padding: 10px;
        text-align: left;
        border-radius: 15px;
        background-color: #fff;
        filter: drop-shadow(15px 10px #f4b204);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .inner-table{
        width: 50%;
        margin-left: 3.5%;
        margin-right: 3.5%;
        border-collapse: collapse;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-size: 0.9em;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        text-align: left;
    }

    .inner-table th:first-child{
        border-top-left-radius: 10px;
    }

    .inner-table th:last-child{
        border-top-right-radius: 10px;
    }

    .inner-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .inner-table tbody tr:last-of-type {
        border-bottom: 2px solid #32ccfe;
    }

    .inner-table th{
        background-color: #33f18a;
        color: #ffffff;
    }

    .inner-table th,
    .inner-table td{
        padding: 1.5%;
    }

    .inner-table tbody tr{
        border-bottom: 1px solid #dddddd;
    }

    @media screen and (max-width: 1000px) {
         .container{
             margin-top: 30%;
         }

        .inner-container{
            flex-direction: column;
        }

        .text-container{
            width: 90%;
        }

        .inner-table{
            width: 95%;
        }

        .inner-table th,
        .inner-table td{
            padding: 2.5%;
        }
    }
</style>