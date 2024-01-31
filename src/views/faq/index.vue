<!-- FAQ -->
<template>
    <div style="width:80%;padding-bottom: 40%;border: 2px solid #D5D5D5;border-radius: 20px;background-color: #EAEAEA;position: relative">
        <div style="display: flex;flex: 1;width: 100%;height: 100%;position: absolute;">
            <div style="display: flex;flex-direction: column;width:100%;height: 100%;">
                <div style="margin-left: 24px;margin-top:24px;color: #FF678D;font-weight: bolder;font-size: 36px;display: flex;align-items: flex-start;">F.A.Q.</div>
                <div class="faq-div" ref="faqDiv">
                  <div class="faq-item-section" style="position: relative" v-for="(item,index) in faqList" :key="index" @mouseenter.stop="svgMouseEnter" @mouseleave.stop="svgMouseLeave" >
                    <div class="faq-item"  style=""   @click="faqItemClick(index)">
                      <div class="faqAccordion_card__label-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="723.55" height="63.712" viewBox="0 0 723.55 63.712" style="filter:none;">
                          <path d="M730.075,12.38H21.635a6.558,6.558,0,0,0-6.555,6.555v33.17a6.554,6.554,0,0,0,6.555,6.555H56.221a4.423,4.423,0,0,1,3.147,1.3L71.561,72.171A6.553,6.553,0,0,0,76.2,74.092H675.508a6.553,6.553,0,0,0,4.641-1.921l12.193-12.213a4.423,4.423,0,0,1,3.147-1.3h34.586a6.553,6.553,0,0,0,6.555-6.555V18.935A6.558,6.558,0,0,0,730.075,12.38Z"
                                transform="translate(-14.08 -11.38)"
                                fill="#FFFFFF"
                                stroke="#D5D5D5"
                                stroke-width="2"
                                style="stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255);"
                          ></path>
                        </svg>
                      </div>
                      <div class="faqAccordion_card__label-content" >
                        <span>.{{index + 1 < 10 ? "0" + (index + 1) : index + 1}}</span>
                        <p>{{item.title}}</p>
                        <div class="accordionPlus" style="translate: none; rotate: none; scale: none; transform-origin: 10.9062px 9.72656px; transform: translate(0px, 0px);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24.519" height="21.856" viewBox="0 0 24.519 21.856">
                            <g transform="translate(-17.36 -19.09)">
                              <path class="accordionPlus-hexagon" d="M41.879,29.906v-.081c0-.034-.007-.061-.007-.095s-.007-.061-.007-.095a.2.2,0,0,0-.014-.061c-.007-.041-.014-.081-.02-.128,0-.014-.007-.02-.007-.034a2.806,2.806,0,0,0-.155-.514,2.437,2.437,0,0,0-.176-.352l-1.115-1.906h0L36.8,20.53a2.837,2.837,0,0,0-.6-.723,2.652,2.652,0,0,0-.419-.3,2.954,2.954,0,0,0-.466-.223,3.166,3.166,0,0,0-.757-.176c-.088-.007-.176-.014-.264-.014H24.952a2.882,2.882,0,0,0-1.751.595,2.449,2.449,0,0,0-.284.243,3.071,3.071,0,0,0-.466.595l-3.576,6.111h0l-1.115,1.913a2.019,2.019,0,0,0-.135.27c-.041.088-.074.169-.108.257a3.343,3.343,0,0,0-.1.372,3.23,3.23,0,0,0-.054.568,1.771,1.771,0,0,0,.007.189,3.619,3.619,0,0,0,.047.379,2.964,2.964,0,0,0,.338.9l1.115,1.913h0l2.326,3.982,1.251,2.136h0a2.9,2.9,0,0,0,2.5,1.433h9.336a2.745,2.745,0,0,0,.7-.088,2.872,2.872,0,0,0,1.683-1.176c.014-.014.034-.027.041-.041l.074-.128L40.358,33.4h0L41.474,31.5a2.324,2.324,0,0,0,.169-.345h0a2.8,2.8,0,0,0,.189-.7c0-.014.007-.027.007-.041a.479.479,0,0,0,.007-.095.447.447,0,0,0,.007-.095v-.189A.27.27,0,0,0,41.879,29.906Zm-1.832.73-1.115,1.906-.014.02-.014.02v.007l-3.529,6.037-.074.108a1.224,1.224,0,0,1-1.007.541H24.952a1.249,1.249,0,0,1-1.061-.608v-.007l-.007-.007-.014-.02-1.23-2.1L20.5,32.847h0l-.176-.3-1.115-1.913a1.244,1.244,0,0,1-.169-.622,1.219,1.219,0,0,1,.169-.615l1.1-1.886.189-.3v-.034l3.4-5.807a1.234,1.234,0,0,1,1.061-.608h9.336a1.24,1.24,0,0,1,1.061.608l3.556,6.077.014.02.014.02L40.054,29.4a1.263,1.263,0,0,1,.169.622A1.343,1.343,0,0,1,40.047,30.636Z" transform="translate(0)" fill="#FF678D"></path>
                              <g class="accordionPlus-icon" fill="#FF678D">
                                <path d="M33.905,30.36l.007-3.029a5.053,5.053,0,0,0-2.015,0v3.231a1.078,1.078,0,0,1-1.068,1.082H27.591a5.458,5.458,0,0,0-.1,1,4.8,4.8,0,0,0,.1,1.007l3.029.007a1.244,1.244,0,0,0,.892-.385l2.015-2.015A1.253,1.253,0,0,0,33.905,30.36Z" transform="translate(-3.282 -2.637)"></path>
                                <path d="M37.3,33.77a1.325,1.325,0,0,0-.913.379l-2.008,2.008a1.3,1.3,0,0,0-.379.906V40.1a5.054,5.054,0,0,0,2.015,0V36.859A1.081,1.081,0,0,1,37.1,35.785h3.231a5.586,5.586,0,0,0,.095-1.007,5.455,5.455,0,0,0-.095-1H37.3Z" transform="translate(-5.391 -4.756)"></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>

                    </div>
                    <div class="faqAccordion_card__content" style="">
                      <p>{{item.content}}</p>
                    </div>
                    <div class="faqAccordion_card-footer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="389.471" height="10.239" viewBox="0 0 389.471 10.239">
                        <g transform="translate(-1149.333 12653.666)">
                          <path class="faqAccordion_card-footerExtensionLine" d="M177.414,212.044h10.3a2.279,2.279,0,0,0,.622-.071,1.906,1.906,0,0,0,.531-.264l6.825-6.6a1.793,1.793,0,0,1,.533-.365,2.7,2.7,0,0,1,.714-.165l356.543-.075a2.484,2.484,0,0,1,.611.2,1.457,1.457,0,0,1,.42.35l5.986,6.25a3.371,3.371,0,0,0,.91.548,3.513,3.513,0,0,0,1.06.184h4.416" transform="translate(971.92 -12856.473)" fill="none" stroke="#FF678D" stroke-width="2"></path><path class="faqAccordion_card-footerExtension" d="M404.028,31.71H36.53l4.535-4.541a3.14,3.14,0,0,1,2.241-.929H397.894a3.14,3.14,0,0,1,2.241.929Z" transform="matrix(1,0,0,1,1126.47205,-12679.90625)" fill="#FF678D" data-svg-origin="220.2790069580078 26.23997688293457" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
            </div>
            <div style="width: 40%">

            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        data: ()=> ({
            currentClickIndex: -1,
            faqList:[
                {
                  title:"What is Ether?",
                  content:"Ether is a luxury brand that creates whatever we desire ranging from merchandise, collectibles and even eventually our own manga and anime. We use blockchain technology to create new and exciting experiences within the physical and digital realm. Ether is a brand shaped by the people, for the people. We believe in hand-made quality work and will never compromise on quality."
                },
                {
                  title:"Is Ether Eco-Friendly despite using blockchain technology?",
                  content:"Ether is dedicated to combating climate change through using a portion of our profits to assist in environmental sustainability. We intend to be completely renewable by 2025. Further details will be shared at a later time."
                },
                {
                  title:"Who is Hushi?",
                  content: "Hoshi is the Ether brand's mascot! You will be seeing her, along with Ether's main characters, featured on artworks and posts across all our social media. Hoshi is a character within the existing Ether collection (#1630). All characters from the collection have a chance to be featured on our social media and website. ."
                },
                {
                  title:"Who are the main character of the Ether story?",
                  content: "There are currently four main characters; Sei, Murasaki, Altair, and Cain. Similar to Hoshi, these characters exist within the collection. The main characters were a collaborative effort between the founder and three members from our community."
                },
                {
                  title:"What is the Creator Fund?",
                  content:"The Creator Fund incentivizes people to use, expand, and build on their Ether IP. Bi-monthly there will be up to three people chosen to be granted a portion of the Creator Fund. More information can be found on the Creator Fund page."
                },
                {
                  title:"How can I reach out for a potential collabortion?",
                  content:"For any inquiries or pitches, please contact us at collab@ether.site."
                },
                {
                  title:"How can I become part of the Ether team?",
                  content:"The team is always on the lookout for new talent and individuals to help represent and push the brand. However, there are currently no open positions. Keep an eye out for open positions in the future!"

                },
                {
                  title:"How can I request permission to license or use my Ether IP?",
                  content: "For all requests and inquiries regarding licensing and the use of your Ether character , please contact us at licensing@ether.site. In the future we will release a user-friendly page on our website to further explain how to license your Ether character."

                },
            ]
        }),
        mounted() {
        },
      methods:{
        svgMouseEnter(event) {
          let currentElement = event.target;
          let bg = currentElement.getElementsByClassName("faqAccordion_card__label-bg");
          bg[0].firstElementChild.style="filter: drop-shadow(rgba(255,103,141,0.376) 0px 0px 4px);";

        },
        svgMouseLeave(event) {
          let currentElement = event.target;
          let bg = currentElement.getElementsByClassName("faqAccordion_card__label-bg");
          bg[0].firstElementChild.style="filter:none;";
        },
        faqItemClick(index) {
          let currentElement = this.$refs.faqDiv.children[index];
          let bg = currentElement.getElementsByClassName("faqAccordion_card__label-bg");
          let contentElement = currentElement.getElementsByClassName("faqAccordion_card__content");
          let footerElement = currentElement.getElementsByClassName("faqAccordion_card-footer");
          let faqItem = currentElement.getElementsByClassName("faq-item");
          let accordionPlusIcon = currentElement.getElementsByClassName("accordionPlus-icon");
          let accordionPlusHexgon = currentElement.getElementsByClassName("accordionPlus-hexagon");
          if(this.currentClickIndex == index) {
              bg[0].firstElementChild.firstElementChild.style="stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255);";
              contentElement[0].style="height: 0px";
              this.currentClickIndex = -1;
              faqItem[0].style.color = "";
              footerElement[0].style.display = "none";
              accordionPlusIcon[0].setAttribute("fill","#FF678D");
              accordionPlusHexgon[0].setAttribute("fill","#FF678D");
          }else{
              if(this.currentClickIndex != -1) {
                let oldElement = this.$refs.faqDiv.children[this.currentClickIndex];
                let oldBg = oldElement.getElementsByClassName("faqAccordion_card__label-bg");
                let oldContentElement = oldElement.getElementsByClassName("faqAccordion_card__content");
                let oldFooterElement = oldElement.getElementsByClassName("faqAccordion_card-footer");
                let oldFaqItem = oldElement.getElementsByClassName("faq-item");
                let oldAccordionPlusIcon = oldElement.getElementsByClassName("accordionPlus-icon");
                let oldAccordionPlusHexgon = oldElement.getElementsByClassName("accordionPlus-hexagon");
                oldBg[0].firstElementChild.firstElementChild.style="stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255);";
                oldContentElement[0].style="height: 0px";
                oldFaqItem[0].style.color = "";
                oldFooterElement[0].style.display = "none";
                oldAccordionPlusIcon[0].setAttribute("fill","#FF678D");
                oldAccordionPlusHexgon[0].setAttribute("fill","#FF678D");
              }
              this.currentClickIndex = index;
              bg[0].firstElementChild.firstElementChild.style="stroke: rgb(255, 103, 141); fill: rgb(255, 103, 141);";
              contentElement[0].style="display:block;height: auto; border-color: rgb(255, 103, 141);";
              faqItem[0].style.color = "#FFFFFF";
              footerElement[0].style.display = "block";
              accordionPlusIcon[0].setAttribute("fill","#FFFFFF");
              accordionPlusHexgon[0].setAttribute("fill","#FFFFFF");
          }
        }
      }
    }
