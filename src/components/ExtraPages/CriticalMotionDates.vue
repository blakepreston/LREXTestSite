<template>
  <div class="container">
      <div class="inner-container">
          <table class="inner-table">
                <thead>
                    <tr>
                        <th>Motion Date</th>
                        <th>Moving Papers file & serve by</th>
                        <th>Opposing Papers or Cross Motion file & serve by</th>
                        <th>Reply Papers file & serve by</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="CriticalMotion in CriticalMotionData" :key="CriticalMotion">
                        <td>{{CriticalMotion.MotionDate}}</td>
                        <td>{{CriticalMotion.MovingPapers}}</td>
                        <td>{{CriticalMotion.OpposingPaper}}</td>
                        <td>{{CriticalMotion.ReplyPapers}}</td>
                    </tr>
                </tbody>
          </table>
          <div class="text-container">
                <h2>1:6-3. Filing and Service of motions and Cross-Motions</h2>
                    <p>(a) Motions Generally. Other than an ex parte motion and except as otherwise provided by R. 4:46-1 
                    (summary judgment) and R. 5:5-4(c) (post judgment motions), a notice of motion shall be filed and 
                    served not later than 16 days before the specified return date unless otherwise provided by court order, 
                    which may be applied for ex parte. Thus, for example, if the return date of the motion is a Friday, 
                    the motion must be filed and served not later than the Wednesday, 16 days prior. If a motion is supported 
                    by affidavit or certification, the affidavit or certification shall be filed and served with the motion.
                    Except as provided by R. 4:49-1(b) (motion for new trial), any opposing affidavits, certifications or objections 
                    filed pursuant to R. 1:6-2 shall be filed and served not later than 8 days before the return date unless the 
                    court relaxes that time. Thus, for example, if the return date is on a Friday, any response must be filed and 
                    served no later than Thursday of the prior week. Reply papers responding to opposing affidavits or certifications 
                    shall be filed and served not later than 4 days before the return date unless the court otherwise orders. Thus, for 
                    example, such papers must be filed and served on Monday for a return date of the following Friday. No other papers 
                    may be filed without leave of court.
                    </p>
                <h2>1:3-1. Computation of Time</h2>
                <p>
                    In computing any period of time fixed by rule or court order, the day of the act or event from which the designated 
                    period begins to run is not to be included. The last day of the period so computed is to be included, unless it is a 
                    Saturday, Sunday or legal holiday, in which event the period runs until the end of the next day which is neither a 
                    Saturday, Sunday nor legal holiday. In computing a period of time of less than 7 days, Saturday, Sunday and legal 
                    holidays shall be excluded.
                </p>
          </div>
      </div>
  </div>
</template>

<script>
import CriticalMotionData from '/CriticalMotionDates.json'
export default {
    data(){
        return{
            CriticalMotionData
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
        text-align: center;
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