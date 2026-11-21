
{
const MOD=/*DATA*/;
const H=[
{id:'jaw',first:'Jacques-Adrien',sur:'Wignier',dt:'mort en 1778',yr:'† 1778',sex:'m',role:"Capitaine d'infanterie, contrôleur des guerres",arms:'wignier',
 bio:"Il achète la terre de Fransu après 1737, accole le nom de la seigneurie au sien et agrandit le château. Il est inhumé en 1778 dans l'église paroissiale. C'est le point de départ de la lignée qui mène aux Douville de Franssu."},
{id:'ajw',par:'jaw',first:'Adrien-Jacques',sur:'Wignier de Franssu',dt:"mort en l'an VIII (vers 1800)",yr:'† v. 1800',sex:'m',role:'Major de dragons, régiment de Soubise',arms:'wignier',sp:[{name:'Jeanne de Croquoison',m:'1772'}],
 bio:"Fils de Jacques-Adrien. En 1791, des révolutionnaires saccagent et incendient en partie le château. À sa mort, il laisse ses biens à sa sœur Marie-Charlotte."},
{id:'mcw',par:'jaw',first:'Marie-Charlotte',sur:'Wignier',sex:'f',role:'Héritière de Fransu',sp:[{name:'Gabriel Blondin de Bazonville'}],
 bio:"Sœur d'Adrien-Jacques et veuve de Gabriel Blondin de Bazonville. Elle hérite du domaine à la mort de son frère : c'est par elle que Fransu passe à la future famille Douville de Franssu."},
{id:'abb',par:'mcw',first:'Adrienne',sur:'Blondin de Bazonville',dt:'lègue Fransu en 1808',sex:'f',role:'Transmet le domaine',sp:[{name:'Alain-Nicolas Douville',role:'capitaine au régiment de Bourgogne'}],
 bio:"Fille de Marie-Charlotte et de Gabriel. Elle épouse Alain-Nicolas Douville, capitaine au régiment de Bourgogne : le nom Douville entre ici dans l'histoire de Fransu. En 1808, elle lègue le domaine à son petit-fils Armand."},
{id:'x1',par:'abb',u:1,first:'Nicolas Alire',sur:'Douville',sex:'m',role:"Père d'Armand",sp:[{name:'Adrienne Blondin'}],
 bio:"Père d'Armand, le premier Douville de Franssu. Le blog Remus80 fait d'Adrienne Blondin de Bazonville la grand-mère d'Armand : Nicolas Alire est donc placé ici comme son fils, à vérifier, d'autant que sa femme porte aussi le nom d'Adrienne Blondin."},
{id:'adf',par:'x1',first:'Armand',sur:'Douville de Franssu',b:'1793',d:'1845',sex:'m',role:'Écuyer, officier de cavalerie',arms:'douville',sp:[{name:'Marie Henriette Aline Blondin de Brutelette',m:'1822'}],
 bio:"Il reçoit Fransu en 1808, à 15 ans, par legs de sa grand-mère Adrienne. Écuyer et officier de cavalerie, il devient aide de camp du prince de Croÿ. Premier à porter le nom Douville de Franssu."},
{id:'hadf',par:'adf',first:'Henri-Armand',sur:'Douville de Franssu',b:'1823',d:'1870',sex:'m',role:'Fondateur, Société des agriculteurs de France',arms:'douville',sp:[{name:'Marie Adrienne Douville de Saint Alire',m:'1849'}],
 bio:"Appelé Armand dans les registres. Membre fondateur de la Société des agriculteurs de France, il fait réaliser des aménagements au château sous le Second Empire."},
{id:'jul',par:'hadf',first:'Juliette',sur:'Douville de Franssu',b:'1852',d:'1929',sex:'f',sp:[{name:'Arthur de Rocquigny du Fayel',m:'1873'}]},
{id:'a56',par:'hadf',first:'Armand',sur:'Douville de Franssu',b:'1856',d:'1904',sex:'m',arms:'douville',sp:[{name:"Alix Jeanne Clotilde d'Hespel",m:'1879'}],bio:"Père de Michel et grand-père de toutes les branches actuelles."},
{id:'eli',par:'hadf',first:'Elisabeth',sur:'Douville de Franssu',b:'1858',d:'1927',sex:'f'},
{id:'hdf',par:'a56',first:'Henri',sur:'Douville de Franssu',b:'1880',d:'1906',sex:'m',role:"Lieutenant, 1er régiment d'infanterie coloniale",arms:'douville',
 bio:"Frère aîné de Michel. Lieutenant au 1er régiment d'infanterie coloniale, mort au combat en Mauritanie en 1906. Un tableau commémoratif lui est consacré."},
{id:'cla',par:'a56',first:'Claire',sur:'Douville de Franssu',b:'1882',sex:'f'},
{id:'mlo',par:'a56',first:'Marie-Louise',sur:'Douville de Franssu',b:'1883',d:'1954',sex:'f',sp:[{name:'Georges van Oost',m:'1923'}]},
{id:'cec',par:'a56',first:'Cécile',sur:'Douville de Franssu',b:'1885',d:'1991',sex:'f'},
{id:'jea',par:'a56',first:'Jean',sur:'Douville de Franssu',b:'1888',sex:'m'},
{id:'mau',par:'a56',first:'Maurice',sur:'Douville de Franssu',b:'1894',d:'1915',sex:'m'},
{id:'hel',par:'a56',first:'Hélène',sur:'Douville de Franssu',b:'1896',sex:'f'},
{id:'yvo',par:'a56',first:'Yvonne',sur:'Douville de Franssu',b:'1898',d:'1984',sex:'f',sp:[{name:'Gérard de Belloy de Saint-Liénard'}],bio:"Elle épouse un Belloy de Saint-Liénard, comme son frère Michel qui épouse Agnès."},
{id:'cha',par:'adf',first:'Charles',sur:'Douville de Franssu',b:'1831',d:'1895',sex:'m',sp:[{name:'Léonie Marie Grenet de Florimond',m:'1873'}],bio:"Fils cadet d'Armand, à l'origine d'une branche cousine."},
{id:'the',par:'cha',first:'Thérèse',sur:'Douville de Franssu',b:'1875',d:'1903',sex:'f',sp:[{name:'Paul de Perrinelle Dumay',m:'1899'}]},
{id:'mad',par:'cha',first:'Madeleine',sur:'Douville de Franssu',b:'1878',d:'1903',sex:'f'},
{id:'pie',par:'cha',first:'Pierre',sur:'Douville de Franssu',b:'1881',sex:'m',sp:[{name:'Elisabeth Grenet de Florimond',m:'1910'}]},
{id:'hub',par:'pie',first:'Hubert',sur:'Douville de Franssu',b:'1911',d:'1980',sex:'m',sp:[{name:'Denise Texier',m:'1945'}]},
{id:'m13',par:'pie',first:'Maurice',sur:'Douville de Franssu',b:'1913',d:'2000',sex:'m',sp:[{name:'Jeanne Macé de Gastines',m:'1942'}]},
{id:'ca45',par:'m13',first:'Catherine',sur:'Douville de Franssu',b:'1945',d:'1967',sex:'f'},
{id:'mh48',par:'m13',first:'Marie-Hélène',sur:'Douville de Franssu',b:'1948',d:'1971',sex:'f',sp:[{name:'Antoine de La Gorce',m:'1971'}]},
{id:'jac',par:'cha',first:'Jacques',sur:'Douville de Franssu',b:'1883',d:'1949',sex:'m',sp:[{name:'Gisèle de Gantès',m:'1913'}]},
{id:'ber',par:'jac',first:'Bernard',sur:'Douville de Franssu',b:'1914',d:'1918',sex:'m'},
{id:'mag',par:'jac',first:'Magdeleine',sur:'Douville de Franssu',b:'1917',d:'2013',sex:'f',sp:[{name:'Jean Fleury',m:'1943'}]},
{id:'ala',par:'jac',first:'Alain',sur:'Douville de Franssu',b:'1921',d:'2007',sex:'m',sp:[{name:"Fabienne d'Halluin"}]},
{id:'agn',par:'jac',first:'Agnès',sur:'Douville de Franssu',b:'1924',d:'2015',sex:'f',sp:[{name:"Robert d'Halluin"}]}];
const HM=[
{id:'jbm',first:'Jean-Baptiste',sur:'de Mac Mahon',b:'1715',d:'1775',sex:'m',role:"1er marquis d'Éguilly",sp:[{name:'Charlotte Le Belin',b:'1716',d:'1798'}],
 bio:"Médecin né en Irlande, il s'établit à Autun, en Bourgogne, et devient Français en 1749. Le titre de marquis d'Éguilly lui est concédé en 1763. C'est le premier Mac Mahon de France et le grand-père du maréchal."},
{id:'mfm',par:'jbm',first:'Maurice-François',sur:'de Mac Mahon',b:'1754',d:'1831',sex:'m',role:'Comte de Mac Mahon, baron de Sully',nk:17,sp:[{name:'Pélagie de Riquet de Caraman'}],
 bio:"Comte de Mac Mahon et de Charnay, baron de Sully et maréchal de camp. Avec Pélagie de Riquet de Caraman, il a 17 enfants, dont le futur maréchal, l'avant-dernier."},
{id:'pmm',par:'mfm',first:'Patrice',sur:'de Mac Mahon',b:'13/06/1808',d:'1893',sex:'m',role:'Maréchal de France, président de la République',
 sp:[{name:'Élisabeth de La Croix de Castries',b:'13/02/1834',d:'20/02/1900'}],
 bio:"Né au château de Sully, près d'Autun. Maréchal de France, il est fait 1er duc de Magenta, puis devient président de la République de 1873 à 1879. Les républicains le poussent à la démission en janvier 1879."},
{id:'amm',par:'pmm',first:'Patrice',sur:'de Mac Mahon',b:'10/06/1855',d:'23/05/1927',sex:'m',role:'2e duc de Magenta',sp:[{name:"Marguerite d'Orléans",role:'Princesse de France'}],
 bio:"Fils aîné du maréchal et militaire, il hérite du titre de duc de Magenta en 1893."},
{id:'m3',par:'amm',first:'Maurice',sur:'de Mac Mahon',b:'1903',d:'1954',sex:'m',role:'3e duc de Magenta',sp:[{name:'Marguerite de Riquet de Caraman-Chimay',b:'29/12/1913',d:'01/09/1990',m:'1937'}]},
{id:'m4',par:'m3',first:'Philippe',sur:'de Mac Mahon',b:'15/05/1938',d:'30/01/2002',sex:'m',role:'4e duc de Magenta'},
{id:'m5',par:'m4',u:1,first:'Maurice',sur:'de Mac Mahon',b:'30/03/1992',sex:'m',role:'5e duc de Magenta',bio:"Actuel duc de Magenta et marquis de Mac Mahon. Placé ici comme fils de Philippe, à vérifier."},
{id:'emm',par:'pmm',first:'Emmanuel',sur:'de Mac Mahon',b:'1859',d:'1930',sex:'m',role:'Comte de Mac Mahon, général de brigade',sp:[{name:'Marguerite Chinot de Fromessent',b:'1872',d:'1960',m:'1892'}],
 bio:"Fils cadet du maréchal, général de brigade."},
{id:'mam',par:'emm',first:'Marthe',sur:'de Mac Mahon',b:'1893',d:'1980',sex:'f',nk:5,sp:[{name:'Guy de Miribel',m:'1914'}]},
{id:'eug',par:'pmm',first:'Eugène',sur:'de Mac Mahon',b:'1857',d:'1907',sex:'m',bio:"Deuxième fils du maréchal."},
{id:'mgm',par:'pmm',first:'Marie',sur:'de Mac Mahon',b:'1863',d:'1954',sex:'f',role:'Comtesse de Piennes',sp:[{name:"Eugène d'Halwin de Piennes"}],bio:"Fille cadette du maréchal."},
{id:'bmm',par:'emm',first:'Brigitte',sur:'de Mac Mahon',b:'06/07/1900',d:'05/01/1991',sex:'f',role:'Petite-fille du maréchal',nk:6,
 sp:[{name:'Antoine de Touchet',b:'03/02/1886',d:'06/06/1944',m:'1925',role:'Marquis de Touchet, résistant',
  bio:"Chef d'escadron de cavalerie, fils de Gabriel, marquis de Touchet (1851-1936), et d'Alexandrine Hennecart. Retraité en 1940, il entre dans l'Organisation de résistance de l'armée puis, dès 1941, dans le réseau de renseignement Alliance, comme informateur pour le secteur de Caen. Commandant en second de l'ORA du Calvados, il est exécuté sans jugement par les Allemands à la prison de Caen le 6 juin 1944, jour du Débarquement. Mort pour la France."}],
 bio:"Fille du général Emmanuel de Mac Mahon et petite-fille du maréchal. Elle épouse Antoine de Touchet le 11 mars 1925 à Paris : ils ont six enfants."},
{id:'cdt',par:'bmm',first:'Chantal',sur:'de Touchet',b:'20/10/1936',sex:'f',role:'Arrière-petite-fille du maréchal',
 bio:"Chantal Marie Françoise de Touchet, fille d'Antoine de Touchet et de Brigitte de Mac Mahon. Elle épouse Xavier Douville de Franssu, ce qui relie la lignée Mac Mahon à la famille Franssu : tous ses descendants descendent aussi du maréchal."},
{id:'adt',par:'bmm',first:'Antoinette',sur:'de Touchet',sex:'f'},
{id:'fdt',par:'bmm',first:'France',sur:'de Touchet',sex:'f',sp:[{name:'Gaëtan Galouzeau de Villepin'}],bio:"France Marguerite Marie de Touchet."},
{id:'x3',par:'bmm',ph:1,first:'Trois autres enfants',sur:'de Touchet',sex:'u',bio:"Antoine et Brigitte ont eu six enfants : il manque trois prénoms."},
{id:'ptm',par:'emm',first:'Patrick',sur:'de Mac Mahon',b:'1902',d:'1932',sex:'m',role:"Chevalier de la Légion d'honneur",bio:"Tué dans l'embuscade d'Oum Tounsi, sans descendance."}];
const BIO={p1:"Michel et Agnès se marient en 1920. Le couple est représenté sur un vitrail de l'église Saint-Ferréol de Fransu. Leurs sept enfants, Maurice, Angilbert, Adrienne, Christian, Paule, Philippe et Xavier, sont à l'origine de toutes les branches actuelles.",
 p197:"Président fondateur de l'association Lions Amitié Villages, qui mène des projets de développement dans des villages d'Afrique francophone. Chevalier de la Légion d'honneur, il a aussi été décoré par le Gabon, le Sénégal et la Côte d'Ivoire."};
const SEIG=[
{y:'vers 1350',t:'Enguerran Quiéret',b:"Amiral de France et capitaine de Rue, il possède le premier château-fort de Fransu."},
{y:'ensuite',t:'Les Beauvoir',b:"La seigneurie leur passe par alliance."},
{y:'XVe siècle',t:'Les Bournonville',b:"Nouvelle alliance. Une pierre tombale d'Adélaïde de Bournonville est mentionnée."},
{y:'fin XVIe',t:'Les Mailly',b:"La seigneurie entre dans la maison de Mailly."},
{y:'vers 1670',t:'Monchy et Sailly',b:"Marie-Claude de Monchy et son époux Charles, marquis de Sailly, font construire un premier bâtiment."},
{y:'1737',t:'Vente du domaine',b:"Le couple se sépare de Fransu, acquis ensuite par Jacques-Adrien Wignier."}];
const AZ='#1f4aa8',GU='#b3262e',OR='#e2b33a',AR='#f4f5f8';
let cid=0;
const star=(x,y,r)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.42:r;s+=(x+rr*Math.cos(a)).toFixed(1)+','+(y+rr*Math.sin(a)).toFixed(1)+' '}return `<polygon points="${s}"/>`};
const tower=(x,y)=>`<g fill="${AR}"><rect x="${x-9}" y="${y-8}" width="18" height="22"/><rect x="${x-11}" y="${y-14}" width="5" height="7"/><rect x="${x-2.5}" y="${y-14}" width="5" height="7"/><rect x="${x+6}" y="${y-14}" width="5" height="7"/><rect x="${x-3}" y="${y+5}" width="6" height="9" fill="#5a1015"/></g>`;
function shield(k){
 const id='c'+(cid++),sh='M5 5H95V62Q95 100 50 116Q5 100 5 62Z';let g='';
 if(k==='douville')g=`<rect x="0" y="0" width="50" height="60" fill="${AZ}"/><rect x="50" y="0" width="50" height="60" fill="${GU}"/><rect x="0" y="60" width="50" height="60" fill="${GU}"/><rect x="50" y="60" width="50" height="60" fill="${AZ}"/><g fill="${OR}">${star(19,22,6)}${star(36,22,6)}${star(27.5,40,6)}${star(64,79,6)}${star(81,79,6)}${star(72.5,96,5.5)}</g>${tower(75,32)}${tower(28,86)}`;
 if(k==='wignier')g=`<rect width="100" height="120" fill="${AZ}"/><polygon points="8,86 50,44 92,86 92,70 50,28 8,70" fill="${OR}"/><g fill="${AR}">${star(25,24,8)}${star(75,24,8)}${star(50,90,9)}</g>`;
 if(k==='belloy')g=`<rect width="100" height="120" fill="${AR}"/><g fill="${GU}"><rect y="20" width="100" height="15"/><rect y="50" width="100" height="15"/><rect y="80" width="100" height="15"/></g>`;
 return `<svg viewBox="0 0 100 120" role="img" aria-label="Armes ${k}"><defs><clipPath id="${id}"><path d="${sh}"/></clipPath></defs><g clip-path="url(#${id})">${g}</g><path d="${sh}" fill="none" stroke="${OR}" stroke-width="3"/></svg>`}
