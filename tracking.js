/* Suivi publicitaire LGD Paris : Meta (Facebook / Instagram) et TikTok.
   Collez vos identifiants entre les guillemets ci-dessous, puis enregistrez.
   - Meta : Gestionnaire d'événements > votre pixel > « ID du jeu de données » (15 à 16 chiffres)
   - TikTok : TikTok Ads Manager > Outils > Événements > Web > votre pixel > « ID du pixel » (ex. CABC123...)
   Tant qu'un identifiant est vide, le pixel correspondant ne se charge pas. */
var LGD_META_PIXEL_ID = '1457563953171051';
var LGD_TIKTOK_PIXEL_ID = '';

/* Consentement cookies (CNIL) : les pixels ne se chargent qu'apres « Accepter ».
   Le choix est garde 6 mois dans le navigateur du visiteur. */
(function(){
  var KEY='lgd_consent_pub', MAX=182*24*3600*1000;
  if(!LGD_META_PIXEL_ID && !LGD_TIKTOK_PIXEL_ID) return;
  function read(){ try{ var v=JSON.parse(localStorage.getItem(KEY)||'null'); if(v && (Date.now()-v.t)<MAX) return v.c; }catch(e){} return null; }
  function save(c){ try{ localStorage.setItem(KEY, JSON.stringify({c:c,t:Date.now()})); }catch(e){} }
  var choice=read();
  if(choice==='oui'){ loadPixels(); return; }
  if(choice==='non') return;
  function banner(){
    if(document.getElementById('lgd-cookies')) return;
    var st=document.createElement('style');
    st.textContent='#lgd-cookies{position:fixed;left:12px;right:12px;bottom:12px;z-index:99999;max-width:560px;margin:0 auto;background:#003D46;color:#fff;border-radius:14px;padding:16px 18px;font:15px/1.45 Inter,Helvetica,Arial,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.35)}#lgd-cookies p{margin:0 0 12px}#lgd-cookies a{color:#FCBD30}#lgd-cookies .b{display:flex;gap:10px}#lgd-cookies button{flex:1;padding:11px 10px;border-radius:10px;font:700 15px Inter,Helvetica,Arial,sans-serif;cursor:pointer;border:2px solid #FCBD30}#lgd-cookies .ok{background:#FCBD30;color:#003D46}#lgd-cookies .no{background:transparent;color:#fff}';
    document.head.appendChild(st);
    var d=document.createElement('div'); d.id='lgd-cookies'; d.setAttribute('role','dialog'); d.setAttribute('aria-label','Cookies');
    d.innerHTML='<p>Nous utilisons des cookies de mesure publicitaire (Meta, TikTok) pour savoir quelles publicités vous ont amené ici. Vous pouvez accepter ou refuser, cela ne change rien à votre réservation. <a href="https://www.lgdparis.com/cookies/" target="_blank" rel="noopener">En savoir plus</a></p><div class="b"><button type="button" class="no">Refuser</button><button type="button" class="ok">Accepter</button></div>';
    document.body.appendChild(d);
    d.querySelector('.ok').onclick=function(){ save('oui'); d.remove(); loadPixels(); };
    d.querySelector('.no').onclick=function(){ save('non'); d.remove(); };
  }
  if(document.body) banner(); else document.addEventListener('DOMContentLoaded', banner);
})();

function loadPixels(){
  if(window.__lgdPixels) return; window.__lgdPixels=true;
  if(LGD_META_PIXEL_ID){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', LGD_META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
  if(LGD_TIKTOK_PIXEL_ID){
    !function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=r+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
      ttq.load(LGD_TIKTOK_PIXEL_ID);
      ttq.page();
    }(window, document, 'ttq');
  }
}
