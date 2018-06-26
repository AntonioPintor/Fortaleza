/**
 *  jQuery.observeHashChange (Version: 1.0)
 *
 *  https://finnlabs.github.com/jquery.observehashchange/
 *
 *  Copyright (c) 2009, Gregor Schmidt, Finn GmbH
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a
 *  copy of this software and associated documentation files (the "Software"),
 *  to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *  DEALINGS IN THE SOFTWARE.
 **/
(function(e){function i(){return"onhashchange"in window}function s(){t=document.location.hash,window.onhashchange=o}function o(n,r){var i=t;t=document.location.hash,e(window).trigger("jQuery.hashchange",{before:i,after:t})}function u(e){t==null&&(t=document.location.hash),n!=null&&clearInterval(n),r!=e.interval&&(n=setInterval(a,e.interval),r=e.interval)}function a(){if(t!=document.location.hash){var n=t;t=document.location.hash,e(window).trigger("jQuery.hashchange",{before:n,after:t})}}e.fn.hashchange=function(t){return e(window).bind("jQuery.hashchange",t),this},e.observeHashChange=function(t){var n=e.extend({},e.observeHashChange.defaults,t);i()?s():u(n)};var t=null,n=null,r=0;e.observeHashChange.defaults={interval:500},e.observeHashChange()})(jQuery),function(){window.Imprint=function(){function e(){this.tumblrApiKey="CSR1yqOefOoCj4GAWtTe6twY4kaA6vDt0y59hWXhtFZSaMmluO",$("body").hasClass("development")?(this.blogName="imprint-yaron.tumblr.com",this.imprintURL="https://imprint.dev"):(this.blogName=document.location.host,this.imprintURL="https://literistic.com"),this.replaceWithExcerpt($("[data-excerpt], [data-excerpt-length]")),this.removeExcerpt($("[data-remove-excerpt]")),this.dropCap($("[data-add-drop-cap]")),this.detectArchive(),this.displayPostFooter();try{console.log("Imprint: For Writers. For Writing.")}catch(e){}}return e.prototype.formatDate=function(e){var t,n,r,i;return i=e.split(" ")[0].split("-"),n=["January","February","March","April","May","June","July","August","September","October","November","December"],r=parseInt(i[1].replace(/^[0]+/g,""))-1,t=i[2].replace(/^0/,""),""+n[r]+"&nbsp;"+t+",&nbsp;"+i[0]},e.prototype.generatePostsURL=function(e,t){return"https://api.tumblr.com/v2/blog/"+this.blogName+"/posts?api_key="+this.tumblrApiKey+"&offset="+e+"&limit="+t+"&reblog_info=true&callback&jsonp=?"},e.prototype.detectArchive=function(){var e=this;return $("body").hasClass("loading")&&($("body").hasClass("index")&&this.loadArchivePosts(),$(window).hashchange(function(){return e.toggleArchiveDisplay()})),this.toggleArchiveDisplay()},e.prototype.displayPostFooter=function(){var e,t=this;if($("body").hasClass("post"))return e="https://api.tumblr.com/v2/blog/"+this.blogName+"/posts/text?api_key="+this.tumblrApiKey+"&offset=0&limit=4&callback&jsonp=?",$.getJSON(e,function(e){var n;return n=$(e.response.posts).map(function(e,n){return $("body").hasClass("post-"+n.id)?null:t.constructTextPostHTML(n)}),$(".recent-posts-container").append(n.slice(0,3)),t.replaceWithExcerpt($("[data-excerpt-length]"))})},e.prototype.toggleArchiveDisplay=function(){return document.location.hash==="#archive"?$("body").hasClass("loading")?($("body").addClass("archive").removeClass("index"),this.loadArchivePosts(),$(window).scrollTop(0)):location.reload():($("body").removeClass("archive"),$("body").hasClass("post")||$("body").addClass("index"),$("body").removeClass("loading"))},e.prototype.loadArchivePosts=function(){var e,t=this;return e=$("#archive-section .archive-container > .archive-item").length,$.getJSON(this.generatePostsURL(e,20),function(n){var r,i;r=n.response.blog.posts,i=n.response.posts,t.addPostsToArchives(i),$("body").removeClass("loading");if(r>e)return t.loadArchivePosts()})},e.prototype.addPostsToArchives=function(e){var t,n,r=this;return t=$(e).map(function(e,t){return r.constructTextPostHTML(t)}).get(),$("#archive-section .archive-container").append(t),$("#index .archive-container").find(".archive-item.text").length<10&&(n=10-$("#index .archive-container").find(".archive-item.text").length,$("#index .archive-container").append(t.slice(0,n))),this.replaceWithExcerpt($("[data-excerpt-length]"))},e.prototype.constructTextPostHTML=function(e){return console.log('Not defined. Themes should override "Imprint.constructTextPostHTML".')},e.prototype.initializeEmailSubscription=function(){return $("#subscribe-form").ajaxForm({url:""+this.imprintURL+"/subscribers.js?callback=?",type:"GET",dataType:"jsonp",beforeSubmit:this.beforeEmailSubscriptionSubmit,success:this.succesfulEmailSubscriptionSubmit})},e.prototype.beforeEmailSubscriptionSubmit=function(){var e;return e=$("#subscribe-form").validate({onkeyup:!1,onclick:!1,onfocusout:!1,submitHandler:function(){return $("form input[type=submit]").attr("disabled","disabled").text("Submitting...")},invalidHandler:function(){return $("form input[type=submit]").removeAttr("disabled").text("Submit")},messages:{EMAIL:{required:"You must include your email address."}}}),e.form()},e.prototype.succesfulEmailSubscriptionSubmit=function(e){$("#subscribe-modal #response").empty();if(e.result==="success")return $("#subscribe-form")[0].reset(),$("#subscribe-form").hide(),$("#subscribe-modal #response").html("Thank you for subscribing."),$("#subscribe-modal .modal-footer").show()},e.prototype.generatePageview=function(){var e;return e=$("#blog-name").val(),$.ajax({url:""+this.imprintURL+"/pageview/"+e+".js?callback=?",type:"GET",dataType:"jsonp"})},e.prototype.dropCap=function(e){var t,n,r,i,s,o,u,a;a=[];for(o=0,u=e.length;o<u;o++)t=e[o],s=$(t).find("p:first"),s.length?(r=$(s).html(),n=r.substring(0,1),$(s).text().match(/\. /g)?i=$(s).text().match(/\. /g).length:i=0,n.match(/[a-zA-Z]/)&&i>1?(r="<span class='drop-cap'>"+n+"</span>"+r.slice(1),a.push($(s).html(r))):a.push(void 0)):a.push(void 0);return a},e.prototype.removeExcerpt=function(e){var t,n,r,i,s,o;o=[];for(i=0,s=e.length;i<s;i++)n=e[i],r=$(n).html().search(/<!-- more -->/),r>0?(r+=13,t=$(n).html(),$(n).html(t.substring(r,t.length)),$(n).find("p:empty").remove(),o.push(!0)):o.push(!1);return o},e.prototype.replaceWithExcerpt=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p;p=[];for(c=0,h=e.length;c<h;c++)n=e[c],o=$(n).html().search(/<!-- more -->/),u=$(n).data("excerpt-length"),f=!1,o>0?t=$(n).html().substring(0,o):$(n).find("p.read_more_container").length?(t=$(n).find("p.read_more_container").prevAll().text(),$(n).find("p.read_more_container").remove()):$(n).data("excerpt-length")?(t=$(n).text(),t.length>u&&(a=!0,t=""+t.slice(0,u+1||9e9)+"&nbsp;.&nbsp;.&nbsp;.")):$(n).remove(),t?($(n).data("excerpt-strip-html")==="true"&&(t=$("<div />").html(t).text()),$(n).data("excerpt-element")?(r=$("<"+$(n).data("excerpt-element")+" />"),r.html(t)):(r=t.match(/<p/)?$("<div />"):$("<p />"),r.html(t)),l=$(n).data("excerpt-wrap"),r.prepend(l).append(l),a&&$(n).data("read-more-link")&&(s=$(n).data("read-more-link"),s.match(/<p/)?r=""+$(r).prop("outerHTML")+s:r.append(s)),$(n).html(r),p.push(function(){var e,t;t=[];for(i=e=1;e<=3;i=++e)t.push($(n).find("*:empty").remove());return t}())):p.push(void 0);return p},e}()}.call(this);