const ARMS=[{k:'douville',t:'Douville de Franssu',b:"Écartelé : aux 1 et 4 d'azur à trois étoiles d'or, aux 2 et 3 de gueules à la tour d'argent."},
{k:'wignier',t:'Wignier de Fransu',b:"D'azur au chevron d'or, accompagné de trois étoiles d'argent."},
{k:'belloy',t:'Du Belloy de Saint-Liénard',b:"D'argent à trois fasces de gueules. Armes de la famille d'Agnès, épouse de Michel."}];

/* ---------- données ---------- */
const D=[...H,...HM,...MOD];const by={};D.forEach(p=>{by[p.id]=p;p.kids=[];p.sp=p.sp||[]});
by.p1.par='a56';by.p1.arms='douville';
D.forEach(p=>{if(p.par)by[p.par].kids.push(p.id)});
const yN=p=>+(((p.b||p.dt||'').match(/\d{4}/)||[0])[0]);['a56','adf','hadf','cha','jac','pie'].forEach(k=>by[k].kids.sort((a,b)=>yN(by[a])-yN(by[b])));
Object.entries(BIO).forEach(([k,v])=>by[k].bio=v);['jaw','ajw','mcw','abb'].forEach(k=>by[k].manual=1);
by.p197.sp[0].pid='cdt';by.p2.first='Maurice-Henry';
by.p1.kids.forEach(k=>{const c=by[k],f=c.first;if(f==='Adrienne')c.sp[0].m='1951';if(f==='Christian'){c.sp[0].m='1950';c.sp[0].name='Christiane Lucas de Lestanville'}if(f==='Philippe'){c.sp[0].m='1950';c.sp[0].name='Éliane Delacroix'}});
D.forEach(p=>{if(p.first==='Baudoin')p.first='Baudouin'});by.p197.sp[0].name='Chantal de Touchet';by.cdt.sp=[{name:'Xavier Douville de Franssu',pid:'p197'}];by.cdt.kids2=by.p197.kids.slice();by.p197.kids.forEach(k=>by[k].par2='cdt');
const ancM=id=>{const m=new Map([[id,0]]),q=[id];while(q.length){const x=q.shift(),p=by[x];[p.par,p.par2].forEach(y=>{if(y&&!m.has(y)){m.set(y,m.get(x)+1);q.push(y)}})}return m};
const treeOf=id=>chain(id).at(-1)==='jbm'?'M':'F';
const de=n=>/^[aeiouéèh]/i.test(n)?"d'"+n:'de '+n;
const yr=s=>s?(s.match(/\d{4}/)||[''])[0]:'';

