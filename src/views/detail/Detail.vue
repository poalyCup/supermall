<template>
  <div>
    <div class="fill"></div>
    <detail-nav-bar class="detail-nav"/>
    <detail-swiper :topImgs="topImages"></detail-swiper>
    Detail
    {{this.$route.query.iid}}
    <button @click="cons">fff</button>

    <ul>
      <li>li1</li>
      <li>li2</li>
      <li>li3</li>
      <li>li4</li>
      <li>li5</li>
      <li>li6</li>
      <li>li7</li>
      <li>li8</li>
      <li>li9</li>
      <li>li10</li>
      <li>li11</li>
      <li>li12</li>
      <li>li13</li>
      <li>li14</li>
      <li>li15</li>
      <li>li16</li>
      <li>li17</li>
      <li>li18</li>
      <li>li19</li>
      <li>li20</li>
      <li>li21</li>
      <li>li22</li>
      <li>li23</li>
      <li>li24</li>
      <li>li25</li>
      <li>li26</li>
      <li>li27</li>
      <li>li28</li>
      <li>li29</li>
      <li>li30</li>
      <li>li31</li>
      <li>li32</li>
      <li>li33</li>
      <li>li34</li>
      <li>li35</li>
      <li>li36</li>
      <li>li37</li>
      <li>li38</li>
      <li>li39</li>
      <li>li40</li>
      <li>li41</li>
      <li>li42</li>
      <li>li43</li>
      <li>li44</li>
      <li>li45</li>
      <li>li46</li>
      <li>li47</li>
      <li>li48</li>
      <li>li49</li>
      <li>li50</li>
      <li>li51</li>
      <li>li52</li>
      <li>li53</li>
      <li>li54</li>
      <li>li55</li>
      <li>li56</li>
      <li>li57</li>
      <li>li58</li>
      <li>li59</li>
      <li>li60</li>
      <li>li61</li>
      <li>li62</li>
      <li>li63</li>
      <li>li64</li>
      <li>li65</li>
      <li>li66</li>
      <li>li67</li>
      <li>li68</li>
      <li>li69</li>
      <li>li70</li>
      <li>li71</li>
      <li>li72</li>
      <li>li73</li>
      <li>li74</li>
      <li>li75</li>
      <li>li76</li>
      <li>li77</li>
      <li>li78</li>
      <li>li79</li>
      <li>li80</li>
      <li>li81</li>
      <li>li82</li>
      <li>li83</li>
      <li>li84</li>
      <li>li85</li>
      <li>li86</li>
      <li>li87</li>
      <li>li88</li>
      <li>li89</li>
      <li>li90</li>
      <li>li91</li>
      <li>li92</li>
      <li>li93</li>
      <li>li94</li>
      <li>li95</li>
      <li>li96</li>
      <li>li97</li>
      <li>li98</li>
      <li>li99</li>
      <li>li100</li>
    </ul>
  </div>
</template>

<script>
  import DetailNavBar from './childrenComponents/DetailNavBar'
  import DetailSwiper from './childrenComponents/DetailSwiper'
  import {getDetail} from 'network/detail'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return{
        iid: null,
        result: null,
        topImages: []
      }
    },
    methods: {
      cons(){
        console.log(this.iid)
      }
    },
    created(){
      this.iid = this.$route.query.iid

      getDetail(this.iid).then( res => {
        this.result = res.result
        // console.log(res)

        this.topImages.push(...this.result.itemInfo.topImages)
      })
    }
  }
</script>

<style scoped>
  .fill{
    height: 41px;
  }

  .detail-nav{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>