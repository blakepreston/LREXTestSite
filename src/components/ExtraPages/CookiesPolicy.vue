<template>
<div class="main-container">
    <div class="inner-container">
        <h2 class="styled-header">Cookie Policy</h2>
        <p>
            LREX employs cookies to recognize you and your access privileges
             on certain sites, as well as to track site usage. Subscribers who do not accept
              cookies from the domain cannot access all areas of LREX web sites. For detailed 
              information about our use of cookies, please contact us, using our e-mail form.
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