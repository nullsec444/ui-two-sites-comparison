// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as l, o as u, r as d, t as f, u as p, v as m } from "./dist-Dgli2vvz.js";
var h = 148,
  g = 1,
  _ = 149,
  v = 150,
  y = 2,
  ee = 151,
  te = 3,
  ne = 4,
  re = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
  ie = 58,
  ae = 40,
  oe = 95,
  se = 91,
  ce = 45,
  le = 46,
  ue = 35,
  de = 37,
  fe = 38,
  pe = 92,
  me = 10,
  he = 42;
function ge(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 161;
}
function _e(e) {
  return e >= 48 && e <= 57;
}
function ve(e) {
  return _e(e) || e >= 97 && e <= 102 || e >= 65 && e <= 70;
}
var ye = (e, t, n) => (r, i) => {
    for (let a = !1, o = 0, s = 0;; s++) {
      let {
        next: c
      } = r;
      if (ge(c) || c == ce || c == oe || a && _e(c)) !a && (c != ce || s > 0) && (a = !0), o === s && c == ce && o++, r.advance();else if (c == pe && r.peek(1) != me) {
        if (r.advance(), ve(r.next)) {
          do r.advance(); while (ve(r.next));
          r.next == 32 && r.advance();
        } else r.next > -1 && r.advance();
        a = !0;
      } else {
        a && r.acceptToken(o == 2 && i.canShift(y) ? t : c == ae ? n : e);
        break;
      }
    }
  },
  be = new n(ye(_, y, v), {
    contextual: !0
  }),
  xe = new n(ye(ee, te, ne), {
    contextual: !0
  }),
  Se = new n(e => {
    if (re.includes(e.peek(-1))) {
      let {
        next: t
      } = e;
      (ge(t) || t == oe || t == ue || t == le || t == he || t == se || t == ie && ge(e.peek(1)) || t == ce || t == fe) && e.acceptToken(h);
    }
  }),
  Ce = new n(e => {
    if (!re.includes(e.peek(-1))) {
      let {
        next: t
      } = e;
      if (t == de && (e.advance(), e.acceptToken(g)), ge(t)) {
        do e.advance(); while (ge(e.next) || _e(e.next));
        e.acceptToken(g);
      }
    }
  }),
  we = s({
    "AtKeyword import charset namespace keyframes media supports font-feature-values": u.definitionKeyword,
    "from to selector scope MatchFlag": u.keyword,
    NamespaceName: u.namespace,
    KeyframeName: u.labelName,
    KeyframeRangeName: u.operatorKeyword,
    TagName: u.tagName,
    ClassName: u.className,
    PseudoClassName: u.constant(u.className),
    IdName: u.labelName,
    "FeatureName PropertyName": u.propertyName,
    AttributeName: u.attributeName,
    NumberLiteral: u.number,
    KeywordQuery: u.keyword,
    UnaryQueryOp: u.operatorKeyword,
    "CallTag ValueName FontName": u.atom,
    VariableName: u.variableName,
    Callee: u.operatorKeyword,
    Unit: u.unit,
    "UniversalSelector NestingSelector": u.definitionOperator,
    "MatchOp CompareOp": u.compareOperator,
    "ChildOp SiblingOp, LogicOp": u.logicOperator,
    BinOp: u.arithmeticOperator,
    Important: u.modifier,
    Comment: u.blockComment,
    ColorLiteral: u.color,
    "ParenthesizedContent StringLiteral": u.string,
    ":": u.punctuation,
    "PseudoOp #": u.derefOperator,
    "; , |": u.separator,
    "( )": u.paren,
    "[ ]": u.squareBracket,
    "{ }": u.brace
  }),
  Te = {
    __proto__: null,
    lang: 44,
    "nth-child": 44,
    "nth-last-child": 44,
    "nth-of-type": 44,
    "nth-last-of-type": 44,
    dir: 44,
    "host-context": 44,
    if: 90,
    url: 158,
    "url-prefix": 158,
    domain: 158,
    regexp: 158
  },
  Ee = {
    __proto__: null,
    or: 104,
    and: 104,
    not: 112,
    only: 112,
    layer: 212
  },
  De = {
    __proto__: null,
    selector: 118,
    style: 124,
    layer: 208
  },
  Oe = {
    __proto__: null,
    "@import": 204,
    "@media": 216,
    "@charset": 220,
    "@namespace": 224,
    "@keyframes": 230,
    "@supports": 242,
    "@scope": 246,
    "@font-feature-values": 252
  },
  ke = {
    __proto__: null,
    to: 249
  },
  Ae = c.deserialize({
    version: 14,
    states: "MrQYQdOOO#}QdOOP$UO`OOO%OQaO'#CfOOQP'#Ce'#CeO%VQdO'#CgO%[Q`O'#CgO%aQaO'#FqO&XQdO'#CkO&xQaO'#CcO'SQdO'#CnO'_QdO'#ERO'dQdO'#ETO'oQdO'#E[O'oQdO'#E_OOQP'#Fq'#FqO)RQhO'#FQOOQS'#Fp'#FpOOQS'#FT'#FTQYQdOOO)YQdO'#EeO*iQhO'#EkO)YQdO'#EmO*pQdO'#EoO*{QdO'#ErO)}QhO'#ExO+TQdO'#EzO+`QdO'#E}O+eQaO'#CfO+lQ`O'#EbO+qQ`O'#F}O+|QdO'#F}QOQ`OOP,WO&jO'#CaPOOO)CA`)CA`OOQP'#Ci'#CiOOQP,59R,59RO%VQdO,59ROOQP'#Cm'#CmOOQP,59V,59VO&XQdO,59VO,cQdO,59YO'_QdO,5:mO'dQdO,5:oO'oQdO,5:vO'oQdO,5:xO'oQdO,5:yO'oQdO'#F[O,nQ`O,58}O,vQdO'#EaOOQS,58},58}OOQP'#Cq'#CqOOQO'#EP'#EPOOQP,59Y,59YO,}Q`O,59YO-SQ`O,59YOOQP'#ES'#ESOOQP,5:m,5:mO-XQpO'#EUO-dQdO'#EVO-iQ`O'#EVO-nQpO,5:oO.XQaO,5:vO.oQaO,5:yOOQW'#D^'#D^O/nQhO'#DgO0RQhO,5;lO)}QhO'#DeO0`Q`O'#DnO0eQhO'#D{OOQW'#Fw'#FwOOQS,5;l,5;lO0jQ`O'#DhO0oQ`O'#DkOOQS-E9R-E9ROOQ['#Cv'#CvO0tQdO'#CwO1[QdO'#C}O1rQdO'#DQO2YQ!pO'#DSO4fQ!jO,5;POOQO'#DX'#DXO-SQ`O'#DWO4vQ!nO'#FtO6|Q`O'#DYO7RQ`O'#D|OOQ['#Ft'#FtO7WQhO'#GQO7fQ`O,5;VO7kQ!bO,5;XOOQS'#Eq'#EqO7sQ`O,5;ZO7xQdO,5;ZOOQO'#Et'#EtO8QQ`O,5;^O8VQhO,5;dO'oQdO'#DjOOQS,5;f,5;fO0jQ`O,5;fO8_QdO,5;fOOQS'#Fc'#FcO8gQdO'#FPO7fQ`O,5;iO8oQdO,5:|O9PQdO'#F^O9^Q`O,5<iO9^Q`O,5<iPOOO'#FS'#FSP9iO&jO,58{POOO,58{,58{OOQP1G.m1G.mOOQP1G.q1G.qOOQP1G.t1G.tO,}Q`O1G.tO-SQ`O1G.tOOQP1G0X1G0XO9tQpO1G0ZO9|QaO1G0bO:dQaO1G0dO:zQaO1G0eO;bQaO,5;vOOQO-E9Y-E9YOOQS1G.i1G.iO;lQ`O,5:{O;qQdO'#EQO;xQdO'#CuOOQO'#EX'#EXOOQO,5:q,5:qO-dQdO,5:qOOQP1G0Z1G0ZO)YQdO1G0ZO<PQ!jO'#D^O<_Q!bO,59yO<gQhO,5:ROOQO'#Fx'#FxO<bQ!bO,59}O<oQhO'#FdO)}QhO,59{O)}QhO'#FdO=gQhO1G1WOOQS1G1W1G1WO=qQhO,5:PO>lQhO'#DoOOQW,5:Y,5:YOOQW,5:g,5:gOOQW,5:S,5:SO>vQhO,5:VO?bQ!fO'#FuOOQS'#Fu'#FuOOQS'#FV'#FVO@rQdO,59cOOQ[,59c,59cOAYQdO,59iOOQ[,59i,59iOApQdO,59lOOQ[,59l,59lOOQ[,59n,59nO)YQdO,59pOBWQhO'#EgOOQW'#Eg'#EgOBuQ`O1G0kO4oQhO1G0kOOQ[,59r,59rO)}QhO'#D[OOQ[,59t,59tOBzQ#tO,5:hOCVQhO'#F`OCdQ`O,5<lOOQS1G0q1G0qOOQS1G0s1G0sOOQS1G0u1G0uOCoQ`O1G0uOCtQdO'#EuOOQS1G0x1G0xOOQS1G1O1G1OODPQaO,5:UO7fQ`O1G1QOOQS1G1Q1G1QO0jQ`O1G1QOOQS-E9a-E9aOOQS1G1T1G1TODWQ!fO1G0hODnQ`O'#EdOOQO1G0h1G0hOOQO,5;x,5;xODsQdO,5;xOOQO-E9[-E9[OEQQ`O1G2TPOOO-E9Q-E9QPOOO1G.g1G.gOOQP7+$`7+$`OOQP7+%u7+%uO)YQdO7+%uOOQS1G0g1G0gOE]QaO'#F|OEgQ`O,5:lOElQ!fO'#FUOFjQdO'#FsOFtQ`O,59aOOQO1G0]1G0]OFyQ!bO7+%uO)YQdO1G/eOGUQhO1G/iOOQW1G/m1G/mOOQW1G/g1G/gOGgQhO,5<OOOQW-E9b-E9bOOQS7+&r7+&rOH_QhO'#D^OHmQhO'#F{OHxQ`O'#F{OH}Q`O,5:ZOISQ!bO'#D`O>vQhO'#DmOI_QhO'#DsOIgQhO'#DuOIlQ!jO'#FzOOQO'#Fz'#FzOIwQ`O'#DxOJPQ!bO'#DzOOQO'#Fy'#FyOJUQ`O1G/qOOQS-E9T-E9TOOQ[1G.}1G.}OOQ[1G/T1G/TOOQ[1G/W1G/WOOQ[1G/[1G/[OJZQdO,5;ROOQS7+&V7+&VOJ`Q`O7+&VOJeQhO'#D]OJmQ`O,59vO)}QhO,59vOOQ[1G0S1G0SOJuQ`O1G0SOJzQhO,5;zOOQO-E9^-E9^OOQS7+&a7+&aOKYQbO'#DSOOQO'#Ew'#EwOKhQ`O'#EvOOQO'#Ev'#EvOKsQ`O'#FaOK{QdO,5;aOOQS,5;a,5;aOOQ[1G/p1G/pOOQS7+&l7+&lO7fQ`O7+&lOLWQ!fO'#F]O)YQdO'#F]OM_QdO7+&SOOQO7+&S7+&SOOQO,5;O,5;OOOQO1G1d1G1dOMrQ!bO<<IaOM}QdO'#FZONXQ`O,5<hOOQP1G0W1G0WOOQS-E9S-E9SONaQdO'#FYONkQ`O,5<_OOQ]1G.{1G.{OOQP<<Ia<<IaONsQ`O<<IaONxQdO7+%POOQO'#D`'#D`O! PQ!bO7+%TO! XQhO'#FXO! fQ`O,5<gO)YQdO,5<gOOQW1G/u1G/uO! nQ`O,5:XO>vQhO'#DtOOQO,5:_,5:_O! sQhO,5:aO! {QhO,5:fO)YQdO,5:dOOQW7+%]7+%]OOQO'#Ei'#EiO!!SQ`O1G0mOOQS<<Iq<<IqO)YQdO,59wO!!vQhO1G/bOOQ[1G/b1G/bO!!}Q`O1G/bOOQW-E9U-E9UOOQ[7+%n7+%nOOQO,5;b,5;bOCwQdO'#FbOKsQ`O,5;{OOQS,5;{,5;{OOQS-E9_-E9_OOQS1G0{1G0{OOQS<<JW<<JWO!#VQ!fO,5;wOOQS-E9Z-E9ZOOQO<<In<<InOOQPAN>{AN>{O!$^Q`OAN>{O!$cQaO,5;uOOQO-E9X-E9XO!$mQdO,5;tOOQO-E9W-E9WOOQW<<Hk<<HkOOQW<<Ho<<HoO!$wQhO<<HoO!%YQhO'#D^O!%hQhO,5;sO!%sQ`O,5;sOOQO-E9V-E9VO!%xQdO1G2RO!&SQhO1G/sO!&[Q`O,5:`O>vQhO'#DwOOQO1G/{1G/{O!&aQ!bO1G0QO!&iQdO1G0OOJZQdO'#F_O!&pQ`O7+&XOOQW7+&X7+&XO!&xQ!bO1G/cOOQ[7+$|7+$|O!'TQhO7+$|P!'[Q`O'#FWOOQO,5;|,5;|OOQO-E9`-E9`OOQS1G1g1G1gOOQPG24gG24gO!'aQ`OAN>ZO)YQdO1G1_O!'fQ`O7+'mOOQO1G/z1G/zO!'nQ`O,5:cO!'sQhO7+%lOOQO,5;y,5;yOOQO-E9]-E9]OOQW<<Is<<IsOOQ[<<Hh<<HhPOQW,5;r,5;rOOQWG23uG23uO!'zQdO7+&yOOQO1G/}1G/}OOQO<<IW<<IW",
    stateData: "!(_~O$_OS$`QQ~OWVO^_O`WOcYOdYOl`OmZOp[O#P]O#S^O#YdO#`eO#bfO#dgO#ghO#miO#ojO#rkO$ZRO$fTO~OQmOWVO^_O`WOcYOdYOl`OmZOp[O#P]O#S^O#YdO#`eO#bfO#dgO#ghO#miO#ojO#rkO$ZlO$fTO~O$X$qP~P!jO$`qO~O`YXcYXdYXmYXpYXsYX!eYX#PYX#SYX$YYX$f[X~OgYX~P$ZO$ZsO~O$fuO~O$fuO`$eXc$eXd$eXm$eXp$eXs$eX!e$eX#P$eX#S$eX$Y$eXg$eX~O$ZvO~O`xOcyOdyOmzOp{O#P|O#S!OO$Y}O~Os!RO!e!PO~P&^Of!XO$Z!TO$[!UO~O$Z!YO~OW!^O$Z![O$f!]O~OWVO^_O`WOcYOdYOmZOp[O#P]O#S^O$ZRO$fTO~OS!fOc!gOd!gOh!cOs!RO!Y!eO!]!jO!`!kO$]!bO~On!iO~P(dOQ!uOh!nOp!oOs!pOu!xOw!xO}!vO!q!wO$Z!mO$[!sO$j!qO~OS!fOc!gOd!gOh!cO!Y!eO!]!jO!`!kO$]!bO~Os$tP~P)}Ow!}O!q!wO$Z!|O~Ow#PO$Z#PO~Oh#SOs!RO#p#UO~O$Z#WO~Oc#VX~P$ZOc#ZO~On#[O$X$qXr$qX~O$X$qXr$qX~P!jO$a#_O$b#_O$c#aO~Of#fO$Z!TO$[!UO~Os!RO!e!PO~Or$qP~P!jOh#pO~Oh#qO~Oo!xX!|!xX$f!zX~O$Z#rO~O$f#tO~Oo#uO!|#vO~O`xOcyOdyOmzOp{O~Os#Oa!e#Oa#P#Oa#S#Oa$Y#Oag#Oa~P-vOs#Ra!e#Ra#P#Ra#S#Ra$Y#Rag#Ra~P-vOS!fOc!gOd!gOh!cO!Y!eO!]!jO!`!kO~OR#zOu#zOw#zO$]#wO$j!qO~P/VOn$QO!U#}O!e$OO~P(dOh$SO~O$]$UO~Oh#SO~Oh$WO~O`$YOc$YOg$]Ol$YOm$YOn$YO~P)YO`$YOc$YOl$YOm$YOn$YOo$_O~P)YO`$YOc$YOl$YOm$YOn$YOr$aO~P)YOP$bOSvXcvXdvXhvXnvXyvX!YvX!]vX!`vX#[vX#^vX$]vX!WvXQvX`vXgvXlvXmvXpvXsvXuvXwvX}vX!qvX$ZvX$[vX$jvXovXrvX!evX$XvX$svX!}vX~Oy$cO#[$dO#^$eOn$tP~P)}Oh#qOS$hXc$hXd$hXn$hXy$hX!Y$hX!]$hX!`$hX#[$hX#^$hX$]$hXQ$hX`$hXg$hXl$hXm$hXp$hXs$hXu$hXw$hX}$hX!q$hX$Z$hX$[$hX$j$hXo$hXr$hX!e$hX$X$hX$s$hX!}$hX~Oh$iO~Oh$kO~O!U#}O!e$lOs$tXn$tX~Os!RO~On$oOy$cO~On$pO~Ow$qO!q!wO~Os$rO~Os!RO!U#}O~Os!RO#p$xO~O$Z#WOs#sX~O$s$|On#Ua$X#Uar#Ua~P)YOn$QX$X$QXr$QX~P!jOn#[O$X$qar$qa~O$a#_O$b#_O$c%TO~Oo%VO!|%WO~Os#Oi!e#Oi#P#Oi#S#Oi$Y#Oig#Oi~P-vOs#Qi!e#Qi#P#Qi#S#Qi$Y#Qig#Qi~P-vOs#Ri!e#Ri#P#Ri#S#Ri$Y#Rig#Ri~P-vOs$Oa!e$Oa~P&^Or%XO~Og$pP~P'oOg$gP~P)YOc!SXg!QX!U!QX!W!SX~Oc%aO!W%bO~Og%cO!U#}O~O!U#}OS$WXc$WXd$WXh$WXn$WXs$WX!Y$WX!]$WX!`$WX!e$WX$]$WX~On%gO!e$OO~P(dO!U#}OS!Xac!Xad!Xah!Xan!Xas!Xa!Y!Xa!]!Xa!`!Xa!e!Xa$]!Xag!Xa~O$]%hOg$oP~P/VOR#zOS!fOh%mOu#zOw#zO!Y%nO$]%lO$j!qO~Oy$cOQ$iX`$iXc$iXg$iXh$iXl$iXm$iXn$iXp$iXs$iXu$iXw$iX}$iX!q$iX$Z$iX$[$iX$j$iXo$iXr$iX~O`$YOc$YOg%wOl$YOm$YOn$YO~P)YO`$YOc$YOl$YOm$YOn$YOo%xO~P)YO`$YOc$YOl$YOm$YOn$YOr%yO~P)YOh%{OS#ZXc#ZXd#ZXn#ZX!Y#ZX!]#ZX!`#ZX$]#ZX~On%|O~Og&ROw&SO!r&SO~Os$SX!e$SXn$SX~P)}O!e$lOs$tan$ta~On&VO~Or&^O$Z&XO$j&WO~Og&_O~P&^Oy$cO!e&cO$s$|On#Ui$X#Uir#Ui~P)YO$r&fO~On$Qa$X$Qar$Qa~P!jOn#[O$X$qir$qi~O!e&iOg$pX~P&^Og&kO~Oy$cOQ#xXg#xXh#xXp#xXs#xXu#xXw#xX}#xX!e#xX!q#xX$Z#xX$[#xX$j#xX~O!e&mOg$gX~P)YOg&oO~Oo&pOy$cO!}&qO~OR#zOu#zOw#zO$]&sO$j!qO~O!U#}OS$Wac$Wad$Wah$Wan$Was$Wa!Y$Wa!]$Wa!`$Wa!e$Wa$]$Wa~Oc!dXg!QX!U!QX!e!QX~O!U#}O!e&uOg$oX~Oc&wO~Og&xO~Oc!mXg!mX!W!SX~OS!fOh&zO~O!U&|O~O!U&|O!W&}Og$nX~Oc'OOg!lX~O!W&}O~Og'PO~O$Z'QO~On'SO~Oc'TO!U#}O~Og'VOn'UO~Og'YO~O!U#}Os$Sa!e$San$Sa~OP$bOsvX!evXgvX~O$j&WOs#jX!e#jX~Os!RO!e'[O~Or'`O$Z&XO$j&WO~Oy$cOQ$PXh$PXn$PXp$PXs$PXu$PXw$PX}$PX!e$PX!q$PX$X$PX$Z$PX$[$PX$j$PX$s$PXr$PX~O!e&cO$s$|On#Uq$X#Uqr#Uq~P)YOo'eOy$cO!}'fO~Og#}X!e#}X~P'oO!e&iOg$pa~Og#|X!e#|X~P)YO!e&mOg$ga~Oo'eO~Og'kO~P)YOg'lO!W'mO~O$]'nOg#{X!e#{X~P/VO!e&uOg$oa~Og'sO~OS!fOh'uO~OS!fO~PGUO`'yOg'{O~OS#zac#zad#zah#za!Y#za!]#za!`#za$]#za~Og'}O~P!![Og'}On(OO~Oy$cOQ$Pah$Pan$Pap$Pas$Pau$Paw$Pa}$Pa!e$Pa!q$Pa$X$Pa$Z$Pa$[$Pa$j$Pa$s$Par$Pa~Oo(TO~Og#}a!e#}a~P&^Og#|a!e#|a~P)YOR#zOu#zOw#zO$]&sO$j&WO~Oc!fXg!QX!U!QX!e!QX~O!U#}Og#{a!e#{a~Oc(VO~O!e&uOg$oi~P)YOg!ai!U!ji~Og(XO~O!W(ZOg!ni~Og!li~P)YO`'yOg(^O~Oy$cOg!Pin!Pi~Og(_O~P!![On(`O~Og(aO~O!e&uOg$oq~Og(cO~OS!fO~P!$wOg#{q!e#{q~P)YO$_!r$`$j`$jy#S~",
    goto: "7g$uPPPPP$vP$yP%S%f%S%x&[P%SP&b%SPP&hPPP&n&x&xPPPPP&xPP&xP'hP&xP&x(k&xP)Z)^)d)d)v)dP)dP)dP)d)dP*])dP*i*o+e+hP+k*i+n*i+q+w+z,Q+z)d,WPP,|-S%S-Y%S-`-`-f-jPP%SP%S%SP-p.l.y/Q$yP/ZP/^P$yP$yP$yP/d$yP/g/j/m/t$yP$yPP$yP/y$yP/|0S0c0}1]1c1m1s1y2P2V2a2g2m2s2y3PPPPPPPPPPPP3V3`P4U4X5]P5e6_6t+z7Q7T7WPP7^RrQ_aOPco!R#[%Pq_OP]^co|}!O!P!R#S#[#p%P&iqSOP]^co|}!O!P!R#S#[#p%P&iqUOP]^co|}!O!P!R#S#[#p%P&iQtTR#buQwWR#cxQ!VYR#dyQ#d!XS$h!t!uR%U#f!Z!xdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(b!Y!xdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(bb#z!c$W%b%m&z&}'m'u(ZU&Z$r&]'[R'Z&Y!Z!tdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(bR$j!vQ&P$iR'W&Qq!h`ei!c!d!e!r#}$O$P$S$g$i$l&Q&uQ#x!cW%s$W%m&z'uQ&t%bQ'w&}Q(U'mR(d(ZQ#VjQ$V!jQ$v#UR&a$xX%q$W%m&z'up!h`ei!c!d!e!r#}$O$P$S$g$i$l&Q&uW%p$W%m&z'uQ&{%nQ'v&|Q'w&}R(d(ZR$T!fR%j$SR'p&uR&{%nX%o$W%m&z'uR'v&|X%t$W%m&z'uX%r$W%m&z'u!Y!xdf!n!o!p#Z#q#v$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(bQ!}gR$q#OQ!WYR#eyQ#d!WR%U#eQ!ZZR#gzQ!_[R#h{T!^[{Q#s!]R%_#tQ!SXQ!i`Q#TjQ#n!QQ$Q!dQ$n!zQ$t#RQ$w#VQ$z#YQ%g$PQ&`$vQ'^&[Q'a&aR(S']SnP!RQ#^oQ%O#[R&g%PZmPo!R#[%PQ$}#ZQ&e${R'd&dR$g!rQ'R%{R(['yR#OgR#QhR$s#QS&[$r&]R(Q'[V&Y$r&]'[R#YkQ#`qR%S#`QcOSoP!RU!lco%PR%P#[Q%]#q[&l%]&r'i'r'x(bQ&r%aQ'i&mQ'r&wQ'x'OR(b(VQ$[!nQ$^!oQ$`!pV%v$[$^$`Q&Q$iR'X&QQ&v%iS'q&v(WR(W'rQ&n%]R'j&nQ&j%YR'h&jQ!QXR#m!QQ&d${R'c&dQ#]nS%Q#]%RR%R#^Q'z'RR(]'zQ$m!yR&U$mQ&]$rR'_&]Q']&[R(R']Q#XkR$y#XQ$P!dR%f$P_bOPco!R#[%P^XOPco!R#[%PQ!`]Q!a^Q#i|Q#j}Q#k!OQ#l!PQ$u#SQ%Y#pR'g&iR%^#qQ!rdQ!{f[$X!n!o!p$[$^$`Q${#Zh%[#q%]%a&m&r&w'O'i'r'x(V(bQ%`#vQ%z$cS&b${&dQ&h%WQ'b&cR'|'T]$Z!n!o!p$[$^$`Q!d`U!ye!r$gQ#RiQ#y!cS#|!d$PQ$R!eQ%d#}Q%e$OQ%i$SS&O$i&QQ&T$lR'o&uQ#{!cW%s$W%m&z'uQ&t%bQ'w&}Q(U'mR(d(ZQ%u$WQ&y%mQ't&zR(Y'uR%k$SR%Z#pQpPR#o!RQ!zeQ$f!rR%}$g",
    nodeNames: `⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NamespacedTagSelector NamespaceName TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword # ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector StyleQuery style ParenthesedQuery CallQuery ArgList PropertyName , PropertyName UnaryQuery ParenthesedQuery BinaryQuery ParenthesedQuery ParenthesedQuery StyleFeature PropertyName StyleRange PseudoQuery CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName NamespacedAttribute NamespaceName AttributeName MatchOp MatchFlag ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to FontFeatureStatement font-feature-values FontName AtRule Styles`,
    maxTerm: 174,
    nodeProps: [[`isolate`, -2, 5, 39, ``], [`openedBy`, 23, `(`, 31, `[`, 34, `{`], [`closedBy`, 24, `)`, 32, `]`, 35, `}`]],
    propSources: [we],
    skippedNodes: [0, 5, 130],
    repeatNodeCount: 17,
    tokenData: "K`~R!bOX%ZX^&R^p%Zpq&Rqr)ers)vst+jtu2Xuv%Zvw3Rwx3dxy5Ryz5dz{5i{|6S|}:u}!O;W!O!P;u!P!Q<^!Q![=V![!]>Q!]!^>|!^!_?_!_!`@Z!`!a@n!a!b%Z!b!cAo!c!k%Z!k!lC|!l!u%Z!u!vC|!v!}%Z!}#OD_#O#P%Z#P#QDp#Q#R2X#R#]%Z#]#^ER#^#g%Z#g#hC|#h#o%Z#o#pIf#p#qIw#q#rJ`#r#sJq#s#y%Z#y#z&R#z$f%Z$f$g&R$g#BY%Z#BY#BZ&R#BZ$IS%Z$IS$I_&R$I_$I|%Z$I|$JO&R$JO$JT%Z$JT$JU&R$JU$KV%Z$KV$KW&R$KW&FU%Z&FU&FV&R&FV;'S%Z;'S;=`KY<%lO%Z`%^SOy%jz;'S%j;'S;=`%{<%lO%j`%oS!r`Oy%jz;'S%j;'S;=`%{<%lO%j`&OP;=`<%l%j~&Wh$_~OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%j~'yh$_~!r`OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%jj)jS$sYOy%jz;'S%j;'S;=`%{<%lO%j~)yWOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d<%lO)v~*hOw~~*kRO;'S)v;'S;=`*t;=`O)v~*wXOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d;=`<%l)v<%lO)v~+gP;=`<%l)vj+oYmYOy%jz!Q%j!Q![,_![!c%j!c!i,_!i#T%j#T#Z,_#Z;'S%j;'S;=`%{<%lO%jj,dY!r`Oy%jz!Q%j!Q![-S![!c%j!c!i-S!i#T%j#T#Z-S#Z;'S%j;'S;=`%{<%lO%jj-XY!r`Oy%jz!Q%j!Q![-w![!c%j!c!i-w!i#T%j#T#Z-w#Z;'S%j;'S;=`%{<%lO%jj.OYuY!r`Oy%jz!Q%j!Q![.n![!c%j!c!i.n!i#T%j#T#Z.n#Z;'S%j;'S;=`%{<%lO%jj.uYuY!r`Oy%jz!Q%j!Q![/e![!c%j!c!i/e!i#T%j#T#Z/e#Z;'S%j;'S;=`%{<%lO%jj/jY!r`Oy%jz!Q%j!Q![0Y![!c%j!c!i0Y!i#T%j#T#Z0Y#Z;'S%j;'S;=`%{<%lO%jj0aYuY!r`Oy%jz!Q%j!Q![1P![!c%j!c!i1P!i#T%j#T#Z1P#Z;'S%j;'S;=`%{<%lO%jj1UY!r`Oy%jz!Q%j!Q![1t![!c%j!c!i1t!i#T%j#T#Z1t#Z;'S%j;'S;=`%{<%lO%jj1{SuY!r`Oy%jz;'S%j;'S;=`%{<%lO%jd2[UOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jd2uS!|S!r`Oy%jz;'S%j;'S;=`%{<%lO%jb3WS^QOy%jz;'S%j;'S;=`%{<%lO%j~3gWOY3dZw3dwx*cx#O3d#O#P4P#P;'S3d;'S;=`4{<%lO3d~4SRO;'S3d;'S;=`4];=`O3d~4`XOY3dZw3dwx*cx#O3d#O#P4P#P;'S3d;'S;=`4{;=`<%l3d<%lO3d~5OP;=`<%l3dj5WShYOy%jz;'S%j;'S;=`%{<%lO%j~5iOg~n5pUWQyWOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jj6ZWyW#SQOy%jz!O%j!O!P6s!P!Q%j!Q![9x![;'S%j;'S;=`%{<%lO%jj6xU!r`Oy%jz!Q%j!Q![7[![;'S%j;'S;=`%{<%lO%jj7cY!r`$jYOy%jz!Q%j!Q![7[![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj8WY!r`Oy%jz{%j{|8v|}%j}!O8v!O!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj8{U!r`Oy%jz!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj9fU!r`$jYOy%jz!Q%j!Q![9_![;'S%j;'S;=`%{<%lO%jj:P[!r`$jYOy%jz!O%j!O!P7[!P!Q%j!Q![9x![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj:zS!eYOy%jz;'S%j;'S;=`%{<%lO%jj;]WyWOy%jz!O%j!O!P6s!P!Q%j!Q![9x![;'S%j;'S;=`%{<%lO%jj;zU`YOy%jz!Q%j!Q![7[![;'S%j;'S;=`%{<%lO%j~<cTyWOy%jz{<r{;'S%j;'S;=`%{<%lO%j~<yS!r`$`~Oy%jz;'S%j;'S;=`%{<%lO%jj=[[$jYOy%jz!O%j!O!P7[!P!Q%j!Q![9x![!g%j!g!h8R!h#X%j#X#Y8R#Y;'S%j;'S;=`%{<%lO%jj>VUcYOy%jz![%j![!]>i!];'S%j;'S;=`%{<%lO%jj>pSdY!r`Oy%jz;'S%j;'S;=`%{<%lO%jj?RSnYOy%jz;'S%j;'S;=`%{<%lO%jh?dU!WWOy%jz!_%j!_!`?v!`;'S%j;'S;=`%{<%lO%jh?}S!WW!r`Oy%jz;'S%j;'S;=`%{<%lO%jl@bS!WW!|SOy%jz;'S%j;'S;=`%{<%lO%jj@uV#PQ!WWOy%jz!_%j!_!`?v!`!aA[!a;'S%j;'S;=`%{<%lO%jbAcS#PQ!r`Oy%jz;'S%j;'S;=`%{<%lO%jjArYOy%jz}%j}!OBb!O!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jjBgW!r`Oy%jz!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jjCW[lY!r`Oy%jz}%j}!OCP!O!Q%j!Q![CP![!c%j!c!}CP!}#T%j#T#oCP#o;'S%j;'S;=`%{<%lO%jhDRS!}WOy%jz;'S%j;'S;=`%{<%lO%jjDdSpYOy%jz;'S%j;'S;=`%{<%lO%jnDuSo^Oy%jz;'S%j;'S;=`%{<%lO%jjEWU!}WOy%jz#a%j#a#bEj#b;'S%j;'S;=`%{<%lO%jbEoU!r`Oy%jz#d%j#d#eFR#e;'S%j;'S;=`%{<%lO%jbFWU!r`Oy%jz#c%j#c#dFj#d;'S%j;'S;=`%{<%lO%jbFoU!r`Oy%jz#f%j#f#gGR#g;'S%j;'S;=`%{<%lO%jbGWU!r`Oy%jz#h%j#h#iGj#i;'S%j;'S;=`%{<%lO%jbGoU!r`Oy%jz#T%j#T#UHR#U;'S%j;'S;=`%{<%lO%jbHWU!r`Oy%jz#b%j#b#cHj#c;'S%j;'S;=`%{<%lO%jbHoU!r`Oy%jz#h%j#h#iIR#i;'S%j;'S;=`%{<%lO%jbIYS$rQ!r`Oy%jz;'S%j;'S;=`%{<%lO%jjIkSsYOy%jz;'S%j;'S;=`%{<%lO%jfI|U$fUOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%jjJeSrYOy%jz;'S%j;'S;=`%{<%lO%jfJvU#SQOy%jz!_%j!_!`2n!`;'S%j;'S;=`%{<%lO%j`K]P;=`<%l%Z",
    tokenizers: [Se, Ce, be, xe, 1, 2, 3, 4, new p(`m~RRYZ[z{a~~g~aO$b~~dP!P!Qg~lO$c~~`, 28, 155)],
    topRules: {
      StyleSheet: [0, 6],
      Styles: [1, 129]
    },
    dynamicPrecedences: {
      97: 1
    },
    specialized: [{
      term: 150,
      get: e => Te[e] || -1
    }, {
      term: 151,
      get: e => Ee[e] || -1
    }, {
      term: 4,
      get: e => De[e] || -1
    }, {
      term: 28,
      get: e => Oe[e] || -1
    }, {
      term: 149,
      get: e => ke[e] || -1
    }],
    tokenPrec: 2444
  }),
  je = [],
  Me = [];
(() => {
  let e = `lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o`.split(`,`).map(e => e ? parseInt(e, 36) : 1);
  for (let t = 0, n = 0; t < e.length; t++) (t % 2 ? Me : je).push(n += e[t]);
})();
function Ne(e) {
  if (e < 768) return !1;
  for (let t = 0, n = je.length;;) {
    let r = t + n >> 1;
    if (e < je[r]) n = r;else if (e >= Me[r]) t = r + 1;else return !0;
    if (t == n) return !1;
  }
}
function Pe(e) {
  return e >= 127462 && e <= 127487;
}
var Fe = 8205;
function Ie(e, t, n = !0, r = !0) {
  return (n ? Le : Re)(e, t, r);
}
function Le(e, t, n) {
  if (t == e.length) return t;
  t && Be(e.charCodeAt(t)) && Ve(e.charCodeAt(t - 1)) && t--;
  let r = ze(e, t);
  for (t += He(r); t < e.length;) {
    let i = ze(e, t);
    if (r == Fe || i == Fe || n && Ne(i)) t += He(i), r = i;else if (Pe(i)) {
      let n = 0,
        r = t - 2;
      for (; r >= 0 && Pe(ze(e, r));) n++, r -= 2;
      if (n % 2 == 0) break;
      t += 2;
    } else break;
  }
  return t;
}
function Re(e, t, n) {
  for (; t > 1;) {
    let r = Le(e, t - 2, n);
    if (r < t) return r;
    t--;
  }
  return 0;
}
function ze(e, t) {
  let n = e.charCodeAt(t);
  if (!Ve(n) || t + 1 == e.length) return n;
  let r = e.charCodeAt(t + 1);
  return Be(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function Be(e) {
  return e >= 56320 && e < 57344;
}
function Ve(e) {
  return e >= 55296 && e < 56320;
}
function He(e) {
  return e < 65536 ? 1 : 2;
}
var b = class e {
    lineAt(e) {
      if (e < 0 || e > this.length) throw RangeError(`Invalid position ${e} in document of length ${this.length}`);
      return this.lineInner(e, !1, 1, 0);
    }
    line(e) {
      if (e < 1 || e > this.lines) throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
      return this.lineInner(e, !0, 1, 0);
    }
    replace(e, t, n) {
      [e, t] = Ze(this, e, t);
      let r = [];
      return this.decompose(0, e, r, 2), n.length && n.decompose(0, n.length, r, 3), this.decompose(t, this.length, r, 1), Ue.from(r, this.length - (t - e) + n.length);
    }
    append(e) {
      return this.replace(this.length, this.length, e);
    }
    slice(e, t = this.length) {
      [e, t] = Ze(this, e, t);
      let n = [];
      return this.decompose(e, t, n, 0), Ue.from(n, t - e);
    }
    eq(e) {
      if (e == this) return !0;
      if (e.length != this.length || e.lines != this.lines) return !1;
      let t = this.scanIdentical(e, 1),
        n = this.length - this.scanIdentical(e, -1),
        r = new qe(this),
        i = new qe(e);
      for (let e = t, a = t;;) {
        if (r.next(e), i.next(e), e = 0, r.lineBreak != i.lineBreak || r.done != i.done || r.value != i.value) return !1;
        if (a += r.value.length, r.done || a >= n) return !0;
      }
    }
    iter(e = 1) {
      return new qe(this, e);
    }
    iterRange(e, t = this.length) {
      return new Je(this, e, t);
    }
    iterLines(e, t) {
      let n;
      if (e == null) n = this.iter();else {
        t ??= this.lines + 1;
        let r = this.line(e).from;
        n = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
      }
      return new Ye(n);
    }
    toString() {
      return this.sliceString(0);
    }
    toJSON() {
      let e = [];
      return this.flatten(e), e;
    }
    constructor() {}
    static of(t) {
      if (t.length == 0) throw RangeError(`A document must have at least one line`);
      return t.length == 1 && !t[0] ? e.empty : t.length <= 32 ? new x(t) : Ue.from(x.split(t, []));
    }
  },
  x = class e extends b {
    constructor(e, t = We(e)) {
      super(), this.text = e, this.length = t;
    }
    get lines() {
      return this.text.length;
    }
    get children() {
      return null;
    }
    lineInner(e, t, n, r) {
      for (let i = 0;; i++) {
        let a = this.text[i],
          o = r + a.length;
        if ((t ? n : o) >= e) return new Xe(r, o, n, a);
        r = o + 1, n++;
      }
    }
    decompose(t, n, r, i) {
      let a = t <= 0 && n >= this.length ? this : new e(Ke(this.text, t, n), Math.min(n, this.length) - Math.max(0, t));
      if (i & 1) {
        let t = r.pop(),
          n = Ge(a.text, t.text.slice(), 0, a.length);
        if (n.length <= 32) r.push(new e(n, t.length + a.length));else {
          let t = n.length >> 1;
          r.push(new e(n.slice(0, t)), new e(n.slice(t)));
        }
      } else r.push(a);
    }
    replace(t, n, r) {
      if (!(r instanceof e)) return super.replace(t, n, r);
      [t, n] = Ze(this, t, n);
      let i = Ge(this.text, Ge(r.text, Ke(this.text, 0, t)), n),
        a = this.length + r.length - (n - t);
      return i.length <= 32 ? new e(i, a) : Ue.from(e.split(i, []), a);
    }
    sliceString(e, t = this.length, n = `
`) {
      [e, t] = Ze(this, e, t);
      let r = ``;
      for (let i = 0, a = 0; i <= t && a < this.text.length; a++) {
        let o = this.text[a],
          s = i + o.length;
        i > e && a && (r += n), e < s && t > i && (r += o.slice(Math.max(0, e - i), t - i)), i = s + 1;
      }
      return r;
    }
    flatten(e) {
      for (let t of this.text) e.push(t);
    }
    scanIdentical() {
      return 0;
    }
    static split(t, n) {
      let r = [],
        i = -1;
      for (let a of t) r.push(a), i += a.length + 1, r.length == 32 && (n.push(new e(r, i)), r = [], i = -1);
      return i > -1 && n.push(new e(r, i)), n;
    }
  },
  Ue = class e extends b {
    constructor(e, t) {
      super(), this.children = e, this.length = t, this.lines = 0;
      for (let t of e) this.lines += t.lines;
    }
    lineInner(e, t, n, r) {
      for (let i = 0;; i++) {
        let a = this.children[i],
          o = r + a.length,
          s = n + a.lines - 1;
        if ((t ? s : o) >= e) return a.lineInner(e, t, n, r);
        r = o + 1, n = s + 1;
      }
    }
    decompose(e, t, n, r) {
      for (let i = 0, a = 0; a <= t && i < this.children.length; i++) {
        let o = this.children[i],
          s = a + o.length;
        if (e <= s && t >= a) {
          let i = r & (a <= e | (s >= t ? 2 : 0));
          a >= e && s <= t && !i ? n.push(o) : o.decompose(e - a, t - a, n, i);
        }
        a = s + 1;
      }
    }
    replace(t, n, r) {
      if ([t, n] = Ze(this, t, n), r.lines < this.lines) for (let i = 0, a = 0; i < this.children.length; i++) {
        let o = this.children[i],
          s = a + o.length;
        if (t >= a && n <= s) {
          let c = o.replace(t - a, n - a, r),
            l = this.lines - o.lines + c.lines;
          if (c.lines < l >> 4 && c.lines > l >> 6) {
            let a = this.children.slice();
            return a[i] = c, new e(a, this.length - (n - t) + r.length);
          }
          return super.replace(a, s, c);
        }
        a = s + 1;
      }
      return super.replace(t, n, r);
    }
    sliceString(e, t = this.length, n = `
`) {
      [e, t] = Ze(this, e, t);
      let r = ``;
      for (let i = 0, a = 0; i < this.children.length && a <= t; i++) {
        let o = this.children[i],
          s = a + o.length;
        a > e && i && (r += n), e < s && t > a && (r += o.sliceString(e - a, t - a, n)), a = s + 1;
      }
      return r;
    }
    flatten(e) {
      for (let t of this.children) t.flatten(e);
    }
    scanIdentical(t, n) {
      if (!(t instanceof e)) return 0;
      let r = 0,
        [i, a, o, s] = n > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
      for (;; i += n, a += n) {
        if (i == o || a == s) return r;
        let e = this.children[i],
          c = t.children[a];
        if (e != c) return r + e.scanIdentical(c, n);
        r += e.length + 1;
      }
    }
    static from(t, n = t.reduce((e, t) => e + t.length + 1, -1)) {
      let r = 0;
      for (let e of t) r += e.lines;
      if (r < 32) {
        let e = [];
        for (let n of t) n.flatten(e);
        return new x(e, n);
      }
      let i = Math.max(32, r >> 5),
        a = i << 1,
        o = i >> 1,
        s = [],
        c = 0,
        l = -1,
        u = [];
      function d(t) {
        let n;
        if (t.lines > a && t instanceof e) for (let e of t.children) d(e);else t.lines > o && (c > o || !c) ? (f(), s.push(t)) : t instanceof x && c && (n = u[u.length - 1]) instanceof x && t.lines + n.lines <= 32 ? (c += t.lines, l += t.length + 1, u[u.length - 1] = new x(n.text.concat(t.text), n.length + 1 + t.length)) : (c + t.lines > i && f(), c += t.lines, l += t.length + 1, u.push(t));
      }
      function f() {
        c != 0 && (s.push(u.length == 1 ? u[0] : e.from(u, l)), l = -1, c = u.length = 0);
      }
      for (let e of t) d(e);
      return f(), s.length == 1 ? s[0] : new e(s, n);
    }
  };
b.empty = new x([``], 0);
function We(e) {
  let t = -1;
  for (let n of e) t += n.length + 1;
  return t;
}
function Ge(e, t, n = 0, r = 1e9) {
  for (let i = 0, a = 0, o = !0; a < e.length && i <= r; a++) {
    let s = e[a],
      c = i + s.length;
    c >= n && (c > r && (s = s.slice(0, r - i)), i < n && (s = s.slice(n - i)), o ? (t[t.length - 1] += s, o = !1) : t.push(s)), i = c + 1;
  }
  return t;
}
function Ke(e, t, n) {
  return Ge(e, [``], t, n);
}
var qe = class {
    constructor(e, t = 1) {
      this.dir = t, this.done = !1, this.lineBreak = !1, this.value = ``, this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof x ? e.text.length : e.children.length) << 1];
    }
    nextInner(e, t) {
      for (this.done = this.lineBreak = !1;;) {
        let n = this.nodes.length - 1,
          r = this.nodes[n],
          i = this.offsets[n],
          a = i >> 1,
          o = r instanceof x ? r.text.length : r.children.length;
        if (a == (t > 0 ? o : 0)) {
          if (n == 0) return this.done = !0, this.value = ``, this;
          t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
        } else if ((i & 1) == (t > 0 ? 0 : 1)) {
          if (this.offsets[n] += t, e == 0) return this.lineBreak = !0, this.value = `
`, this;
          e--;
        } else if (r instanceof x) {
          let i = r.text[a + (t < 0 ? -1 : 0)];
          if (this.offsets[n] += t, i.length > Math.max(0, e)) return this.value = e == 0 ? i : t > 0 ? i.slice(e) : i.slice(0, i.length - e), this;
          e -= i.length;
        } else {
          let i = r.children[a + (t < 0 ? -1 : 0)];
          e > i.length ? (e -= i.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(i), this.offsets.push(t > 0 ? 1 : (i instanceof x ? i.text.length : i.children.length) << 1));
        }
      }
    }
    next(e = 0) {
      return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
    }
  },
  Je = class {
    constructor(e, t, n) {
      this.value = ``, this.done = !1, this.cursor = new qe(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
    }
    nextInner(e, t) {
      if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = ``, this.done = !0, this;
      e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
      let n = t < 0 ? this.pos - this.from : this.to - this.pos;
      e > n && (e = n), n -= e;
      let {
        value: r
      } = this.cursor.next(e);
      return this.pos += (r.length + e) * t, this.value = r.length <= n ? r : t < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this;
    }
    next(e = 0) {
      return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
    }
    get lineBreak() {
      return this.cursor.lineBreak && this.value != ``;
    }
  },
  Ye = class {
    constructor(e) {
      this.inner = e, this.afterBreak = !0, this.value = ``, this.done = !1;
    }
    next(e = 0) {
      let {
        done: t,
        lineBreak: n,
        value: r
      } = this.inner.next(e);
      return t && this.afterBreak ? (this.value = ``, this.afterBreak = !1) : t ? (this.done = !0, this.value = ``) : n ? this.afterBreak ? this.value = `` : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
    }
    get lineBreak() {
      return !1;
    }
  };
typeof Symbol < `u` && (b.prototype[Symbol.iterator] = function () {
  return this.iter();
}, qe.prototype[Symbol.iterator] = Je.prototype[Symbol.iterator] = Ye.prototype[Symbol.iterator] = function () {
  return this;
});
var Xe = class {
  constructor(e, t, n, r) {
    this.from = e, this.to = t, this.number = n, this.text = r;
  }
  get length() {
    return this.to - this.from;
  }
};
function Ze(e, t, n) {
  return t = Math.max(0, Math.min(e.length, t)), [t, Math.max(t, Math.min(e.length, n))];
}
function S(e, t, n = !0, r = !0) {
  return Ie(e, t, n, r);
}
function Qe(e) {
  return e >= 56320 && e < 57344;
}
function $e(e) {
  return e >= 55296 && e < 56320;
}
function C(e, t) {
  let n = e.charCodeAt(t);
  if (!$e(n) || t + 1 == e.length) return n;
  let r = e.charCodeAt(t + 1);
  return Qe(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function et(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function tt(e) {
  return e < 65536 ? 1 : 2;
}
var nt = /\r\n?|\n/,
  w = function (e) {
    return e[e.Simple = 0] = `Simple`, e[e.TrackDel = 1] = `TrackDel`, e[e.TrackBefore = 2] = `TrackBefore`, e[e.TrackAfter = 3] = `TrackAfter`, e;
  }(w ||= {}),
  rt = class e {
    constructor(e) {
      this.sections = e;
    }
    get length() {
      let e = 0;
      for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
      return e;
    }
    get newLength() {
      let e = 0;
      for (let t = 0; t < this.sections.length; t += 2) {
        let n = this.sections[t + 1];
        e += n < 0 ? this.sections[t] : n;
      }
      return e;
    }
    get empty() {
      return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
    }
    iterGaps(e) {
      for (let t = 0, n = 0, r = 0; t < this.sections.length;) {
        let i = this.sections[t++],
          a = this.sections[t++];
        a < 0 ? (e(n, r, i), r += i) : r += a, n += i;
      }
    }
    iterChangedRanges(e, t = !1) {
      at(this, e, t);
    }
    get invertedDesc() {
      let t = [];
      for (let e = 0; e < this.sections.length;) {
        let n = this.sections[e++],
          r = this.sections[e++];
        r < 0 ? t.push(n, r) : t.push(r, n);
      }
      return new e(t);
    }
    composeDesc(e) {
      return this.empty ? e : e.empty ? this : st(this, e);
    }
    mapDesc(e, t = !1) {
      return e.empty ? this : ot(this, e, t);
    }
    mapPos(e, t = -1, n = w.Simple) {
      let r = 0,
        i = 0;
      for (let a = 0; a < this.sections.length;) {
        let o = this.sections[a++],
          s = this.sections[a++],
          c = r + o;
        if (s < 0) {
          if (c > e) return i + (e - r);
          i += o;
        } else {
          if (n != w.Simple && c >= e && (n == w.TrackDel && r < e && c > e || n == w.TrackBefore && r < e || n == w.TrackAfter && c > e)) return null;
          if (c > e || c == e && t < 0 && !o) return e == r || t < 0 ? i : i + s;
          i += s;
        }
        r = c;
      }
      if (e > r) throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);
      return i;
    }
    touchesRange(e, t = e) {
      for (let n = 0, r = 0; n < this.sections.length && r <= t;) {
        let i = this.sections[n++],
          a = this.sections[n++],
          o = r + i;
        if (a >= 0 && r <= t && o >= e) return r < e && o > t ? `cover` : !0;
        r = o;
      }
      return !1;
    }
    toString() {
      let e = ``;
      for (let t = 0; t < this.sections.length;) {
        let n = this.sections[t++],
          r = this.sections[t++];
        e += (e ? ` ` : ``) + n + (r >= 0 ? `:` + r : ``);
      }
      return e;
    }
    toJSON() {
      return this.sections;
    }
    static fromJSON(t) {
      if (!Array.isArray(t) || t.length % 2 || t.some(e => typeof e != `number`)) throw RangeError(`Invalid JSON representation of ChangeDesc`);
      return new e(t);
    }
    static create(t) {
      return new e(t);
    }
  },
  T = class e extends rt {
    constructor(e, t) {
      super(e), this.inserted = t;
    }
    apply(e) {
      if (this.length != e.length) throw RangeError(`Applying change set to a document with the wrong length`);
      return at(this, (t, n, r, i, a) => e = e.replace(r, r + (n - t), a), !1), e;
    }
    mapDesc(e, t = !1) {
      return ot(this, e, t, !0);
    }
    invert(t) {
      let n = this.sections.slice(),
        r = [];
      for (let e = 0, i = 0; e < n.length; e += 2) {
        let a = n[e],
          o = n[e + 1];
        if (o >= 0) {
          n[e] = o, n[e + 1] = a;
          let s = e >> 1;
          for (; r.length < s;) r.push(b.empty);
          r.push(a ? t.slice(i, i + a) : b.empty);
        }
        i += a;
      }
      return new e(n, r);
    }
    compose(e) {
      return this.empty ? e : e.empty ? this : st(this, e, !0);
    }
    map(e, t = !1) {
      return e.empty ? this : ot(this, e, t, !0);
    }
    iterChanges(e, t = !1) {
      at(this, e, t);
    }
    get desc() {
      return rt.create(this.sections);
    }
    filter(t) {
      let n = [],
        r = [],
        i = [],
        a = new ct(this);
      done: for (let e = 0, o = 0;;) {
        let s = e == t.length ? 1e9 : t[e++];
        for (; o < s || o == s && a.len == 0;) {
          if (a.done) break done;
          let e = Math.min(a.len, s - o);
          E(i, e, -1);
          let t = a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0;
          E(n, e, t), t > 0 && it(r, n, a.text), a.forward(e), o += e;
        }
        let c = t[e++];
        for (; o < c;) {
          if (a.done) break done;
          let e = Math.min(a.len, c - o);
          E(n, e, -1), E(i, e, a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0), a.forward(e), o += e;
        }
      }
      return {
        changes: new e(n, r),
        filtered: rt.create(i)
      };
    }
    toJSON() {
      let e = [];
      for (let t = 0; t < this.sections.length; t += 2) {
        let n = this.sections[t],
          r = this.sections[t + 1];
        r < 0 ? e.push(n) : r == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
      }
      return e;
    }
    static of(t, n, r) {
      let i = [],
        a = [],
        o = 0,
        s = null;
      function c(t = !1) {
        if (!t && !i.length) return;
        o < n && E(i, n - o, -1);
        let r = new e(i, a);
        s = s ? s.compose(r.map(s)) : r, i = [], a = [], o = 0;
      }
      function l(t) {
        if (Array.isArray(t)) for (let e of t) l(e);else if (t instanceof e) {
          if (t.length != n) throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);
          c(), s = s ? s.compose(t.map(s)) : t;
        } else {
          let {
            from: e,
            to: s = e,
            insert: l
          } = t;
          if (e > s || e < 0 || s > n) throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);
          let u = l ? typeof l == `string` ? b.of(l.split(r || nt)) : l : b.empty,
            d = u.length;
          if (e == s && d == 0) return;
          e < o && c(), e > o && E(i, e - o, -1), E(i, s - e, d), it(a, i, u), o = s;
        }
      }
      return l(t), c(!s), s;
    }
    static empty(t) {
      return new e(t ? [t, -1] : [], []);
    }
    static fromJSON(t) {
      if (!Array.isArray(t)) throw RangeError(`Invalid JSON representation of ChangeSet`);
      let n = [],
        r = [];
      for (let e = 0; e < t.length; e++) {
        let i = t[e];
        if (typeof i == `number`) n.push(i, -1);else if (!Array.isArray(i) || typeof i[0] != `number` || i.some((e, t) => t && typeof e != `string`)) throw RangeError(`Invalid JSON representation of ChangeSet`);else if (i.length == 1) n.push(i[0], 0);else {
          for (; r.length < e;) r.push(b.empty);
          r[e] = b.of(i.slice(1)), n.push(i[0], r[e].length);
        }
      }
      return new e(n, r);
    }
    static createSet(t, n) {
      return new e(t, n);
    }
  };
function E(e, t, n, r = !1) {
  if (t == 0 && n <= 0) return;
  let i = e.length - 2;
  i >= 0 && n <= 0 && n == e[i + 1] ? e[i] += t : i >= 0 && t == 0 && e[i] == 0 ? e[i + 1] += n : r ? (e[i] += t, e[i + 1] += n) : e.push(t, n);
}
function it(e, t, n) {
  if (n.length == 0) return;
  let r = t.length - 2 >> 1;
  if (r < e.length) e[e.length - 1] = e[e.length - 1].append(n);else {
    for (; e.length < r;) e.push(b.empty);
    e.push(n);
  }
}
function at(e, t, n) {
  let r = e.inserted;
  for (let i = 0, a = 0, o = 0; o < e.sections.length;) {
    let s = e.sections[o++],
      c = e.sections[o++];
    if (c < 0) i += s, a += s;else {
      let l = i,
        u = a,
        d = b.empty;
      for (; l += s, u += c, c && r && (d = d.append(r[o - 2 >> 1])), !(n || o == e.sections.length || e.sections[o + 1] < 0);) s = e.sections[o++], c = e.sections[o++];
      t(i, l, a, u, d), i = l, a = u;
    }
  }
}
function ot(e, t, n, r = !1) {
  let i = [],
    a = r ? [] : null,
    o = new ct(e),
    s = new ct(t);
  for (let e = -1;;) if (o.done && s.len || s.done && o.len) throw Error(`Mismatched change set lengths`);else if (o.ins == -1 && s.ins == -1) {
    let e = Math.min(o.len, s.len);
    E(i, e, -1), o.forward(e), s.forward(e);
  } else if (s.ins >= 0 && (o.ins < 0 || e == o.i || o.off == 0 && (s.len < o.len || s.len == o.len && !n))) {
    let t = s.len;
    for (E(i, s.ins, -1); t;) {
      let n = Math.min(o.len, t);
      o.ins >= 0 && e < o.i && o.len <= n && (E(i, 0, o.ins), a && it(a, i, o.text), e = o.i), o.forward(n), t -= n;
    }
    s.next();
  } else if (o.ins >= 0) {
    let t = 0,
      n = o.len;
    for (; n;) if (s.ins == -1) {
      let e = Math.min(n, s.len);
      t += e, n -= e, s.forward(e);
    } else if (s.ins == 0 && s.len < n) n -= s.len, s.next();else break;
    E(i, t, e < o.i ? o.ins : 0), a && e < o.i && it(a, i, o.text), e = o.i, o.forward(o.len - n);
  } else if (o.done && s.done) return a ? T.createSet(i, a) : rt.create(i);else throw Error(`Mismatched change set lengths`);
}
function st(e, t, n = !1) {
  let r = [],
    i = n ? [] : null,
    a = new ct(e),
    o = new ct(t);
  for (let e = !1;;) if (a.done && o.done) return i ? T.createSet(r, i) : rt.create(r);else if (a.ins == 0) E(r, a.len, 0, e), a.next();else if (o.len == 0 && !o.done) E(r, 0, o.ins, e), i && it(i, r, o.text), o.next();else if (a.done || o.done) throw Error(`Mismatched change set lengths`);else {
    let t = Math.min(a.len2, o.len),
      n = r.length;
    if (a.ins == -1) {
      let n = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
      E(r, t, n, e), i && n && it(i, r, o.text);
    } else o.ins == -1 ? (E(r, a.off ? 0 : a.len, t, e), i && it(i, r, a.textBit(t))) : (E(r, a.off ? 0 : a.len, o.off ? 0 : o.ins, e), i && !o.off && it(i, r, o.text));
    e = (a.ins > t || o.ins >= 0 && o.len > t) && (e || r.length > n), a.forward2(t), o.forward(t);
  }
}
var ct = class {
    constructor(e) {
      this.set = e, this.i = 0, this.next();
    }
    next() {
      let {
        sections: e
      } = this.set;
      this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
    }
    get done() {
      return this.ins == -2;
    }
    get len2() {
      return this.ins < 0 ? this.len : this.ins;
    }
    get text() {
      let {
          inserted: e
        } = this.set,
        t = this.i - 2 >> 1;
      return t >= e.length ? b.empty : e[t];
    }
    textBit(e) {
      let {
          inserted: t
        } = this.set,
        n = this.i - 2 >> 1;
      return n >= t.length && !e ? b.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
    }
    forward(e) {
      e == this.len ? this.next() : (this.len -= e, this.off += e);
    }
    forward2(e) {
      this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
    }
  },
  lt = class e {
    constructor(e, t, n, r) {
      this.from = e, this.to = t, this.flags = n, this.goalColumn = r;
    }
    get anchor() {
      return this.flags & 32 ? this.to : this.from;
    }
    get head() {
      return this.flags & 32 ? this.from : this.to;
    }
    get empty() {
      return this.from == this.to;
    }
    get assoc() {
      return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
    }
    get undirectional() {
      return (this.flags & 64) > 0;
    }
    get bidiLevel() {
      let e = this.flags & 7;
      return e == 7 ? null : e;
    }
    map(t, n = -1) {
      let r, i;
      return this.empty ? r = i = t.mapPos(this.from, n) : (r = t.mapPos(this.from, 1), i = t.mapPos(this.to, -1)), r == this.from && i == this.to ? this : new e(r, i, this.flags, this.goalColumn);
    }
    extend(e, t = e, n = 0) {
      if (e <= this.anchor && t >= this.anchor) return D.range(e, t, void 0, void 0, n);
      let r = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
      return D.range(this.anchor, r, void 0, void 0, n);
    }
    eq(e, t = !1) {
      return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
    }
    toJSON() {
      return {
        anchor: this.anchor,
        head: this.head
      };
    }
    static fromJSON(e) {
      if (!e || typeof e.anchor != `number` || typeof e.head != `number`) throw RangeError(`Invalid JSON representation for SelectionRange`);
      return D.range(e.anchor, e.head);
    }
    static create(t, n, r, i) {
      return new e(t, n, r, i);
    }
  },
  D = class e {
    constructor(e, t) {
      this.ranges = e, this.mainIndex = t;
    }
    map(t, n = -1) {
      return t.empty ? this : e.create(this.ranges.map(e => e.map(t, n)), this.mainIndex);
    }
    eq(e, t = !1) {
      if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
      for (let n = 0; n < this.ranges.length; n++) if (!this.ranges[n].eq(e.ranges[n], t)) return !1;
      return !0;
    }
    get main() {
      return this.ranges[this.mainIndex];
    }
    asSingle() {
      return this.ranges.length == 1 ? this : new e([this.main], 0);
    }
    addRange(t, n = !0) {
      return e.create([t].concat(this.ranges), n ? 0 : this.mainIndex + 1);
    }
    replaceRange(t, n = this.mainIndex) {
      let r = this.ranges.slice();
      return r[n] = t, e.create(r, this.mainIndex);
    }
    toJSON() {
      return {
        ranges: this.ranges.map(e => e.toJSON()),
        main: this.mainIndex
      };
    }
    static fromJSON(t) {
      if (!t || !Array.isArray(t.ranges) || typeof t.main != `number` || t.main >= t.ranges.length) throw RangeError(`Invalid JSON representation for EditorSelection`);
      return new e(t.ranges.map(e => lt.fromJSON(e)), t.main);
    }
    static single(t, n = t) {
      return new e([e.range(t, n)], 0);
    }
    static create(t, n = 0) {
      if (t.length == 0) throw RangeError(`A selection needs at least one range`);
      for (let r = 0, i = 0; i < t.length; i++) {
        let a = t[i];
        if (a.empty ? a.from <= r : a.from < r) return e.normalized(t.slice(), n);
        r = a.to;
      }
      return new e(t, n);
    }
    static cursor(e, t = 0, n, r) {
      return lt.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)), r);
    }
    static range(e, t, n, r, i) {
      let a = r == null ? 7 : Math.min(6, r);
      return !i && e != t && (i = t < e ? 1 : -1), i && (a |= i < 0 ? 8 : 16), t < e ? lt.create(t, e, a | 32, n) : lt.create(e, t, a, n);
    }
    static undirectionalRange(e, t) {
      return lt.create(e, t, 64, void 0);
    }
    static normalized(t, n = 0) {
      let r = t[n];
      t.sort((e, t) => e.from - t.from), n = t.indexOf(r);
      for (let r = 1; r < t.length; r++) {
        let i = t[r],
          a = t[r - 1];
        if (i.empty ? i.from <= a.to : i.from < a.to) {
          let o = a.from,
            s = Math.max(i.to, a.to);
          r <= n && n--, t.splice(--r, 2, i.anchor > i.head ? e.range(s, o) : e.range(o, s));
        }
      }
      return new e(t, n);
    }
  };
function ut(e, t) {
  for (let n of e.ranges) if (n.to > t) throw RangeError(`Selection points outside of document`);
}
var dt = 0,
  O = class e {
    constructor(e, t, n, r, i) {
      this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = r, this.id = dt++, this.default = e([]), this.extensions = typeof i == `function` ? i(this) : i;
    }
    get reader() {
      return this;
    }
    static define(t = {}) {
      return new e(t.combine || (e => e), t.compareInput || ((e, t) => e === t), t.compare || (t.combine ? (e, t) => e === t : ft), !!t.static, t.enables);
    }
    of(e) {
      return new pt([], this, 0, e);
    }
    compute(e, t) {
      if (this.isStatic) throw Error(`Can't compute a static facet`);
      return new pt(e, this, 1, t);
    }
    computeN(e, t) {
      if (this.isStatic) throw Error(`Can't compute a static facet`);
      return new pt(e, this, 2, t);
    }
    from(e, t) {
      return t ||= e => e, this.compute([e], n => t(n.field(e)));
    }
  };
function ft(e, t) {
  return e == t || e.length == t.length && e.every((e, n) => e === t[n]);
}
var pt = class {
  constructor(e, t, n, r) {
    this.dependencies = e, this.facet = t, this.type = n, this.value = r, this.id = dt++;
  }
  dynamicSlot(e) {
    let t = this.value,
      n = this.facet.compareInput,
      r = this.id,
      i = e[r] >> 1,
      a = this.type == 2,
      o = !1,
      s = !1,
      c = [];
    for (let t of this.dependencies) t == `doc` ? o = !0 : t == `selection` ? s = !0 : (e[t.id] ?? 1) & 1 || c.push(e[t.id]);
    return {
      create(e) {
        return e.values[i] = t(e), 1;
      },
      update(e, r) {
        if (o && r.docChanged || s && (r.docChanged || r.selection) || ht(e, c)) {
          let r = t(e);
          if (a ? !mt(r, e.values[i], n) : !n(r, e.values[i])) return e.values[i] = r, 1;
        }
        return 0;
      },
      reconfigure: (e, o) => {
        let s,
          c = o.config.address[r];
        if (c != null) {
          let r = Dt(o, c);
          if (this.dependencies.every(t => t instanceof O ? o.facet(t) === e.facet(t) : t instanceof k ? o.field(t, !1) == e.field(t, !1) : !0) || (a ? mt(s = t(e), r, n) : n(s = t(e), r))) return e.values[i] = r, 0;
        } else s = t(e);
        return e.values[i] = s, 1;
      }
    };
  }
  get extension() {
    return this;
  }
};
function mt(e, t, n) {
  if (e.length != t.length) return !1;
  for (let r = 0; r < e.length; r++) if (!n(e[r], t[r])) return !1;
  return !0;
}
function ht(e, t) {
  let n = !1;
  for (let r of t) Et(e, r) & 1 && (n = !0);
  return n;
}
function gt(e, t, n) {
  let r = n.map(t => e[t.id]),
    i = n.map(e => e.type),
    a = r.filter(e => !(e & 1)),
    o = e[t.id] >> 1;
  function s(e) {
    let n = [];
    for (let t = 0; t < r.length; t++) {
      let a = Dt(e, r[t]);
      if (i[t] == 2) for (let e of a) n.push(e);else n.push(a);
    }
    return t.combine(n);
  }
  return {
    create(e) {
      for (let t of r) Et(e, t);
      return e.values[o] = s(e), 1;
    },
    update(e, n) {
      if (!ht(e, a)) return 0;
      let r = s(e);
      return t.compare(r, e.values[o]) ? 0 : (e.values[o] = r, 1);
    },
    reconfigure(e, i) {
      let a = ht(e, r),
        c = i.config.facets[t.id],
        l = i.facet(t);
      if (c && !a && ft(n, c)) return e.values[o] = l, 0;
      let u = s(e);
      return t.compare(u, l) ? (e.values[o] = l, 0) : (e.values[o] = u, 1);
    }
  };
}
var _t = O.define({
    static: !0
  }),
  k = class e {
    constructor(e, t, n, r, i) {
      this.id = e, this.createF = t, this.updateF = n, this.compareF = r, this.spec = i, this.provides = void 0;
    }
    static define(t) {
      let n = new e(dt++, t.create, t.update, t.compare || ((e, t) => e === t), t);
      return t.provide && (n.provides = t.provide(n)), n;
    }
    create(e) {
      return (e.facet(_t).find(e => e.field == this)?.create || this.createF)(e);
    }
    slot(e) {
      let t = e[this.id] >> 1;
      return {
        create: e => (e.values[t] = this.create(e), 1),
        update: (e, n) => {
          let r = e.values[t],
            i = this.updateF(r, n);
          return this.compareF(r, i) ? 0 : (e.values[t] = i, 1);
        },
        reconfigure: (e, n) => {
          let r = e.facet(_t),
            i = n.facet(_t),
            a;
          return (a = r.find(e => e.field == this)) && a != i.find(e => e.field == this) ? (e.values[t] = a.create(e), 1) : n.config.address[this.id] == null ? (e.values[t] = this.create(e), 1) : (e.values[t] = n.field(this), 0);
        }
      };
    }
    init(e) {
      return [this, _t.of({
        field: this,
        create: e
      })];
    }
    get extension() {
      return this;
    }
  },
  vt = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
  };
function yt(e) {
  return t => new xt(t, e);
}
var bt = {
    highest: yt(vt.highest),
    high: yt(vt.high),
    default: yt(vt.default),
    low: yt(vt.low),
    lowest: yt(vt.lowest)
  },
  xt = class {
    constructor(e, t) {
      this.inner = e, this.prec = t;
    }
    get extension() {
      return this;
    }
  },
  St = class e {
    of(e) {
      return new Ct(this, e);
    }
    reconfigure(t) {
      return e.reconfigure.of({
        compartment: this,
        extension: t
      });
    }
    get(e) {
      return e.config.compartments.get(this);
    }
  },
  Ct = class {
    constructor(e, t) {
      this.compartment = e, this.inner = t;
    }
    get extension() {
      return this;
    }
  },
  wt = class e {
    constructor(e, t, n, r, i, a) {
      for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = r, this.staticValues = i, this.facets = a, this.statusTemplate = []; this.statusTemplate.length < n.length;) this.statusTemplate.push(0);
    }
    staticFacet(e) {
      let t = this.address[e.id];
      return t == null ? e.default : this.staticValues[t >> 1];
    }
    static resolve(t, n, r) {
      let i = [],
        a = Object.create(null),
        o = new Map();
      for (let e of Tt(t, n, o)) e instanceof k ? i.push(e) : (a[e.facet.id] || (a[e.facet.id] = [])).push(e);
      let s = Object.create(null),
        c = [],
        l = [];
      for (let e of i) s[e.id] = l.length << 1, l.push(t => e.slot(t));
      let u = r?.config.facets;
      for (let e in a) {
        let t = a[e],
          n = t[0].facet,
          i = u && u[e] || [];
        if (t.every(e => e.type == 0)) {
          if (s[n.id] = c.length << 1 | 1, ft(i, t)) c.push(r.facet(n));else {
            let e = n.combine(t.map(e => e.value));
            c.push(r && n.compare(e, r.facet(n)) ? r.facet(n) : e);
          }
        } else {
          for (let e of t) e.type == 0 ? (s[e.id] = c.length << 1 | 1, c.push(e.value)) : (s[e.id] = l.length << 1, l.push(t => e.dynamicSlot(t)));
          s[n.id] = l.length << 1, l.push(e => gt(e, n, t));
        }
      }
      let d = l.map(e => e(s));
      return new e(t, o, d, s, c, a);
    }
  };
function Tt(e, t, n) {
  let r = [[], [], [], [], []],
    i = new Map();
  function a(e, o) {
    let s = i.get(e);
    if (s != null) {
      if (s <= o) return;
      let t = r[s].indexOf(e);
      t > -1 && r[s].splice(t, 1), e instanceof Ct && n.delete(e.compartment);
    }
    if (i.set(e, o), Array.isArray(e)) for (let t of e) a(t, o);else if (e instanceof Ct) {
      if (n.has(e.compartment)) throw RangeError(`Duplicate use of compartment in extensions`);
      let r = t.get(e.compartment) || e.inner;
      n.set(e.compartment, r), a(r, o);
    } else if (e instanceof xt) a(e.inner, e.prec);else if (e instanceof k) r[o].push(e), e.provides && a(e.provides, o);else if (e instanceof pt) r[o].push(e), e.facet.extensions && a(e.facet.extensions, vt.default);else {
      let t = e.extension;
      if (!t) throw Error(`Unrecognized extension value in extension set (${e}).`);
      if (t == e) throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      a(t, o);
    }
  }
  return a(e, vt.default), r.reduce((e, t) => e.concat(t));
}
function Et(e, t) {
  if (t & 1) return 2;
  let n = t >> 1,
    r = e.status[n];
  if (r == 4) throw Error(`Cyclic dependency between fields and/or facets`);
  if (r & 2) return r;
  e.status[n] = 4;
  let i = e.computeSlot(e, e.config.dynamicSlots[n]);
  return e.status[n] = 2 | i;
}
function Dt(e, t) {
  return t & 1 ? e.config.staticValues[t >> 1] : e.values[t >> 1];
}
var Ot = O.define(),
  kt = O.define({
    combine: e => e.some(e => e),
    static: !0
  }),
  At = O.define({
    combine: e => e.length ? e[0] : void 0,
    static: !0
  }),
  jt = O.define(),
  Mt = O.define(),
  Nt = O.define(),
  Pt = O.define({
    combine: e => e.length ? e[0] : !1
  }),
  Ft = class {
    constructor(e, t) {
      this.type = e, this.value = t;
    }
    static define() {
      return new It();
    }
  },
  It = class {
    of(e) {
      return new Ft(this, e);
    }
  },
  Lt = class {
    constructor(e) {
      this.map = e;
    }
    of(e) {
      return new A(this, e);
    }
  },
  A = class e {
    constructor(e, t) {
      this.type = e, this.value = t;
    }
    map(t) {
      let n = this.type.map(this.value, t);
      return n === void 0 ? void 0 : n == this.value ? this : new e(this.type, n);
    }
    is(e) {
      return this.type == e;
    }
    static define(e = {}) {
      return new Lt(e.map || (e => e));
    }
    static mapEffects(e, t) {
      if (!e.length) return e;
      let n = [];
      for (let r of e) {
        let e = r.map(t);
        e && n.push(e);
      }
      return n;
    }
  };
A.reconfigure = A.define(), A.appendConfig = A.define();
var j = class e {
  constructor(t, n, r, i, a, o) {
    this.startState = t, this.changes = n, this.selection = r, this.effects = i, this.annotations = a, this.scrollIntoView = o, this._doc = null, this._state = null, r && ut(r, n.newLength), a.some(t => t.type == e.time) || (this.annotations = a.concat(e.time.of(Date.now())));
  }
  static create(t, n, r, i, a, o) {
    return new e(t, n, r, i, a, o);
  }
  get newDoc() {
    return this._doc ||= this.changes.apply(this.startState.doc);
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(t) {
    let n = this.annotation(e.userEvent);
    return !!(n && (n == t || n.length > t.length && n.slice(0, t.length) == t && n[t.length] == `.`));
  }
};
j.time = Ft.define(), j.userEvent = Ft.define(), j.addToHistory = Ft.define(), j.remote = Ft.define();
function Rt(e, t) {
  let n = [];
  for (let r = 0, i = 0;;) {
    let a, o;
    if (r < e.length && (i == t.length || t[i] >= e[r])) a = e[r++], o = e[r++];else if (i < t.length) a = t[i++], o = t[i++];else return n;
    !n.length || n[n.length - 1] < a ? n.push(a, o) : n[n.length - 1] < o && (n[n.length - 1] = o);
  }
}
function zt(e, t, n) {
  let r, i, a;
  return n ? (r = t.changes, i = T.empty(t.changes.length), a = e.changes.compose(t.changes)) : (r = t.changes.map(e.changes), i = e.changes.mapDesc(t.changes, !0), a = e.changes.compose(r)), {
    changes: a,
    selection: t.selection ? t.selection.map(i) : e.selection?.map(r),
    effects: A.mapEffects(e.effects, r).concat(A.mapEffects(t.effects, i)),
    annotations: e.annotations.length ? e.annotations.concat(t.annotations) : t.annotations,
    scrollIntoView: e.scrollIntoView || t.scrollIntoView
  };
}
function Bt(e, t, n) {
  let r = t.selection,
    i = Gt(t.annotations);
  return t.userEvent && (i = i.concat(j.userEvent.of(t.userEvent))), {
    changes: t.changes instanceof T ? t.changes : T.of(t.changes || [], n, e.facet(At)),
    selection: r && (r instanceof D ? r : D.single(r.anchor, r.head)),
    effects: Gt(t.effects),
    annotations: i,
    scrollIntoView: !!t.scrollIntoView
  };
}
function Vt(e, t, n) {
  let r = Bt(e, t.length ? t[0] : {}, e.doc.length);
  t.length && t[0].filter === !1 && (n = !1);
  for (let i = 1; i < t.length; i++) {
    t[i].filter === !1 && (n = !1);
    let a = !!t[i].sequential;
    r = zt(r, Bt(e, t[i], a ? r.changes.newLength : e.doc.length), a);
  }
  let i = j.create(e, r.changes, r.selection, r.effects, r.annotations, r.scrollIntoView);
  return Ut(n ? Ht(i) : i);
}
function Ht(e) {
  let t = e.startState,
    n = !0;
  for (let r of t.facet(jt)) {
    let t = r(e);
    if (t === !1) {
      n = !1;
      break;
    }
    Array.isArray(t) && (n = n === !0 ? t : Rt(n, t));
  }
  if (n !== !0) {
    let r, i;
    if (n === !1) i = e.changes.invertedDesc, r = T.empty(t.doc.length);else {
      let t = e.changes.filter(n);
      r = t.changes, i = t.filtered.mapDesc(t.changes).invertedDesc;
    }
    e = j.create(t, r, e.selection && e.selection.map(i), A.mapEffects(e.effects, i), e.annotations, e.scrollIntoView);
  }
  let r = t.facet(Mt);
  for (let n = r.length - 1; n >= 0; n--) {
    let i = r[n](e);
    e = i instanceof j ? i : Array.isArray(i) && i.length == 1 && i[0] instanceof j ? i[0] : Vt(t, Gt(i), !1);
  }
  return e;
}
function Ut(e) {
  let t = e.startState,
    n = t.facet(Nt),
    r = e;
  for (let i = n.length - 1; i >= 0; i--) {
    let a = n[i](e);
    a && Object.keys(a).length && (r = zt(r, Bt(t, a, e.changes.newLength), !0));
  }
  return r == e ? e : j.create(t, e.changes, e.selection, r.effects, r.annotations, r.scrollIntoView);
}
var Wt = [];
function Gt(e) {
  return e == null ? Wt : Array.isArray(e) ? e : [e];
}
var M = function (e) {
    return e[e.Word = 0] = `Word`, e[e.Space = 1] = `Space`, e[e.Other = 2] = `Other`, e;
  }(M ||= {}),
  Kt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
  qt;
try {
  qt = RegExp(`[\\p{Alphabetic}\\p{Number}_]`, `u`);
} catch {}
function Jt(e) {
  if (qt) return qt.test(e);
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (/\w/.test(n) || n > `` && (n.toUpperCase() != n.toLowerCase() || Kt.test(n))) return !0;
  }
  return !1;
}
function Yt(e) {
  return t => {
    if (!/\S/.test(t)) return M.Space;
    if (Jt(t)) return M.Word;
    for (let n = 0; n < e.length; n++) if (t.indexOf(e[n]) > -1) return M.Word;
    return M.Other;
  };
}
var N = class e {
  constructor(e, t, n, r, i, a) {
    this.config = e, this.doc = t, this.selection = n, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = i, a && (a._state = this);
    for (let e = 0; e < this.config.dynamicSlots.length; e++) Et(this, e << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t) throw RangeError(`Field is not present in this state`);
      return;
    }
    return Et(this, n), Dt(this, n);
  }
  update(...e) {
    return Vt(this, e, !0);
  }
  applyTransaction(t) {
    let n = this.config,
      {
        base: r,
        compartments: i
      } = n;
    for (let e of t.effects) e.is(St.reconfigure) ? (n &&= (i = new Map(), n.compartments.forEach((e, t) => i.set(t, e)), null), i.set(e.value.compartment, e.value.extension)) : e.is(A.reconfigure) ? (n = null, r = e.value) : e.is(A.appendConfig) && (n = null, r = Gt(r).concat(e.value));
    let a;
    n ? a = t.startState.values.slice() : (n = wt.resolve(r, i, this), a = new e(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (e, t) => t.reconfigure(e, this), null).values);
    let o = t.startState.facet(kt) ? t.newSelection : t.newSelection.asSingle();
    new e(n, t.newDoc, o, a, (e, n) => n.update(e, t), t);
  }
  replaceSelection(e) {
    return typeof e == `string` && (e = this.toText(e)), this.changeByRange(t => ({
      changes: {
        from: t.from,
        to: t.to,
        insert: e
      },
      range: D.cursor(t.from + e.length)
    }));
  }
  changeByRange(e) {
    let t = this.selection,
      n = e(t.ranges[0]),
      r = this.changes(n.changes),
      i = [n.range],
      a = Gt(n.effects);
    for (let n = 1; n < t.ranges.length; n++) {
      let o = e(t.ranges[n]),
        s = this.changes(o.changes),
        c = s.map(r);
      for (let e = 0; e < n; e++) i[e] = i[e].map(c);
      let l = r.mapDesc(s, !0);
      i.push(o.range.map(l)), r = r.compose(c), a = A.mapEffects(a, c).concat(A.mapEffects(Gt(o.effects), l));
    }
    return {
      changes: r,
      selection: D.create(i, t.mainIndex),
      effects: a
    };
  }
  changes(t = []) {
    return t instanceof T ? t : T.of(t, this.doc.length, this.facet(e.lineSeparator));
  }
  toText(t) {
    return b.of(t.split(this.facet(e.lineSeparator) || nt));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Et(this, t), Dt(this, t));
  }
  toJSON(e) {
    let t = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (e) for (let n in e) {
      let r = e[n];
      r instanceof k && this.config.address[r.id] != null && (t[n] = r.spec.toJSON(this.field(e[n]), this));
    }
    return t;
  }
  static fromJSON(t, n = {}, r) {
    if (!t || typeof t.doc != `string`) throw RangeError(`Invalid JSON representation for EditorState`);
    let i = [];
    if (r) {
      for (let e in r) if (Object.prototype.hasOwnProperty.call(t, e)) {
        let n = r[e],
          a = t[e];
        i.push(n.init(e => n.spec.fromJSON(a, e)));
      }
    }
    return e.create({
      doc: t.doc,
      selection: D.fromJSON(t.selection),
      extensions: n.extensions ? i.concat([n.extensions]) : i
    });
  }
  static create(t = {}) {
    let n = wt.resolve(t.extensions || [], new Map()),
      r = t.doc instanceof b ? t.doc : b.of((t.doc || ``).split(n.staticFacet(e.lineSeparator) || nt)),
      i = t.selection ? t.selection instanceof D ? t.selection : D.single(t.selection.anchor, t.selection.head) : D.single(0);
    return ut(i, r.length), n.staticFacet(kt) || (i = i.asSingle()), new e(n, r, i, n.dynamicSlots.map(() => null), (e, t) => t.create(e), null);
  }
  get tabSize() {
    return this.facet(e.tabSize);
  }
  get lineBreak() {
    return this.facet(e.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Pt);
  }
  phrase(t, ...n) {
    for (let n of this.facet(e.phrases)) if (Object.prototype.hasOwnProperty.call(n, t)) {
      t = n[t];
      break;
    }
    return n.length && (t = t.replace(/\$(\$|\d*)/g, (e, t) => {
      if (t == `$`) return `$`;
      let r = +(t || 1);
      return !r || r > n.length ? e : n[r - 1];
    })), t;
  }
  languageDataAt(e, t, n = -1) {
    let r = [];
    for (let i of this.facet(Ot)) for (let a of i(this, t, n)) Object.prototype.hasOwnProperty.call(a, e) && r.push(a[e]);
    return r;
  }
  charCategorizer(e) {
    let t = this.languageDataAt(`wordChars`, e);
    return Yt(t.length ? t[0] : ``);
  }
  wordAt(e) {
    let {
        text: t,
        from: n,
        length: r
      } = this.doc.lineAt(e),
      i = this.charCategorizer(e),
      a = e - n,
      o = e - n;
    for (; a > 0;) {
      let e = S(t, a, !1);
      if (i(t.slice(e, a)) != M.Word) break;
      a = e;
    }
    for (; o < r;) {
      let e = S(t, o);
      if (i(t.slice(o, e)) != M.Word) break;
      o = e;
    }
    return a == o ? null : D.range(a + n, o + n);
  }
};
N.allowMultipleSelections = kt, N.tabSize = O.define({
  combine: e => e.length ? e[0] : 4
}), N.lineSeparator = At, N.readOnly = Pt, N.phrases = O.define({
  compare(e, t) {
    let n = Object.keys(e),
      r = Object.keys(t);
    return n.length == r.length && n.every(n => e[n] == t[n]);
  }
}), N.languageData = Ot, N.changeFilter = jt, N.transactionFilter = Mt, N.transactionExtender = Nt, St.reconfigure = A.define();
function Xt(e, t, n = {}) {
  let r = {};
  for (let t of e) for (let e of Object.keys(t)) {
    let i = t[e],
      a = r[e];
    if (a === void 0) r[e] = i;else if (a !== i && i !== void 0) {
      if (Object.hasOwnProperty.call(n, e)) r[e] = n[e](a, i);else throw Error(`Config merge conflict for field ` + e);
    }
  }
  for (let e in t) r[e] === void 0 && (r[e] = t[e]);
  return r;
}
var Zt = class {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return $t.create(e, t, this);
  }
};
Zt.prototype.startSide = Zt.prototype.endSide = 0, Zt.prototype.point = !1, Zt.prototype.mapMode = w.TrackDel;
function Qt(e, t) {
  return e == t || e.constructor == t.constructor && e.eq(t);
}
var $t = class e {
  constructor(e, t, n) {
    this.from = e, this.to = t, this.value = n;
  }
  static create(t, n, r) {
    return new e(t, n, r);
  }
};
function en(e, t) {
  return e.from - t.from || e.value.startSide - t.value.startSide;
}
var tn = class e {
    constructor(e, t, n, r) {
      this.from = e, this.to = t, this.value = n, this.maxPoint = r;
    }
    get length() {
      return this.to[this.to.length - 1];
    }
    findIndex(e, t, n, r = 0) {
      let i = n ? this.to : this.from;
      for (let a = r, o = i.length;;) {
        if (a == o) return a;
        let r = a + o >> 1,
          s = i[r] - e || (n ? this.value[r].endSide : this.value[r].startSide) - t;
        if (r == a) return s >= 0 ? a : o;
        s >= 0 ? o = r : a = r + 1;
      }
    }
    between(e, t, n, r) {
      for (let i = this.findIndex(t, -1e9, !0), a = this.findIndex(n, 1e9, !1, i); i < a; i++) if (r(this.from[i] + e, this.to[i] + e, this.value[i]) === !1) return !1;
    }
    map(t, n) {
      let r = [],
        i = [],
        a = [],
        o = -1,
        s = -1;
      for (let e = 0; e < this.value.length; e++) {
        let c = this.value[e],
          l = this.from[e] + t,
          u = this.to[e] + t,
          d,
          f;
        if (l == u) {
          let e = n.mapPos(l, c.startSide, c.mapMode);
          if (e == null || (d = f = e, c.startSide != c.endSide && (f = n.mapPos(l, c.endSide), f < d))) continue;
        } else if (d = n.mapPos(l, c.startSide), f = n.mapPos(u, c.endSide), d > f || d == f && c.startSide > 0 && c.endSide <= 0) continue;
        (f - d || c.endSide - c.startSide) < 0 || (o < 0 && (o = d), c.point && (s = Math.max(s, f - d)), r.push(c), i.push(d - o), a.push(f - o));
      }
      return {
        mapped: r.length ? new e(i, a, r, s) : null,
        pos: o
      };
    }
  },
  P = class e {
    constructor(e, t, n, r) {
      this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = r;
    }
    static create(t, n, r, i) {
      return new e(t, n, r, i);
    }
    get length() {
      let e = this.chunk.length - 1;
      return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
    }
    get size() {
      if (this.isEmpty) return 0;
      let e = this.nextLayer.size;
      for (let t of this.chunk) e += t.value.length;
      return e;
    }
    chunkEnd(e) {
      return this.chunkPos[e] + this.chunk[e].length;
    }
    update(t) {
      let {
          add: n = [],
          sort: r = !1,
          filterFrom: i = 0,
          filterTo: a = this.length
        } = t,
        o = t.filter;
      if (n.length == 0 && !o) return this;
      if (r && (n = n.slice().sort(en)), this.isEmpty) return n.length ? e.of(n) : this;
      let s = new on(this, null, -1).goto(0),
        c = 0,
        l = [],
        u = new rn();
      for (; s.value || c < n.length;) if (c < n.length && (s.from - n[c].from || s.startSide - n[c].value.startSide) >= 0) {
        let e = n[c++];
        u.addInner(e.from, e.to, e.value) || l.push(e);
      } else s.rangeIndex == 1 && s.chunkIndex < this.chunk.length && (c == n.length || this.chunkEnd(s.chunkIndex) < n[c].from) && (!o || i > this.chunkEnd(s.chunkIndex) || a < this.chunkPos[s.chunkIndex]) && u.addChunk(this.chunkPos[s.chunkIndex], this.chunk[s.chunkIndex]) ? s.nextChunk() : ((!o || i > s.to || a < s.from || o(s.from, s.to, s.value)) && (u.addInner(s.from, s.to, s.value) || l.push($t.create(s.from, s.to, s.value))), s.next());
      return u.finishInner(this.nextLayer.isEmpty && !l.length ? e.empty : this.nextLayer.update({
        add: l,
        filter: o,
        filterFrom: i,
        filterTo: a
      }));
    }
    map(t) {
      if (t.empty || this.isEmpty) return this;
      let n = [],
        r = [],
        i = -1;
      for (let e = 0; e < this.chunk.length; e++) {
        let a = this.chunkPos[e],
          o = this.chunk[e],
          s = t.touchesRange(a, a + o.length);
        if (s === !1) i = Math.max(i, o.maxPoint), n.push(o), r.push(t.mapPos(a));else if (s === !0) {
          let {
            mapped: e,
            pos: s
          } = o.map(a, t);
          e && (i = Math.max(i, e.maxPoint), n.push(e), r.push(s));
        }
      }
      let a = this.nextLayer.map(t);
      return n.length == 0 ? a : new e(r, n, a || e.empty, i);
    }
    between(e, t, n) {
      if (!this.isEmpty) {
        for (let r = 0; r < this.chunk.length; r++) {
          let i = this.chunkPos[r],
            a = this.chunk[r];
          if (t >= i && e <= i + a.length && a.between(i, e - i, t - i, n) === !1) return;
        }
        this.nextLayer.between(e, t, n);
      }
    }
    iter(e = 0) {
      return sn.from([this]).goto(e);
    }
    get isEmpty() {
      return this.nextLayer == this;
    }
    static iter(e, t = 0) {
      return sn.from(e).goto(t);
    }
    static compare(e, t, n, r, i = -1) {
      let a = e.filter(e => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i),
        o = t.filter(e => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i),
        s = an(a, o, n),
        c = new ln(a, s, i),
        l = new ln(o, s, i);
      n.iterGaps((e, t, n) => un(c, e, l, t, n, r)), n.empty && n.length == 0 && un(c, 0, l, 0, 0, r);
    }
    static eq(e, t, n = 0, r) {
      r ??= 1e9 - 1;
      let i = e.filter(e => !e.isEmpty && t.indexOf(e) < 0),
        a = t.filter(t => !t.isEmpty && e.indexOf(t) < 0);
      if (i.length != a.length) return !1;
      if (!i.length) return !0;
      let o = an(i, a),
        s = new ln(i, o, 0).goto(n),
        c = new ln(a, o, 0).goto(n);
      for (;;) {
        if (s.to != c.to || !dn(s.active, c.active) || s.point && (!c.point || !Qt(s.point, c.point))) return !1;
        if (s.to > r) return !0;
        s.next(), c.next();
      }
    }
    static spans(e, t, n, r, i = -1) {
      let a = new ln(e, null, i).goto(t),
        o = t,
        s = a.openStart;
      for (;;) {
        let e = Math.min(a.to, n);
        if (a.point) {
          let n = a.activeForPoint(a.to),
            i = a.pointFrom < t ? n.length + 1 : a.point.startSide < 0 ? n.length : Math.min(n.length, s);
          r.point(o, e, a.point, n, i, a.pointRank), s = Math.min(a.openEnd(e), n.length);
        } else e > o && (r.span(o, e, a.active, s), s = a.openEnd(e));
        if (a.to > n) return s + (a.point && a.to > n ? 1 : 0);
        o = a.to, a.next();
      }
    }
    static of(e, t = !1) {
      let n = new rn();
      for (let r of e instanceof $t ? [e] : t ? nn(e) : e) n.add(r.from, r.to, r.value);
      return n.finish();
    }
    static join(t) {
      if (!t.length) return e.empty;
      let n = t[t.length - 1];
      for (let r = t.length - 2; r >= 0; r--) for (let i = t[r]; i != e.empty; i = i.nextLayer) n = new e(i.chunkPos, i.chunk, n, Math.max(i.maxPoint, n.maxPoint));
      return n;
    }
  };
P.empty = new P([], [], null, -1);
function nn(e) {
  if (e.length > 1) for (let t = e[0], n = 1; n < e.length; n++) {
    let r = e[n];
    if (en(t, r) > 0) return e.slice().sort(en);
    t = r;
  }
  return e;
}
P.empty.nextLayer = P.empty;
var rn = class e {
  finishChunk(e) {
    this.chunks.push(new tn(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(t, n, r) {
    this.addInner(t, n, r) || (this.nextLayer ||= new e()).add(t, n, r);
  }
  addInner(e, t, n) {
    let r = e - this.lastTo || n.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0) throw Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let n = t.value.length - 1;
    return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
  }
  finish() {
    return this.finishInner(P.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return e;
    let t = P.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
};
function an(e, t, n) {
  let r = new Map();
  for (let t of e) for (let e = 0; e < t.chunk.length; e++) t.chunk[e].maxPoint <= 0 && r.set(t.chunk[e], t.chunkPos[e]);
  let i = new Set();
  for (let e of t) for (let t = 0; t < e.chunk.length; t++) {
    let a = r.get(e.chunk[t]);
    a != null && (n ? n.mapPos(a) : a) == e.chunkPos[t] && !n?.touchesRange(a, a + e.chunk[t].length) && i.add(e.chunk[t]);
  }
  return i;
}
var on = class {
    constructor(e, t, n, r = 0) {
      this.layer = e, this.skip = t, this.minPoint = n, this.rank = r;
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    get endSide() {
      return this.value ? this.value.endSide : 0;
    }
    goto(e, t = -1e9) {
      return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
    }
    gotoInner(e, t, n) {
      for (; this.chunkIndex < this.layer.chunk.length;) {
        let t = this.layer.chunk[this.chunkIndex];
        if (!(this.skip && this.skip.has(t) || this.layer.chunkEnd(this.chunkIndex) < e || t.maxPoint < this.minPoint)) break;
        this.chunkIndex++, n = !1;
      }
      if (this.chunkIndex < this.layer.chunk.length) {
        let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
        (!n || this.rangeIndex < r) && this.setRangeIndex(r);
      }
      this.next();
    }
    forward(e, t) {
      (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
    }
    next() {
      for (;;) if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          t = this.layer.chunk[this.chunkIndex],
          n = e + t.from[this.rangeIndex];
        if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
      }
    }
    setRangeIndex(e) {
      if (e == this.layer.chunk[this.chunkIndex].value.length) {
        if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
        this.rangeIndex = 0;
      } else this.rangeIndex = e;
    }
    nextChunk() {
      this.chunkIndex++, this.rangeIndex = 0, this.next();
    }
    compare(e) {
      return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
    }
  },
  sn = class e {
    constructor(e) {
      this.heap = e;
    }
    static from(t, n = null, r = -1) {
      let i = [];
      for (let e = 0; e < t.length; e++) for (let a = t[e]; !a.isEmpty; a = a.nextLayer) a.maxPoint >= r && i.push(new on(a, n, r, e));
      return i.length == 1 ? i[0] : new e(i);
    }
    get startSide() {
      return this.value ? this.value.startSide : 0;
    }
    goto(e, t = -1e9) {
      for (let n of this.heap) n.goto(e, t);
      for (let e = this.heap.length >> 1; e >= 0; e--) cn(this.heap, e);
      return this.next(), this;
    }
    forward(e, t) {
      for (let n of this.heap) n.forward(e, t);
      for (let e = this.heap.length >> 1; e >= 0; e--) cn(this.heap, e);
      (this.to - e || this.value.endSide - t) < 0 && this.next();
    }
    next() {
      if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;else {
        let e = this.heap[0];
        this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), cn(this.heap, 0);
      }
    }
  };
function cn(e, t) {
  for (let n = e[t];;) {
    let r = (t << 1) + 1;
    if (r >= e.length) break;
    let i = e[r];
    if (r + 1 < e.length && i.compare(e[r + 1]) >= 0 && (i = e[r + 1], r++), n.compare(i) < 0) break;
    e[r] = n, e[t] = i, t = r;
  }
}
var ln = class {
  constructor(e, t, n) {
    this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = sn.from(e, t, n);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;) this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    fn(this.active, e), fn(this.activeTo, e), fn(this.activeRank, e), this.minActive = mn(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0,
      {
        value: n,
        to: r,
        rank: i
      } = this.cursor;
    for (; t < this.activeRank.length && (i - this.activeRank[t] || r - this.activeTo[t]) > 0;) t++;
    pn(this.active, t, n), pn(this.activeTo, t, r), pn(this.activeRank, t, i), e && pn(e, t, this.cursor.from), this.minActive = mn(this.active, this.activeTo);
  }
  next() {
    let e = this.to,
      t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (;;) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), n && fn(n, r);
      } else if (!this.cursor.value) {
        this.to = this.endSide = 1e9;
        break;
      } else if (this.cursor.from > e) {
        this.to = this.cursor.from, this.endSide = this.cursor.startSide;
        break;
      } else {
        let e = this.cursor.value;
        if (!e.point) this.addActive(n), this.cursor.next();else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();else {
          this.point = e, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = e.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
          break;
        }
      }
    }
    if (n) {
      this.openStart = 0;
      for (let t = n.length - 1; t >= 0 && n[t] < e; t--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--) (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--) t++;
    return t;
  }
};
function un(e, t, n, r, i, a) {
  e.goto(t), n.goto(r);
  let o = r + i,
    s = r,
    c = r - t,
    l = !!a.boundChange;
  for (let t = !1;;) {
    let r = e.to + c - n.to,
      i = r || e.endSide - n.endSide,
      u = i < 0 ? e.to + c : n.to,
      d = Math.min(u, o);
    if (e.point || n.point ? (e.point && n.point && Qt(e.point, n.point) && dn(e.activeForPoint(e.to), n.activeForPoint(n.to)) || a.comparePoint(s, d, e.point, n.point), t = !1) : (t && a.boundChange(s), d > s && !dn(e.active, n.active) && a.compareRange(s, d, e.active, n.active), l && d < o && (r || e.openEnd(u) != n.openEnd(u)) && (t = !0)), u > o) break;
    s = u, i <= 0 && e.next(), i >= 0 && n.next();
  }
}
function dn(e, t) {
  if (e.length != t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] != t[n] && !Qt(e[n], t[n])) return !1;
  return !0;
}
function fn(e, t) {
  for (let n = t, r = e.length - 1; n < r; n++) e[n] = e[n + 1];
  e.pop();
}
function pn(e, t, n) {
  for (let n = e.length - 1; n >= t; n--) e[n + 1] = e[n];
  e[t] = n;
}
function mn(e, t) {
  let n = -1,
    r = 1e9;
  for (let i = 0; i < t.length; i++) (t[i] - r || e[i].endSide - e[n].endSide) < 0 && (n = i, r = t[i]);
  return n;
}
function hn(e, t, n = e.length) {
  let r = 0;
  for (let i = 0; i < n && i < e.length;) e.charCodeAt(i) == 9 ? (r += t - r % t, i++) : (r++, i = S(e, i));
  return r;
}
function gn(e, t, n, r) {
  for (let r = 0, i = 0;;) {
    if (i >= t) return r;
    if (r == e.length) break;
    i += e.charCodeAt(r) == 9 ? n - i % n : 1, r = S(e, r);
  }
  return r === !0 ? -1 : e.length;
}
for (var _n = `ͼ`, vn = typeof Symbol > `u` ? `__ͼ` : Symbol.for(_n), yn = typeof Symbol > `u` ? `__styleSet` + Math.floor(Math.random() * 1e8) : Symbol(`styleSet`), bn = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : {}, xn = class {
    constructor(e, t) {
      this.rules = [];
      let {
        finish: n
      } = t || {};
      function r(e) {
        return /^@/.test(e) ? [e] : e.split(/,\s*/);
      }
      function i(e, t, a, o) {
        let s = [],
          c = /^@(\w+)\b/.exec(e[0]),
          l = c && c[1] == `keyframes`;
        if (c && t == null) return a.push(e[0] + `;`);
        for (let n in t) {
          let o = t[n];
          if (/&/.test(n)) i(n.split(/,\s*/).map(t => e.map(e => t.replace(/&/, e))).reduce((e, t) => e.concat(t)), o, a);else if (o && typeof o == `object`) {
            if (!c) throw RangeError(`The value of a property (` + n + `) should be a primitive value.`);
            i(r(n), o, s, l);
          } else o != null && s.push(n.replace(/_.*/, ``).replace(/[A-Z]/g, e => `-` + e.toLowerCase()) + `: ` + o + `;`);
        }
        (s.length || l) && a.push((n && !c && !o ? e.map(n) : e).join(`, `) + ` {` + s.join(` `) + `}`);
      }
      for (let t in e) i(r(t), e[t], this.rules);
    }
    getRules() {
      return this.rules.join(`
`);
    }
    static newName() {
      let e = bn[vn] || 1;
      return bn[vn] = e + 1, _n + e.toString(36);
    }
    static mount(e, t, n) {
      let r = e[yn],
        i = n && n.nonce;
      r ? i && r.setNonce(i) : r = new Cn(e, i), r.mount(Array.isArray(t) ? t : [t], e);
    }
  }, Sn = new Map(), Cn = class {
    constructor(e, t) {
      let n = e.ownerDocument || e,
        r = n.defaultView;
      if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
        let t = Sn.get(n);
        if (t) return e[yn] = t;
        this.sheet = new r.CSSStyleSheet(), Sn.set(n, this);
      } else this.styleTag = n.createElement(`style`), t && this.styleTag.setAttribute(`nonce`, t);
      this.modules = [], e[yn] = this;
    }
    mount(e, t) {
      let n = this.sheet,
        r = 0,
        i = 0;
      for (let t = 0; t < e.length; t++) {
        let a = e[t],
          o = this.modules.indexOf(a);
        if (o < i && o > -1 && (this.modules.splice(o, 1), i--, o = -1), o == -1) {
          if (this.modules.splice(i++, 0, a), n) for (let e = 0; e < a.rules.length; e++) n.insertRule(a.rules[e], r++);
        } else {
          for (; i < o;) r += this.modules[i++].rules.length;
          r += a.rules.length, i++;
        }
      }
      if (n) t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);else {
        let e = ``;
        for (let t = 0; t < this.modules.length; t++) e += this.modules[t].getRules() + `
`;
        this.styleTag.textContent = e;
        let n = t.head || t;
        this.styleTag.parentNode != n && n.insertBefore(this.styleTag, n.firstChild);
      }
    }
    setNonce(e) {
      this.styleTag && this.styleTag.getAttribute(`nonce`) != e && this.styleTag.setAttribute(`nonce`, e);
    }
  }, wn = {
    8: `Backspace`,
    9: `Tab`,
    10: `Enter`,
    12: `NumLock`,
    13: `Enter`,
    16: `Shift`,
    17: `Control`,
    18: `Alt`,
    20: `CapsLock`,
    27: `Escape`,
    32: ` `,
    33: `PageUp`,
    34: `PageDown`,
    35: `End`,
    36: `Home`,
    37: `ArrowLeft`,
    38: `ArrowUp`,
    39: `ArrowRight`,
    40: `ArrowDown`,
    44: `PrintScreen`,
    45: `Insert`,
    46: `Delete`,
    59: `;`,
    61: `=`,
    91: `Meta`,
    92: `Meta`,
    106: `*`,
    107: `+`,
    108: `,`,
    109: `-`,
    110: `.`,
    111: `/`,
    144: `NumLock`,
    145: `ScrollLock`,
    160: `Shift`,
    161: `Shift`,
    162: `Control`,
    163: `Control`,
    164: `Alt`,
    165: `Alt`,
    173: `-`,
    186: `;`,
    187: `=`,
    188: `,`,
    189: `-`,
    190: `.`,
    191: `/`,
    192: "`",
    219: `[`,
    220: `\\`,
    221: `]`,
    222: `'`
  }, Tn = {
    48: `)`,
    49: `!`,
    50: `@`,
    51: `#`,
    52: `$`,
    53: `%`,
    54: `^`,
    55: `&`,
    56: `*`,
    57: `(`,
    59: `:`,
    61: `+`,
    173: `_`,
    186: `:`,
    187: `+`,
    188: `<`,
    189: `_`,
    190: `>`,
    191: `?`,
    192: `~`,
    219: `{`,
    220: `|`,
    221: `}`,
    222: `"`
  }, En = typeof navigator < `u` && /Mac/.test(navigator.platform), Dn = typeof navigator < `u` && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), F = 0; F < 10; F++) wn[48 + F] = wn[96 + F] = String(F);
for (var F = 1; F <= 24; F++) wn[F + 111] = `F` + F;
for (var F = 65; F <= 90; F++) wn[F] = String.fromCharCode(F + 32), Tn[F] = String.fromCharCode(F);
for (var On in wn) Tn.hasOwnProperty(On) || (Tn[On] = wn[On]);
function kn(e) {
  var t = !(En && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || Dn && e.shiftKey && e.key && e.key.length == 1 || e.key == `Unidentified`) && e.key || (e.shiftKey ? Tn : wn)[e.keyCode] || e.key || `Unidentified`;
  return t == `Esc` && (t = `Escape`), t == `Del` && (t = `Delete`), t == `Left` && (t = `ArrowLeft`), t == `Up` && (t = `ArrowUp`), t == `Right` && (t = `ArrowRight`), t == `Down` && (t = `ArrowDown`), t;
}
function An() {
  var e = arguments[0];
  typeof e == `string` && (e = document.createElement(e));
  var t = 1,
    n = arguments[1];
  if (n && typeof n == `object` && n.nodeType == null && !Array.isArray(n)) {
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      var i = n[r];
      typeof i == `string` ? e.setAttribute(r, i) : i != null && (e[r] = i);
    }
    t++;
  }
  for (; t < arguments.length; t++) jn(e, arguments[t]);
  return e;
}
function jn(e, t) {
  if (typeof t == `string`) e.appendChild(document.createTextNode(t));else if (t != null) {
    if (t.nodeType != null) e.appendChild(t);else if (Array.isArray(t)) for (var n = 0; n < t.length; n++) jn(e, t[n]);else throw RangeError(`Unsupported child node: ` + t);
  }
}
var I = typeof navigator < `u` ? navigator : {
    userAgent: ``,
    vendor: ``,
    platform: ``
  },
  Mn = typeof document < `u` ? document : {
    documentElement: {
      style: {}
    }
  },
  Nn = /Edge\/(\d+)/.exec(I.userAgent),
  Pn = /MSIE \d/.test(I.userAgent),
  Fn = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(I.userAgent),
  In = !!(Pn || Fn || Nn),
  Ln = !In && /gecko\/(\d+)/i.test(I.userAgent),
  Rn = !In && /Chrome\/(\d+)/.exec(I.userAgent),
  zn = `webkitFontSmoothing` in Mn.documentElement.style,
  Bn = !In && /Apple Computer/.test(I.vendor),
  Vn = Bn && (/Mobile\/\w+/.test(I.userAgent) || I.maxTouchPoints > 2),
  L = {
    mac: Vn || /Mac/.test(I.platform),
    windows: /Win/.test(I.platform),
    linux: /Linux|X11/.test(I.platform),
    ie: In,
    ie_version: Pn ? Mn.documentMode || 6 : Fn ? +Fn[1] : Nn ? +Nn[1] : 0,
    gecko: Ln,
    gecko_version: Ln ? +(/Firefox\/(\d+)/.exec(I.userAgent) || [0, 0])[1] : 0,
    chrome: !!Rn,
    chrome_version: Rn ? +Rn[1] : 0,
    ios: Vn,
    android: /Android\b/.test(I.userAgent),
    webkit: zn,
    webkit_version: zn ? +(/\bAppleWebKit\/(\d+)/.exec(I.userAgent) || [0, 0])[1] : 0,
    safari: Bn,
    safari_version: Bn ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(I.userAgent) || [0, 0])[1] : 0,
    tabSize: Mn.documentElement.style.tabSize == null ? `-moz-tab-size` : `tab-size`
  };
function Hn(e, t) {
  for (let n in e) n == `class` && t.class ? t.class += ` ` + e.class : n == `style` && t.style ? t.style += `;` + e.style : t[n] = e[n];
  return t;
}
var Un = Object.create(null);
function Wn(e, t, n) {
  if (e == t) return !0;
  e ||= Un, t ||= Un;
  let r = Object.keys(e),
    i = Object.keys(t);
  if (r.length - (n && r.indexOf(n) > -1 ? 1 : 0) != i.length - (n && i.indexOf(n) > -1 ? 1 : 0)) return !1;
  for (let a of r) if (a != n && (i.indexOf(a) == -1 || e[a] !== t[a])) return !1;
  return !0;
}
function Gn(e, t) {
  for (let n = e.attributes.length - 1; n >= 0; n--) {
    let r = e.attributes[n].name;
    t[r] ?? e.removeAttribute(r);
  }
  for (let n in t) {
    let r = t[n];
    n == `style` ? e.style.cssText = r : e.getAttribute(n) != r && e.setAttribute(n, r);
  }
}
function Kn(e, t, n) {
  let r = !1;
  if (t) for (let i in t) n && i in n || (r = !0, i == `style` ? e.style.cssText = `` : e.removeAttribute(i));
  if (n) for (let i in n) t && t[i] == n[i] || (r = !0, i == `style` ? e.style.cssText = n[i] : e.setAttribute(i, n[i]));
  return r;
}
function qn(e) {
  let t = Object.create(null);
  for (let n = 0; n < e.attributes.length; n++) {
    let r = e.attributes[n];
    t[r.name] = r.value;
  }
  return t;
}
var Jn = class {
    eq(e) {
      return !1;
    }
    updateDOM(e, t, n) {
      return !1;
    }
    compare(e) {
      return this == e || this.constructor == e.constructor && this.eq(e);
    }
    get estimatedHeight() {
      return -1;
    }
    get lineBreaks() {
      return 0;
    }
    ignoreEvent(e) {
      return !0;
    }
    coordsAt(e, t, n) {
      return null;
    }
    get isHidden() {
      return !1;
    }
    get editable() {
      return !1;
    }
    destroy(e) {}
  },
  R = function (e) {
    return e[e.Text = 0] = `Text`, e[e.WidgetBefore = 1] = `WidgetBefore`, e[e.WidgetAfter = 2] = `WidgetAfter`, e[e.WidgetRange = 3] = `WidgetRange`, e;
  }(R ||= {}),
  z = class extends Zt {
    constructor(e, t, n, r) {
      super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = r;
    }
    get heightRelevant() {
      return !1;
    }
    static mark(e) {
      return new Yn(e);
    }
    static widget(e) {
      let t = Math.max(-1e4, Math.min(1e4, e.side || 0)),
        n = !!e.block;
      return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Zn(e, t, t, n, e.widget || null, !1);
    }
    static replace(e) {
      let t = !!e.block,
        n,
        r;
      if (e.isBlockGap) n = -5e8, r = 4e8;else {
        let {
          start: i,
          end: a
        } = Qn(e, t);
        n = (i ? t ? -3e8 : -1 : 5e8) - 1, r = (a ? t ? 2e8 : 1 : -6e8) + 1;
      }
      return new Zn(e, n, r, t, e.widget || null, !0);
    }
    static line(e) {
      return new Xn(e);
    }
    static set(e, t = !1) {
      return P.of(e, t);
    }
    hasHeight() {
      return this.widget ? this.widget.estimatedHeight > -1 : !1;
    }
  };
z.none = P.empty;
var Yn = class e extends z {
  constructor(e) {
    let {
      start: t,
      end: n
    } = Qn(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || `span`, this.attrs = e.class && e.attributes ? Hn(e.attributes, {
      class: e.class
    }) : e.class ? {
      class: e.class
    } : e.attributes || Un;
  }
  eq(t) {
    return this == t || t instanceof e && this.tagName == t.tagName && Wn(this.attrs, t.attrs);
  }
  range(e, t = e) {
    if (e >= t) throw RangeError(`Mark decorations may not be empty`);
    return super.range(e, t);
  }
};
Yn.prototype.point = !1;
var Xn = class e extends z {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(t) {
    return t instanceof e && this.spec.class == t.spec.class && Wn(this.spec.attributes, t.spec.attributes);
  }
  range(e, t = e) {
    if (t != e) throw RangeError(`Line decoration ranges must be zero-length`);
    return super.range(e, t);
  }
};
Xn.prototype.mapMode = w.TrackBefore, Xn.prototype.point = !0;
var Zn = class e extends z {
  constructor(e, t, n, r, i, a) {
    super(t, n, i, e), this.block = r, this.isReplace = a, this.mapMode = r ? t <= 0 ? w.TrackBefore : w.TrackAfter : w.TrackDel;
  }
  get type() {
    return this.startSide == this.endSide ? this.startSide <= 0 ? R.WidgetBefore : R.WidgetAfter : R.WidgetRange;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof e && $n(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0)) throw RangeError(`Invalid range for replacement decoration`);
    if (!this.isReplace && t != e) throw RangeError(`Widget decorations can only have zero-length ranges`);
    return super.range(e, t);
  }
};
Zn.prototype.point = !0;
function Qn(e, t = !1) {
  let {
    inclusiveStart: n,
    inclusiveEnd: r
  } = e;
  return n ??= e.inclusive, r ??= e.inclusive, {
    start: n ?? t,
    end: r ?? t
  };
}
function $n(e, t) {
  return e == t || !!(e && t && e.compare(t));
}
function er(e, t, n, r = 0) {
  let i = n.length - 1;
  i >= 0 && n[i] + r >= e ? n[i] = Math.max(n[i], t) : n.push(e, t);
}
var tr = class e extends Zt {
  constructor(e, t, n) {
    super(), this.tagName = e, this.attributes = t, this.rank = n;
  }
  eq(t) {
    return t == this || t instanceof e && this.tagName == t.tagName && Wn(this.attributes, t.attributes);
  }
  static create(t) {
    return new e(t.tagName, t.attributes || Un, t.rank == null ? 50 : Math.max(0, Math.min(t.rank, 100)));
  }
  static set(e, t = !1) {
    return P.of(e, t);
  }
};
tr.prototype.startSide = tr.prototype.endSide = -1;
function nr(e) {
  let t;
  return t = e.nodeType == 11 ? e.getSelection ? e : e.ownerDocument : e, t.getSelection();
}
function rr(e, t) {
  return t ? e == t || e.contains(t.nodeType == 1 ? t : t.parentNode) : !1;
}
function ir(e, t) {
  if (!t.anchorNode) return !1;
  try {
    return rr(e, t.anchorNode);
  } catch {
    return !1;
  }
}
function ar(e) {
  return e.nodeType == 3 ? Sr(e, 0, e.nodeValue.length).getClientRects() : e.nodeType == 1 ? e.getClientRects() : [];
}
function or(e, t, n, r) {
  return n ? lr(e, t, n, r, -1) || lr(e, t, n, r, 1) : !1;
}
function sr(e) {
  for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}
function cr(e) {
  return e.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName);
}
function lr(e, t, n, r, i) {
  for (;;) {
    if (e == n && t == r) return !0;
    if (t == (i < 0 ? 0 : ur(e))) {
      if (e.nodeName == `DIV`) return !1;
      let n = e.parentNode;
      if (!n || n.nodeType != 1) return !1;
      t = sr(e) + (i < 0 ? 0 : 1), e = n;
    } else if (e.nodeType == 1) {
      if (e = e.childNodes[t + (i < 0 ? -1 : 0)], e.nodeType == 1 && e.contentEditable == `false`) return !1;
      t = i < 0 ? ur(e) : 0;
    } else return !1;
  }
}
function ur(e) {
  return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function dr(e, t) {
  let {
    left: n,
    right: r
  } = e;
  if (n == r) return e;
  let i = t ? n : r;
  return {
    left: i,
    right: i,
    top: e.top,
    bottom: e.bottom
  };
}
function fr(e) {
  let t = e.visualViewport;
  return t ? {
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  } : {
    left: 0,
    right: e.innerWidth,
    top: 0,
    bottom: e.innerHeight
  };
}
function pr(e, t) {
  let n = t.width / e.offsetWidth,
    r = t.height / e.offsetHeight;
  return (n > .995 && n < 1.005 || !isFinite(n) || Math.abs(t.width - e.offsetWidth) < 1) && (n = 1), (r > .995 && r < 1.005 || !isFinite(r) || Math.abs(t.height - e.offsetHeight) < 1) && (r = 1), {
    scaleX: n,
    scaleY: r
  };
}
function mr(e, t, n, r, i, a, o, s) {
  let c = e.ownerDocument,
    l = c.defaultView || window;
  for (let u = e, d = !1; u && !d;) if (u.nodeType == 1) {
    let e,
      f = u == c.body,
      p = 1,
      m = 1;
    if (f) e = fr(l);else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(u).position) && (d = !0), u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) {
        u = u.assignedSlot || u.parentNode;
        continue;
      }
      let t = u.getBoundingClientRect();
      ({
        scaleX: p,
        scaleY: m
      } = pr(u, t)), e = {
        left: t.left,
        right: t.left + u.clientWidth * p,
        top: t.top,
        bottom: t.top + u.clientHeight * m
      };
    }
    let h = 0,
      g = 0;
    if (i == `nearest`) t.top < e.top + o ? (g = t.top - (e.top + o), n > 0 && t.bottom > e.bottom + g && (g = t.bottom - e.bottom + o)) : t.bottom > e.bottom - o && (g = t.bottom - e.bottom + o, n < 0 && t.top - g < e.top && (g = t.top - (e.top + o)));else {
      let r = t.bottom - t.top,
        a = e.bottom - e.top;
      g = (i == `center` && r <= a ? t.top + r / 2 - a / 2 : i == `start` || i == `center` && n < 0 ? t.top - o : t.bottom - a + o) - e.top;
    }
    if (r == `nearest` ? t.left < e.left + a ? (h = t.left - (e.left + a), n > 0 && t.right > e.right + h && (h = t.right - e.right + a)) : t.right > e.right - a && (h = t.right - e.right + a, n < 0 && t.left < e.left + h && (h = t.left - (e.left + a))) : h = (r == `center` ? t.left + (t.right - t.left) / 2 - (e.right - e.left) / 2 : r == `start` == s ? t.left - a : t.right - (e.right - e.left) + a) - e.left, h || g) {
      if (f) l.scrollBy(h, g);else {
        let e = 0,
          n = 0;
        if (g) {
          let e = u.scrollTop;
          u.scrollTop += g / m, n = (u.scrollTop - e) * m;
        }
        if (h) {
          let t = u.scrollLeft;
          u.scrollLeft += h / p, e = (u.scrollLeft - t) * p;
        }
        t = {
          left: t.left - e,
          top: t.top - n,
          right: t.right - e,
          bottom: t.bottom - n
        }, e && Math.abs(e - h) < 1 && (r = `nearest`), n && Math.abs(n - g) < 1 && (i = `nearest`);
      }
    }
    if (f) break;
    (t.top < e.top || t.bottom > e.bottom || t.left < e.left || t.right > e.right) && (t = {
      left: Math.max(t.left, e.left),
      right: Math.min(t.right, e.right),
      top: Math.max(t.top, e.top),
      bottom: Math.min(t.bottom, e.bottom)
    }), u = u.assignedSlot || u.parentNode;
  } else if (u.nodeType == 11) u = u.host;else break;
}
function hr(e, t = !0) {
  let n = e.ownerDocument,
    r = null,
    i = null;
  for (let a = e.parentNode; a && !(a == n.body || (!t || r) && i);) if (a.nodeType == 1) !i && a.scrollHeight > a.clientHeight && (i = a), t && !r && a.scrollWidth > a.clientWidth && (r = a), a = a.assignedSlot || a.parentNode;else if (a.nodeType == 11) a = a.host;else break;
  return {
    x: r,
    y: i
  };
}
var gr = class {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let {
      anchorNode: t,
      focusNode: n
    } = e;
    this.set(t, Math.min(e.anchorOffset, t ? ur(t) : 0), n, Math.min(e.focusOffset, n ? ur(n) : 0));
  }
  set(e, t, n, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = r;
  }
};
function _r(e) {
  let t = [];
  for (let n = e; n; n = n.nodeType == 11 ? n.host : n.parentNode) n.nodeType == 1 && t.push({
    node: n,
    left: n.scrollLeft,
    top: n.scrollTop
  });
  return t;
}
function vr(e, t = !0) {
  for (let {
    node: n,
    left: r,
    top: i
  } of e) t && n.scrollTop != i && (n.scrollTop = i), n.scrollLeft != r && (n.scrollLeft = r);
}
var yr = null;
L.safari && L.safari_version >= 26 && (yr = !1);
function br(e) {
  if (e.setActive) return e.setActive();
  if (yr) return e.focus(yr);
  let t = _r(e);
  e.focus(yr == null ? {
    get preventScroll() {
      return yr = {
        preventScroll: !0
      }, !0;
    }
  } : void 0), yr || (yr = !1, vr(t));
}
var xr;
function Sr(e, t, n = t) {
  let r = xr ||= document.createRange();
  return r.setEnd(e, n), r.setStart(e, t), r;
}
function Cr(e, t, n, r) {
  let i = {
    key: t,
    code: t,
    keyCode: n,
    which: n,
    cancelable: !0
  };
  r && ({
    altKey: i.altKey,
    ctrlKey: i.ctrlKey,
    shiftKey: i.shiftKey,
    metaKey: i.metaKey
  } = r);
  let a = new KeyboardEvent(`keydown`, i);
  a.synthetic = !0, e.dispatchEvent(a);
  let o = new KeyboardEvent(`keyup`, i);
  return o.synthetic = !0, e.dispatchEvent(o), a.defaultPrevented || o.defaultPrevented;
}
function wr(e) {
  for (; e;) {
    if (e && (e.nodeType == 9 || e.nodeType == 11 && e.host)) return e;
    e = e.assignedSlot || e.parentNode;
  }
  return null;
}
function Tr(e, t) {
  let n = t.focusNode,
    r = t.focusOffset;
  if (!n || t.anchorNode != n || t.anchorOffset != r) return !1;
  for (r = Math.min(r, ur(n));;) if (r) {
    if (n.nodeType != 1) return !1;
    let e = n.childNodes[r - 1];
    e.contentEditable == `false` ? r-- : (n = e, r = ur(n));
  } else if (n == e) return !0;else r = sr(n), n = n.parentNode;
}
function Er(e) {
  return e instanceof Window ? e.pageYOffset > Math.max(0, e.document.documentElement.scrollHeight - e.innerHeight - 4) : e.scrollTop > Math.max(1, e.scrollHeight - e.clientHeight - 4);
}
function Dr(e, t) {
  for (let n = e, r = t;;) if (n.nodeType == 3 && r > 0) return {
    node: n,
    offset: r
  };else if (n.nodeType == 1 && r > 0) {
    if (n.contentEditable == `false`) return null;
    n = n.childNodes[r - 1], r = ur(n);
  } else if (n.parentNode && !cr(n)) r = sr(n), n = n.parentNode;else return null;
}
function Or(e, t) {
  for (let n = e, r = t;;) if (n.nodeType == 3 && r < n.nodeValue.length) return {
    node: n,
    offset: r
  };else if (n.nodeType == 1 && r < n.childNodes.length) {
    if (n.contentEditable == `false`) return null;
    n = n.childNodes[r], r = 0;
  } else if (n.parentNode && !cr(n)) r = sr(n) + 1, n = n.parentNode;else return null;
}
var kr = class e {
    constructor(e, t, n = !0) {
      this.node = e, this.offset = t, this.precise = n;
    }
    static before(t, n) {
      return new e(t.parentNode, sr(t), n);
    }
    static after(t, n) {
      return new e(t.parentNode, sr(t) + 1, n);
    }
  },
  B = function (e) {
    return e[e.LTR = 0] = `LTR`, e[e.RTL = 1] = `RTL`, e;
  }(B ||= {}),
  Ar = B.LTR,
  jr = B.RTL;
function Mr(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) t.push(1 << e[n]);
  return t;
}
var Nr = Mr(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`),
  Pr = Mr(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`),
  Fr = Object.create(null),
  Ir = [];
for (let e of [`()`, `[]`, `{}`]) {
  let t = e.charCodeAt(0),
    n = e.charCodeAt(1);
  Fr[t] = n, Fr[n] = -t;
}
function Lr(e) {
  return e <= 247 ? Nr[e] : 1424 <= e && e <= 1524 ? 2 : 1536 <= e && e <= 1785 ? Pr[e - 1536] : 1774 <= e && e <= 2220 ? 4 : 8192 <= e && e <= 8204 ? 256 : 64336 <= e && e <= 65023 ? 4 : 1;
}
var Rr = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/,
  zr = class {
    get dir() {
      return this.level % 2 ? jr : Ar;
    }
    constructor(e, t, n) {
      this.from = e, this.to = t, this.level = n;
    }
    side(e, t) {
      return this.dir == t == e ? this.to : this.from;
    }
    forward(e, t) {
      return e == (this.dir == t);
    }
    static find(e, t, n, r) {
      let i = -1;
      for (let a = 0; a < e.length; a++) {
        let o = e[a];
        if (o.from <= t && o.to >= t) {
          if (o.level == n) return a;
          (i < 0 || (r == 0 ? e[i].level > o.level : r < 0 ? o.from < t : o.to > t)) && (i = a);
        }
      }
      if (i < 0) throw RangeError(`Index out of range`);
      return i;
    }
  };
function Br(e, t) {
  if (e.length != t.length) return !1;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = t[n];
    if (r.from != i.from || r.to != i.to || r.direction != i.direction || !Br(r.inner, i.inner)) return !1;
  }
  return !0;
}
var V = [];
function Vr(e, t, n, r, i) {
  for (let a = 0; a <= r.length; a++) {
    let o = a ? r[a - 1].to : t,
      s = a < r.length ? r[a].from : n,
      c = a ? 256 : i;
    for (let t = o, n = c, r = c; t < s; t++) {
      let i = Lr(e.charCodeAt(t));
      i == 512 ? i = n : i == 8 && r == 4 && (i = 16), V[t] = i == 4 ? 2 : i, i & 7 && (r = i), n = i;
    }
    for (let e = o, t = c, r = c; e < s; e++) {
      let i = V[e];
      if (i == 128) e < s - 1 && t == V[e + 1] && t & 24 ? i = V[e] = t : V[e] = 256;else if (i == 64) {
        let i = e + 1;
        for (; i < s && V[i] == 64;) i++;
        let a = e && t == 8 || i < n && V[i] == 8 ? r == 1 ? 1 : 8 : 256;
        for (let t = e; t < i; t++) V[t] = a;
        e = i - 1;
      } else i == 8 && r == 1 && (V[e] = 1);
      t = i, i & 7 && (r = i);
    }
  }
}
function Hr(e, t, n, r, i) {
  let a = i == 1 ? 2 : 1;
  for (let o = 0, s = 0, c = 0; o <= r.length; o++) {
    let l = o ? r[o - 1].to : t,
      u = o < r.length ? r[o].from : n;
    for (let t = l, n, r, o; t < u; t++) if (r = Fr[n = e.charCodeAt(t)]) {
      if (r < 0) {
        for (let e = s - 3; e >= 0; e -= 3) if (Ir[e + 1] == -r) {
          let n = Ir[e + 2],
            r = n & 2 ? i : n & 4 ? n & 1 ? a : i : 0;
          r && (V[t] = V[Ir[e]] = r), s = e;
          break;
        }
      } else if (Ir.length == 189) break;else Ir[s++] = t, Ir[s++] = n, Ir[s++] = c;
    } else if ((o = V[t]) == 2 || o == 1) {
      let e = o == i;
      c = +!e;
      for (let t = s - 3; t >= 0; t -= 3) {
        let n = Ir[t + 2];
        if (n & 2) break;
        if (e) Ir[t + 2] |= 2;else {
          if (n & 4) break;
          Ir[t + 2] |= 4;
        }
      }
    }
  }
}
function Ur(e, t, n, r) {
  for (let i = 0, a = r; i <= n.length; i++) {
    let o = i ? n[i - 1].to : e,
      s = i < n.length ? n[i].from : t;
    for (let c = o; c < s;) {
      let o = V[c];
      if (o == 256) {
        let o = c + 1;
        for (;;) if (o == s) {
          if (i == n.length) break;
          o = n[i++].to, s = i < n.length ? n[i].from : t;
        } else if (V[o] == 256) o++;else break;
        let l = a == 1,
          u = l == ((o < t ? V[o] : r) == 1) ? l ? 1 : 2 : r;
        for (let t = o, r = i, a = r ? n[r - 1].to : e; t > c;) t == a && (t = n[--r].from, a = r ? n[r - 1].to : e), V[--t] = u;
        c = o;
      } else a = o, c++;
    }
  }
}
function Wr(e, t, n, r, i, a, o) {
  let s = r % 2 ? 2 : 1;
  if (r % 2 == i % 2) for (let c = t, l = 0; c < n;) {
    let t = !0,
      u = !1;
    if (l == a.length || c < a[l].from) {
      let e = V[c];
      e != s && (t = !1, u = e == 16);
    }
    let d = !t && s == 1 ? [] : null,
      f = t ? r : r + 1,
      p = c;
    run: for (;;) if (l < a.length && p == a[l].from) {
      if (u) break run;
      let m = a[l];
      if (!t) for (let e = m.to, t = l + 1;;) {
        if (e == n) break run;
        if (t < a.length && a[t].from == e) e = a[t++].to;else if (V[e] == s) break run;else break;
      }
      l++, d ? d.push(m) : (m.from > c && o.push(new zr(c, m.from, f)), Gr(e, m.direction == Ar == !(f % 2) ? r : r + 1, i, m.inner, m.from, m.to, o), c = m.to), p = m.to;
    } else if (p == n || (t ? V[p] != s : V[p] == s)) break;else p++;
    d ? Wr(e, c, p, r + 1, i, d, o) : c < p && o.push(new zr(c, p, f)), c = p;
  } else for (let c = n, l = a.length; c > t;) {
    let n = !0,
      u = !1;
    if (!l || c > a[l - 1].to) {
      let e = V[c - 1];
      e != s && (n = !1, u = e == 16);
    }
    let d = !n && s == 1 ? [] : null,
      f = n ? r : r + 1,
      p = c;
    run: for (;;) if (l && p == a[l - 1].to) {
      if (u) break run;
      let m = a[--l];
      if (!n) for (let e = m.from, n = l;;) {
        if (e == t) break run;
        if (n && a[n - 1].to == e) e = a[--n].from;else if (V[e - 1] == s) break run;else break;
      }
      d ? d.push(m) : (m.to < c && o.push(new zr(m.to, c, f)), Gr(e, m.direction == Ar == !(f % 2) ? r : r + 1, i, m.inner, m.from, m.to, o), c = m.from), p = m.from;
    } else if (p == t || (n ? V[p - 1] != s : V[p - 1] == s)) break;else p--;
    d ? Wr(e, p, c, r + 1, i, d, o) : p < c && o.push(new zr(p, c, f)), c = p;
  }
}
function Gr(e, t, n, r, i, a, o) {
  let s = t % 2 ? 2 : 1;
  Vr(e, i, a, r, s), Hr(e, i, a, r, s), Ur(i, a, r, s), Wr(e, i, a, t, n, r, o);
}
function Kr(e, t, n) {
  if (!e) return [new zr(0, 0, +(t == jr))];
  if (t == Ar && !n.length && !Rr.test(e)) return qr(e.length);
  if (n.length) for (; e.length > V.length;) V[V.length] = 256;
  let r = [],
    i = t == Ar ? 0 : 1;
  return Gr(e, i, i, n, 0, e.length, r), r;
}
function qr(e) {
  return [new zr(0, e, 0)];
}
var Jr = ``;
function Yr(e, t, n, r, i) {
  let a = r.head - e.from,
    o = zr.find(t, a, r.bidiLevel ?? -1, r.assoc),
    s = t[o],
    c = s.side(i, n);
  if (a == c) {
    let e = o += i ? 1 : -1;
    if (e < 0 || e >= t.length) return null;
    s = t[o = e], a = s.side(!i, n), c = s.side(i, n);
  }
  let l = S(e.text, a, s.forward(i, n));
  (l < s.from || l > s.to) && (l = c), Jr = e.text.slice(Math.min(a, l), Math.max(a, l));
  let u = o == (i ? t.length - 1 : 0) ? null : t[o + (i ? 1 : -1)];
  return u && l == c && u.level + +!i < s.level ? D.cursor(u.side(!i, n) + e.from, u.forward(i, n) ? 1 : -1, u.level) : D.cursor(l + e.from, s.forward(i, n) ? -1 : 1, s.level);
}
function Xr(e, t, n) {
  for (let r = t; r < n; r++) {
    let t = Lr(e.charCodeAt(r));
    if (t == 1) return Ar;
    if (t == 2 || t == 4) return jr;
  }
  return Ar;
}
var Zr = O.define(),
  Qr = O.define(),
  $r = O.define(),
  ei = O.define(),
  ti = O.define(),
  ni = O.define(),
  ri = O.define(),
  ii = O.define(),
  ai = O.define(),
  oi = O.define({
    combine: e => e.some(e => e)
  }),
  si = O.define({
    combine: e => e.some(e => e)
  }),
  ci = O.define(),
  li = class e {
    constructor(e, t, n, r, i, a = !1) {
      this.range = e, this.y = t, this.x = n, this.yMargin = r, this.xMargin = i, this.isSnapshot = a;
    }
    map(t) {
      return t.empty ? this : new e(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
    clip(t) {
      return this.range.to <= t.doc.length ? this : new e(D.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
    }
  },
  ui = A.define({
    map: (e, t) => e.map(t)
  }),
  di = A.define();
function H(e, t, n) {
  let r = e.facet(ei);
  r.length ? r[0](t) : window.onerror && window.onerror(String(t), n, void 0, void 0, t) || (n ? console.error(n + `:`, t) : console.error(t));
}
var fi = O.define({
    combine: e => !e.length || e[0]
  }),
  pi = 0,
  mi = O.define({
    combine(e) {
      return e.filter((t, n) => {
        for (let r = 0; r < n; r++) if (e[r].plugin == t.plugin) return !1;
        return !0;
      });
    }
  }),
  U = class e {
    constructor(e, t, n, r, i) {
      this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = r, this.baseExtensions = i(this), this.extension = this.baseExtensions.concat(mi.of({
        plugin: this,
        arg: void 0
      }));
    }
    of(e) {
      return this.baseExtensions.concat(mi.of({
        plugin: this,
        arg: e
      }));
    }
    static define(t, n) {
      let {
        eventHandlers: r,
        eventObservers: i,
        provide: a,
        decorations: o
      } = n || {};
      return new e(pi++, t, r, i, e => {
        let t = [];
        return o && t.push(vi.of(t => {
          let n = t.plugin(e);
          return n ? o(n) : z.none;
        })), a && t.push(a(e)), t;
      });
    }
    static fromClass(t, n) {
      return e.define((e, n) => new t(e, n), n);
    }
  },
  hi = class {
    constructor(e) {
      this.spec = e, this.mustUpdate = null, this.value = null;
    }
    get plugin() {
      return this.spec && this.spec.plugin;
    }
    update(e) {
      if (!this.value) {
        if (this.spec) try {
          this.value = this.spec.plugin.create(e, this.spec.arg);
        } catch (t) {
          H(e.state, t, `CodeMirror plugin crashed`), this.deactivate();
        }
      } else if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(e);
        } catch (t) {
          if (H(e.state, t, `CodeMirror plugin crashed`), this.value.destroy) try {
            this.value.destroy();
          } catch {}
          this.deactivate();
        }
      }
      return this;
    }
    destroy(e) {
      if (this.value?.destroy) try {
        this.value.destroy();
      } catch (t) {
        H(e.state, t, `CodeMirror plugin crashed`);
      }
    }
    deactivate() {
      this.spec = this.value = null;
    }
  },
  gi = O.define(),
  _i = O.define(),
  vi = O.define(),
  yi = O.define(),
  bi = O.define(),
  xi = O.define(),
  Si = O.define();
function Ci(e, t) {
  let n = e.state.facet(Si);
  if (!n.length) return n;
  let r = n.map(t => t instanceof Function ? t(e) : t),
    i = [];
  return P.spans(r, t.from, t.to, {
    point() {},
    span(e, n, r, a) {
      let o = e - t.from,
        s = n - t.from,
        c = i;
      for (let e = r.length - 1; e >= 0; e--, a--) {
        let n = r[e].spec.bidiIsolate,
          i;
        if (n ??= Xr(t.text, o, s), a > 0 && c.length && (i = c[c.length - 1]).to == o && i.direction == n) i.to = s, c = i.inner;else {
          let e = {
            from: o,
            to: s,
            direction: n,
            inner: []
          };
          c.push(e), c = e.inner;
        }
      }
    }
  }), i;
}
var wi = O.define();
function Ti(e) {
  let t = 0,
    n = 0,
    r = 0,
    i = 0;
  for (let a of e.state.facet(wi)) {
    let o = a(e);
    o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (n = Math.max(n, o.right)), o.top != null && (r = Math.max(r, o.top)), o.bottom != null && (i = Math.max(i, o.bottom)));
  }
  return {
    left: t,
    right: n,
    top: r,
    bottom: i
  };
}
var Ei = O.define(),
  Di = class e {
    constructor(e, t, n, r) {
      this.fromA = e, this.toA = t, this.fromB = n, this.toB = r;
    }
    join(t) {
      return new e(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
    }
    addToSet(e) {
      let t = e.length,
        n = this;
      for (; t > 0; t--) {
        let r = e[t - 1];
        if (!(r.fromA > n.toA)) {
          if (r.toA < n.fromA) break;
          n = n.join(r), e.splice(t - 1, 1);
        }
      }
      return e.splice(t, 0, n), e;
    }
    static extendWithRanges(t, n) {
      if (n.length == 0) return t;
      let r = [];
      for (let i = 0, a = 0, o = 0;;) {
        let s = i < t.length ? t[i].fromB : 1e9,
          c = a < n.length ? n[a] : 1e9,
          l = Math.min(s, c);
        if (l == 1e9) break;
        let u = l + o,
          d = l,
          f = u;
        for (;;) if (a < n.length && n[a] <= d) {
          let e = n[a + 1];
          a += 2, d = Math.max(d, e);
          for (let e = i; e < t.length && t[e].fromB <= d; e++) o = t[e].toA - t[e].toB;
          f = Math.max(f, e + o);
        } else if (i < t.length && t[i].fromB <= d) {
          let e = t[i++];
          d = Math.max(d, e.toB), f = Math.max(f, e.toA), o = e.toA - e.toB;
        } else break;
        r.push(new e(u, f, l, d));
      }
      return r;
    }
  },
  Oi = class e {
    constructor(e, t, n) {
      this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = T.empty(this.startState.doc.length);
      for (let e of n) this.changes = this.changes.compose(e.changes);
      let r = [];
      this.changes.iterChangedRanges((e, t, n, i) => r.push(new Di(e, t, n, i))), this.changedRanges = r;
    }
    static create(t, n, r) {
      return new e(t, n, r);
    }
    get viewportChanged() {
      return (this.flags & 4) > 0;
    }
    get viewportMoved() {
      return (this.flags & 8) > 0;
    }
    get heightChanged() {
      return (this.flags & 2) > 0;
    }
    get geometryChanged() {
      return this.docChanged || (this.flags & 18) > 0;
    }
    get focusChanged() {
      return (this.flags & 1) > 0;
    }
    get docChanged() {
      return !this.changes.empty;
    }
    get selectionSet() {
      return this.transactions.some(e => e.selection);
    }
    get empty() {
      return this.flags == 0 && this.transactions.length == 0;
    }
  },
  ki = [],
  W = class {
    constructor(e, t, n = 0) {
      this.dom = e, this.length = t, this.flags = n, this.parent = null, e.cmTile = this;
    }
    get breakAfter() {
      return this.flags & 1;
    }
    get children() {
      return ki;
    }
    isWidget() {
      return !1;
    }
    get isHidden() {
      return !1;
    }
    isComposite() {
      return !1;
    }
    isLine() {
      return !1;
    }
    isText() {
      return !1;
    }
    isBlock() {
      return !1;
    }
    get domAttrs() {
      return null;
    }
    sync(e) {
      if (this.flags |= 2, this.flags & 4) {
        this.flags &= -5;
        let e = this.domAttrs;
        e && Gn(this.dom, e);
      }
    }
    toString() {
      return this.constructor.name + (this.children.length ? `(${this.children})` : ``) + (this.breakAfter ? `#` : ``);
    }
    destroy() {
      this.parent = null;
    }
    setDOM(e) {
      this.dom = e, e.cmTile = this;
    }
    get posAtStart() {
      return this.parent ? this.parent.posBefore(this) : 0;
    }
    get posAtEnd() {
      return this.posAtStart + this.length;
    }
    posBefore(e, t = this.posAtStart) {
      let n = t;
      for (let t of this.children) {
        if (t == e) return n;
        n += t.length + t.breakAfter;
      }
      throw RangeError(`Invalid child in posBefore`);
    }
    posAfter(e) {
      return this.posBefore(e) + e.length;
    }
    covers(e) {
      return !0;
    }
    coordsIn(e, t, n) {
      return null;
    }
    domPosFor(e, t) {
      let n = sr(this.dom),
        r = this.length ? e > 0 : t > 0;
      return new kr(this.parent.dom, n + +!!r, e == 0 || e == this.length);
    }
    markDirty(e) {
      this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
    }
    get overrideDOMText() {
      return null;
    }
    get root() {
      for (let e = this; e; e = e.parent) if (e instanceof Mi) return e;
      return null;
    }
    static get(e) {
      return e.cmTile;
    }
  },
  Ai = class extends W {
    constructor(e) {
      super(e, 0), this._children = [];
    }
    isComposite() {
      return !0;
    }
    get children() {
      return this._children;
    }
    get lastChild() {
      return this.children.length ? this.children[this.children.length - 1] : null;
    }
    append(e) {
      this.children.push(e), e.parent = this;
    }
    sync(e) {
      if (this.flags & 2) return;
      super.sync(e);
      let t = this.dom,
        n = null,
        r,
        i = e?.node == t ? e : null,
        a = 0;
      for (let o of this.children) {
        if (o.sync(e), a += o.length + o.breakAfter, r = n ? n.nextSibling : t.firstChild, i && r != o.dom && (i.written = !0), o.dom.parentNode == t) for (; r && r != o.dom;) r = ji(r);else t.insertBefore(o.dom, r);
        n = o.dom;
      }
      for (r = n ? n.nextSibling : t.firstChild, i && r && (i.written = !0); r;) r = ji(r);
      this.length = a;
    }
  };
function ji(e) {
  let t = e.nextSibling;
  return e.parentNode.removeChild(e), t;
}
var Mi = class extends Ai {
    constructor(e, t) {
      super(t), this.view = e;
    }
    owns(e) {
      for (; e; e = e.parent) if (e == this) return !0;
      return !1;
    }
    isBlock() {
      return !0;
    }
    nearest(e) {
      for (;;) {
        if (!e) return null;
        let t = W.get(e);
        if (t && this.owns(t)) return t;
        e = e.parentNode;
      }
    }
    blockTiles(e) {
      for (let t = [], n = this, r = 0, i = 0;;) if (r == n.children.length) {
        if (!t.length) return;
        n = n.parent, n.breakAfter && i++, r = t.pop();
      } else {
        let a = n.children[r++];
        if (a instanceof Ni) t.push(r), n = a, r = 0;else {
          let t = i + a.length,
            n = e(a, i);
          if (n !== void 0) return n;
          i = t + a.breakAfter;
        }
      }
    }
    resolveBlock(e, t) {
      let n,
        r = -1,
        i,
        a = -1;
      if (this.blockTiles((o, s) => {
        let c = s + o.length;
        if (e >= s && e <= c) {
          if (o.isWidget() && t >= -1 && t <= 1) {
            if (o.flags & 32) return !0;
            o.flags & 16 && (n = void 0);
          }
          (s < e || e == c && (t < -1 ? o.length : o.covers(1))) && (!n || !o.isWidget() && n.isWidget()) && (n = o, r = e - s), (c > e || e == s && (t > 1 ? o.length : o.covers(-1))) && (!i || !o.isWidget() && i.isWidget()) && (i = o, a = e - s);
        }
      }), !n && !i) throw Error(`No tile at position ` + e);
      return n && t < 0 || !i ? {
        tile: n,
        offset: r
      } : {
        tile: i,
        offset: a
      };
    }
  },
  Ni = class e extends Ai {
    constructor(e, t) {
      super(e), this.wrapper = t;
    }
    isBlock() {
      return !0;
    }
    covers(e) {
      return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
    }
    get domAttrs() {
      return this.wrapper.attributes;
    }
    static of(t, n) {
      let r = new e(n || document.createElement(t.tagName), t);
      return n || (r.flags |= 4), r;
    }
  },
  Pi = class e extends Ai {
    constructor(e, t) {
      super(e), this.attrs = t;
    }
    isLine() {
      return !0;
    }
    static start(t, n, r) {
      let i = new e(n || document.createElement(`div`), t);
      return (!n || !r) && (i.flags |= 4), i;
    }
    get domAttrs() {
      return this.attrs;
    }
    resolveInline(e, t, n) {
      let r = null,
        i = -1,
        a = null,
        o = -1;
      function s(e, c) {
        for (let l = 0, u = 0; l < e.children.length && u <= c; l++) {
          let d = e.children[l],
            f = u + d.length;
          f >= c && (d.isComposite() ? s(d, c - u) : (!a || a.isHidden && (t > 0 && !(a.flags & 32) || n && Ii(a, d))) && (f > c || d.flags & 32 && t <= 1) ? (a = d, o = c - u) : (u < c || d.flags & 16 && !d.isHidden && t >= -1) && (r = d, i = c - u)), u = f;
        }
      }
      s(this, e);
      let c = (t < 0 ? r : a) || r || a;
      return c ? {
        tile: c,
        offset: c == r ? i : o
      } : null;
    }
    coordsIn(e, t, n) {
      let r = this.resolveInline(e, t, !0);
      return r ? r.tile.coordsIn(Math.max(0, r.offset), t, n) : Fi(this);
    }
    domIn(e, t) {
      let n = this.resolveInline(e, t);
      if (n) {
        let {
          tile: e,
          offset: r
        } = n;
        if (this.dom.contains(e.dom)) return e.isText() ? new kr(e.dom, Math.min(e.dom.nodeValue.length, r)) : e.domPosFor(r, e.flags & 16 ? 1 : e.flags & 32 ? -1 : t);
        let i = n.tile.parent,
          a = !1;
        for (let e of i.children) {
          if (a) return new kr(e.dom, 0);
          e == n.tile && (a = !0);
        }
      }
      return new kr(this.dom, 0);
    }
  };
function Fi(e) {
  let t = e.dom.lastChild;
  if (!t) return e.dom.getBoundingClientRect();
  let n = ar(t);
  return n[n.length - 1] || null;
}
function Ii(e, t) {
  let n = e.coordsIn(0, 1),
    r = t.coordsIn(0, 1);
  return n && r && r.top < n.bottom;
}
var G = class e extends Ai {
    constructor(e, t) {
      super(e), this.mark = t;
    }
    get domAttrs() {
      return this.mark.attrs;
    }
    static of(t, n) {
      let r = new e(n || document.createElement(t.tagName), t);
      return n || (r.flags |= 4), r;
    }
  },
  Li = class e extends W {
    constructor(e, t) {
      super(e, t.length), this.text = t;
    }
    sync(e) {
      this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
    }
    isText() {
      return !0;
    }
    toString() {
      return JSON.stringify(this.text);
    }
    coordsIn(e, t, n) {
      let r = this.dom.nodeValue.length;
      e > r && (e = r);
      let i = e,
        a = e,
        o = 0;
      e == 0 && t < 0 || e == r && t >= 0 ? L.chrome || L.gecko || (e ? (i--, o = 1) : a < r && (a++, o = -1)) : t < 0 ? i-- : a < r && a++;
      let s = Sr(this.dom, i, a).getClientRects();
      if (!s.length) return null;
      let c = s[(o ? o < 0 : t >= 0) ? 0 : s.length - 1];
      return L.safari && !o && c.width == 0 && (c = Array.prototype.find.call(s, e => e.width) || c), n == null ? c : dr(c, (o ? o > 0 : t < 0) == n);
    }
    static of(t, n) {
      let r = new e(n || document.createTextNode(t), t);
      return n || (r.flags |= 2), r;
    }
  },
  Ri = class e extends W {
    constructor(e, t, n, r) {
      super(e, t, r), this.widget = n;
    }
    isWidget() {
      return !0;
    }
    get isHidden() {
      return this.widget.isHidden;
    }
    covers(e) {
      return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
    }
    coordsIn(e, t) {
      return this.coordsInWidget(e, t, !1);
    }
    coordsInWidget(e, t, n) {
      let r = this.widget.coordsAt(this.dom, e, t);
      if (r) return r;
      if (n) return dr(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
      {
        let t = this.dom.getClientRects(),
          n = null;
        if (!t.length) return null;
        let r = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
        for (let i = r ? t.length - 1 : 0; n = t[i], !(e > 0 ? i == 0 : i == t.length - 1 || n.top < n.bottom); i += r ? -1 : 1);
        return dr(n, !r);
      }
    }
    get overrideDOMText() {
      if (!this.length) return b.empty;
      let {
        root: e
      } = this;
      if (!e) return b.empty;
      let t = this.posAtStart;
      return e.view.state.doc.slice(t, t + this.length);
    }
    destroy() {
      super.destroy(), this.widget.destroy(this.dom);
    }
    static of(t, n, r, i, a) {
      return a || (a = t.toDOM(n), t.editable || (a.contentEditable = `false`)), new e(a, r, t, i);
    }
  },
  zi = class extends W {
    constructor(e) {
      let t = document.createElement(`img`);
      t.className = `cm-widgetBuffer`, t.setAttribute(`aria-hidden`, `true`), super(t, 0, e);
    }
    get isHidden() {
      return !0;
    }
    get overrideDOMText() {
      return b.empty;
    }
    coordsIn(e, t, n) {
      let r = this.dom.getBoundingClientRect();
      return n == null ? r : dr(r, t > 0 == n);
    }
  },
  Bi = class {
    constructor(e) {
      this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
    }
    advance(e, t, n) {
      let {
        tile: r,
        index: i,
        beforeBreak: a,
        parents: o
      } = this;
      for (; e || t > 0;) if (!r.isComposite()) {
        let t = r.length;
        if (i < t && e) {
          let a = Math.min(e, t - i);
          n && n.skip(r, i, i + a), e -= a, i += a;
        }
        if (i == t) a = !!r.breakAfter, {
          tile: r,
          index: i
        } = o.pop(), i++;else if (!e) break;
      } else if (a) {
        if (!e) break;
        n && n.break(), e--, a = !1;
      } else if (i == r.children.length) {
        if (!e && !o.length) break;
        n && n.leave(r), a = !!r.breakAfter, {
          tile: r,
          index: i
        } = o.pop(), i++;
      } else {
        let s = r.children[i],
          c = s.breakAfter;
        (t > 0 ? s.length <= e : s.length < e) && (!n || n.skip(s, 0, s.length) !== !1 || !s.isComposite) ? (a = !!c, i++, e -= s.length) : (o.push({
          tile: r,
          index: i
        }), r = s, i = 0, n && s.isComposite() && n.enter(s));
      }
      return this.tile = r, this.index = i, this.beforeBreak = a, this;
    }
    get root() {
      return this.parents.length ? this.parents[0].tile : this.tile;
    }
  },
  Vi = class {
    constructor(e, t, n, r) {
      this.from = e, this.to = t, this.wrapper = n, this.rank = r;
    }
  },
  Hi = class {
    constructor(e, t, n) {
      this.cache = e, this.root = t, this.blockWrappers = n, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
    }
    addText(e, t, n, r) {
      this.flushBuffer();
      let i = this.ensureMarks(t, n),
        a = i.lastChild;
      if (a && a.isText() && !(a.flags & 8) && a.length + e.length < 512) {
        this.cache.reused.set(a, 2);
        let t = i.children[i.children.length - 1] = new Li(a.dom, a.text + e);
        t.parent = i;
      } else i.append(r || Li.of(e, this.cache.find(Li)?.dom));
      this.pos += e.length, this.afterWidget = null;
    }
    addComposition(e, t) {
      let n = this.curLine;
      n.dom != t.line.dom && (n.setDOM(this.cache.reused.has(t.line) ? Qi(t.line.dom) : t.line.dom), this.cache.reused.set(t.line, 2));
      let r = n;
      for (let e = t.marks.length - 1; e >= 0; e--) {
        let n = t.marks[e],
          i = r.lastChild;
        if (i instanceof G && i.mark.eq(n.mark)) i.dom != n.dom && i.setDOM(Qi(n.dom)), r = i;else {
          if (this.cache.reused.get(n)) {
            let e = W.get(n.dom);
            e && e.setDOM(Qi(n.dom));
          }
          let e = G.of(n.mark, n.dom);
          r.append(e), r = e;
        }
        this.cache.reused.set(n, 2);
      }
      let i = W.get(e.text);
      i && this.cache.reused.set(i, 2);
      let a = new Li(e.text, e.text.nodeValue);
      a.flags |= 8, this.pos = e.range.toB, r.append(a);
    }
    addInlineWidget(e, t, n) {
      let r = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
      r || this.flushBuffer();
      let i = this.ensureMarks(t, n);
      !r && !(e.flags & 16) && i.append(this.getBuffer(1)), i.append(e), this.pos += e.length, this.afterWidget = e;
    }
    addMark(e, t, n) {
      this.flushBuffer(), this.ensureMarks(t, n).append(e), this.pos += e.length, this.afterWidget = null;
    }
    addBlockWidget(e) {
      this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
    }
    continueWidget(e) {
      let t = this.afterWidget || this.lastBlock;
      t.length += e, this.pos += e;
    }
    addLineStart(e, t) {
      e ||= Yi;
      let n = Pi.start(e, t || this.cache.find(Pi)?.dom, !!t);
      this.getBlockPos().append(this.lastBlock = this.curLine = n);
    }
    addLine(e) {
      this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
    }
    addBreak() {
      this.lastBlock.flags |= 1, this.endLine(), this.pos++;
    }
    addLineStartIfNotCovered(e) {
      this.blockPosCovered() || this.addLineStart(e);
    }
    ensureLine(e) {
      this.curLine || this.addLineStart(e);
    }
    ensureMarks(e, t) {
      let n = this.curLine;
      for (let r = e.length - 1; r >= 0; r--) {
        let i = e[r],
          a;
        if (t > 0 && (a = n.lastChild) && a instanceof G && a.mark.eq(i)) n = a, t--;else {
          let e = G.of(i, this.cache.find(G, e => e.mark.eq(i))?.dom);
          n.append(e), n = e, t = 0;
        }
      }
      return n;
    }
    endLine() {
      if (this.curLine) {
        this.flushBuffer();
        let e = this.curLine.lastChild;
        (!e || !qi(this.curLine, !1) || e.dom.nodeName != `BR` && e.isWidget() && !(L.ios && qi(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(ea, 0, 32) || new Ri(ea.toDOM(), 0, ea, 32)), this.curLine = this.afterWidget = null;
      }
    }
    updateBlockWrappers() {
      this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
      for (let e = this.wrappers.length - 1; e >= 0; e--) this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
      for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next()) if (e.to >= this.pos) {
        let t = e.rank * 102 + e.value.rank,
          n = new Vi(e.from, e.to, e.value, t),
          r = this.wrappers.length;
        for (; r > 0 && (this.wrappers[r - 1].rank - n.rank || this.wrappers[r - 1].to - n.to) < 0;) r--;
        this.wrappers.splice(r, 0, n);
      }
      this.wrapperPos = this.pos;
    }
    getBlockPos() {
      this.updateBlockWrappers();
      let e = this.root;
      for (let t of this.wrappers) {
        let n = e.lastChild;
        if (t.from < this.pos && n instanceof Ni && n.wrapper.eq(t.wrapper)) e = n;else {
          let n = Ni.of(t.wrapper, this.cache.find(Ni, e => e.wrapper.eq(t.wrapper))?.dom);
          e.append(n), e = n;
        }
      }
      return e;
    }
    blockPosCovered() {
      let e = this.lastBlock;
      return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
    }
    getBuffer(e) {
      let t = 2 | (e < 0 ? 16 : 32),
        n = this.cache.find(zi, void 0, 1);
      return n && (n.flags = t), n || new zi(t);
    }
    flushBuffer() {
      this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
    }
  },
  Ui = class {
    constructor(e) {
      this.skipCount = 0, this.text = ``, this.textOff = 0, this.cursor = e.iter();
    }
    skip(e) {
      this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = ``, this.textOff = 0);
    }
    next(e) {
      if (this.textOff == this.text.length) {
        let {
          value: t,
          lineBreak: n,
          done: r
        } = this.cursor.next(this.skipCount);
        if (this.skipCount = 0, r) throw Error(`Ran out of text content when drawing inline views`);
        this.text = t;
        let i = this.textOff = Math.min(e, t.length);
        return n ? null : t.slice(0, i);
      }
      let t = Math.min(this.text.length, this.textOff + e),
        n = this.text.slice(this.textOff, t);
      return this.textOff = t, n;
    }
  },
  Wi = [Ri, Pi, Li, G, zi, Ni, Mi];
for (let e = 0; e < Wi.length; e++) Wi[e].bucket = e;
var Gi = class {
    constructor(e) {
      this.view = e, this.buckets = Wi.map(() => []), this.index = Wi.map(() => 0), this.reused = new Map();
    }
    add(e) {
      let t = e.constructor.bucket,
        n = this.buckets[t];
      n.length < 6 ? n.push(e) : n[this.index[t] = (this.index[t] + 1) % 6] = e;
    }
    find(e, t, n = 2) {
      let r = e.bucket,
        i = this.buckets[r],
        a = this.index[r];
      for (let e = 0; e < i.length; e++) {
        let o = (e + a) % i.length,
          s = i[o];
        if ((!t || t(s)) && !this.reused.has(s)) return i.splice(o, 1), o < a && this.index[r]--, this.reused.set(s, n), s;
      }
      return null;
    }
    findWidget(e, t, n) {
      let r = this.buckets[0];
      if (r.length) for (let i = 0, a = 0;; i++) {
        if (i == r.length) {
          if (a) return null;
          a = 1, i = 0;
        }
        let o = r[i];
        if (!this.reused.has(o) && (a == 0 ? o.widget.compare(e) : o.widget.constructor == e.constructor && e.updateDOM(o.dom, this.view, o.widget))) return r.splice(i, 1), i < this.index[0] && this.index[0]--, o.widget == e && o.length == t && (o.flags & 497) == n ? (this.reused.set(o, 1), o) : (this.reused.set(o, 2), new Ri(o.dom, t, e, o.flags & -498 | n));
      }
    }
    reuse(e) {
      return this.reused.set(e, 1), e;
    }
    maybeReuse(e, t = 2) {
      if (!this.reused.has(e)) return this.reused.set(e, t), e.dom;
    }
    clear() {
      for (let e = 0; e < this.buckets.length; e++) this.buckets[e].length = this.index[e] = 0;
    }
  },
  Ki = class {
    constructor(e, t, n, r, i) {
      this.view = e, this.decorations = r, this.disallowBlockEffectsFor = i, this.openWidget = !1, this.openMarks = 0, this.cache = new Gi(e), this.text = new Ui(e.state.doc), this.builder = new Hi(this.cache, new Mi(e, e.contentDOM), P.iter(n)), this.cache.reused.set(t, 2), this.old = new Bi(t), this.reuseWalker = {
        skip: (e, t, n) => {
          if (this.cache.add(e), e.isComposite()) return !1;
        },
        enter: e => this.cache.add(e),
        leave: () => {},
        break: () => {}
      };
    }
    run(e, t) {
      let n = t && this.getCompositionContext(t.text);
      for (let r = 0, i = 0, a = 0;;) {
        let o = a < e.length ? e[a++] : null,
          s = o ? o.fromA : this.old.root.length;
        if (s > r) {
          let e = s - r;
          this.preserve(e, !a, !o), r = s, i += e;
        }
        if (!o) break;
        t && o.fromA <= t.range.fromA && o.toA >= t.range.toA ? (this.forward(o.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(i, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, n), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, o.toA), this.emit(t.range.toB, o.toB)) : (this.forward(o.fromA, o.toA), this.emit(i, o.toB)), i = o.toB, r = o.toA;
      }
      return this.builder.curLine && this.builder.endLine(), this.builder.root;
    }
    preserve(e, t, n) {
      let r = Zi(this.old),
        i = this.openMarks;
      this.old.advance(e, n ? 1 : -1, {
        skip: (e, t, n) => {
          if (e.isWidget()) {
            if (this.openWidget) this.builder.continueWidget(n - t);else {
              let a = n > 0 || t < e.length ? Ri.of(e.widget, this.view, n - t, e.flags & 496, this.cache.maybeReuse(e)) : this.cache.reuse(e);
              a.flags & 256 ? (a.flags &= -2, this.builder.addBlockWidget(a)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(a, r, i), i = r.length);
            }
          } else if (e.isText()) this.builder.ensureLine(null), !t && n == e.length && !this.cache.reused.has(e) ? this.builder.addText(e.text, r, i, this.cache.reuse(e)) : (this.cache.add(e), this.builder.addText(e.text.slice(t, n), r, i)), i = r.length;else if (e.isLine()) e.flags &= -2, this.cache.reused.set(e, 1), this.builder.addLine(e);else if (e instanceof zi) this.cache.add(e);else if (e instanceof G) this.builder.ensureLine(null), this.builder.addMark(e, r, i), this.cache.reused.set(e, 1), i = r.length;else return !1;
          this.openWidget = !1;
        },
        enter: e => {
          e.isLine() ? this.builder.addLineStart(e.attrs, this.cache.maybeReuse(e)) : (this.cache.add(e), e instanceof G && r.unshift(e.mark)), this.openWidget = !1;
        },
        leave: e => {
          e.isLine() ? r.length &&= i = 0 : e instanceof G && (r.shift(), i = Math.min(i, r.length));
        },
        break: () => {
          this.builder.addBreak(), this.openWidget = !1;
        }
      }), this.text.skip(e);
    }
    emit(e, t) {
      let n = null,
        r = this.builder,
        i = -1,
        a = P.spans(this.decorations, e, t, {
          point: (e, t, a, o, s, c) => {
            if (a instanceof Zn) {
              if (this.disallowBlockEffectsFor[c]) {
                if (a.block) throw RangeError(`Block decorations may not be specified via plugins`);
                if (t > this.view.state.doc.lineAt(e).to) throw RangeError(`Decorations that replace line breaks may not be specified via plugins`);
              }
              if (i = o.length, s > o.length) r.continueWidget(t - e);else {
                let i = a.widget || (a.block ? $i.block : $i.inline),
                  c = Ji(a),
                  l = this.cache.findWidget(i, t - e, c) || Ri.of(i, this.view, t - e, c);
                a.block ? (a.startSide > 0 && r.addLineStartIfNotCovered(n), r.addBlockWidget(l)) : (r.ensureLine(n), r.addInlineWidget(l, o, s));
              }
              n = null;
            } else n = Xi(n, a);
            t > e && this.text.skip(t - e);
          },
          span: (e, t, a, o) => {
            for (let i = e; i < t;) {
              let s = this.text.next(Math.min(512, t - i));
              s == null ? (r.addLineStartIfNotCovered(n), r.addBreak(), i++) : (r.ensureLine(n), r.addText(s, a, i == e ? o : a.length), i += s.length), n = null;
            }
            i = a.length;
          }
        });
      i > -1 && (this.openWidget = a > i), this.openWidget || r.addLineStartIfNotCovered(n), this.openMarks = a;
    }
    forward(e, t, n = 1) {
      t - e <= 10 ? this.old.advance(t - e, n, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, n, this.reuseWalker));
    }
    getCompositionContext(e) {
      let t = [],
        n = null;
      for (let r = e.parentNode;; r = r.parentNode) {
        let e = W.get(r);
        if (r == this.view.contentDOM) break;
        e instanceof G ? t.push(e) : e?.isLine() ? n = e : e instanceof Ni || (r.nodeName == `DIV` && !n && r != this.view.contentDOM ? n = new Pi(r, Yi) : n || t.push(G.of(new Yn({
          tagName: r.nodeName.toLowerCase(),
          attributes: qn(r)
        }), r)));
      }
      return {
        line: n,
        marks: t
      };
    }
  };
function qi(e, t) {
  let n = e => {
    for (let r of e.children) if ((t ? r.isText() : r.length) || n(r)) return !0;
    return !1;
  };
  return n(e);
}
function Ji(e) {
  let t = e.isReplace ? (e.startSide < 0 ? 64 : 0) | (e.endSide > 0 ? 128 : 0) : e.startSide > 0 ? 32 : 16;
  return e.block && (t |= 256), t;
}
var Yi = {
  class: `cm-line`
};
function Xi(e, t) {
  let n = t.spec.attributes,
    r = t.spec.class;
  return !n && !r ? e : (e ||= {
    class: `cm-line`
  }, n && Hn(n, e), r && (e.class += ` ` + r), e);
}
function Zi(e) {
  let t = [];
  for (let n = e.parents.length; n > 1; n--) {
    let r = n == e.parents.length ? e.tile : e.parents[n].tile;
    r instanceof G && t.push(r.mark);
  }
  return t;
}
function Qi(e) {
  let t = W.get(e);
  return t && t.setDOM(e.cloneNode()), e;
}
var $i = class extends Jn {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
};
$i.inline = new $i(`span`), $i.block = new $i(`div`);
var ea = new class extends Jn {
    toDOM() {
      return document.createElement(`br`);
    }
    get isHidden() {
      return !0;
    }
    get editable() {
      return !0;
    }
  }(),
  ta = class {
    constructor(e) {
      this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = z.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Mi(e, e.contentDOM), this.updateInner([new Di(0, 0, 0, e.state.doc.length)], null);
    }
    update(e) {
      let t = e.changedRanges;
      this.minWidth > 0 && t.length && (t.every(({
        fromA: e,
        toA: t
      }) => t < this.minWidthFrom || e > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
      let n = -1;
      this.view.inputState.composing >= 0 && !this.view.observer.editContext && (this.domChanged?.newSel ? n = this.domChanged.newSel.head : !fa(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
      let r = n > -1 ? aa(this.view, e.changes, n) : null;
      if (this.domChanged = null, this.hasComposition) {
        let {
          from: n,
          to: r
        } = this.hasComposition;
        t = new Di(n, r, e.changes.mapPos(n, -1), e.changes.mapPos(r, 1)).addToSet(t.slice());
      }
      this.hasComposition = r ? {
        from: r.range.fromB,
        to: r.range.toB
      } : null, (L.ie || L.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
      let i = this.decorations,
        a = this.blockWrappers;
      this.updateDeco();
      let o = ca(i, this.decorations, e.changes);
      o.length && (t = Di.extendWithRanges(t, o));
      let s = ua(a, this.blockWrappers, e.changes);
      return s.length && (t = Di.extendWithRanges(t, s)), r && !t.some(e => e.fromA <= r.range.fromA && e.toA >= r.range.toA) && (t = r.range.addToSet(t.slice())), this.tile.flags & 2 && t.length == 0 ? !1 : (this.updateInner(t, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
    }
    updateInner(e, t) {
      this.view.viewState.mustMeasureContent = !0;
      let {
        observer: n
      } = this.view;
      n.ignore(() => {
        if (t || e.length) {
          let n = this.tile,
            r = new Ki(this.view, n, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
          t && W.get(t.text) && r.cache.reused.set(W.get(t.text), 2), this.tile = r.run(e, t), na(n, r.cache.reused);
        }
        this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + `px`, this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + `px` : ``;
        let r = L.chrome || L.ios ? {
          node: n.selectionRange.focusNode,
          written: !1
        } : void 0;
        this.tile.sync(r), r && (r.written || n.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = ``;
      });
      let r = [];
      if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let e of this.tile.children) e.isWidget() && e.widget instanceof pa && r.push(e.dom);
      n.updateGaps(r);
    }
    updateEditContextFormatting(e) {
      this.editContextFormatting = this.editContextFormatting.map(e.changes);
      for (let t of e.transactions) for (let e of t.effects) e.is(di) && (this.editContextFormatting = e.value);
    }
    updateSelection(e = !1, t = !1) {
      (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
      let {
          dom: n
        } = this.tile,
        r = this.view.root.activeElement,
        i = r == n,
        a = !i && !(this.view.state.facet(fi) || n.tabIndex > -1) && ir(n, this.view.observer.selectionRange) && !(r && n.contains(r));
      if (!(i || t || a)) return;
      let o = this.forceSelection;
      this.forceSelection = !1;
      let s = this.view.state.selection.main,
        c,
        l;
      if (s.empty ? l = c = this.inlineDOMNearPos(s.anchor, s.assoc || 1) : (l = this.inlineDOMNearPos(s.head, s.head == s.from ? 1 : -1), c = this.inlineDOMNearPos(s.anchor, s.anchor == s.from ? 1 : -1)), L.gecko && s.empty && !this.hasComposition && ra(c)) {
        let e = document.createTextNode(``);
        this.view.observer.ignore(() => c.node.insertBefore(e, c.node.childNodes[c.offset] || null)), c = l = new kr(e, 0), o = !0;
      }
      let u = this.view.observer.selectionRange;
      (o || !u.focusNode || (!or(c.node, c.offset, u.anchorNode, u.anchorOffset) || !or(l.node, l.offset, u.focusNode, u.focusOffset)) && !this.suppressWidgetCursorChange(u, s)) && (this.view.observer.ignore(() => {
        L.android && L.chrome && n.contains(u.focusNode) && da(u.focusNode, n) && (n.blur(), n.focus({
          preventScroll: !0
        }));
        let e = nr(this.view.root);
        if (e) {
          if (s.empty) {
            if (L.gecko) {
              let e = oa(c.node, c.offset);
              if (e && e != 3) {
                let t = (e == 1 ? Dr : Or)(c.node, c.offset);
                t && (c = new kr(t.node, t.offset));
              }
            }
            e.collapse(c.node, c.offset), s.bidiLevel != null && e.caretBidiLevel !== void 0 && (e.caretBidiLevel = s.bidiLevel);
          } else if (e.extend) {
            e.collapse(c.node, c.offset);
            try {
              e.extend(l.node, l.offset);
            } catch {}
          } else {
            let t = document.createRange();
            s.anchor > s.head && ([c, l] = [l, c]), t.setEnd(l.node, l.offset), t.setStart(c.node, c.offset), e.removeAllRanges(), e.addRange(t);
          }
        }
        a && this.view.root.activeElement == n && (n.blur(), r && r.focus());
      }), this.view.observer.setSelectionRange(c, l)), this.impreciseAnchor = c.precise ? null : new kr(u.anchorNode, u.anchorOffset), this.impreciseHead = l.precise ? null : new kr(u.focusNode, u.focusOffset);
    }
    suppressWidgetCursorChange(e, t) {
      return this.hasComposition && t.empty && or(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
    }
    enforceCursorAssoc() {
      if (this.hasComposition) return;
      let {
          view: e
        } = this,
        t = e.state.selection.main,
        n = nr(e.root),
        {
          anchorNode: r,
          anchorOffset: i
        } = e.observer.selectionRange;
      if (!n || !t.empty || !t.assoc || !n.modify) return;
      let a = this.lineAt(t.head, t.assoc);
      if (!a) return;
      let o = a.posAtStart;
      if (t.head == o || t.head == o + a.length) return;
      let s = this.coordsAt(t.head, -1),
        c = this.coordsAt(t.head, 1);
      if (!s || !c || s.bottom > c.top) return;
      let l = this.domAtPos(t.head + t.assoc, t.assoc);
      n.collapse(l.node, l.offset), n.modify(`move`, t.assoc < 0 ? `forward` : `backward`, `lineboundary`), e.observer.readSelectionRange();
      let u = e.observer.selectionRange;
      e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && n.collapse(r, i);
    }
    posFromDOM(e, t) {
      let n = this.tile.nearest(e);
      if (!n) return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
      let r = n.posAtStart;
      if (n.isComposite()) {
        let i;
        if (e == n.dom) i = n.dom.childNodes[t];else {
          let r = ur(e) == 0 ? 0 : t == 0 ? -1 : 1;
          for (;;) {
            let t = e.parentNode;
            if (t == n.dom) break;
            r == 0 && t.firstChild != t.lastChild && (r = e == t.firstChild ? -1 : 1), e = t;
          }
          i = r < 0 ? e : e.nextSibling;
        }
        if (i == n.dom.firstChild) return r;
        for (; i && !W.get(i);) i = i.nextSibling;
        if (!i) return r + n.length;
        for (let e = 0, t = r;; e++) {
          let r = n.children[e];
          if (r.dom == i) return t;
          t += r.length + r.breakAfter;
        }
      } else if (n.isText()) return e == n.dom ? r + t : r + (t ? n.length : 0);else return r;
    }
    domAtPos(e, t) {
      let {
        tile: n,
        offset: r
      } = this.tile.resolveBlock(e, t);
      return n.isWidget() ? n.domPosFor(r, t) : n.domIn(r, t);
    }
    inlineDOMNearPos(e, t) {
      let n,
        r = -1,
        i = !1,
        a,
        o = -1,
        s = !1;
      return this.tile.blockTiles((t, c) => {
        if (t.isWidget()) {
          if (t.flags & 32 && c >= e) return !0;
          t.flags & 16 && (i = !0);
        } else {
          let l = c + t.length;
          if (c <= e && (n = t, r = e - c, i = l < e), l >= e && !a && (a = t, o = e - c, s = c > e), c > e && a) return !0;
        }
      }), !n && !a ? this.domAtPos(e, t) : (i && a ? n = null : s && n && (a = null), n && t < 0 || !a ? n.domIn(r, t) : a.domIn(o, t));
    }
    coordsAt(e, t, n) {
      let {
        tile: r,
        offset: i
      } = this.tile.resolveBlock(e, t);
      return r.isWidget() ? r.widget instanceof pa ? null : r.coordsInWidget(i, t, !0) : r.coordsIn(i, t, n);
    }
    lineAt(e, t) {
      let {
        tile: n
      } = this.tile.resolveBlock(e, t);
      return n.isLine() ? n : null;
    }
    coordsForChar(e) {
      let {
        tile: t,
        offset: n
      } = this.tile.resolveBlock(e, 1);
      if (!t.isLine()) return null;
      function r(e, t) {
        if (e.isComposite()) for (let n of e.children) {
          if (n.length >= t) {
            let e = r(n, t);
            if (e) return e;
          }
          if (t -= n.length, t < 0) break;
        } else if (e.isText() && t < e.length) {
          let n = S(e.text, t);
          if (n == t) return null;
          let r = Sr(e.dom, t, n).getClientRects();
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (e == r.length - 1 || t.top < t.bottom && t.left < t.right) return t;
          }
        }
        return null;
      }
      return r(t, n);
    }
    measureVisibleLineHeights(e) {
      let t = [],
        {
          from: n,
          to: r
        } = e,
        i = this.view.contentDOM.clientWidth,
        a = i > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
        o = -1,
        s = this.view.textDirection == B.LTR,
        c = 0,
        l = (e, u, d) => {
          for (let f = 0; f < e.children.length && !(u > r); f++) {
            let r = e.children[f],
              p = u + r.length,
              m = r.dom.getBoundingClientRect(),
              {
                height: h
              } = m;
            if (d && !f && (c += m.top - d.top), r instanceof Ni) p > n && l(r, u, m);else if (u >= n && (c > 0 && t.push(-c), t.push(h + c), c = 0, a)) {
              let e = r.dom.lastChild,
                t = e ? ar(e) : [];
              if (t.length) {
                let e = t[t.length - 1],
                  n = s ? e.right - m.left : m.right - e.left;
                n > o && (o = n, this.minWidth = i, this.minWidthFrom = u, this.minWidthTo = p);
              }
            }
            d && f == e.children.length - 1 && (c += d.bottom - m.bottom), u = p + r.breakAfter;
          }
        };
      return l(this.tile, 0, null), t;
    }
    textDirectionAt(e) {
      let {
        tile: t
      } = this.tile.resolveBlock(e, 1);
      return getComputedStyle(t.dom).direction == `rtl` ? B.RTL : B.LTR;
    }
    measureTextSize() {
      let e = this.tile.blockTiles(e => {
        if (e.isLine() && e.children.length && e.length <= 20) {
          let t = 0,
            n;
          for (let r of e.children) {
            if (!r.isText() || /[^ -~]/.test(r.text)) return;
            let e = ar(r.dom);
            if (e.length != 1) return;
            t += e[0].width, n = e[0].height;
          }
          if (t) return {
            lineHeight: e.dom.getBoundingClientRect().height,
            charWidth: t / e.length,
            textHeight: n
          };
        }
      });
      if (e) return e;
      let t = document.createElement(`div`),
        n,
        r,
        i;
      return t.className = `cm-line`, t.style.width = `99999px`, t.style.position = `absolute`, t.textContent = `abc def ghi jkl mno pqr stu`, this.view.observer.ignore(() => {
        this.tile.dom.appendChild(t);
        let e = ar(t.firstChild)[0];
        n = t.getBoundingClientRect().height, r = e && e.width ? e.width / 27 : 7, i = e && e.height ? e.height : n, t.remove();
      }), {
        lineHeight: n,
        charWidth: r,
        textHeight: i
      };
    }
    computeBlockGapDeco() {
      let e = [],
        t = this.view.viewState;
      for (let n = 0, r = 0;; r++) {
        let i = r == t.viewports.length ? null : t.viewports[r],
          a = i ? i.from - 1 : this.view.state.doc.length;
        if (a > n) {
          let r = (t.lineBlockAt(a).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
          e.push(z.replace({
            widget: new pa(r),
            block: !0,
            inclusive: !0,
            isBlockGap: !0
          }).range(n, a));
        }
        if (!i) break;
        n = i.to + 1;
      }
      return z.set(e);
    }
    updateDeco() {
      let e = 1,
        t = this.view.state.facet(vi).map(t => (this.dynamicDecorationMap[e++] = typeof t == `function`) ? t(this.view) : t),
        n = !1,
        r = this.view.state.facet(bi).map((e, t) => {
          let r = typeof e == `function`;
          return r && (n = !0), r ? e(this.view) : e;
        });
      for (r.length && (this.dynamicDecorationMap[e++] = n, t.push(P.join(r))), this.decorations = [this.editContextFormatting, ...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e < this.decorations.length;) this.dynamicDecorationMap[e++] = !1;
      this.blockWrappers = this.view.state.facet(yi).map(e => typeof e == `function` ? e(this.view) : e);
    }
    scrollIntoView(e) {
      if (e.isSnapshot) {
        let t = this.view.viewState.lineBlockAt(e.range.head);
        this.view.scrollDOM.scrollTop = t.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
        return;
      }
      for (let t of this.view.state.facet(ci)) try {
        if (t(this.view, e.range, e)) return !0;
      } catch (e) {
        H(this.view.state, e, `scroll handler`);
      }
      let {
          range: t
        } = e,
        n = this.coordsAt(t.head, t.assoc || (t.head > t.anchor ? -1 : 1)),
        r;
      if (!n) return;
      !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (n = {
        left: Math.min(n.left, r.left),
        top: Math.min(n.top, r.top),
        right: Math.max(n.right, r.right),
        bottom: Math.max(n.bottom, r.bottom)
      });
      let i = Ti(this.view),
        a = {
          left: n.left - i.left,
          top: n.top - i.top,
          right: n.right + i.right,
          bottom: n.bottom + i.bottom
        },
        {
          offsetWidth: o,
          offsetHeight: s
        } = this.view.scrollDOM;
      if (mr(this.view.scrollDOM, a, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, o), -o), Math.max(Math.min(e.yMargin, s), -s), this.view.textDirection == B.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (n.top > window.visualViewport.offsetTop + window.visualViewport.height || n.bottom < window.visualViewport.offsetTop)) {
        let e = this.view.docView.lineAt(t.head, 1);
        if (e) {
          let t = _r(e.dom);
          e.dom.scrollIntoView({
            block: `nearest`
          }), vr(t, !1);
        }
      }
    }
    lineHasWidget(e) {
      let t = e => e.isWidget() || e.children.some(t);
      return t(this.tile.resolveBlock(e, 1).tile);
    }
    destroy() {
      na(this.tile);
    }
  };
function na(e, t) {
  let n = t?.get(e);
  if (n != 1) {
    n ?? e.destroy();
    for (let n of e.children) na(n, t);
  }
}
function ra(e) {
  return e.node.nodeType == 1 && e.node.firstChild && (e.offset == 0 || e.node.childNodes[e.offset - 1].contentEditable == `false`) && (e.offset == e.node.childNodes.length || e.node.childNodes[e.offset].contentEditable == `false`);
}
function ia(e, t) {
  let n = e.observer.selectionRange;
  if (!n.focusNode) return null;
  let r = Dr(n.focusNode, n.focusOffset),
    i = Or(n.focusNode, n.focusOffset),
    a = r || i;
  if (i && r && i.node != r.node) {
    let t = W.get(i.node);
    if (!t || t.isText() && t.text != i.node.nodeValue) a = i;else if (e.docView.lastCompositionAfterCursor) {
      let e = W.get(r.node);
      !e || e.isText() && e.text != r.node.nodeValue || (a = i);
    }
  }
  if (e.docView.lastCompositionAfterCursor = a != r, !a) return null;
  let o = t - a.offset;
  return {
    from: o,
    to: o + a.node.nodeValue.length,
    node: a.node
  };
}
function aa(e, t, n) {
  let r = ia(e, n);
  if (!r) return null;
  let {
      node: i,
      from: a,
      to: o
    } = r,
    s = i.nodeValue;
  if (/[\n\r]/.test(s) || e.state.doc.sliceString(r.from, r.to) != s) return null;
  let c = t.invertedDesc;
  return {
    range: new Di(c.mapPos(a), c.mapPos(o), a, o),
    text: i
  };
}
function oa(e, t) {
  return e.nodeType == 1 ? (t && e.childNodes[t - 1].contentEditable == `false` ? 1 : 0) | (t < e.childNodes.length && e.childNodes[t].contentEditable == `false` ? 2 : 0) : 0;
}
var sa = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    er(e, t, this.changes);
  }
  comparePoint(e, t) {
    er(e, t, this.changes);
  }
  boundChange(e) {
    er(e, e, this.changes);
  }
};
function ca(e, t, n) {
  let r = new sa();
  return P.compare(e, t, n, r), r.changes;
}
var la = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    er(e, t, this.changes);
  }
  comparePoint() {}
  boundChange(e) {
    er(e, e, this.changes);
  }
};
function ua(e, t, n) {
  let r = new la();
  return P.compare(e, t, n, r), r.changes;
}
function da(e, t) {
  for (let n = e; n && n != t; n = n.assignedSlot || n.parentNode) if (n.nodeType == 1 && n.contentEditable == `false`) return !0;
  return !1;
}
function fa(e, t) {
  let n = !1;
  return t && e.iterChangedRanges((e, r) => {
    e < t.to && r > t.from && (n = !0);
  }), n;
}
var pa = class extends Jn {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement(`div`);
    return e.className = `cm-gap`, this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + `px`, !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
};
function ma(e, t, n = 1) {
  let r = e.charCategorizer(t),
    i = e.doc.lineAt(t),
    a = t - i.from;
  if (i.length == 0) return D.cursor(t);
  a == 0 ? n = 1 : a == i.length && (n = -1);
  let o = a,
    s = a;
  n < 0 ? o = S(i.text, a, !1) : s = S(i.text, a);
  let c = r(i.text.slice(o, s));
  for (; o > 0;) {
    let e = S(i.text, o, !1);
    if (r(i.text.slice(e, o)) != c) break;
    o = e;
  }
  for (; s < i.length;) {
    let e = S(i.text, s);
    if (r(i.text.slice(s, e)) != c) break;
    s = e;
  }
  return D.undirectionalRange(o + i.from, s + i.from);
}
function ha(e, t, n, r, i) {
  let a = Math.round((r - t.left) * e.defaultCharacterWidth);
  if (e.lineWrapping && n.height > e.defaultLineHeight * 1.5) {
    let t = e.viewState.heightOracle.textHeight,
      r = Math.floor((i - n.top - (e.defaultLineHeight - t) * .5) / t);
    a += r * e.viewState.heightOracle.lineLength;
  }
  let o = e.state.sliceDoc(n.from, n.to);
  return n.from + gn(o, a, e.state.tabSize);
}
function ga(e, t, n) {
  let r = e.lineBlockAt(t);
  if (Array.isArray(r.type)) {
    let e;
    for (let i of r.type) {
      if (i.from > t) break;
      if (!(i.to < t)) {
        if (i.from < t && i.to > t) return i;
        (!e || i.type == R.Text && (e.type != i.type || (n < 0 ? i.from < t : i.to > t))) && (e = i);
      }
    }
    return e || r;
  }
  return r;
}
function _a(e, t, n, r) {
  let i = ga(e, t.head, t.assoc || -1),
    a = !r || i.type != R.Text || !(e.lineWrapping || i.widgetLineBreaks) ? null : e.coordsAtPos(t.assoc < 0 && t.head > i.from ? t.head - 1 : t.head);
  if (a) {
    let t = e.dom.getBoundingClientRect(),
      r = e.textDirectionAt(i.from),
      o = e.posAtCoords({
        x: n == (r == B.LTR) ? t.right - 1 : t.left + 1,
        y: (a.top + a.bottom) / 2
      });
    if (o != null) return D.cursor(o, n ? -1 : 1);
  }
  return D.cursor(n ? i.to : i.from, n ? -1 : 1);
}
function va(e, t, n, r) {
  let i = e.state.doc.lineAt(t.head),
    a = e.bidiSpans(i),
    o = e.textDirectionAt(i.from);
  for (let s = t, c = null;;) {
    let t = Yr(i, a, o, s, n),
      l = Jr;
    if (!t) {
      if (i.number == (n ? e.state.doc.lines : 1)) return s;
      l = `
`, i = e.state.doc.line(i.number + (n ? 1 : -1)), a = e.bidiSpans(i), t = e.visualLineSide(i, !n);
    }
    if (!c) {
      if (!r) return t;
      c = r(l);
    } else if (!c(l)) return s;
    s = t;
  }
}
function ya(e, t, n) {
  let r = e.state.charCategorizer(t),
    i = r(n);
  return e => {
    let t = r(e);
    return i == M.Space && (i = t), i == t;
  };
}
function ba(e, t, n, r) {
  let i = t.head,
    a = n ? 1 : -1;
  if (i == (n ? e.state.doc.length : 0)) return D.cursor(i, t.assoc);
  let o = t.goalColumn,
    s,
    c = e.contentDOM.getBoundingClientRect(),
    l = e.coordsAtPos(i, t.assoc || ((t.empty ? n : t.head == t.from) ? 1 : -1)),
    u = e.documentTop;
  if (l) o ??= l.left - c.left, s = a < 0 ? l.top : l.bottom;else {
    let t = e.viewState.lineBlockAt(i);
    o ??= Math.min(c.right - c.left, e.defaultCharacterWidth * (i - t.from)), s = (a < 0 ? t.top : t.bottom) + u;
  }
  let d = c.left + o,
    f = e.viewState.heightOracle.textHeight >> 1,
    p = r ?? f;
  for (let t = 0;; t += f) {
    let r = s + (p + t) * a,
      i = Ta(e, {
        x: d,
        y: r
      }, !1, a);
    if (n ? r > c.bottom : r < c.top) return D.cursor(i.pos, i.assoc);
    let l = e.coordsAtPos(i.pos, i.assoc),
      u = l ? (l.top + l.bottom) / 2 : 0;
    if (!l || (n ? u > s : u < s)) return D.cursor(i.pos, i.assoc, void 0, o);
  }
}
function xa(e, t, n) {
  for (;;) {
    let r = 0;
    for (let i of e) i.between(t - 1, t + 1, (e, i, a) => {
      if (t > e && t < i) {
        let a = r || n || (t - e < i - t ? -1 : 1);
        t = a < 0 ? e : i, r = a;
      }
    });
    if (!r) return t;
  }
}
function Sa(e, t) {
  let n = null;
  for (let r = 0; r < t.ranges.length; r++) {
    let i = t.ranges[r],
      a = null;
    if (i.empty) {
      let t = xa(e, i.from, 0);
      t != i.from && (a = D.cursor(t, -1));
    } else {
      let t = xa(e, i.from, -1),
        n = xa(e, i.to, 1);
      (t != i.from || n != i.to) && (a = i.undirectional ? D.undirectionalRange(i.from, i.to) : D.range(i.from == i.anchor ? t : n, i.from == i.head ? t : n));
    }
    a && (n ||= t.ranges.slice(), n[r] = a);
  }
  return n ? D.create(n, t.mainIndex) : t;
}
function Ca(e, t, n) {
  let r = xa(e.state.facet(xi).map(t => t(e)), n.from, t.head > n.from ? -1 : 1);
  return r == n.from ? n : D.cursor(r, r < n.from ? 1 : -1);
}
var wa = class {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
};
function Ta(e, t, n, r) {
  let i = e.contentDOM.getBoundingClientRect(),
    a = i.top + e.viewState.paddingTop,
    {
      x: o,
      y: s
    } = t,
    c = s - a,
    l;
  for (;;) {
    if (c < 0) return new wa(0, 1);
    if (c > e.viewState.docHeight) return new wa(e.state.doc.length, -1);
    if (l = e.elementAtHeight(c), r == null) break;
    if (l.type == R.Text) {
      if (r < 0 ? l.to < e.viewport.from : l.from > e.viewport.to) break;
      let t = e.docView.coordsAt(r < 0 ? l.from : l.to, r > 0 ? -1 : 1);
      if (t && (r < 0 ? t.top <= c + a : t.bottom >= c + a)) break;
    }
    let t = e.viewState.heightOracle.textHeight / 2;
    c = r > 0 ? l.bottom + t : l.top - t;
  }
  if (e.viewport.from >= l.to || e.viewport.to <= l.from) {
    if (n) return null;
    if (l.type == R.Text) {
      let t = ha(e, i, l, o, s);
      return new wa(t, t == l.from ? 1 : -1);
    }
  }
  if (l.type != R.Text) return c < (l.top + l.bottom) / 2 ? new wa(l.from, 1) : new wa(l.to, -1);
  let u = e.docView.lineAt(l.from, 2);
  return (!u || u.length != l.length) && (u = e.docView.lineAt(l.from, -2)), new Ea(e, o, s, e.textDirectionAt(l.from)).scanTile(u, l.from);
}
var Ea = class {
    constructor(e, t, n, r) {
      this.view = e, this.x = t, this.y = n, this.baseDir = r, this.line = null, this.spans = null;
    }
    bidiSpansAt(e) {
      return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
    }
    baseDirAt(e, t) {
      let {
        line: n,
        spans: r
      } = this.bidiSpansAt(e);
      return r[zr.find(r, e - n.from, -1, t)].level == this.baseDir;
    }
    dirAt(e, t) {
      let {
        line: n,
        spans: r
      } = this.bidiSpansAt(e);
      return r[zr.find(r, e - n.from, -1, t)].dir;
    }
    bidiIn(e, t) {
      let {
        spans: n,
        line: r
      } = this.bidiSpansAt(e);
      return n.length > 1 || n.length && (n[0].level != this.baseDir || n[0].to + r.from < t);
    }
    scan(e, t, n = !1) {
      let r = 0,
        i = e.length - 1,
        a = new Set(),
        o = this.bidiIn(e[0], e[i]),
        s,
        c,
        l = -1,
        u = 1e9,
        d;
      search: for (; r < i;) {
        let n = i - r,
          f = r + i >> 1;
        adjust: if (a.has(f)) {
          for (let e = 1; e < n; e++) {
            let t = f + e;
            if (t >= i && (t -= n), !a.has(t)) {
              f = t;
              break adjust;
            }
          }
          break search;
        }
        a.add(f);
        let p = t(f),
          m = 0;
        if (p) for (let e = 0; e < p.length; e++) {
          let t = p[e];
          if (!(t.width == 0 && p.length > 1)) {
            if (t.bottom < this.y) (!s || s.bottom < t.bottom) && (s = t), m = 1;else if (t.top > this.y) (!c || c.top > t.top) && (c = t), m = -1;else {
              let e = t.left > this.x ? this.x - t.left : t.right < this.x ? this.x - t.right : 0,
                n = Math.abs(e);
              n < u && (l = f, u = n, d = t), e && (m = e < 0 == (this.baseDir == B.LTR) ? -1 : 1);
            }
          }
        }
        m == -1 && (!o || this.baseDirAt(e[f], 1)) ? i = f : m == 1 && (!o || this.baseDirAt(e[f + 1], -1)) && (r = f + 1);
      }
      if (!d) {
        if (!c && !s) return {
          i: e[0],
          after: !1
        };
        let n = s && (!c || this.y - s.bottom < c.top - this.y) ? s : c;
        return this.y = (n.top + n.bottom) / 2, this.scan(e, t, !0);
      }
      if (u && !n) {
        let {
          top: n,
          bottom: r
        } = d;
        if (s && s.bottom > (n + n + r) / 3) return this.y = s.bottom - 1, this.scan(e, t, !0);
        if (c && c.top < (n + r + r) / 3) return this.y = c.top + 1, this.scan(e, t, !0);
      }
      let f = (o ? this.dirAt(e[l], 1) : this.baseDir) == B.LTR;
      return {
        i: l,
        after: this.x > (d.left + d.right) / 2 == f
      };
    }
    scanText(e, t) {
      let n = [];
      for (let r = 0; r < e.length; r = S(e.text, r)) n.push(t + r);
      n.push(t + e.length);
      let r = this.scan(n, r => {
        let i = n[r] - t,
          a = n[r + 1] - t;
        return Sr(e.dom, i, a).getClientRects();
      });
      return r.after ? new wa(n[r.i + 1], -1) : new wa(n[r.i], 1);
    }
    scanTile(e, t) {
      if (!e.length) return new wa(t, 1);
      if (e.children.length == 1) {
        let n = e.children[0];
        if (n.isText()) return this.scanText(n, t);
        if (n.isComposite()) return this.scanTile(n, t);
      }
      let n = [t];
      for (let r = 0, i = t; r < e.children.length; r++) n.push(i += e.children[r].length);
      let r = this.scan(n, t => {
          let n = e.children[t];
          return n.flags & 48 ? null : (n.dom.nodeType == 1 ? n.dom : Sr(n.dom, 0, n.length)).getClientRects();
        }),
        i = e.children[r.i],
        a = n[r.i];
      return i.isText() ? this.scanText(i, a) : i.isComposite() ? this.scanTile(i, a) : r.after ? new wa(n[r.i + 1], -1) : new wa(a, 1);
    }
  },
  Da = `￿`,
  Oa = class {
    constructor(e, t) {
      this.points = e, this.view = t, this.text = ``, this.lineSeparator = t.state.facet(N.lineSeparator);
    }
    append(e) {
      this.text += e;
    }
    lineBreak() {
      this.text += Da;
    }
    readRange(e, t) {
      if (!e) return this;
      let n = e.parentNode;
      for (let r = e;;) {
        this.findPointBefore(n, r);
        let e = this.text.length;
        this.readNode(r);
        let i = W.get(r),
          a = r.nextSibling;
        if (a == t) {
          i?.breakAfter && !a && n != this.view.contentDOM && this.lineBreak();
          break;
        }
        let o = W.get(a);
        (i && o ? i.breakAfter : (i ? i.breakAfter : cr(r)) || cr(a) && (r.nodeName != `BR` || i?.isWidget()) && this.text.length > e) && !Aa(a, t) && this.lineBreak(), r = a;
      }
      return this.findPointBefore(n, t), this;
    }
    readTextNode(e) {
      let t = e.nodeValue;
      for (let n of this.points) n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
      for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g;;) {
        let i = -1,
          a = 1,
          o;
        if (this.lineSeparator ? (i = t.indexOf(this.lineSeparator, n), a = this.lineSeparator.length) : (o = r.exec(t)) && (i = o.index, a = o[0].length), this.append(t.slice(n, i < 0 ? t.length : i)), i < 0) break;
        if (this.lineBreak(), a > 1) for (let t of this.points) t.node == e && t.pos > this.text.length && (t.pos -= a - 1);
        n = i + a;
      }
    }
    readNode(e) {
      let t = W.get(e),
        n = t && t.overrideDOMText;
      if (n != null) {
        this.findPointInside(e, n.length);
        for (let e = n.iter(); !e.next().done;) e.lineBreak ? this.lineBreak() : this.append(e.value);
      } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == `BR` ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
    }
    findPointBefore(e, t) {
      for (let n of this.points) n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
    }
    findPointInside(e, t) {
      for (let n of this.points) (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (ka(e, n.node, n.offset) ? t : 0));
    }
  };
function ka(e, t, n) {
  for (;;) {
    if (!t || n < ur(t)) return !1;
    if (t == e) return !0;
    n = sr(t) + 1, t = t.parentNode;
  }
}
function Aa(e, t) {
  let n;
  for (; !(e == t || !e); e = e.nextSibling) {
    let t = W.get(e);
    if (!t?.isWidget()) return !1;
    t && (n ||= []).push(t);
  }
  if (n) {
    for (let e of n) if (e.overrideDOMText?.length) return !1;
  }
  return !0;
}
var ja = class {
    constructor(e, t) {
      this.node = e, this.offset = t, this.pos = -1;
    }
  },
  Ma = class {
    constructor(e, t, n, r) {
      this.typeOver = r, this.bounds = null, this.text = ``, this.domChanged = t > -1;
      let {
          impreciseHead: i,
          impreciseAnchor: a
        } = e.docView,
        o = e.state.selection;
      if (e.state.readOnly && t > -1) this.newSel = null;else if (t > -1 && (this.bounds = Na(e.docView.tile, t, n, 0))) {
        let t = i || a ? [] : Ra(e),
          n = new Oa(t, e);
        n.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = n.text, this.newSel = za(t, this.bounds.from);
      } else {
        let t = e.observer.selectionRange,
          n = i && i.node == t.focusNode && i.offset == t.focusOffset || !rr(e.contentDOM, t.focusNode) ? o.main.head : e.docView.posFromDOM(t.focusNode, t.focusOffset),
          r = a && a.node == t.anchorNode && a.offset == t.anchorOffset || !rr(e.contentDOM, t.anchorNode) ? o.main.anchor : e.docView.posFromDOM(t.anchorNode, t.anchorOffset),
          s = e.viewport;
        if ((L.ios || L.chrome) && n != r && Math.min(n, r) <= o.main.from && Math.max(n, r) >= o.main.to && (s.from > 0 || s.to < e.state.doc.length)) {
          let t = Math.min(n, r),
            i = Math.max(n, r),
            a = s.from - t,
            o = s.to - i;
          (a == 0 || a == 1 || t == 0) && (o == 0 || o == -1 || i == e.state.doc.length) && (n = 0, r = e.state.doc.length);
        }
        if (e.inputState.composing > -1 && o.ranges.length > 1) this.newSel = o.replaceRange(D.range(r, n));else if (e.lineWrapping && r == n && !(o.main.empty && o.main.head == n) && e.inputState.lastTouchTime > Date.now() - 100) {
          let t = e.coordsAtPos(n, -1),
            r = 0;
          t && (r = e.inputState.lastTouchY <= t.bottom ? -1 : 1), this.newSel = D.create([D.cursor(n, r)]);
        } else this.newSel = D.single(r, n);
      }
    }
  };
function Na(e, t, n, r) {
  if (e.isComposite()) {
    let i = -1,
      a = -1,
      o = -1,
      s = -1;
    for (let c = 0, l = r, u = r; c < e.children.length; c++) {
      let r = e.children[c],
        d = l + r.length;
      if (l < t && d > n) return Na(r, t, n, l);
      if (d >= t && i == -1 && (i = c, a = l), l > n && r.dom.parentNode == e.dom) {
        o = c, s = u;
        break;
      }
      u = d, l = d + r.breakAfter;
    }
    return {
      from: a,
      to: s < 0 ? r + e.length : s,
      startDOM: (i ? e.children[i - 1].dom.nextSibling : null) || e.dom.firstChild,
      endDOM: o < e.children.length && o >= 0 ? e.children[o].dom : null
    };
  }
  return e.isText() ? {
    from: r,
    to: r + e.length,
    startDOM: e.dom,
    endDOM: e.dom.nextSibling
  } : null;
}
function Pa(e, t) {
  let n,
    {
      newSel: r
    } = t,
    {
      state: i
    } = e,
    a = i.selection.main,
    o = e.inputState.lastKeyTime > Date.now() - 100 ? e.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let {
        from: e,
        to: r
      } = t.bounds,
      s = a.from,
      c = null;
    (o === 8 || L.android && t.text.length < r - e) && (s = a.to, c = `end`);
    let l = i.doc.sliceString(e, r, Da),
      u,
      d;
    !a.empty && a.from >= e && a.to <= r && (t.typeOver || l != t.text) && l.slice(0, a.from - e) == t.text.slice(0, a.from - e) && l.slice(a.to - e) == t.text.slice(u = t.text.length - (l.length - (a.to - e))) ? n = {
      from: a.from,
      to: a.to,
      insert: b.of(t.text.slice(a.from - e, u).split(Da))
    } : (d = La(l, t.text, s - e, c)) && (L.chrome && o == 13 && d.toB == d.from + 2 && t.text.slice(d.from, d.toB) == `￿￿` && d.toB--, n = {
      from: e + d.from,
      to: e + d.toA,
      insert: b.of(t.text.slice(d.from, d.toB).split(Da))
    });
  } else r && (!e.hasFocus && i.facet(fi) || Ba(r, a)) && (r = null);
  if (!n && !r) return !1;
  if ((L.mac || L.android) && n && n.from == n.to && n.from == a.head - 1 && /^\. ?$/.test(n.insert.toString()) && e.contentDOM.getAttribute(`autocorrect`) == `off` ? (r && n.insert.length == 2 && (r = D.single(r.main.anchor - 1, r.main.head - 1)), n = {
    from: n.from,
    to: n.to,
    insert: b.of([n.insert.toString().replace(`.`, ` `)])
  }) : i.doc.lineAt(a.from).to < a.to && e.docView.lineHasWidget(a.to) && e.inputState.insertingTextAt > Date.now() - 50 ? n = {
    from: a.from,
    to: a.to,
    insert: i.toText(e.inputState.insertingText)
  } : L.chrome && n && n.from == n.to && n.from == a.head && n.insert.toString() == `
 ` && e.lineWrapping && (r &&= D.single(r.main.anchor - 1, r.main.head - 1), n = {
    from: a.from,
    to: a.to,
    insert: b.of([` `])
  }), n) return Fa(e, n, r, o);
  if (r && !Ba(r, a)) {
    let t = !1,
      n = `select`;
    return e.inputState.lastSelectionTime > Date.now() - 50 && (e.inputState.lastSelectionOrigin == `select` && (t = !0), n = e.inputState.lastSelectionOrigin, n == `select.pointer` && (r = Sa(i.facet(xi).map(t => t(e)), r))), e.dispatch({
      selection: r,
      scrollIntoView: t,
      userEvent: n
    }), !0;
  }
  return !1;
}
function Fa(e, t, n, r = -1) {
  if (L.ios && e.inputState.flushIOSKey(t)) return !0;
  let i = e.state.selection.main;
  if (L.android && (t.to == i.to && (t.from == i.from || t.from == i.from - 1 && e.state.sliceDoc(t.from, i.from) == ` `) && t.insert.length == 1 && t.insert.lines == 2 && Cr(e.contentDOM, `Enter`, 13) || (t.from == i.from - 1 && t.to == i.to && t.insert.length == 0 || r == 8 && t.insert.length < t.to - t.from && t.to > i.head) && Cr(e.contentDOM, `Backspace`, 8) || t.from == i.from && t.to == i.to + 1 && t.insert.length == 0 && Cr(e.contentDOM, `Delete`, 46))) return !0;
  let a = t.insert.toString();
  e.inputState.composing >= 0 && e.inputState.composing++;
  let o,
    s = () => o ||= Ia(e, t, n);
  return e.state.facet(ni).some(n => n(e, t.from, t.to, a, s)) || e.dispatch(s()), !0;
}
function Ia(e, t, n) {
  let r,
    i = e.state,
    a = i.selection.main,
    o = -1;
  if (t.from == t.to && t.from < a.from || t.from > a.to) {
    let n = t.from < a.from ? -1 : 1,
      r = n < 0 ? a.from : a.to,
      s = xa(i.facet(xi).map(t => t(e)), r, n);
    t.from == s && (o = s);
  }
  if (o > -1) r = {
    changes: t,
    selection: D.cursor(t.from + t.insert.length, -1)
  };else if (t.from >= a.from && t.to <= a.to && t.to - t.from >= (a.to - a.from) / 3 && (!n || n.main.empty && n.main.from == t.from + t.insert.length) && e.inputState.composing < 0) {
    let n = a.from < t.from ? i.sliceDoc(a.from, t.from) : ``,
      o = a.to > t.to ? i.sliceDoc(t.to, a.to) : ``;
    r = i.replaceSelection(e.state.toText(n + t.insert.sliceString(0, void 0, e.state.lineBreak) + o));
  } else {
    let o = i.changes(t),
      s = n && n.main.to <= o.newLength ? n.main : void 0;
    if (i.selection.ranges.length > 1 && (e.inputState.composing >= 0 || e.inputState.compositionPendingChange) && t.to <= a.to + 10 && t.to >= a.to - 10) {
      let c = e.state.sliceDoc(t.from, t.to),
        l,
        u = n && ia(e, n.main.head);
      if (u) {
        let e = t.insert.length - (t.to - t.from);
        l = {
          from: u.from,
          to: u.to - e
        };
      } else l = e.state.doc.lineAt(a.head);
      let d = a.to - t.to;
      r = i.changeByRange(n => {
        if (n.from == a.from && n.to == a.to) return {
          changes: o,
          range: s || n.map(o)
        };
        let r = n.to - d,
          u = r - c.length;
        if (e.state.sliceDoc(u, r) != c || r >= l.from && u <= l.to) return {
          range: n
        };
        let f = i.changes({
            from: u,
            to: r,
            insert: t.insert
          }),
          p = n.to - a.to;
        return {
          changes: f,
          range: s ? D.range(Math.max(0, s.anchor + p), Math.max(0, s.head + p)) : n.map(f)
        };
      });
    } else r = {
      changes: o,
      selection: s && i.selection.replaceRange(s)
    };
  }
  let s = `input.type`;
  return (e.composing || e.inputState.compositionPendingChange && e.inputState.compositionEndedAt > Date.now() - 50) && (e.inputState.compositionPendingChange = !1, s += `.compose`, e.inputState.compositionFirstChange && (s += `.start`, e.inputState.compositionFirstChange = !1)), i.update(r, {
    userEvent: s,
    scrollIntoView: !0
  });
}
function La(e, t, n, r) {
  let i = Math.min(e.length, t.length),
    a = 0;
  for (; a < i && e.charCodeAt(a) == t.charCodeAt(a);) a++;
  if (a == i && e.length == t.length) return null;
  let o = e.length,
    s = t.length;
  for (; o > 0 && s > 0 && e.charCodeAt(o - 1) == t.charCodeAt(s - 1);) o--, s--;
  if (r == `end`) {
    let e = Math.max(0, a - Math.min(o, s));
    n -= o + e - a;
  }
  if (o < a && e.length < t.length) {
    let e = n <= a && n >= o ? a - n : 0;
    a -= e, s = a + (s - o), o = a;
  } else if (s < a) {
    let e = n <= a && n >= s ? a - n : 0;
    a -= e, o = a + (o - s), s = a;
  }
  return {
    from: a,
    toA: o,
    toB: s
  };
}
function Ra(e) {
  let t = [];
  if (e.root.activeElement != e.contentDOM) return t;
  let {
    anchorNode: n,
    anchorOffset: r,
    focusNode: i,
    focusOffset: a
  } = e.observer.selectionRange;
  return n && (t.push(new ja(n, r)), (i != n || a != r) && t.push(new ja(i, a))), t;
}
function za(e, t) {
  if (e.length == 0) return null;
  let n = e[0].pos,
    r = e.length == 2 ? e[1].pos : n;
  return n > -1 && r > -1 ? D.single(n + t, r + t) : null;
}
function Ba(e, t) {
  return t.head == e.main.head && t.anchor == e.main.anchor;
}
var Va = class {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.touchActive = !1, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.lastIOSMomentumScroll = 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = ``, this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, L.safari && e.contentDOM.addEventListener(`input`, () => null), L.gecko && wo(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !to(this.view, e) || this.ignoreDuringComposition(e) || e.type == `keydown` && this.keydown(e) || (this.view.updateState == 0 ? this.runHandlers(e.type, e) : Promise.resolve().then(() => this.runHandlers(e.type, e)));
  }
  runHandlers(e, t) {
    let n = this.handlers[e];
    if (n) {
      for (let e of n.observers) e(this.view, t);
      for (let e of n.handlers) {
        if (t.defaultPrevented) break;
        if (e(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Wa(e),
      n = this.handlers,
      r = this.view.contentDOM;
    for (let e in t) if (e != `scroll`) {
      let i = !t[e].handlers.length,
        a = n[e];
      a && i != !a.handlers.length && (r.removeEventListener(e, this.handleEvent), a = null), a || r.addEventListener(e, this.handleEvent, {
        passive: i
      });
    }
    for (let e in n) e != `scroll` && !t[e] && r.removeEventListener(e, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && qa.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), L.android && L.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    if (L.ios && !e.synthetic && !e.altKey && !e.metaKey && (Ga.some(t => t.keyCode == e.keyCode) && !e.ctrlKey || Ka.indexOf(e.key) > -1 && e.ctrlKey)) {
      let t = {
        ctrlKey: e.ctrlKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
        shiftKey: e.shiftKey
      };
      return t.shiftKey && L.ios && !/^(off|none)$/.test(this.view.contentDOM.autocapitalize) && Ha(this.view.win) && (t.shiftKey = !1), this.pendingIOSKey = {
        key: e.key,
        keyCode: e.keyCode,
        mods: t
      }, setTimeout(() => this.flushIOSKey(), 250), !0;
    }
    return e.keyCode != 229 && this.view.observer.forceFlush(), !1;
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == `Enter` && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Cr(this.view.contentDOM, t.key, t.keyCode, t.mods));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : L.safari && !L.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
};
function Ha(e) {
  return e.visualViewport ? e.visualViewport.height * e.visualViewport.scale / e.document.documentElement.clientHeight < .85 : !1;
}
function Ua(e, t) {
  return (n, r) => {
    try {
      return t.call(e, r, n);
    } catch (e) {
      H(n.state, e);
    }
  };
}
function Wa(e) {
  let t = Object.create(null);
  function n(e) {
    return t[e] || (t[e] = {
      observers: [],
      handlers: []
    });
  }
  for (let t of e) {
    let e = t.spec,
      r = e && e.plugin.domEventHandlers,
      i = e && e.plugin.domEventObservers;
    if (r) for (let e in r) {
      let i = r[e];
      i && n(e).handlers.push(Ua(t.value, i));
    }
    if (i) for (let e in i) {
      let r = i[e];
      r && n(e).observers.push(Ua(t.value, r));
    }
  }
  for (let e in no) n(e).handlers.push(no[e]);
  for (let e in K) n(e).observers.push(K[e]);
  return t;
}
var Ga = [{
    key: `Backspace`,
    keyCode: 8,
    inputType: `deleteContentBackward`
  }, {
    key: `Enter`,
    keyCode: 13,
    inputType: `insertParagraph`
  }, {
    key: `Enter`,
    keyCode: 13,
    inputType: `insertLineBreak`
  }, {
    key: `Delete`,
    keyCode: 46,
    inputType: `deleteContentForward`
  }],
  Ka = `dthko`,
  qa = [16, 17, 18, 20, 91, 92, 224, 225],
  Ja = 6;
function Ya(e) {
  return Math.max(0, e) * .7 + 8;
}
function Xa(e, t) {
  return Math.max(Math.abs(e.clientX - t.clientX), Math.abs(e.clientY - t.clientY));
}
var Za = class {
  constructor(e, t, n, r) {
    this.view = e, this.startEvent = t, this.style = n, this.mustSelect = r, this.scrollSpeed = {
      x: 0,
      y: 0
    }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = hr(e.contentDOM), this.atoms = e.state.facet(xi).map(t => t(e));
    let i = e.contentDOM.ownerDocument;
    i.addEventListener(`mousemove`, this.move = this.move.bind(this)), i.addEventListener(`mouseup`, this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(N.allowMultipleSelections) && Qa(e, t), this.dragging = eo(e, t) && po(t) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || this.dragging == null && Xa(this.startEvent, e) < 10) return;
    this.select(this.lastEvent = e);
    let t = 0,
      n = 0,
      r = 0,
      i = 0,
      a = this.view.win.innerWidth,
      o = this.view.win.innerHeight;
    this.scrollParents.x && ({
      left: r,
      right: a
    } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
      top: i,
      bottom: o
    } = this.scrollParents.y.getBoundingClientRect());
    let s = Ti(this.view);
    e.clientX - s.left <= r + Ja ? t = -Ya(r - e.clientX) : e.clientX + s.right >= a - Ja && (t = Ya(e.clientX - a)), e.clientY - s.top <= i + Ja ? n = -Ya(i - e.clientY) : e.clientY + s.bottom >= o - Ja && (n = Ya(e.clientY - o)), this.setScrollSpeed(t, n);
  }
  up(e) {
    this.dragging ?? this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener(`mousemove`, this.move), e.removeEventListener(`mouseup`, this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = {
      x: e,
      y: t
    }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let {
      x: e,
      y: t
    } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(e) {
    let {
        view: t
      } = this,
      n = Sa(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: n,
      userEvent: `select.pointer`
    }), this.mustSelect = !1;
  }
  update(e) {
    e.transactions.some(e => e.isUserEvent(`input.type`)) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
};
function Qa(e, t) {
  let n = e.state.facet(Zr);
  return n.length ? n[0](t) : L.mac ? t.metaKey : t.ctrlKey;
}
function $a(e, t) {
  let n = e.state.facet(Qr);
  return n.length ? n[0](t) : L.mac ? !t.altKey : !t.ctrlKey;
}
function eo(e, t) {
  let {
    main: n
  } = e.state.selection;
  if (n.empty) return !1;
  let r = nr(e.root);
  if (!r || r.rangeCount == 0) return !0;
  let i = r.getRangeAt(0).getClientRects();
  for (let e = 0; e < i.length; e++) {
    let n = i[e];
    if (n.left <= t.clientX && n.right >= t.clientX && n.top <= t.clientY && n.bottom >= t.clientY) return !0;
  }
  return !1;
}
function to(e, t) {
  if (!t.bubbles) return !0;
  if (t.defaultPrevented) return !1;
  for (let n = t.target, r; n != e.contentDOM; n = n.parentNode) if (!n || n.nodeType == 11 || (r = W.get(n)) && r.isWidget() && !r.isHidden && r.widget.ignoreEvent(t)) return !1;
  return !0;
}
var no = Object.create(null),
  K = Object.create(null),
  ro = L.ie && L.ie_version < 15 || L.ios && L.webkit_version < 604;
function io(e) {
  let t = e.dom.parentNode;
  if (!t) return;
  let n = t.appendChild(document.createElement(`textarea`));
  n.style.cssText = `position: fixed; left: -10000px; top: 10px`, n.focus(), setTimeout(() => {
    e.focus(), n.remove(), oo(e, n.value);
  }, 50);
}
function ao(e, t, n) {
  for (let r of e.facet(t)) n = r(n, e);
  return n;
}
function oo(e, t) {
  t = ao(e.state, ii, t);
  let {
      state: n
    } = e,
    r,
    i = 1,
    a = n.toText(t),
    o = a.lines == n.selection.ranges.length;
  if (yo != null && n.selection.ranges.every(e => e.empty) && yo == a.toString()) {
    let e = -1;
    r = n.changeByRange(r => {
      let s = n.doc.lineAt(r.from);
      if (s.from == e) return {
        range: r
      };
      e = s.from;
      let c = n.toText((o ? a.line(i++).text : t) + n.lineBreak);
      return {
        changes: {
          from: s.from,
          insert: c
        },
        range: D.cursor(r.from + c.length)
      };
    });
  } else r = o ? n.changeByRange(e => {
    let t = a.line(i++);
    return {
      changes: {
        from: e.from,
        to: e.to,
        insert: t.text
      },
      range: D.cursor(e.from + t.length)
    };
  }) : n.replaceSelection(a);
  e.dispatch(r, {
    userEvent: `input.paste`,
    scrollIntoView: !0
  });
}
K.scroll = e => {
  let t = e.inputState;
  t.lastScrollTop = e.scrollDOM.scrollTop, t.lastScrollLeft = e.scrollDOM.scrollLeft, L.ios && !t.touchActive && (t.lastIOSMomentumScroll = Date.now());
}, K.wheel = K.mousewheel = e => {
  e.inputState.lastWheelEvent = Date.now();
}, no.keydown = (e, t) => (e.inputState.setSelectionOrigin(`select`), t.keyCode == 27 && e.inputState.tabFocusMode != 0 && (e.inputState.tabFocusMode = Date.now() + 2e3), !1), K.touchstart = (e, t) => {
  let n = e.inputState,
    r = t.targetTouches[0];
  n.touchActive = !0, n.lastTouchTime = Date.now(), r && (n.lastTouchX = r.clientX, n.lastTouchY = r.clientY), n.setSelectionOrigin(`select.pointer`);
}, K.touchmove = e => {
  e.inputState.setSelectionOrigin(`select.pointer`);
}, K.touchend = (e, t) => {
  e.inputState.touchActive = !1;
}, no.mousedown = (e, t) => {
  if (e.observer.flush(), e.inputState.lastTouchTime > Date.now() - 2e3) return !1;
  let n = null;
  for (let r of e.state.facet($r)) if (n = r(e, t), n) break;
  if (!n && t.button == 0 && (n = mo(e, t)), n) {
    let r = !e.hasFocus;
    e.inputState.startMouseSelection(new Za(e, t, n, r)), r && e.observer.ignore(() => {
      br(e.contentDOM);
      let t = e.root.activeElement;
      t && !t.contains(e.contentDOM) && t.blur();
    });
    let i = e.inputState.mouseSelection;
    if (i) return i.start(t), i.dragging === !1;
  } else e.inputState.setSelectionOrigin(`select.pointer`);
  return !1;
};
function so(e, t, n, r) {
  if (r == 1) return D.cursor(t, n);
  if (r == 2) return ma(e.state, t, n);
  {
    let r = e.docView.lineAt(t, n),
      i = e.state.doc.lineAt(r ? r.posAtEnd : t),
      a = r ? r.posAtStart : i.from,
      o = r ? r.posAtEnd : i.to;
    return o < e.state.doc.length && o == i.to && o++, D.undirectionalRange(a, o);
  }
}
var co = L.ie && L.ie_version <= 11,
  lo = null,
  uo = 0,
  fo = 0;
function po(e) {
  if (!co) return e.detail;
  let t = lo,
    n = fo;
  return lo = e, fo = Date.now(), uo = !t || n > Date.now() - 400 && Math.abs(t.clientX - e.clientX) < 2 && Math.abs(t.clientY - e.clientY) < 2 ? (uo + 1) % 3 : 1;
}
function mo(e, t) {
  let n = e.posAndSideAtCoords({
      x: t.clientX,
      y: t.clientY
    }, !1),
    r = po(t),
    i = e.state.selection;
  return {
    update(e) {
      e.docChanged && (n.pos = e.changes.mapPos(n.pos), i = i.map(e.changes));
    },
    get(t, a, o) {
      let s = e.posAndSideAtCoords({
          x: t.clientX,
          y: t.clientY
        }, !1),
        c,
        l = so(e, s.pos, s.assoc, r);
      if (n.pos != s.pos && !a) {
        let t = so(e, n.pos, n.assoc, r),
          i = Math.min(t.from, l.from),
          a = Math.max(t.to, l.to);
        l = i < l.from ? D.range(i, a, l.assoc) : D.range(a, i, l.assoc);
      }
      return a ? i.replaceRange(i.main.extend(l.from, l.to, l.assoc)) : o && r == 1 && i.ranges.length > 1 && (c = ho(i, s.pos)) ? c : o ? i.addRange(l) : D.create([l]);
    }
  };
}
function ho(e, t) {
  for (let n = 0; n < e.ranges.length; n++) {
    let {
      from: r,
      to: i
    } = e.ranges[n];
    if (r <= t && i >= t) return D.create(e.ranges.slice(0, n).concat(e.ranges.slice(n + 1)), e.mainIndex == n ? 0 : e.mainIndex - +(e.mainIndex > n));
  }
  return null;
}
no.dragstart = (e, t) => {
  let {
    selection: {
      main: n
    }
  } = e.state;
  if (t.target.draggable) {
    let r = e.docView.tile.nearest(t.target);
    if (r && r.isWidget()) {
      let e = r.posAtStart,
        t = e + r.length;
      (e >= n.to || t <= n.from) && (n = D.undirectionalRange(e, t));
    }
  }
  let {
    inputState: r
  } = e;
  return r.mouseSelection && (r.mouseSelection.dragging = !0), r.draggedContent = n, t.dataTransfer && (t.dataTransfer.setData(`Text`, ao(e.state, ai, e.state.sliceDoc(n.from, n.to))), t.dataTransfer.effectAllowed = `copyMove`), !1;
}, no.dragend = e => (e.inputState.draggedContent = null, !1);
function go(e, t, n, r) {
  if (n = ao(e.state, ii, n), !n) return;
  let i = e.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, !1),
    {
      draggedContent: a
    } = e.inputState,
    o = r && a && $a(e, t) ? {
      from: a.from,
      to: a.to
    } : null,
    s = {
      from: i,
      insert: n
    },
    c = e.state.changes(o ? [o, s] : s);
  e.focus(), e.dispatch({
    changes: c,
    selection: {
      anchor: c.mapPos(i, -1),
      head: c.mapPos(i, 1)
    },
    userEvent: o ? `move.drop` : `input.drop`
  }), e.inputState.draggedContent = null;
}
no.drop = (e, t) => {
  if (!t.dataTransfer) return !1;
  if (e.state.readOnly) return !0;
  let n = t.dataTransfer.files;
  if (n && n.length) {
    let r = Array(n.length),
      i = 0,
      a = () => {
        ++i == n.length && go(e, t, r.filter(e => e != null).join(e.state.lineBreak), !1);
      };
    for (let e = 0; e < n.length; e++) {
      let t = new FileReader();
      t.onerror = a, t.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(t.result) || (r[e] = t.result), a();
      }, t.readAsText(n[e]);
    }
    return !0;
  }
  {
    let n = t.dataTransfer.getData(`Text`);
    if (n) return go(e, t, n, !0), !0;
  }
  return !1;
}, no.paste = (e, t) => {
  if (e.state.readOnly) return !0;
  e.observer.flush();
  let n = ro ? null : t.clipboardData;
  return n ? (oo(e, n.getData(`text/plain`) || n.getData(`text/uri-list`)), !0) : (io(e), !1);
};
function _o(e, t) {
  let n = e.dom.parentNode;
  if (!n) return;
  let r = n.appendChild(document.createElement(`textarea`));
  r.style.cssText = `position: fixed; left: -10000px; top: 10px`, r.value = t, r.focus(), r.selectionEnd = t.length, r.selectionStart = 0, setTimeout(() => {
    r.remove(), e.focus();
  }, 50);
}
function vo(e) {
  let t = [],
    n = [],
    r = !1;
  for (let r of e.selection.ranges) r.empty || (t.push(e.sliceDoc(r.from, r.to)), n.push(r));
  if (!t.length) {
    let i = -1;
    for (let {
      from: r
    } of e.selection.ranges) {
      let a = e.doc.lineAt(r);
      a.number > i && (t.push(a.text), n.push({
        from: a.from,
        to: Math.min(e.doc.length, a.to + 1)
      })), i = a.number;
    }
    r = !0;
  }
  return {
    text: ao(e, ai, t.join(e.lineBreak)),
    ranges: n,
    linewise: r
  };
}
var yo = null;
no.copy = no.cut = (e, t) => {
  if (!ir(e.contentDOM, e.observer.selectionRange)) return !1;
  let {
    text: n,
    ranges: r,
    linewise: i
  } = vo(e.state);
  if (!n && !i) return !1;
  yo = i ? n : null, t.type == `cut` && !e.state.readOnly && e.dispatch({
    changes: r,
    scrollIntoView: !0,
    userEvent: `delete.cut`
  });
  let a = ro ? null : t.clipboardData;
  return a ? (a.clearData(), a.setData(`text/plain`, n), !0) : (_o(e, n), !1);
};
var bo = Ft.define();
function xo(e, t) {
  let n = [];
  for (let r of e.facet(ri)) {
    let i = r(e, t);
    i && n.push(i);
  }
  return n.length ? e.update({
    effects: n,
    annotations: bo.of(!0)
  }) : null;
}
function So(e) {
  setTimeout(() => {
    let t = e.hasFocus;
    if (t != e.inputState.notifiedFocused) {
      let n = xo(e.state, t);
      n ? e.dispatch(n) : e.update([]);
    }
  }, 10);
}
K.focus = e => {
  e.inputState.lastFocusTime = Date.now(), !e.scrollDOM.scrollTop && (e.inputState.lastScrollTop || e.inputState.lastScrollLeft) && (e.scrollDOM.scrollTop = e.inputState.lastScrollTop, e.scrollDOM.scrollLeft = e.inputState.lastScrollLeft), So(e);
}, K.blur = e => {
  e.observer.clearSelectionRange(), So(e);
}, K.compositionstart = K.compositionupdate = e => {
  e.observer.editContext || (e.inputState.compositionFirstChange ?? (e.inputState.compositionFirstChange = !0), e.inputState.composing < 0 && (e.inputState.composing = 0));
}, K.compositionend = e => {
  e.observer.editContext || (e.inputState.composing = -1, e.inputState.compositionEndedAt = Date.now(), e.inputState.compositionPendingKey = !0, e.inputState.compositionPendingChange = e.observer.pendingRecords().length > 0, e.inputState.compositionFirstChange = null, L.chrome && L.android ? e.observer.flushSoon() : e.inputState.compositionPendingChange ? Promise.resolve().then(() => e.observer.flush()) : setTimeout(() => {
    e.inputState.composing < 0 && e.docView.hasComposition && e.update([]);
  }, 50));
}, K.contextmenu = e => {
  e.inputState.lastContextMenu = Date.now();
}, no.beforeinput = (e, t) => {
  if ((t.inputType == `insertText` || t.inputType == `insertCompositionText`) && (e.inputState.insertingText = t.data, e.inputState.insertingTextAt = Date.now()), t.inputType == `insertReplacementText` && e.observer.editContext) {
    let n = t.dataTransfer?.getData(`text/plain`),
      r = t.getTargetRanges();
    if (n && r.length) {
      let t = r[0];
      return Fa(e, {
        from: e.posAtDOM(t.startContainer, t.startOffset),
        to: e.posAtDOM(t.endContainer, t.endOffset),
        insert: e.state.toText(n)
      }, null), !0;
    }
  }
  let n;
  if (L.chrome && L.android && (n = Ga.find(e => e.inputType == t.inputType)) && (e.observer.delayAndroidKey(n.key, n.keyCode), n.key == `Backspace` || n.key == `Delete`)) {
    let t = window.visualViewport?.height || 0;
    setTimeout(() => {
      (window.visualViewport?.height || 0) > t + 10 && e.hasFocus && (e.contentDOM.blur(), e.focus());
    }, 100);
  }
  return L.ios && t.inputType == `deleteContentForward` && e.observer.flushSoon(), L.safari && t.inputType == `insertText` && e.inputState.composing >= 0 && setTimeout(() => K.compositionend(e, t), 20), !1;
};
var Co = new Set();
function wo(e) {
  Co.has(e) || (Co.add(e), e.addEventListener(`copy`, () => {}), e.addEventListener(`cut`, () => {}));
}
var To = [`pre-wrap`, `normal`, `pre-line`, `break-spaces`],
  Eo = !1;
function Do() {
  Eo = !1;
}
var Oo = class {
    constructor(e) {
      this.lineWrapping = e, this.doc = b.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
    }
    heightForGap(e, t) {
      let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
      return this.lineWrapping && (n += Math.max(0, Math.ceil((t - e - n * this.lineLength * .5) / this.lineLength))), this.lineHeight * n;
    }
    heightForLine(e) {
      return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
    }
    setDoc(e) {
      return this.doc = e, this;
    }
    mustRefreshForWrapping(e) {
      return To.indexOf(e) > -1 != this.lineWrapping;
    }
    mustRefreshForHeights(e) {
      let t = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
      }
      return t;
    }
    refresh(e, t, n, r, i, a) {
      let o = To.indexOf(e) > -1,
        s = Math.abs(t - this.lineHeight) > .3 || this.lineWrapping != o;
      if (this.lineWrapping = o, this.lineHeight = t, this.charWidth = n, this.textHeight = r, this.lineLength = i, s) {
        this.heightSamples = {};
        for (let e = 0; e < a.length; e++) {
          let t = a[e];
          t < 0 ? e++ : this.heightSamples[Math.floor(t * 10)] = !0;
        }
      }
      return s;
    }
  },
  ko = class {
    constructor(e, t) {
      this.from = e, this.heights = t, this.index = 0;
    }
    get more() {
      return this.index < this.heights.length;
    }
  },
  Ao = class e {
    constructor(e, t, n, r, i) {
      this.from = e, this.length = t, this.top = n, this.height = r, this._content = i;
    }
    get type() {
      return typeof this._content == `number` ? R.Text : Array.isArray(this._content) ? this._content : this._content.type;
    }
    get to() {
      return this.from + this.length;
    }
    get bottom() {
      return this.top + this.height;
    }
    get widget() {
      return this._content instanceof Zn ? this._content.widget : null;
    }
    get widgetLineBreaks() {
      return typeof this._content == `number` ? this._content : 0;
    }
    join(t) {
      let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
      return new e(this.from, this.length + t.length, this.top, this.height + t.height, n);
    }
  },
  q = function (e) {
    return e[e.ByPos = 0] = `ByPos`, e[e.ByHeight = 1] = `ByHeight`, e[e.ByPosNoHeight = 2] = `ByPosNoHeight`, e;
  }(q ||= {}),
  jo = .001,
  Mo = class e {
    constructor(e, t, n = 2) {
      this.length = e, this.height = t, this.flags = n;
    }
    get outdated() {
      return (this.flags & 2) > 0;
    }
    set outdated(e) {
      this.flags = (e ? 2 : 0) | this.flags & -3;
    }
    setHeight(e) {
      this.height != e && (Math.abs(this.height - e) > jo && (Eo = !0), this.height = e);
    }
    replace(t, n, r) {
      return e.of(r);
    }
    decomposeLeft(e, t) {
      t.push(this);
    }
    decomposeRight(e, t) {
      t.push(this);
    }
    applyChanges(e, t, n, r) {
      let i = this,
        a = n.doc;
      for (let o = r.length - 1; o >= 0; o--) {
        let {
            fromA: s,
            toA: c,
            fromB: l,
            toB: u
          } = r[o],
          d = i.lineAt(s, q.ByPosNoHeight, n.setDoc(t), 0, 0),
          f = d.to >= c ? d : i.lineAt(c, q.ByPosNoHeight, n, 0, 0);
        for (u += f.to - c, c = f.to; o > 0 && d.from <= r[o - 1].toA;) s = r[o - 1].fromA, l = r[o - 1].fromB, o--, s < d.from && (d = i.lineAt(s, q.ByPosNoHeight, n, 0, 0));
        l += d.from - s, s = d.from;
        let p = Vo.build(n.setDoc(a), e, l, u);
        i = No(i, i.replace(s, c, p));
      }
      return i.updateHeight(n, 0);
    }
    static empty() {
      return new Io(0, 0, 0);
    }
    static of(t) {
      if (t.length == 1) return t[0];
      let n = 0,
        r = t.length,
        i = 0,
        a = 0;
      for (;;) if (n == r) {
        if (i > a * 2) {
          let e = t[n - 1];
          e.break ? t.splice(--n, 1, e.left, null, e.right) : t.splice(--n, 1, e.left, e.right), r += 1 + e.break, i -= e.size;
        } else if (a > i * 2) {
          let e = t[r];
          e.break ? t.splice(r, 1, e.left, null, e.right) : t.splice(r, 1, e.left, e.right), r += 2 + e.break, a -= e.size;
        } else break;
      } else if (i < a) {
        let e = t[n++];
        e && (i += e.size);
      } else {
        let e = t[--r];
        e && (a += e.size);
      }
      let o = 0;
      return t[n - 1] == null ? (o = 1, n--) : t[n] ?? (o = 1, r++), new Ro(e.of(t.slice(0, n)), o, e.of(t.slice(r)));
    }
  };
function No(e, t) {
  return e == t ? e : (e.constructor != t.constructor && (Eo = !0), t);
}
Mo.prototype.size = 1;
var Po = z.replace({}),
  Fo = class extends Mo {
    constructor(e, t, n) {
      super(e, t), this.deco = n, this.spaceAbove = 0;
    }
    mainBlock(e, t) {
      return new Ao(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
    }
    blockAt(e, t, n, r) {
      return this.spaceAbove && e < n + this.spaceAbove ? new Ao(r, 0, n, this.spaceAbove, Po) : this.mainBlock(n, r);
    }
    lineAt(e, t, n, r, i) {
      let a = this.mainBlock(r, i);
      return this.spaceAbove ? this.blockAt(0, n, r, i).join(a) : a;
    }
    forEachLine(e, t, n, r, i, a) {
      e <= i + this.length && t >= i && a(this.lineAt(0, q.ByPos, n, r, i));
    }
    setMeasuredHeight(e) {
      let t = e.heights[e.index++];
      t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
    }
    updateHeight(e, t = 0, n = !1, r) {
      return r && r.from <= t && r.more && this.setMeasuredHeight(r), this.outdated = !1, this;
    }
    toString() {
      return `block(${this.length})`;
    }
  },
  Io = class e extends Fo {
    constructor(e, t, n) {
      super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = n;
    }
    mainBlock(e, t) {
      return new Ao(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
    }
    replace(t, n, r) {
      let i = r[0];
      return r.length == 1 && (i instanceof e || i instanceof Lo && i.flags & 4) && Math.abs(this.length - i.length) < 10 ? (i instanceof Lo ? i = new e(i.length, this.height, this.spaceAbove) : i.height = this.height, this.outdated || (i.outdated = !1), i) : Mo.of(r);
    }
    updateHeight(e, t = 0, n = !1, r) {
      return r && r.from <= t && r.more ? this.setMeasuredHeight(r) : (n || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
    }
    toString() {
      return `line(${this.length}${this.collapsed ? -this.collapsed : ``}${this.widgetHeight ? `:` + this.widgetHeight : ``})`;
    }
  },
  Lo = class e extends Mo {
    constructor(e) {
      super(e, 0);
    }
    heightMetrics(e, t) {
      let n = e.doc.lineAt(t).number,
        r = e.doc.lineAt(t + this.length).number,
        i = r - n + 1,
        a,
        o = 0;
      if (e.lineWrapping) {
        let t = Math.min(this.height, e.lineHeight * i);
        a = t / i, this.length > i + 1 && (o = (this.height - t) / (this.length - i - 1));
      } else a = this.height / i;
      return {
        firstLine: n,
        lastLine: r,
        perLine: a,
        perChar: o
      };
    }
    blockAt(e, t, n, r) {
      let {
        firstLine: i,
        lastLine: a,
        perLine: o,
        perChar: s
      } = this.heightMetrics(t, r);
      if (t.lineWrapping) {
        let i = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length)),
          a = t.doc.lineAt(i),
          c = o + a.length * s,
          l = Math.max(n, e - c / 2);
        return new Ao(a.from, a.length, l, c, 0);
      }
      {
        let r = Math.max(0, Math.min(a - i, Math.floor((e - n) / o))),
          {
            from: s,
            length: c
          } = t.doc.line(i + r);
        return new Ao(s, c, n + o * r, o, 0);
      }
    }
    lineAt(e, t, n, r, i) {
      if (t == q.ByHeight) return this.blockAt(e, n, r, i);
      if (t == q.ByPosNoHeight) {
        let {
          from: t,
          to: r
        } = n.doc.lineAt(e);
        return new Ao(t, r - t, 0, 0, 0);
      }
      let {
          firstLine: a,
          perLine: o,
          perChar: s
        } = this.heightMetrics(n, i),
        c = n.doc.lineAt(e),
        l = o + c.length * s,
        u = c.number - a,
        d = r + o * u + s * (c.from - i - u);
      return new Ao(c.from, c.length, Math.max(r, Math.min(d, r + this.height - l)), l, 0);
    }
    forEachLine(e, t, n, r, i, a) {
      e = Math.max(e, i), t = Math.min(t, i + this.length);
      let {
        firstLine: o,
        perLine: s,
        perChar: c
      } = this.heightMetrics(n, i);
      for (let l = e, u = r; l <= t;) {
        let t = n.doc.lineAt(l);
        if (l == e) {
          let n = t.number - o;
          u += s * n + c * (e - i - n);
        }
        let r = s + c * t.length;
        a(new Ao(t.from, t.length, u, r, 0)), u += r, l = t.to + 1;
      }
    }
    replace(t, n, r) {
      let i = this.length - n;
      if (i > 0) {
        let t = r[r.length - 1];
        t instanceof e ? r[r.length - 1] = new e(t.length + i) : r.push(null, new e(i - 1));
      }
      if (t > 0) {
        let n = r[0];
        n instanceof e ? r[0] = new e(t + n.length) : r.unshift(new e(t - 1), null);
      }
      return Mo.of(r);
    }
    decomposeLeft(t, n) {
      n.push(new e(t - 1), null);
    }
    decomposeRight(t, n) {
      n.push(null, new e(this.length - t - 1));
    }
    updateHeight(t, n = 0, r = !1, i) {
      let a = n + this.length;
      if (i && i.from <= n + this.length && i.more) {
        let r = [],
          o = Math.max(n, i.from),
          s = -1;
        for (i.from > n && r.push(new e(i.from - n - 1).updateHeight(t, n)); o <= a && i.more;) {
          let e = t.doc.lineAt(o).length;
          r.length && r.push(null);
          let n = i.heights[i.index++],
            a = 0;
          n < 0 && (a = -n, n = i.heights[i.index++]), s == -1 ? s = n : Math.abs(n - s) >= jo && (s = -2);
          let c = new Io(e, n, a);
          c.outdated = !1, r.push(c), o += e + 1;
        }
        o <= a && r.push(null, new e(a - o).updateHeight(t, o));
        let c = Mo.of(r);
        return (s < 0 || Math.abs(c.height - this.height) >= jo || Math.abs(s - this.heightMetrics(t, n).perLine) >= jo) && (Eo = !0), No(this, c);
      }
      return (r || this.outdated) && (this.setHeight(t.heightForGap(n, n + this.length)), this.outdated = !1), this;
    }
    toString() {
      return `gap(${this.length})`;
    }
  },
  Ro = class extends Mo {
    constructor(e, t, n) {
      super(e.length + t + n.length, e.height + n.height, t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
    }
    get break() {
      return this.flags & 1;
    }
    blockAt(e, t, n, r) {
      let i = n + this.left.height;
      return e < i ? this.left.blockAt(e, t, n, r) : this.right.blockAt(e, t, i, r + this.left.length + this.break);
    }
    lineAt(e, t, n, r, i) {
      let a = r + this.left.height,
        o = i + this.left.length + this.break,
        s = t == q.ByHeight ? e < a : e < o,
        c = s ? this.left.lineAt(e, t, n, r, i) : this.right.lineAt(e, t, n, a, o);
      if (this.break || (s ? c.to < o : c.from > o)) return c;
      let l = t == q.ByPosNoHeight ? q.ByPosNoHeight : q.ByPos;
      return s ? c.join(this.right.lineAt(o, l, n, a, o)) : this.left.lineAt(o, l, n, r, i).join(c);
    }
    forEachLine(e, t, n, r, i, a) {
      let o = r + this.left.height,
        s = i + this.left.length + this.break;
      if (this.break) e < s && this.left.forEachLine(e, t, n, r, i, a), t >= s && this.right.forEachLine(e, t, n, o, s, a);else {
        let c = this.lineAt(s, q.ByPos, n, r, i);
        e < c.from && this.left.forEachLine(e, c.from - 1, n, r, i, a), c.to >= e && c.from <= t && a(c), t > c.to && this.right.forEachLine(c.to + 1, t, n, o, s, a);
      }
    }
    replace(e, t, n) {
      let r = this.left.length + this.break;
      if (t < r) return this.balanced(this.left.replace(e, t, n), this.right);
      if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - r, t - r, n));
      let i = [];
      e > 0 && this.decomposeLeft(e, i);
      let a = i.length;
      for (let e of n) i.push(e);
      if (e > 0 && zo(i, a - 1), t < this.length) {
        let e = i.length;
        this.decomposeRight(t, i), zo(i, e);
      }
      return Mo.of(i);
    }
    decomposeLeft(e, t) {
      let n = this.left.length;
      if (e <= n) return this.left.decomposeLeft(e, t);
      t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
    }
    decomposeRight(e, t) {
      let n = this.left.length,
        r = n + this.break;
      if (e >= r) return this.right.decomposeRight(e - r, t);
      e < n && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
    }
    balanced(e, t) {
      return e.size > 2 * t.size || t.size > 2 * e.size ? Mo.of(this.break ? [e, null, t] : [e, t]) : (this.left = No(this.left, e), this.right = No(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
    }
    updateHeight(e, t = 0, n = !1, r) {
      let {
          left: i,
          right: a
        } = this,
        o = t + i.length + this.break,
        s = null;
      return r && r.from <= t + i.length && r.more ? s = i = i.updateHeight(e, t, n, r) : i.updateHeight(e, t, n), r && r.from <= o + a.length && r.more ? s = a = a.updateHeight(e, o, n, r) : a.updateHeight(e, o, n), s ? this.balanced(i, a) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
    }
    toString() {
      return this.left + (this.break ? ` ` : `-`) + this.right;
    }
  };
function zo(e, t) {
  let n, r;
  e[t] == null && (n = e[t - 1]) instanceof Lo && (r = e[t + 1]) instanceof Lo && e.splice(t - 1, 3, new Lo(n.length + 1 + r.length));
}
var Bo = 5,
  Vo = class e {
    constructor(e, t) {
      this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
    }
    get isCovered() {
      return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(e, t) {
      if (this.lineStart > -1) {
        let e = Math.min(t, this.lineEnd),
          n = this.nodes[this.nodes.length - 1];
        n instanceof Io ? n.length += e - this.pos : (e > this.pos || !this.isCovered) && this.nodes.push(new Io(e - this.pos, -1, 0)), this.writtenTo = e, t > e && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
      }
      this.pos = t;
    }
    point(e, t, n) {
      if (e < t || n.heightRelevant) {
        let r = n.widget ? n.widget.estimatedHeight : 0,
          i = n.widget ? n.widget.lineBreaks : 0;
        r < 0 && (r = this.oracle.lineHeight);
        let a = t - e;
        n.block ? this.addBlock(new Fo(a, r, n)) : (a || i || r >= Bo) && this.addLineDeco(r, i, a);
      } else t > e && this.span(e, t);
      this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
    }
    enterLine() {
      if (this.lineStart > -1) return;
      let {
        from: e,
        to: t
      } = this.oracle.doc.lineAt(this.pos);
      this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Io(this.pos - e, -1, 0)), this.writtenTo = this.pos;
    }
    blankContent(e, t) {
      let n = new Lo(t - e);
      return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
    }
    ensureLine() {
      this.enterLine();
      let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
      if (e instanceof Io) return e;
      let t = new Io(0, -1, 0);
      return this.nodes.push(t), t;
    }
    addBlock(e) {
      this.enterLine();
      let t = e.deco;
      t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos += e.length, t && t.endSide > 0 && (this.covering = e);
    }
    addLineDeco(e, t, n) {
      let r = this.ensureLine();
      r.length += n, r.collapsed += n, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos += n;
    }
    finish(e) {
      let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
      this.lineStart > -1 && !(t instanceof Io) && !this.isCovered ? this.nodes.push(new Io(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
      let n = e;
      for (let e of this.nodes) e instanceof Io && e.updateHeight(this.oracle, n), n += e ? e.length : 1;
      return this.nodes;
    }
    static build(t, n, r, i) {
      let a = new e(r, t);
      return P.spans(n, r, i, a, 0), a.finish(r);
    }
  };
function Ho(e, t, n) {
  let r = new Uo();
  return P.compare(e, t, n, r, 0), r.changes;
}
var Uo = class {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, t, n, r) {
    (e < t || n && n.heightRelevant || r && r.heightRelevant) && er(e, t, this.changes, 5);
  }
};
function Wo(e, t) {
  let n = e.getBoundingClientRect(),
    r = e.ownerDocument,
    i = r.defaultView || window,
    a = Math.max(0, n.left),
    o = Math.min(i.innerWidth, n.right),
    s = Math.max(0, n.top),
    c = Math.min(i.innerHeight, n.bottom);
  for (let t = e.parentNode; t && t != r.body;) if (t.nodeType == 1) {
    let n = t,
      r = window.getComputedStyle(n);
    if ((n.scrollHeight > n.clientHeight || n.scrollWidth > n.clientWidth) && r.overflow != `visible`) {
      let r = n.getBoundingClientRect();
      a = Math.max(a, r.left), o = Math.min(o, r.right), s = Math.max(s, r.top), c = Math.min(t == e.parentNode ? i.innerHeight : c, r.bottom);
    }
    t = r.position == `absolute` || r.position == `fixed` ? n.offsetParent : n.parentNode;
  } else if (t.nodeType == 11) t = t.host;else break;
  return {
    left: a - n.left,
    right: Math.max(a, o) - n.left,
    top: s - (n.top + t),
    bottom: Math.max(s, c) - (n.top + t)
  };
}
function Go(e) {
  let t = e.getBoundingClientRect(),
    n = e.ownerDocument.defaultView || window;
  return t.left < n.innerWidth && t.right > 0 && t.top < n.innerHeight && t.bottom > 0;
}
function Ko(e, t) {
  let n = e.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: t,
    bottom: n.bottom - (n.top + t)
  };
}
var qo = class {
    constructor(e, t, n, r) {
      this.from = e, this.to = t, this.size = n, this.displaySize = r;
    }
    static same(e, t) {
      if (e.length != t.length) return !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n],
          i = t[n];
        if (r.from != i.from || r.to != i.to || r.size != i.size) return !1;
      }
      return !0;
    }
    draw(e, t) {
      return z.replace({
        widget: new Jo(this.displaySize * (t ? e.scaleY : e.scaleX), t)
      }).range(this.from, this.to);
    }
  },
  Jo = class extends Jn {
    constructor(e, t) {
      super(), this.size = e, this.vertical = t;
    }
    eq(e) {
      return e.size == this.size && e.vertical == this.vertical;
    }
    toDOM() {
      let e = document.createElement(`div`);
      return this.vertical ? e.style.height = this.size + `px` : (e.style.width = this.size + `px`, e.style.height = `2px`, e.style.display = `inline-block`), e;
    }
    get estimatedHeight() {
      return this.vertical ? this.size : -1;
    }
  },
  Yo = class {
    constructor(e, t) {
      this.view = e, this.state = t, this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0
      }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = ts, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = B.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
      let n = t.facet(_i).some(e => typeof e != `function` && e.class == `cm-lineWrapping`);
      this.heightOracle = new Oo(n), this.stateDeco = ns(t), this.heightMap = Mo.empty().applyChanges(this.stateDeco, b.empty, this.heightOracle.setDoc(t.doc), [new Di(0, 0, 0, t.doc.length)]);
      for (let e = 0; e < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); e++);
      this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = z.set(this.lineGaps.map(e => e.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
    }
    updateForViewport() {
      let e = [this.viewport],
        {
          main: t
        } = this.state.selection;
      for (let n = 0; n <= 1; n++) {
        let r = n ? t.head : t.anchor;
        if (!e.some(({
          from: e,
          to: t
        }) => r >= e && r <= t)) {
          let {
            from: t,
            to: n
          } = this.lineBlockAt(r);
          e.push(new Xo(t, n));
        }
      }
      return this.viewports = e.sort((e, t) => e.from - t.from), this.updateScaler();
    }
    updateScaler() {
      let e = this.scaler;
      return this.scaler = this.heightMap.height <= 7e6 ? ts : new rs(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
    }
    updateViewportLines() {
      this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, e => {
        this.viewportLines.push(is(e, this.scaler));
      });
    }
    update(e, t = null) {
      this.state = e.state;
      let n = this.stateDeco;
      this.stateDeco = ns(this.state);
      let r = e.changedRanges,
        i = Di.extendWithRanges(r, Ho(n, this.stateDeco, e ? e.changes : T.empty(this.state.doc.length))),
        a = this.heightMap.height,
        o = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
      Do(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), i), (this.heightMap.height != a || Eo) && (e.flags |= 2), o ? (this.scrollAnchorPos = e.changes.mapPos(o.from, -1), this.scrollAnchorHeight = o.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = a);
      let s = i.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
      (t && (t.range.head < s.from || t.range.head > s.to) || !this.viewportIsAppropriate(s)) && (s = this.getViewport(0, t));
      let c = s.from != this.viewport.from || s.to != this.viewport.to;
      this.viewport = s, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(si) && (this.mustEnforceCursorAssoc = !0);
    }
    measure() {
      let {
          view: e
        } = this,
        t = e.contentDOM,
        n = window.getComputedStyle(t),
        r = this.heightOracle,
        i = n.whiteSpace;
      this.defaultTextDirection = n.direction == `rtl` ? B.RTL : B.LTR;
      let a = this.heightOracle.mustRefreshForWrapping(i) || this.mustMeasureContent === `refresh`,
        o = t.getBoundingClientRect(),
        s = a || this.mustMeasureContent || this.contentDOMHeight != o.height;
      this.contentDOMHeight = o.height, this.mustMeasureContent = !1;
      let c = 0,
        l = 0;
      if (o.width && o.height) {
        let {
          scaleX: e,
          scaleY: n
        } = pr(t, o);
        (e > .005 && Math.abs(this.scaleX - e) > .005 || n > .005 && Math.abs(this.scaleY - n) > .005) && (this.scaleX = e, this.scaleY = n, c |= 16, a = s = !0);
      }
      let u = (parseInt(n.paddingTop) || 0) * this.scaleY,
        d = (parseInt(n.paddingBottom) || 0) * this.scaleY;
      (this.paddingTop != u || this.paddingBottom != d) && (this.paddingTop = u, this.paddingBottom = d, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (s = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
      let f = hr(this.view.contentDOM, !1).y;
      f != this.scrollParent && (this.scrollParent = f, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
      let p = this.getScrollOffset();
      this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = Er(this.scrollParent || e.win);
      let m = (this.printing ? Ko : Wo)(t, this.paddingTop),
        h = m.top - this.pixelViewport.top,
        g = m.bottom - this.pixelViewport.bottom;
      this.pixelViewport = m;
      let _ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
      if (_ != this.inView && (this.inView = _, _ && (s = !0)), !this.inView && !this.scrollTarget && !Go(e.dom)) return 0;
      let v = o.width;
      if ((this.contentDOMWidth != v || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = o.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), s) {
        let t = e.docView.measureVisibleLineHeights(this.viewport);
        if (r.mustRefreshForHeights(t) && (a = !0), a || r.lineWrapping && Math.abs(v - this.contentDOMWidth) > r.charWidth) {
          let {
            lineHeight: n,
            charWidth: o,
            textHeight: s
          } = e.docView.measureTextSize();
          a = n > 0 && r.refresh(i, n, o, s, Math.max(5, v / o), t), a && (e.docView.minWidth = 0, c |= 16);
        }
        h > 0 && g > 0 ? l = Math.max(h, g) : h < 0 && g < 0 && (l = Math.min(h, g)), Do();
        for (let n of this.viewports) {
          let i = n.from == this.viewport.from ? t : e.docView.measureVisibleLineHeights(n);
          this.heightMap = (a ? Mo.empty().applyChanges(this.stateDeco, b.empty, this.heightOracle, [new Di(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, a, new ko(n.from, i));
        }
        Eo && (c |= 2);
      }
      let y = !this.viewportIsAppropriate(this.viewport, l) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
      return y && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(l, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(a ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
    }
    get visibleTop() {
      return this.scaler.fromDOM(this.pixelViewport.top);
    }
    get visibleBottom() {
      return this.scaler.fromDOM(this.pixelViewport.bottom);
    }
    getViewport(e, t) {
      let n = .5 - Math.max(-.5, Math.min(.5, e / 1e3 / 2)),
        r = this.heightMap,
        i = this.heightOracle,
        {
          visibleTop: a,
          visibleBottom: o
        } = this,
        s = new Xo(r.lineAt(a - n * 1e3, q.ByHeight, i, 0, 0).from, r.lineAt(o + (1 - n) * 1e3, q.ByHeight, i, 0, 0).to);
      if (t) {
        let {
          head: e
        } = t.range;
        if (e < s.from || e > s.to) {
          let n = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
            a = r.lineAt(e, q.ByPos, i, 0, 0),
            o;
          o = t.y == `center` ? (a.top + a.bottom) / 2 - n / 2 : t.y == `start` || t.y == `nearest` && e < s.from ? a.top : a.bottom - n, s = new Xo(r.lineAt(o - 500, q.ByHeight, i, 0, 0).from, r.lineAt(o + n + 500, q.ByHeight, i, 0, 0).to);
        }
      }
      return s;
    }
    mapViewport(e, t) {
      let n = t.mapPos(e.from, -1),
        r = t.mapPos(e.to, 1);
      return new Xo(this.heightMap.lineAt(n, q.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, q.ByPos, this.heightOracle, 0, 0).to);
    }
    viewportIsAppropriate({
      from: e,
      to: t
    }, n = 0) {
      if (!this.inView) return !0;
      let {
          top: r
        } = this.heightMap.lineAt(e, q.ByPos, this.heightOracle, 0, 0),
        {
          bottom: i
        } = this.heightMap.lineAt(t, q.ByPos, this.heightOracle, 0, 0),
        {
          visibleTop: a,
          visibleBottom: o
        } = this;
      return (e == 0 || r <= a - Math.max(10, Math.min(-n, 250))) && (t == this.state.doc.length || i >= o + Math.max(10, Math.min(n, 250))) && r > a - 2e3 && i < o + 2e3;
    }
    mapLineGaps(e, t) {
      if (!e.length || t.empty) return e;
      let n = [];
      for (let r of e) t.touchesRange(r.from, r.to) || n.push(new qo(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
      return n;
    }
    ensureLineGaps(e, t) {
      let n = this.heightOracle.lineWrapping,
        r = n ? 1e4 : 2e3,
        i = r >> 1,
        a = r << 1;
      if (this.defaultTextDirection != B.LTR && !n) return [];
      let o = [],
        s = (r, a, c, l) => {
          if (a - r < i) return;
          let u = this.state.selection.main,
            d = [u.from];
          u.empty || d.push(u.to);
          for (let e of d) if (e > r && e < a) {
            s(r, e - 10, c, l), s(e + 10, a, c, l);
            return;
          }
          let f = es(e, e => e.from >= c.from && e.to <= c.to && Math.abs(e.from - r) < i && Math.abs(e.to - a) < i && !d.some(t => e.from < t && e.to > t));
          if (!f) {
            if (a < c.to && t && n && t.visibleRanges.some(e => e.from <= a && e.to >= a)) {
              let e = t.moveToLineBoundary(D.cursor(a), !1, !0).head;
              e > r && (a = e);
            }
            let e = this.gapSize(c, r, a, l);
            f = new qo(r, a, e, n || e < 2e6 ? e : 2e6);
          }
          o.push(f);
        },
        c = t => {
          if (t.length < a || t.type != R.Text) return;
          let i = Zo(t.from, t.to, this.stateDeco);
          if (i.total < a) return;
          let o = this.scrollTarget ? this.scrollTarget.range.head : null,
            c,
            l;
          if (n) {
            let e = r / this.heightOracle.lineLength * this.heightOracle.lineHeight,
              n,
              a;
            if (o != null) {
              let r = $o(i, o),
                s = ((this.visibleBottom - this.visibleTop) / 2 + e) / t.height;
              n = r - s, a = r + s;
            } else n = (this.visibleTop - t.top - e) / t.height, a = (this.visibleBottom - t.top + e) / t.height;
            c = Qo(i, n), l = Qo(i, a);
          } else {
            let n = i.total * this.heightOracle.charWidth,
              a = r * this.heightOracle.charWidth,
              s = 0;
            if (n > 2e6) for (let n of e) n.from >= t.from && n.from < t.to && n.size != n.displaySize && n.from * this.heightOracle.charWidth + s < this.pixelViewport.left && (s = n.size - n.displaySize);
            let u = this.pixelViewport.left + s,
              d = this.pixelViewport.right + s,
              f,
              p;
            if (o != null) {
              let e = $o(i, o),
                t = ((d - u) / 2 + a) / n;
              f = e - t, p = e + t;
            } else f = (u - a) / n, p = (d + a) / n;
            c = Qo(i, f), l = Qo(i, p);
          }
          c > t.from && s(t.from, c, t, i), l < t.to && s(l, t.to, t, i);
        };
      for (let e of this.viewportLines) Array.isArray(e.type) ? e.type.forEach(c) : c(e);
      return o;
    }
    gapSize(e, t, n, r) {
      let i = $o(r, n) - $o(r, t);
      return this.heightOracle.lineWrapping ? e.height * i : r.total * this.heightOracle.charWidth * i;
    }
    updateLineGaps(e) {
      qo.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = z.set(e.map(e => e.draw(this, this.heightOracle.lineWrapping))));
    }
    computeVisibleRanges(e) {
      let t = this.stateDeco;
      this.lineGaps.length && (t = t.concat(this.lineGapDeco));
      let n = [];
      P.spans(t, this.viewport.from, this.viewport.to, {
        span(e, t) {
          n.push({
            from: e,
            to: t
          });
        },
        point() {}
      }, 20);
      let r = 0;
      if (n.length != this.visibleRanges.length) r = 12;else for (let t = 0; t < n.length && !(r & 8); t++) {
        let i = this.visibleRanges[t],
          a = n[t];
        (i.from != a.from || i.to != a.to) && (r |= 4, e && e.mapPos(i.from, -1) == a.from && e.mapPos(i.to, 1) == a.to || (r |= 8));
      }
      return this.visibleRanges = n, r;
    }
    lineBlockAt(e) {
      return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find(t => t.from <= e && t.to >= e) || is(this.heightMap.lineAt(e, q.ByPos, this.heightOracle, 0, 0), this.scaler);
    }
    lineBlockAtHeight(e) {
      return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find(t => t.top <= e && t.bottom >= e) || is(this.heightMap.lineAt(this.scaler.fromDOM(e), q.ByHeight, this.heightOracle, 0, 0), this.scaler);
    }
    getScrollOffset() {
      return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
    }
    scrollAnchorAt(e) {
      let t = this.lineBlockAtHeight(e + 8);
      return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
    }
    elementAtHeight(e) {
      return is(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
    }
    get docHeight() {
      return this.scaler.toDOM(this.heightMap.height);
    }
    get contentHeight() {
      return this.docHeight + this.paddingTop + this.paddingBottom;
    }
  },
  Xo = class {
    constructor(e, t) {
      this.from = e, this.to = t;
    }
  };
function Zo(e, t, n) {
  let r = [],
    i = e,
    a = 0;
  return P.spans(n, e, t, {
    span() {},
    point(e, t) {
      e > i && (r.push({
        from: i,
        to: e
      }), a += e - i), i = t;
    }
  }, 20), i < t && (r.push({
    from: i,
    to: t
  }), a += t - i), {
    total: a,
    ranges: r
  };
}
function Qo({
  total: e,
  ranges: t
}, n) {
  if (n <= 0) return t[0].from;
  if (n >= 1) return t[t.length - 1].to;
  let r = Math.floor(e * n);
  for (let e = 0;; e++) {
    let {
        from: n,
        to: i
      } = t[e],
      a = i - n;
    if (r <= a) return n + r;
    r -= a;
  }
}
function $o(e, t) {
  let n = 0;
  for (let {
    from: r,
    to: i
  } of e.ranges) {
    if (t <= i) {
      n += t - r;
      break;
    }
    n += i - r;
  }
  return n / e.total;
}
function es(e, t) {
  for (let n of e) if (t(n)) return n;
}
var ts = {
  toDOM(e) {
    return e;
  },
  fromDOM(e) {
    return e;
  },
  scale: 1,
  eq(e) {
    return e == this;
  }
};
function ns(e) {
  let t = e.facet(vi).filter(e => typeof e != `function`),
    n = e.facet(bi).filter(e => typeof e != `function`);
  return n.length && t.push(P.join(n)), t;
}
var rs = class e {
  constructor(e, t, n) {
    let r = 0,
      i = 0,
      a = 0;
    this.viewports = n.map(({
      from: n,
      to: i
    }) => {
      let a = t.lineAt(n, q.ByPos, e, 0, 0).top,
        o = t.lineAt(i, q.ByPos, e, 0, 0).bottom;
      return r += o - a, {
        from: n,
        to: i,
        top: a,
        bottom: o,
        domTop: 0,
        domBottom: 0
      };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let e of this.viewports) e.domTop = a + (e.top - i) * this.scale, a = e.domBottom = e.domTop + (e.bottom - e.top), i = e.bottom;
  }
  toDOM(e) {
    for (let t = 0, n = 0, r = 0;; t++) {
      let i = t < this.viewports.length ? this.viewports[t] : null;
      if (!i || e < i.top) return r + (e - n) * this.scale;
      if (e <= i.bottom) return i.domTop + (e - i.top);
      n = i.bottom, r = i.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, r = 0;; t++) {
      let i = t < this.viewports.length ? this.viewports[t] : null;
      if (!i || e < i.domTop) return n + (e - r) / this.scale;
      if (e <= i.domBottom) return i.top + (e - i.domTop);
      n = i.bottom, r = i.domBottom;
    }
  }
  eq(t) {
    return t instanceof e && this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, n) => e.from == t.viewports[n].from && e.to == t.viewports[n].to);
  }
};
function is(e, t) {
  if (t.scale == 1) return e;
  let n = t.toDOM(e.top),
    r = t.toDOM(e.bottom);
  return new Ao(e.from, e.length, n, r - n, Array.isArray(e._content) ? e._content.map(e => is(e, t)) : e._content);
}
var as = O.define({
    combine: e => e.join(` `)
  }),
  os = O.define({
    combine: e => e.indexOf(!0) > -1
  }),
  ss = xn.newName(),
  cs = xn.newName(),
  ls = xn.newName(),
  us = {
    "&light": `.` + cs,
    "&dark": `.` + ls
  };
function ds(e, t, n) {
  return new xn(t, {
    finish(t) {
      return /&/.test(t) ? t.replace(/&\w*/, t => {
        if (t == `&`) return e;
        if (!n || !n[t]) throw RangeError(`Unsupported selector: ${t}`);
        return n[t];
      }) : e + ` ` + t;
    }
  });
}
var fs = ds(`.` + ss, {
    "&": {
      position: `relative !important`,
      boxSizing: `border-box`,
      "&.cm-focused": {
        outline: `1px dotted #212121`
      },
      display: `flex !important`,
      flexDirection: `column`
    },
    ".cm-scroller": {
      display: `flex !important`,
      alignItems: `flex-start !important`,
      fontFamily: `monospace`,
      lineHeight: 1.4,
      height: `100%`,
      overflowX: `auto`,
      position: `relative`,
      zIndex: 0,
      overflowAnchor: `none`
    },
    ".cm-content": {
      margin: 0,
      flexGrow: 2,
      flexShrink: 0,
      display: `block`,
      whiteSpace: `pre`,
      wordWrap: `normal`,
      boxSizing: `border-box`,
      minHeight: `100%`,
      padding: `4px 0`,
      outline: `none`,
      "&[contenteditable=true]": {
        WebkitUserModify: `read-write-plaintext-only`
      }
    },
    ".cm-lineWrapping": {
      whiteSpace_fallback: `pre-wrap`,
      whiteSpace: `break-spaces`,
      wordBreak: `break-word`,
      overflowWrap: `anywhere`,
      flexShrink: 1
    },
    "&light .cm-content": {
      caretColor: `black`
    },
    "&dark .cm-content": {
      caretColor: `white`
    },
    ".cm-line": {
      display: `block`,
      padding: `0 2px 0 6px`
    },
    ".cm-layer": {
      userSelect: `none`,
      position: `absolute`,
      left: 0,
      top: 0,
      contain: `size style`,
      "& > *": {
        position: `absolute`
      }
    },
    "&light .cm-selectionBackground": {
      background: `#d9d9d9`
    },
    "&dark .cm-selectionBackground": {
      background: `#222`
    },
    "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: `#d7d4f0`
    },
    "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      background: `#233`
    },
    ".cm-cursorLayer": {
      pointerEvents: `none`
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
      animation: `steps(1) cm-blink 1.2s infinite`
    },
    "@keyframes cm-blink": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    "@keyframes cm-blink2": {
      "0%": {},
      "50%": {
        opacity: 0
      },
      "100%": {}
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeft: `1.2px solid black`,
      marginLeft: `-0.6px`,
      pointerEvents: `none`
    },
    ".cm-cursor": {
      display: `none`
    },
    "&dark .cm-cursor": {
      borderLeftColor: `#ddd`
    },
    ".cm-selectionHandle": {
      backgroundColor: `currentColor`,
      width: `1.5px`
    },
    ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
      content: `""`,
      backgroundColor: `inherit`,
      borderRadius: `50%`,
      width: `8px`,
      height: `8px`,
      position: `absolute`,
      left: `-3.25px`
    },
    ".cm-selectionHandle-start::before": {
      top: `-8px`
    },
    ".cm-selectionHandle-end::before": {
      bottom: `-8px`
    },
    ".cm-dropCursor": {
      position: `absolute`
    },
    "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
      display: `block`
    },
    ".cm-iso": {
      unicodeBidi: `isolate`
    },
    ".cm-announced": {
      position: `fixed`,
      top: `-10000px`
    },
    "@media print": {
      ".cm-announced": {
        display: `none`
      }
    },
    "&light .cm-activeLine": {
      backgroundColor: `#cceeff44`
    },
    "&dark .cm-activeLine": {
      backgroundColor: `#99eeff33`
    },
    "&light .cm-specialChar": {
      color: `red`
    },
    "&dark .cm-specialChar": {
      color: `#f78`
    },
    ".cm-gutters": {
      flexShrink: 0,
      display: `flex`,
      height: `100%`,
      boxSizing: `border-box`,
      zIndex: 200
    },
    ".cm-gutters-before": {
      insetInlineStart: 0
    },
    ".cm-gutters-after": {
      insetInlineEnd: 0
    },
    "&light .cm-gutters": {
      backgroundColor: `#f5f5f5`,
      color: `#6c6c6c`,
      border: `0px solid #ddd`,
      "&.cm-gutters-before": {
        borderRightWidth: `1px`
      },
      "&.cm-gutters-after": {
        borderLeftWidth: `1px`
      }
    },
    "&dark .cm-gutters": {
      backgroundColor: `#333338`,
      color: `#ccc`
    },
    ".cm-gutter": {
      display: `flex !important`,
      flexDirection: `column`,
      flexShrink: 0,
      boxSizing: `border-box`,
      minHeight: `100%`,
      overflow: `hidden`
    },
    ".cm-gutterElement": {
      boxSizing: `border-box`
    },
    ".cm-lineNumbers .cm-gutterElement": {
      padding: `0 3px 0 5px`,
      minWidth: `20px`,
      textAlign: `right`,
      whiteSpace: `nowrap`
    },
    "&light .cm-activeLineGutter": {
      backgroundColor: `#e2f2ff`
    },
    "&dark .cm-activeLineGutter": {
      backgroundColor: `#222227`
    },
    ".cm-panels": {
      boxSizing: `border-box`,
      position: `sticky`,
      left: 0,
      right: 0,
      zIndex: 300
    },
    "&light .cm-panels": {
      backgroundColor: `#f5f5f5`,
      color: `black`
    },
    ".cm-panels-top": {
      top: `0`
    },
    ".cm-panels-bottom": {
      bottom: `0`
    },
    "&light .cm-panels-top": {
      borderBottom: `1px solid #ddd`
    },
    "&light .cm-panels-bottom": {
      borderTop: `1px solid #ddd`
    },
    "&dark .cm-panels": {
      backgroundColor: `#333338`,
      color: `white`
    },
    ".cm-dialog": {
      padding: `2px 19px 4px 6px`,
      position: `relative`,
      "& label": {
        fontSize: `80%`
      }
    },
    ".cm-dialog-close": {
      position: `absolute`,
      top: `3px`,
      right: `4px`,
      backgroundColor: `inherit`,
      border: `none`,
      font: `inherit`,
      fontSize: `14px`,
      padding: `0`
    },
    ".cm-tab": {
      display: `inline-block`,
      overflow: `hidden`,
      verticalAlign: `bottom`
    },
    ".cm-widgetBuffer": {
      verticalAlign: `text-top`,
      height: `1em`,
      width: 0,
      display: `inline`
    },
    ".cm-placeholder": {
      color: `#888`,
      display: `inline-block`,
      verticalAlign: `top`,
      userSelect: `none`
    },
    ".cm-highlightSpace": {
      backgroundImage: `radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)`,
      backgroundPosition: `center`
    },
    ".cm-highlightTab": {
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
      backgroundSize: `auto 100%`,
      backgroundPosition: `right 90%`,
      backgroundRepeat: `no-repeat`
    },
    ".cm-trailingSpace": {
      backgroundColor: `#ff332255`
    },
    ".cm-button": {
      verticalAlign: `middle`,
      color: `inherit`,
      fontSize: `70%`,
      padding: `.2em 1em`,
      borderRadius: `1px`
    },
    "&light .cm-button": {
      backgroundImage: `linear-gradient(#eff1f5, #d9d9df)`,
      border: `1px solid #888`,
      "&:active": {
        backgroundImage: `linear-gradient(#b4b4b4, #d0d3d6)`
      }
    },
    "&dark .cm-button": {
      backgroundImage: `linear-gradient(#393939, #111)`,
      border: `1px solid #888`,
      "&:active": {
        backgroundImage: `linear-gradient(#111, #333)`
      }
    },
    ".cm-textfield": {
      verticalAlign: `middle`,
      color: `inherit`,
      fontSize: `70%`,
      border: `1px solid silver`,
      padding: `.2em .5em`
    },
    "&light .cm-textfield": {
      backgroundColor: `white`
    },
    "&dark .cm-textfield": {
      border: `1px solid #555`,
      backgroundColor: `inherit`
    }
  }, us),
  ps = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0
  },
  ms = L.ie && L.ie_version <= 11,
  hs = class {
    constructor(e) {
      this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new gr(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver(t => {
        for (let e of t) this.queue.push(e);
        (L.ie && L.ie_version <= 11 || L.ios && e.composing) && t.some(e => e.type == `childList` && e.removedNodes.length || e.type == `characterData` && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : this.flush();
      }), window.EditContext && L.android && e.constructor.EDIT_CONTEXT !== !1 && !(L.chrome && L.chrome_version < 126) && (this.editContext = new ys(e), e.state.facet(fi) && (e.contentDOM.editContext = this.editContext.editContext)), ms && (this.onCharData = e => {
        this.queue.push({
          target: e.target,
          type: `characterData`,
          oldValue: e.prevValue
        }), this.flushSoon();
      }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia(`print`)), typeof ResizeObserver == `function` && (this.resizeScroll = new ResizeObserver(() => {
        this.view.docView?.lastUpdate < Date.now() - 75 && this.onResize();
      }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == `function` && (this.intersection = new IntersectionObserver(e => {
        this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent(`Event`)));
      }, {
        threshold: [0, .001]
      }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver(e => {
        e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent(`Event`));
      }, {})), this.listenForScroll(), this.readSelectionRange();
    }
    onScrollChanged(e) {
      this.view.inputState.runHandlers(`scroll`, e), this.intersecting && this.view.measure();
    }
    onScroll(e) {
      this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
    }
    onResize() {
      this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = -1, this.view.requestMeasure();
      }, 50));
    }
    onPrint(e) {
      (e.type == `change` || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
        this.view.viewState.printing = !1, this.view.requestMeasure();
      }, 500));
    }
    updateGaps(e) {
      if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))) {
        this.gapIntersection.disconnect();
        for (let t of e) this.gapIntersection.observe(t);
        this.gaps = e;
      }
    }
    onSelectionChange(e) {
      let t = this.selectionChanged;
      if (!this.readSelectionRange() || this.delayedAndroidKey) return;
      let {
          view: n
        } = this,
        r = this.selectionRange;
      if (n.state.facet(fi) ? n.root.activeElement != this.dom : !ir(this.dom, r)) return;
      let i = r.anchorNode && n.docView.tile.nearest(r.anchorNode);
      if (i && i.isWidget() && i.widget.ignoreEvent(e)) {
        t || (this.selectionChanged = !1);
        return;
      }
      (L.ie && L.ie_version <= 11 || L.android && L.chrome) && !n.state.selection.main.empty && r.focusNode && or(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
    }
    readSelectionRange() {
      let {
          view: e
        } = this,
        t = nr(e.root);
      if (!t) return !1;
      let n = L.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && vs(this.view, t) || t;
      if (!n || this.selectionRange.eq(n)) return !1;
      let r = ir(this.dom, n);
      return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Tr(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
    }
    setSelectionRange(e, t) {
      this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
    }
    clearSelectionRange() {
      this.selectionRange.set(null, 0, null, 0);
    }
    listenForScroll() {
      this.parentCheck = -1;
      let e = 0,
        t = null;
      for (let n = this.dom; n;) if (n.nodeType == 1) !t && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : t ||= this.scrollTargets.slice(0, e), t && t.push(n), n = n.assignedSlot || n.parentNode;else if (n.nodeType == 11) n = n.host;else break;
      if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
        for (let e of this.scrollTargets) e.removeEventListener(`scroll`, this.onScroll);
        for (let e of this.scrollTargets = t) e.addEventListener(`scroll`, this.onScroll);
      }
    }
    ignore(e) {
      if (!this.active) return e();
      try {
        return this.stop(), e();
      } finally {
        this.start(), this.clear();
      }
    }
    start() {
      this.active ||= (this.observer.observe(this.dom, ps), ms && this.dom.addEventListener(`DOMCharacterDataModified`, this.onCharData), !0);
    }
    stop() {
      this.active && (this.active = !1, this.observer.disconnect(), ms && this.dom.removeEventListener(`DOMCharacterDataModified`, this.onCharData));
    }
    clear() {
      this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
    }
    delayAndroidKey(e, t) {
      if (!this.delayedAndroidKey) {
        let e = () => {
          let e = this.delayedAndroidKey;
          e && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = e.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && e.force && Cr(this.dom, e.key, e.keyCode));
        };
        this.flushingAndroidKey = this.view.win.requestAnimationFrame(e);
      }
      (!this.delayedAndroidKey || e == `Enter`) && (this.delayedAndroidKey = {
        key: e,
        keyCode: t,
        force: this.lastChange < Date.now() - 50 || !!this.delayedAndroidKey?.force
      });
    }
    clearDelayedAndroidKey() {
      this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
    }
    flushSoon() {
      this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        this.delayedFlush = -1, this.flush();
      }));
    }
    forceFlush() {
      this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
    }
    pendingRecords() {
      for (let e of this.observer.takeRecords()) this.queue.push(e);
      return this.queue;
    }
    processRecords() {
      let e = this.pendingRecords();
      e.length && (this.queue = []);
      let t = -1,
        n = -1,
        r = !1;
      for (let i of e) {
        let e = this.readMutation(i);
        e && (e.typeOver && (r = !0), t == -1 ? {
          from: t,
          to: n
        } = e : (t = Math.min(e.from, t), n = Math.max(e.to, n)));
      }
      return {
        from: t,
        to: n,
        typeOver: r
      };
    }
    readChange() {
      let {
          from: e,
          to: t,
          typeOver: n
        } = this.processRecords(),
        r = this.selectionChanged && ir(this.dom, this.selectionRange);
      if (e < 0 && !r) return null;
      e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
      let i = new Ma(this.view, e, t, n);
      return this.view.docView.domChanged = {
        newSel: i.newSel ? i.newSel.main : null
      }, i;
    }
    flush(e = !0) {
      if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
      e && this.readSelectionRange();
      let t = this.readChange();
      if (!t) return this.view.requestMeasure(), !1;
      let n = this.view.state,
        r = Pa(this.view, t);
      return this.view.state == n && (t.domChanged || t.newSel && !Ba(this.view.state.selection, t.newSel.main)) && this.view.update([]), r;
    }
    readMutation(e) {
      let t = this.view.docView.tile.nearest(e.target);
      if (!t || t.isWidget()) return null;
      if (t.markDirty(e.type == `attributes`), e.type == `childList`) {
        let n = gs(t, e.previousSibling || e.target.previousSibling, -1),
          r = gs(t, e.nextSibling || e.target.nextSibling, 1);
        return {
          from: n ? t.posAfter(n) : t.posAtStart,
          to: r ? t.posBefore(r) : t.posAtEnd,
          typeOver: !1
        };
      }
      return e.type == `characterData` ? {
        from: t.posAtStart,
        to: t.posAtEnd,
        typeOver: e.target.nodeValue == e.oldValue
      } : null;
    }
    setWindow(e) {
      e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
    }
    addWindowListeners(e) {
      e.addEventListener(`resize`, this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener(`change`, this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener(`beforeprint`, this.onPrint), e.addEventListener(`scroll`, this.onScroll), e.document.addEventListener(`selectionchange`, this.onSelectionChange);
    }
    removeWindowListeners(e) {
      e.removeEventListener(`scroll`, this.onScroll), e.removeEventListener(`resize`, this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener(`change`, this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener(`beforeprint`, this.onPrint), e.document.removeEventListener(`selectionchange`, this.onSelectionChange);
    }
    update(e) {
      this.editContext && (this.editContext.update(e), e.startState.facet(fi) != e.state.facet(fi) && (e.view.contentDOM.editContext = e.state.facet(fi) ? this.editContext.editContext : null));
    }
    destroy() {
      var e, t, n;
      this.stop(), (e = this.intersection) == null || e.disconnect(), (t = this.gapIntersection) == null || t.disconnect(), (n = this.resizeScroll) == null || n.disconnect();
      for (let e of this.scrollTargets) e.removeEventListener(`scroll`, this.onScroll);
      this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
    }
  };
function gs(e, t, n) {
  for (; t;) {
    let r = W.get(t);
    if (r && r.parent == e) return r;
    let i = t.parentNode;
    t = i == e.dom ? n > 0 ? t.nextSibling : t.previousSibling : i;
  }
  return null;
}
function _s(e, t) {
  let n = t.startContainer,
    r = t.startOffset,
    i = t.endContainer,
    a = t.endOffset,
    o = e.docView.domAtPos(e.state.selection.main.anchor, 1);
  return or(o.node, o.offset, i, a) && ([n, r, i, a] = [i, a, n, r]), {
    anchorNode: n,
    anchorOffset: r,
    focusNode: i,
    focusOffset: a
  };
}
function vs(e, t) {
  if (t.getComposedRanges) {
    let n = t.getComposedRanges(e.root)[0];
    if (n) return _s(e, n);
  }
  let n = null;
  function r(e) {
    e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
  }
  return e.contentDOM.addEventListener(`beforeinput`, r, !0), e.dom.ownerDocument.execCommand(`indent`), e.contentDOM.removeEventListener(`beforeinput`, r, !0), n ? _s(e, n) : null;
}
var ys = class {
    constructor(e) {
      this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(e.state);
      let t = this.editContext = new window.EditContext({
        text: e.state.doc.sliceString(this.from, this.to),
        selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
        selectionEnd: this.toContextPos(e.state.selection.main.head)
      });
      this.handlers.textupdate = n => {
        let r = e.state.selection.main,
          {
            anchor: i,
            head: a
          } = r,
          o = this.toEditorPos(n.updateRangeStart),
          s = this.toEditorPos(n.updateRangeEnd);
        e.inputState.composing >= 0 && !this.composing && (this.composing = {
          contextBase: n.updateRangeStart,
          editorBase: o,
          drifted: !1
        });
        let c = s - o > n.text.length;
        o == this.from && i < this.from ? o = i : s == this.to && i > this.to && (s = i);
        let l = La(e.state.sliceDoc(o, s), n.text, (c ? r.from : r.to) - o, c ? `end` : null);
        if (!l) {
          let t = D.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
          Ba(t, r) || e.dispatch({
            selection: t,
            userEvent: `select`
          });
          return;
        }
        let u = {
          from: l.from + o,
          to: l.toA + o,
          insert: b.of(n.text.slice(l.from, l.toB).split(`
`))
        };
        if ((L.mac || L.android) && u.from == a - 1 && /^\. ?$/.test(n.text) && e.contentDOM.getAttribute(`autocorrect`) == `off` && (u = {
          from: o,
          to: s,
          insert: b.of([n.text.replace(`.`, ` `)])
        }), this.pendingContextChange = u, !e.state.readOnly) {
          let t = this.to - this.from + (u.to - u.from + u.insert.length);
          Fa(e, u, D.single(this.toEditorPos(n.selectionStart, t), this.toEditorPos(n.selectionEnd, t)));
        }
        this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), u.from < u.to && !u.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(t.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
      }, this.handlers.characterboundsupdate = n => {
        let r = [],
          i = null;
        for (let t = this.toEditorPos(n.rangeStart), a = this.toEditorPos(n.rangeEnd); t < a; t++) {
          let n = e.coordsForChar(t);
          i = n && new DOMRect(n.left, n.top, n.right - n.left, n.bottom - n.top) || i || new DOMRect(), r.push(i);
        }
        t.updateCharacterBounds(n.rangeStart, r);
      }, this.handlers.textformatupdate = t => {
        let n = [];
        for (let e of t.getTextFormats()) {
          let t = e.underlineStyle,
            r = e.underlineThickness;
          if (!/none/i.test(t) && !/none/i.test(r)) {
            let i = this.toEditorPos(e.rangeStart),
              a = this.toEditorPos(e.rangeEnd);
            if (i < a) {
              let e = `text-decoration: underline ${/^[a-z]/.test(t) ? t + ` ` : t == `Dashed` ? `dashed ` : t == `Squiggle` ? `wavy ` : ``}${/thin/i.test(r) ? 1 : 2}px`;
              n.push(z.mark({
                attributes: {
                  style: e
                }
              }).range(i, a));
            }
          }
        }
        e.dispatch({
          effects: di.of(z.set(n))
        });
      }, this.handlers.compositionstart = () => {
        e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
      }, this.handlers.compositionend = () => {
        if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
          let {
            drifted: t
          } = this.composing;
          this.composing = null, t && this.reset(e.state);
        }
      };
      for (let e in this.handlers) t.addEventListener(e, this.handlers[e]);
      this.measureReq = {
        read: e => {
          let t = nr(e.root);
          t && t.rangeCount && this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect());
        }
      };
    }
    applyEdits(e) {
      let t = 0,
        n = !1,
        r = this.pendingContextChange;
      return e.changes.iterChanges((i, a, o, s, c) => {
        if (n) return;
        let l = c.length - (a - i);
        if (r && a >= r.to) {
          if (r.from == i && r.to == a && r.insert.eq(c)) {
            r = this.pendingContextChange = null, t += l, this.to += l;
            return;
          }
          r = null, this.revertPending(e.state);
        }
        if (i += t, a += t, a <= this.from) this.from += l, this.to += l;else if (i < this.to) {
          if (i < this.from || a > this.to || this.to - this.from + c.length > 3e4) {
            n = !0;
            return;
          }
          this.editContext.updateText(this.toContextPos(i), this.toContextPos(a), c.toString()), this.to += l;
        }
        t += l;
      }), r && !n && this.revertPending(e.state), !n;
    }
    update(e) {
      let t = this.pendingContextChange,
        n = e.startState.selection.main;
      this.composing && (this.composing.drifted || !e.changes.touchesRange(n.from, n.to) && e.transactions.some(e => !e.isUserEvent(`input.type`) && e.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
    }
    resetRange(e) {
      let {
        head: t
      } = e.selection.main;
      this.from = Math.max(0, t - 1e4), this.to = Math.min(e.doc.length, t + 1e4);
    }
    reset(e) {
      this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
    }
    revertPending(e) {
      let t = this.pendingContextChange;
      this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
    }
    setSelection(e) {
      let {
          main: t
        } = e.selection,
        n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))),
        r = this.toContextPos(t.head);
      (this.editContext.selectionStart != n || this.editContext.selectionEnd != r) && this.editContext.updateSelection(n, r);
    }
    rangeIsValid(e) {
      let {
        head: t
      } = e.selection.main;
      return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 3e4);
    }
    toEditorPos(e, t = this.to - this.from) {
      e = Math.min(e, t);
      let n = this.composing;
      return n && n.drifted ? n.editorBase + (e - n.contextBase) : e + this.from;
    }
    toContextPos(e) {
      let t = this.composing;
      return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
    }
    destroy() {
      for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
    }
  },
  J = class e {
    get state() {
      return this.viewState.state;
    }
    get viewport() {
      return this.viewState.viewport;
    }
    get visibleRanges() {
      return this.viewState.visibleRanges;
    }
    get inView() {
      return this.viewState.inView;
    }
    get composing() {
      return !!this.inputState && this.inputState.composing > 0;
    }
    get compositionStarted() {
      return !!this.inputState && this.inputState.composing >= 0;
    }
    get root() {
      return this._root;
    }
    get win() {
      return this.dom.ownerDocument.defaultView || window;
    }
    constructor(e = {}) {
      this.plugins = [], this.pluginMap = new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement(`div`), this.scrollDOM = document.createElement(`div`), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = `cm-scroller`, this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement(`div`), this.announceDOM.className = `cm-announced`, this.announceDOM.setAttribute(`aria-live`, `polite`), this.dom = document.createElement(`div`), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
      let {
        dispatch: t
      } = e;
      this.dispatchTransactions = e.dispatchTransactions || t && (e => e.forEach(e => t(e, this))) || (e => this.update(e)), this.dispatch = this.dispatch.bind(this), this._root = e.root || wr(e.parent) || document, this.viewState = new Yo(this, e.state || N.create(e)), e.scrollTo && e.scrollTo.is(ui) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(mi).map(e => new hi(e));
      for (let e of this.plugins) e.update(this);
      this.observer = new hs(this), this.inputState = new Va(this), this.inputState.ensureHandlers(this.plugins), this.docView = new ta(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), document.fonts?.ready && document.fonts.ready.then(() => {
        this.viewState.mustMeasureContent = `refresh`, this.requestMeasure();
      });
    }
    dispatch(...e) {
      let t = e.length == 1 && e[0] instanceof j ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
      this.dispatchTransactions(t, this);
    }
    update(t) {
      if (this.updateState != 0) throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);
      let n = !1,
        r = !1,
        i,
        a = this.state;
      for (let e of t) {
        if (e.startState != a) throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);
        a = e.state;
      }
      if (this.destroyed) {
        this.viewState.state = a;
        return;
      }
      let o = this.hasFocus,
        s = 0,
        c = null;
      t.some(e => e.annotation(bo)) ? (this.inputState.notifiedFocused = o, s = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, c = xo(a, o), c || (s = 1));
      let l = this.observer.delayedAndroidKey,
        u = null;
      if (l ? (this.observer.clearDelayedAndroidKey(), u = this.observer.readChange(), (u && !this.state.doc.eq(a.doc) || !this.state.selection.eq(a.selection)) && (u = null)) : this.observer.clear(), a.facet(N.phrases) != this.state.facet(N.phrases)) return this.setState(a);
      i = Oi.create(this, a, t), i.flags |= s;
      let d = this.viewState.scrollTarget;
      try {
        this.updateState = 2;
        for (let n of t) {
          if (d &&= d.map(n.changes), n.scrollIntoView) {
            let {
                main: t
              } = n.state.selection,
              {
                x: r,
                y: i
              } = this.state.facet(e.cursorScrollMargin);
            d = new li(t.empty ? t : D.cursor(t.head, t.head > t.anchor ? -1 : 1), `nearest`, `nearest`, i, r);
          }
          for (let e of n.effects) e.is(ui) && (d = e.value.clip(this.state));
        }
        this.viewState.update(i, d), this.bidiCache = Ss.update(this.bidiCache, i.changes), i.empty || (this.updatePlugins(i), this.inputState.update(i)), n = this.docView.update(i), this.state.facet(Ei) != this.styleModules && this.mountStyles(), r = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(n, t.some(e => e.isUserEvent(`select.pointer`)));
      } finally {
        this.updateState = 0;
      }
      if (i.startState.facet(as) != i.state.facet(as) && (this.viewState.mustMeasureContent = !0), (n || r || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), n && this.docViewUpdate(), !i.empty) for (let e of this.state.facet(ti)) try {
        e(i);
      } catch (e) {
        H(this.state, e, `update listener`);
      }
      (c || u) && Promise.resolve().then(() => {
        c && this.state == c.startState && this.dispatch(c), u && !Pa(this, u) && l.force && Cr(this.contentDOM, l.key, l.keyCode);
      });
    }
    setState(e) {
      if (this.updateState != 0) throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);
      if (this.destroyed) {
        this.viewState.state = e;
        return;
      }
      this.updateState = 2;
      let t = this.hasFocus;
      try {
        for (let e of this.plugins) e.destroy(this);
        this.viewState = new Yo(this, e), this.plugins = e.facet(mi).map(e => new hi(e)), this.pluginMap.clear();
        for (let e of this.plugins) e.update(this);
        this.docView.destroy(), this.docView = new ta(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
      } finally {
        this.updateState = 0;
      }
      t && this.focus(), this.requestMeasure();
    }
    updatePlugins(e) {
      let t = e.startState.facet(mi),
        n = e.state.facet(mi);
      if (t != n) {
        let r = [];
        for (let i of n) {
          let n = t.indexOf(i);
          if (n < 0) r.push(new hi(i));else {
            let t = this.plugins[n];
            t.mustUpdate = e, r.push(t);
          }
        }
        for (let t of this.plugins) t.mustUpdate != e && t.destroy(this);
        this.plugins = r, this.pluginMap.clear();
      } else for (let t of this.plugins) t.mustUpdate = e;
      for (let e = 0; e < this.plugins.length; e++) this.plugins[e].update(this);
      t != n && this.inputState.ensureHandlers(this.plugins);
    }
    docViewUpdate() {
      for (let e of this.plugins) {
        let t = e.value;
        if (t && t.docViewUpdate) try {
          t.docViewUpdate(this);
        } catch (e) {
          H(this.state, e, `doc view update listener`);
        }
      }
    }
    measure(e = !0) {
      if (this.destroyed) return;
      if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
        this.measureScheduled = -1, this.requestMeasure();
        return;
      }
      this.measureScheduled = 0, e && this.observer.forceFlush();
      let t = null,
        n = this.viewState.scrollParent,
        r = this.viewState.getScrollOffset(),
        {
          scrollAnchorPos: i,
          scrollAnchorHeight: a
        } = this.viewState;
      Math.abs(r - this.viewState.scrollOffset) > 1 && (a = -1), this.viewState.scrollAnchorHeight = -1;
      try {
        for (let e = 0;; e++) {
          if (a < 0) {
            if (Er(n || this.win)) i = -1, a = this.viewState.heightMap.height;else {
              let e = this.viewState.scrollAnchorAt(r);
              i = e.from, a = e.top;
            }
          }
          this.updateState = 1;
          let o = this.viewState.measure();
          if (!o && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
          if (e > 5) {
            console.warn(this.measureRequests.length ? `Measure loop restarted more than 5 times` : `Viewport failed to stabilize`);
            break;
          }
          let s = [];
          o & 4 || ([this.measureRequests, s] = [s, this.measureRequests]);
          let c = s.map(e => {
              try {
                return e.read(this);
              } catch (e) {
                return H(this.state, e), xs;
              }
            }),
            l = Oi.create(this, this.state, []),
            u = !1;
          l.flags |= o, t ? t.flags |= o : t = l, this.updateState = 2, l.empty || (this.updatePlugins(l), this.inputState.update(l), this.updateAttrs(), u = this.docView.update(l), u && this.docViewUpdate());
          for (let e = 0; e < s.length; e++) if (c[e] != xs) try {
            let t = s[e];
            t.write && t.write(c[e], this);
          } catch (e) {
            H(this.state, e);
          }
          if (u && this.docView.updateSelection(!0), !l.viewportChanged && this.measureRequests.length == 0) {
            if (this.viewState.editorHeight) {
              if (this.viewState.scrollTarget) {
                this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, a = -1;
                continue;
              }
              {
                let e = ((i < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(i).top) - a) / this.scaleY;
                if ((e > 1 || e < -1) && !(L.ios && this.inputState.lastIOSMomentumScroll > Date.now() - 100) && (n == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                  r += e, n ? i < 0 ? n.scrollTop = n.scrollHeight : n.scrollTop += e : this.win.scrollBy(0, e), a = -1;
                  continue;
                }
              }
            }
            break;
          }
        }
      } finally {
        this.updateState = 0, this.measureScheduled = -1;
      }
      if (t && !t.empty) for (let e of this.state.facet(ti)) e(t);
    }
    get themeClasses() {
      return ss + ` ` + (this.state.facet(os) ? ls : cs) + ` ` + this.state.facet(as);
    }
    updateAttrs() {
      let e = Cs(this, gi, {
          class: `cm-editor` + (this.hasFocus ? ` cm-focused ` : ` `) + this.themeClasses
        }),
        t = {
          spellcheck: `false`,
          autocorrect: `off`,
          autocapitalize: `off`,
          writingsuggestions: `false`,
          translate: `no`,
          contenteditable: this.state.facet(fi) ? `true` : `false`,
          class: `cm-content`,
          style: `${L.tabSize}: ${this.state.tabSize}`,
          role: `textbox`,
          "aria-multiline": `true`
        };
      this.state.readOnly && (t[`aria-readonly`] = `true`), Cs(this, _i, t);
      let n = this.observer.ignore(() => {
        let n = Kn(this.contentDOM, this.contentAttrs, t),
          r = Kn(this.dom, this.editorAttrs, e);
        return n || r;
      });
      return this.editorAttrs = e, this.contentAttrs = t, n;
    }
    showAnnouncements(t) {
      let n = !0;
      for (let r of t) for (let t of r.effects) if (t.is(e.announce)) {
        n && (this.announceDOM.textContent = ``), n = !1;
        let e = this.announceDOM.appendChild(document.createElement(`div`));
        e.textContent = t.value;
      }
    }
    mountStyles() {
      this.styleModules = this.state.facet(Ei);
      let t = this.state.facet(e.cspNonce);
      xn.mount(this.root, this.styleModules.concat(fs).reverse(), t ? {
        nonce: t
      } : void 0);
    }
    readMeasured() {
      if (this.updateState == 2) throw Error(`Reading the editor layout isn't allowed during an update`);
      this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
    }
    requestMeasure(e) {
      if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
        if (this.measureRequests.indexOf(e) > -1) return;
        if (e.key != null) {
          for (let t = 0; t < this.measureRequests.length; t++) if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
        }
        this.measureRequests.push(e);
      }
    }
    plugin(e) {
      let t = this.pluginMap.get(e);
      return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find(t => t.plugin == e) || null), t && t.update(this).value;
    }
    get documentTop() {
      return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
    }
    get documentPadding() {
      return {
        top: this.viewState.paddingTop,
        bottom: this.viewState.paddingBottom
      };
    }
    get scaleX() {
      return this.viewState.scaleX;
    }
    get scaleY() {
      return this.viewState.scaleY;
    }
    elementAtHeight(e) {
      return this.readMeasured(), this.viewState.elementAtHeight(e);
    }
    lineBlockAtHeight(e) {
      return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
    }
    get viewportLineBlocks() {
      return this.viewState.viewportLines;
    }
    lineBlockAt(e) {
      return this.viewState.lineBlockAt(e);
    }
    get contentHeight() {
      return this.viewState.contentHeight;
    }
    moveByChar(e, t, n) {
      return Ca(this, e, va(this, e, t, n));
    }
    moveByGroup(e, t) {
      return Ca(this, e, va(this, e, t, t => ya(this, e.head, t)));
    }
    visualLineSide(e, t) {
      let n = this.bidiSpans(e),
        r = this.textDirectionAt(e.from),
        i = n[t ? n.length - 1 : 0];
      return D.cursor(i.side(t, r) + e.from, i.forward(!t, r) ? 1 : -1);
    }
    moveToLineBoundary(e, t, n = !0) {
      return _a(this, e, t, n);
    }
    moveVertically(e, t, n) {
      return Ca(this, e, ba(this, e, t, n));
    }
    domAtPos(e, t = 1) {
      return this.docView.domAtPos(e, t);
    }
    posAtDOM(e, t = 0) {
      return this.docView.posFromDOM(e, t);
    }
    posAtCoords(e, t = !0) {
      this.readMeasured();
      let n = Ta(this, e, t);
      return n && n.pos;
    }
    posAndSideAtCoords(e, t = !0) {
      return this.readMeasured(), Ta(this, e, t);
    }
    coordsAtPos(e, t = 1) {
      this.readMeasured();
      let n = this.state.doc.lineAt(e),
        r = this.bidiSpans(n),
        i = r[zr.find(r, e - n.from, -1, t)];
      return this.docView.coordsAt(e, t, i.dir == B.RTL);
    }
    coordsForChar(e) {
      return this.readMeasured(), this.docView.coordsForChar(e);
    }
    get defaultCharacterWidth() {
      return this.viewState.heightOracle.charWidth;
    }
    get defaultLineHeight() {
      return this.viewState.heightOracle.lineHeight;
    }
    get textDirection() {
      return this.viewState.defaultTextDirection;
    }
    textDirectionAt(e) {
      return !this.state.facet(oi) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
    }
    get lineWrapping() {
      return this.viewState.heightOracle.lineWrapping;
    }
    bidiSpans(e) {
      if (e.length > bs) return qr(e.length);
      let t = this.textDirectionAt(e.from),
        n;
      for (let r of this.bidiCache) if (r.from == e.from && r.dir == t && (r.fresh || Br(r.isolates, n = Ci(this, e)))) return r.order;
      n ||= Ci(this, e);
      let r = Kr(e.text, t, n);
      return this.bidiCache.push(new Ss(e.from, e.to, t, n, !0, r)), r;
    }
    get hasFocus() {
      return (this.dom.ownerDocument.hasFocus() || L.safari && this.inputState?.lastContextMenu > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
    }
    focus() {
      this.observer.ignore(() => {
        br(this.contentDOM), this.docView.updateSelection();
      });
    }
    setRoot(e) {
      this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
    }
    destroy() {
      this.root.activeElement == this.contentDOM && this.contentDOM.blur();
      for (let e of this.plugins) e.destroy(this);
      this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
    }
    static scrollIntoView(e, t = {}) {
      return ui.of(new li(typeof e == `number` ? D.cursor(e) : e, t.y ?? `nearest`, t.x ?? `nearest`, t.yMargin ?? 5, t.xMargin ?? 5));
    }
    scrollSnapshot() {
      let {
          scrollTop: e,
          scrollLeft: t
        } = this.scrollDOM,
        n = this.viewState.scrollAnchorAt(e);
      return ui.of(new li(D.cursor(n.from), `start`, `start`, n.top - e, t, !0));
    }
    setTabFocusMode(e) {
      e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == `boolean` ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
    }
    static domEventHandlers(e) {
      return U.define(() => ({}), {
        eventHandlers: e
      });
    }
    static domEventObservers(e) {
      return U.define(() => ({}), {
        eventObservers: e
      });
    }
    static theme(e, t) {
      let n = xn.newName(),
        r = [as.of(n), Ei.of(ds(`.${n}`, e))];
      return t && t.dark && r.push(os.of(!0)), r;
    }
    static baseTheme(e) {
      return bt.lowest(Ei.of(ds(`.` + ss, e, us)));
    }
    static findFromDOM(e) {
      let t = e.querySelector(`.cm-content`);
      return (t && W.get(t) || W.get(e))?.root?.view || null;
    }
  };
J.styleModule = Ei, J.inputHandler = ni, J.clipboardInputFilter = ii, J.clipboardOutputFilter = ai, J.scrollHandler = ci, J.focusChangeEffect = ri, J.perLineTextDirection = oi, J.exceptionSink = ei, J.updateListener = ti, J.editable = fi, J.mouseSelectionStyle = $r, J.dragMovesSelection = Qr, J.clickAddsSelectionRange = Zr, J.decorations = vi, J.blockWrappers = yi, J.outerDecorations = bi, J.atomicRanges = xi, J.bidiIsolatedRanges = Si, J.cursorScrollMargin = O.define({
  combine: e => {
    let t = 5,
      n = 5;
    for (let r of e) typeof r == `number` ? t = n = r : {
      x: t,
      y: n
    } = r;
    return {
      x: t,
      y: n
    };
  }
}), J.scrollMargins = wi, J.darkTheme = os, J.cspNonce = O.define({
  combine: e => e.length ? e[0] : ``
}), J.contentAttributes = _i, J.editorAttributes = gi, J.lineWrapping = J.contentAttributes.of({
  class: `cm-lineWrapping`
}), J.announce = A.define();
var bs = 4096,
  xs = {},
  Ss = class e {
    constructor(e, t, n, r, i, a) {
      this.from = e, this.to = t, this.dir = n, this.isolates = r, this.fresh = i, this.order = a;
    }
    static update(t, n) {
      if (n.empty && !t.some(e => e.fresh)) return t;
      let r = [],
        i = t.length ? t[t.length - 1].dir : B.LTR;
      for (let a = Math.max(0, t.length - 10); a < t.length; a++) {
        let o = t[a];
        o.dir == i && !n.touchesRange(o.from, o.to) && r.push(new e(n.mapPos(o.from, 1), n.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
      }
      return r;
    }
  };
function Cs(e, t, n) {
  for (let r = e.state.facet(t), i = r.length - 1; i >= 0; i--) {
    let t = r[i],
      a = typeof t == `function` ? t(e) : t;
    a && Hn(a, n);
  }
  return n;
}
var ws = L.mac ? `mac` : L.windows ? `win` : L.linux ? `linux` : `key`;
function Ts(e, t) {
  let n = e.split(/-(?!$)/),
    r = n[n.length - 1];
  r == `Space` && (r = ` `);
  let i, a, o, s;
  for (let e = 0; e < n.length - 1; ++e) {
    let r = n[e];
    if (/^(cmd|meta|m)$/i.test(r)) s = !0;else if (/^a(lt)?$/i.test(r)) i = !0;else if (/^(c|ctrl|control)$/i.test(r)) a = !0;else if (/^s(hift)?$/i.test(r)) o = !0;else if (/^mod$/i.test(r)) t == `mac` ? s = !0 : a = !0;else throw Error(`Unrecognized modifier name: ` + r);
  }
  return i && (r = `Alt-` + r), a && (r = `Ctrl-` + r), s && (r = `Meta-` + r), o && (r = `Shift-` + r), r;
}
function Es(e, t, n) {
  return t.altKey && (e = `Alt-` + e), t.ctrlKey && (e = `Ctrl-` + e), t.metaKey && (e = `Meta-` + e), n !== !1 && t.shiftKey && (e = `Shift-` + e), e;
}
var Ds = bt.default(J.domEventHandlers({
    keydown(e, t) {
      return Is(As(t.state), e, t, `editor`);
    }
  })),
  Os = O.define({
    enables: Ds
  }),
  ks = new WeakMap();
function As(e) {
  let t = e.facet(Os),
    n = ks.get(t);
  return n || ks.set(t, n = Ps(t.reduce((e, t) => e.concat(t), []))), n;
}
function js(e, t, n) {
  return Is(As(e.state), t, e, n);
}
var Ms = null,
  Ns = 4e3;
function Ps(e, t = ws) {
  let n = Object.create(null),
    r = Object.create(null),
    i = (e, t) => {
      let n = r[e];
      if (n == null) r[e] = t;else if (n != t) throw Error(`Key binding ` + e + ` is used both as a regular binding and as a multi-stroke prefix`);
    },
    a = (e, r, a, o, s) => {
      let c = n[e] || (n[e] = Object.create(null)),
        l = r.split(/ (?!$)/).map(e => Ts(e, t));
      for (let t = 1; t < l.length; t++) {
        let n = l.slice(0, t).join(` `);
        i(n, !0), c[n] || (c[n] = {
          preventDefault: !0,
          stopPropagation: !1,
          run: [t => {
            let r = Ms = {
              view: t,
              prefix: n,
              scope: e
            };
            return setTimeout(() => {
              Ms == r && (Ms = null);
            }, Ns), !0;
          }]
        });
      }
      let u = l.join(` `);
      i(u, !1);
      let d = c[u] || (c[u] = {
        preventDefault: !1,
        stopPropagation: !1,
        run: c._any?.run?.slice() || []
      });
      a && d.run.push(a), o && (d.preventDefault = !0), s && (d.stopPropagation = !0);
    };
  for (let r of e) {
    let e = r.scope ? r.scope.split(` `) : [`editor`];
    if (r.any) for (let t of e) {
      let e = n[t] || (n[t] = Object.create(null));
      e._any ||= {
        preventDefault: !1,
        stopPropagation: !1,
        run: []
      };
      let {
        any: i
      } = r;
      for (let t in e) e[t].run.push(e => i(e, Fs));
    }
    let i = r[t] || r.key;
    if (i) for (let t of e) a(t, i, r.run, r.preventDefault, r.stopPropagation), r.shift && a(t, `Shift-` + i, r.shift, r.preventDefault, r.stopPropagation);
  }
  return n;
}
var Fs = null;
function Is(e, t, n, r) {
  Fs = t;
  let i = kn(t),
    a = tt(C(i, 0)) == i.length && i != ` `,
    o = ``,
    s = !1,
    c = !1,
    l = !1;
  Ms && Ms.view == n && Ms.scope == r && (o = Ms.prefix + ` `, qa.indexOf(t.keyCode) < 0 && (c = !0, Ms = null));
  let u = new Set(),
    d = e => {
      if (e) {
        for (let t of e.run) if (!u.has(t) && (u.add(t), t(n))) return e.stopPropagation && (l = !0), !0;
        e.preventDefault && (e.stopPropagation && (l = !0), c = !0);
      }
      return !1;
    },
    f = e[r],
    p,
    m;
  return f && (d(f[o + Es(i, t, !a)]) ? s = !0 : a && (t.altKey || t.metaKey || t.ctrlKey) && !(L.windows && t.ctrlKey && t.altKey) && !(L.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (p = wn[t.keyCode]) && p != i ? (d(f[o + Es(p, t, !0)]) || t.shiftKey && (m = Tn[t.keyCode]) != i && m != p && d(f[o + Es(m, t, !1)])) && (s = !0) : a && t.shiftKey && d(f[o + Es(i, t, !0)]) && (s = !0), !s && d(f._any) && (s = !0)), c && (s = !0), s && l && t.stopPropagation(), Fs = null, s;
}
var Ls = class e {
  constructor(e, t, n, r, i) {
    this.className = e, this.left = t, this.top = n, this.width = r, this.height = i;
  }
  draw() {
    let e = document.createElement(`div`);
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className == this.className && (this.adjust(e), !0);
  }
  adjust(e) {
    e.style.left = this.left + `px`, e.style.top = this.top + `px`, this.width != null && (e.style.width = this.width + `px`), e.style.height = this.height + `px`;
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(t, n, r) {
    if (r.empty) {
      let i = t.coordsAtPos(r.head, r.assoc || 1);
      if (!i) return [];
      let a = Rs(t);
      return [new e(n, i.left - a.left, i.top - a.top, null, i.bottom - i.top)];
    }
    return Bs(t, n, r);
  }
};
function Rs(e) {
  let t = e.scrollDOM.getBoundingClientRect();
  return {
    left: (e.textDirection == B.LTR ? t.left : t.right - e.scrollDOM.clientWidth * e.scaleX) - e.scrollDOM.scrollLeft * e.scaleX,
    top: t.top - e.scrollDOM.scrollTop * e.scaleY
  };
}
function zs(e, t, n, r) {
  let i = e.coordsAtPos(t, n * 2);
  if (!i) return r;
  let a = e.dom.getBoundingClientRect(),
    o = (i.top + i.bottom) / 2,
    s = e.posAtCoords({
      x: a.left + 1,
      y: o
    }),
    c = e.posAtCoords({
      x: a.right - 1,
      y: o
    });
  return s == null || c == null ? r : {
    from: Math.max(r.from, Math.min(s, c)),
    to: Math.min(r.to, Math.max(s, c))
  };
}
function Bs(e, t, n) {
  if (n.to <= e.viewport.from || n.from >= e.viewport.to) return [];
  let r = Math.max(n.from, e.viewport.from),
    i = Math.min(n.to, e.viewport.to),
    a = e.textDirection == B.LTR,
    o = e.contentDOM,
    s = o.getBoundingClientRect(),
    c = Rs(e),
    l = o.querySelector(`.cm-line`),
    u = l && window.getComputedStyle(l),
    d = s.left + (u ? parseInt(u.paddingLeft) + Math.min(0, parseInt(u.textIndent)) : 0),
    f = s.right - (u ? parseInt(u.paddingRight) : 0),
    p = ga(e, r, 1),
    m = ga(e, i, -1),
    h = p.type == R.Text ? p : null,
    g = m.type == R.Text ? m : null;
  if (h && (e.lineWrapping || p.widgetLineBreaks) && (h = zs(e, r, 1, h)), g && (e.lineWrapping || m.widgetLineBreaks) && (g = zs(e, i, -1, g)), h && g && h.from == g.from && h.to == g.to) return v(y(n.from, n.to, h));
  {
    let t = h ? y(n.from, null, h) : ee(p, !1),
      r = g ? y(null, n.to, g) : ee(m, !0),
      i = [];
    return (h || p).to < (g || m).from - (h && g ? 1 : 0) || p.widgetLineBreaks > 1 && t.bottom + e.defaultLineHeight / 2 < r.top ? i.push(_(d, t.bottom, f, r.top)) : t.bottom < r.top && e.elementAtHeight((t.bottom + r.top) / 2).type == R.Text && (t.bottom = r.top = (t.bottom + r.top) / 2), v(t).concat(i).concat(v(r));
  }
  function _(e, n, r, i) {
    return new Ls(t, e - c.left, n - c.top, Math.max(0, r - e), i - n);
  }
  function v({
    top: e,
    bottom: t,
    horizontal: n
  }) {
    let r = [];
    for (let i = 0; i < n.length; i += 2) r.push(_(n[i], e, n[i + 1], t));
    return r;
  }
  function y(t, n, r) {
    let i = 1e9,
      o = -1e9,
      s = [];
    function c(t, n, c, l, u) {
      let p = e.coordsAtPos(t, t == r.to ? -2 : 2),
        m = e.coordsAtPos(c, c == r.from ? 2 : -2);
      !p || !m || (i = Math.min(p.top, m.top, i), o = Math.max(p.bottom, m.bottom, o), u == B.LTR ? s.push(a && n ? d : p.left, a && l ? f : m.right) : s.push(!a && l ? d : m.left, !a && n ? f : p.right));
    }
    let l = t ?? r.from,
      u = n ?? r.to;
    for (let r of e.visibleRanges) if (r.to > l && r.from < u) for (let i = Math.max(r.from, l), a = Math.min(r.to, u);;) {
      let r = e.state.doc.lineAt(i);
      for (let o of e.bidiSpans(r)) {
        let e = o.from + r.from,
          s = o.to + r.from;
        if (e >= a) break;
        s > i && c(Math.max(e, i), t == null && e <= l, Math.min(s, a), n == null && s >= u, o.dir);
      }
      if (i = r.to + 1, i >= a) break;
    }
    return s.length == 0 && c(l, t == null, u, n == null, e.textDirection), {
      top: i,
      bottom: o,
      horizontal: s
    };
  }
  function ee(e, t) {
    let n = s.top + (t ? e.top : e.bottom);
    return {
      top: n,
      bottom: n,
      horizontal: []
    };
  }
}
function Vs(e, t) {
  return e.constructor == t.constructor && e.eq(t);
}
var Hs = class {
    constructor(e, t) {
      this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this)
      }, this.dom = e.scrollDOM.appendChild(document.createElement(`div`)), this.dom.classList.add(`cm-layer`), t.above && this.dom.classList.add(`cm-layer-above`), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute(`aria-hidden`, `true`), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
    }
    update(e) {
      e.startState.facet(Us) != e.state.facet(Us) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
    }
    docViewUpdate(e) {
      this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
    }
    setOrder(e) {
      let t = 0,
        n = e.facet(Us);
      for (; t < n.length && n[t] != this.layer;) t++;
      this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
    }
    measure() {
      return this.layer.markers(this.view);
    }
    scale() {
      let {
        scaleX: e,
        scaleY: t
      } = this.view;
      (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
    }
    draw(e) {
      if (e.length != this.drawn.length || e.some((e, t) => !Vs(e, this.drawn[t]))) {
        let t = this.dom.firstChild,
          n = 0;
        for (let r of e) r.update && t && r.constructor && this.drawn[n].constructor && r.update(t, this.drawn[n]) ? (t = t.nextSibling, n++) : this.dom.insertBefore(r.draw(), t);
        for (; t;) {
          let e = t.nextSibling;
          t.remove(), t = e;
        }
        this.drawn = e, L.webkit && (this.dom.style.display = this.dom.firstChild ? `` : `none`);
      }
    }
    destroy() {
      this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
    }
  },
  Us = O.define();
function Ws(e) {
  return [U.define(t => new Hs(t, e)), Us.of(e)];
}
var Gs = O.define({
  combine(e) {
    return Xt(e, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (e, t) => Math.min(e, t),
      drawRangeCursor: (e, t) => e || t
    });
  }
});
function Ks(e = {}) {
  return [Gs.of(e), Js, Xs, Qs, si.of(!0)];
}
function qs(e) {
  return e.startState.facet(Gs) != e.state.facet(Gs);
}
var Js = Ws({
  above: !0,
  markers(e) {
    let {
        state: t
      } = e,
      n = t.facet(Gs),
      r = [];
    for (let i of t.selection.ranges) {
      let a = i == t.selection.main;
      if (i.empty || n.drawRangeCursor && !(a && L.ios && n.iosSelectionHandles)) {
        let t = a ? `cm-cursor cm-cursor-primary` : `cm-cursor cm-cursor-secondary`,
          n = i.empty ? i : D.cursor(i.head, i.assoc);
        for (let i of Ls.forRange(e, t, n)) r.push(i);
      }
    }
    return r;
  },
  update(e, t) {
    e.transactions.some(e => e.selection) && (t.style.animationName = t.style.animationName == `cm-blink` ? `cm-blink2` : `cm-blink`);
    let n = qs(e);
    return n && Ys(e.state, t), e.docChanged || e.selectionSet || n;
  },
  mount(e, t) {
    Ys(t.state, e);
  },
  class: `cm-cursorLayer`
});
function Ys(e, t) {
  t.style.animationDuration = e.facet(Gs).cursorBlinkRate + `ms`;
}
var Xs = Ws({
    above: !1,
    markers(e) {
      let t = [],
        {
          main: n,
          ranges: r
        } = e.state.selection;
      for (let n of r) if (!n.empty) for (let r of Ls.forRange(e, `cm-selectionBackground`, n)) t.push(r);
      if (L.ios && !n.empty && e.state.facet(Gs).iosSelectionHandles) {
        for (let r of Ls.forRange(e, `cm-selectionHandle cm-selectionHandle-start`, D.cursor(n.from, 1))) t.push(r);
        for (let r of Ls.forRange(e, `cm-selectionHandle cm-selectionHandle-end`, D.cursor(n.to, 1))) t.push(r);
      }
      return t;
    },
    update(e, t) {
      return e.docChanged || e.selectionSet || e.viewportChanged || qs(e);
    },
    class: `cm-selectionLayer`
  }),
  Zs = L.gecko && L.gecko_version == 153 ? `#ffffff01` : `transparent`,
  Qs = bt.highest(J.theme({
    ".cm-line": {
      "& ::selection, &::selection": {
        backgroundColor: `${Zs} !important`
      },
      caretColor: `transparent !important`
    },
    ".cm-content": {
      caretColor: `transparent !important`,
      "& :focus": {
        caretColor: `initial !important`,
        "&::selection, & ::selection": {
          backgroundColor: `Highlight !important`
        }
      }
    }
  })),
  $s = A.define({
    map(e, t) {
      return e == null ? null : t.mapPos(e);
    }
  }),
  ec = k.define({
    create() {
      return null;
    },
    update(e, t) {
      return e != null && (e = t.changes.mapPos(e)), t.effects.reduce((e, t) => t.is($s) ? t.value : e, e);
    }
  }),
  tc = U.fromClass(class {
    constructor(e) {
      this.view = e, this.cursor = null, this.measureReq = {
        read: this.readPos.bind(this),
        write: this.drawCursor.bind(this)
      };
    }
    update(e) {
      var t;
      let n = e.state.field(ec);
      n == null ? this.cursor != null && ((t = this.cursor) == null || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement(`div`)), this.cursor.className = `cm-dropCursor`), (e.startState.field(ec) != n || e.docChanged || e.geometryChanged) && this.view.requestMeasure(this.measureReq));
    }
    readPos() {
      let {
          view: e
        } = this,
        t = e.state.field(ec),
        n = t != null && e.coordsAtPos(t);
      if (!n) return null;
      let r = e.scrollDOM.getBoundingClientRect();
      return {
        left: n.left - r.left + e.scrollDOM.scrollLeft * e.scaleX,
        top: n.top - r.top + e.scrollDOM.scrollTop * e.scaleY,
        height: n.bottom - n.top
      };
    }
    drawCursor(e) {
      if (this.cursor) {
        let {
          scaleX: t,
          scaleY: n
        } = this.view;
        e ? (this.cursor.style.left = e.left / t + `px`, this.cursor.style.top = e.top / n + `px`, this.cursor.style.height = e.height / n + `px`) : this.cursor.style.left = `-100000px`;
      }
    }
    destroy() {
      this.cursor && this.cursor.remove();
    }
    setDropPos(e) {
      this.view.state.field(ec) != e && this.view.dispatch({
        effects: $s.of(e)
      });
    }
  }, {
    eventObservers: {
      dragover(e) {
        this.setDropPos(this.view.posAtCoords({
          x: e.clientX,
          y: e.clientY
        }));
      },
      dragleave(e) {
        (e.target == this.view.contentDOM || !this.view.contentDOM.contains(e.relatedTarget)) && this.setDropPos(null);
      },
      dragend() {
        this.setDropPos(null);
      },
      drop() {
        this.setDropPos(null);
      }
    }
  });
function nc() {
  return [ec, tc];
}
function rc(e, t, n, r, i) {
  t.lastIndex = 0;
  for (let a = e.iterRange(n, r), o = n, s; !a.next().done; o += a.value.length) if (!a.lineBreak) for (; s = t.exec(a.value);) i(o + s.index, s);
}
function ic(e, t) {
  let n = e.visibleRanges;
  if (n.length == 1 && n[0].from == e.viewport.from && n[0].to == e.viewport.to) return n;
  let r = [];
  for (let {
    from: i,
    to: a
  } of n) i = Math.max(e.state.doc.lineAt(i).from, i - t), a = Math.min(e.state.doc.lineAt(a).to, a + t), r.length && r[r.length - 1].to >= i ? r[r.length - 1].to = a : r.push({
    from: i,
    to: a
  });
  return r;
}
var ac = class {
    constructor(e) {
      let {
        regexp: t,
        decoration: n,
        decorate: r,
        boundary: i,
        maxLength: a = 1e3
      } = e;
      if (!t.global) throw RangeError(`The regular expression given to MatchDecorator should have its 'g' flag set`);
      if (this.regexp = t, r) this.addMatch = (e, t, n, i) => r(i, n, n + e[0].length, e, t);else if (typeof n == `function`) this.addMatch = (e, t, r, i) => {
        let a = n(e, t, r);
        a && i(r, r + e[0].length, a);
      };else if (n) this.addMatch = (e, t, r, i) => i(r, r + e[0].length, n);else throw RangeError(`Either 'decorate' or 'decoration' should be provided to MatchDecorator`);
      this.boundary = i, this.maxLength = a;
    }
    createDeco(e) {
      let t = new rn(),
        n = t.add.bind(t);
      for (let {
        from: t,
        to: r
      } of ic(e, this.maxLength)) rc(e.state.doc, this.regexp, t, r, (t, r) => this.addMatch(r, e, t, n));
      return t.finish();
    }
    updateDeco(e, t) {
      let n = 1e9,
        r = -1;
      return e.docChanged && e.changes.iterChanges((t, i, a, o) => {
        o >= e.view.viewport.from && a <= e.view.viewport.to && (n = Math.min(a, n), r = Math.max(o, r));
      }), e.viewportMoved || r - n > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), n, r) : t;
    }
    updateRange(e, t, n, r) {
      for (let i of e.visibleRanges) {
        let a = Math.max(i.from, n),
          o = Math.min(i.to, r);
        if (o >= a) {
          let n = e.state.doc.lineAt(a),
            r = n.to < o ? e.state.doc.lineAt(o) : n,
            s = Math.max(i.from, n.from),
            c = Math.min(i.to, r.to);
          if (this.boundary) {
            for (; a > n.from; a--) if (this.boundary.test(n.text[a - 1 - n.from])) {
              s = a;
              break;
            }
            for (; o < r.to; o++) if (this.boundary.test(r.text[o - r.from])) {
              c = o;
              break;
            }
          }
          let l = [],
            u,
            d = (e, t, n) => l.push(n.range(e, t));
          if (n == r) for (this.regexp.lastIndex = s - n.from; (u = this.regexp.exec(n.text)) && u.index < c - n.from;) this.addMatch(u, e, u.index + n.from, d);else rc(e.state.doc, this.regexp, s, c, (t, n) => this.addMatch(n, e, t, d));
          t = t.update({
            filterFrom: s,
            filterTo: c,
            filter: (e, t) => e < s || t > c,
            add: l
          });
        }
      }
      return t;
    }
  },
  oc = /x/.unicode == null ? `g` : `gu`,
  sc = RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]`, oc),
  cc = {
    0: `null`,
    7: `bell`,
    8: `backspace`,
    10: `newline`,
    11: `vertical tab`,
    13: `carriage return`,
    27: `escape`,
    8203: `zero width space`,
    8204: `zero width non-joiner`,
    8205: `zero width joiner`,
    8206: `left-to-right mark`,
    8207: `right-to-left mark`,
    8232: `line separator`,
    8237: `left-to-right override`,
    8238: `right-to-left override`,
    8294: `left-to-right isolate`,
    8295: `right-to-left isolate`,
    8297: `pop directional isolate`,
    8233: `paragraph separator`,
    65279: `zero width no-break space`,
    65532: `object replacement`
  },
  lc = null;
function uc() {
  if (lc == null && typeof document < `u` && document.body) {
    let e = document.body.style;
    lc = (e.tabSize ?? e.MozTabSize) != null;
  }
  return lc || !1;
}
var dc = O.define({
  combine(e) {
    let t = Xt(e, {
      render: null,
      specialChars: sc,
      addSpecialChars: null
    });
    return (t.replaceTabs = !uc()) && (t.specialChars = RegExp(`	|` + t.specialChars.source, oc)), t.addSpecialChars && (t.specialChars = RegExp(t.specialChars.source + `|` + t.addSpecialChars.source, oc)), t;
  }
});
function fc(e = {}) {
  return [dc.of(e), mc()];
}
var pc = null;
function mc() {
  return pc ||= U.fromClass(class {
    constructor(e) {
      this.view = e, this.decorations = z.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(e.state.facet(dc)), this.decorations = this.decorator.createDeco(e);
    }
    makeDecorator(e) {
      return new ac({
        regexp: e.specialChars,
        decoration: (t, n, r) => {
          let {
              doc: i
            } = n.state,
            a = C(t[0], 0);
          if (a == 9) {
            let e = i.lineAt(r),
              t = n.state.tabSize,
              a = hn(e.text, t, r - e.from);
            return z.replace({
              widget: new vc((t - a % t) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[a] || (this.decorationCache[a] = z.replace({
            widget: new _c(e, a)
          }));
        },
        boundary: e.replaceTabs ? void 0 : /[^]/
      });
    }
    update(e) {
      let t = e.state.facet(dc);
      e.startState.facet(dc) == t ? this.decorations = this.decorator.updateDeco(e, this.decorations) : (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(e.view));
    }
  }, {
    decorations: e => e.decorations
  });
}
var hc = `•`;
function gc(e) {
  return e >= 32 ? hc : e == 10 ? `␤` : String.fromCharCode(9216 + e);
}
var _c = class extends Jn {
    constructor(e, t) {
      super(), this.options = e, this.code = t;
    }
    eq(e) {
      return e.code == this.code;
    }
    toDOM(e) {
      let t = gc(this.code),
        n = e.state.phrase(`Control character`) + ` ` + (cc[this.code] || `0x` + this.code.toString(16)),
        r = this.options.render && this.options.render(this.code, n, t);
      if (r) return r;
      let i = document.createElement(`span`);
      return i.textContent = t, i.title = n, i.setAttribute(`aria-label`, n), i.className = `cm-specialChar`, i;
    }
    ignoreEvent() {
      return !1;
    }
  },
  vc = class extends Jn {
    constructor(e) {
      super(), this.width = e;
    }
    eq(e) {
      return e.width == this.width;
    }
    toDOM() {
      let e = document.createElement(`span`);
      return e.textContent = `	`, e.className = `cm-tab`, e.style.width = this.width + `px`, e;
    }
    ignoreEvent() {
      return !1;
    }
  };
function yc() {
  return xc;
}
var bc = z.line({
    class: `cm-activeLine`
  }),
  xc = U.fromClass(class {
    constructor(e) {
      this.decorations = this.getDeco(e);
    }
    update(e) {
      (e.docChanged || e.selectionSet) && (this.decorations = this.getDeco(e.view));
    }
    getDeco(e) {
      let t = -1,
        n = [];
      for (let r of e.state.selection.ranges) {
        let i = e.lineBlockAt(r.head);
        i.from > t && (n.push(bc.range(i.from)), t = i.from);
      }
      return z.set(n);
    }
  }, {
    decorations: e => e.decorations
  }),
  Sc = class extends Jn {
    constructor(e) {
      super(), this.content = e;
    }
    toDOM(e) {
      let t = document.createElement(`span`);
      return t.className = `cm-placeholder`, t.style.pointerEvents = `none`, t.appendChild(typeof this.content == `string` ? document.createTextNode(this.content) : typeof this.content == `function` ? this.content(e) : this.content.cloneNode(!0)), t.setAttribute(`aria-hidden`, `true`), t;
    }
    coordsAt(e) {
      let t = e.firstChild ? ar(e.firstChild) : [];
      if (!t.length) return null;
      let n = window.getComputedStyle(e.parentNode),
        r = dr(t[0], n.direction != `rtl`),
        i = parseInt(n.lineHeight);
      return r.bottom - r.top > i * 1.5 ? {
        left: r.left,
        right: r.right,
        top: r.top,
        bottom: r.top + i
      } : r;
    }
    ignoreEvent() {
      return !1;
    }
  };
function Cc(e) {
  let t = U.fromClass(class {
    constructor(t) {
      this.view = t, this.placeholder = e ? z.set([z.widget({
        widget: new Sc(e),
        side: 1
      }).range(0)]) : z.none;
    }
    get decorations() {
      return this.view.state.doc.length ? z.none : this.placeholder;
    }
  }, {
    decorations: e => e.decorations
  });
  return typeof e == `string` ? [t, J.contentAttributes.of({
    "aria-placeholder": e
  })] : t;
}
var wc = 2e3;
function Tc(e, t, n) {
  let r = Math.min(t.line, n.line),
    i = Math.max(t.line, n.line),
    a = [];
  if (t.off > wc || n.off > wc || t.col < 0 || n.col < 0) {
    let o = Math.min(t.off, n.off),
      s = Math.max(t.off, n.off);
    for (let t = r; t <= i; t++) {
      let n = e.doc.line(t);
      n.length <= s && a.push(D.range(n.from + o, n.to + s));
    }
  } else {
    let o = Math.min(t.col, n.col),
      s = Math.max(t.col, n.col);
    for (let t = r; t <= i; t++) {
      let n = e.doc.line(t),
        r = gn(n.text, o, e.tabSize, !0);
      if (r < 0) a.push(D.cursor(n.to));else {
        let t = gn(n.text, s, e.tabSize);
        a.push(D.range(n.from + r, n.from + t));
      }
    }
  }
  return a;
}
function Ec(e, t) {
  let n = e.coordsAtPos(e.viewport.from);
  return n ? Math.round(Math.abs((n.left - t) / e.defaultCharacterWidth)) : -1;
}
function Dc(e, t) {
  let n = e.posAtCoords({
      x: t.clientX,
      y: t.clientY
    }, !1),
    r = e.state.doc.lineAt(n),
    i = n - r.from,
    a = i > wc ? -1 : i == r.length ? Ec(e, t.clientX) : hn(r.text, e.state.tabSize, n - r.from);
  return {
    line: r.number,
    col: a,
    off: i
  };
}
function Oc(e, t) {
  let n = Dc(e, t),
    r = e.state.selection;
  return n ? {
    update(e) {
      if (e.docChanged) {
        let t = e.changes.mapPos(e.startState.doc.line(n.line).from),
          i = e.state.doc.lineAt(t);
        n = {
          line: i.number,
          col: n.col,
          off: Math.min(n.off, i.length)
        }, r = r.map(e.changes);
      }
    },
    get(t, i, a) {
      let o = Dc(e, t);
      if (!o) return r;
      let s = Tc(e.state, n, o);
      return s.length ? a ? D.create(s.concat(r.ranges)) : D.create(s) : r;
    }
  } : null;
}
function kc(e) {
  let t = e?.eventFilter || (e => e.altKey && e.button == 0);
  return J.mouseSelectionStyle.of((e, n) => t(n) ? Oc(e, n) : null);
}
var Ac = {
    Alt: [18, e => !!e.altKey],
    Control: [17, e => !!e.ctrlKey],
    Shift: [16, e => !!e.shiftKey],
    Meta: [91, e => !!e.metaKey]
  },
  jc = {
    style: `cursor: crosshair`
  };
function Mc(e = {}) {
  let [t, n] = Ac[e.key || `Alt`],
    r = U.fromClass(class {
      constructor(e) {
        this.view = e, this.isDown = !1;
      }
      set(e) {
        this.isDown != e && (this.isDown = e, this.view.update([]));
      }
    }, {
      eventObservers: {
        keydown(e) {
          this.set(e.keyCode == t || n(e));
        },
        keyup(e) {
          (e.keyCode == t || !n(e)) && this.set(!1);
        },
        mousemove(e) {
          this.set(n(e));
        }
      }
    });
  return [r, J.contentAttributes.of(e => e.plugin(r)?.isDown ? jc : null)];
}
var Nc = `-10000px`,
  Pc = class {
    constructor(e, t, n, r) {
      this.facet = t, this.createTooltipView = n, this.removeTooltipView = r, this.input = e.state.facet(t), this.tooltips = this.input.filter(e => e);
      let i = null;
      this.tooltipViews = this.tooltips.map(e => i = n(e, i));
    }
    update(e, t) {
      var n;
      let r = e.state.facet(this.facet),
        i = r.filter(e => e);
      if (r === this.input) {
        for (let t of this.tooltipViews) t.update && t.update(e);
        return !1;
      }
      let a = [],
        o = t ? [] : null;
      for (let n = 0; n < i.length; n++) {
        let r = i[n],
          s = -1;
        if (r) {
          for (let e = 0; e < this.tooltips.length; e++) {
            let t = this.tooltips[e];
            t && t.create == r.create && (s = e);
          }
          if (s < 0) a[n] = this.createTooltipView(r, n ? a[n - 1] : null), o && (o[n] = !!r.above);else {
            let r = a[n] = this.tooltipViews[s];
            o && (o[n] = t[s]), r.update && r.update(e);
          }
        }
      }
      for (let e of this.tooltipViews) a.indexOf(e) < 0 && (this.removeTooltipView(e), (n = e.destroy) == null || n.call(e));
      return t && (o.forEach((e, n) => t[n] = e), t.length = o.length), this.input = r, this.tooltips = i, this.tooltipViews = a, !0;
    }
  };
function Fc(e) {
  let t = e.dom.ownerDocument.documentElement;
  return {
    top: 0,
    left: 0,
    bottom: t.clientHeight,
    right: t.clientWidth
  };
}
var Ic = O.define({
    combine: e => ({
      position: L.ios ? `absolute` : e.find(e => e.position)?.position || `fixed`,
      parent: e.find(e => e.parent)?.parent || null,
      tooltipSpace: e.find(e => e.tooltipSpace)?.tooltipSpace || Fc
    })
  }),
  Lc = new WeakMap(),
  Rc = U.fromClass(class {
    constructor(e) {
      this.view = e, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
      let t = e.state.facet(Ic);
      this.position = t.position, this.parent = t.parent, this.classes = e.themeClasses, this.createContainer(), this.measureReq = {
        read: this.readMeasure.bind(this),
        write: this.writeMeasure.bind(this),
        key: this
      }, this.resizeObserver = typeof ResizeObserver == `function` ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Pc(e, Hc, (e, t) => this.createTooltip(e, t), e => {
        this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
      }), this.above = this.manager.tooltips.map(e => !!e.above), this.intersectionObserver = typeof IntersectionObserver == `function` ? new IntersectionObserver(e => {
        Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
      }, {
        threshold: [1]
      }) : null, this.observeIntersection(), e.win.addEventListener(`resize`, this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
    }
    createContainer() {
      this.parent ? (this.container = document.createElement(`div`), this.container.style.position = `relative`, this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
    }
    observeIntersection() {
      if (this.intersectionObserver) {
        this.intersectionObserver.disconnect();
        for (let e of this.manager.tooltipViews) this.intersectionObserver.observe(e.dom);
      }
    }
    measureSoon() {
      this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
        this.measureTimeout = -1, this.maybeMeasure();
      }, 50));
    }
    update(e) {
      e.transactions.length && (this.lastTransaction = Date.now());
      let t = this.manager.update(e, this.above);
      t && this.observeIntersection();
      let n = t || e.geometryChanged,
        r = e.state.facet(Ic);
      if (r.position != this.position && !this.madeAbsolute) {
        this.position = r.position;
        for (let e of this.manager.tooltipViews) e.dom.style.position = this.position;
        n = !0;
      }
      if (r.parent != this.parent) {
        this.parent && this.container.remove(), this.parent = r.parent, this.createContainer();
        for (let e of this.manager.tooltipViews) this.container.appendChild(e.dom);
        n = !0;
      } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
      n && this.maybeMeasure();
    }
    createTooltip(e, t) {
      let n = e.create(this.view),
        r = t ? t.dom : null;
      if (n.dom.classList.add(`cm-tooltip`), e.arrow && !n.dom.querySelector(`.cm-tooltip > .cm-tooltip-arrow`)) {
        let e = document.createElement(`div`);
        e.className = `cm-tooltip-arrow`, n.dom.appendChild(e);
      }
      return n.dom.style.position = this.position, n.dom.style.top = Nc, n.dom.style.left = `0px`, this.container.insertBefore(n.dom, r), n.mount && n.mount(this.view), this.resizeObserver && this.resizeObserver.observe(n.dom), n;
    }
    destroy() {
      var e, t, n;
      this.view.win.removeEventListener(`resize`, this.measureSoon);
      for (let t of this.manager.tooltipViews) t.dom.remove(), (e = t.destroy) == null || e.call(t);
      this.parent && this.container.remove(), (t = this.resizeObserver) == null || t.disconnect(), (n = this.intersectionObserver) == null || n.disconnect(), clearTimeout(this.measureTimeout);
    }
    readMeasure() {
      let e = 1,
        t = 1,
        n = !1;
      if (this.position == `fixed` && this.manager.tooltipViews.length) {
        let {
          dom: e
        } = this.manager.tooltipViews[0];
        if (L.safari) {
          let t = e.getBoundingClientRect();
          n = Math.abs(t.top + 1e4) > 1 || Math.abs(t.left) > 1;
        } else n = !!e.offsetParent && e.offsetParent != this.container.ownerDocument.body;
      }
      if (n || this.position == `absolute`) {
        if (this.parent) {
          let n = this.parent.getBoundingClientRect();
          n.width && n.height && (e = n.width / this.parent.offsetWidth, t = n.height / this.parent.offsetHeight);
        } else ({
          scaleX: e,
          scaleY: t
        } = this.view.viewState);
      }
      let r = this.view.scrollDOM.getBoundingClientRect(),
        i = Ti(this.view);
      return {
        visible: {
          left: r.left + i.left,
          top: r.top + i.top,
          right: r.right - i.right,
          bottom: r.bottom - i.bottom
        },
        parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
        pos: this.manager.tooltips.map((e, t) => {
          let n = this.manager.tooltipViews[t];
          return n.getCoords ? n.getCoords(e.pos) : this.view.coordsAtPos(e.pos);
        }),
        size: this.manager.tooltipViews.map(({
          dom: e
        }) => e.getBoundingClientRect()),
        space: this.view.state.facet(Ic).tooltipSpace(this.view),
        scaleX: e,
        scaleY: t,
        makeAbsolute: n
      };
    }
    writeMeasure(e) {
      if (e.makeAbsolute) {
        this.madeAbsolute = !0, this.position = `absolute`;
        for (let e of this.manager.tooltipViews) e.dom.style.position = `absolute`;
      }
      let {
          visible: t,
          space: n,
          scaleX: r,
          scaleY: i
        } = e,
        a = [];
      for (let o = 0; o < this.manager.tooltips.length; o++) {
        let s = this.manager.tooltips[o],
          c = this.manager.tooltipViews[o],
          {
            dom: l
          } = c,
          u = e.pos[o],
          d = e.size[o];
        if (!u || s.clip !== !1 && (u.bottom <= Math.max(t.top, n.top) || u.top >= Math.min(t.bottom, n.bottom) || u.right < Math.max(t.left, n.left) - .1 || u.left > Math.min(t.right, n.right) + .1)) {
          l.style.top = Nc;
          continue;
        }
        let f = s.arrow ? c.dom.querySelector(`.cm-tooltip-arrow`) : null,
          p = f ? 7 : 0,
          m = d.right - d.left,
          h = Lc.get(c) ?? d.bottom - d.top,
          g = c.offset || Vc,
          _ = this.view.textDirection == B.LTR,
          v = d.width > n.right - n.left ? _ ? n.left : n.right - d.width : _ ? Math.max(n.left, Math.min(u.left - (f ? 14 : 0) + g.x, n.right - m)) : Math.min(Math.max(n.left, u.left - m + (f ? 14 : 0) - g.x), n.right - m),
          y = this.above[o];
        !s.strictSide && (y ? u.top - h - p - g.y < n.top : u.bottom + h + p + g.y > n.bottom) && y == n.bottom - u.bottom > u.top - n.top && (y = this.above[o] = !y);
        let ee = (y ? u.top - n.top : n.bottom - u.bottom) - p;
        if (ee < h && c.resize !== !1) {
          if (ee < this.view.defaultLineHeight) {
            l.style.top = Nc;
            continue;
          }
          Lc.set(c, h), l.style.height = (h = ee) / i + `px`;
        } else l.style.height && (l.style.height = ``);
        let te = y ? u.top - h - p - g.y : u.bottom + p + g.y,
          ne = v + m;
        if (c.overlap !== !0) for (let e of a) e.left < ne && e.right > v && e.top < te + h && e.bottom > te && (te = y ? e.top - h - 2 - p : e.bottom + p + 2);
        if (this.position == `absolute` ? (l.style.top = (te - e.parent.top) / i + `px`, zc(l, (v - e.parent.left) / r)) : (l.style.top = te / i + `px`, zc(l, v / r)), f) {
          let e = u.left + (_ ? g.x : -g.x) - (v + 14 - 7);
          f.style.left = e / r + `px`;
        }
        c.overlap !== !0 && a.push({
          left: v,
          top: te,
          right: ne,
          bottom: te + h
        }), l.classList.toggle(`cm-tooltip-above`, y), l.classList.toggle(`cm-tooltip-below`, !y), c.positioned && c.positioned(e.space);
      }
    }
    maybeMeasure() {
      if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let e of this.manager.tooltipViews) e.dom.style.top = Nc;
    }
  }, {
    eventObservers: {
      scroll() {
        this.maybeMeasure();
      }
    }
  });
function zc(e, t) {
  let n = parseInt(e.style.left, 10);
  (isNaN(n) || Math.abs(t - n) > 1) && (e.style.left = t + `px`);
}
var Bc = J.baseTheme({
    ".cm-tooltip": {
      zIndex: 500,
      boxSizing: `border-box`
    },
    "&light .cm-tooltip": {
      border: `1px solid #bbb`,
      backgroundColor: `#f5f5f5`
    },
    "&light .cm-tooltip-section:not(:first-child)": {
      borderTop: `1px solid #bbb`
    },
    "&dark .cm-tooltip": {
      backgroundColor: `#333338`,
      color: `white`
    },
    ".cm-tooltip-arrow": {
      height: `7px`,
      width: `14px`,
      position: `absolute`,
      zIndex: -1,
      overflow: `hidden`,
      "&:before, &:after": {
        content: `''`,
        position: `absolute`,
        width: 0,
        height: 0,
        borderLeft: `7px solid transparent`,
        borderRight: `7px solid transparent`
      },
      ".cm-tooltip-above &": {
        bottom: `-7px`,
        "&:before": {
          borderTop: `7px solid #bbb`
        },
        "&:after": {
          borderTop: `7px solid #f5f5f5`,
          bottom: `1px`
        }
      },
      ".cm-tooltip-below &": {
        top: `-7px`,
        "&:before": {
          borderBottom: `7px solid #bbb`
        },
        "&:after": {
          borderBottom: `7px solid #f5f5f5`,
          top: `1px`
        }
      }
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": {
        borderTopColor: `#333338`,
        borderBottomColor: `#333338`
      },
      "&:after": {
        borderTopColor: `transparent`,
        borderBottomColor: `transparent`
      }
    }
  }),
  Vc = {
    x: 0,
    y: 0
  },
  Hc = O.define({
    enables: [Rc, Bc]
  }),
  Uc = O.define({
    combine: e => e.reduce((e, t) => e.concat(t), [])
  }),
  Wc = class e {
    static create(t) {
      return new e(t);
    }
    constructor(e) {
      this.view = e, this.mounted = !1, this.dom = document.createElement(`div`), this.dom.classList.add(`cm-tooltip-hover`), this.manager = new Pc(e, Uc, (e, t) => this.createHostedView(e, t), e => e.dom.remove());
    }
    createHostedView(e, t) {
      let n = e.create(this.view);
      return n.dom.classList.add(`cm-tooltip-section`), this.dom.insertBefore(n.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && n.mount && n.mount(this.view), n;
    }
    mount(e) {
      for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
      this.mounted = !0;
    }
    positioned(e) {
      for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
    }
    update(e) {
      this.manager.update(e);
    }
    destroy() {
      var e;
      for (let t of this.manager.tooltipViews) (e = t.destroy) == null || e.call(t);
    }
    passProp(e) {
      let t;
      for (let n of this.manager.tooltipViews) {
        let r = n[e];
        if (r !== void 0) {
          if (t === void 0) t = r;else if (t !== r) return;
        }
      }
      return t;
    }
    get offset() {
      return this.passProp(`offset`);
    }
    get getCoords() {
      return this.passProp(`getCoords`);
    }
    get overlap() {
      return this.passProp(`overlap`);
    }
    get resize() {
      return this.passProp(`resize`);
    }
  },
  Gc = Hc.compute([Uc], e => {
    let t = e.facet(Uc);
    return t.length === 0 ? null : {
      pos: Math.min(...t.map(e => e.pos)),
      end: Math.max(...t.map(e => e.end ?? e.pos)),
      create: Wc.create,
      above: t[0].above,
      arrow: t.some(e => e.arrow)
    };
  }),
  Kc = O.define(),
  qc = class {
    constructor(e, t, n, r, i, a) {
      this.view = e, this.source = t, this.field = n, this.locked = r, this.setHover = i, this.hoverTime = a, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
        x: 0,
        y: 0,
        target: e.dom,
        time: 0
      }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener(`mouseleave`, this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener(`mousemove`, this.mousemove = this.mousemove.bind(this));
    }
    update(e) {
      this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
    }
    get active() {
      return this.view.state.field(this.field);
    }
    checkHover() {
      if (this.hoverTimeout = -1, this.active.length) return;
      let e = Date.now() - this.lastMove.time;
      e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
    }
    startHover() {
      clearTimeout(this.restartTimeout);
      let {
          view: e,
          lastMove: t
        } = this,
        n = e.docView.tile.nearest(t.target);
      if (!n) return;
      let r,
        i = 1;
      if (n.isWidget()) r = n.posAtStart;else {
        if (r = e.posAtCoords(t), r == null) return;
        let n = e.coordsAtPos(r);
        if (!n || t.y < n.top || t.y > n.bottom || t.x < n.left - e.defaultCharacterWidth || t.x > n.right + e.defaultCharacterWidth) return;
        let a = e.bidiSpans(e.state.doc.lineAt(r)).find(e => e.from <= r && e.to >= r),
          o = a && a.dir == B.RTL ? -1 : 1;
        i = t.x < n.left ? -o : o;
      }
      this.activateHover(e, r, i);
    }
    activateHover(e, t, n, r) {
      let i = this.source(e, t, n),
        a = t => {
          if (t && !(Array.isArray(t) && !t.length)) {
            let n = Array.isArray(t) ? t : [t];
            r && this.locked.set(n, r), e.dispatch({
              effects: this.setHover.of(n)
            });
          }
        };
      if (i && `then` in i) {
        let n = this.pending = {
          pos: t
        };
        i.then(e => {
          this.pending == n && (this.pending = null, a(e));
        }, t => H(e.state, t, `hover tooltip`));
      } else a(i);
    }
    get tooltip() {
      let e = this.view.plugin(Rc),
        t = e ? e.manager.tooltips.findIndex(e => e.create == Wc.create) : -1;
      return t > -1 ? e.manager.tooltipViews[t] : null;
    }
    mousemove(e) {
      this.lastMove = {
        x: e.clientX,
        y: e.clientY,
        target: e.target,
        time: Date.now()
      }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
      let {
        active: t,
        tooltip: n
      } = this;
      if (t.length && !this.locked.has(t) && n && !Yc(n.dom, e) || this.pending) {
        let {
            pos: n
          } = t[0] || this.pending,
          r = t[0]?.end ?? n;
        (n == r ? this.view.posAtCoords(this.lastMove) != n : !Xc(this.view, n, r, e.clientX, e.clientY)) && (this.view.dispatch({
          effects: this.setHover.of([])
        }), this.pending = null);
      }
    }
    mouseleave(e) {
      clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
      let {
        active: t
      } = this;
      if (t.length && !this.locked.has(t)) {
        let {
          tooltip: t
        } = this;
        t && t.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(t.dom) : this.view.dispatch({
          effects: this.setHover.of([])
        });
      }
    }
    watchTooltipLeave(e) {
      let t = n => {
        e.removeEventListener(`mouseleave`, t);
        let {
          active: r
        } = this;
        r.length && !this.locked.has(r) && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({
          effects: this.setHover.of([])
        });
      };
      e.addEventListener(`mouseleave`, t);
    }
    destroy() {
      clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener(`mouseleave`, this.mouseleave), this.view.dom.removeEventListener(`mousemove`, this.mousemove);
    }
  },
  Jc = 4;
function Yc(e, t) {
  let {
      left: n,
      right: r,
      top: i,
      bottom: a
    } = e.getBoundingClientRect(),
    o;
  if (o = e.querySelector(`.cm-tooltip-arrow`)) {
    let e = o.getBoundingClientRect();
    i = Math.min(e.top, i), a = Math.max(e.bottom, a);
  }
  return t.clientX >= n - Jc && t.clientX <= r + Jc && t.clientY >= i - Jc && t.clientY <= a + Jc;
}
function Xc(e, t, n, r, i, a) {
  let o = e.scrollDOM.getBoundingClientRect(),
    s = e.documentTop + e.documentPadding.top + e.contentHeight;
  if (o.left > r || o.right < r || o.top > i || Math.min(o.bottom, s) < i) return !1;
  let c = e.posAtCoords({
    x: r,
    y: i
  }, !1);
  return c >= t && c <= n;
}
function Zc(e, t = {}) {
  let n = A.define(),
    r = new WeakMap(),
    i = k.define({
      create() {
        return [];
      },
      update(e, a) {
        let o = r.get(e);
        if (e.length && (t.hideOnChange && (a.docChanged || a.selection) || o && o(a) ? e = [] : t.hideOn && (e = e.filter(e => !t.hideOn(a, e)))), a.docChanged && e.length) {
          let t = [];
          for (let n of e) {
            let e = a.changes.mapPos(n.pos, -1, w.TrackDel);
            if (e != null) {
              let r = Object.assign(Object.create(null), n);
              r.pos = e, r.end != null && (r.end = a.changes.mapPos(r.end)), t.push(r);
            }
          }
          e = t;
        }
        for (let t of a.effects) t.is(n) && (e = t.value, o = void 0), (t.is(el) && !t.value || t.value == i) && (e = []);
        return e.length && o && r.set(e, o), e;
      },
      provide: e => Uc.from(e)
    }),
    a = U.define(a => new qc(a, e, i, r, n, t.hoverTime || 300));
  return {
    active: i,
    extension: [i, a, Kc.of(a), Gc]
  };
}
function Qc(e, t, n, r = {}) {
  let i = e.state.facet(Kc).map(t => e.plugin(t)).filter(e => !!e);
  if (r.tooltip && r.tooltip.active) {
    let e = i.find(e => e.field == r.tooltip.active);
    e && (i = [e]);
  }
  for (let a of i) a.activateHover(e, t, n, r.until ?? (() => !1));
}
function $c(e, t) {
  let n = e.plugin(Rc);
  if (!n) return null;
  let r = n.manager.tooltips.indexOf(t);
  return r < 0 ? null : n.manager.tooltipViews[r];
}
var el = A.define(),
  tl = O.define({
    combine(e) {
      let t, n;
      for (let r of e) t ||= r.topContainer, n ||= r.bottomContainer;
      return {
        topContainer: t,
        bottomContainer: n
      };
    }
  });
function nl(e, t) {
  let n = e.plugin(rl),
    r = n ? n.specs.indexOf(t) : -1;
  return r > -1 ? n.panels[r] : null;
}
var rl = U.fromClass(class {
    constructor(e) {
      this.input = e.state.facet(ol), this.specs = this.input.filter(e => e), this.panels = this.specs.map(t => t(e));
      let t = e.state.facet(tl);
      this.top = new il(e, !0, t.topContainer), this.bottom = new il(e, !1, t.bottomContainer), this.top.sync(this.panels.filter(e => e.top)), this.bottom.sync(this.panels.filter(e => !e.top));
      for (let e of this.panels) e.dom.classList.add(`cm-panel`), e.mount && e.mount();
    }
    update(e) {
      let t = e.state.facet(tl);
      this.top.container != t.topContainer && (this.top.sync([]), this.top = new il(e.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new il(e.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
      let n = e.state.facet(ol);
      if (n != this.input) {
        let t = n.filter(e => e),
          r = [],
          i = [],
          a = [],
          o = [];
        for (let n of t) {
          let t = this.specs.indexOf(n),
            s;
          t < 0 ? (s = n(e.view), o.push(s)) : (s = this.panels[t], s.update && s.update(e)), r.push(s), (s.top ? i : a).push(s);
        }
        this.specs = t, this.panels = r, this.top.sync(i), this.bottom.sync(a);
        for (let e of o) e.dom.classList.add(`cm-panel`), e.mount && e.mount();
      } else for (let t of this.panels) t.update && t.update(e);
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([]);
    }
  }, {
    provide: e => J.scrollMargins.of(t => {
      let n = t.plugin(e);
      return n && {
        top: n.top.scrollMargin(),
        bottom: n.bottom.scrollMargin()
      };
    })
  }),
  il = class {
    constructor(e, t, n) {
      this.view = e, this.top = t, this.container = n, this.dom = void 0, this.classes = ``, this.panels = [], this.syncClasses();
    }
    sync(e) {
      for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
      this.panels = e, this.syncDOM();
    }
    syncDOM() {
      if (this.panels.length == 0) {
        this.dom &&= (this.dom.remove(), void 0);
        return;
      }
      if (!this.dom) {
        this.dom = document.createElement(`div`), this.dom.className = this.top ? `cm-panels cm-panels-top` : `cm-panels cm-panels-bottom`;
        let e = this.container || this.view.dom;
        e.insertBefore(this.dom, this.top ? e.firstChild : null);
      }
      let e = this.dom.firstChild;
      for (let t of this.panels) if (t.dom.parentNode == this.dom) {
        for (; e != t.dom;) e = al(e);
        e = e.nextSibling;
      } else this.dom.insertBefore(t.dom, e);
      for (; e;) e = al(e);
    }
    scrollMargin() {
      return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
    }
    syncClasses() {
      if (!(!this.container || this.classes == this.view.themeClasses)) {
        for (let e of this.classes.split(` `)) e && this.container.classList.remove(e);
        for (let e of (this.classes = this.view.themeClasses).split(` `)) e && this.container.classList.add(e);
      }
    }
  };
function al(e) {
  let t = e.nextSibling;
  return e.remove(), t;
}
var ol = O.define({
  enables: rl
});
function sl(e, t) {
  let n,
    r = new Promise(e => n = e),
    i = e => dl(e, t, n);
  e.state.field(cl, !1) ? e.dispatch({
    effects: ll.of(i)
  }) : e.dispatch({
    effects: A.appendConfig.of(cl.init(() => [i]))
  });
  let a = ul.of(i);
  return {
    close: a,
    result: r.then(t => ((e.win.queueMicrotask || (t => e.win.setTimeout(t, 10)))(() => {
      e.state.field(cl).indexOf(i) > -1 && e.dispatch({
        effects: a
      });
    }), t))
  };
}
var cl = k.define({
    create() {
      return [];
    },
    update(e, t) {
      for (let n of t.effects) n.is(ll) ? e = [n.value].concat(e) : n.is(ul) && (e = e.filter(e => e != n.value));
      return e;
    },
    provide: e => ol.computeN([e], t => t.field(e))
  }),
  ll = A.define(),
  ul = A.define();
function dl(e, t, n) {
  let r = t.content ? t.content(e, () => o(null)) : null;
  if (!r) {
    if (r = An(`form`), t.input) {
      let e = An(`input`, t.input);
      /^(text|password|number|email|tel|url)$/.test(e.type) && e.classList.add(`cm-textfield`), e.name ||= `input`, r.appendChild(An(`label`, (t.label || ``) + `: `, e));
    } else r.appendChild(document.createTextNode(t.label || ``));
    r.appendChild(document.createTextNode(` `)), r.appendChild(An(`button`, {
      class: `cm-button`,
      type: `submit`
    }, t.submitLabel || `OK`));
  }
  let i = r.nodeName == `FORM` ? [r] : r.querySelectorAll(`form`);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    t.addEventListener(`keydown`, e => {
      e.keyCode == 27 ? (e.preventDefault(), o(null)) : e.keyCode == 13 && (e.preventDefault(), o(t));
    }), t.addEventListener(`submit`, e => {
      e.preventDefault(), o(t);
    });
  }
  let a = An(`div`, r, An(`button`, {
    onclick: () => o(null),
    "aria-label": e.state.phrase(`close`),
    class: `cm-dialog-close`,
    type: `button`
  }, [`×`]));
  t.class && (a.className = t.class), a.classList.add(`cm-dialog`);
  function o(t) {
    a.contains(a.ownerDocument.activeElement) && e.focus(), n(t);
  }
  return {
    dom: a,
    top: t.top,
    mount: () => {
      if (t.focus) {
        let e;
        e = typeof t.focus == `string` ? r.querySelector(t.focus) : r.querySelector(`input`) || r.querySelector(`button`), e && `select` in e ? e.select() : e && `focus` in e && e.focus();
      }
    }
  };
}
var fl = class extends Zt {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return !1;
  }
  destroy(e) {}
};
fl.prototype.elementClass = ``, fl.prototype.toDOM = void 0, fl.prototype.mapMode = w.TrackBefore, fl.prototype.startSide = fl.prototype.endSide = -1, fl.prototype.point = !0;
var pl = O.define(),
  ml = O.define(),
  hl = {
    class: ``,
    renderEmptyElements: !1,
    elementStyle: ``,
    markers: () => P.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {},
    side: `before`
  },
  gl = O.define();
function _l(e) {
  return [yl(), gl.of({
    ...hl,
    ...e
  })];
}
var vl = O.define({
  combine: e => e.some(e => e)
});
function yl(e) {
  let t = [bl];
  return e && e.fixed === !1 && t.push(vl.of(!0)), t;
}
var bl = U.fromClass(class {
  constructor(e) {
    this.view = e, this.domAfter = null, this.prevViewport = e.viewport, this.dom = document.createElement(`div`), this.dom.className = `cm-gutters cm-gutters-before`, this.dom.setAttribute(`aria-hidden`, `true`), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + `px`, this.gutters = e.state.facet(gl).map(t => new wl(e, t)), this.fixed = !e.state.facet(vl);
    for (let e of this.gutters) e.config.side == `after` ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = `sticky`), this.syncGutters(!1), e.scrollDOM.insertBefore(this.dom, e.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement(`div`), this.domAfter.className = `cm-gutters cm-gutters-after`, this.domAfter.setAttribute(`aria-hidden`, `true`), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + `px`, this.domAfter.style.position = this.fixed ? `sticky` : ``, this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(e) {
    if (this.updateGutters(e)) {
      let t = this.prevViewport,
        n = e.view.viewport,
        r = Math.min(t.to, n.to) - Math.max(t.from, n.from);
      this.syncGutters(r < (n.to - n.from) * .8);
    }
    if (e.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + `px`;
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet(vl) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? `sticky` : ``, this.domAfter && (this.domAfter.style.position = this.fixed ? `sticky` : ``)), this.prevViewport = e.view.viewport;
  }
  syncGutters(e) {
    let t = this.dom.nextSibling;
    e && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let n = P.iter(this.view.state.facet(pl), this.view.viewport.from),
      r = [],
      i = this.gutters.map(e => new Cl(e, this.view.viewport, -this.view.documentPadding.top));
    for (let e of this.view.viewportLineBlocks) if (r.length && (r = []), Array.isArray(e.type)) {
      let t = !0;
      for (let a of e.type) if (a.type == R.Text && t) {
        Sl(n, r, a.from);
        for (let e of i) e.line(this.view, a, r);
        t = !1;
      } else if (a.widget) for (let e of i) e.widget(this.view, a);
    } else if (e.type == R.Text) {
      Sl(n, r, e.from);
      for (let t of i) t.line(this.view, e, r);
    } else if (e.widget) for (let t of i) t.widget(this.view, e);
    for (let e of i) e.finish();
    e && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(e) {
    let t = e.startState.facet(gl),
      n = e.state.facet(gl),
      r = e.docChanged || e.heightChanged || e.viewportChanged || !P.eq(e.startState.facet(pl), e.state.facet(pl), e.view.viewport.from, e.view.viewport.to);
    if (t == n) for (let t of this.gutters) t.update(e) && (r = !0);else {
      r = !0;
      let i = [];
      for (let r of n) {
        let n = t.indexOf(r);
        n < 0 ? i.push(new wl(this.view, r)) : (this.gutters[n].update(e), i.push(this.gutters[n]));
      }
      for (let e of this.gutters) e.dom.remove(), i.indexOf(e) < 0 && e.destroy();
      for (let e of i) e.config.side == `after` ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
      this.gutters = i;
    }
    return r;
  }
  destroy() {
    for (let e of this.gutters) e.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: e => J.scrollMargins.of(t => {
    let n = t.plugin(e);
    if (!n || n.gutters.length == 0 || !n.fixed) return null;
    let r = n.dom.offsetWidth * t.scaleX,
      i = n.domAfter ? n.domAfter.offsetWidth * t.scaleX : 0;
    return t.textDirection == B.LTR ? {
      left: r,
      right: i
    } : {
      right: r,
      left: i
    };
  })
});
function xl(e) {
  return Array.isArray(e) ? e : [e];
}
function Sl(e, t, n) {
  for (; e.value && e.from <= n;) e.from == n && t.push(e.value), e.next();
}
var Cl = class {
    constructor(e, t, n) {
      this.gutter = e, this.height = n, this.i = 0, this.cursor = P.iter(e.markers, t.from);
    }
    addElement(e, t, n) {
      let {
          gutter: r
        } = this,
        i = (t.top - this.height) / e.scaleY,
        a = t.height / e.scaleY;
      if (this.i == r.elements.length) {
        let t = new Tl(e, a, i, n);
        r.elements.push(t), r.dom.appendChild(t.dom);
      } else r.elements[this.i].update(e, a, i, n);
      this.height = t.bottom, this.i++;
    }
    line(e, t, n) {
      let r = [];
      Sl(this.cursor, r, t.from), n.length && (r = r.concat(n));
      let i = this.gutter.config.lineMarker(e, t, r);
      i && r.unshift(i);
      let a = this.gutter;
      r.length == 0 && !a.config.renderEmptyElements || this.addElement(e, t, r);
    }
    widget(e, t) {
      let n = this.gutter.config.widgetMarker(e, t.widget, t),
        r = n ? [n] : null;
      for (let n of e.state.facet(ml)) {
        let i = n(e, t.widget, t);
        i && (r ||= []).push(i);
      }
      r && this.addElement(e, t, r);
    }
    finish() {
      let e = this.gutter;
      for (; e.elements.length > this.i;) {
        let t = e.elements.pop();
        e.dom.removeChild(t.dom), t.destroy();
      }
    }
  },
  wl = class {
    constructor(e, t) {
      this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement(`div`), this.dom.className = `cm-gutter` + (this.config.class ? ` ` + this.config.class : ``);
      for (let n in t.domEventHandlers) this.dom.addEventListener(n, r => {
        let i = r.target,
          a;
        if (i != this.dom && this.dom.contains(i)) {
          for (; i.parentNode != this.dom;) i = i.parentNode;
          let e = i.getBoundingClientRect();
          a = (e.top + e.bottom) / 2;
        } else a = r.clientY;
        let o = e.lineBlockAtHeight(a - e.documentTop);
        t.domEventHandlers[n](e, o, r) && r.preventDefault();
      });
      this.markers = xl(t.markers(e)), t.initialSpacer && (this.spacer = new Tl(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += `visibility: hidden; pointer-events: none`);
    }
    update(e) {
      let t = this.markers;
      if (this.markers = xl(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
        let t = this.config.updateSpacer(this.spacer.markers[0], e);
        t != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [t]);
      }
      let n = e.view.viewport;
      return !P.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
    }
    destroy() {
      for (let e of this.elements) e.destroy();
    }
  },
  Tl = class {
    constructor(e, t, n, r) {
      this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement(`div`), this.dom.className = `cm-gutterElement`, this.update(e, t, n, r);
    }
    update(e, t, n, r) {
      this.height != t && (this.height = t, this.dom.style.height = t + `px`), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + `px` : ``), El(this.markers, r) || this.setMarkers(e, r);
    }
    setMarkers(e, t) {
      let n = `cm-gutterElement`,
        r = this.dom.firstChild;
      for (let i = 0, a = 0;;) {
        let o = a,
          s = i < t.length ? t[i++] : null,
          c = !1;
        if (s) {
          let e = s.elementClass;
          e && (n += ` ` + e);
          for (let e = a; e < this.markers.length; e++) if (this.markers[e].compare(s)) {
            o = e, c = !0;
            break;
          }
        } else o = this.markers.length;
        for (; a < o;) {
          let e = this.markers[a++];
          if (e.toDOM) {
            e.destroy(r);
            let t = r.nextSibling;
            r.remove(), r = t;
          }
        }
        if (!s) break;
        s.toDOM && (c ? r = r.nextSibling : this.dom.insertBefore(s.toDOM(e), r)), c && a++;
      }
      this.dom.className = n, this.markers = t;
    }
    destroy() {
      this.setMarkers(null, []);
    }
  };
function El(e, t) {
  if (e.length != t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!e[n].compare(t[n])) return !1;
  return !0;
}
var Dl = O.define(),
  Ol = O.define(),
  kl = O.define({
    combine(e) {
      return Xt(e, {
        formatNumber: String,
        domEventHandlers: {}
      }, {
        domEventHandlers(e, t) {
          let n = Object.assign({}, e);
          for (let e in t) {
            let r = n[e],
              i = t[e];
            n[e] = r ? (e, t, n) => r(e, t, n) || i(e, t, n) : i;
          }
          return n;
        }
      });
    }
  }),
  Al = class extends fl {
    constructor(e) {
      super(), this.number = e;
    }
    eq(e) {
      return this.number == e.number;
    }
    toDOM() {
      return document.createTextNode(this.number);
    }
  };
function jl(e, t) {
  return e.state.facet(kl).formatNumber(t, e.state);
}
var Ml = gl.compute([kl], e => ({
  class: `cm-lineNumbers`,
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Dl);
  },
  lineMarker(e, t, n) {
    return n.some(e => e.toDOM) ? null : new Al(jl(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, n) => {
    for (let r of e.state.facet(Ol)) {
      let i = r(e, t, n);
      if (i) return i;
    }
    return null;
  },
  lineMarkerChange: e => e.startState.facet(kl) != e.state.facet(kl),
  initialSpacer(e) {
    return new Al(jl(e, Pl(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = jl(t.view, Pl(t.view.state.doc.lines));
    return n == e.number ? e : new Al(n);
  },
  domEventHandlers: e.facet(kl).domEventHandlers,
  side: `before`
}));
function Nl(e = {}) {
  return [kl.of(e), yl(), Ml];
}
function Pl(e) {
  let t = 9;
  for (; t < e;) t = t * 10 + 9;
  return t;
}
var Fl = new class extends fl {
    constructor() {
      super(...arguments), this.elementClass = `cm-activeLineGutter`;
    }
  }(),
  Il = pl.compute([`selection`], e => {
    let t = [],
      n = -1;
    for (let r of e.selection.ranges) {
      let i = e.doc.lineAt(r.head).from;
      i > n && (n = i, t.push(Fl.range(i)));
    }
    return P.of(t);
  });
function Ll() {
  return Il;
}
var Rl = new i();
function zl(e) {
  return O.define({
    combine: e ? t => t.concat(e) : void 0
  });
}
var Bl = new i(),
  Y = class {
    constructor(e, t, n = [], r = ``) {
      this.data = e, this.name = r, N.prototype.hasOwnProperty(`tree`) || Object.defineProperty(N.prototype, "tree", {
        get() {
          return X(this);
        }
      }), this.parser = t, this.extension = [Zl.of(this), N.languageData.of((e, t, n) => {
        let r = Vl(e, t, n),
          i = r.type.prop(Rl);
        if (!i) return [];
        let a = e.facet(i),
          o = r.type.prop(Bl);
        if (o) {
          let i = r.resolve(t - r.from, n);
          for (let t of o) if (t.test(i, e)) {
            let n = e.facet(t.facet);
            return t.type == `replace` ? n : n.concat(a);
          }
        }
        return a;
      })].concat(n);
    }
    isActiveAt(e, t, n = -1) {
      return Vl(e, t, n).type.prop(Rl) == this.data;
    }
    findRegions(t) {
      let n = t.facet(Zl);
      if (n?.data == this.data) return [{
        from: 0,
        to: t.doc.length
      }];
      if (!n || !n.allowsNesting) return [];
      let r = [],
        a = (t, n) => {
          if (t.prop(Rl) == this.data) {
            r.push({
              from: n,
              to: n + t.length
            });
            return;
          }
          let o = t.prop(i.mounted);
          if (o) {
            if (o.tree.prop(Rl) == this.data) {
              if (o.overlay) for (let e of o.overlay) r.push({
                from: e.from + n,
                to: e.to + n
              });else r.push({
                from: n,
                to: n + t.length
              });
              return;
            }
            if (o.overlay) {
              let e = r.length;
              if (a(o.tree, o.overlay[0].from + n), r.length > e) return;
            }
          }
          for (let r = 0; r < t.children.length; r++) {
            let i = t.children[r];
            i instanceof e && a(i, t.positions[r] + n);
          }
        };
      return a(X(t), 0), r;
    }
    get allowsNesting() {
      return !0;
    }
  };
Y.setState = A.define();
function Vl(e, t, n) {
  let i = e.facet(Zl),
    a = X(e).topNode;
  if (!i || i.allowsNesting) for (let e = a; e; e = e.enter(t, n, r.ExcludeBuffers | r.EnterBracketed)) e.type.isTop && (a = e);
  return a;
}
var Hl = class e extends Y {
  constructor(e, t, n) {
    super(e, t, [], n), this.parser = t;
  }
  static define(t) {
    let n = zl(t.languageData);
    return new e(n, t.parser.configure({
      props: [Rl.add(e => e.isTop ? n : void 0)]
    }), t.name);
  }
  configure(t, n) {
    return new e(this.data, this.parser.configure(t), n || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
};
function X(t) {
  let n = t.field(Y.state, !1);
  return n ? n.tree : e.empty;
}
var Ul = class {
    constructor(e) {
      this.doc = e, this.cursorPos = 0, this.string = ``, this.cursor = e.iter();
    }
    get length() {
      return this.doc.length;
    }
    syncTo(e) {
      return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
    }
    chunk(e) {
      return this.syncTo(e), this.string;
    }
    get lineChunks() {
      return !0;
    }
    read(e, t) {
      let n = this.cursorPos - this.string.length;
      return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n);
    }
  },
  Wl = null,
  Gl = class t {
    constructor(e, t, n = [], r, i, a, o, s) {
      this.parser = e, this.state = t, this.fragments = n, this.tree = r, this.treeLen = i, this.viewport = a, this.skipped = o, this.scheduleOn = s, this.parse = null, this.tempSkipped = [];
    }
    static create(n, r, i) {
      return new t(n, r, [], e.empty, 0, i, [], null);
    }
    startParse() {
      return this.parser.startParse(new Ul(this.state.doc), this.fragments);
    }
    work(t, n) {
      return n != null && n >= this.state.doc.length && (n = void 0), this.tree != e.empty && this.isDone(n ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
        if (typeof t == `number`) {
          let e = Date.now() + t;
          t = () => Date.now() > e;
        }
        for (this.parse ||= this.startParse(), n != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > n) && n < this.state.doc.length && this.parse.stopAt(n);;) {
          let e = this.parse.advance();
          if (e) {
            if (this.fragments = this.withoutTempSkipped(m.addTree(e, this.fragments, this.parse.stoppedAt != null)), this.treeLen = this.parse.stoppedAt ?? this.state.doc.length, this.tree = e, this.parse = null, this.treeLen < (n ?? this.state.doc.length)) this.parse = this.startParse();else return !0;
          }
          if (t()) return !1;
        }
      });
    }
    takeTree() {
      let e, t;
      this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
        for (; !(t = this.parse.advance()););
      }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(m.addTree(this.tree, this.fragments, !0)), this.parse = null);
    }
    withContext(e) {
      let t = Wl;
      Wl = this;
      try {
        return e();
      } finally {
        Wl = t;
      }
    }
    withoutTempSkipped(e) {
      for (let t; t = this.tempSkipped.pop();) e = Kl(e, t.from, t.to);
      return e;
    }
    changes(n, r) {
      let {
        fragments: i,
        tree: a,
        treeLen: o,
        viewport: s,
        skipped: c
      } = this;
      if (this.takeTree(), !n.empty) {
        let t = [];
        if (n.iterChangedRanges((e, n, r, i) => t.push({
          fromA: e,
          toA: n,
          fromB: r,
          toB: i
        })), i = m.applyChanges(i, t), a = e.empty, o = 0, s = {
          from: n.mapPos(s.from, -1),
          to: n.mapPos(s.to, 1)
        }, this.skipped.length) {
          c = [];
          for (let e of this.skipped) {
            let t = n.mapPos(e.from, 1),
              r = n.mapPos(e.to, -1);
            t < r && c.push({
              from: t,
              to: r
            });
          }
        }
      }
      return new t(this.parser, r, i, a, o, s, c, this.scheduleOn);
    }
    updateViewport(e) {
      if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
      this.viewport = e;
      let t = this.skipped.length;
      for (let t = 0; t < this.skipped.length; t++) {
        let {
          from: n,
          to: r
        } = this.skipped[t];
        n < e.to && r > e.from && (this.fragments = Kl(this.fragments, n, r), this.skipped.splice(t--, 1));
      }
      return this.skipped.length >= t ? !1 : (this.reset(), !0);
    }
    reset() {
      this.parse &&= (this.takeTree(), null);
    }
    skipUntilInView(e, t) {
      this.skipped.push({
        from: e,
        to: t
      });
    }
    static getSkippingParser(t) {
      return new class extends a {
        createParse(n, r, i) {
          let a = i[0].from,
            o = i[i.length - 1].to;
          return {
            parsedPos: a,
            advance() {
              let n = Wl;
              if (n) {
                for (let e of i) n.tempSkipped.push(e);
                t && (n.scheduleOn = n.scheduleOn ? Promise.all([n.scheduleOn, t]) : t);
              }
              return this.parsedPos = o, new e(l.none, [], [], o - a);
            },
            stoppedAt: null,
            stopAt() {}
          };
        }
      }();
    }
    isDone(e) {
      e = Math.min(e, this.state.doc.length);
      let t = this.fragments;
      return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
    }
    static get() {
      return Wl;
    }
  };
function Kl(e, t, n) {
  return m.applyChanges(e, [{
    fromA: t,
    toA: n,
    fromB: t,
    toB: n
  }]);
}
var ql = class e {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree) return this;
    let n = this.context.changes(t.changes, t.state),
      r = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), n.viewport.to);
    return n.work(20, r) || n.takeTree(), new e(n);
  }
  static init(t) {
    let n = Math.min(3e3, t.doc.length),
      r = Gl.create(t.facet(Zl).parser, t, {
        from: 0,
        to: n
      });
    return r.work(20, n) || r.takeTree(), new e(r);
  }
};
Y.state = k.define({
  create: ql.init,
  update(e, t) {
    for (let e of t.effects) if (e.is(Y.setState)) return e.value;
    return t.startState.facet(Zl) == t.state.facet(Zl) ? e.apply(t) : ql.init(t.state);
  }
});
var Jl = e => {
  let t = setTimeout(() => e(), 500);
  return () => clearTimeout(t);
};
typeof requestIdleCallback < `u` && (Jl = e => {
  let t = -1,
    n = setTimeout(() => {
      t = requestIdleCallback(e, {
        timeout: 400
      });
    }, 100);
  return () => t < 0 ? clearTimeout(n) : cancelIdleCallback(t);
});
var Yl = typeof navigator < `u` && navigator.scheduling?.isInputPending ? () => navigator.scheduling.isInputPending() : null,
  Xl = U.fromClass(class {
    constructor(e) {
      this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
    }
    update(e) {
      let t = this.view.state.field(Y.state).context;
      (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
    }
    scheduleWork() {
      if (this.working) return;
      let {
          state: e
        } = this.view,
        t = e.field(Y.state);
      (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Jl(this.work));
    }
    work(e) {
      this.working = null;
      let t = Date.now();
      if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
      let {
          state: n,
          viewport: {
            to: r
          }
        } = this.view,
        i = n.field(Y.state);
      if (i.tree == i.context.tree && i.context.isDone(r + 1e5)) return;
      let a = Date.now() + Math.min(this.chunkBudget, 100, e && !Yl ? Math.max(25, e.timeRemaining() - 5) : 1e9),
        o = i.context.treeLen < r && n.doc.length > r + 1e3,
        s = i.context.work(() => Yl && Yl() || Date.now() > a, r + (o ? 0 : 1e5));
      this.chunkBudget -= Date.now() - t, (s || this.chunkBudget <= 0) && (i.context.takeTree(), this.view.dispatch({
        effects: Y.setState.of(new ql(i.context))
      })), this.chunkBudget > 0 && !(s && !o) && this.scheduleWork(), this.checkAsyncSchedule(i.context);
    }
    checkAsyncSchedule(e) {
      e.scheduleOn &&= (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch(e => H(this.view.state, e)).then(() => this.workScheduled--), null);
    }
    destroy() {
      this.working && this.working();
    }
    isWorking() {
      return !!(this.working || this.workScheduled > 0);
    }
  }, {
    eventHandlers: {
      focus() {
        this.scheduleWork();
      }
    }
  }),
  Zl = O.define({
    combine(e) {
      return e.length ? e[0] : null;
    },
    enables: e => [Y.state, Xl, J.contentAttributes.compute([e], t => {
      let n = t.facet(e);
      return n && n.name ? {
        "data-language": n.name
      } : {};
    })]
  }),
  Ql = class {
    constructor(e, t = []) {
      this.language = e, this.support = t, this.extension = [e, t];
    }
  },
  $l = class e {
    constructor(e, t, n, r, i, a = void 0) {
      this.name = e, this.alias = t, this.extensions = n, this.filename = r, this.loadFunc = i, this.support = a, this.loading = null;
    }
    load() {
      return this.loading ||= this.loadFunc().then(e => this.support = e, e => {
        throw this.loading = null, e;
      });
    }
    static of(t) {
      let {
        load: n,
        support: r
      } = t;
      if (!n) {
        if (!r) throw RangeError(`Must pass either 'load' or 'support' to LanguageDescription.of`);
        n = () => Promise.resolve(r);
      }
      return new e(t.name, (t.alias || []).concat(t.name).map(e => e.toLowerCase()), t.extensions || [], t.filename, n, r);
    }
    static matchFilename(e, t) {
      for (let n of e) if (n.filename && n.filename.test(t)) return n;
      let n = /\.([^.]+)$/.exec(t);
      if (n) {
        for (let t of e) if (t.extensions.indexOf(n[1]) > -1) return t;
      }
      return null;
    }
    static matchLanguageName(e, t, n = !0) {
      t = t.toLowerCase();
      for (let n of e) if (n.alias.some(e => e == t)) return n;
      if (n) for (let n of e) for (let e of n.alias) {
        let r = t.indexOf(e);
        if (r > -1 && (e.length > 2 || !/\w/.test(t[r - 1]) && !/\w/.test(t[r + e.length]))) return n;
      }
      return null;
    }
  },
  eu = O.define(),
  tu = O.define({
    combine: e => {
      if (!e.length) return `  `;
      let t = e[0];
      if (!t || /\S/.test(t) || Array.from(t).some(e => e != t[0])) throw Error(`Invalid indent unit: ` + JSON.stringify(e[0]));
      return t;
    }
  });
function nu(e) {
  let t = e.facet(tu);
  return t.charCodeAt(0) == 9 ? e.tabSize * t.length : t.length;
}
function ru(e, t) {
  let n = ``,
    r = e.tabSize,
    i = e.facet(tu)[0];
  if (i == `	`) {
    for (; t >= r;) n += `	`, t -= r;
    i = ` `;
  }
  for (let e = 0; e < t; e++) n += i;
  return n;
}
function iu(e, t) {
  e instanceof N && (e = new au(e));
  for (let n of e.state.facet(eu)) {
    let r = n(e, t);
    if (r !== void 0) return r;
  }
  let n = X(e.state);
  return n.length >= t ? su(e, n, t) : null;
}
var au = class {
    constructor(e, t = {}) {
      this.state = e, this.options = t, this.unit = nu(e);
    }
    lineAt(e, t = 1) {
      let n = this.state.doc.lineAt(e),
        {
          simulateBreak: r,
          simulateDoubleBreak: i
        } = this.options;
      return r != null && r >= n.from && r <= n.to ? i && r == e ? {
        text: ``,
        from: e
      } : (t < 0 ? r < e : r <= e) ? {
        text: n.text.slice(r - n.from),
        from: r
      } : {
        text: n.text.slice(0, r - n.from),
        from: n.from
      } : n;
    }
    textAfterPos(e, t = 1) {
      if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return ``;
      let {
        text: n,
        from: r
      } = this.lineAt(e, t);
      return n.slice(e - r, Math.min(n.length, e + 100 - r));
    }
    column(e, t = 1) {
      let {
          text: n,
          from: r
        } = this.lineAt(e, t),
        i = this.countColumn(n, e - r),
        a = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
      return a > -1 && (i += a - this.countColumn(n, n.search(/\S|$/))), i;
    }
    countColumn(e, t = e.length) {
      return hn(e, this.state.tabSize, t);
    }
    lineIndent(e, t = 1) {
      let {
          text: n,
          from: r
        } = this.lineAt(e, t),
        i = this.options.overrideIndentation;
      if (i) {
        let e = i(r);
        if (e > -1) return e;
      }
      return this.countColumn(n, n.search(/\S|$/));
    }
    get simulatedBreak() {
      return this.options.simulateBreak || null;
    }
  },
  ou = new i();
function su(e, t, n) {
  let r = t.resolveStack(n),
    i = t.resolveInner(n, -1).resolve(n, 0).enterUnfinishedNodesBefore(n);
  if (i != r.node) {
    let e = [];
    for (let t = i; t && !(t.from < r.node.from || t.to > r.node.to || t.from == r.node.from && t.type == r.node.type); t = t.parent) e.push(t);
    for (let t = e.length - 1; t >= 0; t--) r = {
      node: e[t],
      next: r
    };
  }
  return cu(r, e, n);
}
function cu(e, t, n) {
  for (let r = e; r; r = r.next) {
    let e = uu(r.node);
    if (e) return e(fu.create(t, n, r));
  }
  return 0;
}
function lu(e) {
  return e.pos == e.options.simulateBreak && e.options.simulateDoubleBreak;
}
function uu(e) {
  let t = e.type.prop(ou);
  if (t) return t;
  let n = e.firstChild,
    r;
  if (n && (r = n.type.prop(i.closedBy))) {
    let t = e.lastChild,
      n = t && r.indexOf(t.name) > -1;
    return e => gu(e, !0, 1, void 0, n && !lu(e) ? t.from : void 0);
  }
  return e.parent == null ? du : null;
}
function du() {
  return 0;
}
var fu = class e extends au {
  constructor(e, t, n) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = n;
  }
  get node() {
    return this.context.node;
  }
  static create(t, n, r) {
    return new e(t, n, r);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (;;) {
      let n = e.resolve(t.from);
      for (; n.parent && n.parent.from == n.from;) n = n.parent;
      if (pu(n, e)) break;
      t = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return cu(this.context.next, this.base, this.pos);
  }
};
function pu(e, t) {
  for (let n = t; n; n = n.parent) if (e == n) return !0;
  return !1;
}
function mu(e) {
  let t = e.node,
    n = t.childAfter(t.from),
    r = t.lastChild;
  if (!n) return null;
  let i = e.options.simulateBreak,
    a = e.state.doc.lineAt(n.from),
    o = i == null || i <= a.from ? a.to : Math.min(a.to, i);
  for (let e = n.to;;) {
    let i = t.childAfter(e);
    if (!i || i == r) return null;
    if (!i.type.isSkipped) {
      if (i.from >= o) return null;
      let e = /^ */.exec(a.text.slice(n.to - a.from))[0].length;
      return {
        from: n.from,
        to: n.to + e
      };
    }
    e = i.to;
  }
}
function hu({
  closing: e,
  align: t = !0,
  units: n = 1
}) {
  return r => gu(r, t, n, e);
}
function gu(e, t, n, r, i) {
  let a = e.textAfter,
    o = a.match(/^\s*/)[0].length,
    s = r && a.slice(o, o + r.length) == r || i == e.pos + o,
    c = t ? mu(e) : null;
  return c ? s ? e.column(c.from) : e.column(c.to) : e.baseIndent + (s ? 0 : e.unit * n);
}
var _u = e => e.baseIndent;
function vu({
  except: e,
  units: t = 1
} = {}) {
  return n => {
    let r = e && e.test(n.textAfter);
    return n.baseIndent + (r ? 0 : t * n.unit);
  };
}
var yu = 200;
function bu() {
  return N.transactionFilter.of(e => {
    if (!e.docChanged || !e.isUserEvent(`input.type`) && !e.isUserEvent(`input.complete`)) return e;
    let t = e.startState.languageDataAt(`indentOnInput`, e.startState.selection.main.head);
    if (!t.length) return e;
    let n = e.newDoc,
      {
        head: r
      } = e.newSelection.main,
      i = n.lineAt(r);
    if (r > i.from + yu) return e;
    let a = n.sliceString(i.from, r);
    if (!t.some(e => e.test(a))) return e;
    let {
        state: o
      } = e,
      s = -1,
      c = [];
    for (let {
      head: e
    } of o.selection.ranges) {
      let t = o.doc.lineAt(e);
      if (t.from == s) continue;
      s = t.from;
      let n = iu(o, t.from);
      if (n == null) continue;
      let r = /^\s*/.exec(t.text)[0],
        i = ru(o, n);
      r != i && c.push({
        from: t.from,
        to: t.from + r.length,
        insert: i
      });
    }
    return c.length ? [e, {
      changes: c,
      sequential: !0
    }] : e;
  });
}
var xu = O.define(),
  Su = new i();
function Cu(e) {
  let t = e.firstChild,
    n = e.lastChild;
  return t && t.to < n.from ? {
    from: t.to,
    to: n.type.isError ? e.to : n.from
  } : null;
}
function wu(e, t, n) {
  let r = X(e);
  if (r.length < n) return null;
  let i = r.resolveStack(n, 1),
    a = null;
  for (let o = i; o; o = o.next) {
    let i = o.node;
    if (i.to <= n || i.from > n) continue;
    if (a && i.from < t) break;
    let s = i.type.prop(Su);
    if (s && (i.to < r.length - 50 || r.length == e.doc.length || !Tu(i))) {
      let r = s(i, e);
      r && r.from <= n && r.from >= t && r.to > n && (a = r);
    }
  }
  return a;
}
function Tu(e) {
  let t = e.lastChild;
  return t && t.to == e.to && t.type.isError;
}
function Eu(e, t, n) {
  for (let r of e.facet(xu)) {
    let i = r(e, t, n);
    if (i) return i;
  }
  return wu(e, t, n);
}
function Du(e, t) {
  let n = t.mapPos(e.from, 1),
    r = t.mapPos(e.to, -1);
  return n >= r ? void 0 : {
    from: n,
    to: r
  };
}
var Ou = A.define({
    map: Du
  }),
  ku = A.define({
    map: Du
  });
function Au(e) {
  let t = [];
  for (let {
    head: n
  } of e.state.selection.ranges) t.some(e => e.from <= n && e.to >= n) || t.push(e.lineBlockAt(n));
  return t;
}
var ju = k.define({
  create() {
    return z.none;
  },
  update(e, t) {
    t.isUserEvent(`delete`) && t.changes.iterChangedRanges((t, n) => e = Mu(e, t, n)), e = e.map(t.changes);
    let n = [];
    for (let r of t.effects) r.is(Ou) && !Pu(e, r.value.from, r.value.to) ? n.push(r.value) : r.is(ku) && (e = e.update({
      filter: (e, t) => r.value.from != e || r.value.to != t,
      filterFrom: r.value.from,
      filterTo: r.value.to
    }));
    if (n.length) {
      let {
          preparePlaceholder: r
        } = t.state.facet(Vu),
        i = n.map(e => (r ? z.replace({
          widget: new Gu(r(t.state, e))
        }) : Wu).range(e.from, e.to));
      e = e.update({
        add: i
      });
    }
    return t.selection && (e = Mu(e, t.selection.main.head)), e;
  },
  provide: e => J.decorations.from(e),
  toJSON(e, t) {
    let n = [];
    return e.between(0, t.doc.length, (e, t) => {
      n.push(e, t);
    }), n;
  },
  fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2) throw RangeError(`Invalid JSON for fold state`);
    let t = [];
    for (let n = 0; n < e.length;) {
      let r = e[n++],
        i = e[n++];
      if (typeof r != `number` || typeof i != `number`) throw RangeError(`Invalid JSON for fold state`);
      t.push(Wu.range(r, i));
    }
    return z.set(t, !0);
  }
});
function Mu(e, t, n = t) {
  let r = !1;
  return e.between(t, n, (e, i) => {
    e < n && i > t && (r = !0);
  }), r ? e.update({
    filterFrom: t,
    filterTo: n,
    filter: (e, r) => e >= n || r <= t
  }) : e;
}
function Nu(e, t, n) {
  var r;
  let i = null;
  return (r = e.field(ju, !1)) == null || r.between(t, n, (e, t) => {
    (!i || i.from > e) && (i = {
      from: e,
      to: t
    });
  }), i;
}
function Pu(e, t, n) {
  let r = !1;
  return e.between(t, t, (e, i) => {
    e == t && i == n && (r = !0);
  }), r;
}
function Fu(e, t) {
  return e.field(ju, !1) ? t : t.concat(A.appendConfig.of(Hu()));
}
var Iu = e => {
    for (let t of Au(e)) {
      let n = Eu(e.state, t.from, t.to);
      if (n) return e.dispatch({
        effects: Fu(e.state, [Ou.of(n), Ru(e, n)])
      }), !0;
    }
    return !1;
  },
  Lu = e => {
    if (!e.state.field(ju, !1)) return !1;
    let t = [];
    for (let n of Au(e)) {
      let r = Nu(e.state, n.from, n.to);
      r && t.push(ku.of(r), Ru(e, r, !1));
    }
    return t.length && e.dispatch({
      effects: t
    }), t.length > 0;
  };
function Ru(e, t, n = !0) {
  let r = e.state.doc.lineAt(t.from).number,
    i = e.state.doc.lineAt(t.to).number;
  return J.announce.of(`${e.state.phrase(n ? `Folded lines` : `Unfolded lines`)} ${r} ${e.state.phrase(`to`)} ${i}.`);
}
var zu = [{
    key: `Ctrl-Shift-[`,
    mac: `Cmd-Alt-[`,
    run: Iu
  }, {
    key: `Ctrl-Shift-]`,
    mac: `Cmd-Alt-]`,
    run: Lu
  }, {
    key: `Ctrl-Alt-[`,
    run: e => {
      let {
          state: t
        } = e,
        n = [];
      for (let r = 0; r < t.doc.length;) {
        let i = e.lineBlockAt(r),
          a = Eu(t, i.from, i.to);
        a && n.push(Ou.of(a)), r = (a ? e.lineBlockAt(a.to) : i).to + 1;
      }
      return n.length && e.dispatch({
        effects: Fu(e.state, n)
      }), !!n.length;
    }
  }, {
    key: `Ctrl-Alt-]`,
    run: e => {
      let t = e.state.field(ju, !1);
      if (!t || !t.size) return !1;
      let n = [];
      return t.between(0, e.state.doc.length, (e, t) => {
        n.push(ku.of({
          from: e,
          to: t
        }));
      }), e.dispatch({
        effects: n
      }), !0;
    }
  }],
  Bu = {
    placeholderDOM: null,
    preparePlaceholder: null,
    placeholderText: `…`
  },
  Vu = O.define({
    combine(e) {
      return Xt(e, Bu);
    }
  });
function Hu(e) {
  let t = [ju, Yu];
  return e && t.push(Vu.of(e)), t;
}
function Uu(e, t) {
  let {
      state: n
    } = e,
    r = n.facet(Vu),
    i = t => {
      let n = e.lineBlockAt(e.posAtDOM(t.target)),
        r = Nu(e.state, n.from, n.to);
      r && e.dispatch({
        effects: ku.of(r)
      }), t.preventDefault();
    };
  if (r.placeholderDOM) return r.placeholderDOM(e, i, t);
  let a = document.createElement(`span`);
  return a.textContent = r.placeholderText, a.setAttribute(`aria-label`, n.phrase(`folded code`)), a.title = n.phrase(`unfold`), a.className = `cm-foldPlaceholder`, a.onclick = i, a;
}
var Wu = z.replace({
    widget: new class extends Jn {
      toDOM(e) {
        return Uu(e, null);
      }
    }()
  }),
  Gu = class extends Jn {
    constructor(e) {
      super(), this.value = e;
    }
    eq(e) {
      return this.value == e.value;
    }
    toDOM(e) {
      return Uu(e, this.value);
    }
  },
  Ku = {
    openText: `⌄`,
    closedText: `›`,
    markerDOM: null,
    domEventHandlers: {},
    foldingChanged: () => !1
  },
  qu = class extends fl {
    constructor(e, t) {
      super(), this.config = e, this.open = t;
    }
    eq(e) {
      return this.config == e.config && this.open == e.open;
    }
    toDOM(e) {
      if (this.config.markerDOM) return this.config.markerDOM(this.open);
      let t = document.createElement(`span`);
      return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? `Fold line` : `Unfold line`), t;
    }
  };
function Ju(e = {}) {
  let t = {
      ...Ku,
      ...e
    },
    n = new qu(t, !0),
    r = new qu(t, !1),
    i = U.fromClass(class {
      constructor(e) {
        this.from = e.viewport.from, this.markers = this.buildMarkers(e);
      }
      update(e) {
        (e.docChanged || e.viewportChanged || e.startState.facet(Zl) != e.state.facet(Zl) || e.startState.field(ju, !1) != e.state.field(ju, !1) || X(e.startState) != X(e.state) || t.foldingChanged(e)) && (this.markers = this.buildMarkers(e.view));
      }
      buildMarkers(e) {
        let t = new rn();
        for (let i of e.viewportLineBlocks) {
          let a = Nu(e.state, i.from, i.to) ? r : Eu(e.state, i.from, i.to) ? n : null;
          a && t.add(i.from, i.from, a);
        }
        return t.finish();
      }
    }),
    {
      domEventHandlers: a
    } = t;
  return [i, _l({
    class: `cm-foldGutter`,
    markers(e) {
      return e.plugin(i)?.markers || P.empty;
    },
    initialSpacer() {
      return new qu(t, !1);
    },
    domEventHandlers: {
      ...a,
      click: (e, t, n) => {
        if (a.click && a.click(e, t, n)) return !0;
        let r = Nu(e.state, t.from, t.to);
        if (r) return e.dispatch({
          effects: ku.of(r)
        }), !0;
        let i = Eu(e.state, t.from, t.to);
        return i ? (e.dispatch({
          effects: Ou.of(i)
        }), !0) : !1;
      }
    }
  }), Hu()];
}
var Yu = J.baseTheme({
    ".cm-foldPlaceholder": {
      backgroundColor: `#eee`,
      border: `1px solid #ddd`,
      color: `#888`,
      borderRadius: `.2em`,
      margin: `0 1px`,
      padding: `0 1px`,
      cursor: `pointer`
    },
    ".cm-foldGutter span": {
      padding: `0 1px`,
      cursor: `pointer`
    }
  }),
  Xu = class e {
    constructor(e, n) {
      this.specs = e;
      let r;
      function i(e) {
        let t = xn.newName();
        return (r ||= Object.create(null))[`.` + t] = e, t;
      }
      let a = typeof n.all == `string` ? n.all : n.all ? i(n.all) : void 0,
        o = n.scope;
      this.scope = o instanceof Y ? e => e.prop(Rl) == o.data : o ? e => e == o : void 0, this.style = t(e.map(e => ({
        tag: e.tag,
        class: e.class || i(Object.assign({}, e, {
          tag: null
        }))
      })), {
        all: a
      }).style, this.module = r ? new xn(r) : null, this.themeType = n.themeType;
    }
    static define(t, n) {
      return new e(t, n || {});
    }
  },
  Zu = O.define(),
  Qu = O.define({
    combine(e) {
      return e.length ? [e[0]] : null;
    }
  });
function $u(e) {
  let t = e.facet(Zu);
  return t.length ? t : e.facet(Qu);
}
function ed(e, t) {
  let n = [nd],
    r;
  return e instanceof Xu && (e.module && n.push(J.styleModule.of(e.module)), r = e.themeType), t?.fallback ? n.push(Qu.of(e)) : r ? n.push(Zu.computeN([J.darkTheme], t => t.facet(J.darkTheme) == (r == `dark`) ? [e] : [])) : n.push(Zu.of(e)), n;
}
var td = class {
    constructor(e) {
      this.markCache = Object.create(null), this.tree = X(e.state), this.decorations = this.buildDeco(e, $u(e.state)), this.decoratedTo = e.viewport.to;
    }
    update(e) {
      let t = X(e.state),
        n = $u(e.state),
        r = n != $u(e.startState),
        {
          viewport: i
        } = e.view,
        a = e.changes.mapPos(this.decoratedTo, 1);
      t.length < i.to && !r && t.type == this.tree.type && a >= i.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = a) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = i.to);
    }
    buildDeco(e, t) {
      if (!t || !this.tree.length) return z.none;
      let n = new rn();
      for (let {
        from: r,
        to: i
      } of e.visibleRanges) d(this.tree, t, (e, t, r) => {
        n.add(e, t, this.markCache[r] || (this.markCache[r] = z.mark({
          class: r
        })));
      }, r, i);
      return n.finish();
    }
  },
  nd = bt.high(U.fromClass(td, {
    decorations: e => e.decorations
  })),
  rd = Xu.define([{
    tag: u.meta,
    color: `#404740`
  }, {
    tag: u.link,
    textDecoration: `underline`
  }, {
    tag: u.heading,
    textDecoration: `underline`,
    fontWeight: `bold`
  }, {
    tag: u.emphasis,
    fontStyle: `italic`
  }, {
    tag: u.strong,
    fontWeight: `bold`
  }, {
    tag: u.strikethrough,
    textDecoration: `line-through`
  }, {
    tag: u.keyword,
    color: `#708`
  }, {
    tag: [u.atom, u.bool, u.url, u.contentSeparator, u.labelName],
    color: `#219`
  }, {
    tag: [u.literal, u.inserted],
    color: `#164`
  }, {
    tag: [u.string, u.deleted],
    color: `#a11`
  }, {
    tag: [u.regexp, u.escape, u.special(u.string)],
    color: `#e40`
  }, {
    tag: u.definition(u.variableName),
    color: `#00f`
  }, {
    tag: u.local(u.variableName),
    color: `#30a`
  }, {
    tag: [u.typeName, u.namespace],
    color: `#085`
  }, {
    tag: u.className,
    color: `#167`
  }, {
    tag: [u.special(u.variableName), u.macroName],
    color: `#256`
  }, {
    tag: u.definition(u.propertyName),
    color: `#00c`
  }, {
    tag: u.comment,
    color: `#940`
  }, {
    tag: u.invalid,
    color: `#f00`
  }]),
  id = J.baseTheme({
    "&.cm-focused .cm-matchingBracket": {
      backgroundColor: `#328c8252`
    },
    "&.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: `#bb555544`
    }
  }),
  ad = 1e4,
  od = `()[]{}`,
  sd = O.define({
    combine(e) {
      return Xt(e, {
        afterCursor: !0,
        brackets: od,
        maxScanDistance: ad,
        renderMatch: ud
      });
    }
  }),
  cd = z.mark({
    class: `cm-matchingBracket`
  }),
  ld = z.mark({
    class: `cm-nonmatchingBracket`
  });
function ud(e) {
  let t = [],
    n = e.matched ? cd : ld;
  return t.push(n.range(e.start.from, e.start.to)), e.end && t.push(n.range(e.end.from, e.end.to)), t;
}
function dd(e) {
  let t = [],
    n = e.facet(sd);
  for (let r of e.selection.ranges) {
    if (!r.empty) continue;
    let i = _d(e, r.head, -1, n) || r.head > 0 && _d(e, r.head - 1, 1, n) || n.afterCursor && (_d(e, r.head, 1, n) || r.head < e.doc.length && _d(e, r.head + 1, -1, n));
    i && (t = t.concat(n.renderMatch(i, e)));
  }
  return z.set(t, !0);
}
var fd = [U.fromClass(class {
  constructor(e) {
    this.paused = !1, this.decorations = dd(e.state);
  }
  update(e) {
    (e.docChanged || e.selectionSet || this.paused) && (e.view.composing ? (this.decorations = this.decorations.map(e.changes), this.paused = !0) : (this.decorations = dd(e.state), this.paused = !1));
  }
}, {
  decorations: e => e.decorations
}), id];
function pd(e = {}) {
  return [sd.of(e), fd];
}
var md = new i();
function hd(e, t, n) {
  let r = e.prop(t < 0 ? i.openedBy : i.closedBy);
  if (r) return r;
  if (e.name.length == 1) {
    let r = n.indexOf(e.name);
    if (r > -1 && r % 2 == +(t < 0)) return [n[r + t]];
  }
  return null;
}
function gd(e) {
  let t = e.type.prop(md);
  return t ? t(e.node) : e;
}
function _d(e, t, n, r = {}) {
  let i = r.maxScanDistance || ad,
    a = r.brackets || od,
    o = X(e),
    s = o.resolveInner(t, n);
  for (let r = s; r; r = r.parent) {
    let i = hd(r.type, n, a);
    if (i && r.from < r.to) {
      let o = gd(r);
      if (o && (n > 0 ? t >= o.from && t < o.to : t > o.from && t <= o.to)) return vd(e, t, n, r, o, i, a);
    }
  }
  return yd(e, t, n, o, s.type, i, a);
}
function vd(e, t, n, r, i, a, o) {
  let s = r.parent,
    c = {
      from: i.from,
      to: i.to
    },
    l = 0,
    u = s?.cursor();
  if (u && (n < 0 ? u.childBefore(r.from) : u.childAfter(r.to))) do if (n < 0 ? u.to <= r.from : u.from >= r.to) {
    if (l == 0 && a.indexOf(u.type.name) > -1 && u.from < u.to) {
      let e = gd(u);
      return {
        start: c,
        end: e ? {
          from: e.from,
          to: e.to
        } : void 0,
        matched: !0
      };
    }
    if (hd(u.type, n, o)) l++;else if (hd(u.type, -n, o)) {
      if (l == 0) {
        let e = gd(u);
        return {
          start: c,
          end: e && e.from < e.to ? {
            from: e.from,
            to: e.to
          } : void 0,
          matched: !1
        };
      }
      l--;
    }
  } while (n < 0 ? u.prevSibling() : u.nextSibling());
  return {
    start: c,
    matched: !1
  };
}
function yd(e, t, n, r, i, a, o) {
  if (n < 0 ? !t : t == e.doc.length) return null;
  let s = n < 0 ? e.sliceDoc(t - 1, t) : e.sliceDoc(t, t + 1),
    c = o.indexOf(s);
  if (c < 0 || c % 2 == 0 != n > 0) return null;
  let l = {
      from: n < 0 ? t - 1 : t,
      to: n > 0 ? t + 1 : t
    },
    u = e.doc.iterRange(t, n > 0 ? e.doc.length : 0),
    d = 0;
  for (let e = 0; !u.next().done && e <= a;) {
    let a = u.value;
    n < 0 && (e += a.length);
    let s = t + e * n;
    for (let e = n > 0 ? 0 : a.length - 1, t = n > 0 ? a.length : -1; e != t; e += n) {
      let t = o.indexOf(a[e]);
      if (!(t < 0 || r.resolveInner(s + e, 1).type != i)) {
        if (t % 2 == 0 == n > 0) d++;else if (d == 1) return {
          start: l,
          end: {
            from: s + e,
            to: s + e + 1
          },
          matched: t >> 1 == c >> 1
        };else d--;
      }
    }
    n > 0 && (e += a.length);
  }
  return u.done ? {
    start: l,
    matched: !1
  } : null;
}
var bd = Object.create(null),
  xd = [l.none],
  Sd = [],
  Cd = Object.create(null),
  wd = Object.create(null);
for (let [e, t] of [[`variable`, `variableName`], [`variable-2`, `variableName.special`], [`string-2`, `string.special`], [`def`, `variableName.definition`], [`tag`, `tagName`], [`attribute`, `attributeName`], [`type`, `typeName`], [`builtin`, `variableName.standard`], [`qualifier`, `modifier`], [`error`, `invalid`], [`header`, `heading`], [`property`, `propertyName`]]) wd[e] = Ed(bd, t);
function Td(e, t) {
  Sd.indexOf(e) > -1 || (Sd.push(e), console.warn(t));
}
function Ed(e, t) {
  let n = [];
  for (let r of t.split(` `)) {
    let t = [];
    for (let n of r.split(`.`)) {
      let r = e[n] || u[n];
      r ? typeof r == `function` ? t.length ? t = t.map(r) : Td(n, `Modifier ${n} used at start of tag`) : t.length ? Td(n, `Tag ${n} used as modifier`) : t = Array.isArray(r) ? r : [r] : Td(n, `Unknown highlighting tag ${n}`);
    }
    for (let e of t) n.push(e);
  }
  if (!n.length) return 0;
  let r = t.replace(/ /g, `_`),
    i = r + ` ` + n.map(e => e.id),
    a = Cd[i];
  if (a) return a.id;
  let o = Cd[i] = l.define({
    id: xd.length,
    name: r,
    props: [s({
      [r]: n
    })]
  });
  return xd.push(o), o.id;
}
B.RTL, B.LTR;
var Dd = null;
function Od() {
  if (!Dd && typeof document == `object` && document.body) {
    let {
        style: e
      } = document.body,
      t = [],
      n = new Set();
    for (let r in e) r != `cssText` && r != `cssFloat` && typeof e[r] == `string` && (/[A-Z]/.test(r) && (r = r.replace(/[A-Z]/g, e => `-` + e.toLowerCase())), n.has(r) || (t.push(r), n.add(r)));
    Dd = t.sort().map(e => ({
      type: `property`,
      label: e,
      apply: e + `: `
    }));
  }
  return Dd || [];
}
var kd = `active.after.any-link.autofill.backdrop.before.checked.cue.default.defined.disabled.empty.enabled.file-selector-button.first.first-child.first-letter.first-line.first-of-type.focus.focus-visible.focus-within.fullscreen.has.host.host-context.hover.in-range.indeterminate.invalid.is.lang.last-child.last-of-type.left.link.marker.modal.not.nth-child.nth-last-child.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.part.placeholder.placeholder-shown.read-only.read-write.required.right.root.scope.selection.slotted.target.target-text.valid.visited.where`.split(`.`).map(e => ({
    type: `class`,
    label: e
  })),
  Ad = `above.absolute.activeborder.additive.activecaption.after-white-space.ahead.alias.all.all-scroll.alphabetic.alternate.always.antialiased.appworkspace.asterisks.attr.auto.auto-flow.avoid.avoid-column.avoid-page.avoid-region.axis-pan.background.backwards.baseline.below.bidi-override.blink.block.block-axis.bold.bolder.border.border-box.both.bottom.break.break-all.break-word.bullets.button.button-bevel.buttonface.buttonhighlight.buttonshadow.buttontext.calc.capitalize.caps-lock-indicator.caption.captiontext.caret.cell.center.checkbox.circle.cjk-decimal.clear.clip.close-quote.col-resize.collapse.color.color-burn.color-dodge.column.column-reverse.compact.condensed.contain.content.contents.content-box.context-menu.continuous.copy.counter.counters.cover.crop.cross.crosshair.currentcolor.cursive.cyclic.darken.dashed.decimal.decimal-leading-zero.default.default-button.dense.destination-atop.destination-in.destination-out.destination-over.difference.disc.discard.disclosure-closed.disclosure-open.document.dot-dash.dot-dot-dash.dotted.double.down.e-resize.ease.ease-in.ease-in-out.ease-out.element.ellipse.ellipsis.embed.end.ethiopic-abegede-gez.ethiopic-halehame-aa-er.ethiopic-halehame-gez.ew-resize.exclusion.expanded.extends.extra-condensed.extra-expanded.fantasy.fast.fill.fill-box.fixed.flat.flex.flex-end.flex-start.footnotes.forwards.from.geometricPrecision.graytext.grid.groove.hand.hard-light.help.hidden.hide.higher.highlight.highlighttext.horizontal.hsl.hsla.hue.icon.ignore.inactiveborder.inactivecaption.inactivecaptiontext.infinite.infobackground.infotext.inherit.initial.inline.inline-axis.inline-block.inline-flex.inline-grid.inline-table.inset.inside.intrinsic.invert.italic.justify.keep-all.landscape.large.larger.left.level.lighter.lighten.line-through.linear.linear-gradient.lines.list-item.listbox.listitem.local.logical.loud.lower.lower-hexadecimal.lower-latin.lower-norwegian.lowercase.ltr.luminosity.manipulation.match.matrix.matrix3d.medium.menu.menutext.message-box.middle.min-intrinsic.mix.monospace.move.multiple.multiple_mask_images.multiply.n-resize.narrower.ne-resize.nesw-resize.no-close-quote.no-drop.no-open-quote.no-repeat.none.normal.not-allowed.nowrap.ns-resize.numbers.numeric.nw-resize.nwse-resize.oblique.opacity.open-quote.optimizeLegibility.optimizeSpeed.outset.outside.outside-shape.overlay.overline.padding.padding-box.painted.page.paused.perspective.pinch-zoom.plus-darker.plus-lighter.pointer.polygon.portrait.pre.pre-line.pre-wrap.preserve-3d.progress.push-button.radial-gradient.radio.read-only.read-write.read-write-plaintext-only.rectangle.region.relative.repeat.repeating-linear-gradient.repeating-radial-gradient.repeat-x.repeat-y.reset.reverse.rgb.rgba.ridge.right.rotate.rotate3d.rotateX.rotateY.rotateZ.round.row.row-resize.row-reverse.rtl.run-in.running.s-resize.sans-serif.saturation.scale.scale3d.scaleX.scaleY.scaleZ.screen.scroll.scrollbar.scroll-position.se-resize.self-start.self-end.semi-condensed.semi-expanded.separate.serif.show.single.skew.skewX.skewY.skip-white-space.slide.slider-horizontal.slider-vertical.sliderthumb-horizontal.sliderthumb-vertical.slow.small.small-caps.small-caption.smaller.soft-light.solid.source-atop.source-in.source-out.source-over.space.space-around.space-between.space-evenly.spell-out.square.start.static.status-bar.stretch.stroke.stroke-box.sub.subpixel-antialiased.svg_masks.super.sw-resize.symbolic.symbols.system-ui.table.table-caption.table-cell.table-column.table-column-group.table-footer-group.table-header-group.table-row.table-row-group.text.text-bottom.text-top.textarea.textfield.thick.thin.threeddarkshadow.threedface.threedhighlight.threedlightshadow.threedshadow.to.top.transform.translate.translate3d.translateX.translateY.translateZ.transparent.ultra-condensed.ultra-expanded.underline.unidirectional-pan.unset.up.upper-latin.uppercase.url.var.vertical.vertical-text.view-box.visible.visibleFill.visiblePainted.visibleStroke.visual.w-resize.wait.wave.wider.window.windowframe.windowtext.words.wrap.wrap-reverse.x-large.x-small.xor.xx-large.xx-small`.split(`.`).map(e => ({
    type: `keyword`,
    label: e
  })).concat(`aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.grey.green.greenyellow.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen`.split(`.`).map(e => ({
    type: `constant`,
    label: e
  }))),
  jd = `a.abbr.address.article.aside.b.bdi.bdo.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.dd.del.details.dfn.dialog.div.dl.dt.em.figcaption.figure.footer.form.header.hgroup.h1.h2.h3.h4.h5.h6.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.meter.nav.ol.output.p.pre.ruby.section.select.small.source.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.tr.u.ul`.split(`.`).map(e => ({
    type: `type`,
    label: e
  })),
  Md = [`@charset`, `@color-profile`, `@container`, `@counter-style`, `@font-face`, `@font-feature-values`, `@font-palette-values`, `@import`, `@keyframes`, `@layer`, `@media`, `@namespace`, `@page`, `@position-try`, `@property`, `@scope`, `@starting-style`, `@supports`, `@view-transition`].map(e => ({
    type: `keyword`,
    label: e
  })),
  Nd = /^(\w[\w-]*|-\w[\w-]*|)$/,
  Pd = /^-(-[\w-]*)?$/;
function Fd(e, t) {
  if ((e.name == `(` || e.type.isError) && (e = e.parent || e), e.name != `ArgList`) return !1;
  let n = e.parent?.firstChild;
  return n?.name == `Callee` && t.sliceString(n.from, n.to) == `var`;
}
var Id = new o(),
  Ld = [`Declaration`];
function Rd(e) {
  for (let t = e;;) {
    if (t.type.isTop) return t;
    if (!(t = t.parent)) return e;
  }
}
function zd(e, t, n) {
  if (t.to - t.from > 4096) {
    let i = Id.get(t);
    if (i) return i;
    let a = [],
      o = new Set(),
      s = t.cursor(r.IncludeAnonymous);
    if (s.firstChild()) do for (let t of zd(e, s.node, n)) o.has(t.label) || (o.add(t.label), a.push(t)); while (s.nextSibling());
    return Id.set(t, a), a;
  }
  {
    let r = [],
      i = new Set();
    return t.cursor().iterate(t => {
      if (n(t) && t.matchContext(Ld) && t.node.nextSibling?.name == `:`) {
        let n = e.sliceString(t.from, t.to);
        i.has(n) || (i.add(n), r.push({
          label: n,
          type: `variable`
        }));
      }
    }), r;
  }
}
var Bd = (e => t => {
    let {
        state: n,
        pos: r
      } = t,
      i = X(n).resolveInner(r, -1),
      a = i.type.isError && i.from == i.to - 1 && n.doc.sliceString(i.from, i.to) == `-`;
    if (i.name == `PropertyName` || (a || i.name == `TagName`) && /^(Block|Styles)$/.test(i.resolve(i.to).name)) return {
      from: i.from,
      options: Od(),
      validFor: Nd
    };
    if (i.name == `ValueName`) return {
      from: i.from,
      options: Ad,
      validFor: Nd
    };
    if (i.name == `PseudoClassName`) return {
      from: i.from,
      options: kd,
      validFor: Nd
    };
    if (e(i) || (t.explicit || a) && Fd(i, n.doc)) return {
      from: e(i) || a ? i.from : r,
      options: zd(n.doc, Rd(i), e),
      validFor: Pd
    };
    if (i.name == `TagName`) {
      for (let {
        parent: e
      } = i; e; e = e.parent) if (e.name == `Block`) return {
        from: i.from,
        options: Od(),
        validFor: Nd
      };
      return {
        from: i.from,
        options: jd,
        validFor: Nd
      };
    }
    if (i.name == `AtKeyword`) return {
      from: i.from,
      options: Md,
      validFor: Nd
    };
    if (!t.explicit) return null;
    let o = i.resolve(r),
      s = o.childBefore(r);
    return s && s.name == `:` && o.name == `PseudoClassSelector` ? {
      from: r,
      options: kd,
      validFor: Nd
    } : s && s.name == `:` && o.name == `Declaration` || o.name == `ArgList` ? {
      from: r,
      options: Ad,
      validFor: Nd
    } : o.name == `Block` || o.name == `Styles` ? {
      from: r,
      options: Od(),
      validFor: Nd
    } : null;
  })(e => e.name == `VariableName`),
  Vd = Hl.define({
    name: `css`,
    parser: Ae.configure({
      props: [ou.add({
        Declaration: vu()
      }), Su.add({
        "Block KeyframeList": Cu
      })]
    }),
    languageData: {
      commentTokens: {
        block: {
          open: `/*`,
          close: `*/`
        }
      },
      indentOnInput: /^\s*\}$/,
      wordChars: `-`
    }
  });
function Hd() {
  return new Ql(Vd, Vd.data.of({
    autocomplete: Bd
  }));
}
var Ud = class {
  constructor(e, t, n, r) {
    this.state = e, this.pos = t, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  tokenBefore(e) {
    let t = X(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0;) t = t.parent;
    return t ? {
      from: t.from,
      to: this.pos,
      text: this.state.sliceDoc(t.from, this.pos),
      type: t.type
    } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos),
      n = Math.max(t.from, this.pos - 250),
      r = t.text.slice(n - t.from, this.pos - t.from),
      i = r.search(Xd(e, !1));
    return i < 0 ? null : {
      from: n + i,
      to: this.pos,
      text: r.slice(i)
    };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, n) {
    e == `abort` && this.abortListeners && (this.abortListeners.push(t), n && n.onDocChange && (this.abortOnDocChange = !0));
  }
};
function Wd(e) {
  let t = Object.keys(e).join(``),
    n = /\w/.test(t);
  return n && (t = t.replace(/\w/g, ``)), `[${n ? `\\w` : ``}${t.replace(/[^\w\s]/g, `\\$&`)}]`;
}
function Gd(e) {
  let t = Object.create(null),
    n = Object.create(null);
  for (let {
    label: r
  } of e) {
    t[r[0]] = !0;
    for (let e = 1; e < r.length; e++) n[r[e]] = !0;
  }
  let r = Wd(t) + Wd(n) + `*$`;
  return [RegExp(`^` + r), new RegExp(r)];
}
function Kd(e) {
  let t = e.map(e => typeof e == `string` ? {
      label: e
    } : e),
    [n, r] = t.every(e => /^\w+$/.test(e.label)) ? [/\w*$/, /\w+$/] : Gd(t);
  return e => {
    let i = e.matchBefore(r);
    return i || e.explicit ? {
      from: i ? i.from : e.pos,
      options: t,
      validFor: n
    } : null;
  };
}
function qd(e, t) {
  return n => {
    for (let t = X(n.state).resolveInner(n.pos, -1); t; t = t.parent) {
      if (e.indexOf(t.name) > -1) return null;
      if (t.type.isTop) break;
    }
    return t(n);
  };
}
var Jd = class {
  constructor(e, t, n, r) {
    this.completion = e, this.source = t, this.match = n, this.score = r;
  }
};
function Yd(e) {
  return e.selection.main.from;
}
function Xd(e, t) {
  let {
      source: n
    } = e,
    r = t && n[0] != `^`,
    i = n[n.length - 1] != `$`;
  return !r && !i ? e : RegExp(`${r ? `^` : ``}(?:${n})${i ? `$` : ``}`, e.flags ?? (e.ignoreCase ? `i` : ``));
}
var Zd = Ft.define();
function Qd(e, t, n, r) {
  let {
      main: i
    } = e.selection,
    a = n - i.from,
    o = r - i.from;
  return {
    ...e.changeByRange(s => {
      if (s != i && n != r && e.sliceDoc(s.from + a, s.from + o) != e.sliceDoc(n, r)) return {
        range: s
      };
      let c = e.toText(t);
      return {
        changes: {
          from: s.from + a,
          to: r == i.from ? s.to : s.from + o,
          insert: c
        },
        range: D.cursor(s.from + a + c.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: `input.complete`
  };
}
var $d = new WeakMap();
function ef(e) {
  if (!Array.isArray(e)) return e;
  let t = $d.get(e);
  return t || $d.set(e, t = Kd(e)), t;
}
var tf = A.define(),
  nf = A.define(),
  rf = class {
    constructor(e) {
      this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
      for (let t = 0; t < e.length;) {
        let n = C(e, t),
          r = tt(n);
        this.chars.push(n);
        let i = e.slice(t, t + r),
          a = i.toUpperCase();
        this.folded.push(C(a == i ? i.toLowerCase() : a, 0)), t += r;
      }
      this.astral = e.length != this.chars.length;
    }
    ret(e, t) {
      return this.score = e, this.matched = t, this;
    }
    match(e) {
      if (this.pattern.length == 0) return this.ret(-100, []);
      if (e.length < this.pattern.length) return null;
      let {
        chars: t,
        folded: n,
        any: r,
        precise: i,
        byWord: a
      } = this;
      if (t.length == 1) {
        let r = C(e, 0),
          i = tt(r),
          a = i == e.length ? 0 : -100;
        if (r != t[0]) {
          if (r == n[0]) a += -200;else return null;
        }
        return this.ret(a, [0, i]);
      }
      let o = e.indexOf(this.pattern);
      if (o == 0) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
      let s = t.length,
        c = 0;
      if (o < 0) {
        for (let i = 0, a = Math.min(e.length, 200); i < a && c < s;) {
          let a = C(e, i);
          (a == t[c] || a == n[c]) && (r[c++] = i), i += tt(a);
        }
        if (c < s) return null;
      }
      let l = 0,
        u = 0,
        d = !1,
        f = 0,
        p = -1,
        m = -1,
        h = /[a-z]/.test(e),
        g = !0;
      for (let r = 0, c = Math.min(e.length, 200), _ = 0; r < c && u < s;) {
        let c = C(e, r);
        o < 0 && (l < s && c == t[l] && (i[l++] = r), f < s && (c == t[f] || c == n[f] ? (f == 0 && (p = r), m = r + 1, f++) : f = 0));
        let v,
          y = c < 255 ? c >= 48 && c <= 57 || c >= 97 && c <= 122 ? 2 : +(c >= 65 && c <= 90) : (v = et(c)) == v.toLowerCase() ? v == v.toUpperCase() ? 0 : 2 : 1;
        (!r || y == 1 && h || _ == 0 && y != 0) && (t[u] == c || n[u] == c && (d = !0) ? a[u++] = r : a.length && (g = !1)), _ = y, r += tt(c);
      }
      return u == s && a[0] == 0 && g ? this.result(-100 + (d ? -200 : 0), a, e) : f == s && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : o > -1 ? this.ret(-700 - e.length, [o, o + this.pattern.length]) : f == s ? this.ret(-900 - e.length, [p, m]) : u == s ? this.result(-100 + (d ? -200 : 0) + -700 + (g ? 0 : -1100), a, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
    }
    result(e, t, n) {
      let r = [],
        i = 0;
      for (let e of t) {
        let t = e + (this.astral ? tt(C(n, e)) : 1);
        i && r[i - 1] == e ? r[i - 1] = t : (r[i++] = e, r[i++] = t);
      }
      return this.ret(e - n.length, r);
    }
  },
  af = class {
    constructor(e) {
      this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
    }
    match(e) {
      if (e.length < this.pattern.length) return null;
      let t = e.slice(0, this.pattern.length),
        n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
      return n == null ? null : (this.matched = [0, t.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
    }
  },
  Z = O.define({
    combine(e) {
      return Xt(e, {
        activateOnTyping: !0,
        activateOnCompletion: () => !1,
        activateOnTypingDelay: 100,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        tooltipClass: () => ``,
        optionClass: () => ``,
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        positionInfo: sf,
        filterStrict: !1,
        compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (e, t) => e && t,
        closeOnBlur: (e, t) => e && t,
        icons: (e, t) => e && t,
        tooltipClass: (e, t) => n => of(e(n), t(n)),
        optionClass: (e, t) => n => of(e(n), t(n)),
        addToOptions: (e, t) => e.concat(t),
        filterStrict: (e, t) => e || t
      });
    }
  });
function of(e, t) {
  return e ? t ? e + ` ` + t : e : t;
}
function sf(e, t, n, r, i, a) {
  let o = e.textDirection == B.RTL,
    s = o,
    c = !1,
    l = `top`,
    u,
    d,
    f = t.left - i.left,
    p = i.right - t.right,
    m = r.right - r.left,
    h = r.bottom - r.top;
  if (s && f < Math.min(m, p) ? s = !1 : !s && p < Math.min(m, f) && (s = !0), m <= (s ? f : p)) u = Math.max(i.top, Math.min(n.top, i.bottom - h)) - t.top, d = Math.min(400, s ? f : p);else {
    c = !0, d = Math.min(400, (o ? t.right : i.right - t.left) - 30);
    let e = i.bottom - t.bottom;
    e >= h || e > t.top ? u = n.bottom - t.top : (l = `bottom`, u = t.bottom - n.top);
  }
  let g = (t.bottom - t.top) / a.offsetHeight,
    _ = (t.right - t.left) / a.offsetWidth;
  return {
    style: `${l}: ${u / g}px; max-width: ${d / _}px`,
    class: `cm-completionInfo-` + (c ? o ? `left-narrow` : `right-narrow` : s ? `left` : `right`)
  };
}
var cf = A.define();
function lf(e) {
  let t = e.addToOptions.slice();
  return e.icons && t.push({
    render(e) {
      let t = document.createElement(`div`);
      return t.classList.add(`cm-completionIcon`), e.type && t.classList.add(...e.type.split(/\s+/g).map(e => `cm-completionIcon-` + e)), t.setAttribute(`aria-hidden`, `true`), t;
    },
    position: 20
  }), t.push({
    render(e, t, n, r) {
      let i = document.createElement(`span`);
      i.className = `cm-completionLabel`;
      let a = e.displayLabel || e.label,
        o = 0;
      for (let e = 0; e < r.length;) {
        let t = r[e++],
          n = r[e++];
        t > o && i.appendChild(document.createTextNode(a.slice(o, t)));
        let s = i.appendChild(document.createElement(`span`));
        s.appendChild(document.createTextNode(a.slice(t, n))), s.className = `cm-completionMatchedText`, o = n;
      }
      return o < a.length && i.appendChild(document.createTextNode(a.slice(o))), i;
    },
    position: 50
  }, {
    render(e) {
      if (!e.detail) return null;
      let t = document.createElement(`span`);
      return t.className = `cm-completionDetail`, t.textContent = e.detail, t;
    },
    position: 80
  }), t.sort((e, t) => e.position - t.position).map(e => e.render);
}
function uf(e, t, n) {
  if (e <= n) return {
    from: 0,
    to: e
  };
  if (t < 0 && (t = 0), t <= e >> 1) {
    let e = Math.floor(t / n);
    return {
      from: e * n,
      to: (e + 1) * n
    };
  }
  let r = Math.ceil((e - t) / n);
  return {
    from: e - r * n,
    to: e - (r - 1) * n
  };
}
var df = class {
  constructor(e, t, n) {
    this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: e => this.placeInfo(e),
      key: this
    }, this.space = null, this.currentClass = ``;
    let r = e.state.field(t),
      {
        options: i,
        selected: a
      } = r.open,
      o = e.state.facet(Z);
    this.optionContent = lf(o), this.optionClass = o.optionClass, this.tooltipClass = o.tooltipClass, this.range = uf(i.length, a, o.maxRenderedOptions), this.dom = document.createElement(`div`), this.dom.className = `cm-tooltip-autocomplete`, this.updateTooltipClass(e.state), this.dom.addEventListener(`mousedown`, n => {
      let {
        options: r
      } = e.state.field(t).open;
      for (let t = n.target, i; t && t != this.dom; t = t.parentNode) if (t.nodeName == `LI` && (i = /-(\d+)$/.exec(t.id)) && +i[1] < r.length) {
        this.applyCompletion(e, r[+i[1]]), n.preventDefault();
        return;
      }
      if (n.target == this.list) {
        let t = this.list.classList.contains(`cm-completionListIncompleteTop`) && n.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains(`cm-completionListIncompleteBottom`) && n.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
        t != null && (e.dispatch({
          effects: cf.of(t)
        }), n.preventDefault());
      }
    }), this.dom.addEventListener(`focusout`, t => {
      let n = e.state.field(this.stateField, !1);
      n && n.tooltip && e.state.facet(Z).closeOnBlur && t.relatedTarget != e.contentDOM && e.dispatch({
        effects: nf.of(null)
      });
    }), this.showOptions(i, r.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener(`scroll`, () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    let t = e.state.field(this.stateField),
      n = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), t != n) {
      let {
        options: r,
        selected: i,
        disabled: a
      } = t.open;
      (!n.open || n.open.options != r) && (this.range = uf(r.length, i, e.state.facet(Z).maxRenderedOptions), this.showOptions(r, t.id)), this.updateSel(), a != n.open?.disabled && this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`, !!a);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let e of this.currentClass.split(` `)) e && this.dom.classList.remove(e);
      for (let e of t.split(` `)) e && this.dom.classList.add(e);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField),
      t = e.open;
    (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = uf(t.options.length, t.selected, this.view.state.facet(Z).maxRenderedOptions), this.showOptions(t.options, e.id));
    let n = this.updateSelectedOption(t.selected);
    if (n) {
      this.destroyInfo();
      let {
          completion: r
        } = t.options[t.selected],
        {
          info: i
        } = r;
      if (!i) return;
      let a = typeof i == `string` ? document.createTextNode(i) : i(r);
      if (!a) return;
      `then` in a ? a.then(t => {
        t && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(t, r);
      }).catch(e => H(this.view.state, e, `completion info`)) : (this.addInfoPane(a, r), n.setAttribute(`aria-describedby`, this.info.id));
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let n = this.info = document.createElement(`div`);
    if (n.className = `cm-tooltip cm-completionInfo`, n.id = `cm-completionInfo-` + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null) n.appendChild(e), this.infoDestroy = null;else {
      let {
        dom: t,
        destroy: r
      } = e;
      n.appendChild(t), this.infoDestroy = r || null;
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++) n.nodeName != `LI` || !n.id ? r-- : r == e ? n.hasAttribute(`aria-selected`) || (n.setAttribute(`aria-selected`, `true`), t = n) : n.hasAttribute(`aria-selected`) && (n.removeAttribute(`aria-selected`), n.removeAttribute(`aria-describedby`));
    return t && pf(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector(`[aria-selected]`);
    if (!e || !this.info) return null;
    let t = this.dom.getBoundingClientRect(),
      n = this.info.getBoundingClientRect(),
      r = e.getBoundingClientRect(),
      i = this.space;
    if (!i) {
      let e = this.dom.ownerDocument.documentElement;
      i = {
        left: 0,
        top: 0,
        right: e.clientWidth,
        bottom: e.clientHeight
      };
    }
    return r.top > Math.min(i.bottom, t.bottom) - 10 || r.bottom < Math.max(i.top, t.top) + 10 ? null : this.view.state.facet(Z).positionInfo(this.view, t, r, n, i, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = `cm-tooltip cm-completionInfo ` + (e.class || ``)) : this.info.style.cssText = `top: -1e6px`);
  }
  createListBox(e, t, n) {
    let r = document.createElement(`ul`);
    r.id = t, r.setAttribute(`role`, `listbox`), r.setAttribute(`aria-expanded`, `true`), r.setAttribute(`aria-label`, this.view.state.phrase(`Completions`)), r.addEventListener(`mousedown`, e => {
      e.target == r && e.preventDefault();
    });
    let i = null;
    for (let a = n.from; a < n.to; a++) {
      let {
          completion: o,
          match: s
        } = e[a],
        {
          section: c
        } = o;
      if (c) {
        let e = typeof c == `string` ? c : c.name;
        if (e != i && (a > n.from || n.from == 0)) {
          if (i = e, typeof c != `string` && c.header) r.appendChild(c.header(c));else {
            let t = r.appendChild(document.createElement(`completion-section`));
            t.textContent = e;
          }
        }
      }
      let l = r.appendChild(document.createElement(`li`));
      l.id = t + `-` + a, l.setAttribute(`role`, `option`);
      let u = this.optionClass(o);
      u && (l.className = u);
      for (let e of this.optionContent) {
        let t = e(o, this.view.state, this.view, s);
        t && l.appendChild(t);
      }
    }
    return n.from && r.classList.add(`cm-completionListIncompleteTop`), n.to < e.length && r.classList.add(`cm-completionListIncompleteBottom`), r;
  }
  destroyInfo() {
    this.info &&= (this.infoDestroy && this.infoDestroy(), this.info.remove(), null);
  }
  destroy() {
    this.destroyInfo();
  }
};
function ff(e, t) {
  return n => new df(n, e, t);
}
function pf(e, t) {
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    i = n.height / e.offsetHeight;
  r.top < n.top ? e.scrollTop -= (n.top - r.top) / i : r.bottom > n.bottom && (e.scrollTop += (r.bottom - n.bottom) / i);
}
function mf(e) {
  return (e.boost || 0) * 100 + (e.apply ? 10 : 0) + (e.info ? 5 : 0) + +!!e.type;
}
function hf(e, t) {
  let n = [],
    r = null,
    i = null,
    a = e => {
      n.push(e);
      let {
        section: t
      } = e.completion;
      if (t) {
        r ||= [];
        let e = typeof t == `string` ? t : t.name;
        r.some(t => t.name == e) || r.push(typeof t == `string` ? {
          name: e
        } : t);
      }
    },
    o = t.facet(Z);
  for (let r of e) if (r.hasResult()) {
    let e = r.result.getMatch;
    if (r.result.filter === !1) for (let t of r.result.options) a(new Jd(t, r.source, e ? e(t) : [], 1e9 - n.length));else {
      let n = t.sliceDoc(r.from, r.to),
        s,
        c = o.filterStrict ? new af(n) : new rf(n);
      for (let t of r.result.options) if (s = c.match(t.label)) {
        let n = t.displayLabel ? e ? e(t, s.matched) : [] : s.matched,
          o = s.score + (t.boost || 0);
        if (a(new Jd(t, r.source, n, o)), typeof t.section == `object` && t.section.rank === `dynamic`) {
          let {
            name: e
          } = t.section;
          i ||= Object.create(null), i[e] = Math.max(o, i[e] || -1e9);
        }
      }
    }
  }
  if (r) {
    let e = Object.create(null),
      t = 0,
      a = (e, t) => (e.rank === `dynamic` && t.rank === `dynamic` ? i[t.name] - i[e.name] : 0) || (typeof e.rank == `number` ? e.rank : 1e9) - (typeof t.rank == `number` ? t.rank : 1e9) || (e.name < t.name ? -1 : 1);
    for (let n of r.sort(a)) t -= 1e5, e[n.name] = t;
    for (let t of n) {
      let {
        section: n
      } = t.completion;
      n && (t.score += e[typeof n == `string` ? n : n.name]);
    }
  }
  let s = [],
    c = null,
    l = o.compareCompletions;
  for (let e of n.sort((e, t) => t.score - e.score || l(e.completion, t.completion))) {
    let t = e.completion;
    !c || c.label != t.label || c.detail != t.detail || c.type != null && t.type != null && c.type != t.type || c.apply != t.apply || c.boost != t.boost ? s.push(e) : mf(e.completion) > mf(c) && (s[s.length - 1] = e), c = e.completion;
  }
  return s;
}
var gf = class e {
    constructor(e, t, n, r, i, a) {
      this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = i, this.disabled = a;
    }
    setSelected(t, n) {
      return t == this.selected || t >= this.options.length ? this : new e(this.options, xf(n, t), this.tooltip, this.timestamp, t, this.disabled);
    }
    static build(t, n, r, i, a, o) {
      if (i && !o && t.some(e => e.isPending)) return i.setDisabled();
      let s = hf(t, n);
      if (!s.length) return i && t.some(e => e.isPending) ? i.setDisabled() : null;
      let c = n.facet(Z).selectOnOpen ? 0 : -1;
      if (i && i.selected != c && i.selected != -1) {
        let e = i.options[i.selected].completion;
        for (let t = 0; t < s.length; t++) if (s[t].completion == e) {
          c = t;
          break;
        }
      }
      return new e(s, xf(r, c), {
        pos: t.reduce((e, t) => t.hasResult() ? Math.min(e, t.from) : e, 1e8),
        create: kf,
        above: a.aboveCursor
      }, i ? i.timestamp : Date.now(), c, !1);
    }
    map(t) {
      return new e(this.options, this.attrs, {
        ...this.tooltip,
        pos: t.mapPos(this.tooltip.pos)
      }, this.timestamp, this.selected, this.disabled);
    }
    setDisabled() {
      return new e(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
    }
  },
  _f = class e {
    constructor(e, t, n) {
      this.active = e, this.id = t, this.open = n;
    }
    static start() {
      return new e(Sf, `cm-ac-` + Math.floor(Math.random() * 2e6).toString(36), null);
    }
    update(t) {
      let {
          state: n
        } = t,
        r = n.facet(Z),
        i = (r.override || n.languageDataAt(`autocomplete`, Yd(n)).map(ef)).map(e => (this.active.find(t => t.source == e) || new wf(e, +!!this.active.some(e => e.state != 0))).update(t, r));
      i.length == this.active.length && i.every((e, t) => e == this.active[t]) && (i = this.active);
      let a = this.open,
        o = t.effects.some(e => e.is(Df));
      a && t.docChanged && (a = a.map(t.changes)), t.selection || i.some(e => e.hasResult() && t.changes.touchesRange(e.from, e.to)) || !vf(i, this.active) || o ? a = gf.build(i, n, this.id, a, r, o) : a && a.disabled && !i.some(e => e.isPending) && (a = null), !a && i.every(e => !e.isPending) && i.some(e => e.hasResult()) && (i = i.map(e => e.hasResult() ? new wf(e.source, 0) : e));
      for (let e of t.effects) e.is(cf) && (a &&= a.setSelected(e.value, this.id));
      return i == this.active && a == this.open ? this : new e(i, this.id, a);
    }
    get tooltip() {
      return this.open ? this.open.tooltip : null;
    }
    get attrs() {
      return this.open ? this.open.attrs : this.active.length ? yf : bf;
    }
  };
function vf(e, t) {
  if (e == t) return !0;
  for (let n = 0, r = 0;;) {
    for (; n < e.length && !e[n].hasResult();) n++;
    for (; r < t.length && !t[r].hasResult();) r++;
    let i = n == e.length,
      a = r == t.length;
    if (i || a) return i == a;
    if (e[n++].result != t[r++].result) return !1;
  }
}
var yf = {
    "aria-autocomplete": `list`
  },
  bf = {};
function xf(e, t) {
  let n = {
    "aria-autocomplete": `list`,
    "aria-haspopup": `listbox`,
    "aria-controls": e
  };
  return t > -1 && (n[`aria-activedescendant`] = e + `-` + t), n;
}
var Sf = [];
function Cf(e, t) {
  if (e.isUserEvent(`input.complete`)) {
    let n = e.annotation(Zd);
    if (n && t.activateOnCompletion(n)) return 12;
  }
  let n = e.isUserEvent(`input.type`);
  return n && t.activateOnTyping ? 5 : n ? 1 : e.isUserEvent(`delete.backward`) ? 2 : e.selection ? 8 : e.docChanged ? 16 : 0;
}
var wf = class e {
    constructor(e, t, n = !1) {
      this.source = e, this.state = t, this.explicit = n;
    }
    hasResult() {
      return !1;
    }
    get isPending() {
      return this.state == 1;
    }
    update(t, n) {
      let r = Cf(t, n),
        i = this;
      (r & 8 || r & 16 && this.touches(t)) && (i = new e(i.source, 0)), r & 4 && i.state == 0 && (i = new e(this.source, 1)), i = i.updateFor(t, r);
      for (let n of t.effects) if (n.is(tf)) i = new e(i.source, 1, n.value);else if (n.is(nf)) i = new e(i.source, 0);else if (n.is(Df)) for (let e of n.value) e.source == i.source && (i = e);
      return i;
    }
    updateFor(e, t) {
      return this.map(e.changes);
    }
    map(e) {
      return this;
    }
    touches(e) {
      return e.changes.touchesRange(Yd(e.state));
    }
  },
  Tf = class e extends wf {
    constructor(e, t, n, r, i, a) {
      super(e, 3, t), this.limit = n, this.result = r, this.from = i, this.to = a;
    }
    hasResult() {
      return !0;
    }
    updateFor(t, n) {
      if (!(n & 3)) return this.map(t.changes);
      let r = this.result;
      r.map && !t.changes.empty && (r = r.map(r, t.changes));
      let i = t.changes.mapPos(this.from),
        a = t.changes.mapPos(this.to, 1),
        o = Yd(t.state);
      if (o > a || !r || n & 2 && (Yd(t.startState) == this.from || o < this.limit)) return new wf(this.source, n & 4 ? 1 : 0);
      let s = t.changes.mapPos(this.limit);
      return Ef(r.validFor, t.state, i, a) ? new e(this.source, this.explicit, s, r, i, a) : r.update && (r = r.update(r, i, a, new Ud(t.state, o, !1))) ? new e(this.source, this.explicit, s, r, r.from, r.to ?? Yd(t.state)) : new wf(this.source, 1, this.explicit);
    }
    map(t) {
      if (t.empty) return this;
      let n = this.result.map ? this.result.map(this.result, t) : this.result;
      return n ? new e(this.source, this.explicit, t.mapPos(this.limit), n, t.mapPos(this.from), t.mapPos(this.to, 1)) : new wf(this.source, 0);
    }
    touches(e) {
      return e.changes.touchesRange(this.from, this.to);
    }
  };
function Ef(e, t, n, r) {
  if (!e) return !1;
  let i = t.sliceDoc(n, r);
  return typeof e == `function` ? e(i, n, r, t) : Xd(e, !0).test(i);
}
var Df = A.define({
    map(e, t) {
      return e.map(e => e.map(t));
    }
  }),
  Q = k.define({
    create() {
      return _f.start();
    },
    update(e, t) {
      return e.update(t);
    },
    provide: e => [Hc.from(e, e => e.tooltip), J.contentAttributes.from(e, e => e.attrs)]
  });
function Of(e, t) {
  let n = t.completion.apply || t.completion.label,
    r = e.state.field(Q).active.find(e => e.source == t.source);
  return r instanceof Tf && (typeof n == `string` ? e.dispatch({
    ...Qd(e.state, n, r.from, r.to),
    annotations: Zd.of(t.completion)
  }) : n(e, t.completion, r.from, r.to), !0);
}
var kf = ff(Q, Of);
function Af(e, t = `option`) {
  return n => {
    let r = n.state.field(Q, !1);
    if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(Z).interactionDelay) return !1;
    let i = 1,
      a;
    t == `page` && (a = $c(n, r.open.tooltip)) && (i = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector(`li`).offsetHeight) - 1));
    let {
        length: o
      } = r.open.options,
      s = r.open.selected > -1 ? r.open.selected + i * (e ? 1 : -1) : e ? 0 : o - 1;
    return s < 0 ? s = t == `page` ? 0 : o - 1 : s >= o && (s = t == `page` ? o - 1 : 0), n.dispatch({
      effects: cf.of(s)
    }), !0;
  };
}
var jf = e => {
    let t = e.state.field(Q, !1);
    return e.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < e.state.facet(Z).interactionDelay ? !1 : Of(e, t.open.options[t.open.selected]);
  },
  Mf = e => e.state.field(Q, !1) ? (e.dispatch({
    effects: tf.of(!0)
  }), !0) : !1,
  Nf = e => {
    let t = e.state.field(Q, !1);
    return !t || !t.active.some(e => e.state != 0) ? !1 : (e.dispatch({
      effects: nf.of(null)
    }), !0);
  },
  Pf = class {
    constructor(e, t) {
      this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
    }
  },
  Ff = 50,
  If = 1e3,
  Lf = U.fromClass(class {
    constructor(e) {
      this.view = e, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
      for (let t of e.state.field(Q).active) t.isPending && this.startQuery(t);
    }
    update(e) {
      let t = e.state.field(Q),
        n = e.state.facet(Z);
      if (!e.selectionSet && !e.docChanged && e.startState.field(Q) == t) return;
      let r = e.transactions.some(e => {
        let t = Cf(e, n);
        return t & 8 || (e.selection || e.docChanged) && !(t & 3);
      });
      for (let t = 0; t < this.running.length; t++) {
        let n = this.running[t];
        if (r || n.context.abortOnDocChange && e.docChanged || n.updates.length + e.transactions.length > Ff && Date.now() - n.time > If) {
          for (let e of n.context.abortListeners) try {
            e();
          } catch (e) {
            H(this.view.state, e);
          }
          n.context.abortListeners = null, this.running.splice(t--, 1);
        } else n.updates.push(...e.transactions);
      }
      this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), e.transactions.some(e => e.effects.some(e => e.is(tf))) && (this.pendingStart = !0);
      let i = this.pendingStart ? 50 : n.activateOnTypingDelay;
      if (this.debounceUpdate = t.active.some(e => e.isPending && !this.running.some(t => t.active.source == e.source)) ? setTimeout(() => this.startUpdate(), i) : -1, this.composing != 0) for (let t of e.transactions) t.isUserEvent(`input.type`) ? this.composing = 2 : this.composing == 2 && t.selection && (this.composing = 3);
    }
    startUpdate() {
      this.debounceUpdate = -1, this.pendingStart = !1;
      let {
          state: e
        } = this.view,
        t = e.field(Q);
      for (let e of t.active) e.isPending && !this.running.some(t => t.active.source == e.source) && this.startQuery(e);
      this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Z).updateSyncTime));
    }
    startQuery(e) {
      let {
          state: t
        } = this.view,
        n = new Ud(t, Yd(t), e.explicit, this.view),
        r = new Pf(e, n);
      this.running.push(r), Promise.resolve(e.source(n)).then(e => {
        r.context.aborted || (r.done = e || null, this.scheduleAccept());
      }, e => {
        this.view.dispatch({
          effects: nf.of(null)
        }), H(this.view.state, e);
      });
    }
    scheduleAccept() {
      this.running.every(e => e.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Z).updateSyncTime));
    }
    accept() {
      this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
      let e = [],
        t = this.view.state.facet(Z),
        n = this.view.state.field(Q);
      for (let r = 0; r < this.running.length; r++) {
        let i = this.running[r];
        if (i.done === void 0) continue;
        if (this.running.splice(r--, 1), i.done) {
          let n = Yd(i.updates.length ? i.updates[0].startState : this.view.state),
            r = Math.min(n, i.done.from + +!i.active.explicit),
            a = new Tf(i.active.source, i.active.explicit, r, i.done, i.done.from, i.done.to ?? n);
          for (let e of i.updates) a = a.update(e, t);
          if (a.hasResult()) {
            e.push(a);
            continue;
          }
        }
        let a = n.active.find(e => e.source == i.active.source);
        if (a && a.isPending) {
          if (i.done == null) {
            let n = new wf(i.active.source, 0);
            for (let e of i.updates) n = n.update(e, t);
            n.isPending || e.push(n);
          } else this.startQuery(a);
        }
      }
      (e.length || n.open && n.open.disabled) && this.view.dispatch({
        effects: Df.of(e)
      });
    }
  }, {
    eventHandlers: {
      blur(e) {
        let t = this.view.state.field(Q, !1);
        if (t && t.tooltip && this.view.state.facet(Z).closeOnBlur) {
          let n = t.open && $c(this.view, t.open.tooltip);
          (!n || !n.dom.contains(e.relatedTarget)) && setTimeout(() => this.view.dispatch({
            effects: nf.of(null)
          }), 10);
        }
      },
      compositionstart() {
        this.composing = 1;
      },
      compositionend() {
        this.composing == 3 && setTimeout(() => this.view.dispatch({
          effects: tf.of(!1)
        }), 20), this.composing = 0;
      }
    }
  }),
  Rf = typeof navigator == `object` && /Win/.test(navigator.platform),
  zf = bt.highest(J.domEventHandlers({
    keydown(e, t) {
      let n = t.state.field(Q, !1);
      if (!n || !n.open || n.open.disabled || n.open.selected < 0 || e.key.length > 1 || e.ctrlKey && !(Rf && e.altKey) || e.metaKey) return !1;
      let r = n.open.options[n.open.selected],
        i = n.active.find(e => e.source == r.source),
        a = r.completion.commitCharacters || i.result.commitCharacters;
      return a && a.indexOf(e.key) > -1 && Of(t, r), !1;
    }
  })),
  Bf = J.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: `monospace`,
        whiteSpace: `nowrap`,
        overflow: `hidden auto`,
        maxWidth_fallback: `700px`,
        maxWidth: `min(700px, 95vw)`,
        minWidth: `250px`,
        maxHeight: `10em`,
        height: `100%`,
        listStyle: `none`,
        margin: 0,
        padding: 0,
        "& > li, & > completion-section": {
          padding: `1px 3px`,
          lineHeight: 1.2
        },
        "& > li": {
          overflowX: `hidden`,
          textOverflow: `ellipsis`,
          cursor: `pointer`
        },
        "& > completion-section": {
          display: `list-item`,
          borderBottom: `1px solid silver`,
          paddingLeft: `0.5em`,
          opacity: .7
        }
      }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: `#17c`,
      color: `white`
    },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: `#777`
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: `#347`,
      color: `white`
    },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: `#444`
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
      content: `"···"`,
      opacity: .5,
      display: `block`,
      textAlign: `center`,
      cursor: `pointer`
    },
    ".cm-tooltip.cm-completionInfo": {
      position: `absolute`,
      padding: `3px 9px`,
      width: `max-content`,
      maxWidth: `400px`,
      boxSizing: `border-box`,
      whiteSpace: `pre-line`
    },
    ".cm-completionInfo.cm-completionInfo-left": {
      right: `100%`
    },
    ".cm-completionInfo.cm-completionInfo-right": {
      left: `100%`
    },
    ".cm-completionInfo.cm-completionInfo-left-narrow": {
      right: `30px`
    },
    ".cm-completionInfo.cm-completionInfo-right-narrow": {
      left: `30px`
    },
    "&light .cm-snippetField": {
      backgroundColor: `#00000022`
    },
    "&dark .cm-snippetField": {
      backgroundColor: `#ffffff22`
    },
    ".cm-snippetFieldPosition": {
      verticalAlign: `text-top`,
      width: 0,
      height: `1.15em`,
      display: `inline-block`,
      margin: `0 -0.7px -.7em`,
      borderLeft: `1.4px dotted #888`
    },
    ".cm-completionMatchedText": {
      textDecoration: `underline`
    },
    ".cm-completionDetail": {
      marginLeft: `0.5em`,
      fontStyle: `italic`
    },
    ".cm-completionIcon": {
      fontSize: `90%`,
      width: `.8em`,
      display: `inline-block`,
      textAlign: `center`,
      paddingRight: `.6em`,
      opacity: `0.6`,
      boxSizing: `content-box`
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
      "&:after": {
        content: `'ƒ'`
      }
    },
    ".cm-completionIcon-class": {
      "&:after": {
        content: `'○'`
      }
    },
    ".cm-completionIcon-interface": {
      "&:after": {
        content: `'◌'`
      }
    },
    ".cm-completionIcon-variable": {
      "&:after": {
        content: `'𝑥'`
      }
    },
    ".cm-completionIcon-constant": {
      "&:after": {
        content: `'𝐶'`
      }
    },
    ".cm-completionIcon-type": {
      "&:after": {
        content: `'𝑡'`
      }
    },
    ".cm-completionIcon-enum": {
      "&:after": {
        content: `'∪'`
      }
    },
    ".cm-completionIcon-property": {
      "&:after": {
        content: `'□'`
      }
    },
    ".cm-completionIcon-keyword": {
      "&:after": {
        content: `'🔑︎'`
      }
    },
    ".cm-completionIcon-namespace": {
      "&:after": {
        content: `'▢'`
      }
    },
    ".cm-completionIcon-text": {
      "&:after": {
        content: `'abc'`,
        fontSize: `50%`,
        verticalAlign: `middle`
      }
    }
  }),
  Vf = class {
    constructor(e, t, n, r) {
      this.field = e, this.line = t, this.from = n, this.to = r;
    }
  },
  Hf = class e {
    constructor(e, t, n) {
      this.field = e, this.from = t, this.to = n;
    }
    map(t) {
      let n = t.mapPos(this.from, -1, w.TrackDel),
        r = t.mapPos(this.to, 1, w.TrackDel);
      return n == null || r == null ? null : new e(this.field, n, r);
    }
  },
  Uf = class e {
    constructor(e, t) {
      this.lines = e, this.fieldPositions = t;
    }
    instantiate(e, t) {
      let n = [],
        r = [t],
        i = e.doc.lineAt(t),
        a = /^\s*/.exec(i.text)[0];
      for (let i of this.lines) {
        if (n.length) {
          let n = a,
            o = /^\t*/.exec(i)[0].length;
          for (let t = 0; t < o; t++) n += e.facet(tu);
          r.push(t + n.length - o), i = n + i.slice(o);
        }
        n.push(i), t += i.length + 1;
      }
      return {
        text: n,
        ranges: this.fieldPositions.map(e => new Hf(e.field, r[e.line] + e.from, r[e.line] + e.to))
      };
    }
    static parse(t) {
      let n = [],
        r = [],
        i = [],
        a;
      for (let e of t.split(/\r\n?|\n/)) {
        for (; a = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(e);) {
          let t = a[1] ? +a[1] : null,
            o = a[2] || a[3] || ``,
            s = -1;
          t === 0 && (t = 1e9);
          let c = o.replace(/\\[{}]/g, e => e[1]);
          for (let e = 0; e < n.length; e++) (t == null ? c && n[e].name == c : n[e].seq == t) && (s = e);
          if (s < 0) {
            let e = 0;
            for (; e < n.length && (t == null || n[e].seq != null && n[e].seq < t);) e++;
            n.splice(e, 0, {
              seq: t,
              name: c
            }), s = e;
            for (let e of i) e.field >= s && e.field++;
          }
          for (let e of i) if (e.line == r.length && e.from > a.index) {
            let t = a[2] ? 3 + (a[1] || ``).length : 2;
            e.from -= t, e.to -= t;
          }
          i.push(new Vf(s, r.length, a.index, a.index + c.length)), e = e.slice(0, a.index) + o + e.slice(a.index + a[0].length);
        }
        e = e.replace(/\\([{}])/g, (e, t, n) => {
          for (let e of i) e.line == r.length && e.from > n && (e.from--, e.to--);
          return t;
        }), r.push(e);
      }
      return new e(r, i);
    }
  },
  Wf = z.widget({
    widget: new class extends Jn {
      toDOM() {
        let e = document.createElement(`span`);
        return e.className = `cm-snippetFieldPosition`, e;
      }
      ignoreEvent() {
        return !1;
      }
    }()
  }),
  Gf = z.mark({
    class: `cm-snippetField`
  }),
  Kf = class e {
    constructor(e, t) {
      this.ranges = e, this.active = t, this.deco = z.set(e.map(e => (e.from == e.to ? Wf : Gf).range(e.from, e.to)), !0);
    }
    map(t) {
      let n = [];
      for (let e of this.ranges) {
        let r = e.map(t);
        if (!r) return null;
        n.push(r);
      }
      return new e(n, this.active);
    }
    selectionInsideField(e) {
      return e.ranges.every(e => this.ranges.some(t => t.field == this.active && t.from <= e.from && t.to >= e.to));
    }
  },
  qf = A.define({
    map(e, t) {
      return e && e.map(t);
    }
  }),
  Jf = A.define(),
  Yf = k.define({
    create() {
      return null;
    },
    update(e, t) {
      for (let n of t.effects) {
        if (n.is(qf)) return n.value;
        if (n.is(Jf) && e) return new Kf(e.ranges, n.value);
      }
      return e && t.docChanged && (e = e.map(t.changes)), e && t.selection && !e.selectionInsideField(t.selection) && (e = null), e;
    },
    provide: e => J.decorations.from(e, e => e ? e.deco : z.none)
  });
function Xf(e, t) {
  return D.create(e.filter(e => e.field == t).map(e => D.range(e.from, e.to)));
}
function Zf(e) {
  let t = Uf.parse(e);
  return (e, n, r, i) => {
    let {
        text: a,
        ranges: o
      } = t.instantiate(e.state, r),
      {
        main: s
      } = e.state.selection,
      c = {
        changes: {
          from: r,
          to: i == s.from ? s.to : i,
          insert: b.of(a)
        },
        scrollIntoView: !0,
        annotations: n ? [Zd.of(n), j.userEvent.of(`input.complete`)] : void 0
      };
    if (o.length && (c.selection = Xf(o, 0)), o.some(e => e.field > 0)) {
      let t = new Kf(o, 0),
        n = c.effects = [qf.of(t)];
      e.state.field(Yf, !1) === void 0 && n.push(A.appendConfig.of([Yf, tp, np, Bf]));
    }
    e.dispatch(e.state.update(c));
  };
}
function Qf(e) {
  return ({
    state: t,
    dispatch: n
  }) => {
    let r = t.field(Yf, !1);
    if (!r || e < 0 && r.active == 0) return !1;
    let i = r.active + e,
      a = e > 0 && !r.ranges.some(t => t.field == i + e);
    return n(t.update({
      selection: Xf(r.ranges, i),
      effects: qf.of(a ? null : new Kf(r.ranges, i)),
      scrollIntoView: !0
    })), !0;
  };
}
var $f = [{
    key: `Tab`,
    run: Qf(1),
    shift: Qf(-1)
  }, {
    key: `Escape`,
    run: ({
      state: e,
      dispatch: t
    }) => e.field(Yf, !1) ? (t(e.update({
      effects: qf.of(null)
    })), !0) : !1
  }],
  ep = O.define({
    combine(e) {
      return e.length ? e[0] : $f;
    }
  }),
  tp = bt.highest(Os.compute([ep], e => e.facet(ep)));
function $(e, t) {
  return {
    ...t,
    apply: Zf(e)
  };
}
var np = J.domEventHandlers({
    mousedown(e, t) {
      let n = t.state.field(Yf, !1),
        r;
      if (!n || (r = t.posAtCoords({
        x: e.clientX,
        y: e.clientY
      })) == null) return !1;
      let i = n.ranges.find(e => e.from <= r && e.to >= r);
      return !i || i.field == n.active ? !1 : (t.dispatch({
        selection: Xf(n.ranges, i.field),
        effects: qf.of(n.ranges.some(e => e.field > i.field) ? new Kf(n.ranges, i.field) : null),
        scrollIntoView: !0
      }), !0);
    }
  }),
  rp = {
    brackets: [`(`, `[`, `{`, `'`, `"`],
    before: `)]}:;>`,
    stringPrefixes: []
  },
  ip = A.define({
    map(e, t) {
      return t.mapPos(e, -1, w.TrackAfter) ?? void 0;
    }
  }),
  ap = new class extends Zt {}();
ap.startSide = 1, ap.endSide = -1;
var op = k.define({
  create() {
    return P.empty;
  },
  update(e, t) {
    if (e = e.map(t.changes), t.selection) {
      let n = t.state.doc.lineAt(t.selection.main.head);
      e = e.update({
        filter: e => e >= n.from && e <= n.to
      });
    }
    for (let n of t.effects) n.is(ip) && (e = e.update({
      add: [ap.range(n.value, n.value + 1)]
    }));
    return e;
  }
});
function sp() {
  return [fp, op];
}
var cp = `()[]{}<>«»»«［］｛｝`;
function lp(e) {
  for (let t = 0; t < 16; t += 2) if (cp.charCodeAt(t) == e) return cp.charAt(t + 1);
  return et(e < 128 ? e : e + 1);
}
function up(e, t) {
  return e.languageDataAt(`closeBrackets`, t)[0] || rp;
}
var dp = typeof navigator == `object` && /Android\b/.test(navigator.userAgent),
  fp = J.inputHandler.of((e, t, n, r) => {
    if ((dp ? e.composing : e.compositionStarted) || e.state.readOnly) return !1;
    let i = e.state.selection.main;
    if (r.length > 2 || r.length == 2 && tt(C(r, 0)) == 1 || t != i.from || n != i.to) return !1;
    let a = mp(e.state, r);
    return a ? (e.dispatch(a), !0) : !1;
  }),
  pp = [{
    key: `Backspace`,
    run: ({
      state: e,
      dispatch: t
    }) => {
      if (e.readOnly) return !1;
      let n = up(e, e.selection.main.head).brackets || rp.brackets,
        r = null,
        i = e.changeByRange(t => {
          if (t.empty) {
            let r = _p(e.doc, t.head);
            for (let i of n) if (i == r && gp(e.doc, t.head) == lp(C(i, 0))) return {
              changes: {
                from: t.head - i.length,
                to: t.head + i.length
              },
              range: D.cursor(t.head - i.length)
            };
          }
          return {
            range: r = t
          };
        });
      return r || t(e.update(i, {
        scrollIntoView: !0,
        userEvent: `delete.backward`
      })), !r;
    }
  }];
function mp(e, t) {
  let n = up(e, e.selection.main.head),
    r = n.brackets || rp.brackets;
  for (let i of r) {
    let a = lp(C(i, 0));
    if (t == i) return a == i ? bp(e, i, r.indexOf(i + i + i) > -1, n) : vp(e, i, a, n.before || rp.before);
    if (t == a && hp(e, e.selection.main.from)) return yp(e, i, a);
  }
  return null;
}
function hp(e, t) {
  let n = !1;
  return e.field(op).between(0, e.doc.length, e => {
    e == t && (n = !0);
  }), n;
}
function gp(e, t) {
  let n = e.sliceString(t, t + 2);
  return n.slice(0, tt(C(n, 0)));
}
function _p(e, t) {
  let n = e.sliceString(t - 2, t);
  return tt(C(n, 0)) == n.length ? n : n.slice(1);
}
function vp(e, t, n, r) {
  let i = null,
    a = e.changeByRange(a => {
      if (!a.empty) return {
        changes: [{
          insert: t,
          from: a.from
        }, {
          insert: n,
          from: a.to
        }],
        effects: ip.of(a.to + t.length),
        range: D.range(a.anchor + t.length, a.head + t.length)
      };
      let o = gp(e.doc, a.head);
      return !o || /\s/.test(o) || r.indexOf(o) > -1 ? {
        changes: {
          insert: t + n,
          from: a.head
        },
        effects: ip.of(a.head + t.length),
        range: D.cursor(a.head + t.length)
      } : {
        range: i = a
      };
    });
  return i ? null : e.update(a, {
    scrollIntoView: !0,
    userEvent: `input.type`
  });
}
function yp(e, t, n) {
  let r = null,
    i = e.changeByRange(t => t.empty && gp(e.doc, t.head) == n ? {
      changes: {
        from: t.head,
        to: t.head + n.length,
        insert: n
      },
      range: D.cursor(t.head + n.length)
    } : r = {
      range: t
    });
  return r ? null : e.update(i, {
    scrollIntoView: !0,
    userEvent: `input.type`
  });
}
function bp(e, t, n, r) {
  let i = r.stringPrefixes || rp.stringPrefixes,
    a = null,
    o = e.changeByRange(r => {
      if (!r.empty) return {
        changes: [{
          insert: t,
          from: r.from
        }, {
          insert: t,
          from: r.to
        }],
        effects: ip.of(r.to + t.length),
        range: D.range(r.anchor + t.length, r.head + t.length)
      };
      let o = r.head,
        s = gp(e.doc, o),
        c;
      if (s == t) {
        if (xp(e, o)) return {
          changes: {
            insert: t + t,
            from: o
          },
          effects: ip.of(o + t.length),
          range: D.cursor(o + t.length)
        };
        if (hp(e, o)) {
          let r = n && e.sliceDoc(o, o + t.length * 3) == t + t + t ? t + t + t : t;
          return {
            changes: {
              from: o,
              to: o + r.length,
              insert: r
            },
            range: D.cursor(o + r.length)
          };
        }
      } else if (n && e.sliceDoc(o - 2 * t.length, o) == t + t && (c = Cp(e, o - 2 * t.length, i)) > -1 && xp(e, c)) return {
        changes: {
          insert: t + t + t + t,
          from: o
        },
        effects: ip.of(o + t.length),
        range: D.cursor(o + t.length)
      };else if (e.charCategorizer(o)(s) != M.Word && Cp(e, o, i) > -1 && !Sp(e, o, t, i)) return {
        changes: {
          insert: t + t,
          from: o
        },
        effects: ip.of(o + t.length),
        range: D.cursor(o + t.length)
      };
      return {
        range: a = r
      };
    });
  return a ? null : e.update(o, {
    scrollIntoView: !0,
    userEvent: `input.type`
  });
}
function xp(e, t) {
  let n = X(e).resolveInner(t + 1);
  return n.parent && n.from == t;
}
function Sp(e, t, n, r) {
  let i = X(e).resolveInner(t, -1),
    a = r.reduce((e, t) => Math.max(e, t.length), 0);
  for (let o = 0; o < 5; o++) {
    let o = e.sliceDoc(i.from, Math.min(i.to, i.from + n.length + a)),
      s = o.indexOf(n);
    if (!s || s > -1 && r.indexOf(o.slice(0, s)) > -1) {
      let t = i.firstChild;
      for (; t && t.from == i.from && t.to - t.from > n.length + s;) {
        if (e.sliceDoc(t.to - n.length, t.to) == n) return !1;
        t = t.firstChild;
      }
      return !0;
    }
    let c = i.to == t && i.parent;
    if (!c) break;
    i = c;
  }
  return !1;
}
function Cp(e, t, n) {
  let r = e.charCategorizer(t);
  if (r(e.sliceDoc(t - 1, t)) != M.Word) return t;
  for (let i of n) {
    let n = t - i.length;
    if (e.sliceDoc(n, t) == i && r(e.sliceDoc(n - 1, n)) != M.Word) return n;
  }
  return -1;
}
function wp(e = {}) {
  return [zf, Q, Z.of(e), Lf, Ep, Bf];
}
var Tp = [{
    key: `Ctrl-Space`,
    run: Mf
  }, {
    mac: "Alt-`",
    run: Mf
  }, {
    mac: `Alt-i`,
    run: Mf
  }, {
    key: `Escape`,
    run: Nf
  }, {
    key: `ArrowDown`,
    run: Af(!0)
  }, {
    key: `ArrowUp`,
    run: Af(!1)
  }, {
    key: `PageDown`,
    run: Af(!0, `page`)
  }, {
    key: `PageUp`,
    run: Af(!1, `page`)
  }, {
    key: `Enter`,
    run: jf
  }],
  Ep = bt.highest(Os.computeN([Z], e => e.facet(Z).defaultKeymap ? [Tp] : [])),
  Dp = [$("function ${name}(${params}) {\n	${}\n}", {
    label: `function`,
    detail: `definition`,
    type: `keyword`
  }), $("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
    label: `for`,
    detail: `loop`,
    type: `keyword`
  }), $("for (let ${name} of ${collection}) {\n	${}\n}", {
    label: `for`,
    detail: `of loop`,
    type: `keyword`
  }), $(`do {
	\${}
} while (\${})`, {
    label: `do`,
    detail: `loop`,
    type: `keyword`
  }), $(`while (\${}) {
	\${}
}`, {
    label: `while`,
    detail: `loop`,
    type: `keyword`
  }), $(`try {
	\${}
} catch (\${error}) {
	\${}
}`, {
    label: `try`,
    detail: `/ catch block`,
    type: `keyword`
  }), $(`if (\${}) {
	\${}
}`, {
    label: `if`,
    detail: `block`,
    type: `keyword`
  }), $(`if (\${}) {
	\${}
} else {
	\${}
}`, {
    label: `if`,
    detail: `/ else block`,
    type: `keyword`
  }), $(`class \${name} {
	constructor(\${params}) {
		\${}
	}
}`, {
    label: `class`,
    detail: `definition`,
    type: `keyword`
  }), $('import {${names}} from "${module}"\n${}', {
    label: `import`,
    detail: `named`,
    type: `keyword`
  }), $('import ${name} from "${module}"\n${}', {
    label: `import`,
    detail: `default`,
    type: `keyword`
  })],
  Op = Dp.concat([$(`interface \${name} {
	\${}
}`, {
    label: `interface`,
    detail: `definition`,
    type: `keyword`
  }), $("type ${name} = ${type}", {
    label: `type`,
    detail: `definition`,
    type: `keyword`
  }), $(`enum \${name} {
	\${}
}`, {
    label: `enum`,
    detail: `definition`,
    type: `keyword`
  })]),
  kp = new o(),
  Ap = new Set([`Script`, `Block`, `FunctionExpression`, `FunctionDeclaration`, `ArrowFunction`, `MethodDeclaration`, `ForStatement`]);
function jp(e) {
  return (t, n) => {
    let r = t.node.getChild(`VariableDefinition`);
    return r && n(r, e), !0;
  };
}
var Mp = [`FunctionDeclaration`],
  Np = {
    FunctionDeclaration: jp(`function`),
    ClassDeclaration: jp(`class`),
    ClassExpression: () => !0,
    EnumDeclaration: jp(`constant`),
    TypeAliasDeclaration: jp(`type`),
    NamespaceDeclaration: jp(`namespace`),
    VariableDefinition(e, t) {
      e.matchContext(Mp) || t(e, `variable`);
    },
    TypeDefinition(e, t) {
      t(e, `type`);
    },
    __proto__: null
  };
function Pp(e, t) {
  let n = kp.get(t);
  if (n) return n;
  let i = [],
    a = !0;
  function o(t, n) {
    let r = e.sliceString(t.from, t.to);
    i.push({
      label: r,
      type: n
    });
  }
  return t.cursor(r.IncludeAnonymous).iterate(t => {
    if (a) a = !1;else if (t.name) {
      let e = Np[t.name];
      if (e && e(t, o) || Ap.has(t.name)) return !1;
    } else if (t.to - t.from > 8192) {
      for (let n of Pp(e, t.node)) i.push(n);
      return !1;
    }
  }), kp.set(t, i), i;
}
var Fp = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
  Ip = [`TemplateString`, `String`, `RegExp`, `LineComment`, `BlockComment`, `VariableDefinition`, `TypeDefinition`, `Label`, `PropertyDefinition`, `PropertyName`, `PrivatePropertyDefinition`, `PrivatePropertyName`, `JSXText`, `JSXAttributeValue`, `JSXOpenTag`, `JSXCloseTag`, `JSXSelfClosingTag`, `.`, `?.`];
function Lp(e) {
  let t = X(e.state).resolveInner(e.pos, -1);
  if (Ip.indexOf(t.name) > -1) return null;
  let n = t.name == `VariableName` || t.to - t.from < 20 && Fp.test(e.state.sliceDoc(t.from, t.to));
  if (!n && !e.explicit) return null;
  let r = [];
  for (let n = t; n; n = n.parent) Ap.has(n.name) && (r = r.concat(Pp(e.state.doc, n)));
  return {
    options: r,
    from: n ? t.from : e.pos,
    validFor: Fp
  };
}
var Rp = Hl.define({
    name: `javascript`,
    parser: f.configure({
      props: [ou.add({
        IfStatement: vu({
          except: /^\s*({|else\b)/
        }),
        TryStatement: vu({
          except: /^\s*({|catch\b|finally\b)/
        }),
        LabeledStatement: _u,
        SwitchBody: e => {
          let t = e.textAfter,
            n = /^\s*\}/.test(t),
            r = /^\s*(case|default)\b/.test(t);
          return e.baseIndent + (n ? 0 : r ? 1 : 2) * e.unit;
        },
        Block: hu({
          closing: `}`
        }),
        ArrowFunction: e => e.baseIndent + e.unit,
        "TemplateString BlockComment": () => null,
        "Statement Property": vu({
          except: /^\s*{/
        }),
        JSXElement(e) {
          let t = /^\s*<\//.test(e.textAfter);
          return e.lineIndent(e.node.from) + (t ? 0 : e.unit);
        },
        JSXEscape(e) {
          let t = /\s*\}/.test(e.textAfter);
          return e.lineIndent(e.node.from) + (t ? 0 : e.unit);
        },
        "JSXOpenTag JSXSelfClosingTag"(e) {
          return e.column(e.node.from) + e.unit;
        }
      }), Su.add({
        "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": Cu,
        BlockComment(e) {
          return {
            from: e.from + 2,
            to: e.to - 2
          };
        },
        JSXElement(e) {
          let t = e.firstChild;
          if (!t || t.name == `JSXSelfClosingTag`) return null;
          let n = e.lastChild;
          return {
            from: t.to,
            to: n.type.isError ? e.to : n.from
          };
        },
        "JSXSelfClosingTag JSXOpenTag"(e) {
          let t = e.firstChild?.nextSibling,
            n = e.lastChild;
          return !t || t.type.isError ? null : {
            from: t.to,
            to: n.type.isError ? e.to : n.from
          };
        }
      })]
    }),
    languageData: {
      closeBrackets: {
        brackets: [`(`, `[`, `{`, `'`, `"`, "`"]
      },
      commentTokens: {
        line: `//`,
        block: {
          open: `/*`,
          close: `*/`
        }
      },
      indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
      wordChars: `$`
    }
  }),
  zp = {
    test: e => /^JSX/.test(e.name),
    facet: zl({
      commentTokens: {
        block: {
          open: `{/*`,
          close: `*/}`
        }
      }
    })
  },
  Bp = Rp.configure({
    dialect: `ts`
  }, `typescript`),
  Vp = Rp.configure({
    dialect: `jsx`,
    props: [Bl.add(e => e.isTop ? [zp] : void 0)]
  }),
  Hp = Rp.configure({
    dialect: `jsx ts`,
    props: [Bl.add(e => e.isTop ? [zp] : void 0)]
  }, `typescript`),
  Up = e => ({
    label: e,
    type: `keyword`
  }),
  Wp = `break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield`.split(` `).map(Up),
  Gp = Wp.concat([`declare`, `implements`, `private`, `protected`, `public`].map(Up));
function Kp(e = {}) {
  let t = e.jsx ? e.typescript ? Hp : Vp : e.typescript ? Bp : Rp,
    n = e.typescript ? Op.concat(Gp) : Dp.concat(Wp);
  return new Ql(t, [Rp.data.of({
    autocomplete: qd(Ip, Kd(n))
  }), Rp.data.of({
    autocomplete: Lp
  }), e.jsx ? Xp : []]);
}
function qp(e) {
  for (;;) {
    if (e.name == `JSXOpenTag` || e.name == `JSXSelfClosingTag` || e.name == `JSXFragmentTag`) return e;
    if (e.name == `JSXEscape` || !e.parent) return null;
    e = e.parent;
  }
}
function Jp(e, t, n = e.length) {
  for (let r = t?.firstChild; r; r = r.nextSibling) if (r.name == `JSXIdentifier` || r.name == `JSXBuiltin` || r.name == `JSXNamespacedName` || r.name == `JSXMemberExpression`) return e.sliceString(r.from, Math.min(r.to, n));
  return ``;
}
var Yp = typeof navigator == `object` && /Android\b/.test(navigator.userAgent),
  Xp = J.inputHandler.of((e, t, n, r, i) => {
    if ((Yp ? e.composing : e.compositionStarted) || e.state.readOnly || t != n || r != `>` && r != `/` || !Rp.isActiveAt(e.state, t, -1)) return !1;
    let a = i(),
      {
        state: o
      } = a,
      s = o.changeByRange(e => {
        let {
            head: t
          } = e,
          n = X(o).resolveInner(t - 1, -1),
          i;
        if (n.name == `JSXStartTag` && (n = n.parent), !(o.doc.sliceString(t - 1, t) != r || n.name == `JSXAttributeValue` && n.to > t)) {
          if (r == `>` && n.name == `JSXFragmentTag`) return {
            range: e,
            changes: {
              from: t,
              insert: `</>`
            }
          };
          if (r == `/` && n.name == `JSXStartCloseTag`) {
            let e = n.parent,
              r = e.parent;
            if (r && e.from == t - 2 && ((i = Jp(o.doc, r.firstChild, t)) || r.firstChild?.name == `JSXFragmentTag`)) {
              let e = `${i}>`;
              return {
                range: D.cursor(t + e.length, -1),
                changes: {
                  from: t,
                  insert: e
                }
              };
            }
          } else if (r == `>`) {
            let r = qp(n);
            if (r && r.name == `JSXOpenTag` && !/^\/?>|^<\//.test(o.doc.sliceString(t, t + 2)) && (i = Jp(o.doc, r, t))) return {
              range: e,
              changes: {
                from: t,
                insert: `</${i}>`
              }
            };
          }
        }
        return {
          range: e
        };
      });
    return !s.changes.empty && (e.dispatch([a, o.update(s, {
      userEvent: `input.complete`,
      scrollIntoView: !0
    })]), !0);
  });
export { Nl as $, ou as A, J as B, zl as C, S as Ct, xu as D, Su as E, _d as F, Ks as G, Jn as H, ed as I, yc as J, nc as K, X as L, ru as M, tu as N, nu as O, Rl as P, Os as Q, z as R, rd as S, hn as St, zu as T, Qc as U, U as V, Mc as W, fc as X, Ll as Y, Zc as Z, $l as _, b as _t, Bp as a, An as at, pd as b, tt as bt, sp as c, T as ct, Hd as d, N as dt, Cc as et, Vd as f, O as ft, Y as g, k as gt, Hl as h, A as ht, Hp as i, ol as it, bu as j, iu as k, pp as l, M as lt, au as m, rn as mt, Rp as n, js as nt, Ud as o, Ft as ot, Xu as p, bt as pt, nl as q, Vp as r, sl as rt, wp as s, rt as st, Kp as t, kc as tt, Tp as u, D as ut, Ql as v, j as vt, Ju as w, et as wt, md as x, Xt as xt, Gl as y, C as yt, B as z };
