<template>
  <div class="container">
      <div class="inner-container">
          <table class="inner-table">
                <thead>
                    <tr>
                        <th>At Least</th>
                        <th>Less Than</th>
                        <th>Surcharge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="FuelSurcharge in FuelSurchargeData" :key="FuelSurcharge">
                        <td>{{FuelSurcharge.AtLeast}}</td>
                        <td>{{FuelSurcharge.LessThan}}</td>
                        <td>{{FuelSurcharge.Surcharge}}</td>
                    </tr>
                </tbody>
          </table>
          <div class="text-container">
                <h2>Fuel Surcharges</h2>
                    <p>The fuel surcharge percentage for NJLS courier services is subject to monthly adjustment based on a rounded
                         average of the retail price of gasoline – all grades, in the Central Atlantic region, as published by the
                          U.S. Energy Information Administration.
                    </p>
                <p>
                    Fuel surcharge percentages and associated trigger points are subject to change without notice. If the fuel surcharge
                     rises above 14.00% or there are changes to the trigger points, the table above will be updated.
                    <br>
                     Fuel surcharge is assessed on basic monthly rates, as well as per-item charges, priority surcharges, weight surcharges, 
                     same day rates and out-of-state package rates. Light trucking jobs are subject to a separate fuel surcharge. For more 
                     information on light trucking jobs and their fuel surcharge, please contact us.
                    <br>
                     Fuel Surcharge Updates
                    <br>
                    Changes to the fuel surcharges will be applied effective the first day of each month and will be reflected on your 
                    invoice. Information on the fuel surcharge for each month will be promptly posted on this Web site.
                </p>
          </div>
      </div>
  </div>
</template>

<script>
import FuelSurchargeData from '/FuelSurcharge.json'
export default {
    data(){
        return{
            FuelSurchargeData
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
        width: 45%;
        margin: 2.5%;
        padding: 10px;
        text-align: left;
        border-radius: 15px;
        background-color: #fff;
        filter: drop-shadow(15px 10px #f4b204);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .inner-table{
        width: 35%;
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