const UPD={
hdf:{b:'1880',d:'25/10/1906',bio:"Frère aîné de Michel. Lieutenant au 1er régiment d'infanterie coloniale en Mauritanie, il codirige avec le lieutenant Andrieux une reconnaissance envoyée le 24 octobre 1906 vers Niémélane, dans le Tagant, pour arrêter une bande venue de l'Adrar. Le lendemain matin, le détachement tombe sur des forces bien plus nombreuses, armées de fusils à tir rapide : les deux lieutenants sont tués avec deux sergents et quinze tirailleurs. Ce combat est cité dans le rapport officiel de 1906 et dans le journal de marche de la colonne Gouraud. Un tableau commémoratif lui est consacré."},
mau:{d:'1915',role:'Sous-lieutenant, 32e régiment d’infanterie',bio:"Petit frère de Michel. Sous-lieutenant au 32e régiment d'infanterie, il est tué à l'ennemi près d'Ypres en 1915. Décoré de la Légion d'honneur et de la croix de guerre, il est ramené à Fransu et inhumé dans la chapelle familiale de l'église Saint-Ferréol."},
jea:{b:'20/04/1888',d:'21/11/1969',role:'Prêtre jésuite',bio:"Né à Fransu, il entre chez les Jésuites en octobre 1905, à 17 ans. Il est ordonné prêtre le 1er juillet 1917 et prononce ses derniers vœux en 1921."},
p51:{role:'Exploitant agricole, résistant',bio:"En 1940, à 18 ans, il est exploitant agricole à Fransu. Résistant isolé dans la Somme, il s'engage ensuite dans l'Armée d'Afrique."},
adf:{bio:"Il hérite de Fransu en 1809 par sa grand-mère Adrienne. Écuyer et officier de cavalerie, il devient aide de camp du prince de Croÿ. Entre 1833 et 1845, il transforme le château : il ajoute l'avant-corps central en pierre, qui porte encore les initiales D et F, et construit un pavillon symétrique au pavillon sud. Premier à porter le nom Douville de Franssu."},
hadf:{bio:"Appelé Armand dans les registres. Agriculteur et membre fondateur de la Société des agriculteurs de France. Sous le Second Empire, il agrandit la ferme et les communs et avance la grille d'honneur sur la rue. En 1862, il fait dessiner une distillerie d'alcool de betterave et une huilerie à vapeur : la distillerie tourne dès 1863 avant d'être détruite en 1869. La chapelle familiale de l'église est construite en 1859."},
emm:{bio:"Fils cadet du maréchal, passé par Saint-Cyr (1878-1880). Colonel du 155e régiment d'infanterie, il le mène à la mobilisation d'août 1914, puis devient général de brigade le 27 octobre 1914. Commandeur de la Légion d'honneur, croix de guerre avec deux palmes. Il épouse Marguerite de Chinot de Fromessent le 2 juin 1892 à Paris."},
mam:{bio:"Fille aînée du général Emmanuel de Mac Mahon. Elle épouse Guy de Miribel le 19 février 1914 à Paris. Son mari publie en 1932 les Mémoires du maréchal, ses souvenirs d'Algérie."},
ptm:{first:'Patrick',d:'18/08/1932',role:'Lieutenant méhariste, chevalier de la Légion d’honneur',bio:"Petit-fils du maréchal et oncle de Chantal. Lieutenant, il commande en août 1932 un détachement de méharistes français, sénégalais et mauritaniens en Mauritanie. À Oum Tounsi, un puits à environ 80 km au nord de Nouakchott, la colonne tombe dans une embuscade de quelque 120 guerriers Oulad Delim : il y est tué avec une partie de ses hommes. La presse du monde entier relaie sa mort. Un monument est élevé sur place."},
pmm:{d:'17/10/1893',bio:"Né le 13 juin 1808 au château de Sully, près d'Autun, avant-dernier des 17 enfants. Il fait l'essentiel de sa carrière en Algérie, se distingue au siège de Constantine et en Crimée. Le 4 juin 1859, il remporte la bataille de Magenta en Italie : Napoléon III le fait maréchal de France et duc de Magenta. Gouverneur général de l'Algérie de 1864 à 1870, blessé en 1870, il est élu président de la République le 24 mai 1873 et le reste jusqu'au 30 janvier 1879. Il meurt au château de la Forêt, à Montcresson (Loiret)."},
mfm:{bio:"Comte de Mac Mahon et de Charnay, baron de Sully, lieutenant général. Il épouse Pélagie de Riquet de Caraman (1769-1819), descendante de Pierre-Paul Riquet, le constructeur du canal du Midi. Ils ont 17 enfants, dont le futur maréchal."},
jbm:{bio:"La famille descend de seigneurs irlandais du comté de Clare, issus d'un roi d'Irlande, qui perdent leurs terres au XVIIe siècle. Jean-Baptiste, médecin, s'installe à Autun, en Bourgogne, devient Français en 1749 et reçoit le titre de marquis d'Éguilly en 1763. C'est le premier Mac Mahon de France."},
p1:{bio:"Michel et Agnès se marient en 1920. Leur couple est représenté sur un vitrail de l'église Saint-Ferréol de Fransu, et les armes des Franssu et des Belloy de Saint-Liénard figurent dans les vitraux. Leurs sept enfants, Maurice, Angilbert, Adrienne, Christian, Paule, Philippe et Xavier, sont à l'origine de toutes les branches actuelles."}};
Object.entries(UPD).forEach(([k,v])=>Object.assign(by[k],v));
by.mfm.sp[0].b='1769';by.mfm.sp[0].d='1819';by.pmm.sp[0].m='1854';by.emm.sp[0].m='1892';by.mam.sp[0]={name:'Guy de Miribel',b:'1885',d:'1981',m:'1914',role:'Comte de Miribel'};
D.forEach(p=>{if(!p.yr){const b=yr(p.b),d=p.d==='oui'?'†':yr(p.d);p.yr=b&&d?b+'-'+d:b?b:d?'† '+d:''}
 (p.notes||[]).forEach(n=>p.role=n==='Prêtre'?'Prêtre':p.sex==='f'?'Religieuse':'En religion')});
