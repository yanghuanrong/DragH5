/**
 * 此处的变量名对应组件名称
 * 如果是van的组件会选取van-后面的组件名称
 */

const fileTemplates = 
`<template>
    <div>
        <%_ element.forEach(function(item){ _%>
        <%- item %>
        <%_ }); _%>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>
`
const button = `<van-button<%-attrs%> ><%=text%></van-button>`
const tag = `<van-tag<%-attrs%> ><%=text%></van-tag>`
const row =
`<van-row<%-attrs%> >
        <%_ element.forEach(function(item){ _%>
        <%- item %>
        <%_ }); _%>
        </van-row>`

const col = 
`   <van-col<%-attrs%> >
        <%_ element.forEach(function(item){ _%>
            <%- item %>
        <%_ }); _%>
        </van-col>`

const Swiper = `
    <van-swipe :autoplay="<%= autoplay * 1000 %>" indicator-color="white">
        <%_ images.forEach(function(item){ _%>
            <van-swipe-item>
                <van-image :height="<%= height %>" fit="cover" src="<%- item %>" />
            </van-swipe-item>
        <%_ }); _%>
    </van-swipe>
`

export default {
    fileTemplates,
    button,
    tag,
    row,
    col,
    Swiper,
}
