(function(){var e,t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};e=function(e){function t(){t.__super__.constructor.apply(this,arguments),this.setLeadPosts(),this.positionCoverImage()}return n(t,e),t.prototype.constructTextPostHTML=function(e){var t,n,r,i,s;return t=$("<article />").addClass("group "+e.type+" archive-item"),s="<a href='"+e.post_url+"'>"+e.title+"</a>",n=$("<div />",{"class":"excerpt","data-excerpt-length":"300","data-excerpt-strip-html":"true","data-read-more-link":"<p><a class='button' href='"+e.post_url+"'>Continue reading</p>"}),n.html(e.body),i=$("<h2 />").html(s),r=$("<p />").html(this.formatDate(e.date)).addClass("date"),t.append(i).append(r).append(n),t[0]},t.prototype.setLeadPosts=function(){var e,t;if(!$("body").hasClass("index"))return;return e=$("#index article:first .first-post:first"),$("#index ."+e.attr("id")).remove(),$("#index article:first .first-post:gt(0)").remove(),t=$("#index article:nth(1) div:first"),$("#index article."+t.attr("id")).remove(),$("#index article:nth(1) div:gt(0)").remove(),$("#index article:gt(2)").remove(),$("#index article:lt(2)").each(function(){if(!$(this).find("div").length)return $(this).remove()})},t.prototype.positionCoverImage=function(){var e;if(!$("body").hasClass("post"))return;e=$("article p:first-child > img:first");if(e.length)return e.prependTo(e.closest("div"))},t}(Imprint),jQuery(function(){return new e})}).call(this);