const ME0=D.find(p=>p.first==='Augustin'&&p.b==='28/01/1999');
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const name=p=>(p.first+' '+(p.sur||'')).trim();
const g=(p,m,f,u)=>p.sex==='f'?f:p.sex==='m'?m:(u||m+'(e)');
const isD=s=>/^\d\d\/\d\d\/\d{4}$/.test(s||'');
const chain=id=>{const a=[];let p=by[id];while(p){a.push(p.id);p=p.par?by[p.par]:null}return a};
const desc=id=>by[id].kids.reduce((n,k)=>n+1+desc(k),0);
const keyP=k=>{const [id,s]=k.split('~');return {p:by[id],s:s!==undefined?by[id].sp[+s]:null}};
const nameK=k=>{const {p,s}=keyP(k);return s?s.name:name(p)};

/* ---------- liens de parenté ---------- */
let MEID='p1',CC=null;
function lab(p,a,b){
 const T=w=>(p.sex==='f'&&!/^[aeiouéèh]/i.test(w)?'ta ':'ton ')+w;const art=q=>'';
 const G=(m,f)=>g(p,m,f,m.replace(/(.)$/,'$1')+'(e)');
 const ARR=n=>'arrière-'.repeat(n);
 if(a===0&&b===0)return['toi'];
 if(a===0){if(b===1)return[g(p,'ton fils','ta fille','ton enfant')];return[T(ARR(b-2)+g(p,'petit-fils','petite-fille','petit-enfant'))]}
 if(b===0&&a>5)return['ton ancêtre à '+a+' générations'];if(a===0&&b>5)return[g(p,'ton descendant','ta descendante')+' à '+b+' générations'];
 if(b===0){if(a===1)return[g(p,'ton père','ta mère','ton parent')];return[T(ARR(a-2)+g(p,'grand-père','grand-mère','grand-parent'))]}
 if(a===1&&b===1)return[g(p,'ton frère','ta sœur','ton frère ou ta sœur')];
 if(a===1)return[T((b===2?'':ARR(b-3)+(p.sex==='f'?'petite-':'petit-'))+g(p,'neveu','nièce','neveu ou nièce'))];
 if(b===1)return[T((a===2?'':ARR(a-3)+'grand-')+g(p,'oncle','tante','oncle ou tante'))];
 const cz=(n,q)=>n===2?g(q,'cousin germain','cousine germaine','cousin(e) germain(e)'):n===3?g(q,'cousin issu de germain','cousine issue de germain','cousin(e) issu(e) de germain'):g(q,'cousin','cousine','cousin(e)')+' au '+(n-1)+'e degré';
 
 if(a===b)return[T(cz(a,p))];
 if(b===a+1)return[g(p,'le fils','la fille',"l'enfant")+' de ton cousin '+(a===2?'germain':'issu de germain'),'(cousins à une génération d\'écart)'];
 if(a===b+1)return[T(cz(b,p))+' de '+(by[[by[MEID].par,by[MEID].par2].find(y=>y&&ancM(y).has(CC))]?.sex==='f'?'ta mère':'ton père')];
 return[g(p,'un cousin éloigné','une cousine éloignée','un parent éloigné'),'('+Math.abs(a-b)+' générations d\'écart)']}