</script>

<style>

svg {
  width: 100%;
  height: auto;
}
.faqAccordion_card__content {
  display: none;
  height: 0;
  width: calc(95% - 4px);
  margin-top: -3rem;
  margin-left: 4px;
  overflow: hidden;
  z-index: 10;
  background-color: #FFFFFF;
  color: #4e4e4e;
  border: 2px solid #D5D5D5;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  -webkit-clip-path: polygon(0 0,100% 0,100% 100%,75% 100%,74% 98%,27% 98%,26% 100%,0 100%);
  clip-path: polygon(0 0,100% 0,100% 100%,75% 100%,74% 98%,27% 98%,26% 100%,0 100%);
}
.faqAccordion_card-footer {
  display: none;
  position: absolute;
  bottom: 15px;
  height: 0;
  right: calc(50% + 10px);
  width: calc((95% - 4px) / 2);
  transform: translate(50%);
}
.faqAccordion_card__content p {
  padding: 3rem 3.5rem 1.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
.faqAccordion_card__label-content span {
  position: absolute;
  top: 8%;
  left: 2%;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.faqAccordion_card__label-content p {
  position: absolute;
  top: 24%;
  width: 80%;
  left: 50%;
  transform: translate(-50%,0);
  text-align: center;
  font-size: .875rem;
  line-height: 1.25rem;
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏超出容器范围的内容 */
  text-overflow: ellipsis; /* 使用省略号表示被省略的内容 */
}

.faqAccordion_card__label-content .accordionPlus {
  position: absolute;
  top: 15%;
  right: 1.5%;
  height: 40%;
}
.faqAccordion_card__label-content {
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.75rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  color: var(--primaryColor);
  z-index:2;
}
  .faqAccordion_card__label-bg {
    width:100%;
    height:100%;
    z-index:1
  }

  .faq-item {
    cursor: pointer;
    margin-top: 1.5rem;
    margin-left: 4px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    display:flex;
    color: #FF678D;
    height: auto;
    min-height:3rem;
    width:95%;
    position: relative;
  }
  .faq-item-section:first-child .faq-item{
    margin-top: 4px;
  }

/* 自定义滚动条样式 */
.faq-div {
  overflow-y: scroll;
  flex: 1;
  margin:24px;
  height: 100%;
}

.faq-div::-webkit-scrollbar {/* 滚动条整体样式 */
  width: 10px;     /* 高宽分别对应横竖滚动条的尺寸 */
  height: 10px;
  background-color: #9f9f9e;
  border-radius: 10px;
}

.faq-div::-webkit-scrollbar-thumb {/* 滚动条里面小方块 */
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
  background-color: #4E4E4E !important;
}
</style>