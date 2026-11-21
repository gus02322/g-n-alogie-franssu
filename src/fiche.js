/* ---------- fiche ---------- */
function dline(p){const b=p.b,d=p.d;let s='';
 if(b)s+=g(p,'Né','Née')+(isD(b)?' le ':' en ')+b;
 if(d)s+=(s?', ':'')+(d==='oui'?g(p,'décédé','décédée'):g(p,'mort','morte')+(isD(d)?' le ':' en ')+d);
 return s?s+'.':''}
function bio(p){const par=p.par&&by[p.par];let t=[];
 if(p.bio)t.push(p.bio);
 if(par&&!par.ph&&!p.manual){const o=p.otherName||(par.sp[0]&&par.sp[0].name);t.push(`${g(p,'Fils','Fille','Enfant')} ${de(name(par))}${o?' et '+de(o):''}${p.otherName&&p.otherTxt==='1er mariage'?' (1er mariage)':''}.`)}
 const dl=dline(p);if(dl)t.push(dl);
 if(!p.manual&&p.sp.length&&!p.bio?.includes('épouse'))t.push(`${g(p,'Marié','Mariée','Marié(e)')} à ${p.sp.map(s=>s.name).join(' puis ')}${p.sp[0].m?' en '+p.sp[0].m:''}.`);
 const nk=p.nk||p.kids.length;if(nk&&!p.manual){const dd=desc(p.id);t.push(`${nk} enfant${nk>1?'s':''}${dd>nk?', '+dd+' descendants au total dans l’arbre':''}.`)}
 return t.join(' ')}