function relation(meK,oK){
 const M=keyP(meK),O=keyP(oK);
 if(meK===oK)return 'C’est toi.';
 if(M.s&&!O.s&&M.p===O.p)return name(O.p)+' est ton conjoint.';
 if(O.s&&!M.s&&M.p===O.p)return O.s.name+' est '+(M.p.sex==='f'?'ton conjoint.':'ta conjointe.');
 MEID=M.p.id;const ma=ancM(M.p.id),mb=ancM(O.p.id);let c=null,best=1e9;mb.forEach((b,x)=>{if(ma.has(x)&&ma.get(x)+b<best){best=ma.get(x)+b;c=x}});
 if(!c)return '';CC=c;
 const a=ma.get(c),b=mb.get(c);
 if(a===0&&b===0&&M.s&&O.s)return '';
 const pseudo=O.s?{sex:'u'}:O.p;let [t,ex]=lab(pseudo,a,b);
 let s=O.s?`${O.s.name} est en couple avec ${name(O.p)}, qui est ${lab(O.p,a,b)[0]}.`:`${name(O.p)} est ${t}${ex?' '+ex:''}.`;
 if(M.s)s='Par alliance (via '+name(M.p)+') : '+s;
 const cp=by[c];if(a>1&&b>1)s+=` Ancêtre commun : ${cp.ph?'une génération non nommée':name(cp)}.`;
 return s.replace(/\bton (ton|ta) /,'$1 ')}

