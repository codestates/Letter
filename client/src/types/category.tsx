import thx1 from "../letterimg/스승의날.png";
import thx2 from "../letterimg/어버이날.png";
import thx3 from "../letterimg/크리스마스.png";
import thx4 from "../letterimg/결혼기념일.png";
import cong1 from "../letterimg/결혼축하.png";
import cong2 from "../letterimg/개업.png";
import cong3 from "../letterimg/생일.png";
import cong4 from "../letterimg/성년.png";
import req1 from "../letterimg/자영업.png";
import req2 from "../letterimg/개업식.png";
import req3 from "../letterimg/결혼초대.png";
import req4 from "../letterimg/브랜드 런칭.png";

type category = {
  name: string;
  img: string;
};

const thxs: category[] = [
  { name: "스승의날", img: thx1 },
  { name: "어버이날", img: thx2 },
  { name: "크리스마스", img: thx3 },
  { name: "결혼기념일", img: thx4 },
];

const congs: category[] = [
  { name: "결혼", img: cong1 },
  { name: "개업", img: cong2 },
  { name: "결혼초대", img: cong3 },
  { name: "성년", img: cong4 },
];

const reqs: category[] = [
  { name: "자영업", img: req1 },
  { name: "개업식", img: req2 },
  { name: "생일", img: req3 },
  { name: "브랜드", img: req4 },
];

export { thxs, congs, reqs };
