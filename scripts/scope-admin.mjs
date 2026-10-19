import fs from 'node:fs';
import postcss from 'postcss';
const source = fs.readFileSync('components/admin/admin.original.css','utf8');
const root = postcss.parse(source);
root.walkRules(rule => {
  if (rule.parent?.type==='atrule' && /keyframes$/i.test(rule.parent.name)) return;
  rule.selectors = rule.selectors.map(selector => {
    let s = selector.replace(/:root\b/g,'.willclub-admin-shell').replace(/(^|\s)(html|body)(?=\b|\[|\.|:)/g,'$1.willclub-admin-shell');
    s = s.replace(/\.willclub-admin-shell\s+\.willclub-admin-shell/g,'.willclub-admin-shell');
    return s.includes('.willclub-admin-shell') ? s : '.willclub-admin-shell ' + s;
  });
});
root.walkDecls(decl => {decl.value=decl.value.replace(/url\((['"]?)assets\//g,'url($1/admin-assets/');});
fs.writeFileSync('components/admin/admin.css',root.toString());
console.log('관리자 전용 CSS 범위 격리 완료');
