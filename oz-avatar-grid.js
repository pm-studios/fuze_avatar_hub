/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Tr = "169";
const Yr = "attached", ul = "detached";
const un = "", mt = "srgb", ut = "srgb-linear", wr = "display-p3", Ss = "display-p3-linear", gs = "linear", st = "srgb", _s = "rec709", vs = "p3";
const Kr = "300 es";
class Bn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const bt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let $r = 1234567;
const Ti = Math.PI / 180, ii = 180 / Math.PI;
function jt() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (bt[s & 255] + bt[s >> 8 & 255] + bt[s >> 16 & 255] + bt[s >> 24 & 255] + "-" + bt[e & 255] + bt[e >> 8 & 255] + "-" + bt[e >> 16 & 15 | 64] + bt[e >> 24 & 255] + "-" + bt[t & 63 | 128] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 255] + bt[t >> 24 & 255] + bt[n & 255] + bt[n >> 8 & 255] + bt[n >> 16 & 255] + bt[n >> 24 & 255]).toLowerCase();
}
function St(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Rr(s, e) {
  return (s % e + e) % e;
}
function fl(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function dl(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function wi(s, e, t) {
  return (1 - t) * s + t * e;
}
function pl(s, e, t, n) {
  return wi(s, e, 1 - Math.exp(-t * n));
}
function ml(s, e = 1) {
  return e - Math.abs(Rr(s, e * 2) - e);
}
function gl(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function _l(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function vl(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function bl(s, e) {
  return s + Math.random() * (e - s);
}
function xl(s) {
  return s * (0.5 - Math.random());
}
function Sl(s) {
  s !== void 0 && ($r = s);
  let e = $r += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Ml(s) {
  return s * Ti;
}
function yl(s) {
  return s * ii;
}
function El(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Al(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function Tl(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function wl(s, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), h = a((e + n) / 2), u = r((e - n) / 2), f = a((e - n) / 2), m = r((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, l * u, l * f, o * c);
      break;
    case "YZY":
      s.set(l * f, o * h, l * u, o * c);
      break;
    case "ZXZ":
      s.set(l * u, l * f, o * h, o * c);
      break;
    case "XZX":
      s.set(o * h, l * g, l * m, o * c);
      break;
    case "YXY":
      s.set(l * m, o * h, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * m, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Vt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function tt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Ri = {
  DEG2RAD: Ti,
  RAD2DEG: ii,
  generateUUID: jt,
  clamp: St,
  euclideanModulo: Rr,
  mapLinear: fl,
  inverseLerp: dl,
  lerp: wi,
  damp: pl,
  pingpong: ml,
  smoothstep: gl,
  smootherstep: _l,
  randInt: vl,
  randFloat: bl,
  randFloatSpread: xl,
  seededRandom: Sl,
  degToRad: Ml,
  radToDeg: yl,
  isPowerOfTwo: El,
  ceilPowerOfTwo: Al,
  floorPowerOfTwo: Tl,
  setQuaternionFromProperEuler: wl,
  normalize: tt,
  denormalize: Vt
};
class ze {
  constructor(e = 0, t = 0) {
    ze.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(St(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ge {
  constructor(e, t, n, i, r, a, o, l, c) {
    Ge.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c);
  }
  set(e, t, n, i, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], f = n[2], m = n[5], g = n[8], _ = i[0], d = i[3], p = i[6], S = i[1], b = i[4], x = i[7], C = i[2], A = i[5], w = i[8];
    return r[0] = a * _ + o * S + l * C, r[3] = a * d + o * b + l * A, r[6] = a * p + o * x + l * w, r[1] = c * _ + h * S + u * C, r[4] = c * d + h * b + u * A, r[7] = c * p + h * x + u * w, r[2] = f * _ + m * S + g * C, r[5] = f * d + m * b + g * A, r[8] = f * p + m * x + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * r * h + n * o * l + i * r * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, f = o * l - h * r, m = c * r - a * l, g = t * u + n * f + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = f * _, e[4] = (h * t - i * l) * _, e[5] = (i * r - o * t) * _, e[6] = m * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * r) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + e,
      -i * c,
      i * l,
      -i * (-c * a + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Ds.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Ds.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Ds.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ds = /* @__PURE__ */ new Ge();
function bo(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function Pi(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Rl() {
  const s = Pi("canvas");
  return s.style.display = "block", s;
}
const Zr = {};
function ps(s) {
  s in Zr || (Zr[s] = !0, console.warn(s));
}
function Cl(s, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function Pl(s) {
  const e = s.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Dl(s) {
  const e = s.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Qr = /* @__PURE__ */ new Ge().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Jr = /* @__PURE__ */ new Ge().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), di = {
  [ut]: {
    transfer: gs,
    primaries: _s,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s,
    fromReference: (s) => s
  },
  [mt]: {
    transfer: st,
    primaries: _s,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s.convertSRGBToLinear(),
    fromReference: (s) => s.convertLinearToSRGB()
  },
  [Ss]: {
    transfer: gs,
    primaries: vs,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.applyMatrix3(Jr),
    fromReference: (s) => s.applyMatrix3(Qr)
  },
  [wr]: {
    transfer: st,
    primaries: vs,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.convertSRGBToLinear().applyMatrix3(Jr),
    fromReference: (s) => s.applyMatrix3(Qr).convertLinearToSRGB()
  }
}, Ll = /* @__PURE__ */ new Set([ut, Ss]), qe = {
  enabled: !0,
  _workingColorSpace: ut,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(s) {
    if (!Ll.has(s))
      throw new Error(`Unsupported working color space, "${s}".`);
    this._workingColorSpace = s;
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = di[e].toReference, i = di[t].fromReference;
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this._workingColorSpace);
  },
  getPrimaries: function(s) {
    return di[s].primaries;
  },
  getTransfer: function(s) {
    return s === un ? gs : di[s].transfer;
  },
  getLuminanceCoefficients: function(s, e = this._workingColorSpace) {
    return s.fromArray(di[e].luminanceCoefficients);
  }
};
function ti(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Ls(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let Gn;
class Il {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Gn === void 0 && (Gn = Pi("canvas")), Gn.width = e.width, Gn.height = e.height;
      const n = Gn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Gn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Pi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = ti(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ti(t[n] / 255) * 255) : t[n] = ti(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Fl = 0;
class xo {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Fl++ }), this.uuid = jt(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(Is(i[a].image)) : r.push(Is(i[a]));
      } else
        r = Is(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Is(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Il.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ul = 0;
class gt extends Bn {
  constructor(e = gt.DEFAULT_IMAGE, t = gt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, o = 1023, l = 1009, c = gt.DEFAULT_ANISOTROPY, h = un) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ul++ }), this.uuid = jt(), this.name = "", this.source = new xo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ze(0, 0), this.repeat = new ze(1, 1), this.center = new ze(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ge(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
gt.DEFAULT_IMAGE = null;
gt.DEFAULT_MAPPING = 300;
gt.DEFAULT_ANISOTROPY = 1;
class Ve {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ve.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements, c = l[0], h = l[4], u = l[8], f = l[1], m = l[5], g = l[9], _ = l[2], d = l[6], p = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - d) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + d) < 0.1 && Math.abs(c + m + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2, x = (m + 1) / 2, C = (p + 1) / 2, A = (h + f) / 4, w = (u + _) / 4, I = (g + d) / 4;
      return b > x && b > C ? b < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), i = A / n, r = w / n) : x > C ? x < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(x), n = A / i, r = I / i) : C < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(C), n = w / r, i = I / r), this.set(n, i, r, t), this;
    }
    let S = Math.sqrt((d - g) * (d - g) + (u - _) * (u - _) + (f - h) * (f - h));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (d - g) / S, this.y = (u - _) / S, this.z = (f - h) / S, this.w = Math.acos((c + m + p - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Nl extends Bn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ve(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ve(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const r = new gt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new xo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class dn extends Nl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class So extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class kl extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Lt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const f = r[a + 0], m = r[a + 1], g = r[a + 2], _ = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== f || c !== m || h !== g) {
      let d = 1 - o;
      const p = l * f + c * m + h * g + u * _, S = p >= 0 ? 1 : -1, b = 1 - p * p;
      if (b > Number.EPSILON) {
        const C = Math.sqrt(b), A = Math.atan2(C, p * S);
        d = Math.sin(d * A) / C, o = Math.sin(o * A) / C;
      }
      const x = o * S;
      if (l = l * d + f * x, c = c * d + m * x, h = h * d + g * x, u = u * d + _ * x, d === 1 - o) {
        const C = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= C, c *= C, h *= C, u *= C;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[a], f = r[a + 1], m = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * u + l * m - c * f, e[t + 1] = l * g + h * f + c * u - o * m, e[t + 2] = c * g + h * m + o * f - l * u, e[t + 3] = h * g - o * u - l * f - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(r / 2), f = l(n / 2), m = l(i / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * u + c * m * g, this._y = c * m * u - f * h * g, this._z = c * h * g + f * m * u, this._w = c * h * u - f * m * g;
        break;
      case "YXZ":
        this._x = f * h * u + c * m * g, this._y = c * m * u - f * h * g, this._z = c * h * g - f * m * u, this._w = c * h * u + f * m * g;
        break;
      case "ZXY":
        this._x = f * h * u - c * m * g, this._y = c * m * u + f * h * g, this._z = c * h * g + f * m * u, this._w = c * h * u - f * m * g;
        break;
      case "ZYX":
        this._x = f * h * u - c * m * g, this._y = c * m * u + f * h * g, this._z = c * h * g - f * m * u, this._w = c * h * u + f * m * g;
        break;
      case "YZX":
        this._x = f * h * u + c * m * g, this._y = c * m * u + f * h * g, this._z = c * h * g - f * m * u, this._w = c * h * u - f * m * g;
        break;
      case "XZY":
        this._x = f * h * u - c * m * g, this._y = c * m * u - f * h * g, this._z = c * h * g + f * m * u, this._w = c * h * u + f * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], f = n + o + u;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (r - c) * m, this._z = (a - i) * m;
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (i + a) / m, this._z = (r + c) / m;
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / m, this._x = (i + a) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / m, this._x = (r + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(St(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - r * l, this._y = i * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, f = Math.sin(t * h) / c;
    return this._w = a * u + this._w * f, this._x = n * u + this._x * f, this._y = i * u + this._y * f, this._z = r * u + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(ea.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ea.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - r * i), u = 2 * (r * n - a * t);
    return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = i + l * u + r * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - r * o, this.y = r * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Fs.copy(this).projectOnVector(e), this.sub(Fs);
  }
  reflect(e) {
    return this.sub(Fs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(St(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Fs = /* @__PURE__ */ new P(), ea = /* @__PURE__ */ new Lt();
class Zt {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ot.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ot.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ot.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Ot) : Ot.fromBufferAttribute(r, a), Ot.applyMatrix4(e.matrixWorld), this.expandByPoint(Ot);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Bi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Bi.copy(n.boundingBox)), Bi.applyMatrix4(e.matrixWorld), this.union(Bi);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Ot), Ot.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(pi), Oi.subVectors(this.max, pi), zn.subVectors(e.a, pi), Hn.subVectors(e.b, pi), Vn.subVectors(e.c, pi), mn.subVectors(Hn, zn), gn.subVectors(Vn, Hn), An.subVectors(zn, Vn);
    let t = [
      0,
      -mn.z,
      mn.y,
      0,
      -gn.z,
      gn.y,
      0,
      -An.z,
      An.y,
      mn.z,
      0,
      -mn.x,
      gn.z,
      0,
      -gn.x,
      An.z,
      0,
      -An.x,
      -mn.y,
      mn.x,
      0,
      -gn.y,
      gn.x,
      0,
      -An.y,
      An.x,
      0
    ];
    return !Us(t, zn, Hn, Vn, Oi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Us(t, zn, Hn, Vn, Oi)) ? !1 : (Gi.crossVectors(mn, gn), t = [Gi.x, Gi.y, Gi.z], Us(t, zn, Hn, Vn, Oi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ot).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ot).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (nn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), nn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), nn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), nn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), nn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), nn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), nn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), nn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(nn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const nn = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], Ot = /* @__PURE__ */ new P(), Bi = /* @__PURE__ */ new Zt(), zn = /* @__PURE__ */ new P(), Hn = /* @__PURE__ */ new P(), Vn = /* @__PURE__ */ new P(), mn = /* @__PURE__ */ new P(), gn = /* @__PURE__ */ new P(), An = /* @__PURE__ */ new P(), pi = /* @__PURE__ */ new P(), Oi = /* @__PURE__ */ new P(), Gi = /* @__PURE__ */ new P(), Tn = /* @__PURE__ */ new P();
function Us(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Tn.fromArray(s, r);
    const o = i.x * Math.abs(Tn.x) + i.y * Math.abs(Tn.y) + i.z * Math.abs(Tn.z), l = e.dot(Tn), c = t.dot(Tn), h = n.dot(Tn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const Bl = /* @__PURE__ */ new Zt(), mi = /* @__PURE__ */ new P(), Ns = /* @__PURE__ */ new P();
class Qt {
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Bl.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    mi.subVectors(e, this.center);
    const t = mi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(mi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ns.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(mi.copy(e.center).add(Ns)), this.expandByPoint(mi.copy(e.center).sub(Ns))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const sn = /* @__PURE__ */ new P(), ks = /* @__PURE__ */ new P(), zi = /* @__PURE__ */ new P(), _n = /* @__PURE__ */ new P(), Bs = /* @__PURE__ */ new P(), Hi = /* @__PURE__ */ new P(), Os = /* @__PURE__ */ new P();
class Ms {
  constructor(e = new P(), t = new P(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, sn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = sn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (sn.copy(this.origin).addScaledVector(this.direction, t), sn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ks.copy(e).add(t).multiplyScalar(0.5), zi.copy(t).sub(e).normalize(), _n.copy(this.origin).sub(ks);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(zi), o = _n.dot(this.direction), l = -_n.dot(zi), c = _n.lengthSq(), h = Math.abs(1 - a * a);
    let u, f, m, g;
    if (h > 0)
      if (u = a * l - o, f = a * o - l, g = r * h, u >= 0)
        if (f >= -g)
          if (f <= g) {
            const _ = 1 / h;
            u *= _, f *= _, m = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * l) + c;
          } else
            f = r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
        else
          f = -r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
      else
        f <= -g ? (u = Math.max(0, -(-a * r + o)), f = u > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -u * u + f * (f + 2 * l) + c) : f <= g ? (u = 0, f = Math.min(Math.max(-r, -l), r), m = f * (f + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), f = u > 0 ? r : Math.min(Math.max(-r, -l), r), m = -u * u + f * (f + 2 * l) + c);
    else
      f = a > 0 ? -r : r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ks).addScaledVector(zi, f), m;
  }
  intersectSphere(e, t) {
    sn.subVectors(e.center, this.origin);
    const n = sn.dot(this.direction), i = sn.dot(sn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), h >= 0 ? (r = (e.min.y - f.y) * h, a = (e.max.y - f.y) * h) : (r = (e.max.y - f.y) * h, a = (e.min.y - f.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - f.z) * u, l = (e.max.z - f.z) * u) : (o = (e.max.z - f.z) * u, l = (e.min.z - f.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, sn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Bs.subVectors(t, e), Hi.subVectors(n, e), Os.crossVectors(Bs, Hi);
    let a = this.direction.dot(Os), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    _n.subVectors(this.origin, e);
    const l = o * this.direction.dot(Hi.crossVectors(_n, Hi));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Bs.cross(_n));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * _n.dot(Os);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ce {
  constructor(e, t, n, i, r, a, o, l, c, h, u, f, m, g, _, d) {
    Ce.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, h, u, f, m, g, _, d);
  }
  set(e, t, n, i, r, a, o, l, c, h, u, f, m, g, _, d) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = f, p[3] = m, p[7] = g, p[11] = _, p[15] = d, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ce().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Wn.setFromMatrixColumn(e, 0).length(), r = 1 / Wn.setFromMatrixColumn(e, 1).length(), a = 1 / Wn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * h, m = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = m + g * c, t[5] = f - _ * c, t[9] = -o * l, t[2] = _ - f * c, t[6] = g + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * h, m = l * u, g = c * h, _ = c * u;
      t[0] = f + _ * o, t[4] = g * o - m, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = m * o - g, t[6] = _ + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * h, m = l * u, g = c * h, _ = c * u;
      t[0] = f - _ * o, t[4] = -a * u, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * h, t[9] = _ - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * h, m = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = g * c - m, t[8] = f * c + _, t[1] = l * u, t[5] = _ * c + f, t[9] = m * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, m = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = _ - f * u, t[8] = g * u + m, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = m * u + g, t[10] = f - _ * u;
    } else if (e.order === "XZY") {
      const f = a * l, m = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = f * u + _, t[5] = a * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = o * h, t[10] = _ * u + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ol, e, Gl);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), vn.crossVectors(n, Pt), vn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), vn.crossVectors(n, Pt)), vn.normalize(), Vi.crossVectors(Pt, vn), i[0] = vn.x, i[4] = Vi.x, i[8] = Pt.x, i[1] = vn.y, i[5] = Vi.y, i[9] = Pt.y, i[2] = vn.z, i[6] = Vi.z, i[10] = Pt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], f = n[9], m = n[13], g = n[2], _ = n[6], d = n[10], p = n[14], S = n[3], b = n[7], x = n[11], C = n[15], A = i[0], w = i[4], I = i[8], q = i[12], v = i[1], E = i[5], k = i[9], G = i[13], B = i[2], $ = i[6], z = i[10], J = i[14], V = i[3], he = i[7], ue = i[11], oe = i[15];
    return r[0] = a * A + o * v + l * B + c * V, r[4] = a * w + o * E + l * $ + c * he, r[8] = a * I + o * k + l * z + c * ue, r[12] = a * q + o * G + l * J + c * oe, r[1] = h * A + u * v + f * B + m * V, r[5] = h * w + u * E + f * $ + m * he, r[9] = h * I + u * k + f * z + m * ue, r[13] = h * q + u * G + f * J + m * oe, r[2] = g * A + _ * v + d * B + p * V, r[6] = g * w + _ * E + d * $ + p * he, r[10] = g * I + _ * k + d * z + p * ue, r[14] = g * q + _ * G + d * J + p * oe, r[3] = S * A + b * v + x * B + C * V, r[7] = S * w + b * E + x * $ + C * he, r[11] = S * I + b * k + x * z + C * ue, r[15] = S * q + b * G + x * J + C * oe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], f = e[10], m = e[14], g = e[3], _ = e[7], d = e[11], p = e[15];
    return g * (+r * l * u - i * c * u - r * o * f + n * c * f + i * o * m - n * l * m) + _ * (+t * l * m - t * c * f + r * a * f - i * a * m + i * c * h - r * l * h) + d * (+t * c * u - t * o * m - r * a * u + n * a * m + r * o * h - n * c * h) + p * (-i * o * h - t * l * u + t * o * f + i * a * u - n * a * f + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], f = e[10], m = e[11], g = e[12], _ = e[13], d = e[14], p = e[15], S = u * d * c - _ * f * c + _ * l * m - o * d * m - u * l * p + o * f * p, b = g * f * c - h * d * c - g * l * m + a * d * m + h * l * p - a * f * p, x = h * _ * c - g * u * c + g * o * m - a * _ * m - h * o * p + a * u * p, C = g * u * l - h * _ * l - g * o * f + a * _ * f + h * o * d - a * u * d, A = t * S + n * b + i * x + r * C;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / A;
    return e[0] = S * w, e[1] = (_ * f * r - u * d * r - _ * i * m + n * d * m + u * i * p - n * f * p) * w, e[2] = (o * d * r - _ * l * r + _ * i * c - n * d * c - o * i * p + n * l * p) * w, e[3] = (u * l * r - o * f * r - u * i * c + n * f * c + o * i * m - n * l * m) * w, e[4] = b * w, e[5] = (h * d * r - g * f * r + g * i * m - t * d * m - h * i * p + t * f * p) * w, e[6] = (g * l * r - a * d * r - g * i * c + t * d * c + a * i * p - t * l * p) * w, e[7] = (a * f * r - h * l * r + h * i * c - t * f * c - a * i * m + t * l * m) * w, e[8] = x * w, e[9] = (g * u * r - h * _ * r - g * n * m + t * _ * m + h * n * p - t * u * p) * w, e[10] = (a * _ * r - g * o * r + g * n * c - t * _ * c - a * n * p + t * o * p) * w, e[11] = (h * o * r - a * u * r - h * n * c + t * u * c + a * n * m - t * o * m) * w, e[12] = C * w, e[13] = (h * _ * i - g * u * i + g * n * f - t * _ * f - h * n * d + t * u * d) * w, e[14] = (g * o * i - a * _ * i - g * n * l + t * _ * l + a * n * d - t * o * d) * w, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * f + t * o * f) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, h = r * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      h * o + n,
      h * l - i * a,
      0,
      c * l - i * o,
      h * l + i * a,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, u = o + o, f = r * c, m = r * h, g = r * u, _ = a * h, d = a * u, p = o * u, S = l * c, b = l * h, x = l * u, C = n.x, A = n.y, w = n.z;
    return i[0] = (1 - (_ + p)) * C, i[1] = (m + x) * C, i[2] = (g - b) * C, i[3] = 0, i[4] = (m - x) * A, i[5] = (1 - (f + p)) * A, i[6] = (d + S) * A, i[7] = 0, i[8] = (g + b) * w, i[9] = (d - S) * w, i[10] = (1 - (f + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Wn.set(i[0], i[1], i[2]).length();
    const a = Wn.set(i[4], i[5], i[6]).length(), o = Wn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Gt.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return Gt.elements[0] *= c, Gt.elements[1] *= c, Gt.elements[2] *= c, Gt.elements[4] *= h, Gt.elements[5] *= h, Gt.elements[6] *= h, Gt.elements[8] *= u, Gt.elements[9] *= u, Gt.elements[10] *= u, t.setFromRotationMatrix(Gt), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = 2e3) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), f = (n + i) / (n - i);
    let m, g;
    if (o === 2e3)
      m = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === 2001)
      m = -a / (a - r), g = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = 2e3) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - r), f = (t + e) * c, m = (n + i) * h;
    let g, _;
    if (o === 2e3)
      g = (a + r) * u, _ = -2 * u;
    else if (o === 2001)
      g = r * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Wn = /* @__PURE__ */ new P(), Gt = /* @__PURE__ */ new Ce(), Ol = /* @__PURE__ */ new P(0, 0, 0), Gl = /* @__PURE__ */ new P(1, 1, 1), vn = /* @__PURE__ */ new P(), Vi = /* @__PURE__ */ new P(), Pt = /* @__PURE__ */ new P(), ta = /* @__PURE__ */ new Ce(), na = /* @__PURE__ */ new Lt();
class qt {
  constructor(e = 0, t = 0, n = 0, i = qt.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], f = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(St(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-St(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(St(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-St(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(St(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-St(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ta.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ta, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return na.setFromEuler(this), this.setFromQuaternion(na, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
qt.DEFAULT_ORDER = "XYZ";
class Mo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let zl = 0;
const ia = /* @__PURE__ */ new P(), jn = /* @__PURE__ */ new Lt(), rn = /* @__PURE__ */ new Ce(), Wi = /* @__PURE__ */ new P(), gi = /* @__PURE__ */ new P(), Hl = /* @__PURE__ */ new P(), Vl = /* @__PURE__ */ new Lt(), sa = /* @__PURE__ */ new P(1, 0, 0), ra = /* @__PURE__ */ new P(0, 1, 0), aa = /* @__PURE__ */ new P(0, 0, 1), oa = { type: "added" }, Wl = { type: "removed" }, Xn = { type: "childadded", child: null }, Gs = { type: "childremoved", child: null };
class rt extends Bn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: zl++ }), this.uuid = jt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = rt.DEFAULT_UP.clone();
    const e = new P(), t = new qt(), n = new Lt(), i = new P(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ce()
      },
      normalMatrix: {
        value: new Ge()
      }
    }), this.matrix = new Ce(), this.matrixWorld = new Ce(), this.matrixAutoUpdate = rt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Mo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return jn.setFromAxisAngle(e, t), this.quaternion.multiply(jn), this;
  }
  rotateOnWorldAxis(e, t) {
    return jn.setFromAxisAngle(e, t), this.quaternion.premultiply(jn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(sa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ra, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(aa, e);
  }
  translateOnAxis(e, t) {
    return ia.copy(e).applyQuaternion(this.quaternion), this.position.add(ia.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(sa, e);
  }
  translateY(e) {
    return this.translateOnAxis(ra, e);
  }
  translateZ(e) {
    return this.translateOnAxis(aa, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(rn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Wi.copy(e) : Wi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), gi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? rn.lookAt(gi, Wi, this.up) : rn.lookAt(Wi, gi, this.up), this.quaternion.setFromRotationMatrix(rn), i && (rn.extractRotation(i.matrixWorld), jn.setFromRotationMatrix(rn), this.quaternion.premultiply(jn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(oa), Xn.child = e, this.dispatchEvent(Xn), Xn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Wl), Gs.child = e, this.dispatchEvent(Gs), Gs.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), rn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), rn.multiply(e.parent.matrixWorld)), e.applyMatrix4(rn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(oa), Xn.child = e, this.dispatchEvent(Xn), Xn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(gi, e, Hl), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(gi, Vl, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++)
        i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), f = a(e.skeletons), m = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
rt.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
rt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const zt = /* @__PURE__ */ new P(), an = /* @__PURE__ */ new P(), zs = /* @__PURE__ */ new P(), on = /* @__PURE__ */ new P(), qn = /* @__PURE__ */ new P(), Yn = /* @__PURE__ */ new P(), la = /* @__PURE__ */ new P(), Hs = /* @__PURE__ */ new P(), Vs = /* @__PURE__ */ new P(), Ws = /* @__PURE__ */ new P(), js = /* @__PURE__ */ new Ve(), Xs = /* @__PURE__ */ new Ve(), qs = /* @__PURE__ */ new Ve();
class Wt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), zt.subVectors(e, t), i.cross(zt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    zt.subVectors(i, t), an.subVectors(n, t), zs.subVectors(e, t);
    const a = zt.dot(zt), o = zt.dot(an), l = zt.dot(zs), c = an.dot(an), h = an.dot(zs), u = a * c - o * o;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const f = 1 / u, m = (c * l - o * h) * f, g = (a * h - o * l) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return this.getBarycoord(e, t, n, i, on) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, on.x), l.addScaledVector(a, on.y), l.addScaledVector(o, on.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return js.setScalar(0), Xs.setScalar(0), qs.setScalar(0), js.fromBufferAttribute(e, t), Xs.fromBufferAttribute(e, n), qs.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(js, r.x), a.addScaledVector(Xs, r.y), a.addScaledVector(qs, r.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return zt.subVectors(n, t), an.subVectors(e, t), zt.cross(an).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return zt.subVectors(this.c, this.b), an.subVectors(this.a, this.b), zt.cross(an).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Wt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Wt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return Wt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Wt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Wt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    qn.subVectors(i, n), Yn.subVectors(r, n), Hs.subVectors(e, n);
    const l = qn.dot(Hs), c = Yn.dot(Hs);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Vs.subVectors(e, i);
    const h = qn.dot(Vs), u = Yn.dot(Vs);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(qn, a);
    Ws.subVectors(e, r);
    const m = qn.dot(Ws), g = Yn.dot(Ws);
    if (g >= 0 && m <= g)
      return t.copy(r);
    const _ = m * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Yn, o);
    const d = h * g - m * u;
    if (d <= 0 && u - h >= 0 && m - g >= 0)
      return la.subVectors(r, i), o = (u - h) / (u - h + (m - g)), t.copy(i).addScaledVector(la, o);
    const p = 1 / (d + _ + f);
    return a = _ * p, o = f * p, t.copy(n).addScaledVector(qn, a).addScaledVector(Yn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const yo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, bn = { h: 0, s: 0, l: 0 }, ji = { h: 0, s: 0, l: 0 };
function Ys(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class ae {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = mt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, qe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = qe.workingColorSpace) {
    if (e = Rr(e, 1), t = St(t, 0, 1), n = St(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = Ys(a, r, e + 1 / 3), this.g = Ys(a, r, e), this.b = Ys(a, r, e - 1 / 3);
    }
    return qe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = mt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = mt) {
    const n = yo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ti(e.r), this.g = ti(e.g), this.b = ti(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ls(e.r), this.g = Ls(e.g), this.b = Ls(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = mt) {
    return qe.fromWorkingColorSpace(xt.copy(this), e), Math.round(St(xt.r * 255, 0, 255)) * 65536 + Math.round(St(xt.g * 255, 0, 255)) * 256 + Math.round(St(xt.b * 255, 0, 255));
  }
  getHexString(e = mt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = qe.workingColorSpace) {
    qe.fromWorkingColorSpace(xt.copy(this), t);
    const n = xt.r, i = xt.g, r = xt.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = qe.workingColorSpace) {
    return qe.fromWorkingColorSpace(xt.copy(this), t), e.r = xt.r, e.g = xt.g, e.b = xt.b, e;
  }
  getStyle(e = mt) {
    qe.fromWorkingColorSpace(xt.copy(this), e);
    const t = xt.r, n = xt.g, i = xt.b;
    return e !== mt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(bn), this.setHSL(bn.h + e, bn.s + t, bn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(bn), e.getHSL(ji);
    const n = wi(bn.h, ji.h, t), i = wi(bn.s, ji.s, t), r = wi(bn.l, ji.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const xt = /* @__PURE__ */ new ae();
ae.NAMES = yo;
let jl = 0;
class $t extends Bn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: jl++ }), this.uuid = jt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ae(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures), a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Nn extends $t {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ae(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new qt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ht = /* @__PURE__ */ new P(), Xi = /* @__PURE__ */ new ze();
class Mt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Xi.fromBufferAttribute(this, t), Xi.applyMatrix3(e), this.setXY(t, Xi.x, Xi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ht.fromBufferAttribute(this, t), ht.applyMatrix3(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyMatrix4(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.applyNormalMatrix(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ht.fromBufferAttribute(this, t), ht.transformDirection(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Vt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = tt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = tt(t, this.array), n = tt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array), r = tt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class Eo extends Mt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ao extends Mt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Xt extends Mt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Xl = 0;
const Ut = /* @__PURE__ */ new Ce(), Ks = /* @__PURE__ */ new rt(), Kn = /* @__PURE__ */ new P(), Dt = /* @__PURE__ */ new Zt(), _i = /* @__PURE__ */ new Zt(), pt = /* @__PURE__ */ new P();
class kt extends Bn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Xl++ }), this.uuid = jt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (bo(e) ? Ao : Eo)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ge().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this;
  }
  rotateX(e) {
    return Ut.makeRotationX(e), this.applyMatrix4(Ut), this;
  }
  rotateY(e) {
    return Ut.makeRotationY(e), this.applyMatrix4(Ut), this;
  }
  rotateZ(e) {
    return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this;
  }
  translate(e, t, n) {
    return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this;
  }
  scale(e, t, n) {
    return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this;
  }
  lookAt(e) {
    return Ks.lookAt(e), Ks.updateMatrix(), this.applyMatrix4(Ks.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Kn).negate(), this.translate(Kn.x, Kn.y, Kn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Xt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Zt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Dt.setFromBufferAttribute(r), this.morphTargetsRelative ? (pt.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(pt), pt.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(pt)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Qt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          _i.setFromBufferAttribute(o), this.morphTargetsRelative ? (pt.addVectors(Dt.min, _i.min), Dt.expandByPoint(pt), pt.addVectors(Dt.max, _i.max), Dt.expandByPoint(pt)) : (Dt.expandByPoint(_i.min), Dt.expandByPoint(_i.max));
        }
      Dt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        pt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(pt));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            pt.fromBufferAttribute(o, c), l && (Kn.fromBufferAttribute(e, c), pt.add(Kn)), i = Math.max(i, n.distanceToSquared(pt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, r = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Mt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let I = 0; I < n.count; I++)
      o[I] = new P(), l[I] = new P();
    const c = new P(), h = new P(), u = new P(), f = new ze(), m = new ze(), g = new ze(), _ = new P(), d = new P();
    function p(I, q, v) {
      c.fromBufferAttribute(n, I), h.fromBufferAttribute(n, q), u.fromBufferAttribute(n, v), f.fromBufferAttribute(r, I), m.fromBufferAttribute(r, q), g.fromBufferAttribute(r, v), h.sub(c), u.sub(c), m.sub(f), g.sub(f);
      const E = 1 / (m.x * g.y - g.x * m.y);
      isFinite(E) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -m.y).multiplyScalar(E), d.copy(u).multiplyScalar(m.x).addScaledVector(h, -g.x).multiplyScalar(E), o[I].add(_), o[q].add(_), o[v].add(_), l[I].add(d), l[q].add(d), l[v].add(d));
    }
    let S = this.groups;
    S.length === 0 && (S = [{
      start: 0,
      count: e.count
    }]);
    for (let I = 0, q = S.length; I < q; ++I) {
      const v = S[I], E = v.start, k = v.count;
      for (let G = E, B = E + k; G < B; G += 3)
        p(
          e.getX(G + 0),
          e.getX(G + 1),
          e.getX(G + 2)
        );
    }
    const b = new P(), x = new P(), C = new P(), A = new P();
    function w(I) {
      C.fromBufferAttribute(i, I), A.copy(C);
      const q = o[I];
      b.copy(q), b.sub(C.multiplyScalar(C.dot(q))).normalize(), x.crossVectors(A, q);
      const E = x.dot(l[I]) < 0 ? -1 : 1;
      a.setXYZW(I, b.x, b.y, b.z, E);
    }
    for (let I = 0, q = S.length; I < q; ++I) {
      const v = S[I], E = v.start, k = v.count;
      for (let G = E, B = E + k; G < B; G += 3)
        w(e.getX(G + 0)), w(e.getX(G + 1)), w(e.getX(G + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Mt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new P(), r = new P(), a = new P(), o = new P(), l = new P(), c = new P(), h = new P(), u = new P();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0), _ = e.getX(f + 1), d = e.getX(f + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), a.fromBufferAttribute(t, d), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, d), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(d, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      pt.fromBufferAttribute(e, t), pt.normalize(), e.setXYZ(t, pt.x, pt.y, pt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, f = new c.constructor(l.length * h);
      let m = 0, g = 0;
      for (let _ = 0, d = l.length; _ < d; _++) {
        o.isInterleavedBufferAttribute ? m = l[_] * o.data.stride + o.offset : m = l[_] * h;
        for (let p = 0; p < h; p++)
          f[g++] = c[m++];
      }
      return new Mt(f, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new kt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const m = c[u];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let f = 0, m = u.length; f < m; f++)
        h.push(u[f].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ca = /* @__PURE__ */ new Ce(), wn = /* @__PURE__ */ new Ms(), qi = /* @__PURE__ */ new Qt(), ha = /* @__PURE__ */ new P(), Yi = /* @__PURE__ */ new P(), Ki = /* @__PURE__ */ new P(), $i = /* @__PURE__ */ new P(), $s = /* @__PURE__ */ new P(), Zi = /* @__PURE__ */ new P(), ua = /* @__PURE__ */ new P(), Qi = /* @__PURE__ */ new P();
class vt extends rt {
  constructor(e = new kt(), t = new Nn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Zi.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && ($s.fromBufferAttribute(u, e), a ? Zi.addScaledVector($s, h) : Zi.addScaledVector($s.sub(t), h));
      }
      t.add(Zi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), qi.copy(n.boundingSphere), qi.applyMatrix4(r), wn.copy(e.ray).recast(e.near), !(qi.containsPoint(wn.origin) === !1 && (wn.intersectSphere(qi, ha) === null || wn.origin.distanceToSquared(ha) > (e.far - e.near) ** 2)) && (ca.copy(r).invert(), wn.copy(e.ray).applyMatrix4(ca), !(n.boundingBox !== null && wn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, wn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, m = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const d = f[g], p = a[d.materialIndex], S = Math.max(d.start, m.start), b = Math.min(o.count, Math.min(d.start + d.count, m.start + m.count));
          for (let x = S, C = b; x < C; x += 3) {
            const A = o.getX(x), w = o.getX(x + 1), I = o.getX(x + 2);
            i = Ji(this, p, e, n, c, h, u, A, w, I), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = d.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(o.count, m.start + m.count);
        for (let d = g, p = _; d < p; d += 3) {
          const S = o.getX(d), b = o.getX(d + 1), x = o.getX(d + 2);
          i = Ji(this, a, e, n, c, h, u, S, b, x), i && (i.faceIndex = Math.floor(d / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const d = f[g], p = a[d.materialIndex], S = Math.max(d.start, m.start), b = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count));
          for (let x = S, C = b; x < C; x += 3) {
            const A = x, w = x + 1, I = x + 2;
            i = Ji(this, p, e, n, c, h, u, A, w, I), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = d.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start), _ = Math.min(l.count, m.start + m.count);
        for (let d = g, p = _; d < p; d += 3) {
          const S = d, b = d + 1, x = d + 2;
          i = Ji(this, a, e, n, c, h, u, S, b, x), i && (i.faceIndex = Math.floor(d / 3), t.push(i));
        }
      }
  }
}
function ql(s, e, t, n, i, r, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, r, i, !0, o) : l = n.intersectTriangle(i, r, a, e.side === 0, o), l === null) return null;
  Qi.copy(o), Qi.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(Qi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Qi.clone(),
    object: s
  };
}
function Ji(s, e, t, n, i, r, a, o, l, c) {
  s.getVertexPosition(o, Yi), s.getVertexPosition(l, Ki), s.getVertexPosition(c, $i);
  const h = ql(s, e, t, n, Yi, Ki, $i, ua);
  if (h) {
    const u = new P();
    Wt.getBarycoord(ua, Yi, Ki, $i, u), i && (h.uv = Wt.getInterpolatedAttribute(i, o, l, c, u, new ze())), r && (h.uv1 = Wt.getInterpolatedAttribute(r, o, l, c, u, new ze())), a && (h.normal = Wt.getInterpolatedAttribute(a, o, l, c, u, new P()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: l,
      c,
      normal: new P(),
      materialIndex: 0
    };
    Wt.getNormal(Yi, Ki, $i, f.normal), h.face = f, h.barycoord = u;
  }
  return h;
}
class Li extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Xt(c, 3)), this.setAttribute("normal", new Xt(h, 3)), this.setAttribute("uv", new Xt(u, 2));
    function g(_, d, p, S, b, x, C, A, w, I, q) {
      const v = x / w, E = C / I, k = x / 2, G = C / 2, B = A / 2, $ = w + 1, z = I + 1;
      let J = 0, V = 0;
      const he = new P();
      for (let ue = 0; ue < z; ue++) {
        const oe = ue * E - G;
        for (let We = 0; We < $; We++) {
          const Ye = We * v - k;
          he[_] = Ye * S, he[d] = oe * b, he[p] = B, c.push(he.x, he.y, he.z), he[_] = 0, he[d] = 0, he[p] = A > 0 ? 1 : -1, h.push(he.x, he.y, he.z), u.push(We / w), u.push(1 - ue / I), J += 1;
        }
      }
      for (let ue = 0; ue < I; ue++)
        for (let oe = 0; oe < w; oe++) {
          const We = f + oe + $ * ue, Ye = f + oe + $ * (ue + 1), j = f + (oe + 1) + $ * (ue + 1), Q = f + (oe + 1) + $ * ue;
          l.push(We, Ye, Q), l.push(Ye, j, Q), V += 6;
        }
      o.addGroup(m, V, q), m += V, f += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Li(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function si(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Et(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = si(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Yl(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function To(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : qe.workingColorSpace;
}
const Cr = { clone: si, merge: Et };
var Kl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, $l = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class It extends $t {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Kl, this.fragmentShader = $l, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = si(e.uniforms), this.uniformsGroups = Yl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class wo extends rt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ce(), this.projectionMatrix = new Ce(), this.projectionMatrixInverse = new Ce(), this.coordinateSystem = 2e3;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const xn = /* @__PURE__ */ new P(), fa = /* @__PURE__ */ new ze(), da = /* @__PURE__ */ new ze();
class wt extends wo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ii * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Ti * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ii * 2 * Math.atan(
      Math.tan(Ti * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    xn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(xn.x, xn.y).multiplyScalar(-e / xn.z), xn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(xn.x, xn.y).multiplyScalar(-e / xn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, fa, da), t.subVectors(da, fa);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ti * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const $n = -90, Zn = 1;
class Zl extends rt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new wt($n, Zn, e, t);
    i.layers = this.layers, this.add(i);
    const r = new wt($n, Zn, e, t);
    r.layers = this.layers, this.add(r);
    const a = new wt($n, Zn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new wt($n, Zn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new wt($n, Zn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new wt($n, Zn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, f, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Ro extends gt {
  constructor(e, t, n, i, r, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, r, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Ql extends dn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Ro(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Li(5, 5, 5), r = new It({
      name: "CubemapFromEquirect",
      uniforms: si(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const a = new vt(i, r), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Zl(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Zs = /* @__PURE__ */ new P(), Jl = /* @__PURE__ */ new P(), ec = /* @__PURE__ */ new Ge();
class In {
  constructor(e = new P(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Zs.subVectors(n, t).cross(Jl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Zs), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || ec.getNormalMatrix(e), i = this.coplanarPoint(Zs).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Rn = /* @__PURE__ */ new Qt(), es = /* @__PURE__ */ new P();
class Pr {
  constructor(e = new In(), t = new In(), n = new In(), i = new In(), r = new In(), a = new In()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], f = i[7], m = i[8], g = i[9], _ = i[10], d = i[11], p = i[12], S = i[13], b = i[14], x = i[15];
    if (n[0].setComponents(l - r, f - c, d - m, x - p).normalize(), n[1].setComponents(l + r, f + c, d + m, x + p).normalize(), n[2].setComponents(l + a, f + h, d + g, x + S).normalize(), n[3].setComponents(l - a, f - h, d - g, x - S).normalize(), n[4].setComponents(l - o, f - u, d - _, x - b).normalize(), t === 2e3)
      n[5].setComponents(l + o, f + u, d + _, x + b).normalize();
    else if (t === 2001)
      n[5].setComponents(o, u, _, b).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Rn);
  }
  intersectsSprite(e) {
    return Rn.center.set(0, 0, 0), Rn.radius = 0.7071067811865476, Rn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Rn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (es.x = i.normal.x > 0 ? e.max.x : e.min.x, es.y = i.normal.y > 0 ? e.max.y : e.min.y, es.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(es) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Co() {
  let s = null, e = !1, t = null, n = null;
  function i(r, a) {
    t(r, a), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function tc(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, f = s.createBuffer();
    s.bindBuffer(l, f), s.bufferData(l, c, h), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array)
      m = s.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? m = s.HALF_FLOAT : m = s.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      m = s.SHORT;
    else if (c instanceof Uint32Array)
      m = s.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      m = s.INT;
    else if (c instanceof Int8Array)
      m = s.BYTE;
    else if (c instanceof Uint8Array)
      m = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      m = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: f,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (s.bindBuffer(c, o), u.length === 0)
      s.bufferSubData(c, 0, h);
    else {
      u.sort((m, g) => m.start - g.start);
      let f = 0;
      for (let m = 1; m < u.length; m++) {
        const g = u[f], _ = u[m];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          _.start + _.count - g.start
        ) : (++f, u[f] = _);
      }
      u.length = f + 1;
      for (let m = 0, g = u.length; m < g; m++) {
        const _ = u[m];
        s.bufferSubData(
          c,
          _.start * h.BYTES_PER_ELEMENT,
          h,
          _.start,
          _.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (s.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = e.get(o);
    if (c === void 0)
      e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: i,
    remove: r,
    update: a
  };
}
class li extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, f = t / l, m = [], g = [], _ = [], d = [];
    for (let p = 0; p < h; p++) {
      const S = p * f - a;
      for (let b = 0; b < c; b++) {
        const x = b * u - r;
        g.push(x, -S, 0), _.push(0, 0, 1), d.push(b / o), d.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let S = 0; S < o; S++) {
        const b = S + c * p, x = S + c * (p + 1), C = S + 1 + c * (p + 1), A = S + 1 + c * p;
        m.push(b, x, A), m.push(x, C, A);
      }
    this.setIndex(m), this.setAttribute("position", new Xt(g, 3)), this.setAttribute("normal", new Xt(_, 3)), this.setAttribute("uv", new Xt(d, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new li(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var nc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ic = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, sc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, rc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ac = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, oc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, lc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, cc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, hc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, uc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, fc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, dc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, pc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, mc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, gc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, _c = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, vc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, bc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, xc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Sc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Mc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, yc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Ec = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Ac = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Tc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, wc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Rc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Cc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Pc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Dc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Lc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ic = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Fc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Uc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Nc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, kc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Bc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Oc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Gc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, zc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Hc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Vc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Wc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, jc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Xc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, qc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Yc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Kc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, $c = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Zc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Qc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Jc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, eh = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, th = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, nh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ih = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, sh = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, rh = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ah = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, oh = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, lh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ch = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, hh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, uh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, fh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, dh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, ph = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, mh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, gh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, _h = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, vh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, bh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, xh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Sh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Mh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, yh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Eh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Ah = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Th = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, wh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Rh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ch = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ph = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Dh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Lh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Ih = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Fh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Uh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Nh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, kh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Bh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Oh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Gh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, zh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Hh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Vh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Wh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, jh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Xh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, qh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Yh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Kh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, $h = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Zh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Qh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Jh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, eu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const tu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, nu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, iu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, su = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ru = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, au = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ou = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, lu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, cu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, hu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, uu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, fu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, du = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, pu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, mu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, gu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _u = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vu = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bu = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, xu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Su = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Mu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, yu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Eu = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Au = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Tu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wu = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ru = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Pu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Du = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Lu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Iu = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Fu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Oe = {
  alphahash_fragment: nc,
  alphahash_pars_fragment: ic,
  alphamap_fragment: sc,
  alphamap_pars_fragment: rc,
  alphatest_fragment: ac,
  alphatest_pars_fragment: oc,
  aomap_fragment: lc,
  aomap_pars_fragment: cc,
  batching_pars_vertex: hc,
  batching_vertex: uc,
  begin_vertex: fc,
  beginnormal_vertex: dc,
  bsdfs: pc,
  iridescence_fragment: mc,
  bumpmap_pars_fragment: gc,
  clipping_planes_fragment: _c,
  clipping_planes_pars_fragment: vc,
  clipping_planes_pars_vertex: bc,
  clipping_planes_vertex: xc,
  color_fragment: Sc,
  color_pars_fragment: Mc,
  color_pars_vertex: yc,
  color_vertex: Ec,
  common: Ac,
  cube_uv_reflection_fragment: Tc,
  defaultnormal_vertex: wc,
  displacementmap_pars_vertex: Rc,
  displacementmap_vertex: Cc,
  emissivemap_fragment: Pc,
  emissivemap_pars_fragment: Dc,
  colorspace_fragment: Lc,
  colorspace_pars_fragment: Ic,
  envmap_fragment: Fc,
  envmap_common_pars_fragment: Uc,
  envmap_pars_fragment: Nc,
  envmap_pars_vertex: kc,
  envmap_physical_pars_fragment: Yc,
  envmap_vertex: Bc,
  fog_vertex: Oc,
  fog_pars_vertex: Gc,
  fog_fragment: zc,
  fog_pars_fragment: Hc,
  gradientmap_pars_fragment: Vc,
  lightmap_pars_fragment: Wc,
  lights_lambert_fragment: jc,
  lights_lambert_pars_fragment: Xc,
  lights_pars_begin: qc,
  lights_toon_fragment: Kc,
  lights_toon_pars_fragment: $c,
  lights_phong_fragment: Zc,
  lights_phong_pars_fragment: Qc,
  lights_physical_fragment: Jc,
  lights_physical_pars_fragment: eh,
  lights_fragment_begin: th,
  lights_fragment_maps: nh,
  lights_fragment_end: ih,
  logdepthbuf_fragment: sh,
  logdepthbuf_pars_fragment: rh,
  logdepthbuf_pars_vertex: ah,
  logdepthbuf_vertex: oh,
  map_fragment: lh,
  map_pars_fragment: ch,
  map_particle_fragment: hh,
  map_particle_pars_fragment: uh,
  metalnessmap_fragment: fh,
  metalnessmap_pars_fragment: dh,
  morphinstance_vertex: ph,
  morphcolor_vertex: mh,
  morphnormal_vertex: gh,
  morphtarget_pars_vertex: _h,
  morphtarget_vertex: vh,
  normal_fragment_begin: bh,
  normal_fragment_maps: xh,
  normal_pars_fragment: Sh,
  normal_pars_vertex: Mh,
  normal_vertex: yh,
  normalmap_pars_fragment: Eh,
  clearcoat_normal_fragment_begin: Ah,
  clearcoat_normal_fragment_maps: Th,
  clearcoat_pars_fragment: wh,
  iridescence_pars_fragment: Rh,
  opaque_fragment: Ch,
  packing: Ph,
  premultiplied_alpha_fragment: Dh,
  project_vertex: Lh,
  dithering_fragment: Ih,
  dithering_pars_fragment: Fh,
  roughnessmap_fragment: Uh,
  roughnessmap_pars_fragment: Nh,
  shadowmap_pars_fragment: kh,
  shadowmap_pars_vertex: Bh,
  shadowmap_vertex: Oh,
  shadowmask_pars_fragment: Gh,
  skinbase_vertex: zh,
  skinning_pars_vertex: Hh,
  skinning_vertex: Vh,
  skinnormal_vertex: Wh,
  specularmap_fragment: jh,
  specularmap_pars_fragment: Xh,
  tonemapping_fragment: qh,
  tonemapping_pars_fragment: Yh,
  transmission_fragment: Kh,
  transmission_pars_fragment: $h,
  uv_pars_fragment: Zh,
  uv_pars_vertex: Qh,
  uv_vertex: Jh,
  worldpos_vertex: eu,
  background_vert: tu,
  background_frag: nu,
  backgroundCube_vert: iu,
  backgroundCube_frag: su,
  cube_vert: ru,
  cube_frag: au,
  depth_vert: ou,
  depth_frag: lu,
  distanceRGBA_vert: cu,
  distanceRGBA_frag: hu,
  equirect_vert: uu,
  equirect_frag: fu,
  linedashed_vert: du,
  linedashed_frag: pu,
  meshbasic_vert: mu,
  meshbasic_frag: gu,
  meshlambert_vert: _u,
  meshlambert_frag: vu,
  meshmatcap_vert: bu,
  meshmatcap_frag: xu,
  meshnormal_vert: Su,
  meshnormal_frag: Mu,
  meshphong_vert: yu,
  meshphong_frag: Eu,
  meshphysical_vert: Au,
  meshphysical_frag: Tu,
  meshtoon_vert: wu,
  meshtoon_frag: Ru,
  points_vert: Cu,
  points_frag: Pu,
  shadow_vert: Du,
  shadow_frag: Lu,
  sprite_vert: Iu,
  sprite_frag: Fu
}, se = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ae(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ge() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ge() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ge() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ge() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ge() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ge() },
    normalScale: { value: /* @__PURE__ */ new ze(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ge() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ge() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ge() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ge() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ae(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ae(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ge() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ae(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ze(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaTest: { value: 0 }
  }
}, Kt = {
  basic: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new ae(0) }
      }
    ]),
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new ae(0) },
        specular: { value: /* @__PURE__ */ new ae(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.roughnessmap,
      se.metalnessmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new ae(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.aomap,
      se.lightmap,
      se.emissivemap,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.gradientmap,
      se.fog,
      se.lights,
      {
        emissive: { value: /* @__PURE__ */ new ae(0) }
      }
    ]),
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Et([
      se.points,
      se.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Oe.linedashed_vert,
    fragmentShader: Oe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Et([
      se.sprite,
      se.fog
    ]),
    vertexShader: Oe.sprite_vert,
    fragmentShader: Oe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ge() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.background_vert,
    fragmentShader: Oe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ge() }
    },
    vertexShader: Oe.backgroundCube_vert,
    fragmentShader: Oe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Oe.cube_vert,
    fragmentShader: Oe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Oe.equirect_vert,
    fragmentShader: Oe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Et([
      se.common,
      se.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Oe.distanceRGBA_vert,
    fragmentShader: Oe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Et([
      se.lights,
      se.fog,
      {
        color: { value: /* @__PURE__ */ new ae(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
Kt.physical = {
  uniforms: /* @__PURE__ */ Et([
    Kt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ge() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ge() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ze(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ge() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ge() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ge() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ae(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ge() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ge() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ge() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ze() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ge() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ae(0) },
      specularColor: { value: /* @__PURE__ */ new ae(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ge() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ge() },
      anisotropyVector: { value: /* @__PURE__ */ new ze() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ge() }
    }
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const ts = { r: 0, b: 0, g: 0 }, Cn = /* @__PURE__ */ new qt(), Uu = /* @__PURE__ */ new Ce();
function Nu(s, e, t, n, i, r, a) {
  const o = new ae(0);
  let l = r === !0 ? 0 : 1, c, h, u = null, f = 0, m = null;
  function g(S) {
    let b = S.isScene === !0 ? S.background : null;
    return b && b.isTexture && (b = (S.backgroundBlurriness > 0 ? t : e).get(b)), b;
  }
  function _(S) {
    let b = !1;
    const x = g(S);
    x === null ? p(o, l) : x && x.isColor && (p(x, 1), b = !0);
    const C = s.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || b) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function d(S, b) {
    const x = g(b);
    x && (x.isCubeTexture || x.mapping === 306) ? (h === void 0 && (h = new vt(
      new Li(1, 1, 1),
      new It({
        name: "BackgroundCubeMaterial",
        uniforms: si(Kt.backgroundCube.uniforms),
        vertexShader: Kt.backgroundCube.vertexShader,
        fragmentShader: Kt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, A, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), Cn.copy(b.backgroundRotation), Cn.x *= -1, Cn.y *= -1, Cn.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === !1 && (Cn.y *= -1, Cn.z *= -1), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Uu.makeRotationFromEuler(Cn)), h.material.toneMapped = qe.getTransfer(x.colorSpace) !== st, (u !== x || f !== x.version || m !== s.toneMapping) && (h.material.needsUpdate = !0, u = x, f = x.version, m = s.toneMapping), h.layers.enableAll(), S.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (c === void 0 && (c = new vt(
      new li(2, 2),
      new It({
        name: "BackgroundMaterial",
        uniforms: si(Kt.background.uniforms),
        vertexShader: Kt.background.vertexShader,
        fragmentShader: Kt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = x, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.toneMapped = qe.getTransfer(x.colorSpace) !== st, x.matrixAutoUpdate === !0 && x.updateMatrix(), c.material.uniforms.uvTransform.value.copy(x.matrix), (u !== x || f !== x.version || m !== s.toneMapping) && (c.material.needsUpdate = !0, u = x, f = x.version, m = s.toneMapping), c.layers.enableAll(), S.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(S, b) {
    S.getRGB(ts, To(s)), n.buffers.color.setClear(ts.r, ts.g, ts.b, b, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(S, b = 1) {
      o.set(S), l = b, p(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(S) {
      l = S, p(o, l);
    },
    render: _,
    addToRenderList: d
  };
}
function ku(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = f(null);
  let r = i, a = !1;
  function o(v, E, k, G, B) {
    let $ = !1;
    const z = u(G, k, E);
    r !== z && (r = z, c(r.object)), $ = m(v, G, k, B), $ && g(v, G, k, B), B !== null && e.update(B, s.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, x(v, E, k, G), B !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(B).buffer));
  }
  function l() {
    return s.createVertexArray();
  }
  function c(v) {
    return s.bindVertexArray(v);
  }
  function h(v) {
    return s.deleteVertexArray(v);
  }
  function u(v, E, k) {
    const G = k.wireframe === !0;
    let B = n[v.id];
    B === void 0 && (B = {}, n[v.id] = B);
    let $ = B[E.id];
    $ === void 0 && ($ = {}, B[E.id] = $);
    let z = $[G];
    return z === void 0 && (z = f(l()), $[G] = z), z;
  }
  function f(v) {
    const E = [], k = [], G = [];
    for (let B = 0; B < t; B++)
      E[B] = 0, k[B] = 0, G[B] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: E,
      enabledAttributes: k,
      attributeDivisors: G,
      object: v,
      attributes: {},
      index: null
    };
  }
  function m(v, E, k, G) {
    const B = r.attributes, $ = E.attributes;
    let z = 0;
    const J = k.getAttributes();
    for (const V in J)
      if (J[V].location >= 0) {
        const ue = B[V];
        let oe = $[V];
        if (oe === void 0 && (V === "instanceMatrix" && v.instanceMatrix && (oe = v.instanceMatrix), V === "instanceColor" && v.instanceColor && (oe = v.instanceColor)), ue === void 0 || ue.attribute !== oe || oe && ue.data !== oe.data) return !0;
        z++;
      }
    return r.attributesNum !== z || r.index !== G;
  }
  function g(v, E, k, G) {
    const B = {}, $ = E.attributes;
    let z = 0;
    const J = k.getAttributes();
    for (const V in J)
      if (J[V].location >= 0) {
        let ue = $[V];
        ue === void 0 && (V === "instanceMatrix" && v.instanceMatrix && (ue = v.instanceMatrix), V === "instanceColor" && v.instanceColor && (ue = v.instanceColor));
        const oe = {};
        oe.attribute = ue, ue && ue.data && (oe.data = ue.data), B[V] = oe, z++;
      }
    r.attributes = B, r.attributesNum = z, r.index = G;
  }
  function _() {
    const v = r.newAttributes;
    for (let E = 0, k = v.length; E < k; E++)
      v[E] = 0;
  }
  function d(v) {
    p(v, 0);
  }
  function p(v, E) {
    const k = r.newAttributes, G = r.enabledAttributes, B = r.attributeDivisors;
    k[v] = 1, G[v] === 0 && (s.enableVertexAttribArray(v), G[v] = 1), B[v] !== E && (s.vertexAttribDivisor(v, E), B[v] = E);
  }
  function S() {
    const v = r.newAttributes, E = r.enabledAttributes;
    for (let k = 0, G = E.length; k < G; k++)
      E[k] !== v[k] && (s.disableVertexAttribArray(k), E[k] = 0);
  }
  function b(v, E, k, G, B, $, z) {
    z === !0 ? s.vertexAttribIPointer(v, E, k, B, $) : s.vertexAttribPointer(v, E, k, G, B, $);
  }
  function x(v, E, k, G) {
    _();
    const B = G.attributes, $ = k.getAttributes(), z = E.defaultAttributeValues;
    for (const J in $) {
      const V = $[J];
      if (V.location >= 0) {
        let he = B[J];
        if (he === void 0 && (J === "instanceMatrix" && v.instanceMatrix && (he = v.instanceMatrix), J === "instanceColor" && v.instanceColor && (he = v.instanceColor)), he !== void 0) {
          const ue = he.normalized, oe = he.itemSize, We = e.get(he);
          if (We === void 0) continue;
          const Ye = We.buffer, j = We.type, Q = We.bytesPerElement, ge = j === s.INT || j === s.UNSIGNED_INT || he.gpuType === 1013;
          if (he.isInterleavedBufferAttribute) {
            const fe = he.data, Ie = fe.stride, Pe = he.offset;
            if (fe.isInstancedInterleavedBuffer) {
              for (let Z = 0; Z < V.locationSize; Z++)
                p(V.location + Z, fe.meshPerAttribute);
              v.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = fe.meshPerAttribute * fe.count);
            } else
              for (let Z = 0; Z < V.locationSize; Z++)
                d(V.location + Z);
            s.bindBuffer(s.ARRAY_BUFFER, Ye);
            for (let Z = 0; Z < V.locationSize; Z++)
              b(
                V.location + Z,
                oe / V.locationSize,
                j,
                ue,
                Ie * Q,
                (Pe + oe / V.locationSize * Z) * Q,
                ge
              );
          } else {
            if (he.isInstancedBufferAttribute) {
              for (let fe = 0; fe < V.locationSize; fe++)
                p(V.location + fe, he.meshPerAttribute);
              v.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = he.meshPerAttribute * he.count);
            } else
              for (let fe = 0; fe < V.locationSize; fe++)
                d(V.location + fe);
            s.bindBuffer(s.ARRAY_BUFFER, Ye);
            for (let fe = 0; fe < V.locationSize; fe++)
              b(
                V.location + fe,
                oe / V.locationSize,
                j,
                ue,
                oe * Q,
                oe / V.locationSize * fe * Q,
                ge
              );
          }
        } else if (z !== void 0) {
          const ue = z[J];
          if (ue !== void 0)
            switch (ue.length) {
              case 2:
                s.vertexAttrib2fv(V.location, ue);
                break;
              case 3:
                s.vertexAttrib3fv(V.location, ue);
                break;
              case 4:
                s.vertexAttrib4fv(V.location, ue);
                break;
              default:
                s.vertexAttrib1fv(V.location, ue);
            }
        }
      }
    }
    S();
  }
  function C() {
    I();
    for (const v in n) {
      const E = n[v];
      for (const k in E) {
        const G = E[k];
        for (const B in G)
          h(G[B].object), delete G[B];
        delete E[k];
      }
      delete n[v];
    }
  }
  function A(v) {
    if (n[v.id] === void 0) return;
    const E = n[v.id];
    for (const k in E) {
      const G = E[k];
      for (const B in G)
        h(G[B].object), delete G[B];
      delete E[k];
    }
    delete n[v.id];
  }
  function w(v) {
    for (const E in n) {
      const k = n[E];
      if (k[v.id] === void 0) continue;
      const G = k[v.id];
      for (const B in G)
        h(G[B].object), delete G[B];
      delete k[v.id];
    }
  }
  function I() {
    q(), a = !0, r !== i && (r = i, c(r.object));
  }
  function q() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: I,
    resetDefaultState: q,
    dispose: C,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: w,
    initAttributes: _,
    enableAttribute: d,
    disableUnusedAttributes: S
  };
}
function Bu(s, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let m = 0;
    for (let g = 0; g < u; g++)
      m += h[g];
    t.update(m, n, 1);
  }
  function l(c, h, u, f) {
    if (u === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], h[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, f, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++)
        g += h[_];
      for (let _ = 0; _ < f.length; _++)
        t.update(g, n, f[_]);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Ou(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(w) {
    return !(w !== 1023 && n.convert(w) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const I = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !I);
  }
  function l(w) {
    if (w === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === !0, f = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (f === !0) {
    const w = e.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const m = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), d = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), p = s.getParameter(s.MAX_VERTEX_ATTRIBS), S = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), b = s.getParameter(s.MAX_VARYING_VECTORS), x = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), C = g > 0, A = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: f,
    maxTextures: m,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: d,
    maxAttributes: p,
    maxVertexUniforms: S,
    maxVaryings: b,
    maxFragmentUniforms: x,
    vertexTextures: C,
    maxSamples: A
  };
}
function Gu(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const a = new In(), o = new Ge(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const m = u.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = f, n = u.length, m;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, f) {
    t = h(u, f, 0);
  }, this.setState = function(u, f, m) {
    const g = u.clippingPlanes, _ = u.clipIntersection, d = u.clipShadows, p = s.get(u);
    if (!i || g === null || g.length === 0 || r && !d)
      r ? h(null) : c();
    else {
      const S = r ? 0 : n, b = S * 4;
      let x = p.clippingState || null;
      l.value = x, x = h(g, f, b, m);
      for (let C = 0; C !== b; ++C)
        x[C] = t[C];
      p.clippingState = x, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, f, m, g) {
    const _ = u !== null ? u.length : 0;
    let d = null;
    if (_ !== 0) {
      if (d = l.value, g !== !0 || d === null) {
        const p = m + _ * 4, S = f.matrixWorldInverse;
        o.getNormalMatrix(S), (d === null || d.length < p) && (d = new Float32Array(p));
        for (let b = 0, x = m; b !== _; ++b, x += 4)
          a.copy(u[b]).applyMatrix4(S, o), a.normal.toArray(d, x), d[x + 3] = a.constant;
      }
      l.value = d, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, d;
  }
}
function zu(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Ql(l.height);
            return c.fromEquirectangularTexture(s, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Ii extends wo {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ei = 4, pa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Un = 20, Qs = /* @__PURE__ */ new Ii(), ma = /* @__PURE__ */ new ae();
let Js = null, er = 0, tr = 0, nr = !1;
const Fn = (1 + Math.sqrt(5)) / 2, Qn = 1 / Fn, ga = [
  /* @__PURE__ */ new P(-Fn, Qn, 0),
  /* @__PURE__ */ new P(Fn, Qn, 0),
  /* @__PURE__ */ new P(-Qn, 0, Fn),
  /* @__PURE__ */ new P(Qn, 0, Fn),
  /* @__PURE__ */ new P(0, Fn, -Qn),
  /* @__PURE__ */ new P(0, Fn, Qn),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, 1)
];
class _r {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Js = this._renderer.getRenderTarget(), er = this._renderer.getActiveCubeFace(), tr = this._renderer.getActiveMipmapLevel(), nr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ba(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = va(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Js, er, tr), this._renderer.xr.enabled = nr, e.scissorTest = !1, ns(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Js = this._renderer.getRenderTarget(), er = this._renderer.getActiveCubeFace(), tr = this._renderer.getActiveMipmapLevel(), nr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: ut,
      depthBuffer: !1
    }, i = _a(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _a(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Hu(r)), this._blurMaterial = Vu(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new vt(this._lodPlanes[0], e);
    this._renderer.compile(t, Qs);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new wt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, f = h.toneMapping;
    h.getClearColor(ma), h.toneMapping = 0, h.autoClear = !1;
    const m = new Nn({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new vt(new Li(), m);
    let _ = !1;
    const d = e.background;
    d ? d.isColor && (m.color.copy(d), e.background = null, _ = !0) : (m.color.copy(ma), _ = !0);
    for (let p = 0; p < 6; p++) {
      const S = p % 3;
      S === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : S === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p]));
      const b = this._cubeSize;
      ns(i, S * b, p > 2 ? b : 0, b, b), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = f, h.autoClear = u, e.background = d;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = ba()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = va());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new vt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    ns(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Qs);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = ga[(i - r - 1) % ga.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new vt(this._lodPlanes[i], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Un - 1), _ = r / g, d = isFinite(r) ? 1 + Math.floor(h * _) : Un;
    d > Un && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Un}`);
    const p = [];
    let S = 0;
    for (let w = 0; w < Un; ++w) {
      const I = w / _, q = Math.exp(-I * I / 2);
      p.push(q), w === 0 ? S += q : w < d && (S += 2 * q);
    }
    for (let w = 0; w < p.length; w++)
      p[w] = p[w] / S;
    f.envMap.value = e.texture, f.samples.value = d, f.weights.value = p, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: b } = this;
    f.dTheta.value = g, f.mipInt.value = b - n;
    const x = this._sizeLods[i], C = 3 * x * (i > b - ei ? i - b + ei : 0), A = 4 * (this._cubeSize - x);
    ns(t, C, A, 3 * x, 2 * x), l.setRenderTarget(t), l.render(u, Qs);
  }
}
function Hu(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - ei + 1 + pa.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s - ei ? l = pa[a - s + ei - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, f = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, _ = 3, d = 2, p = 1, S = new Float32Array(_ * g * m), b = new Float32Array(d * g * m), x = new Float32Array(p * g * m);
    for (let A = 0; A < m; A++) {
      const w = A % 3 * 2 / 3 - 1, I = A > 2 ? 0 : -1, q = [
        w,
        I,
        0,
        w + 2 / 3,
        I,
        0,
        w + 2 / 3,
        I + 1,
        0,
        w,
        I,
        0,
        w + 2 / 3,
        I + 1,
        0,
        w,
        I + 1,
        0
      ];
      S.set(q, _ * g * A), b.set(f, d * g * A);
      const v = [A, A, A, A, A, A];
      x.set(v, p * g * A);
    }
    const C = new kt();
    C.setAttribute("position", new Mt(S, _)), C.setAttribute("uv", new Mt(b, d)), C.setAttribute("faceIndex", new Mt(x, p)), e.push(C), i > ei && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function _a(s, e, t) {
  const n = new dn(s, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ns(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Vu(s, e, t) {
  const n = new Float32Array(Un), i = new P(0, 1, 0);
  return new It({
    name: "SphericalGaussianBlur",
    defines: {
      n: Un,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Dr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function va() {
  return new It({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Dr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ba() {
  return new It({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Dr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Dr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Wu(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, h = l === 301 || l === 302;
      if (c || h) {
        let u = e.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return t === null && (t = new _r(s)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || h && m && i(m) ? (t === null && (t = new _r(s)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function ju(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = t(n);
      return i === null && ps("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Xu(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const _ = f.morphAttributes[g];
      for (let d = 0, p = _.length; d < p; d++)
        e.remove(_[d]);
    }
    f.removeEventListener("dispose", a), delete i[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", a), i[f.id] = !0, t.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const g in f)
      e.update(f[g], s.ARRAY_BUFFER);
    const m = u.morphAttributes;
    for (const g in m) {
      const _ = m[g];
      for (let d = 0, p = _.length; d < p; d++)
        e.update(_[d], s.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const f = [], m = u.index, g = u.attributes.position;
    let _ = 0;
    if (m !== null) {
      const S = m.array;
      _ = m.version;
      for (let b = 0, x = S.length; b < x; b += 3) {
        const C = S[b + 0], A = S[b + 1], w = S[b + 2];
        f.push(C, A, A, w, w, C);
      }
    } else if (g !== void 0) {
      const S = g.array;
      _ = g.version;
      for (let b = 0, x = S.length / 3 - 1; b < x; b += 3) {
        const C = b + 0, A = b + 1, w = b + 2;
        f.push(C, A, A, w, w, C);
      }
    } else
      return;
    const d = new (bo(f) ? Ao : Eo)(f, 1);
    d.version = _;
    const p = r.get(u);
    p && e.remove(p), r.set(u, d);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const m = u.index;
      m !== null && f.version < m.version && c(u);
    } else
      c(u);
    return r.get(u);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function qu(s, e, t) {
  let n;
  function i(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function l(f, m) {
    s.drawElements(n, m, r, f * a), t.update(m, n, 1);
  }
  function c(f, m, g) {
    g !== 0 && (s.drawElementsInstanced(n, m, r, f * a, g), t.update(m, n, g));
  }
  function h(f, m, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, g);
    let d = 0;
    for (let p = 0; p < g; p++)
      d += m[p];
    t.update(d, n, 1);
  }
  function u(f, m, g, _) {
    if (g === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null)
      for (let p = 0; p < f.length; p++)
        c(f[p] / a, m[p], _[p]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, _, 0, g);
      let p = 0;
      for (let S = 0; S < g; S++)
        p += m[S];
      for (let S = 0; S < _.length; S++)
        t.update(p, n, _[S]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function Yu(s) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Ku(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ve();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== u) {
      let q = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", q);
      };
      f !== void 0 && f.texture.dispose();
      const m = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], S = o.morphAttributes.color || [];
      let b = 0;
      m === !0 && (b = 1), g === !0 && (b = 2), _ === !0 && (b = 3);
      let x = o.attributes.position.count * b, C = 1;
      x > e.maxTextureSize && (C = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
      const A = new Float32Array(x * C * 4 * u), w = new So(A, x, C, u);
      w.type = 1015, w.needsUpdate = !0;
      const I = b * 4;
      for (let v = 0; v < u; v++) {
        const E = d[v], k = p[v], G = S[v], B = x * C * 4 * v;
        for (let $ = 0; $ < E.count; $++) {
          const z = $ * I;
          m === !0 && (i.fromBufferAttribute(E, $), A[B + z + 0] = i.x, A[B + z + 1] = i.y, A[B + z + 2] = i.z, A[B + z + 3] = 0), g === !0 && (i.fromBufferAttribute(k, $), A[B + z + 4] = i.x, A[B + z + 5] = i.y, A[B + z + 6] = i.z, A[B + z + 7] = 0), _ === !0 && (i.fromBufferAttribute(G, $), A[B + z + 8] = i.x, A[B + z + 9] = i.y, A[B + z + 10] = i.z, A[B + z + 11] = G.itemSize === 4 ? i.w : 1);
        }
      }
      f = {
        count: u,
        texture: w,
        size: new ze(x, C)
      }, n.set(o, f), o.addEventListener("dispose", q);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let m = 0;
      for (let _ = 0; _ < c.length; _++)
        m += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", g), l.getUniforms().setValue(s, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(s, "morphTargetsTextureSize", f.size);
  }
  return {
    update: r
  };
}
function $u(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      i.get(f) !== c && (f.update(), i.set(f, c));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
class Po extends gt {
  constructor(e, t, n, i, r, a, o, l, c, h = 1026) {
    if (h !== 1026 && h !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === 1026 && (n = 1014), n === void 0 && h === 1027 && (n = 1020), super(null, i, r, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Do = /* @__PURE__ */ new gt(), xa = /* @__PURE__ */ new Po(1, 1), Lo = /* @__PURE__ */ new So(), Io = /* @__PURE__ */ new kl(), Fo = /* @__PURE__ */ new Ro(), Sa = [], Ma = [], ya = new Float32Array(16), Ea = new Float32Array(9), Aa = new Float32Array(4);
function ci(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Sa[i];
  if (r === void 0 && (r = new Float32Array(i), Sa[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, s[a].toArray(r, o);
  }
  return r;
}
function ft(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t]) return !1;
  return !0;
}
function dt(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function ys(s, e) {
  let t = Ma[e];
  t === void 0 && (t = new Int32Array(e), Ma[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function Zu(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function Qu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2fv(this.addr, e), dt(t, e);
  }
}
function Ju(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ft(t, e)) return;
    s.uniform3fv(this.addr, e), dt(t, e);
  }
}
function ef(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4fv(this.addr, e), dt(t, e);
  }
}
function tf(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ft(t, n)) return;
    Aa.set(n), s.uniformMatrix2fv(this.addr, !1, Aa), dt(t, n);
  }
}
function nf(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ft(t, n)) return;
    Ea.set(n), s.uniformMatrix3fv(this.addr, !1, Ea), dt(t, n);
  }
}
function sf(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ft(t, n)) return;
    ya.set(n), s.uniformMatrix4fv(this.addr, !1, ya), dt(t, n);
  }
}
function rf(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function af(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2iv(this.addr, e), dt(t, e);
  }
}
function of(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    s.uniform3iv(this.addr, e), dt(t, e);
  }
}
function lf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4iv(this.addr, e), dt(t, e);
  }
}
function cf(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function hf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function uf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    s.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function ff(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function df(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (xa.compareFunction = 515, r = xa) : r = Do, t.setTexture2D(e || r, i);
}
function pf(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Io, i);
}
function mf(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Fo, i);
}
function gf(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Lo, i);
}
function _f(s) {
  switch (s) {
    case 5126:
      return Zu;
    case 35664:
      return Qu;
    case 35665:
      return Ju;
    case 35666:
      return ef;
    case 35674:
      return tf;
    case 35675:
      return nf;
    case 35676:
      return sf;
    case 5124:
    case 35670:
      return rf;
    case 35667:
    case 35671:
      return af;
    case 35668:
    case 35672:
      return of;
    case 35669:
    case 35673:
      return lf;
    case 5125:
      return cf;
    case 36294:
      return hf;
    case 36295:
      return uf;
    case 36296:
      return ff;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return df;
    case 35679:
    case 36299:
    case 36307:
      return pf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return gf;
  }
}
function vf(s, e) {
  s.uniform1fv(this.addr, e);
}
function bf(s, e) {
  const t = ci(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function xf(s, e) {
  const t = ci(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Sf(s, e) {
  const t = ci(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Mf(s, e) {
  const t = ci(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function yf(s, e) {
  const t = ci(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Ef(s, e) {
  const t = ci(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Af(s, e) {
  s.uniform1iv(this.addr, e);
}
function Tf(s, e) {
  s.uniform2iv(this.addr, e);
}
function wf(s, e) {
  s.uniform3iv(this.addr, e);
}
function Rf(s, e) {
  s.uniform4iv(this.addr, e);
}
function Cf(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Pf(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Df(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Lf(s, e) {
  s.uniform4uiv(this.addr, e);
}
function If(s, e, t) {
  const n = this.cache, i = e.length, r = ys(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Do, r[a]);
}
function Ff(s, e, t) {
  const n = this.cache, i = e.length, r = ys(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Io, r[a]);
}
function Uf(s, e, t) {
  const n = this.cache, i = e.length, r = ys(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Fo, r[a]);
}
function Nf(s, e, t) {
  const n = this.cache, i = e.length, r = ys(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || Lo, r[a]);
}
function kf(s) {
  switch (s) {
    case 5126:
      return vf;
    case 35664:
      return bf;
    case 35665:
      return xf;
    case 35666:
      return Sf;
    case 35674:
      return Mf;
    case 35675:
      return yf;
    case 35676:
      return Ef;
    case 5124:
    case 35670:
      return Af;
    case 35667:
    case 35671:
      return Tf;
    case 35668:
    case 35672:
      return wf;
    case 35669:
    case 35673:
      return Rf;
    case 5125:
      return Cf;
    case 36294:
      return Pf;
    case 36295:
      return Df;
    case 36296:
      return Lf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return If;
    case 35679:
    case 36299:
    case 36307:
      return Ff;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Uf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Nf;
  }
}
class Bf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = _f(t.type);
  }
}
class Of {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = kf(t.type);
  }
}
class Gf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ir = /(\w+)(\])?(\[|\.)?/g;
function Ta(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function zf(s, e, t) {
  const n = s.name, i = n.length;
  for (ir.lastIndex = 0; ; ) {
    const r = ir.exec(n), a = ir.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      Ta(t, c === void 0 ? new Bf(o, s, e) : new Of(o, s, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Gf(o), Ta(t, u)), t = u;
    }
  }
}
class ms {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      zf(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function wa(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const Hf = 37297;
let Vf = 0;
function Wf(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function jf(s) {
  const e = qe.getPrimaries(qe.workingColorSpace), t = qe.getPrimaries(s);
  let n;
  switch (e === t ? n = "" : e === vs && t === _s ? n = "LinearDisplayP3ToLinearSRGB" : e === _s && t === vs && (n = "LinearSRGBToLinearDisplayP3"), s) {
    case ut:
    case Ss:
      return [n, "LinearTransferOETF"];
    case mt:
    case wr:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"];
  }
}
function Ra(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + Wf(s.getShaderSource(e), a);
  } else
    return i;
}
function Xf(s, e) {
  const t = jf(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function qf(s, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const is = /* @__PURE__ */ new P();
function Yf() {
  qe.getLuminanceCoefficients(is);
  const s = is.x.toFixed(4), e = is.y.toFixed(4), t = is.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Kf(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ai).join(`
`);
}
function $f(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Zf(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2), r.type === s.FLOAT_MAT3 && (o = 3), r.type === s.FLOAT_MAT4 && (o = 4), t[a] = {
      type: r.type,
      location: s.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Ai(s) {
  return s !== "";
}
function Ca(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Pa(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Qf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function vr(s) {
  return s.replace(Qf, ed);
}
const Jf = /* @__PURE__ */ new Map();
function ed(s, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = Jf.get(e);
    if (n !== void 0)
      t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return vr(t);
}
const td = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Da(s) {
  return s.replace(td, nd);
}
function nd(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function La(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function id(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function sd(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function rd(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function ad(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function od(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function ld(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = id(t), c = sd(t), h = rd(t), u = ad(t), f = od(t), m = Kf(t), g = $f(r), _ = i.createProgram();
  let d, p, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Ai).join(`
`), d.length > 0 && (d += `
`), p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Ai).join(`
`), p.length > 0 && (p += `
`)) : (d = [
    La(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ai).join(`
`), p = [
    La(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Oe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? qf("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Xf("linearToOutputTexel", t.outputColorSpace),
    Yf(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Ai).join(`
`)), a = vr(a), a = Ca(a, t), a = Pa(a, t), o = vr(o), o = Ca(o, t), o = Pa(o, t), a = Da(a), o = Da(o), t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, d = [
    m,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + d, p = [
    "#define varying in",
    t.glslVersion === Kr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Kr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const b = S + d + a, x = S + p + o, C = wa(i, i.VERTEX_SHADER, b), A = wa(i, i.FRAGMENT_SHADER, x);
  i.attachShader(_, C), i.attachShader(_, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function w(E) {
    if (s.debug.checkShaderErrors) {
      const k = i.getProgramInfoLog(_).trim(), G = i.getShaderInfoLog(C).trim(), B = i.getShaderInfoLog(A).trim();
      let $ = !0, z = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if ($ = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, _, C, A);
        else {
          const J = Ra(i, C, "vertex"), V = Ra(i, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + E.name + `
Material Type: ` + E.type + `

Program Info Log: ` + k + `
` + J + `
` + V
          );
        }
      else k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (G === "" || B === "") && (z = !1);
      z && (E.diagnostics = {
        runnable: $,
        programLog: k,
        vertexShader: {
          log: G,
          prefix: d
        },
        fragmentShader: {
          log: B,
          prefix: p
        }
      });
    }
    i.deleteShader(C), i.deleteShader(A), I = new ms(i, _), q = Zf(i, _);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && w(this), I;
  };
  let q;
  this.getAttributes = function() {
    return q === void 0 && w(this), q;
  };
  let v = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return v === !1 && (v = i.getProgramParameter(_, Hf)), v;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Vf++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = C, this.fragmentShader = A, this;
}
let cd = 0;
class hd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new ud(e), t.set(e, n)), n;
  }
}
class ud {
  constructor(e) {
    this.id = cd++, this.code = e, this.usedTimes = 0;
  }
}
function fd(s, e, t, n, i, r, a) {
  const o = new Mo(), l = new hd(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, f = i.reverseDepthBuffer, m = i.vertexTextures;
  let g = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function d(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function p(v, E, k, G, B) {
    const $ = G.fog, z = B.geometry, J = v.isMeshStandardMaterial ? G.environment : null, V = (v.isMeshStandardMaterial ? t : e).get(v.envMap || J), he = V && V.mapping === 306 ? V.image.height : null, ue = _[v.type];
    v.precision !== null && (g = i.getMaxPrecision(v.precision), g !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", g, "instead."));
    const oe = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, We = oe !== void 0 ? oe.length : 0;
    let Ye = 0;
    z.morphAttributes.position !== void 0 && (Ye = 1), z.morphAttributes.normal !== void 0 && (Ye = 2), z.morphAttributes.color !== void 0 && (Ye = 3);
    let j, Q, ge, fe;
    if (ue) {
      const Tt = Kt[ue];
      j = Tt.vertexShader, Q = Tt.fragmentShader;
    } else
      j = v.vertexShader, Q = v.fragmentShader, l.update(v), ge = l.getVertexShaderID(v), fe = l.getFragmentShaderID(v);
    const Ie = s.getRenderTarget(), Pe = B.isInstancedMesh === !0, Z = B.isBatchedMesh === !0, ne = !!v.map, ie = !!v.matcap, R = !!V, Me = !!v.aoMap, _e = !!v.lightMap, Ne = !!v.bumpMap, Ae = !!v.normalMap, ke = !!v.displacementMap, Re = !!v.emissiveMap, T = !!v.metalnessMap, M = !!v.roughnessMap, F = v.anisotropy > 0, H = v.clearcoat > 0, Y = v.dispersion > 0, X = v.iridescence > 0, Ee = v.sheen > 0, re = v.transmission > 0, me = F && !!v.anisotropyMap, Ke = H && !!v.clearcoatMap, ee = H && !!v.clearcoatNormalMap, ve = H && !!v.clearcoatRoughnessMap, Fe = X && !!v.iridescenceMap, Ue = X && !!v.iridescenceThicknessMap, be = Ee && !!v.sheenColorMap, je = Ee && !!v.sheenRoughnessMap, Be = !!v.specularMap, it = !!v.specularColorMap, D = !!v.specularIntensityMap, de = re && !!v.transmissionMap, W = re && !!v.thicknessMap, K = !!v.gradientMap, le = !!v.alphaMap, pe = v.alphaTest > 0, Xe = !!v.alphaHash, ct = !!v.extensions;
    let At = 0;
    v.toneMapped && (Ie === null || Ie.isXRRenderTarget === !0) && (At = s.toneMapping);
    const $e = {
      shaderID: ue,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: j,
      fragmentShader: Q,
      defines: v.defines,
      customVertexShaderID: ge,
      customFragmentShaderID: fe,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: g,
      batching: Z,
      batchingColor: Z && B._colorsTexture !== null,
      instancing: Pe,
      instancingColor: Pe && B.instanceColor !== null,
      instancingMorph: Pe && B.morphTexture !== null,
      supportsVertexTextures: m,
      outputColorSpace: Ie === null ? s.outputColorSpace : Ie.isXRRenderTarget === !0 ? Ie.texture.colorSpace : ut,
      alphaToCoverage: !!v.alphaToCoverage,
      map: ne,
      matcap: ie,
      envMap: R,
      envMapMode: R && V.mapping,
      envMapCubeUVHeight: he,
      aoMap: Me,
      lightMap: _e,
      bumpMap: Ne,
      normalMap: Ae,
      displacementMap: m && ke,
      emissiveMap: Re,
      normalMapObjectSpace: Ae && v.normalMapType === 1,
      normalMapTangentSpace: Ae && v.normalMapType === 0,
      metalnessMap: T,
      roughnessMap: M,
      anisotropy: F,
      anisotropyMap: me,
      clearcoat: H,
      clearcoatMap: Ke,
      clearcoatNormalMap: ee,
      clearcoatRoughnessMap: ve,
      dispersion: Y,
      iridescence: X,
      iridescenceMap: Fe,
      iridescenceThicknessMap: Ue,
      sheen: Ee,
      sheenColorMap: be,
      sheenRoughnessMap: je,
      specularMap: Be,
      specularColorMap: it,
      specularIntensityMap: D,
      transmission: re,
      transmissionMap: de,
      thicknessMap: W,
      gradientMap: K,
      opaque: v.transparent === !1 && v.blending === 1 && v.alphaToCoverage === !1,
      alphaMap: le,
      alphaTest: pe,
      alphaHash: Xe,
      combine: v.combine,
      //
      mapUv: ne && d(v.map.channel),
      aoMapUv: Me && d(v.aoMap.channel),
      lightMapUv: _e && d(v.lightMap.channel),
      bumpMapUv: Ne && d(v.bumpMap.channel),
      normalMapUv: Ae && d(v.normalMap.channel),
      displacementMapUv: ke && d(v.displacementMap.channel),
      emissiveMapUv: Re && d(v.emissiveMap.channel),
      metalnessMapUv: T && d(v.metalnessMap.channel),
      roughnessMapUv: M && d(v.roughnessMap.channel),
      anisotropyMapUv: me && d(v.anisotropyMap.channel),
      clearcoatMapUv: Ke && d(v.clearcoatMap.channel),
      clearcoatNormalMapUv: ee && d(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ve && d(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Fe && d(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ue && d(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: be && d(v.sheenColorMap.channel),
      sheenRoughnessMapUv: je && d(v.sheenRoughnessMap.channel),
      specularMapUv: Be && d(v.specularMap.channel),
      specularColorMapUv: it && d(v.specularColorMap.channel),
      specularIntensityMapUv: D && d(v.specularIntensityMap.channel),
      transmissionMapUv: de && d(v.transmissionMap.channel),
      thicknessMapUv: W && d(v.thicknessMap.channel),
      alphaMapUv: le && d(v.alphaMap.channel),
      //
      vertexTangents: !!z.attributes.tangent && (Ae || F),
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!z.attributes.uv && (ne || le),
      fog: !!$,
      useFog: v.fog === !0,
      fogExp2: !!$ && $.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: f,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: z.morphAttributes.position !== void 0,
      morphNormals: z.morphAttributes.normal !== void 0,
      morphColors: z.morphAttributes.color !== void 0,
      morphTargetsCount: We,
      morphTextureStride: Ye,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numLightProbes: E.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: s.shadowMap.enabled && k.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: At,
      decodeVideoTexture: ne && v.map.isVideoTexture === !0 && qe.getTransfer(v.map.colorSpace) === st,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: ct && v.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ct && v.extensions.multiDraw === !0 || Z) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return $e.vertexUv1s = c.has(1), $e.vertexUv2s = c.has(2), $e.vertexUv3s = c.has(3), c.clear(), $e;
  }
  function S(v) {
    const E = [];
    if (v.shaderID ? E.push(v.shaderID) : (E.push(v.customVertexShaderID), E.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const k in v.defines)
        E.push(k), E.push(v.defines[k]);
    return v.isRawShaderMaterial === !1 && (b(E, v), x(E, v), E.push(s.outputColorSpace)), E.push(v.customProgramCacheKey), E.join();
  }
  function b(v, E) {
    v.push(E.precision), v.push(E.outputColorSpace), v.push(E.envMapMode), v.push(E.envMapCubeUVHeight), v.push(E.mapUv), v.push(E.alphaMapUv), v.push(E.lightMapUv), v.push(E.aoMapUv), v.push(E.bumpMapUv), v.push(E.normalMapUv), v.push(E.displacementMapUv), v.push(E.emissiveMapUv), v.push(E.metalnessMapUv), v.push(E.roughnessMapUv), v.push(E.anisotropyMapUv), v.push(E.clearcoatMapUv), v.push(E.clearcoatNormalMapUv), v.push(E.clearcoatRoughnessMapUv), v.push(E.iridescenceMapUv), v.push(E.iridescenceThicknessMapUv), v.push(E.sheenColorMapUv), v.push(E.sheenRoughnessMapUv), v.push(E.specularMapUv), v.push(E.specularColorMapUv), v.push(E.specularIntensityMapUv), v.push(E.transmissionMapUv), v.push(E.thicknessMapUv), v.push(E.combine), v.push(E.fogExp2), v.push(E.sizeAttenuation), v.push(E.morphTargetsCount), v.push(E.morphAttributeCount), v.push(E.numDirLights), v.push(E.numPointLights), v.push(E.numSpotLights), v.push(E.numSpotLightMaps), v.push(E.numHemiLights), v.push(E.numRectAreaLights), v.push(E.numDirLightShadows), v.push(E.numPointLightShadows), v.push(E.numSpotLightShadows), v.push(E.numSpotLightShadowsWithMaps), v.push(E.numLightProbes), v.push(E.shadowMapType), v.push(E.toneMapping), v.push(E.numClippingPlanes), v.push(E.numClipIntersection), v.push(E.depthPacking);
  }
  function x(v, E) {
    o.disableAll(), E.supportsVertexTextures && o.enable(0), E.instancing && o.enable(1), E.instancingColor && o.enable(2), E.instancingMorph && o.enable(3), E.matcap && o.enable(4), E.envMap && o.enable(5), E.normalMapObjectSpace && o.enable(6), E.normalMapTangentSpace && o.enable(7), E.clearcoat && o.enable(8), E.iridescence && o.enable(9), E.alphaTest && o.enable(10), E.vertexColors && o.enable(11), E.vertexAlphas && o.enable(12), E.vertexUv1s && o.enable(13), E.vertexUv2s && o.enable(14), E.vertexUv3s && o.enable(15), E.vertexTangents && o.enable(16), E.anisotropy && o.enable(17), E.alphaHash && o.enable(18), E.batching && o.enable(19), E.dispersion && o.enable(20), E.batchingColor && o.enable(21), v.push(o.mask), o.disableAll(), E.fog && o.enable(0), E.useFog && o.enable(1), E.flatShading && o.enable(2), E.logarithmicDepthBuffer && o.enable(3), E.reverseDepthBuffer && o.enable(4), E.skinning && o.enable(5), E.morphTargets && o.enable(6), E.morphNormals && o.enable(7), E.morphColors && o.enable(8), E.premultipliedAlpha && o.enable(9), E.shadowMapEnabled && o.enable(10), E.doubleSided && o.enable(11), E.flipSided && o.enable(12), E.useDepthPacking && o.enable(13), E.dithering && o.enable(14), E.transmission && o.enable(15), E.sheen && o.enable(16), E.opaque && o.enable(17), E.pointsUvs && o.enable(18), E.decodeVideoTexture && o.enable(19), E.alphaToCoverage && o.enable(20), v.push(o.mask);
  }
  function C(v) {
    const E = _[v.type];
    let k;
    if (E) {
      const G = Kt[E];
      k = Cr.clone(G.uniforms);
    } else
      k = v.uniforms;
    return k;
  }
  function A(v, E) {
    let k;
    for (let G = 0, B = h.length; G < B; G++) {
      const $ = h[G];
      if ($.cacheKey === E) {
        k = $, ++k.usedTimes;
        break;
      }
    }
    return k === void 0 && (k = new ld(s, E, v, r), h.push(k)), k;
  }
  function w(v) {
    if (--v.usedTimes === 0) {
      const E = h.indexOf(v);
      h[E] = h[h.length - 1], h.pop(), v.destroy();
    }
  }
  function I(v) {
    l.remove(v);
  }
  function q() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: S,
    getUniforms: C,
    acquireProgram: A,
    releaseProgram: w,
    releaseShaderCache: I,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: q
  };
}
function dd() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return s.has(a);
  }
  function t(a) {
    let o = s.get(a);
    return o === void 0 && (o = {}, s.set(a, o)), o;
  }
  function n(a) {
    s.delete(a);
  }
  function i(a, o, l) {
    s.get(a)[o] = l;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: i,
    dispose: r
  };
}
function pd(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Ia(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Fa() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, f, m, g, _, d) {
    let p = s[e];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: _,
      group: d
    }, s[e] = p) : (p.id = u.id, p.object = u, p.geometry = f, p.material = m, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = _, p.group = d), e++, p;
  }
  function o(u, f, m, g, _, d) {
    const p = a(u, f, m, g, _, d);
    m.transmission > 0 ? n.push(p) : m.transparent === !0 ? i.push(p) : t.push(p);
  }
  function l(u, f, m, g, _, d) {
    const p = a(u, f, m, g, _, d);
    m.transmission > 0 ? n.unshift(p) : m.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || pd), n.length > 1 && n.sort(f || Ia), i.length > 1 && i.sort(f || Ia);
  }
  function h() {
    for (let u = e, f = s.length; u < f; u++) {
      const m = s[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function md() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new Fa(), s.set(n, [a])) : i >= r.length ? (a = new Fa(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function gd() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new ae()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new ae(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new ae(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new ae(),
            groundColor: new ae()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ae(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function _d() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ze()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ze()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ze(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let vd = 0;
function bd(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function xd(s) {
  const e = new gd(), t = _d(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new P());
  const i = new P(), r = new Ce(), a = new Ce();
  function o(c) {
    let h = 0, u = 0, f = 0;
    for (let q = 0; q < 9; q++) n.probe[q].set(0, 0, 0);
    let m = 0, g = 0, _ = 0, d = 0, p = 0, S = 0, b = 0, x = 0, C = 0, A = 0, w = 0;
    c.sort(bd);
    for (let q = 0, v = c.length; q < v; q++) {
      const E = c[q], k = E.color, G = E.intensity, B = E.distance, $ = E.shadow && E.shadow.map ? E.shadow.map.texture : null;
      if (E.isAmbientLight)
        h += k.r * G, u += k.g * G, f += k.b * G;
      else if (E.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(E.sh.coefficients[z], G);
        w++;
      } else if (E.isDirectionalLight) {
        const z = e.get(E);
        if (z.color.copy(E.color).multiplyScalar(E.intensity), E.castShadow) {
          const J = E.shadow, V = t.get(E);
          V.shadowIntensity = J.intensity, V.shadowBias = J.bias, V.shadowNormalBias = J.normalBias, V.shadowRadius = J.radius, V.shadowMapSize = J.mapSize, n.directionalShadow[m] = V, n.directionalShadowMap[m] = $, n.directionalShadowMatrix[m] = E.shadow.matrix, S++;
        }
        n.directional[m] = z, m++;
      } else if (E.isSpotLight) {
        const z = e.get(E);
        z.position.setFromMatrixPosition(E.matrixWorld), z.color.copy(k).multiplyScalar(G), z.distance = B, z.coneCos = Math.cos(E.angle), z.penumbraCos = Math.cos(E.angle * (1 - E.penumbra)), z.decay = E.decay, n.spot[_] = z;
        const J = E.shadow;
        if (E.map && (n.spotLightMap[C] = E.map, C++, J.updateMatrices(E), E.castShadow && A++), n.spotLightMatrix[_] = J.matrix, E.castShadow) {
          const V = t.get(E);
          V.shadowIntensity = J.intensity, V.shadowBias = J.bias, V.shadowNormalBias = J.normalBias, V.shadowRadius = J.radius, V.shadowMapSize = J.mapSize, n.spotShadow[_] = V, n.spotShadowMap[_] = $, x++;
        }
        _++;
      } else if (E.isRectAreaLight) {
        const z = e.get(E);
        z.color.copy(k).multiplyScalar(G), z.halfWidth.set(E.width * 0.5, 0, 0), z.halfHeight.set(0, E.height * 0.5, 0), n.rectArea[d] = z, d++;
      } else if (E.isPointLight) {
        const z = e.get(E);
        if (z.color.copy(E.color).multiplyScalar(E.intensity), z.distance = E.distance, z.decay = E.decay, E.castShadow) {
          const J = E.shadow, V = t.get(E);
          V.shadowIntensity = J.intensity, V.shadowBias = J.bias, V.shadowNormalBias = J.normalBias, V.shadowRadius = J.radius, V.shadowMapSize = J.mapSize, V.shadowCameraNear = J.camera.near, V.shadowCameraFar = J.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = $, n.pointShadowMatrix[g] = E.shadow.matrix, b++;
        }
        n.point[g] = z, g++;
      } else if (E.isHemisphereLight) {
        const z = e.get(E);
        z.skyColor.copy(E.color).multiplyScalar(G), z.groundColor.copy(E.groundColor).multiplyScalar(G), n.hemi[p] = z, p++;
      }
    }
    d > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = se.LTC_FLOAT_1, n.rectAreaLTC2 = se.LTC_FLOAT_2) : (n.rectAreaLTC1 = se.LTC_HALF_1, n.rectAreaLTC2 = se.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const I = n.hash;
    (I.directionalLength !== m || I.pointLength !== g || I.spotLength !== _ || I.rectAreaLength !== d || I.hemiLength !== p || I.numDirectionalShadows !== S || I.numPointShadows !== b || I.numSpotShadows !== x || I.numSpotMaps !== C || I.numLightProbes !== w) && (n.directional.length = m, n.spot.length = _, n.rectArea.length = d, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = S, n.directionalShadowMap.length = S, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = S, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = x + C - A, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = A, n.numLightProbes = w, I.directionalLength = m, I.pointLength = g, I.spotLength = _, I.rectAreaLength = d, I.hemiLength = p, I.numDirectionalShadows = S, I.numPointShadows = b, I.numSpotShadows = x, I.numSpotMaps = C, I.numLightProbes = w, n.version = vd++);
  }
  function l(c, h) {
    let u = 0, f = 0, m = 0, g = 0, _ = 0;
    const d = h.matrixWorldInverse;
    for (let p = 0, S = c.length; p < S; p++) {
      const b = c[p];
      if (b.isDirectionalLight) {
        const x = n.directional[u];
        x.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(d), u++;
      } else if (b.isSpotLight) {
        const x = n.spot[m];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(d), x.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(d), m++;
      } else if (b.isRectAreaLight) {
        const x = n.rectArea[g];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(d), a.identity(), r.copy(b.matrixWorld), r.premultiply(d), a.extractRotation(r), x.halfWidth.set(b.width * 0.5, 0, 0), x.halfHeight.set(0, b.height * 0.5, 0), x.halfWidth.applyMatrix4(a), x.halfHeight.applyMatrix4(a), g++;
      } else if (b.isPointLight) {
        const x = n.point[f];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(d), f++;
      } else if (b.isHemisphereLight) {
        const x = n.hemi[_];
        x.direction.setFromMatrixPosition(b.matrixWorld), x.direction.transformDirection(d), _++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Ua(s) {
  const e = new xd(s), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: r,
    pushShadow: a
  };
}
function Sd(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new Ua(s), e.set(i, [o])) : r >= a.length ? (o = new Ua(s), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Uo extends $t {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Md extends $t {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const yd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ed = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Ad(s, e, t) {
  let n = new Pr();
  const i = new ze(), r = new ze(), a = new Ve(), o = new Uo({ depthPacking: 3201 }), l = new Md(), c = {}, h = t.maxTextureSize, u = { 0: 1, 1: 0, 2: 2 }, f = new It({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ze() },
      radius: { value: 4 }
    },
    vertexShader: yd,
    fragmentShader: Ed
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new kt();
  g.setAttribute(
    "position",
    new Mt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new vt(g, f), d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let p = this.type;
  this.render = function(A, w, I) {
    if (d.enabled === !1 || d.autoUpdate === !1 && d.needsUpdate === !1 || A.length === 0) return;
    const q = s.getRenderTarget(), v = s.getActiveCubeFace(), E = s.getActiveMipmapLevel(), k = s.state;
    k.setBlending(0), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1);
    const G = p !== 3 && this.type === 3, B = p === 3 && this.type !== 3;
    for (let $ = 0, z = A.length; $ < z; $++) {
      const J = A[$], V = J.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      i.copy(V.mapSize);
      const he = V.getFrameExtents();
      if (i.multiply(he), r.copy(V.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / he.x), i.x = r.x * he.x, V.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / he.y), i.y = r.y * he.y, V.mapSize.y = r.y)), V.map === null || G === !0 || B === !0) {
        const oe = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        V.map !== null && V.map.dispose(), V.map = new dn(i.x, i.y, oe), V.map.texture.name = J.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(V.map), s.clear();
      const ue = V.getViewportCount();
      for (let oe = 0; oe < ue; oe++) {
        const We = V.getViewport(oe);
        a.set(
          r.x * We.x,
          r.y * We.y,
          r.x * We.z,
          r.y * We.w
        ), k.viewport(a), V.updateMatrices(J, oe), n = V.getFrustum(), x(w, I, V.camera, J, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === 3 && S(V, I), V.needsUpdate = !1;
    }
    p = this.type, d.needsUpdate = !1, s.setRenderTarget(q, v, E);
  };
  function S(A, w) {
    const I = e.update(_);
    f.defines.VSM_SAMPLES !== A.blurSamples && (f.defines.VSM_SAMPLES = A.blurSamples, m.defines.VSM_SAMPLES = A.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), A.mapPass === null && (A.mapPass = new dn(i.x, i.y)), f.uniforms.shadow_pass.value = A.map.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, s.setRenderTarget(A.mapPass), s.clear(), s.renderBufferDirect(w, null, I, f, _, null), m.uniforms.shadow_pass.value = A.mapPass.texture, m.uniforms.resolution.value = A.mapSize, m.uniforms.radius.value = A.radius, s.setRenderTarget(A.map), s.clear(), s.renderBufferDirect(w, null, I, m, _, null);
  }
  function b(A, w, I, q) {
    let v = null;
    const E = I.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (E !== void 0)
      v = E;
    else if (v = I.isPointLight === !0 ? l : o, s.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const k = v.uuid, G = w.uuid;
      let B = c[k];
      B === void 0 && (B = {}, c[k] = B);
      let $ = B[G];
      $ === void 0 && ($ = v.clone(), B[G] = $, w.addEventListener("dispose", C)), v = $;
    }
    if (v.visible = w.visible, v.wireframe = w.wireframe, q === 3 ? v.side = w.shadowSide !== null ? w.shadowSide : w.side : v.side = w.shadowSide !== null ? w.shadowSide : u[w.side], v.alphaMap = w.alphaMap, v.alphaTest = w.alphaTest, v.map = w.map, v.clipShadows = w.clipShadows, v.clippingPlanes = w.clippingPlanes, v.clipIntersection = w.clipIntersection, v.displacementMap = w.displacementMap, v.displacementScale = w.displacementScale, v.displacementBias = w.displacementBias, v.wireframeLinewidth = w.wireframeLinewidth, v.linewidth = w.linewidth, I.isPointLight === !0 && v.isMeshDistanceMaterial === !0) {
      const k = s.properties.get(v);
      k.light = I;
    }
    return v;
  }
  function x(A, w, I, q, v) {
    if (A.visible === !1) return;
    if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && v === 3) && (!A.frustumCulled || n.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, A.matrixWorld);
      const G = e.update(A), B = A.material;
      if (Array.isArray(B)) {
        const $ = G.groups;
        for (let z = 0, J = $.length; z < J; z++) {
          const V = $[z], he = B[V.materialIndex];
          if (he && he.visible) {
            const ue = b(A, he, q, v);
            A.onBeforeShadow(s, A, w, I, G, ue, V), s.renderBufferDirect(I, null, G, ue, A, V), A.onAfterShadow(s, A, w, I, G, ue, V);
          }
        }
      } else if (B.visible) {
        const $ = b(A, B, q, v);
        A.onBeforeShadow(s, A, w, I, G, $, null), s.renderBufferDirect(I, null, G, $, A, null), A.onAfterShadow(s, A, w, I, G, $, null);
      }
    }
    const k = A.children;
    for (let G = 0, B = k.length; G < B; G++)
      x(k[G], w, I, q, v);
  }
  function C(A) {
    A.target.removeEventListener("dispose", C);
    for (const I in c) {
      const q = c[I], v = A.target.uuid;
      v in q && (q[v].dispose(), delete q[v]);
    }
  }
}
const Td = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function wd(s) {
  function e() {
    let D = !1;
    const de = new Ve();
    let W = null;
    const K = new Ve(0, 0, 0, 0);
    return {
      setMask: function(le) {
        W !== le && !D && (s.colorMask(le, le, le, le), W = le);
      },
      setLocked: function(le) {
        D = le;
      },
      setClear: function(le, pe, Xe, ct, At) {
        At === !0 && (le *= ct, pe *= ct, Xe *= ct), de.set(le, pe, Xe, ct), K.equals(de) === !1 && (s.clearColor(le, pe, Xe, ct), K.copy(de));
      },
      reset: function() {
        D = !1, W = null, K.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let D = !1, de = !1, W = null, K = null, le = null;
    return {
      setReversed: function(pe) {
        de = pe;
      },
      setTest: function(pe) {
        pe ? ge(s.DEPTH_TEST) : fe(s.DEPTH_TEST);
      },
      setMask: function(pe) {
        W !== pe && !D && (s.depthMask(pe), W = pe);
      },
      setFunc: function(pe) {
        if (de && (pe = Td[pe]), K !== pe) {
          switch (pe) {
            case 0:
              s.depthFunc(s.NEVER);
              break;
            case 1:
              s.depthFunc(s.ALWAYS);
              break;
            case 2:
              s.depthFunc(s.LESS);
              break;
            case 3:
              s.depthFunc(s.LEQUAL);
              break;
            case 4:
              s.depthFunc(s.EQUAL);
              break;
            case 5:
              s.depthFunc(s.GEQUAL);
              break;
            case 6:
              s.depthFunc(s.GREATER);
              break;
            case 7:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          K = pe;
        }
      },
      setLocked: function(pe) {
        D = pe;
      },
      setClear: function(pe) {
        le !== pe && (s.clearDepth(pe), le = pe);
      },
      reset: function() {
        D = !1, W = null, K = null, le = null;
      }
    };
  }
  function n() {
    let D = !1, de = null, W = null, K = null, le = null, pe = null, Xe = null, ct = null, At = null;
    return {
      setTest: function($e) {
        D || ($e ? ge(s.STENCIL_TEST) : fe(s.STENCIL_TEST));
      },
      setMask: function($e) {
        de !== $e && !D && (s.stencilMask($e), de = $e);
      },
      setFunc: function($e, Tt, tn) {
        (W !== $e || K !== Tt || le !== tn) && (s.stencilFunc($e, Tt, tn), W = $e, K = Tt, le = tn);
      },
      setOp: function($e, Tt, tn) {
        (pe !== $e || Xe !== Tt || ct !== tn) && (s.stencilOp($e, Tt, tn), pe = $e, Xe = Tt, ct = tn);
      },
      setLocked: function($e) {
        D = $e;
      },
      setClear: function($e) {
        At !== $e && (s.clearStencil($e), At = $e);
      },
      reset: function() {
        D = !1, de = null, W = null, K = null, le = null, pe = null, Xe = null, ct = null, At = null;
      }
    };
  }
  const i = new e(), r = new t(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), f = [], m = null, g = !1, _ = null, d = null, p = null, S = null, b = null, x = null, C = null, A = new ae(0, 0, 0), w = 0, I = !1, q = null, v = null, E = null, k = null, G = null;
  const B = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1, z = 0;
  const J = s.getParameter(s.VERSION);
  J.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(J)[1]), $ = z >= 1) : J.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), $ = z >= 2);
  let V = null, he = {};
  const ue = s.getParameter(s.SCISSOR_BOX), oe = s.getParameter(s.VIEWPORT), We = new Ve().fromArray(ue), Ye = new Ve().fromArray(oe);
  function j(D, de, W, K) {
    const le = new Uint8Array(4), pe = s.createTexture();
    s.bindTexture(D, pe), s.texParameteri(D, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(D, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Xe = 0; Xe < W; Xe++)
      D === s.TEXTURE_3D || D === s.TEXTURE_2D_ARRAY ? s.texImage3D(de, 0, s.RGBA, 1, 1, K, 0, s.RGBA, s.UNSIGNED_BYTE, le) : s.texImage2D(de + Xe, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, le);
    return pe;
  }
  const Q = {};
  Q[s.TEXTURE_2D] = j(s.TEXTURE_2D, s.TEXTURE_2D, 1), Q[s.TEXTURE_CUBE_MAP] = j(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Q[s.TEXTURE_2D_ARRAY] = j(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), Q[s.TEXTURE_3D] = j(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), r.setClear(1), a.setClear(0), ge(s.DEPTH_TEST), r.setFunc(3), _e(!1), Ne(1), ge(s.CULL_FACE), R(0);
  function ge(D) {
    c[D] !== !0 && (s.enable(D), c[D] = !0);
  }
  function fe(D) {
    c[D] !== !1 && (s.disable(D), c[D] = !1);
  }
  function Ie(D, de) {
    return h[D] !== de ? (s.bindFramebuffer(D, de), h[D] = de, D === s.DRAW_FRAMEBUFFER && (h[s.FRAMEBUFFER] = de), D === s.FRAMEBUFFER && (h[s.DRAW_FRAMEBUFFER] = de), !0) : !1;
  }
  function Pe(D, de) {
    let W = f, K = !1;
    if (D) {
      W = u.get(de), W === void 0 && (W = [], u.set(de, W));
      const le = D.textures;
      if (W.length !== le.length || W[0] !== s.COLOR_ATTACHMENT0) {
        for (let pe = 0, Xe = le.length; pe < Xe; pe++)
          W[pe] = s.COLOR_ATTACHMENT0 + pe;
        W.length = le.length, K = !0;
      }
    } else
      W[0] !== s.BACK && (W[0] = s.BACK, K = !0);
    K && s.drawBuffers(W);
  }
  function Z(D) {
    return m !== D ? (s.useProgram(D), m = D, !0) : !1;
  }
  const ne = {
    100: s.FUNC_ADD,
    101: s.FUNC_SUBTRACT,
    102: s.FUNC_REVERSE_SUBTRACT
  };
  ne[103] = s.MIN, ne[104] = s.MAX;
  const ie = {
    200: s.ZERO,
    201: s.ONE,
    202: s.SRC_COLOR,
    204: s.SRC_ALPHA,
    210: s.SRC_ALPHA_SATURATE,
    208: s.DST_COLOR,
    206: s.DST_ALPHA,
    203: s.ONE_MINUS_SRC_COLOR,
    205: s.ONE_MINUS_SRC_ALPHA,
    209: s.ONE_MINUS_DST_COLOR,
    207: s.ONE_MINUS_DST_ALPHA,
    211: s.CONSTANT_COLOR,
    212: s.ONE_MINUS_CONSTANT_COLOR,
    213: s.CONSTANT_ALPHA,
    214: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(D, de, W, K, le, pe, Xe, ct, At, $e) {
    if (D === 0) {
      g === !0 && (fe(s.BLEND), g = !1);
      return;
    }
    if (g === !1 && (ge(s.BLEND), g = !0), D !== 5) {
      if (D !== _ || $e !== I) {
        if ((d !== 100 || b !== 100) && (s.blendEquation(s.FUNC_ADD), d = 100, b = 100), $e)
          switch (D) {
            case 1:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case 3:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case 4:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case 1:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case 3:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case 4:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        p = null, S = null, x = null, C = null, A.set(0, 0, 0), w = 0, _ = D, I = $e;
      }
      return;
    }
    le = le || de, pe = pe || W, Xe = Xe || K, (de !== d || le !== b) && (s.blendEquationSeparate(ne[de], ne[le]), d = de, b = le), (W !== p || K !== S || pe !== x || Xe !== C) && (s.blendFuncSeparate(ie[W], ie[K], ie[pe], ie[Xe]), p = W, S = K, x = pe, C = Xe), (ct.equals(A) === !1 || At !== w) && (s.blendColor(ct.r, ct.g, ct.b, At), A.copy(ct), w = At), _ = D, I = !1;
  }
  function Me(D, de) {
    D.side === 2 ? fe(s.CULL_FACE) : ge(s.CULL_FACE);
    let W = D.side === 1;
    de && (W = !W), _e(W), D.blending === 1 && D.transparent === !1 ? R(0) : R(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), r.setFunc(D.depthFunc), r.setTest(D.depthTest), r.setMask(D.depthWrite), i.setMask(D.colorWrite);
    const K = D.stencilWrite;
    a.setTest(K), K && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), ke(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? ge(s.SAMPLE_ALPHA_TO_COVERAGE) : fe(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function _e(D) {
    q !== D && (D ? s.frontFace(s.CW) : s.frontFace(s.CCW), q = D);
  }
  function Ne(D) {
    D !== 0 ? (ge(s.CULL_FACE), D !== v && (D === 1 ? s.cullFace(s.BACK) : D === 2 ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : fe(s.CULL_FACE), v = D;
  }
  function Ae(D) {
    D !== E && ($ && s.lineWidth(D), E = D);
  }
  function ke(D, de, W) {
    D ? (ge(s.POLYGON_OFFSET_FILL), (k !== de || G !== W) && (s.polygonOffset(de, W), k = de, G = W)) : fe(s.POLYGON_OFFSET_FILL);
  }
  function Re(D) {
    D ? ge(s.SCISSOR_TEST) : fe(s.SCISSOR_TEST);
  }
  function T(D) {
    D === void 0 && (D = s.TEXTURE0 + B - 1), V !== D && (s.activeTexture(D), V = D);
  }
  function M(D, de, W) {
    W === void 0 && (V === null ? W = s.TEXTURE0 + B - 1 : W = V);
    let K = he[W];
    K === void 0 && (K = { type: void 0, texture: void 0 }, he[W] = K), (K.type !== D || K.texture !== de) && (V !== W && (s.activeTexture(W), V = W), s.bindTexture(D, de || Q[D]), K.type = D, K.texture = de);
  }
  function F() {
    const D = he[V];
    D !== void 0 && D.type !== void 0 && (s.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function H() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Y() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function X() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ee() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function re() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function me() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ke() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ee() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ve() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Fe() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ue(D) {
    We.equals(D) === !1 && (s.scissor(D.x, D.y, D.z, D.w), We.copy(D));
  }
  function be(D) {
    Ye.equals(D) === !1 && (s.viewport(D.x, D.y, D.z, D.w), Ye.copy(D));
  }
  function je(D, de) {
    let W = l.get(de);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(de, W));
    let K = W.get(D);
    K === void 0 && (K = s.getUniformBlockIndex(de, D.name), W.set(D, K));
  }
  function Be(D, de) {
    const K = l.get(de).get(D);
    o.get(de) !== K && (s.uniformBlockBinding(de, K, D.__bindingPointIndex), o.set(de, K));
  }
  function it() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), c = {}, V = null, he = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), f = [], m = null, g = !1, _ = null, d = null, p = null, S = null, b = null, x = null, C = null, A = new ae(0, 0, 0), w = 0, I = !1, q = null, v = null, E = null, k = null, G = null, We.set(0, 0, s.canvas.width, s.canvas.height), Ye.set(0, 0, s.canvas.width, s.canvas.height), i.reset(), r.reset(), a.reset();
  }
  return {
    buffers: {
      color: i,
      depth: r,
      stencil: a
    },
    enable: ge,
    disable: fe,
    bindFramebuffer: Ie,
    drawBuffers: Pe,
    useProgram: Z,
    setBlending: R,
    setMaterial: Me,
    setFlipSided: _e,
    setCullFace: Ne,
    setLineWidth: Ae,
    setPolygonOffset: ke,
    setScissorTest: Re,
    activeTexture: T,
    bindTexture: M,
    unbindTexture: F,
    compressedTexImage2D: H,
    compressedTexImage3D: Y,
    texImage2D: ve,
    texImage3D: Fe,
    updateUBOMapping: je,
    uniformBlockBinding: Be,
    texStorage2D: Ke,
    texStorage3D: ee,
    texSubImage2D: X,
    texSubImage3D: Ee,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: me,
    scissor: Ue,
    viewport: be,
    reset: it
  };
}
function Na(s, e, t, n) {
  const i = Rd(n);
  switch (t) {
    case 1021:
      return s * e;
    case 1024:
      return s * e;
    case 1025:
      return s * e * 2;
    case 1028:
      return s * e / i.components * i.byteLength;
    case 1029:
      return s * e / i.components * i.byteLength;
    case 1030:
      return s * e * 2 / i.components * i.byteLength;
    case 1031:
      return s * e * 2 / i.components * i.byteLength;
    case 1022:
      return s * e * 3 / i.components * i.byteLength;
    case 1023:
      return s * e * 4 / i.components * i.byteLength;
    case 1033:
      return s * e * 4 / i.components * i.byteLength;
    case 33776:
    case 33777:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(s, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(s, 8) * Math.max(e, 8) / 2;
    case 36196:
    case 37492:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Rd(s) {
  switch (s) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
function Cd(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ze(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(T, M) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, M)
    ) : Pi("canvas");
  }
  function _(T, M, F) {
    let H = 1;
    const Y = Re(T);
    if ((Y.width > F || Y.height > F) && (H = F / Math.max(Y.width, Y.height)), H < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const X = Math.floor(H * Y.width), Ee = Math.floor(H * Y.height);
        u === void 0 && (u = g(X, Ee));
        const re = M ? g(X, Ee) : u;
        return re.width = X, re.height = Ee, re.getContext("2d").drawImage(T, 0, 0, X, Ee), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + X + "x" + Ee + ")."), re;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), T;
    return T;
  }
  function d(T) {
    return T.generateMipmaps && T.minFilter !== 1003 && T.minFilter !== 1006;
  }
  function p(T) {
    s.generateMipmap(T);
  }
  function S(T, M, F, H, Y = !1) {
    if (T !== null) {
      if (s[T] !== void 0) return s[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let X = M;
    if (M === s.RED && (F === s.FLOAT && (X = s.R32F), F === s.HALF_FLOAT && (X = s.R16F), F === s.UNSIGNED_BYTE && (X = s.R8)), M === s.RED_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.R8UI), F === s.UNSIGNED_SHORT && (X = s.R16UI), F === s.UNSIGNED_INT && (X = s.R32UI), F === s.BYTE && (X = s.R8I), F === s.SHORT && (X = s.R16I), F === s.INT && (X = s.R32I)), M === s.RG && (F === s.FLOAT && (X = s.RG32F), F === s.HALF_FLOAT && (X = s.RG16F), F === s.UNSIGNED_BYTE && (X = s.RG8)), M === s.RG_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RG8UI), F === s.UNSIGNED_SHORT && (X = s.RG16UI), F === s.UNSIGNED_INT && (X = s.RG32UI), F === s.BYTE && (X = s.RG8I), F === s.SHORT && (X = s.RG16I), F === s.INT && (X = s.RG32I)), M === s.RGB_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RGB8UI), F === s.UNSIGNED_SHORT && (X = s.RGB16UI), F === s.UNSIGNED_INT && (X = s.RGB32UI), F === s.BYTE && (X = s.RGB8I), F === s.SHORT && (X = s.RGB16I), F === s.INT && (X = s.RGB32I)), M === s.RGBA_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RGBA8UI), F === s.UNSIGNED_SHORT && (X = s.RGBA16UI), F === s.UNSIGNED_INT && (X = s.RGBA32UI), F === s.BYTE && (X = s.RGBA8I), F === s.SHORT && (X = s.RGBA16I), F === s.INT && (X = s.RGBA32I)), M === s.RGB && F === s.UNSIGNED_INT_5_9_9_9_REV && (X = s.RGB9_E5), M === s.RGBA) {
      const Ee = Y ? gs : qe.getTransfer(H);
      F === s.FLOAT && (X = s.RGBA32F), F === s.HALF_FLOAT && (X = s.RGBA16F), F === s.UNSIGNED_BYTE && (X = Ee === st ? s.SRGB8_ALPHA8 : s.RGBA8), F === s.UNSIGNED_SHORT_4_4_4_4 && (X = s.RGBA4), F === s.UNSIGNED_SHORT_5_5_5_1 && (X = s.RGB5_A1);
    }
    return (X === s.R16F || X === s.R32F || X === s.RG16F || X === s.RG32F || X === s.RGBA16F || X === s.RGBA32F) && e.get("EXT_color_buffer_float"), X;
  }
  function b(T, M) {
    let F;
    return T ? M === null || M === 1014 || M === 1020 ? F = s.DEPTH24_STENCIL8 : M === 1015 ? F = s.DEPTH32F_STENCIL8 : M === 1012 && (F = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === 1014 || M === 1020 ? F = s.DEPTH_COMPONENT24 : M === 1015 ? F = s.DEPTH_COMPONENT32F : M === 1012 && (F = s.DEPTH_COMPONENT16), F;
  }
  function x(T, M) {
    return d(T) === !0 || T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006 ? Math.log2(Math.max(M.width, M.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? M.mipmaps.length : 1;
  }
  function C(T) {
    const M = T.target;
    M.removeEventListener("dispose", C), w(M), M.isVideoTexture && h.delete(M);
  }
  function A(T) {
    const M = T.target;
    M.removeEventListener("dispose", A), q(M);
  }
  function w(T) {
    const M = n.get(T);
    if (M.__webglInit === void 0) return;
    const F = T.source, H = f.get(F);
    if (H) {
      const Y = H[M.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && I(T), Object.keys(H).length === 0 && f.delete(F);
    }
    n.remove(T);
  }
  function I(T) {
    const M = n.get(T);
    s.deleteTexture(M.__webglTexture);
    const F = T.source, H = f.get(F);
    delete H[M.__cacheKey], a.memory.textures--;
  }
  function q(T) {
    const M = n.get(T);
    if (T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let H = 0; H < 6; H++) {
        if (Array.isArray(M.__webglFramebuffer[H]))
          for (let Y = 0; Y < M.__webglFramebuffer[H].length; Y++) s.deleteFramebuffer(M.__webglFramebuffer[H][Y]);
        else
          s.deleteFramebuffer(M.__webglFramebuffer[H]);
        M.__webglDepthbuffer && s.deleteRenderbuffer(M.__webglDepthbuffer[H]);
      }
    else {
      if (Array.isArray(M.__webglFramebuffer))
        for (let H = 0; H < M.__webglFramebuffer.length; H++) s.deleteFramebuffer(M.__webglFramebuffer[H]);
      else
        s.deleteFramebuffer(M.__webglFramebuffer);
      if (M.__webglDepthbuffer && s.deleteRenderbuffer(M.__webglDepthbuffer), M.__webglMultisampledFramebuffer && s.deleteFramebuffer(M.__webglMultisampledFramebuffer), M.__webglColorRenderbuffer)
        for (let H = 0; H < M.__webglColorRenderbuffer.length; H++)
          M.__webglColorRenderbuffer[H] && s.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);
      M.__webglDepthRenderbuffer && s.deleteRenderbuffer(M.__webglDepthRenderbuffer);
    }
    const F = T.textures;
    for (let H = 0, Y = F.length; H < Y; H++) {
      const X = n.get(F[H]);
      X.__webglTexture && (s.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(F[H]);
    }
    n.remove(T);
  }
  let v = 0;
  function E() {
    v = 0;
  }
  function k() {
    const T = v;
    return T >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + i.maxTextures), v += 1, T;
  }
  function G(T) {
    const M = [];
    return M.push(T.wrapS), M.push(T.wrapT), M.push(T.wrapR || 0), M.push(T.magFilter), M.push(T.minFilter), M.push(T.anisotropy), M.push(T.internalFormat), M.push(T.format), M.push(T.type), M.push(T.generateMipmaps), M.push(T.premultiplyAlpha), M.push(T.flipY), M.push(T.unpackAlignment), M.push(T.colorSpace), M.join();
  }
  function B(T, M) {
    const F = n.get(T);
    if (T.isVideoTexture && Ae(T), T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
      const H = T.image;
      if (H === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (H.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ye(F, T, M);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, F.__webglTexture, s.TEXTURE0 + M);
  }
  function $(T, M) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Ye(F, T, M);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, F.__webglTexture, s.TEXTURE0 + M);
  }
  function z(T, M) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Ye(F, T, M);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, F.__webglTexture, s.TEXTURE0 + M);
  }
  function J(T, M) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      j(F, T, M);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, F.__webglTexture, s.TEXTURE0 + M);
  }
  const V = {
    1e3: s.REPEAT,
    1001: s.CLAMP_TO_EDGE,
    1002: s.MIRRORED_REPEAT
  }, he = {
    1003: s.NEAREST,
    1004: s.NEAREST_MIPMAP_NEAREST,
    1005: s.NEAREST_MIPMAP_LINEAR,
    1006: s.LINEAR,
    1007: s.LINEAR_MIPMAP_NEAREST,
    1008: s.LINEAR_MIPMAP_LINEAR
  }, ue = {
    512: s.NEVER,
    519: s.ALWAYS,
    513: s.LESS,
    515: s.LEQUAL,
    514: s.EQUAL,
    518: s.GEQUAL,
    516: s.GREATER,
    517: s.NOTEQUAL
  };
  function oe(T, M) {
    if (M.type === 1015 && e.has("OES_texture_float_linear") === !1 && (M.magFilter === 1006 || M.magFilter === 1007 || M.magFilter === 1005 || M.magFilter === 1008 || M.minFilter === 1006 || M.minFilter === 1007 || M.minFilter === 1005 || M.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(T, s.TEXTURE_WRAP_S, V[M.wrapS]), s.texParameteri(T, s.TEXTURE_WRAP_T, V[M.wrapT]), (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) && s.texParameteri(T, s.TEXTURE_WRAP_R, V[M.wrapR]), s.texParameteri(T, s.TEXTURE_MAG_FILTER, he[M.magFilter]), s.texParameteri(T, s.TEXTURE_MIN_FILTER, he[M.minFilter]), M.compareFunction && (s.texParameteri(T, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(T, s.TEXTURE_COMPARE_FUNC, ue[M.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (M.magFilter === 1003 || M.minFilter !== 1005 && M.minFilter !== 1008 || M.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(T, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy;
      }
    }
  }
  function We(T, M) {
    let F = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, M.addEventListener("dispose", C));
    const H = M.source;
    let Y = f.get(H);
    Y === void 0 && (Y = {}, f.set(H, Y));
    const X = G(M);
    if (X !== T.__cacheKey) {
      Y[X] === void 0 && (Y[X] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), Y[X].usedTimes++;
      const Ee = Y[T.__cacheKey];
      Ee !== void 0 && (Y[T.__cacheKey].usedTimes--, Ee.usedTimes === 0 && I(M)), T.__cacheKey = X, T.__webglTexture = Y[X].texture;
    }
    return F;
  }
  function Ye(T, M, F) {
    let H = s.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (H = s.TEXTURE_2D_ARRAY), M.isData3DTexture && (H = s.TEXTURE_3D);
    const Y = We(T, M), X = M.source;
    t.bindTexture(H, T.__webglTexture, s.TEXTURE0 + F);
    const Ee = n.get(X);
    if (X.version !== Ee.__version || Y === !0) {
      t.activeTexture(s.TEXTURE0 + F);
      const re = qe.getPrimaries(qe.workingColorSpace), me = M.colorSpace === un ? null : qe.getPrimaries(M.colorSpace), Ke = M.colorSpace === un || re === me ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, M.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, M.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ke);
      let ee = _(M.image, !1, i.maxTextureSize);
      ee = ke(M, ee);
      const ve = r.convert(M.format, M.colorSpace), Fe = r.convert(M.type);
      let Ue = S(M.internalFormat, ve, Fe, M.colorSpace, M.isVideoTexture);
      oe(H, M);
      let be;
      const je = M.mipmaps, Be = M.isVideoTexture !== !0, it = Ee.__version === void 0 || Y === !0, D = X.dataReady, de = x(M, ee);
      if (M.isDepthTexture)
        Ue = b(M.format === 1027, M.type), it && (Be ? t.texStorage2D(s.TEXTURE_2D, 1, Ue, ee.width, ee.height) : t.texImage2D(s.TEXTURE_2D, 0, Ue, ee.width, ee.height, 0, ve, Fe, null));
      else if (M.isDataTexture)
        if (je.length > 0) {
          Be && it && t.texStorage2D(s.TEXTURE_2D, de, Ue, je[0].width, je[0].height);
          for (let W = 0, K = je.length; W < K; W++)
            be = je[W], Be ? D && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, be.width, be.height, ve, Fe, be.data) : t.texImage2D(s.TEXTURE_2D, W, Ue, be.width, be.height, 0, ve, Fe, be.data);
          M.generateMipmaps = !1;
        } else
          Be ? (it && t.texStorage2D(s.TEXTURE_2D, de, Ue, ee.width, ee.height), D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ee.width, ee.height, ve, Fe, ee.data)) : t.texImage2D(s.TEXTURE_2D, 0, Ue, ee.width, ee.height, 0, ve, Fe, ee.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Be && it && t.texStorage3D(s.TEXTURE_2D_ARRAY, de, Ue, je[0].width, je[0].height, ee.depth);
          for (let W = 0, K = je.length; W < K; W++)
            if (be = je[W], M.format !== 1023)
              if (ve !== null)
                if (Be) {
                  if (D)
                    if (M.layerUpdates.size > 0) {
                      const le = Na(be.width, be.height, M.format, M.type);
                      for (const pe of M.layerUpdates) {
                        const Xe = be.data.subarray(
                          pe * le / be.data.BYTES_PER_ELEMENT,
                          (pe + 1) * le / be.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, pe, be.width, be.height, 1, ve, Xe, 0, 0);
                      }
                      M.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, be.width, be.height, ee.depth, ve, be.data, 0, 0);
                } else
                  t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, W, Ue, be.width, be.height, ee.depth, 0, be.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Be ? D && t.texSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, be.width, be.height, ee.depth, ve, Fe, be.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, W, Ue, be.width, be.height, ee.depth, 0, ve, Fe, be.data);
        } else {
          Be && it && t.texStorage2D(s.TEXTURE_2D, de, Ue, je[0].width, je[0].height);
          for (let W = 0, K = je.length; W < K; W++)
            be = je[W], M.format !== 1023 ? ve !== null ? Be ? D && t.compressedTexSubImage2D(s.TEXTURE_2D, W, 0, 0, be.width, be.height, ve, be.data) : t.compressedTexImage2D(s.TEXTURE_2D, W, Ue, be.width, be.height, 0, be.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? D && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, be.width, be.height, ve, Fe, be.data) : t.texImage2D(s.TEXTURE_2D, W, Ue, be.width, be.height, 0, ve, Fe, be.data);
        }
      else if (M.isDataArrayTexture)
        if (Be) {
          if (it && t.texStorage3D(s.TEXTURE_2D_ARRAY, de, Ue, ee.width, ee.height, ee.depth), D)
            if (M.layerUpdates.size > 0) {
              const W = Na(ee.width, ee.height, M.format, M.type);
              for (const K of M.layerUpdates) {
                const le = ee.data.subarray(
                  K * W / ee.data.BYTES_PER_ELEMENT,
                  (K + 1) * W / ee.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, K, ee.width, ee.height, 1, ve, Fe, le);
              }
              M.clearLayerUpdates();
            } else
              t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, ve, Fe, ee.data);
        } else
          t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Ue, ee.width, ee.height, ee.depth, 0, ve, Fe, ee.data);
      else if (M.isData3DTexture)
        Be ? (it && t.texStorage3D(s.TEXTURE_3D, de, Ue, ee.width, ee.height, ee.depth), D && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, ve, Fe, ee.data)) : t.texImage3D(s.TEXTURE_3D, 0, Ue, ee.width, ee.height, ee.depth, 0, ve, Fe, ee.data);
      else if (M.isFramebufferTexture) {
        if (it)
          if (Be)
            t.texStorage2D(s.TEXTURE_2D, de, Ue, ee.width, ee.height);
          else {
            let W = ee.width, K = ee.height;
            for (let le = 0; le < de; le++)
              t.texImage2D(s.TEXTURE_2D, le, Ue, W, K, 0, ve, Fe, null), W >>= 1, K >>= 1;
          }
      } else if (je.length > 0) {
        if (Be && it) {
          const W = Re(je[0]);
          t.texStorage2D(s.TEXTURE_2D, de, Ue, W.width, W.height);
        }
        for (let W = 0, K = je.length; W < K; W++)
          be = je[W], Be ? D && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, ve, Fe, be) : t.texImage2D(s.TEXTURE_2D, W, Ue, ve, Fe, be);
        M.generateMipmaps = !1;
      } else if (Be) {
        if (it) {
          const W = Re(ee);
          t.texStorage2D(s.TEXTURE_2D, de, Ue, W.width, W.height);
        }
        D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ve, Fe, ee);
      } else
        t.texImage2D(s.TEXTURE_2D, 0, Ue, ve, Fe, ee);
      d(M) && p(H), Ee.__version = X.version, M.onUpdate && M.onUpdate(M);
    }
    T.__version = M.version;
  }
  function j(T, M, F) {
    if (M.image.length !== 6) return;
    const H = We(T, M), Y = M.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, T.__webglTexture, s.TEXTURE0 + F);
    const X = n.get(Y);
    if (Y.version !== X.__version || H === !0) {
      t.activeTexture(s.TEXTURE0 + F);
      const Ee = qe.getPrimaries(qe.workingColorSpace), re = M.colorSpace === un ? null : qe.getPrimaries(M.colorSpace), me = M.colorSpace === un || Ee === re ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, M.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, M.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, me);
      const Ke = M.isCompressedTexture || M.image[0].isCompressedTexture, ee = M.image[0] && M.image[0].isDataTexture, ve = [];
      for (let K = 0; K < 6; K++)
        !Ke && !ee ? ve[K] = _(M.image[K], !0, i.maxCubemapSize) : ve[K] = ee ? M.image[K].image : M.image[K], ve[K] = ke(M, ve[K]);
      const Fe = ve[0], Ue = r.convert(M.format, M.colorSpace), be = r.convert(M.type), je = S(M.internalFormat, Ue, be, M.colorSpace), Be = M.isVideoTexture !== !0, it = X.__version === void 0 || H === !0, D = Y.dataReady;
      let de = x(M, Fe);
      oe(s.TEXTURE_CUBE_MAP, M);
      let W;
      if (Ke) {
        Be && it && t.texStorage2D(s.TEXTURE_CUBE_MAP, de, je, Fe.width, Fe.height);
        for (let K = 0; K < 6; K++) {
          W = ve[K].mipmaps;
          for (let le = 0; le < W.length; le++) {
            const pe = W[le];
            M.format !== 1023 ? Ue !== null ? Be ? D && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, pe.width, pe.height, Ue, pe.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, je, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, pe.width, pe.height, Ue, be, pe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, je, pe.width, pe.height, 0, Ue, be, pe.data);
          }
        }
      } else {
        if (W = M.mipmaps, Be && it) {
          W.length > 0 && de++;
          const K = Re(ve[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, de, je, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (ee) {
            Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, ve[K].width, ve[K].height, Ue, be, ve[K].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, je, ve[K].width, ve[K].height, 0, Ue, be, ve[K].data);
            for (let le = 0; le < W.length; le++) {
              const Xe = W[le].image[K].image;
              Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, Xe.width, Xe.height, Ue, be, Xe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, je, Xe.width, Xe.height, 0, Ue, be, Xe.data);
            }
          } else {
            Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Ue, be, ve[K]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, je, Ue, be, ve[K]);
            for (let le = 0; le < W.length; le++) {
              const pe = W[le];
              Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, Ue, be, pe.image[K]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, je, Ue, be, pe.image[K]);
            }
          }
      }
      d(M) && p(s.TEXTURE_CUBE_MAP), X.__version = Y.version, M.onUpdate && M.onUpdate(M);
    }
    T.__version = M.version;
  }
  function Q(T, M, F, H, Y, X) {
    const Ee = r.convert(F.format, F.colorSpace), re = r.convert(F.type), me = S(F.internalFormat, Ee, re, F.colorSpace);
    if (!n.get(M).__hasExternalTextures) {
      const ee = Math.max(1, M.width >> X), ve = Math.max(1, M.height >> X);
      Y === s.TEXTURE_3D || Y === s.TEXTURE_2D_ARRAY ? t.texImage3D(Y, X, me, ee, ve, M.depth, 0, Ee, re, null) : t.texImage2D(Y, X, me, ee, ve, 0, Ee, re, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, T), Ne(M) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, H, Y, n.get(F).__webglTexture, 0, _e(M)) : (Y === s.TEXTURE_2D || Y >= s.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, H, Y, n.get(F).__webglTexture, X), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ge(T, M, F) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, T), M.depthBuffer) {
      const H = M.depthTexture, Y = H && H.isDepthTexture ? H.type : null, X = b(M.stencilBuffer, Y), Ee = M.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, re = _e(M);
      Ne(M) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, re, X, M.width, M.height) : F ? s.renderbufferStorageMultisample(s.RENDERBUFFER, re, X, M.width, M.height) : s.renderbufferStorage(s.RENDERBUFFER, X, M.width, M.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, Ee, s.RENDERBUFFER, T);
    } else {
      const H = M.textures;
      for (let Y = 0; Y < H.length; Y++) {
        const X = H[Y], Ee = r.convert(X.format, X.colorSpace), re = r.convert(X.type), me = S(X.internalFormat, Ee, re, X.colorSpace), Ke = _e(M);
        F && Ne(M) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Ke, me, M.width, M.height) : Ne(M) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Ke, me, M.width, M.height) : s.renderbufferStorage(s.RENDERBUFFER, me, M.width, M.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function fe(T, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, T), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), B(M.depthTexture, 0);
    const H = n.get(M.depthTexture).__webglTexture, Y = _e(M);
    if (M.depthTexture.format === 1026)
      Ne(M) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, H, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, H, 0);
    else if (M.depthTexture.format === 1027)
      Ne(M) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, H, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, H, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ie(T) {
    const M = n.get(T), F = T.isWebGLCubeRenderTarget === !0;
    if (M.__boundDepthTexture !== T.depthTexture) {
      const H = T.depthTexture;
      if (M.__depthDisposeCallback && M.__depthDisposeCallback(), H) {
        const Y = () => {
          delete M.__boundDepthTexture, delete M.__depthDisposeCallback, H.removeEventListener("dispose", Y);
        };
        H.addEventListener("dispose", Y), M.__depthDisposeCallback = Y;
      }
      M.__boundDepthTexture = H;
    }
    if (T.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      fe(M.__webglFramebuffer, T);
    } else if (F) {
      M.__webglDepthbuffer = [];
      for (let H = 0; H < 6; H++)
        if (t.bindFramebuffer(s.FRAMEBUFFER, M.__webglFramebuffer[H]), M.__webglDepthbuffer[H] === void 0)
          M.__webglDepthbuffer[H] = s.createRenderbuffer(), ge(M.__webglDepthbuffer[H], T, !1);
        else {
          const Y = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, X = M.__webglDepthbuffer[H];
          s.bindRenderbuffer(s.RENDERBUFFER, X), s.framebufferRenderbuffer(s.FRAMEBUFFER, Y, s.RENDERBUFFER, X);
        }
    } else if (t.bindFramebuffer(s.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0)
      M.__webglDepthbuffer = s.createRenderbuffer(), ge(M.__webglDepthbuffer, T, !1);
    else {
      const H = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Y = M.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, Y), s.framebufferRenderbuffer(s.FRAMEBUFFER, H, s.RENDERBUFFER, Y);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Pe(T, M, F) {
    const H = n.get(T);
    M !== void 0 && Q(H.__webglFramebuffer, T, T.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), F !== void 0 && Ie(T);
  }
  function Z(T) {
    const M = T.texture, F = n.get(T), H = n.get(M);
    T.addEventListener("dispose", A);
    const Y = T.textures, X = T.isWebGLCubeRenderTarget === !0, Ee = Y.length > 1;
    if (Ee || (H.__webglTexture === void 0 && (H.__webglTexture = s.createTexture()), H.__version = M.version, a.memory.textures++), X) {
      F.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (M.mipmaps && M.mipmaps.length > 0) {
          F.__webglFramebuffer[re] = [];
          for (let me = 0; me < M.mipmaps.length; me++)
            F.__webglFramebuffer[re][me] = s.createFramebuffer();
        } else
          F.__webglFramebuffer[re] = s.createFramebuffer();
    } else {
      if (M.mipmaps && M.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let re = 0; re < M.mipmaps.length; re++)
          F.__webglFramebuffer[re] = s.createFramebuffer();
      } else
        F.__webglFramebuffer = s.createFramebuffer();
      if (Ee)
        for (let re = 0, me = Y.length; re < me; re++) {
          const Ke = n.get(Y[re]);
          Ke.__webglTexture === void 0 && (Ke.__webglTexture = s.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && Ne(T) === !1) {
        F.__webglMultisampledFramebuffer = s.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let re = 0; re < Y.length; re++) {
          const me = Y[re];
          F.__webglColorRenderbuffer[re] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, F.__webglColorRenderbuffer[re]);
          const Ke = r.convert(me.format, me.colorSpace), ee = r.convert(me.type), ve = S(me.internalFormat, Ke, ee, me.colorSpace, T.isXRRenderTarget === !0), Fe = _e(T);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Fe, ve, T.width, T.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + re, s.RENDERBUFFER, F.__webglColorRenderbuffer[re]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = s.createRenderbuffer(), ge(F.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, H.__webglTexture), oe(s.TEXTURE_CUBE_MAP, M);
      for (let re = 0; re < 6; re++)
        if (M.mipmaps && M.mipmaps.length > 0)
          for (let me = 0; me < M.mipmaps.length; me++)
            Q(F.__webglFramebuffer[re][me], T, M, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + re, me);
        else
          Q(F.__webglFramebuffer[re], T, M, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      d(M) && p(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Ee) {
      for (let re = 0, me = Y.length; re < me; re++) {
        const Ke = Y[re], ee = n.get(Ke);
        t.bindTexture(s.TEXTURE_2D, ee.__webglTexture), oe(s.TEXTURE_2D, Ke), Q(F.__webglFramebuffer, T, Ke, s.COLOR_ATTACHMENT0 + re, s.TEXTURE_2D, 0), d(Ke) && p(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = s.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (re = T.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(re, H.__webglTexture), oe(re, M), M.mipmaps && M.mipmaps.length > 0)
        for (let me = 0; me < M.mipmaps.length; me++)
          Q(F.__webglFramebuffer[me], T, M, s.COLOR_ATTACHMENT0, re, me);
      else
        Q(F.__webglFramebuffer, T, M, s.COLOR_ATTACHMENT0, re, 0);
      d(M) && p(re), t.unbindTexture();
    }
    T.depthBuffer && Ie(T);
  }
  function ne(T) {
    const M = T.textures;
    for (let F = 0, H = M.length; F < H; F++) {
      const Y = M[F];
      if (d(Y)) {
        const X = T.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, Ee = n.get(Y).__webglTexture;
        t.bindTexture(X, Ee), p(X), t.unbindTexture();
      }
    }
  }
  const ie = [], R = [];
  function Me(T) {
    if (T.samples > 0) {
      if (Ne(T) === !1) {
        const M = T.textures, F = T.width, H = T.height;
        let Y = s.COLOR_BUFFER_BIT;
        const X = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Ee = n.get(T), re = M.length > 1;
        if (re)
          for (let me = 0; me < M.length; me++)
            t.bindFramebuffer(s.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, Ee.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ee.__webglFramebuffer);
        for (let me = 0; me < M.length; me++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (Y |= s.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (Y |= s.STENCIL_BUFFER_BIT)), re) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, Ee.__webglColorRenderbuffer[me]);
            const Ke = n.get(M[me]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Ke, 0);
          }
          s.blitFramebuffer(0, 0, F, H, 0, 0, F, H, Y, s.NEAREST), l === !0 && (ie.length = 0, R.length = 0, ie.push(s.COLOR_ATTACHMENT0 + me), T.depthBuffer && T.resolveDepthBuffer === !1 && (ie.push(X), R.push(X), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, R)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, ie));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), re)
          for (let me = 0; me < M.length; me++) {
            t.bindFramebuffer(s.FRAMEBUFFER, Ee.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.RENDERBUFFER, Ee.__webglColorRenderbuffer[me]);
            const Ke = n.get(M[me]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, Ee.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.TEXTURE_2D, Ke, 0);
          }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ee.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && l) {
        const M = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [M]);
      }
    }
  }
  function _e(T) {
    return Math.min(i.maxSamples, T.samples);
  }
  function Ne(T) {
    const M = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function Ae(T) {
    const M = a.render.frame;
    h.get(T) !== M && (h.set(T, M), T.update());
  }
  function ke(T, M) {
    const F = T.colorSpace, H = T.format, Y = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || F !== ut && F !== un && (qe.getTransfer(F) === st ? (H !== 1023 || Y !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), M;
  }
  function Re(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = E, this.setTexture2D = B, this.setTexture2DArray = $, this.setTexture3D = z, this.setTextureCube = J, this.rebindTextures = Pe, this.setupRenderTarget = Z, this.updateRenderTargetMipmap = ne, this.updateMultisampleRenderTarget = Me, this.setupDepthRenderbuffer = Ie, this.setupFrameBufferTexture = Q, this.useMultisampledRTT = Ne;
}
function Pd(s, e) {
  function t(n, i = un) {
    let r;
    const a = qe.getTransfer(i);
    if (n === 1009) return s.UNSIGNED_BYTE;
    if (n === 1017) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 1010) return s.BYTE;
    if (n === 1011) return s.SHORT;
    if (n === 1012) return s.UNSIGNED_SHORT;
    if (n === 1013) return s.INT;
    if (n === 1014) return s.UNSIGNED_INT;
    if (n === 1015) return s.FLOAT;
    if (n === 1016) return s.HALF_FLOAT;
    if (n === 1021) return s.ALPHA;
    if (n === 1022) return s.RGB;
    if (n === 1023) return s.RGBA;
    if (n === 1024) return s.LUMINANCE;
    if (n === 1025) return s.LUMINANCE_ALPHA;
    if (n === 1026) return s.DEPTH_COMPONENT;
    if (n === 1027) return s.DEPTH_STENCIL;
    if (n === 1028) return s.RED;
    if (n === 1029) return s.RED_INTEGER;
    if (n === 1030) return s.RG;
    if (n === 1031) return s.RG_INTEGER;
    if (n === 1033) return s.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === st)
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === 33776) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === 33776) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === 35840) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === 36196 || n === 37492) return a === st ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === 37808) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === 36492) return a === st ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === 36492) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
class Dd extends wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class fn extends rt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ld = { type: "move" };
class sr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new fn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new fn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new fn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const d = t.getJointPose(_, n), p = this._getHandJoint(c, _);
          d !== null && (p.matrix.fromArray(d.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = d.radius), p.visible = d !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ld)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new fn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Id = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Fd = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Ud {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new gt(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new It({
        vertexShader: Id,
        fragmentShader: Fd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new vt(new li(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Nd extends Bn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, f = null, m = null, g = null;
    const _ = new Ud(), d = t.getContextAttributes();
    let p = null, S = null;
    const b = [], x = [], C = new ze();
    let A = null;
    const w = new wt();
    w.layers.enable(1), w.viewport = new Ve();
    const I = new wt();
    I.layers.enable(2), I.viewport = new Ve();
    const q = [w, I], v = new Dd();
    v.layers.enable(1), v.layers.enable(2);
    let E = null, k = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(j) {
      let Q = b[j];
      return Q === void 0 && (Q = new sr(), b[j] = Q), Q.getTargetRaySpace();
    }, this.getControllerGrip = function(j) {
      let Q = b[j];
      return Q === void 0 && (Q = new sr(), b[j] = Q), Q.getGripSpace();
    }, this.getHand = function(j) {
      let Q = b[j];
      return Q === void 0 && (Q = new sr(), b[j] = Q), Q.getHandSpace();
    };
    function G(j) {
      const Q = x.indexOf(j.inputSource);
      if (Q === -1)
        return;
      const ge = b[Q];
      ge !== void 0 && (ge.update(j.inputSource, j.frame, c || a), ge.dispatchEvent({ type: j.type, data: j.inputSource }));
    }
    function B() {
      i.removeEventListener("select", G), i.removeEventListener("selectstart", G), i.removeEventListener("selectend", G), i.removeEventListener("squeeze", G), i.removeEventListener("squeezestart", G), i.removeEventListener("squeezeend", G), i.removeEventListener("end", B), i.removeEventListener("inputsourceschange", $);
      for (let j = 0; j < b.length; j++) {
        const Q = x[j];
        Q !== null && (x[j] = null, b[j].disconnect(Q));
      }
      E = null, k = null, _.reset(), e.setRenderTarget(p), m = null, f = null, u = null, i = null, S = null, Ye.stop(), n.isPresenting = !1, e.setPixelRatio(A), e.setSize(C.width, C.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(j) {
      r = j, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(j) {
      o = j, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(j) {
      c = j;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(j) {
      if (i = j, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", G), i.addEventListener("selectstart", G), i.addEventListener("selectend", G), i.addEventListener("squeeze", G), i.addEventListener("squeezestart", G), i.addEventListener("squeezeend", G), i.addEventListener("end", B), i.addEventListener("inputsourceschange", $), d.xrCompatible !== !0 && await t.makeXRCompatible(), A = e.getPixelRatio(), e.getSize(C), i.renderState.layers === void 0) {
          const Q = {
            antialias: d.antialias,
            alpha: !0,
            depth: d.depth,
            stencil: d.stencil,
            framebufferScaleFactor: r
          };
          m = new XRWebGLLayer(i, t, Q), i.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), S = new dn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: d.stencil
            }
          );
        } else {
          let Q = null, ge = null, fe = null;
          d.depth && (fe = d.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Q = d.stencil ? 1027 : 1026, ge = d.stencil ? 1020 : 1014);
          const Ie = {
            colorFormat: t.RGBA8,
            depthFormat: fe,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, t), f = u.createProjectionLayer(Ie), i.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), S = new dn(
            f.textureWidth,
            f.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Po(f.textureWidth, f.textureHeight, ge, void 0, void 0, void 0, void 0, void 0, void 0, Q),
              stencilBuffer: d.stencil,
              colorSpace: e.outputColorSpace,
              samples: d.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        S.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), Ye.setContext(i), Ye.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function $(j) {
      for (let Q = 0; Q < j.removed.length; Q++) {
        const ge = j.removed[Q], fe = x.indexOf(ge);
        fe >= 0 && (x[fe] = null, b[fe].disconnect(ge));
      }
      for (let Q = 0; Q < j.added.length; Q++) {
        const ge = j.added[Q];
        let fe = x.indexOf(ge);
        if (fe === -1) {
          for (let Pe = 0; Pe < b.length; Pe++)
            if (Pe >= x.length) {
              x.push(ge), fe = Pe;
              break;
            } else if (x[Pe] === null) {
              x[Pe] = ge, fe = Pe;
              break;
            }
          if (fe === -1) break;
        }
        const Ie = b[fe];
        Ie && Ie.connect(ge);
      }
    }
    const z = new P(), J = new P();
    function V(j, Q, ge) {
      z.setFromMatrixPosition(Q.matrixWorld), J.setFromMatrixPosition(ge.matrixWorld);
      const fe = z.distanceTo(J), Ie = Q.projectionMatrix.elements, Pe = ge.projectionMatrix.elements, Z = Ie[14] / (Ie[10] - 1), ne = Ie[14] / (Ie[10] + 1), ie = (Ie[9] + 1) / Ie[5], R = (Ie[9] - 1) / Ie[5], Me = (Ie[8] - 1) / Ie[0], _e = (Pe[8] + 1) / Pe[0], Ne = Z * Me, Ae = Z * _e, ke = fe / (-Me + _e), Re = ke * -Me;
      if (Q.matrixWorld.decompose(j.position, j.quaternion, j.scale), j.translateX(Re), j.translateZ(ke), j.matrixWorld.compose(j.position, j.quaternion, j.scale), j.matrixWorldInverse.copy(j.matrixWorld).invert(), Ie[10] === -1)
        j.projectionMatrix.copy(Q.projectionMatrix), j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);
      else {
        const T = Z + ke, M = ne + ke, F = Ne - Re, H = Ae + (fe - Re), Y = ie * ne / M * T, X = R * ne / M * T;
        j.projectionMatrix.makePerspective(F, H, Y, X, T, M), j.projectionMatrixInverse.copy(j.projectionMatrix).invert();
      }
    }
    function he(j, Q) {
      Q === null ? j.matrixWorld.copy(j.matrix) : j.matrixWorld.multiplyMatrices(Q.matrixWorld, j.matrix), j.matrixWorldInverse.copy(j.matrixWorld).invert();
    }
    this.updateCamera = function(j) {
      if (i === null) return;
      let Q = j.near, ge = j.far;
      _.texture !== null && (_.depthNear > 0 && (Q = _.depthNear), _.depthFar > 0 && (ge = _.depthFar)), v.near = I.near = w.near = Q, v.far = I.far = w.far = ge, (E !== v.near || k !== v.far) && (i.updateRenderState({
        depthNear: v.near,
        depthFar: v.far
      }), E = v.near, k = v.far);
      const fe = j.parent, Ie = v.cameras;
      he(v, fe);
      for (let Pe = 0; Pe < Ie.length; Pe++)
        he(Ie[Pe], fe);
      Ie.length === 2 ? V(v, w, I) : v.projectionMatrix.copy(w.projectionMatrix), ue(j, v, fe);
    };
    function ue(j, Q, ge) {
      ge === null ? j.matrix.copy(Q.matrixWorld) : (j.matrix.copy(ge.matrixWorld), j.matrix.invert(), j.matrix.multiply(Q.matrixWorld)), j.matrix.decompose(j.position, j.quaternion, j.scale), j.updateMatrixWorld(!0), j.projectionMatrix.copy(Q.projectionMatrix), j.projectionMatrixInverse.copy(Q.projectionMatrixInverse), j.isPerspectiveCamera && (j.fov = ii * 2 * Math.atan(1 / j.projectionMatrix.elements[5]), j.zoom = 1);
    }
    this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return l;
    }, this.setFoveation = function(j) {
      l = j, f !== null && (f.fixedFoveation = j), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = j);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(v);
    };
    let oe = null;
    function We(j, Q) {
      if (h = Q.getViewerPose(c || a), g = Q, h !== null) {
        const ge = h.views;
        m !== null && (e.setRenderTargetFramebuffer(S, m.framebuffer), e.setRenderTarget(S));
        let fe = !1;
        ge.length !== v.cameras.length && (v.cameras.length = 0, fe = !0);
        for (let Pe = 0; Pe < ge.length; Pe++) {
          const Z = ge[Pe];
          let ne = null;
          if (m !== null)
            ne = m.getViewport(Z);
          else {
            const R = u.getViewSubImage(f, Z);
            ne = R.viewport, Pe === 0 && (e.setRenderTargetTextures(
              S,
              R.colorTexture,
              f.ignoreDepthValues ? void 0 : R.depthStencilTexture
            ), e.setRenderTarget(S));
          }
          let ie = q[Pe];
          ie === void 0 && (ie = new wt(), ie.layers.enable(Pe), ie.viewport = new Ve(), q[Pe] = ie), ie.matrix.fromArray(Z.transform.matrix), ie.matrix.decompose(ie.position, ie.quaternion, ie.scale), ie.projectionMatrix.fromArray(Z.projectionMatrix), ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(), ie.viewport.set(ne.x, ne.y, ne.width, ne.height), Pe === 0 && (v.matrix.copy(ie.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), fe === !0 && v.cameras.push(ie);
        }
        const Ie = i.enabledFeatures;
        if (Ie && Ie.includes("depth-sensing")) {
          const Pe = u.getDepthInformation(ge[0]);
          Pe && Pe.isValid && Pe.texture && _.init(e, Pe, i.renderState);
        }
      }
      for (let ge = 0; ge < b.length; ge++) {
        const fe = x[ge], Ie = b[ge];
        fe !== null && Ie !== void 0 && Ie.update(fe, Q, c || a);
      }
      oe && oe(j, Q), Q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Q }), g = null;
    }
    const Ye = new Co();
    Ye.setAnimationLoop(We), this.setAnimationLoop = function(j) {
      oe = j;
    }, this.dispose = function() {
    };
  }
}
const Pn = /* @__PURE__ */ new qt(), kd = /* @__PURE__ */ new Ce();
function Bd(s, e) {
  function t(d, p) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), p.value.copy(d.matrix);
  }
  function n(d, p) {
    p.color.getRGB(d.fogColor.value, To(s)), p.isFog ? (d.fogNear.value = p.near, d.fogFar.value = p.far) : p.isFogExp2 && (d.fogDensity.value = p.density);
  }
  function i(d, p, S, b, x) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(d, p) : p.isMeshToonMaterial ? (r(d, p), u(d, p)) : p.isMeshPhongMaterial ? (r(d, p), h(d, p)) : p.isMeshStandardMaterial ? (r(d, p), f(d, p), p.isMeshPhysicalMaterial && m(d, p, x)) : p.isMeshMatcapMaterial ? (r(d, p), g(d, p)) : p.isMeshDepthMaterial ? r(d, p) : p.isMeshDistanceMaterial ? (r(d, p), _(d, p)) : p.isMeshNormalMaterial ? r(d, p) : p.isLineBasicMaterial ? (a(d, p), p.isLineDashedMaterial && o(d, p)) : p.isPointsMaterial ? l(d, p, S, b) : p.isSpriteMaterial ? c(d, p) : p.isShadowMaterial ? (d.color.value.copy(p.color), d.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(d, p) {
    d.opacity.value = p.opacity, p.color && d.diffuse.value.copy(p.color), p.emissive && d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (d.map.value = p.map, t(p.map, d.mapTransform)), p.alphaMap && (d.alphaMap.value = p.alphaMap, t(p.alphaMap, d.alphaMapTransform)), p.bumpMap && (d.bumpMap.value = p.bumpMap, t(p.bumpMap, d.bumpMapTransform), d.bumpScale.value = p.bumpScale, p.side === 1 && (d.bumpScale.value *= -1)), p.normalMap && (d.normalMap.value = p.normalMap, t(p.normalMap, d.normalMapTransform), d.normalScale.value.copy(p.normalScale), p.side === 1 && d.normalScale.value.negate()), p.displacementMap && (d.displacementMap.value = p.displacementMap, t(p.displacementMap, d.displacementMapTransform), d.displacementScale.value = p.displacementScale, d.displacementBias.value = p.displacementBias), p.emissiveMap && (d.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, d.emissiveMapTransform)), p.specularMap && (d.specularMap.value = p.specularMap, t(p.specularMap, d.specularMapTransform)), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    const S = e.get(p), b = S.envMap, x = S.envMapRotation;
    b && (d.envMap.value = b, Pn.copy(x), Pn.x *= -1, Pn.y *= -1, Pn.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (Pn.y *= -1, Pn.z *= -1), d.envMapRotation.value.setFromMatrix4(kd.makeRotationFromEuler(Pn)), d.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, d.reflectivity.value = p.reflectivity, d.ior.value = p.ior, d.refractionRatio.value = p.refractionRatio), p.lightMap && (d.lightMap.value = p.lightMap, d.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, d.lightMapTransform)), p.aoMap && (d.aoMap.value = p.aoMap, d.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, d.aoMapTransform));
  }
  function a(d, p) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, p.map && (d.map.value = p.map, t(p.map, d.mapTransform));
  }
  function o(d, p) {
    d.dashSize.value = p.dashSize, d.totalSize.value = p.dashSize + p.gapSize, d.scale.value = p.scale;
  }
  function l(d, p, S, b) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, d.size.value = p.size * S, d.scale.value = b * 0.5, p.map && (d.map.value = p.map, t(p.map, d.uvTransform)), p.alphaMap && (d.alphaMap.value = p.alphaMap, t(p.alphaMap, d.alphaMapTransform)), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
  }
  function c(d, p) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, d.rotation.value = p.rotation, p.map && (d.map.value = p.map, t(p.map, d.mapTransform)), p.alphaMap && (d.alphaMap.value = p.alphaMap, t(p.alphaMap, d.alphaMapTransform)), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
  }
  function h(d, p) {
    d.specular.value.copy(p.specular), d.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(d, p) {
    p.gradientMap && (d.gradientMap.value = p.gradientMap);
  }
  function f(d, p) {
    d.metalness.value = p.metalness, p.metalnessMap && (d.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, d.metalnessMapTransform)), d.roughness.value = p.roughness, p.roughnessMap && (d.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, d.roughnessMapTransform)), p.envMap && (d.envMapIntensity.value = p.envMapIntensity);
  }
  function m(d, p, S) {
    d.ior.value = p.ior, p.sheen > 0 && (d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), d.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (d.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, d.sheenColorMapTransform)), p.sheenRoughnessMap && (d.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, d.sheenRoughnessMapTransform))), p.clearcoat > 0 && (d.clearcoat.value = p.clearcoat, d.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (d.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, d.clearcoatMapTransform)), p.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (d.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && d.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (d.dispersion.value = p.dispersion), p.iridescence > 0 && (d.iridescence.value = p.iridescence, d.iridescenceIOR.value = p.iridescenceIOR, d.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (d.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, d.iridescenceMapTransform)), p.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), p.transmission > 0 && (d.transmission.value = p.transmission, d.transmissionSamplerMap.value = S.texture, d.transmissionSamplerSize.value.set(S.width, S.height), p.transmissionMap && (d.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, d.transmissionMapTransform)), d.thickness.value = p.thickness, p.thicknessMap && (d.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = p.attenuationDistance, d.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (d.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (d.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = p.specularIntensity, d.specularColor.value.copy(p.specularColor), p.specularColorMap && (d.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, d.specularColorMapTransform)), p.specularIntensityMap && (d.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function g(d, p) {
    p.matcap && (d.matcap.value = p.matcap);
  }
  function _(d, p) {
    const S = e.get(p).light;
    d.referencePosition.value.setFromMatrixPosition(S.matrixWorld), d.nearDistance.value = S.shadow.camera.near, d.farDistance.value = S.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Od(s, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(S, b) {
    const x = b.program;
    n.uniformBlockBinding(S, x);
  }
  function c(S, b) {
    let x = i[S.id];
    x === void 0 && (g(S), x = h(S), i[S.id] = x, S.addEventListener("dispose", d));
    const C = b.program;
    n.updateUBOMapping(S, C);
    const A = e.render.frame;
    r[S.id] !== A && (f(S), r[S.id] = A);
  }
  function h(S) {
    const b = u();
    S.__bindingPointIndex = b;
    const x = s.createBuffer(), C = S.__size, A = S.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, x), s.bufferData(s.UNIFORM_BUFFER, C, A), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, b, x), x;
  }
  function u() {
    for (let S = 0; S < o; S++)
      if (a.indexOf(S) === -1)
        return a.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(S) {
    const b = i[S.id], x = S.uniforms, C = S.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, b);
    for (let A = 0, w = x.length; A < w; A++) {
      const I = Array.isArray(x[A]) ? x[A] : [x[A]];
      for (let q = 0, v = I.length; q < v; q++) {
        const E = I[q];
        if (m(E, A, q, C) === !0) {
          const k = E.__offset, G = Array.isArray(E.value) ? E.value : [E.value];
          let B = 0;
          for (let $ = 0; $ < G.length; $++) {
            const z = G[$], J = _(z);
            typeof z == "number" || typeof z == "boolean" ? (E.__data[0] = z, s.bufferSubData(s.UNIFORM_BUFFER, k + B, E.__data)) : z.isMatrix3 ? (E.__data[0] = z.elements[0], E.__data[1] = z.elements[1], E.__data[2] = z.elements[2], E.__data[3] = 0, E.__data[4] = z.elements[3], E.__data[5] = z.elements[4], E.__data[6] = z.elements[5], E.__data[7] = 0, E.__data[8] = z.elements[6], E.__data[9] = z.elements[7], E.__data[10] = z.elements[8], E.__data[11] = 0) : (z.toArray(E.__data, B), B += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, k, E.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function m(S, b, x, C) {
    const A = S.value, w = b + "_" + x;
    if (C[w] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? C[w] = A : C[w] = A.clone(), !0;
    {
      const I = C[w];
      if (typeof A == "number" || typeof A == "boolean") {
        if (I !== A)
          return C[w] = A, !0;
      } else if (I.equals(A) === !1)
        return I.copy(A), !0;
    }
    return !1;
  }
  function g(S) {
    const b = S.uniforms;
    let x = 0;
    const C = 16;
    for (let w = 0, I = b.length; w < I; w++) {
      const q = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let v = 0, E = q.length; v < E; v++) {
        const k = q[v], G = Array.isArray(k.value) ? k.value : [k.value];
        for (let B = 0, $ = G.length; B < $; B++) {
          const z = G[B], J = _(z), V = x % C, he = V % J.boundary, ue = V + he;
          x += he, ue !== 0 && C - ue < J.storage && (x += C - ue), k.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = x, x += J.storage;
        }
      }
    }
    const A = x % C;
    return A > 0 && (x += C - A), S.__size = x, S.__cache = {}, this;
  }
  function _(S) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" || typeof S == "boolean" ? (b.boundary = 4, b.storage = 4) : S.isVector2 ? (b.boundary = 8, b.storage = 8) : S.isVector3 || S.isColor ? (b.boundary = 16, b.storage = 12) : S.isVector4 ? (b.boundary = 16, b.storage = 16) : S.isMatrix3 ? (b.boundary = 48, b.storage = 48) : S.isMatrix4 ? (b.boundary = 64, b.storage = 64) : S.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S), b;
  }
  function d(S) {
    const b = S.target;
    b.removeEventListener("dispose", d);
    const x = a.indexOf(b.__bindingPointIndex);
    a.splice(x, 1), s.deleteBuffer(i[b.id]), delete i[b.id], delete r[b.id];
  }
  function p() {
    for (const S in i)
      s.deleteBuffer(i[S]);
    a = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
class Gd {
  constructor(e = {}) {
    const {
      canvas: t = Rl(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = a;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, d = null;
    const p = [], S = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = mt, this.toneMapping = 0, this.toneMappingExposure = 1;
    const b = this;
    let x = !1, C = 0, A = 0, w = null, I = -1, q = null;
    const v = new Ve(), E = new Ve();
    let k = null;
    const G = new ae(0);
    let B = 0, $ = t.width, z = t.height, J = 1, V = null, he = null;
    const ue = new Ve(0, 0, $, z), oe = new Ve(0, 0, $, z);
    let We = !1;
    const Ye = new Pr();
    let j = !1, Q = !1;
    const ge = new Ce(), fe = new Ce(), Ie = new P(), Pe = new Ve(), Z = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ne = !1;
    function ie() {
      return w === null ? J : 1;
    }
    let R = n;
    function Me(y, L) {
      return t.getContext(y, L);
    }
    try {
      const y = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Tr}`), t.addEventListener("webglcontextlost", K, !1), t.addEventListener("webglcontextrestored", le, !1), t.addEventListener("webglcontextcreationerror", pe, !1), R === null) {
        const L = "webgl2";
        if (R = Me(L, y), R === null)
          throw Me(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (y) {
      throw console.error("THREE.WebGLRenderer: " + y.message), y;
    }
    let _e, Ne, Ae, ke, Re, T, M, F, H, Y, X, Ee, re, me, Ke, ee, ve, Fe, Ue, be, je, Be, it, D;
    function de() {
      _e = new ju(R), _e.init(), Be = new Pd(R, _e), Ne = new Ou(R, _e, e, Be), Ae = new wd(R), Ne.reverseDepthBuffer && Ae.buffers.depth.setReversed(!0), ke = new Yu(R), Re = new dd(), T = new Cd(R, _e, Ae, Re, Ne, Be, ke), M = new zu(b), F = new Wu(b), H = new tc(R), it = new ku(R, H), Y = new Xu(R, H, ke, it), X = new $u(R, Y, H, ke), Ue = new Ku(R, Ne, T), ee = new Gu(Re), Ee = new fd(b, M, F, _e, Ne, it, ee), re = new Bd(b, Re), me = new md(), Ke = new Sd(_e), Fe = new Nu(b, M, F, Ae, X, f, l), ve = new Ad(b, X, Ne), D = new Od(R, ke, Ne, Ae), be = new Bu(R, _e, ke), je = new qu(R, _e, ke), ke.programs = Ee.programs, b.capabilities = Ne, b.extensions = _e, b.properties = Re, b.renderLists = me, b.shadowMap = ve, b.state = Ae, b.info = ke;
    }
    de();
    const W = new Nd(b, R);
    this.xr = W, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const y = _e.get("WEBGL_lose_context");
      y && y.loseContext();
    }, this.forceContextRestore = function() {
      const y = _e.get("WEBGL_lose_context");
      y && y.restoreContext();
    }, this.getPixelRatio = function() {
      return J;
    }, this.setPixelRatio = function(y) {
      y !== void 0 && (J = y, this.setSize($, z, !1));
    }, this.getSize = function(y) {
      return y.set($, z);
    }, this.setSize = function(y, L, N = !0) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      $ = y, z = L, t.width = Math.floor(y * J), t.height = Math.floor(L * J), N === !0 && (t.style.width = y + "px", t.style.height = L + "px"), this.setViewport(0, 0, y, L);
    }, this.getDrawingBufferSize = function(y) {
      return y.set($ * J, z * J).floor();
    }, this.setDrawingBufferSize = function(y, L, N) {
      $ = y, z = L, J = N, t.width = Math.floor(y * N), t.height = Math.floor(L * N), this.setViewport(0, 0, y, L);
    }, this.getCurrentViewport = function(y) {
      return y.copy(v);
    }, this.getViewport = function(y) {
      return y.copy(ue);
    }, this.setViewport = function(y, L, N, O) {
      y.isVector4 ? ue.set(y.x, y.y, y.z, y.w) : ue.set(y, L, N, O), Ae.viewport(v.copy(ue).multiplyScalar(J).round());
    }, this.getScissor = function(y) {
      return y.copy(oe);
    }, this.setScissor = function(y, L, N, O) {
      y.isVector4 ? oe.set(y.x, y.y, y.z, y.w) : oe.set(y, L, N, O), Ae.scissor(E.copy(oe).multiplyScalar(J).round());
    }, this.getScissorTest = function() {
      return We;
    }, this.setScissorTest = function(y) {
      Ae.setScissorTest(We = y);
    }, this.setOpaqueSort = function(y) {
      V = y;
    }, this.setTransparentSort = function(y) {
      he = y;
    }, this.getClearColor = function(y) {
      return y.copy(Fe.getClearColor());
    }, this.setClearColor = function() {
      Fe.setClearColor.apply(Fe, arguments);
    }, this.getClearAlpha = function() {
      return Fe.getClearAlpha();
    }, this.setClearAlpha = function() {
      Fe.setClearAlpha.apply(Fe, arguments);
    }, this.clear = function(y = !0, L = !0, N = !0) {
      let O = 0;
      if (y) {
        let U = !1;
        if (w !== null) {
          const te = w.texture.format;
          U = te === 1033 || te === 1031 || te === 1029;
        }
        if (U) {
          const te = w.texture.type, ce = te === 1009 || te === 1014 || te === 1012 || te === 1020 || te === 1017 || te === 1018, Se = Fe.getClearColor(), ye = Fe.getClearAlpha(), De = Se.r, Le = Se.g, Te = Se.b;
          ce ? (m[0] = De, m[1] = Le, m[2] = Te, m[3] = ye, R.clearBufferuiv(R.COLOR, 0, m)) : (g[0] = De, g[1] = Le, g[2] = Te, g[3] = ye, R.clearBufferiv(R.COLOR, 0, g));
        } else
          O |= R.COLOR_BUFFER_BIT;
      }
      L && (O |= R.DEPTH_BUFFER_BIT, R.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), N && (O |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(O);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", K, !1), t.removeEventListener("webglcontextrestored", le, !1), t.removeEventListener("webglcontextcreationerror", pe, !1), me.dispose(), Ke.dispose(), Re.dispose(), M.dispose(), F.dispose(), X.dispose(), it.dispose(), D.dispose(), Ee.dispose(), W.dispose(), W.removeEventListener("sessionstart", Gr), W.removeEventListener("sessionend", zr), En.stop();
    };
    function K(y) {
      y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), x = !0;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), x = !1;
      const y = ke.autoReset, L = ve.enabled, N = ve.autoUpdate, O = ve.needsUpdate, U = ve.type;
      de(), ke.autoReset = y, ve.enabled = L, ve.autoUpdate = N, ve.needsUpdate = O, ve.type = U;
    }
    function pe(y) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage);
    }
    function Xe(y) {
      const L = y.target;
      L.removeEventListener("dispose", Xe), ct(L);
    }
    function ct(y) {
      At(y), Re.remove(y);
    }
    function At(y) {
      const L = Re.get(y).programs;
      L !== void 0 && (L.forEach(function(N) {
        Ee.releaseProgram(N);
      }), y.isShaderMaterial && Ee.releaseShaderCache(y));
    }
    this.renderBufferDirect = function(y, L, N, O, U, te) {
      L === null && (L = Z);
      const ce = U.isMesh && U.matrixWorld.determinant() < 0, Se = ol(y, L, N, O, U);
      Ae.setMaterial(O, ce);
      let ye = N.index, De = 1;
      if (O.wireframe === !0) {
        if (ye = Y.getWireframeAttribute(N), ye === void 0) return;
        De = 2;
      }
      const Le = N.drawRange, Te = N.attributes.position;
      let et = Le.start * De, at = (Le.start + Le.count) * De;
      te !== null && (et = Math.max(et, te.start * De), at = Math.min(at, (te.start + te.count) * De)), ye !== null ? (et = Math.max(et, 0), at = Math.min(at, ye.count)) : Te != null && (et = Math.max(et, 0), at = Math.min(at, Te.count));
      const ot = at - et;
      if (ot < 0 || ot === 1 / 0) return;
      it.setup(U, O, Se, N, ye);
      let Rt, Ze = be;
      if (ye !== null && (Rt = H.get(ye), Ze = je, Ze.setIndex(Rt)), U.isMesh)
        O.wireframe === !0 ? (Ae.setLineWidth(O.wireframeLinewidth * ie()), Ze.setMode(R.LINES)) : Ze.setMode(R.TRIANGLES);
      else if (U.isLine) {
        let we = O.linewidth;
        we === void 0 && (we = 1), Ae.setLineWidth(we * ie()), U.isLineSegments ? Ze.setMode(R.LINES) : U.isLineLoop ? Ze.setMode(R.LINE_LOOP) : Ze.setMode(R.LINE_STRIP);
      } else U.isPoints ? Ze.setMode(R.POINTS) : U.isSprite && Ze.setMode(R.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          Ze.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (_e.get("WEBGL_multi_draw"))
          Ze.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const we = U._multiDrawStarts, _t = U._multiDrawCounts, Qe = U._multiDrawCount, Bt = ye ? H.get(ye).bytesPerElement : 1, On = Re.get(O).currentProgram.getUniforms();
          for (let Ct = 0; Ct < Qe; Ct++)
            On.setValue(R, "_gl_DrawID", Ct), Ze.render(we[Ct] / Bt, _t[Ct]);
        }
      else if (U.isInstancedMesh)
        Ze.renderInstances(et, ot, U.count);
      else if (N.isInstancedBufferGeometry) {
        const we = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0, _t = Math.min(N.instanceCount, we);
        Ze.renderInstances(et, ot, _t);
      } else
        Ze.render(et, ot);
    };
    function $e(y, L, N) {
      y.transparent === !0 && y.side === 2 && y.forceSinglePass === !1 ? (y.side = 1, y.needsUpdate = !0, ki(y, L, N), y.side = 0, y.needsUpdate = !0, ki(y, L, N), y.side = 2) : ki(y, L, N);
    }
    this.compile = function(y, L, N = null) {
      N === null && (N = y), d = Ke.get(N), d.init(L), S.push(d), N.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (d.pushLight(U), U.castShadow && d.pushShadow(U));
      }), y !== N && y.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (d.pushLight(U), U.castShadow && d.pushShadow(U));
      }), d.setupLights();
      const O = /* @__PURE__ */ new Set();
      return y.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
          return;
        const te = U.material;
        if (te)
          if (Array.isArray(te))
            for (let ce = 0; ce < te.length; ce++) {
              const Se = te[ce];
              $e(Se, N, U), O.add(Se);
            }
          else
            $e(te, N, U), O.add(te);
      }), S.pop(), d = null, O;
    }, this.compileAsync = function(y, L, N = null) {
      const O = this.compile(y, L, N);
      return new Promise((U) => {
        function te() {
          if (O.forEach(function(ce) {
            Re.get(ce).currentProgram.isReady() && O.delete(ce);
          }), O.size === 0) {
            U(y);
            return;
          }
          setTimeout(te, 10);
        }
        _e.get("KHR_parallel_shader_compile") !== null ? te() : setTimeout(te, 10);
      });
    };
    let Tt = null;
    function tn(y) {
      Tt && Tt(y);
    }
    function Gr() {
      En.stop();
    }
    function zr() {
      En.start();
    }
    const En = new Co();
    En.setAnimationLoop(tn), typeof self < "u" && En.setContext(self), this.setAnimationLoop = function(y) {
      Tt = y, W.setAnimationLoop(y), y === null ? En.stop() : En.start();
    }, W.addEventListener("sessionstart", Gr), W.addEventListener("sessionend", zr), this.render = function(y, L) {
      if (L !== void 0 && L.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (x === !0) return;
      if (y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(L), L = W.getCamera()), y.isScene === !0 && y.onBeforeRender(b, y, L, w), d = Ke.get(y, S.length), d.init(L), S.push(d), fe.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Ye.setFromProjectionMatrix(fe), Q = this.localClippingEnabled, j = ee.init(this.clippingPlanes, Q), _ = me.get(y, p.length), _.init(), p.push(_), W.enabled === !0 && W.isPresenting === !0) {
        const te = b.xr.getDepthSensingMesh();
        te !== null && ws(te, L, -1 / 0, b.sortObjects);
      }
      ws(y, L, 0, b.sortObjects), _.finish(), b.sortObjects === !0 && _.sort(V, he), ne = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, ne && Fe.addToRenderList(_, y), this.info.render.frame++, j === !0 && ee.beginShadows();
      const N = d.state.shadowsArray;
      ve.render(N, y, L), j === !0 && ee.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const O = _.opaque, U = _.transmissive;
      if (d.setupLights(), L.isArrayCamera) {
        const te = L.cameras;
        if (U.length > 0)
          for (let ce = 0, Se = te.length; ce < Se; ce++) {
            const ye = te[ce];
            Vr(O, U, y, ye);
          }
        ne && Fe.render(y);
        for (let ce = 0, Se = te.length; ce < Se; ce++) {
          const ye = te[ce];
          Hr(_, y, ye, ye.viewport);
        }
      } else
        U.length > 0 && Vr(O, U, y, L), ne && Fe.render(y), Hr(_, y, L);
      w !== null && (T.updateMultisampleRenderTarget(w), T.updateRenderTargetMipmap(w)), y.isScene === !0 && y.onAfterRender(b, y, L), it.resetDefaultState(), I = -1, q = null, S.pop(), S.length > 0 ? (d = S[S.length - 1], j === !0 && ee.setGlobalState(b.clippingPlanes, d.state.camera)) : d = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function ws(y, L, N, O) {
      if (y.visible === !1) return;
      if (y.layers.test(L.layers)) {
        if (y.isGroup)
          N = y.renderOrder;
        else if (y.isLOD)
          y.autoUpdate === !0 && y.update(L);
        else if (y.isLight)
          d.pushLight(y), y.castShadow && d.pushShadow(y);
        else if (y.isSprite) {
          if (!y.frustumCulled || Ye.intersectsSprite(y)) {
            O && Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);
            const ce = X.update(y), Se = y.material;
            Se.visible && _.push(y, ce, Se, N, Pe.z, null);
          }
        } else if ((y.isMesh || y.isLine || y.isPoints) && (!y.frustumCulled || Ye.intersectsObject(y))) {
          const ce = X.update(y), Se = y.material;
          if (O && (y.boundingSphere !== void 0 ? (y.boundingSphere === null && y.computeBoundingSphere(), Pe.copy(y.boundingSphere.center)) : (ce.boundingSphere === null && ce.computeBoundingSphere(), Pe.copy(ce.boundingSphere.center)), Pe.applyMatrix4(y.matrixWorld).applyMatrix4(fe)), Array.isArray(Se)) {
            const ye = ce.groups;
            for (let De = 0, Le = ye.length; De < Le; De++) {
              const Te = ye[De], et = Se[Te.materialIndex];
              et && et.visible && _.push(y, ce, et, N, Pe.z, Te);
            }
          } else Se.visible && _.push(y, ce, Se, N, Pe.z, null);
        }
      }
      const te = y.children;
      for (let ce = 0, Se = te.length; ce < Se; ce++)
        ws(te[ce], L, N, O);
    }
    function Hr(y, L, N, O) {
      const U = y.opaque, te = y.transmissive, ce = y.transparent;
      d.setupLightsView(N), j === !0 && ee.setGlobalState(b.clippingPlanes, N), O && Ae.viewport(v.copy(O)), U.length > 0 && Ni(U, L, N), te.length > 0 && Ni(te, L, N), ce.length > 0 && Ni(ce, L, N), Ae.buffers.depth.setTest(!0), Ae.buffers.depth.setMask(!0), Ae.buffers.color.setMask(!0), Ae.setPolygonOffset(!1);
    }
    function Vr(y, L, N, O) {
      if ((N.isScene === !0 ? N.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[O.id] === void 0 && (d.state.transmissionRenderTarget[O.id] = new dn(1, 1, {
        generateMipmaps: !0,
        type: _e.has("EXT_color_buffer_half_float") || _e.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: qe.workingColorSpace
      }));
      const te = d.state.transmissionRenderTarget[O.id], ce = O.viewport || v;
      te.setSize(ce.z, ce.w);
      const Se = b.getRenderTarget();
      b.setRenderTarget(te), b.getClearColor(G), B = b.getClearAlpha(), B < 1 && b.setClearColor(16777215, 0.5), b.clear(), ne && Fe.render(N);
      const ye = b.toneMapping;
      b.toneMapping = 0;
      const De = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), d.setupLightsView(O), j === !0 && ee.setGlobalState(b.clippingPlanes, O), Ni(y, N, O), T.updateMultisampleRenderTarget(te), T.updateRenderTargetMipmap(te), _e.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Le = !1;
        for (let Te = 0, et = L.length; Te < et; Te++) {
          const at = L[Te], ot = at.object, Rt = at.geometry, Ze = at.material, we = at.group;
          if (Ze.side === 2 && ot.layers.test(O.layers)) {
            const _t = Ze.side;
            Ze.side = 1, Ze.needsUpdate = !0, Wr(ot, N, O, Rt, Ze, we), Ze.side = _t, Ze.needsUpdate = !0, Le = !0;
          }
        }
        Le === !0 && (T.updateMultisampleRenderTarget(te), T.updateRenderTargetMipmap(te));
      }
      b.setRenderTarget(Se), b.setClearColor(G, B), De !== void 0 && (O.viewport = De), b.toneMapping = ye;
    }
    function Ni(y, L, N) {
      const O = L.isScene === !0 ? L.overrideMaterial : null;
      for (let U = 0, te = y.length; U < te; U++) {
        const ce = y[U], Se = ce.object, ye = ce.geometry, De = O === null ? ce.material : O, Le = ce.group;
        Se.layers.test(N.layers) && Wr(Se, L, N, ye, De, Le);
      }
    }
    function Wr(y, L, N, O, U, te) {
      y.onBeforeRender(b, L, N, O, U, te), y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), U.onBeforeRender(b, L, N, O, y, te), U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1 ? (U.side = 1, U.needsUpdate = !0, b.renderBufferDirect(N, L, O, U, y, te), U.side = 0, U.needsUpdate = !0, b.renderBufferDirect(N, L, O, U, y, te), U.side = 2) : b.renderBufferDirect(N, L, O, U, y, te), y.onAfterRender(b, L, N, O, U, te);
    }
    function ki(y, L, N) {
      L.isScene !== !0 && (L = Z);
      const O = Re.get(y), U = d.state.lights, te = d.state.shadowsArray, ce = U.state.version, Se = Ee.getParameters(y, U.state, te, L, N), ye = Ee.getProgramCacheKey(Se);
      let De = O.programs;
      O.environment = y.isMeshStandardMaterial ? L.environment : null, O.fog = L.fog, O.envMap = (y.isMeshStandardMaterial ? F : M).get(y.envMap || O.environment), O.envMapRotation = O.environment !== null && y.envMap === null ? L.environmentRotation : y.envMapRotation, De === void 0 && (y.addEventListener("dispose", Xe), De = /* @__PURE__ */ new Map(), O.programs = De);
      let Le = De.get(ye);
      if (Le !== void 0) {
        if (O.currentProgram === Le && O.lightsStateVersion === ce)
          return Xr(y, Se), Le;
      } else
        Se.uniforms = Ee.getUniforms(y), y.onBeforeCompile(Se, b), Le = Ee.acquireProgram(Se, ye), De.set(ye, Le), O.uniforms = Se.uniforms;
      const Te = O.uniforms;
      return (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Te.clippingPlanes = ee.uniform), Xr(y, Se), O.needsLights = cl(y), O.lightsStateVersion = ce, O.needsLights && (Te.ambientLightColor.value = U.state.ambient, Te.lightProbe.value = U.state.probe, Te.directionalLights.value = U.state.directional, Te.directionalLightShadows.value = U.state.directionalShadow, Te.spotLights.value = U.state.spot, Te.spotLightShadows.value = U.state.spotShadow, Te.rectAreaLights.value = U.state.rectArea, Te.ltc_1.value = U.state.rectAreaLTC1, Te.ltc_2.value = U.state.rectAreaLTC2, Te.pointLights.value = U.state.point, Te.pointLightShadows.value = U.state.pointShadow, Te.hemisphereLights.value = U.state.hemi, Te.directionalShadowMap.value = U.state.directionalShadowMap, Te.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Te.spotShadowMap.value = U.state.spotShadowMap, Te.spotLightMatrix.value = U.state.spotLightMatrix, Te.spotLightMap.value = U.state.spotLightMap, Te.pointShadowMap.value = U.state.pointShadowMap, Te.pointShadowMatrix.value = U.state.pointShadowMatrix), O.currentProgram = Le, O.uniformsList = null, Le;
    }
    function jr(y) {
      if (y.uniformsList === null) {
        const L = y.currentProgram.getUniforms();
        y.uniformsList = ms.seqWithValue(L.seq, y.uniforms);
      }
      return y.uniformsList;
    }
    function Xr(y, L) {
      const N = Re.get(y);
      N.outputColorSpace = L.outputColorSpace, N.batching = L.batching, N.batchingColor = L.batchingColor, N.instancing = L.instancing, N.instancingColor = L.instancingColor, N.instancingMorph = L.instancingMorph, N.skinning = L.skinning, N.morphTargets = L.morphTargets, N.morphNormals = L.morphNormals, N.morphColors = L.morphColors, N.morphTargetsCount = L.morphTargetsCount, N.numClippingPlanes = L.numClippingPlanes, N.numIntersection = L.numClipIntersection, N.vertexAlphas = L.vertexAlphas, N.vertexTangents = L.vertexTangents, N.toneMapping = L.toneMapping;
    }
    function ol(y, L, N, O, U) {
      L.isScene !== !0 && (L = Z), T.resetTextureUnits();
      const te = L.fog, ce = O.isMeshStandardMaterial ? L.environment : null, Se = w === null ? b.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : ut, ye = (O.isMeshStandardMaterial ? F : M).get(O.envMap || ce), De = O.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4, Le = !!N.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), Te = !!N.morphAttributes.position, et = !!N.morphAttributes.normal, at = !!N.morphAttributes.color;
      let ot = 0;
      O.toneMapped && (w === null || w.isXRRenderTarget === !0) && (ot = b.toneMapping);
      const Rt = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, Ze = Rt !== void 0 ? Rt.length : 0, we = Re.get(O), _t = d.state.lights;
      if (j === !0 && (Q === !0 || y !== q)) {
        const Ft = y === q && O.id === I;
        ee.setState(O, y, Ft);
      }
      let Qe = !1;
      O.version === we.__version ? (we.needsLights && we.lightsStateVersion !== _t.state.version || we.outputColorSpace !== Se || U.isBatchedMesh && we.batching === !1 || !U.isBatchedMesh && we.batching === !0 || U.isBatchedMesh && we.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && we.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && we.instancing === !1 || !U.isInstancedMesh && we.instancing === !0 || U.isSkinnedMesh && we.skinning === !1 || !U.isSkinnedMesh && we.skinning === !0 || U.isInstancedMesh && we.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && we.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && we.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && we.instancingMorph === !1 && U.morphTexture !== null || we.envMap !== ye || O.fog === !0 && we.fog !== te || we.numClippingPlanes !== void 0 && (we.numClippingPlanes !== ee.numPlanes || we.numIntersection !== ee.numIntersection) || we.vertexAlphas !== De || we.vertexTangents !== Le || we.morphTargets !== Te || we.morphNormals !== et || we.morphColors !== at || we.toneMapping !== ot || we.morphTargetsCount !== Ze) && (Qe = !0) : (Qe = !0, we.__version = O.version);
      let Bt = we.currentProgram;
      Qe === !0 && (Bt = ki(O, L, U));
      let On = !1, Ct = !1, Rs = !1;
      const lt = Bt.getUniforms(), pn = we.uniforms;
      if (Ae.useProgram(Bt.program) && (On = !0, Ct = !0, Rs = !0), O.id !== I && (I = O.id, Ct = !0), On || q !== y) {
        Ne.reverseDepthBuffer ? (ge.copy(y.projectionMatrix), Pl(ge), Dl(ge), lt.setValue(R, "projectionMatrix", ge)) : lt.setValue(R, "projectionMatrix", y.projectionMatrix), lt.setValue(R, "viewMatrix", y.matrixWorldInverse);
        const Ft = lt.map.cameraPosition;
        Ft !== void 0 && Ft.setValue(R, Ie.setFromMatrixPosition(y.matrixWorld)), Ne.logarithmicDepthBuffer && lt.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(y.far + 1) / Math.LN2)
        ), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && lt.setValue(R, "isOrthographic", y.isOrthographicCamera === !0), q !== y && (q = y, Ct = !0, Rs = !0);
      }
      if (U.isSkinnedMesh) {
        lt.setOptional(R, U, "bindMatrix"), lt.setOptional(R, U, "bindMatrixInverse");
        const Ft = U.skeleton;
        Ft && (Ft.boneTexture === null && Ft.computeBoneTexture(), lt.setValue(R, "boneTexture", Ft.boneTexture, T));
      }
      U.isBatchedMesh && (lt.setOptional(R, U, "batchingTexture"), lt.setValue(R, "batchingTexture", U._matricesTexture, T), lt.setOptional(R, U, "batchingIdTexture"), lt.setValue(R, "batchingIdTexture", U._indirectTexture, T), lt.setOptional(R, U, "batchingColorTexture"), U._colorsTexture !== null && lt.setValue(R, "batchingColorTexture", U._colorsTexture, T));
      const Cs = N.morphAttributes;
      if ((Cs.position !== void 0 || Cs.normal !== void 0 || Cs.color !== void 0) && Ue.update(U, N, Bt), (Ct || we.receiveShadow !== U.receiveShadow) && (we.receiveShadow = U.receiveShadow, lt.setValue(R, "receiveShadow", U.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (pn.envMap.value = ye, pn.flipEnvMap.value = ye.isCubeTexture && ye.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && L.environment !== null && (pn.envMapIntensity.value = L.environmentIntensity), Ct && (lt.setValue(R, "toneMappingExposure", b.toneMappingExposure), we.needsLights && ll(pn, Rs), te && O.fog === !0 && re.refreshFogUniforms(pn, te), re.refreshMaterialUniforms(pn, O, J, z, d.state.transmissionRenderTarget[y.id]), ms.upload(R, jr(we), pn, T)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (ms.upload(R, jr(we), pn, T), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && lt.setValue(R, "center", U.center), lt.setValue(R, "modelViewMatrix", U.modelViewMatrix), lt.setValue(R, "normalMatrix", U.normalMatrix), lt.setValue(R, "modelMatrix", U.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const Ft = O.uniformsGroups;
        for (let Ps = 0, hl = Ft.length; Ps < hl; Ps++) {
          const qr = Ft[Ps];
          D.update(qr, Bt), D.bind(qr, Bt);
        }
      }
      return Bt;
    }
    function ll(y, L) {
      y.ambientLightColor.needsUpdate = L, y.lightProbe.needsUpdate = L, y.directionalLights.needsUpdate = L, y.directionalLightShadows.needsUpdate = L, y.pointLights.needsUpdate = L, y.pointLightShadows.needsUpdate = L, y.spotLights.needsUpdate = L, y.spotLightShadows.needsUpdate = L, y.rectAreaLights.needsUpdate = L, y.hemisphereLights.needsUpdate = L;
    }
    function cl(y) {
      return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(y, L, N) {
      Re.get(y.texture).__webglTexture = L, Re.get(y.depthTexture).__webglTexture = N;
      const O = Re.get(y);
      O.__hasExternalTextures = !0, O.__autoAllocateDepthBuffer = N === void 0, O.__autoAllocateDepthBuffer || _e.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(y, L) {
      const N = Re.get(y);
      N.__webglFramebuffer = L, N.__useDefaultFramebuffer = L === void 0;
    }, this.setRenderTarget = function(y, L = 0, N = 0) {
      w = y, C = L, A = N;
      let O = !0, U = null, te = !1, ce = !1;
      if (y) {
        const ye = Re.get(y);
        if (ye.__useDefaultFramebuffer !== void 0)
          Ae.bindFramebuffer(R.FRAMEBUFFER, null), O = !1;
        else if (ye.__webglFramebuffer === void 0)
          T.setupRenderTarget(y);
        else if (ye.__hasExternalTextures)
          T.rebindTextures(y, Re.get(y.texture).__webglTexture, Re.get(y.depthTexture).__webglTexture);
        else if (y.depthBuffer) {
          const Te = y.depthTexture;
          if (ye.__boundDepthTexture !== Te) {
            if (Te !== null && Re.has(Te) && (y.width !== Te.image.width || y.height !== Te.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            T.setupDepthRenderbuffer(y);
          }
        }
        const De = y.texture;
        (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (ce = !0);
        const Le = Re.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget ? (Array.isArray(Le[L]) ? U = Le[L][N] : U = Le[L], te = !0) : y.samples > 0 && T.useMultisampledRTT(y) === !1 ? U = Re.get(y).__webglMultisampledFramebuffer : Array.isArray(Le) ? U = Le[N] : U = Le, v.copy(y.viewport), E.copy(y.scissor), k = y.scissorTest;
      } else
        v.copy(ue).multiplyScalar(J).floor(), E.copy(oe).multiplyScalar(J).floor(), k = We;
      if (Ae.bindFramebuffer(R.FRAMEBUFFER, U) && O && Ae.drawBuffers(y, U), Ae.viewport(v), Ae.scissor(E), Ae.setScissorTest(k), te) {
        const ye = Re.get(y.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + L, ye.__webglTexture, N);
      } else if (ce) {
        const ye = Re.get(y.texture), De = L || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, ye.__webglTexture, N || 0, De);
      }
      I = -1;
    }, this.readRenderTargetPixels = function(y, L, N, O, U, te, ce) {
      if (!(y && y.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Se = Re.get(y).__webglFramebuffer;
      if (y.isWebGLCubeRenderTarget && ce !== void 0 && (Se = Se[ce]), Se) {
        Ae.bindFramebuffer(R.FRAMEBUFFER, Se);
        try {
          const ye = y.texture, De = ye.format, Le = ye.type;
          if (!Ne.textureFormatReadable(De)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ne.textureTypeReadable(Le)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= y.width - O && N >= 0 && N <= y.height - U && R.readPixels(L, N, O, U, Be.convert(De), Be.convert(Le), te);
        } finally {
          const ye = w !== null ? Re.get(w).__webglFramebuffer : null;
          Ae.bindFramebuffer(R.FRAMEBUFFER, ye);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(y, L, N, O, U, te, ce) {
      if (!(y && y.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Se = Re.get(y).__webglFramebuffer;
      if (y.isWebGLCubeRenderTarget && ce !== void 0 && (Se = Se[ce]), Se) {
        const ye = y.texture, De = ye.format, Le = ye.type;
        if (!Ne.textureFormatReadable(De))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ne.textureTypeReadable(Le))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (L >= 0 && L <= y.width - O && N >= 0 && N <= y.height - U) {
          Ae.bindFramebuffer(R.FRAMEBUFFER, Se);
          const Te = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, Te), R.bufferData(R.PIXEL_PACK_BUFFER, te.byteLength, R.STREAM_READ), R.readPixels(L, N, O, U, Be.convert(De), Be.convert(Le), 0);
          const et = w !== null ? Re.get(w).__webglFramebuffer : null;
          Ae.bindFramebuffer(R.FRAMEBUFFER, et);
          const at = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await Cl(R, at, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Te), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, te), R.deleteBuffer(Te), R.deleteSync(at), te;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(y, L = null, N = 0) {
      y.isTexture !== !0 && (ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."), L = arguments[0] || null, y = arguments[1]);
      const O = Math.pow(2, -N), U = Math.floor(y.image.width * O), te = Math.floor(y.image.height * O), ce = L !== null ? L.x : 0, Se = L !== null ? L.y : 0;
      T.setTexture2D(y, 0), R.copyTexSubImage2D(R.TEXTURE_2D, N, 0, 0, ce, Se, U, te), Ae.unbindTexture();
    }, this.copyTextureToTexture = function(y, L, N = null, O = null, U = 0) {
      y.isTexture !== !0 && (ps("WebGLRenderer: copyTextureToTexture function signature has changed."), O = arguments[0] || null, y = arguments[1], L = arguments[2], U = arguments[3] || 0, N = null);
      let te, ce, Se, ye, De, Le;
      N !== null ? (te = N.max.x - N.min.x, ce = N.max.y - N.min.y, Se = N.min.x, ye = N.min.y) : (te = y.image.width, ce = y.image.height, Se = 0, ye = 0), O !== null ? (De = O.x, Le = O.y) : (De = 0, Le = 0);
      const Te = Be.convert(L.format), et = Be.convert(L.type);
      T.setTexture2D(L, 0), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, L.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, L.unpackAlignment);
      const at = R.getParameter(R.UNPACK_ROW_LENGTH), ot = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Rt = R.getParameter(R.UNPACK_SKIP_PIXELS), Ze = R.getParameter(R.UNPACK_SKIP_ROWS), we = R.getParameter(R.UNPACK_SKIP_IMAGES), _t = y.isCompressedTexture ? y.mipmaps[U] : y.image;
      R.pixelStorei(R.UNPACK_ROW_LENGTH, _t.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, _t.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Se), R.pixelStorei(R.UNPACK_SKIP_ROWS, ye), y.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, U, De, Le, te, ce, Te, et, _t.data) : y.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, U, De, Le, _t.width, _t.height, Te, _t.data) : R.texSubImage2D(R.TEXTURE_2D, U, De, Le, te, ce, Te, et, _t), R.pixelStorei(R.UNPACK_ROW_LENGTH, at), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Rt), R.pixelStorei(R.UNPACK_SKIP_ROWS, Ze), R.pixelStorei(R.UNPACK_SKIP_IMAGES, we), U === 0 && L.generateMipmaps && R.generateMipmap(R.TEXTURE_2D), Ae.unbindTexture();
    }, this.copyTextureToTexture3D = function(y, L, N = null, O = null, U = 0) {
      y.isTexture !== !0 && (ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."), N = arguments[0] || null, O = arguments[1] || null, y = arguments[2], L = arguments[3], U = arguments[4] || 0);
      let te, ce, Se, ye, De, Le, Te, et, at;
      const ot = y.isCompressedTexture ? y.mipmaps[U] : y.image;
      N !== null ? (te = N.max.x - N.min.x, ce = N.max.y - N.min.y, Se = N.max.z - N.min.z, ye = N.min.x, De = N.min.y, Le = N.min.z) : (te = ot.width, ce = ot.height, Se = ot.depth, ye = 0, De = 0, Le = 0), O !== null ? (Te = O.x, et = O.y, at = O.z) : (Te = 0, et = 0, at = 0);
      const Rt = Be.convert(L.format), Ze = Be.convert(L.type);
      let we;
      if (L.isData3DTexture)
        T.setTexture3D(L, 0), we = R.TEXTURE_3D;
      else if (L.isDataArrayTexture || L.isCompressedArrayTexture)
        T.setTexture2DArray(L, 0), we = R.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, L.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, L.unpackAlignment);
      const _t = R.getParameter(R.UNPACK_ROW_LENGTH), Qe = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Bt = R.getParameter(R.UNPACK_SKIP_PIXELS), On = R.getParameter(R.UNPACK_SKIP_ROWS), Ct = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ot.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, ye), R.pixelStorei(R.UNPACK_SKIP_ROWS, De), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Le), y.isDataTexture || y.isData3DTexture ? R.texSubImage3D(we, U, Te, et, at, te, ce, Se, Rt, Ze, ot.data) : L.isCompressedArrayTexture ? R.compressedTexSubImage3D(we, U, Te, et, at, te, ce, Se, Rt, ot.data) : R.texSubImage3D(we, U, Te, et, at, te, ce, Se, Rt, Ze, ot), R.pixelStorei(R.UNPACK_ROW_LENGTH, _t), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Qe), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Bt), R.pixelStorei(R.UNPACK_SKIP_ROWS, On), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Ct), U === 0 && L.generateMipmaps && R.generateMipmap(we), Ae.unbindTexture();
    }, this.initRenderTarget = function(y) {
      Re.get(y).__webglFramebuffer === void 0 && T.setupRenderTarget(y);
    }, this.initTexture = function(y) {
      y.isCubeTexture ? T.setTextureCube(y, 0) : y.isData3DTexture ? T.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? T.setTexture2DArray(y, 0) : T.setTexture2D(y, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      C = 0, A = 0, w = null, Ae.reset(), it.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === wr ? "display-p3" : "srgb", t.unpackColorSpace = qe.workingColorSpace === Ss ? "display-p3" : "srgb";
  }
}
class ka extends rt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new qt(), this.environmentIntensity = 1, this.environmentRotation = new qt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class zd {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = jt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = jt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = jt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const yt = /* @__PURE__ */ new P();
class Lr {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.applyMatrix4(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.applyNormalMatrix(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      yt.fromBufferAttribute(this, t), yt.transformDirection(e), this.setXYZ(t, yt.x, yt.y, yt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Vt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = tt(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = tt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Vt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = tt(t, this.array), n = tt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = tt(t, this.array), n = tt(n, this.array), i = tt(i, this.array), r = tt(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new Mt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Lr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Ba = /* @__PURE__ */ new P(), Oa = /* @__PURE__ */ new Ve(), Ga = /* @__PURE__ */ new Ve(), Hd = /* @__PURE__ */ new P(), za = /* @__PURE__ */ new Ce(), ss = /* @__PURE__ */ new P(), rr = /* @__PURE__ */ new Qt(), Ha = /* @__PURE__ */ new Ce(), ar = /* @__PURE__ */ new Ms();
class Vd extends vt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Yr, this.bindMatrix = new Ce(), this.bindMatrixInverse = new Ce(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Zt()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ss), this.boundingBox.expandByPoint(ss);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ss), this.boundingSphere.expandByPoint(ss);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), rr.copy(this.boundingSphere), rr.applyMatrix4(i), e.ray.intersectsSphere(rr) !== !1 && (Ha.copy(i).invert(), ar.copy(e.ray).applyMatrix4(Ha), !(this.boundingBox !== null && ar.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, ar)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ve(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Yr ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === ul ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Oa.fromBufferAttribute(i.attributes.skinIndex, e), Ga.fromBufferAttribute(i.attributes.skinWeight, e), Ba.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = Ga.getComponent(r);
      if (a !== 0) {
        const o = Oa.getComponent(r);
        za.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Hd.copy(Ba).applyMatrix4(za), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class No extends rt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Es extends gt {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = 1003, h = 1003, u, f) {
    super(null, a, o, l, c, h, i, r, u, f), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Va = /* @__PURE__ */ new Ce(), Wd = /* @__PURE__ */ new Ce();
class As {
  constructor(e = [], t = []) {
    this.uuid = jt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ce());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ce();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : Wd;
      Va.multiplyMatrices(o, t[r]), Va.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new As(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Es(t, e, e, 1023, 1015);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new No()), this.bones.push(a), this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class kn extends Mt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Jn = /* @__PURE__ */ new Ce(), Wa = /* @__PURE__ */ new Ce(), rs = [], ja = /* @__PURE__ */ new Zt(), jd = /* @__PURE__ */ new Ce(), vi = /* @__PURE__ */ new vt(), bi = /* @__PURE__ */ new Qt();
class Xd extends vt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new kn(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, jd);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Zt()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Jn), ja.copy(e.boundingBox).applyMatrix4(Jn), this.boundingBox.union(ja);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Jn), bi.copy(e.boundingSphere).applyMatrix4(Jn), this.boundingSphere.union(bi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, a = e * r + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (vi.geometry = this.geometry, vi.material = this.material, vi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), bi.copy(this.boundingSphere), bi.applyMatrix4(n), e.ray.intersectsSphere(bi) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Jn), Wa.multiplyMatrices(n, Jn), vi.matrixWorld = Wa, vi.raycast(e, rs);
        for (let a = 0, o = rs.length; a < o; a++) {
          const l = rs[a];
          l.instanceId = r, l.object = this, t.push(l);
        }
        rs.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new kn(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Es(new Float32Array(i * this.count), i, this.count, 1028, 1015));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++)
      a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * e;
    r[l] = o, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class ko extends $t {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ae(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const bs = /* @__PURE__ */ new P(), xs = /* @__PURE__ */ new P(), Xa = /* @__PURE__ */ new Ce(), xi = /* @__PURE__ */ new Ms(), as = /* @__PURE__ */ new Qt(), or = /* @__PURE__ */ new P(), qa = /* @__PURE__ */ new P();
class Ir extends rt {
  constructor(e = new kt(), t = new ko()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        bs.fromBufferAttribute(t, i - 1), xs.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += bs.distanceTo(xs);
      e.setAttribute("lineDistance", new Xt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), as.copy(n.boundingSphere), as.applyMatrix4(i), as.radius += r, e.ray.intersectsSphere(as) === !1) return;
    Xa.copy(i).invert(), xi.copy(e.ray).applyMatrix4(Xa);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
    if (h !== null) {
      const m = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let _ = m, d = g - 1; _ < d; _ += c) {
        const p = h.getX(_), S = h.getX(_ + 1), b = os(this, e, xi, l, p, S);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), d = h.getX(m), p = os(this, e, xi, l, _, d);
        p && t.push(p);
      }
    } else {
      const m = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let _ = m, d = g - 1; _ < d; _ += c) {
        const p = os(this, e, xi, l, _, _ + 1);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const _ = os(this, e, xi, l, g - 1, m);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function os(s, e, t, n, i, r) {
  const a = s.geometry.attributes.position;
  if (bs.fromBufferAttribute(a, i), xs.fromBufferAttribute(a, r), t.distanceSqToSegment(bs, xs, or, qa) > n) return;
  or.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(or);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: qa.clone().applyMatrix4(s.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s
    };
}
const Ya = /* @__PURE__ */ new P(), Ka = /* @__PURE__ */ new P();
class qd extends Ir {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Ya.fromBufferAttribute(t, i), Ka.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Ya.distanceTo(Ka);
      e.setAttribute("lineDistance", new Xt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Yd extends Ir {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Bo extends $t {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ae(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const $a = /* @__PURE__ */ new Ce(), br = /* @__PURE__ */ new Ms(), ls = /* @__PURE__ */ new Qt(), cs = /* @__PURE__ */ new P();
class Kd extends rt {
  constructor(e = new kt(), t = new Bo()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ls.copy(n.boundingSphere), ls.applyMatrix4(i), ls.radius += r, e.ray.intersectsSphere(ls) === !1) return;
    $a.copy(i).invert(), br.copy(e.ray).applyMatrix4($a);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start), m = Math.min(c.count, a.start + a.count);
      for (let g = f, _ = m; g < _; g++) {
        const d = c.getX(g);
        cs.fromBufferAttribute(u, d), Za(cs, d, l, i, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count);
      for (let g = f, _ = m; g < _; g++)
        cs.fromBufferAttribute(u, g), Za(cs, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Za(s, e, t, n, i, r, a) {
  const o = br.distanceSqToPoint(s);
  if (o < t) {
    const l = new P();
    br.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class $d extends It {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class hn extends $t {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ae(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ae(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ze(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new qt(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Jt extends hn {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ze(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return St(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ae(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ae(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ae(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function hs(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function Zd(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function Qd(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Qa(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[a++] = s[o + l];
  }
  return i;
}
function Oo(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push.apply(t, a)), r = s[i++];
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        a = r[n], a !== void 0 && (e.push(r.time), a.toArray(t, t.length)), r = s[i++];
      while (r !== void 0);
    else
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push(a)), r = s[i++];
      while (r !== void 0);
}
class Fi {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = i, i = t[++n], e < i)
                break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = t[--n - 1], e >= r)
                break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[r + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Jd extends Fi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: 2400,
      endingEnd: 2400
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, a = e + 1, o = i[r], l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          r = e, o = 2 * t - n;
          break;
        case 2402:
          r = i.length - 2, o = t + i[r] - i[r + 1];
          break;
        default:
          r = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          a = e, l = 2 * n - t;
          break;
        case 2402:
          a = 1, l = n + i[1] - i[0];
          break;
        default:
          a = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, f = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), _ = g * g, d = _ * g, p = -f * d + 2 * f * _ - f * g, S = (1 + f) * d + (-1.5 - 2 * f) * _ + (-0.5 + f) * g + 1, b = (-1 - m) * d + (1.5 + m) * _ + 0.5 * g, x = m * d - m * _;
    for (let C = 0; C !== o; ++C)
      r[C] = p * a[h + C] + S * a[c + C] + b * a[l + C] + x * a[u + C];
    return r;
  }
}
class Go extends Fi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let f = 0; f !== o; ++f)
      r[f] = a[c + f] * u + a[l + f] * h;
    return r;
  }
}
class ep extends Fi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class en {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = hs(t, this.TimeBufferType), this.values = hs(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: hs(e.times, Array),
        values: hs(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new ep(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Go(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Jd(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, a = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== r; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1;
        break;
      }
      a = l;
    }
    if (i !== void 0 && Zd(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === 2302, r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let l = !1;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const u = o * n, f = u - n, m = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[f + g] || _ !== t[m + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, f = a * n;
          for (let m = 0; m !== n; ++m)
            t[f + m] = t[u + m];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
en.prototype.TimeBufferType = Float32Array;
en.prototype.ValueBufferType = Float32Array;
en.prototype.DefaultInterpolation = 2301;
class hi extends en {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
hi.prototype.ValueTypeName = "bool";
hi.prototype.ValueBufferType = Array;
hi.prototype.DefaultInterpolation = 2300;
hi.prototype.InterpolantFactoryMethodLinear = void 0;
hi.prototype.InterpolantFactoryMethodSmooth = void 0;
class zo extends en {
}
zo.prototype.ValueTypeName = "color";
class ri extends en {
}
ri.prototype.ValueTypeName = "number";
class tp extends Fi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4)
      Lt.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class ai extends en {
  InterpolantFactoryMethodLinear(e) {
    return new tp(this.times, this.values, this.getValueSize(), e);
  }
}
ai.prototype.ValueTypeName = "quaternion";
ai.prototype.InterpolantFactoryMethodSmooth = void 0;
class ui extends en {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ui.prototype.ValueTypeName = "string";
ui.prototype.ValueBufferType = Array;
ui.prototype.DefaultInterpolation = 2300;
ui.prototype.InterpolantFactoryMethodLinear = void 0;
ui.prototype.InterpolantFactoryMethodSmooth = void 0;
class oi extends en {
}
oi.prototype.ValueTypeName = "vector";
class xr {
  constructor(e = "", t = -1, n = [], i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = jt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(ip(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, a = n.length; r !== a; ++r)
      t.push(en.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, a = [];
    for (let o = 0; o < r; o++) {
      let l = [], c = [];
      l.push(
        (o + r - 1) % r,
        o,
        (o + 1) % r
      ), c.push(0, 1, 0);
      const h = Qd(l);
      l = Qa(l, 1, h), c = Qa(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), a.push(
        new ri(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let f = i[u];
        f || (i[u] = f = []), f.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, f, m, g, _) {
      if (m.length !== 0) {
        const d = [], p = [];
        Oo(m, d, p, g), d.length !== 0 && _.push(new u(f, d, p));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const f = c[u].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < f.length; g++)
            if (f[g].morphTargets)
              for (let _ = 0; _ < f[g].morphTargets.length; _++)
                m[f[g].morphTargets[_]] = -1;
          for (const _ in m) {
            const d = [], p = [];
            for (let S = 0; S !== f[g].morphTargets.length; ++S) {
              const b = f[g];
              d.push(b.time), p.push(b.morphTarget === _ ? 1 : 0);
            }
            i.push(new ri(".morphTargetInfluence[" + _ + "]", d, p));
          }
          l = m.length * a;
        } else {
          const m = ".bones[" + t[u].name + "]";
          n(
            oi,
            m + ".position",
            f,
            "pos",
            i
          ), n(
            ai,
            m + ".quaternion",
            f,
            "rot",
            i
          ), n(
            oi,
            m + ".scale",
            f,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function np(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ri;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return oi;
    case "color":
      return zo;
    case "quaternion":
      return ai;
    case "bool":
    case "boolean":
      return hi;
    case "string":
      return ui;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function ip(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = np(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Oo(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const yn = {
  enabled: !1,
  files: {},
  add: function(s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function(s) {
    if (this.enabled !== !1)
      return this.files[s];
  },
  remove: function(s) {
    delete this.files[s];
  },
  clear: function() {
    this.files = {};
  }
};
class sp {
  constructor(e, t, n) {
    const i = this;
    let r = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, o), r = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, f = c.length; u < f; u += 2) {
        const m = c[u], g = c[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const rp = /* @__PURE__ */ new sp();
class fi {
  constructor(e) {
    this.manager = e !== void 0 ? e : rp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
fi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const ln = {};
class ap extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Ho extends fi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = yn.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (ln[e] !== void 0) {
      ln[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    ln[e] = [], ln[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const h = ln[e], u = c.body.getReader(), f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), m = f ? parseInt(f) : 0, g = m !== 0;
        let _ = 0;
        const d = new ReadableStream({
          start(p) {
            S();
            function S() {
              u.read().then(({ done: b, value: x }) => {
                if (b)
                  p.close();
                else {
                  _ += x.byteLength;
                  const C = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: m });
                  for (let A = 0, w = h.length; A < w; A++) {
                    const I = h[A];
                    I.onProgress && I.onProgress(C);
                  }
                  p.enqueue(x), S();
                }
              }, (b) => {
                p.error(b);
              });
            }
          }
        });
        return new Response(d);
      } else
        throw new ap(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), f = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(f);
            return c.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((c) => {
      yn.add(e, c);
      const h = ln[e];
      delete ln[e];
      for (let u = 0, f = h.length; u < f; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(c);
      }
    }).catch((c) => {
      const h = ln[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete ln[e];
      for (let u = 0, f = h.length; u < f; u++) {
        const m = h[u];
        m.onError && m.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class op extends fi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = yn.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const o = Pi("img");
    function l() {
      h(), yn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class Di extends fi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new gt(), a = new op(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Ts extends rt {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ae(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const lr = /* @__PURE__ */ new Ce(), Ja = /* @__PURE__ */ new P(), eo = /* @__PURE__ */ new P();
class Fr {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ze(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ce(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Pr(), this._frameExtents = new ze(1, 1), this._viewportCount = 1, this._viewports = [
      new Ve(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Ja.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ja), eo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(eo), t.updateMatrixWorld(), lr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(lr), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(lr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class lp extends Fr {
  constructor() {
    super(new wt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ii * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class cp extends Ts {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new lp();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const to = /* @__PURE__ */ new Ce(), Si = /* @__PURE__ */ new P(), cr = /* @__PURE__ */ new P();
class hp extends Fr {
  constructor() {
    super(new wt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ze(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Ve(2, 1, 1, 1),
      // negative X
      new Ve(0, 1, 1, 1),
      // positive Z
      new Ve(3, 1, 1, 1),
      // negative Z
      new Ve(1, 1, 1, 1),
      // positive Y
      new Ve(3, 0, 1, 1),
      // negative Y
      new Ve(1, 0, 1, 1)
    ], this._cubeDirections = [
      new P(1, 0, 0),
      new P(-1, 0, 0),
      new P(0, 0, 1),
      new P(0, 0, -1),
      new P(0, 1, 0),
      new P(0, -1, 0)
    ], this._cubeUps = [
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 0, 1),
      new P(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Si.setFromMatrixPosition(e.matrixWorld), n.position.copy(Si), cr.copy(n.position), cr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(cr), n.updateMatrixWorld(), i.makeTranslation(-Si.x, -Si.y, -Si.z), to.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(to);
  }
}
class up extends Ts {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new hp();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class fp extends Fr {
  constructor() {
    super(new Ii(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Sr extends Ts {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.shadow = new fp();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class dp extends Ts {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Ci {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class pp extends kt {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(e) {
    return super.copy(e), this.instanceCount = e.instanceCount, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
}
class mp extends fi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = yn.get(e);
    if (a !== void 0) {
      if (r.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return yn.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), yn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    yn.add(e, l), r.manager.itemStart(e);
  }
}
class gp {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = no(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = no();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function no() {
  return performance.now();
}
class _p {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, r, a;
    switch (t) {
      case "quaternion":
        i = this._slerp, r = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, r = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, r = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, r = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o)
        n[r + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, r, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, r = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const l = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        l,
        1 - r,
        t
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let l = t, c = t + t; l !== c; ++l)
      if (n[l] !== n[l + t]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let r = n, a = i; r !== a; ++r)
      t[r] = t[i + r % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, r) {
    if (i >= 0.5)
      for (let a = 0; a !== r; ++a)
        e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    Lt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, r) {
    const a = this._workIndex * r;
    Lt.multiplyQuaternionsFlat(e, a, e, t, e, n), Lt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, r) {
    const a = 1 - i;
    for (let o = 0; o !== r; ++o) {
      const l = t + o;
      e[l] = e[l] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, r) {
    for (let a = 0; a !== r; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const Ur = "\\[\\]\\.:\\/", vp = new RegExp("[" + Ur + "]", "g"), Nr = "[^" + Ur + "]", bp = "[^" + Ur.replace("\\.", "") + "]", xp = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Nr), Sp = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", bp), Mp = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Nr), yp = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Nr), Ep = new RegExp(
  "^" + xp + Sp + Mp + yp + "$"
), Ap = ["material", "materials", "bones", "map"];
class Tp {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(vp, "");
  }
  static parseTrackName(e) {
    const t = Ep.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Ap.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = Tp;
Je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Je.prototype.GetterByBindingType = [
  Je.prototype._getValue_direct,
  Je.prototype._getValue_array,
  Je.prototype._getValue_arrayElement,
  Je.prototype._getValue_toArray
];
Je.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Je.prototype._setValue_direct,
    Je.prototype._setValue_direct_setNeedsUpdate,
    Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Je.prototype._setValue_array,
    Je.prototype._setValue_array_setNeedsUpdate,
    Je.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Je.prototype._setValue_arrayElement,
    Je.prototype._setValue_arrayElement_setNeedsUpdate,
    Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Je.prototype._setValue_fromArray,
    Je.prototype._setValue_fromArray_setNeedsUpdate,
    Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class wp {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const r = t.tracks, a = r.length, o = new Array(a), l = {
      endingStart: 2400,
      endingEnd: 2400
    };
    for (let c = 0; c !== a; ++c) {
      const h = r[c].createInterpolant(null);
      o[c] = h, h.settings = l;
    }
    this._interpolantSettings = l, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, r = e._clip.duration, a = r / i, o = i / r;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, r = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const l = o.parameterPositions, c = o.sampleValues;
    return l[0] = r, l[1] = r + n, c[0] = e / a, c[1] = t / a, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const l = (e - r) * n;
      l < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * l);
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const l = this._interpolants, c = this._propertyBindings;
      switch (this.blendMode) {
        case 2501:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(a), c[h].accumulateAdditive(o);
          break;
        case 2500:
        default:
          for (let h = 0, u = l.length; h !== u; ++h)
            l[h].evaluate(a), c[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, r = this._loopCount;
    const a = n === 2202;
    if (e === 0)
      return r === -1 ? i : a && (r & 1) === 1 ? t - i : i;
    if (n === 2200) {
      r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (r === -1 && (e >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, r += Math.abs(o);
        const l = this.repetitions - r;
        if (l <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (l === 1) {
            const c = e < 0;
            this._setEndings(c, !c, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (a && (r & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = 2401, i.endingEnd = 2401) : (e ? i.endingStart = this.zeroSlopeAtStart ? 2401 : 2400 : i.endingStart = 2402, t ? i.endingEnd = this.zeroSlopeAtEnd ? 2401 : 2400 : i.endingEnd = 2402);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, r = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, l = a.sampleValues;
    return o[0] = r, l[0] = t, o[1] = r + e, l[1] = n, this;
  }
}
const Rp = new Float32Array(1);
class Cp extends Bn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, a = e._propertyBindings, o = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let u = 0; u !== r; ++u) {
      const f = i[u], m = f.name;
      let g = h[m];
      if (g !== void 0)
        ++g.referenceCount, a[u] = g;
      else {
        if (g = a[u], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, m));
          continue;
        }
        const _ = t && t._propertyBindings[u].binding.parsedPath;
        g = new _p(
          Je.create(n, m, _),
          f.ValueTypeName,
          f.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, l, m), a[u] = g;
      }
      o[u].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, r = this._actionsByClip[i];
        this._bindAction(
          e,
          r && r.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const r = t[n];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, r = this._actionsByClip;
    let a = r[t];
    if (a === void 0)
      a = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, r[t] = a;
    else {
      const o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const r = e._clip.uuid, a = this._actionsByClip, o = a[r], l = o.knownActions, c = l[l.length - 1], h = e._byClipCacheIndex;
    c._byClipCacheIndex = h, l[h] = c, l.pop(), e._byClipCacheIndex = null;
    const u = o.actionByRoot, f = (e._localRoot || this._root).uuid;
    delete u[f], l.length === 0 && delete a[r], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = t[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, r = this._bindings;
    let a = i[t];
    a === void 0 && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = r.length, r.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, r = n.path, a = this._bindingsByRootAndName, o = a[i], l = t[t.length - 1], c = e._cacheIndex;
    l._cacheIndex = c, t[c] = l, t.pop(), delete o[r], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, r = t[i];
    e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new Go(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Rp
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, r = t[i];
    e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, r = i.uuid;
    let a = typeof e == "string" ? xr.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = 2500), l !== void 0) {
      const u = l.actionByRoot[r];
      if (u !== void 0 && u.blendMode === n)
        return u;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new wp(this, a, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, o, r), h;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, r = typeof e == "string" ? xr.findByName(n, e) : e, a = r ? r.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), a = this._accuIndex ^= 1;
    for (let c = 0; c !== n; ++c)
      t[c]._update(i, e, r, a);
    const o = this._bindings, l = this._nActiveBindings;
    for (let c = 0; c !== l; ++c)
      o[c].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, r = i[n];
    if (r !== void 0) {
      const a = r.knownActions;
      for (let o = 0, l = a.length; o !== l; ++o) {
        const c = a[o];
        this._deactivateAction(c);
        const h = c._cacheIndex, u = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = h, t[h] = u, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, l = o[t];
      l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l));
    }
    const i = this._bindingsByRootAndName, r = i[t];
    if (r !== void 0)
      for (const a in r) {
        const o = r[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Tr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Tr);
const Pp = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  )
};
class Ui {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const Dp = new Ii(-1, 1, 1, -1, 0, 1);
class Lp extends kt {
  constructor() {
    super(), this.setAttribute("position", new Xt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Xt([0, 2, 0, 0, 2, 0], 2));
  }
}
const Ip = new Lp();
class Vo {
  constructor(e) {
    this._mesh = new vt(Ip, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Dp);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class Wo extends Ui {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof It ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Cr.clone(e.uniforms), this.material = new It({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Vo(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class io extends Ui {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const i = e.getContext(), r = e.state;
    r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0);
    let a, o;
    this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), r.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295), r.buffers.stencil.setClear(o), r.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.color.setMask(!0), r.buffers.depth.setMask(!0), r.buffers.stencil.setLocked(!1), r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), r.buffers.stencil.setLocked(!0);
  }
}
class Fp extends Ui {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Up {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new ze());
      this._width = n.width, this._height = n.height, t = new dn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: 1016 }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new Wo(Pp), this.copyPass.material.blending = 0, this.clock = new gp();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled)
        return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, r = this.passes.length; i < r; i++) {
      const a = this.passes[i];
      if (a.enabled !== !1) {
        if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), a.needsSwap) {
          if (n) {
            const o = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        io !== void 0 && (a instanceof io ? n = !0 : a instanceof Fp && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new ze());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let r = 0; r < this.passes.length; r++)
      this.passes[r].setSize(n, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class Np extends Ui {
  constructor(e, t, n = null, i = null, r = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = r, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new ae();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let r, a;
    this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), e.autoClear = i;
  }
}
const kp = {
  name: "OutputShader",
  uniforms: {
    tDiffuse: { value: null },
    toneMappingExposure: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`
  )
};
class Bp extends Ui {
  constructor() {
    super();
    const e = kp;
    this.uniforms = Cr.clone(e.uniforms), this.material = new $d({
      name: e.name,
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    }), this.fsQuad = new Vo(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, n) {
    this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, qe.getTransfer(this._outputColorSpace) === st && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === 7 && (this.material.defines.NEUTRAL_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
const Op = -5, Gp = {
  avatarRotationY: Op
}, zp = Gp, Ht = {
  // Renderer
  // Unity 맞춤 값(1.0)은 아래 OZ_UNITY_LOOK — 그 작업은 꺼 둔 상태 (2026-11-18)
  toneMappingExposure: 1.05,
  // Main Light (Unity: pos(0,0,0), rot(153.055, 6.881, 0.955), intensity=1.05)
  mainLight: {
    color: "#fefbf1",
    intensity: 3.5,
    // Unity 원본 intensity (커스텀 셰이더 라이트 보정용)
    rotation: { x: 153.055, y: 12, z: 0.955 }
  },
  // Rim Light (Unity: pos(0.02, 0.578, 0.534), rot(205.607, -144.941, 90.515), intensity=0.7)
  rimLight: {
    color: "#81c3f3",
    intensity: 1.5,
    rotation: { x: 205.607, y: -144.941, z: 90.515 }
  },
  // Ambient Light
  ambient: {
    color: "#6e6b68",
    intensity: 1
  },
  // Bloom — 이미시브 전용 셀렉티브 블룸 (selectiveBloom.ts, Unity URP HDR 블룸 구조).
  // 발광 메시만 압축 전 HDR 로 별도 렌더한 버퍼에 블룸 → 본 화면 가산.
  // Unity 볼륨 실측: threshold 0.45 / intensity 0.18 / scatter 0.7 에 맞춰 캘리브레이션.
  bloom: {
    strength: 0.18,
    threshold: 0.45,
    // 번짐 단계 수 = Unity 프로필 max(maxIterations 6 − skipIterations 8, 1) = 1 → 번짐 거의 없음. 넓은 번짐을 원하면 2~5
    iterations: 1
  },
  // Environment Map
  envMapColor: "#6e6b68",
  // LiftGammaGain
  liftGammaGain: {
    invGamma: [1 / 1.02, 1 / 1.02, 1 / 1.02],
    gain: [1.1, 1.1, 1.1]
  },
  avatar: {
    rotationY: zp.avatarRotationY
    // Y축 회전 (도)
  }
}, Hp = (
  /* glsl */
  `{
float peak = max(max(c.r, c.g), c.b);
if (peak > 1.0) { c *= (1.0 + log(peak)) / peak; c = clamp(c, 0.0, 1.0); }
c = clamp(uGain * pow(c, uInvGamma), 0.0, 1.0);
}`
), Vp = Math.pow((Ht.bloom.threshold + 0.055) / 1.055, 2.4), Wp = Math.round(Ht.bloom.iterations) > 1 ? 0 : Ht.bloom.strength;
`${Vp.toFixed(5)}${Wp.toFixed(4)}`;
const jp = Hp, Xp = (
  /* glsl */
  `
uniform vec3 flatColor; uniform float flatOn; uniform float flatAspect;
vec3 ozFlatL2S(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
vec3 ozFlatS2L(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 ozFlatBg(vec2 uv) {
    vec3 s = ozFlatL2S(flatColor);
    float L = dot(s, vec3(0.299, 0.587, 0.114));
    float x = uv.x - 0.5;
    // 스튜디오 호리존트: 바닥이 곡면으로 휘어 올라가 벽이 된다 — 경계선 없이 넓은 구간에서 서서히 바뀜
    float hz = 0.27 + x * x * 0.08;
    float wall = smoothstep(hz - 0.13, hz + 0.24, uv.y);
    // 바닥: 발 밑 빛 웅덩이(납작한 타원), 위쪽(곡면)으로는 길게 번짐. 옆·앞은 어두움
    float dy = uv.y - 0.14;
    vec2 d = vec2(x / 0.48, dy / (dy > 0.0 ? 0.19 : 0.12));
    float fLight = exp(-dot(d, d)) + 0.15;
    float fShade = smoothstep(0.20, 0.65, abs(x)) * 0.50 + smoothstep(0.10, 0.0, uv.y) * 0.22;
    // 벽: 몸 뒤 넓은 빛, 위쪽·모서리는 어두움
    vec2 e = vec2(x, uv.y - 0.62) / vec2(0.52, 0.42);
    float wLight = exp(-dot(e, e)) * 0.38;
    float wShade = smoothstep(0.22, 0.78, length(vec2(x * 1.15, (uv.y - 0.60) * 0.9))) * 0.9;
    // 곡면: 빛을 비스듬히 받아 넓고 옅게 어두워짐
    float cove = exp(-pow((uv.y - hz - 0.05) / 0.17, 2.0)) * 0.30;
    // 추가 조명 2개: 왼쪽 위에서 벽을 비추는 빛, 오른쪽 아래 곡면을 스치는 빛 (밝은 색에서는 그 자리의 어둠을 걷어 낸다)
    vec2 la = vec2(uv.x - 0.20, uv.y - 0.80) / vec2(0.36, 0.28);
    vec2 lb = vec2(uv.x - 0.90, uv.y - 0.36) / vec2(0.30, 0.19);
    float extra = exp(-dot(la, la)) * 0.60 + exp(-dot(lb, lb)) * 0.50;
    float light = mix(fLight, wLight, wall) + extra;
    float shade = clamp(mix(fShade, wShade, wall) + cove, 0.0, 1.0) * (1.0 - min(extra * 1.5, 0.9));
    s = mix(s, vec3(0.0), shade * mix(0.14, 0.34, L));
    s = mix(s, vec3(1.0), clamp(light, 0.0, 1.2) * mix(0.30, 0.16, L));
    return ozFlatS2L(s);
}`
);
function so(s, e) {
  if (e === 0)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === 2 || e === 1) {
    let t = s.getIndex();
    if (t === null) {
      const a = [], o = s.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++)
          a.push(l);
        s.setIndex(a), t = s.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === 2)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class jo extends fi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Zp(t);
    }), this.register(function(t) {
      return new Qp(t);
    }), this.register(function(t) {
      return new om(t);
    }), this.register(function(t) {
      return new lm(t);
    }), this.register(function(t) {
      return new cm(t);
    }), this.register(function(t) {
      return new em(t);
    }), this.register(function(t) {
      return new tm(t);
    }), this.register(function(t) {
      return new nm(t);
    }), this.register(function(t) {
      return new im(t);
    }), this.register(function(t) {
      return new $p(t);
    }), this.register(function(t) {
      return new sm(t);
    }), this.register(function(t) {
      return new Jp(t);
    }), this.register(function(t) {
      return new am(t);
    }), this.register(function(t) {
      return new rm(t);
    }), this.register(function(t) {
      return new Yp(t);
    }), this.register(function(t) {
      return new hm(t);
    }), this.register(function(t) {
      return new um(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const c = Ci.extractUrlBase(e);
      a = Ci.resolveURL(c, this.path);
    } else
      a = Ci.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Ho(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, a, function(h) {
          t(h), r.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === Xo) {
        try {
          a[He.KHR_BINARY_GLTF] = new fm(e);
        } catch (u) {
          i && i(u);
          return;
        }
        r = JSON.parse(a[He.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(l.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Am(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = !0;
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h], f = r.extensionsRequired || [];
        switch (u) {
          case He.KHR_MATERIALS_UNLIT:
            a[u] = new Kp();
            break;
          case He.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new dm(r, this.dracoLoader);
            break;
          case He.KHR_TEXTURE_TRANSFORM:
            a[u] = new pm();
            break;
          case He.KHR_MESH_QUANTIZATION:
            a[u] = new mm();
            break;
          default:
            f.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function qp() {
  let s = {};
  return {
    get: function(e) {
      return s[e];
    },
    add: function(e, t) {
      s[e] = t;
    },
    remove: function(e) {
      delete s[e];
    },
    removeAll: function() {
      s = {};
    }
  };
}
const He = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Yp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new ae(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], ut);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Sr(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new up(h), c.distance = u;
        break;
      case "spot":
        c = new cp(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, cn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class Kp {
  constructor() {
    this.name = He.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Nn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new ae(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], ut), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, mt));
    }
    return Promise.all(i);
  }
}
class $p {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class Zp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ze(o, o);
    }
    return Promise.all(r);
  }
}
class Qp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class Jp {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class em {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new ae(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], ut);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, mt)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class tm {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class nm {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new ae().setRGB(o[0], o[1], o[2], ut), Promise.all(r);
  }
}
class im {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class sm {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new ae().setRGB(o[0], o[1], o[2], ut), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, mt)), Promise.all(r);
  }
}
class rm {
  constructor(e) {
    this.parser = e, this.name = He.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class am {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Jt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class om {
  constructor(e) {
    this.parser = e, this.name = He.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const r = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class lm {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class cm {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class hm {
  constructor(e) {
    this.name = He.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, f = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, f, i.mode, i.filter).then(function(m) {
          return m.buffer;
        }) : a.ready.then(function() {
          const m = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(m), h, u, f, i.mode, i.filter), m;
        });
      });
    } else
      return null;
  }
}
class um {
  constructor(e) {
    this.name = He.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== Nt.TRIANGLES && c.mode !== Nt.TRIANGLE_STRIP && c.mode !== Nt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a)
      o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], f = c[0].count, m = [];
      for (const g of u) {
        const _ = new Ce(), d = new P(), p = new Lt(), S = new P(1, 1, 1), b = new Xd(g.geometry, g.material, f);
        for (let x = 0; x < f; x++)
          l.TRANSLATION && d.fromBufferAttribute(l.TRANSLATION, x), l.ROTATION && p.fromBufferAttribute(l.ROTATION, x), l.SCALE && S.fromBufferAttribute(l.SCALE, x), b.setMatrixAt(x, _.compose(d, p, S));
        for (const x in l)
          if (x === "_COLOR_0") {
            const C = l[x];
            b.instanceColor = new kn(C.array, C.itemSize, C.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && g.geometry.setAttribute(x, l[x]);
        rt.prototype.copy.call(b, g), this.parser.assignFinalMaterial(b), m.push(b);
      }
      return h.isGroup ? (h.clear(), h.add(...m), h) : m[0];
    }));
  }
}
const Xo = "glTF", Mi = 12, ro = { JSON: 1313821514, BIN: 5130562 };
class fm {
  constructor(e) {
    this.name = He.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Mi), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Xo)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Mi, r = new DataView(e, Mi);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const l = r.getUint32(a, !0);
      if (a += 4, l === ro.JSON) {
        const c = new Uint8Array(e, Mi + a, o);
        this.content = n.decode(c);
      } else if (l === ro.BIN) {
        const c = Mi + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class dm {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = He.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const u = Mr[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = Mr[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const f = n.accessors[e.attributes[h]], m = ni[f.componentType];
        c[u] = m.name, l[u] = f.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, f) {
        i.decodeDracoFile(h, function(m) {
          for (const g in m.attributes) {
            const _ = m.attributes[g], d = l[g];
            d !== void 0 && (_.normalized = d);
          }
          u(m);
        }, o, c, ut, f);
      });
    });
  }
}
class pm {
  constructor() {
    this.name = He.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class mm {
  constructor() {
    this.name = He.KHR_MESH_QUANTIZATION;
  }
}
class qo extends Fi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, f = u * u, m = f * u, g = e * c, _ = g - c, d = -2 * m + 3 * f, p = m - f, S = 1 - d, b = p - f + u;
    for (let x = 0; x !== o; x++) {
      const C = a[_ + x + o], A = a[_ + x + l] * h, w = a[g + x + o], I = a[g + x] * h;
      r[x] = S * C + b * A + d * w + p * I;
    }
    return r;
  }
}
const gm = new Lt();
class _m extends qo {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return gm.fromArray(r).normalize().toArray(r), r;
  }
}
const Nt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, ni = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ao = {
  9728: 1003,
  9729: 1006,
  9984: 1004,
  9985: 1007,
  9986: 1005,
  9987: 1008
}, oo = {
  33071: 1001,
  33648: 1002,
  10497: 1e3
}, hr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Mr = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Sn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, vm = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: 2301,
  STEP: 2300
}, ur = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function bm(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new hn({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), s.DefaultMaterial;
}
function Dn(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function cn(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function xm(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (r = !0), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const f = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position;
      a.push(f);
    }
    if (i) {
      const f = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal;
      o.push(f);
    }
    if (r) {
      const f = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], u = c[1], f = c[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = f), s.morphTargetsRelative = !0, s;
  });
}
function Sm(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Mm(s) {
  let e;
  const t = s.extensions && s.extensions[He.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + fr(t.attributes) : e = s.indices + ":" + fr(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + fr(s.targets[n]);
  return e;
}
function fr(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function yr(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function ym(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Em = new Ce();
class Am {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new qp(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, r = !1, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && a < 98 ? this.textureLoader = new Di(this.options.manager) : this.textureLoader = new mp(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ho(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Dn(r, o, i), cn(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes)
          l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, h] of a.children.entries())
        r(h, o.children[c]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, a) {
      n.load(Ci.resolveURL(t.uri, i.path), r, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = hr[i.type], o = ni[i.componentType], l = i.normalized === !0, c = new o(i.count * a);
      return Promise.resolve(new Mt(c, a, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], l = hr[i.type], c = ni[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, f = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, d;
      if (m && m !== u) {
        const p = Math.floor(f / m), S = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let b = t.cache.get(S);
        b || (_ = new c(o, p * m, i.count * m / h), b = new zd(_, m / h), t.cache.add(S, b)), d = new Lr(b, l, f % m / h, g);
      } else
        o === null ? _ = new c(i.count * l) : _ = new c(o, f, i.count * l), d = new Mt(_, l, g);
      if (i.sparse !== void 0) {
        const p = hr.SCALAR, S = ni[i.sparse.indices.componentType], b = i.sparse.indices.byteOffset || 0, x = i.sparse.values.byteOffset || 0, C = new S(a[1], b, i.sparse.count * p), A = new c(a[2], x, i.sparse.count * l);
        o !== null && (d = new Mt(d.array.slice(), d.itemSize, d.normalized)), d.normalized = !1;
        for (let w = 0, I = C.length; w < I; w++) {
          const q = C[w];
          if (d.setX(q, A[w * l]), l >= 2 && d.setY(q, A[w * l + 1]), l >= 3 && d.setZ(q, A[w * l + 2]), l >= 4 && d.setW(q, A[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        d.normalized = g;
      }
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, a = r.textures[e], o = r.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const f = (r.samplers || {})[a.sampler] || {};
      return h.magFilter = ao[f.magFilter] || 1006, h.minFilter = ao[f.minFilter] || 1008, h.wrapS = oo[f.wrapS] || 1e3, h.wrapT = oo[f.wrapT] || 1e3, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function(u) {
        c = !0;
        const f = new Blob([u], { type: a.mimeType });
        return l = o.createObjectURL(f), l;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(f, m) {
        let g = f;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const d = new gt(_);
          d.needsUpdate = !0, f(d);
        }), t.load(Ci.resolveURL(u, r.path), g, void 0, m);
      });
    }).then(function(u) {
      return c === !0 && o.revokeObjectURL(l), cn(u, a), u.userData.mimeType = a.mimeType || ym(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[He.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[He.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = r.associations.get(a);
          a = r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new Bo(), $t.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new ko(), $t.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), r && (l.vertexColors = !0), a && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return hn;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let a;
    const o = {}, l = r.extensions || {}, c = [];
    if (l[He.KHR_MATERIALS_UNLIT]) {
      const u = i[He.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), c.push(u.extendParams(o, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (o.color = new ae(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const f = u.baseColorFactor;
        o.color.setRGB(f[0], f[1], f[2], ut), o.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, mt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === !0 && (o.side = 2);
    const h = r.alphaMode || ur.OPAQUE;
    if (h === ur.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === ur.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== Nn && (c.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new ze(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && a !== Nn && (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== Nn) {
      const u = r.emissiveFactor;
      o.emissive = new ae().setRGB(u[0], u[1], u[2], ut);
    }
    return r.emissiveTexture !== void 0 && a !== Nn && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, mt)), Promise.all(c).then(function() {
      const u = new a(o);
      return r.name && (u.name = r.name), cn(u, r), t.associations.set(u, { materials: e }), r.extensions && Dn(i, u, r), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(o) {
      return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return lo(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = Mm(c), u = i[h];
      if (u)
        a.push(u.promise);
      else {
        let f;
        c.extensions && c.extensions[He.KHR_DRACO_MESH_COMPRESSION] ? f = r(c) : f = lo(new kt(), c, t), i[h] = { primitive: c, promise: f }, a.push(f);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], a = r.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h = a[l].material === void 0 ? bm(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let m = 0, g = h.length; m < g; m++) {
        const _ = h[m], d = a[m];
        let p;
        const S = c[m];
        if (d.mode === Nt.TRIANGLES || d.mode === Nt.TRIANGLE_STRIP || d.mode === Nt.TRIANGLE_FAN || d.mode === void 0)
          p = r.isSkinnedMesh === !0 ? new Vd(_, S) : new vt(_, S), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), d.mode === Nt.TRIANGLE_STRIP ? p.geometry = so(p.geometry, 1) : d.mode === Nt.TRIANGLE_FAN && (p.geometry = so(p.geometry, 2));
        else if (d.mode === Nt.LINES)
          p = new qd(_, S);
        else if (d.mode === Nt.LINE_STRIP)
          p = new Ir(_, S);
        else if (d.mode === Nt.LINE_LOOP)
          p = new Yd(_, S);
        else if (d.mode === Nt.POINTS)
          p = new Kd(_, S);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + d.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && Sm(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), cn(p, r), d.extensions && Dn(i, p, d), t.assignFinalMaterial(p), u.push(p);
      }
      for (let m = 0, g = u.length; m < g; m++)
        t.associations.set(u[m], {
          meshes: e,
          primitives: m
        });
      if (u.length === 1)
        return r.extensions && Dn(i, u[0], r), u[0];
      const f = new fn();
      r.extensions && Dn(i, f, r), t.associations.set(f, { meshes: e });
      for (let m = 0, g = u.length; m < g; m++)
        f.add(u[m]);
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new wt(Ri.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ii(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), cn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), a = i, o = [], l = [];
      for (let c = 0, h = a.length; c < h; c++) {
        const u = a[c];
        if (u) {
          o.push(u);
          const f = new Ce();
          r !== null && f.fromArray(r.array, c * 16), l.push(f);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new As(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let u = 0, f = i.channels.length; u < f; u++) {
      const m = i.channels[u], g = i.samplers[m.sampler], _ = m.target, d = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, S = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", d)), o.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", S)), c.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h)
    ]).then(function(u) {
      const f = u[0], m = u[1], g = u[2], _ = u[3], d = u[4], p = [];
      for (let S = 0, b = f.length; S < b; S++) {
        const x = f[S], C = m[S], A = g[S], w = _[S], I = d[S];
        if (x === void 0) continue;
        x.updateMatrix && x.updateMatrix();
        const q = n._createAnimationTracks(x, C, A, w, I);
        if (q)
          for (let v = 0; v < q.length; v++)
            p.push(q[v]);
      }
      return new xr(r, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const a = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++)
      a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(a),
      l
    ]).then(function(c) {
      const h = c[0], u = c[1], f = c[2];
      f !== null && h.traverse(function(m) {
        m.isSkinnedMesh && m.bind(f, Em);
      });
      for (let m = 0, g = u.length; m < g; m++)
        h.add(u[m]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], a = r.name ? i.createUniqueName(r.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), r.camera !== void 0 && o.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let h;
      if (r.isBone === !0 ? h = new No() : c.length > 1 ? h = new fn() : c.length === 1 ? h = c[0] : h = new rt(), h !== c[0])
        for (let u = 0, f = c.length; u < f; u++)
          h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = a), cn(h, r), r.extensions && Dn(n, h, r), r.matrix !== void 0) {
        const u = new Ce();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else
        r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new fn();
    n.name && (r.name = i.createUniqueName(n.name)), cn(r, n), n.extensions && Dn(t, r, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++)
        r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [f, m] of i.associations)
          (f instanceof $t || f instanceof gt) && u.set(f, m);
        return h.traverse((f) => {
          const m = i.associations.get(f);
          m != null && u.set(f, m);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    Sn[r.path] === Sn.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && l.push(f.name ? f.name : f.uuid);
    }) : l.push(o);
    let c;
    switch (Sn[r.path]) {
      case Sn.weights:
        c = ri;
        break;
      case Sn.rotation:
        c = ai;
        break;
      case Sn.position:
      case Sn.scale:
        c = oi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = ri;
            break;
          case 2:
          case 3:
          default:
            c = oi;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? vm[i.interpolation] : 2301, u = this._getArrayFromAccessor(n);
    for (let f = 0, m = l.length; f < m; f++) {
      const g = new c(
        l[f] + "." + Sn[r.path],
        t.array,
        u,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = yr(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ai ? _m : qo;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Tm(s, e, t) {
  const n = e.attributes, i = new Zt();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new P(l[0], l[1], l[2]),
        new P(c[0], c[1], c[2])
      ), o.normalized) {
        const h = yr(ni[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new P(), l = new P();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const f = t.json.accessors[u.POSITION], m = f.min, g = f.max;
        if (m !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), f.normalized) {
            const _ = yr(ni[f.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new Qt();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = a;
}
function lo(s, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      s.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = Mr[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return qe.workingColorSpace !== ut && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`), cn(s, e), Tm(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? xm(s, e.targets, t) : s;
  });
}
var Yo = function() {
  var s = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : s, r, a = WebAssembly.instantiate(o(i), {}).then(function(p) {
    r = p.instance, r.exports.__wasm_call_ctors();
  });
  function o(p) {
    for (var S = new Uint8Array(p.length), b = 0; b < p.length; ++b) {
      var x = p.charCodeAt(b);
      S[b] = x > 96 ? x - 97 : x > 64 ? x - 39 : x + 4;
    }
    for (var C = 0, b = 0; b < p.length; ++b)
      S[C++] = S[b] < 60 ? n[S[b]] : (S[b] - 60) * 64 + S[++b];
    return S.buffer.slice(0, C);
  }
  function l(p, S, b, x, C, A) {
    var w = r.exports.sbrk, I = b + 3 & -4, q = w(I * x), v = w(C.length), E = new Uint8Array(r.exports.memory.buffer);
    E.set(C, v);
    var k = p(q, b, x, v, C.length);
    if (k == 0 && A && A(q, I, x), S.set(E.subarray(q, q + b * x)), w(q - w(0)), k != 0)
      throw new Error("Malformed buffer data: " + k);
  }
  var c = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, h = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, u = [], f = 0;
  function m(p) {
    var S = {
      object: new Worker(p),
      pending: 0,
      requests: {}
    };
    return S.object.onmessage = function(b) {
      var x = b.data;
      S.pending -= x.count, S.requests[x.id][x.action](x.value), delete S.requests[x.id];
    }, S;
  }
  function g(p) {
    for (var S = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + l.toString() + d.toString(), b = new Blob([S], { type: "text/javascript" }), x = URL.createObjectURL(b), C = 0; C < p; ++C)
      u[C] = m(x);
    URL.revokeObjectURL(x);
  }
  function _(p, S, b, x, C) {
    for (var A = u[0], w = 1; w < u.length; ++w)
      u[w].pending < A.pending && (A = u[w]);
    return new Promise(function(I, q) {
      var v = new Uint8Array(b), E = f++;
      A.pending += p, A.requests[E] = { resolve: I, reject: q }, A.object.postMessage({ id: E, count: p, size: S, source: v, mode: x, filter: C }, [v.buffer]);
    });
  }
  function d(p) {
    a.then(function() {
      var S = p.data;
      try {
        var b = new Uint8Array(S.count * S.size);
        l(r.exports[S.mode], b, S.count, S.size, S.source, r.exports[S.filter]), self.postMessage({ id: S.id, count: S.count, action: "resolve", value: b }, [b.buffer]);
      } catch (x) {
        self.postMessage({ id: S.id, count: S.count, action: "reject", value: x });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(p) {
      g(p);
    },
    decodeVertexBuffer: function(p, S, b, x, C) {
      l(r.exports.meshopt_decodeVertexBuffer, p, S, b, x, r.exports[c[C]]);
    },
    decodeIndexBuffer: function(p, S, b, x) {
      l(r.exports.meshopt_decodeIndexBuffer, p, S, b, x);
    },
    decodeIndexSequence: function(p, S, b, x) {
      l(r.exports.meshopt_decodeIndexSequence, p, S, b, x);
    },
    decodeGltfBuffer: function(p, S, b, x, C, A) {
      l(r.exports[h[C]], p, S, b, x, r.exports[c[A]]);
    },
    decodeGltfBufferAsync: function(p, S, b, x, C) {
      return u.length > 0 ? _(p, S, b, h[x], c[C]) : a.then(function() {
        var A = new Uint8Array(p * S);
        return l(r.exports[h[x]], A, p, S, b, r.exports[c[C]]), A;
      });
    }
  };
}();
const kr = () => "", wm = (s) => s.properties;
function Rm(s, e, t, n, i) {
  const r = s.getRenderTarget();
  s.setRenderTarget(i);
  try {
    const a = s.compile(e, t, n), o = [];
    for (const l of a) {
      const c = wm(s).get(l).currentProgram;
      c && o.push(c);
    }
    return o;
  } catch (a) {
    return console.warn("[precompile] 실패 — 첫 프레임에 컴파일됨:", a), [];
  } finally {
    s.setRenderTarget(r);
  }
}
function Cm(s, e = 1e4) {
  const t = performance.now();
  let n = [...new Set(s)];
  return new Promise((i) => {
    const r = () => {
      n = n.filter((a) => a.program !== void 0 && !a.isReady()), n.length === 0 || performance.now() - t > e ? i() : setTimeout(r, 8);
    };
    r();
  });
}
const dr = 11, Br = { value: 0 };
function Ko(s) {
  return {
    emissiveMap: { value: s.emissiveMap },
    emissiveStrength: { value: s.emissiveStrength ?? 1 },
    // 하이라이트 흰색 롤오프 (EDR 근사) — 시작 휘도 / 최대 탈색률.
    // 파츠별 아트값 (.mat _Emissive_Desat_Start/_Max) — 코(레드 유지)=0, 호박(파스텔)=0.7 처럼
    // 파츠마다 요구가 달라 전역 상수 불가 (2026-08-12 실측).
    emissiveDesatStart: { value: s.emissiveDesatStart ?? 0.75 },
    emissiveDesatMax: { value: s.emissiveDesatMax ?? 0.5, ozDefaulted: s.emissiveDesatMax == null },
    // .mat 에 값이 없으면 바래지 않는다 — Unity 에는 이 계산이 없다 (예전 기본 0.5)
    // 발광 점멸 (옵트인, 기본 꺼짐) — 시간은 뷰어 업데이트 루프가 emissiveFlickerTime 에 공급
    emissiveFlickerSpeed: { value: s.emissiveFlickerSpeed ?? 0 },
    emissiveFlickerMin: { value: s.emissiveFlickerMin ?? 0.6 },
    emissiveFlickerTime: { value: 0 },
    // 주기 펄스 (옵트인) — 같은 시간 유니폼(emissiveFlickerTime) 공유, Flicker 와 곱으로 합성
    emissivePulsePeriod: { value: s.emissivePulsePeriod ?? 0 },
    emissivePulseMin: { value: s.emissivePulseMin ?? 0.2 },
    emissivePulseSharp: { value: s.emissivePulseSharp ?? 0.3 },
    // 불규칙 암전 (옵트인) — 같은 시간 유니폼 공유, 점멸·펄스와 곱
    emissiveBlackoutFreq: { value: s.emissiveBlackoutFreq ?? 0 },
    emissiveBlackoutThreshold: { value: s.emissiveBlackoutThreshold ?? 0.3 },
    // 흐름 (UV/초, 0 = 정지) · 칸별 깜빡임 (속도 0 = 없음) · 발광 양 · 무늬 양 — ozEffectLayer.ts 머리말 참고
    emissiveFlowX: { value: s.emissiveFlowX ?? 0 },
    emissiveFlowY: { value: s.emissiveFlowY ?? 0 },
    emissiveCellSpeed: { value: s.emissiveCellSpeed ?? 0 },
    emissiveCellTilingX: { value: s.emissiveCellTilingX ?? 2 },
    emissiveCellTilingY: { value: s.emissiveCellTilingY ?? 4 },
    emissivePixelSpeed: { value: s.emissivePixelSpeed ?? 0 },
    emissivePixelTilingX: { value: s.emissivePixelTilingX ?? 24 },
    emissivePixelTilingY: { value: s.emissivePixelTilingY ?? 24 },
    emissivePixelGap: { value: s.emissivePixelGap ?? 0 },
    emissivePixelShape: { value: s.emissivePixelShape ?? 0 },
    emissivePixelSoft: { value: s.emissivePixelSoft ?? 0 },
    emissivePixelDensity: { value: s.emissivePixelDensity ?? 1 },
    emissiveColorGain: { value: s.emissiveColorGain ?? 1 },
    emissiveFlickerColor: { value: s.emissiveFlickerColor ?? 0 },
    emissiveCellRatio: { value: s.emissiveCellRatio ?? 1 },
    emissiveCellRandom: { value: s.emissiveCellRandom ?? 0 },
    emissiveCellDead: { value: s.emissiveCellDead ?? 0 },
    emissiveCellSoft: { value: s.emissiveCellSoft ?? 0 },
    emissiveGlow: { value: s.emissiveGlow ?? 1 },
    emissivePattern: { value: s.emissivePattern ?? 0 },
    emissiveColorMode: { value: s.emissiveColorMode ?? 0 },
    emissiveSweepSpeed: { value: s.emissiveSweepSpeed ?? 0 },
    emissiveSweepAngle: { value: s.emissiveSweepAngle ?? 0 },
    emissiveSweepCount: { value: s.emissiveSweepCount ?? 1 },
    emissiveSweepWidth: { value: s.emissiveSweepWidth ?? 0.3 },
    emissiveSweepGain: { value: s.emissiveSweepGain ?? 1 },
    emissiveSweepBase: { value: s.emissiveSweepBase ?? 1 },
    emissiveSweepLine: { value: s.emissiveSweepLine ?? 0 },
    emissiveWarp: { value: s.emissiveWarp ?? 0 },
    emissiveWarpScale: { value: s.emissiveWarpScale ?? 6 },
    emissiveWarpSpeed: { value: s.emissiveWarpSpeed ?? 0.5 },
    emissiveWarpAngle: { value: s.emissiveWarpAngle ?? 90 },
    emissiveTintColor: { value: s.emissiveTintColor ?? new ae(1, 1, 1) },
    // emissive 틴트 색공간 보정: pow(tint, gamma). 1.0=raw, ~2.2=sRGB→linear.
    // Unity SetColor 감마처리와 정합되는 값을 아티스트가 튜너로 찾아 확정.
    emissiveTintGamma: { value: s.emissiveTintGamma ?? 1 }
  };
}
const $o = (
  /* glsl */
  `
            uniform sampler2D emissiveMap;
            uniform float emissiveStrength;
            uniform float emissiveDesatStart;
            uniform float emissiveDesatMax;
            uniform vec3 emissiveTintColor;
            uniform float emissiveTintGamma;
            uniform float emissiveFlickerSpeed;
            uniform float emissiveFlickerMin;
            uniform float emissiveFlickerTime;
            uniform float emissivePulsePeriod;
            uniform float emissivePulseMin;
            uniform float emissivePulseSharp;
            uniform float emissiveBlackoutFreq;
            uniform float emissiveBlackoutThreshold;
            uniform float emissiveFlowX;
            uniform float emissiveFlowY;
            uniform float emissiveCellSpeed;
            uniform float emissiveCellTilingX;
            uniform float emissiveCellTilingY;
            uniform float emissivePixelSpeed;
            uniform float emissivePixelTilingX;
            uniform float emissivePixelTilingY;
            uniform float emissivePixelGap;
            uniform float emissivePixelShape;
            uniform float emissivePixelSoft;
            uniform float emissivePixelDensity;
            uniform float emissiveColorGain;
            uniform float emissiveFlickerColor;
            uniform float emissiveCellRatio;
            uniform float emissiveCellRandom;
            uniform float emissiveCellDead;
            uniform float emissiveCellSoft;
            uniform float emissiveGlow;
            uniform float emissivePattern;
            uniform float emissiveColorMode;
            uniform float emissiveSweepSpeed;
            uniform float emissiveSweepAngle;
            uniform float emissiveSweepCount;
            uniform float emissiveSweepWidth;
            uniform float emissiveSweepGain;
            uniform float emissiveSweepBase;
            uniform float emissiveSweepLine;
            uniform float emissiveWarp;
            uniform float emissiveWarpScale;
            uniform float emissiveWarpSpeed;
            uniform float emissiveWarpAngle;
            // 칸별 깜빡임용 노이즈 (Unity SimpleNoise 포팅 — OZEmissiveBlink 와 같은 식)
            float ozFxHash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
            // 픽셀 상승 조각 모양 — p = 칸 가운데 기준 좌표(-0.5..0.5, y 위쪽 +), r = 조각 반지름(틈을 뺀 값). 안쪽이면 1
            float ozFxShape(vec2 p, float r, float kind) {
                if (kind < 1.5) return step(length(p), r);                                 // 원
                if (kind < 2.5) return step(abs(p.x) + abs(p.y), r);                       // 마름모
                if (kind < 3.5) {                                                          // 별 (5각, 좌우·회전 대칭으로 접어 뿔 하나만 판정)
                    const vec2 k1 = vec2(0.809016994, -0.587785252), k2 = vec2(-0.809016994, -0.587785252);
                    p.x = abs(p.x);
                    p -= 2.0 * max(dot(k1, p), 0.0) * k1;
                    p -= 2.0 * max(dot(k2, p), 0.0) * k2;
                    p.x = abs(p.x);
                    p.y -= r;
                    vec2 ba = 0.45 * vec2(0.587785252, 0.809016994) - vec2(0.0, 1.0);
                    return step(p.y * ba.x - p.x * ba.y, 0.0);
                }
                vec2 q = p / max(r, 1e-4) * 1.25 + vec2(0.0, 0.25);                        // 하트 ((x²+y²−1)³ − x²y³ < 0)
                float a = dot(q, q) - 1.0;
                return step(a * a * a - q.x * q.x * q.y * q.y * q.y, 0.0);
            }
            float ozFxValueNoise(vec2 uv) {
                vec2 i = floor(uv);
                vec2 f = fract(uv);
                f = f * f * (3.0 - 2.0 * f);
                float bot = mix(ozFxHash(i), ozFxHash(i + vec2(1.0, 0.0)), f.x);
                float top = mix(ozFxHash(i + vec2(0.0, 1.0)), ozFxHash(i + vec2(1.0, 1.0)), f.x);
                return mix(bot, top, f.y);
            }
            float ozFxNoise(vec2 uv, float scale) {
                return ozFxValueNoise(uv * scale) * 0.125 + ozFxValueNoise(uv * (scale / 2.0)) * 0.25 + ozFxValueNoise(uv * (scale / 4.0)) * 0.5;
            }
            // 일렁임용 노이즈 — 격자를 64 칸 주기로 묶어, 시간으로 민 좌표를 64 로 되감아도 이음매가 없다 (시간이 커져도 정밀도 유지)
            float ozFxWarpNoise(vec2 p) {
                vec2 i = floor(p), f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                float a = ozFxHash(mod(i, 64.0)), b = ozFxHash(mod(i + vec2(1.0, 0.0), 64.0));
                float c = ozFxHash(mod(i + vec2(0.0, 1.0), 64.0)), d = ozFxHash(mod(i + vec2(1.0, 1.0), 64.0));
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
            }
            // 블룸 소스용 압축 전 HDR 발광 (emissive 블록에서 기록 → 블룸 패스에서 출력)
            vec3 ozRawEm = vec3(0.0);
            vec3 ozEmDecode(vec3 c, float g) {
                c = max(c, 0.0);
                #ifdef OZ_U
                if (abs(g - 2.2) < 0.005) return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
                #endif
                return pow(c, vec3(g));
            }
`
), Zo = (
  /* glsl */
  `
            {
                // OZ_PBR_Mask2Tint_Emissive: emissiveMap.rgb + (tintColor * emissiveMap.a * strength)
                // 흐름: 효과 텍스처만 시간에 따라 민다 (속도 0 = 정지, 더하는 값이 0 이라 좌표 그대로). fract 로 묶어 시간이 커져도 정밀도 유지
                // 일렁임 (옵트인): 읽는 자리를 흐르는 물결로 흔든다 — 큰 물결 + 잔물결. 세기 0 이면 좌표 그대로 (예전 결과와 같다)
                vec2 fxUv = vMapUv;
                if (emissiveWarp > 0.0) {
                    float wA = radians(emissiveWarpAngle);
                    vec2 wDir = vec2(cos(wA), sin(wA)), wSide = vec2(-wDir.y, wDir.x);
                    // 물결은 흘러가는 방향으로 길쭉하다 (불꽃의 혀·물줄기) — 가로질러서는 촘촘하게, 흐르는 쪽으로는 2.5배 길게. 흔드는 것도 주로 흐르는 방향
                    vec2 wP = vec2(dot(vMapUv, wSide) * emissiveWarpScale, dot(vMapUv, wDir) * emissiveWarpScale * 0.4 - fract(emissiveFlickerTime * emissiveWarpSpeed / 64.0) * 64.0);
                    vec2 wN = vec2(ozFxWarpNoise(wP), ozFxWarpNoise(wP + vec2(31.7, 11.3))) * 0.65 + vec2(ozFxWarpNoise(wP * 2.0 + vec2(5.2, 47.1)), ozFxWarpNoise(wP * 2.0 + vec2(23.9, 3.4))) * 0.35;
                    wN = (wN - 0.5) * 2.0 * emissiveWarp;
                    fxUv += wDir * wN.x + wSide * wN.y * 0.35;
                }
                vec4 eSample = texture2D(emissiveMap, fxUv + fract(vec2(emissiveFlowX, emissiveFlowY) * emissiveFlickerTime));
                // 픽셀 상승 (옵트인) — UV 를 네모 칸으로 나눠 칸 전체를 세로로 민다. 칸마다 고유 난수가 있고, 지금 그 칸이 놓인 자리의
                // 텍스처 진하기(색·알파 중 큰 값)보다 난수가 크면 안 그린다 → 진하기 1 인 곳은 꽉 차 있고, 옅어지는 쪽으로 올라가면서 하나씩 사라진다.
                // 살아남은 칸은 진하기로 나눠 제 색으로 꽉 채운다 (옅은 곳의 칸도 흐릿하지 않고 또렷한 네모).
                // 이동량은 64칸 주기로 묶어(난수도 64칸 주기) 시간이 커져도 정밀도가 유지되고 이음매가 없다.
                if (emissivePixelSpeed != 0.0) {
                    vec2 pxT = vec2(emissivePixelTilingX, emissivePixelTilingY);
                    float pxOff = fract(emissiveFlickerTime * emissivePixelSpeed / 64.0) * 64.0;
                    vec2 pxPos = vec2(vMapUv.x * pxT.x, vMapUv.y * pxT.y + pxOff);
                    vec2 pxCell = floor(pxPos);
                    float pxRnd = ozFxHash(vec2(pxCell.x, mod(pxCell.y, 64.0)));
                    vec4 pxS = texture2D(emissiveMap, vec2((pxCell.x + 0.5) / pxT.x, (pxCell.y + 0.5 - pxOff) / pxT.y));
                    float pxCov = max(pxS.a, max(pxS.r, max(pxS.g, pxS.b)));
                    if (emissiveColorMode > 0.5) pxCov = pxS.a;                             // 텍스처 색: 진하기 = 알파(투명도)
                    // 다듬기 — 기본값(틈 0 · 밀도 1 · 부드럽게 0 · 모양 네모)에서는 예전 결과 그대로
                    vec2 pxIn = abs(fract(pxPos) - 0.5);                                   // 칸 가운데서의 거리 0..0.5
                    float pxBox = step(max(pxIn.x, pxIn.y), 0.5 - emissivePixelGap * 0.5); // 틈: 칸 안에서 네모를 줄인다
                    if (emissivePixelShape > 0.5) pxBox = ozFxShape((fract(pxPos) - 0.5) * vec2(1.0, -1.0), 0.5 - emissivePixelGap * 0.5, emissivePixelShape); // 모양 (0 = 네모: 위 계산 그대로)
                    float pxLive = step(pxRnd, pxCov * emissivePixelDensity);              // 조각마다 정해진 문턱(난수)보다 진하기가 낮아지면 꺼진다
                    if (emissivePixelSoft > 0.0) pxLive = smoothstep(pxRnd, pxRnd + emissivePixelSoft, pxCov * emissivePixelDensity); // 부드럽게: 문턱에 가까워질수록 서서히 옅어진다 (0 = 위 계산 그대로)
                    float pxOn = pxLive * step(0.004, pxCov) * pxBox;
                    eSample = pxS / max(pxCov, 1e-4) * pxOn;
                    if (emissiveColorMode > 0.5) eSample = vec4(pxS.rgb, pxOn);             // 살아남은 칸 = 그 자리 색을 꽉 채운 네모
                }
                // 흐르는 효과는 옷에만 — 한 메시에 같이 든 맨살(마스크 R = 피부)로는 흘러 들어가지 않게 한다. 흐름 0 이면 건드리지 않는다 (예전 결과 그대로)
                if (emissiveFlowX != 0.0 || emissiveFlowY != 0.0 || emissiveWarp > 0.0) eSample *= 1.0 - texture2D(OZ_FX_SKIN_MAP, vMapUv).r;
                #ifdef OZ_U
                if (emissiveColorMode < 0.5) eSample.rgb = ozEmDecode(eSample.rgb, emissiveTintGamma);
                #endif
                eSample.rgb *= emissiveColorGain;        // 텍스처 색 세기 (1 = 그대로)
                // 색 방식 1 = 텍스처 색 (옵트인, 0 이면 아래 계산이 예전 그대로) — 레이어처럼 읽는다: 알파 = 그림이 있는 곳, 색 = 텍스처 rgb.
                // 빛 = 색 × 알파 × Emissive 강도 를 '고정색' 자리에 넣고 프리셋 색 글로우(알파 몫)는 끈다 → 뒤의 점멸·펄스·칸·블룸 계산은 그대로 탄다.
                float fxCov = 0.0;
                vec3 fxCol = vec3(0.0);
                if (emissiveColorMode > 0.5) {
                    fxCov = eSample.a;
                    fxCol = eSample.rgb;
                    eSample = vec4(fxCol * (fxCov * emissiveStrength), 0.0);
                }
                // 틴트 색공간 보정(Unity SetColor 매칭용): pow(tint, gamma). 1.0=raw.
                vec3 emTint = ozEmDecode(emissiveTintColor, emissiveTintGamma);
                vec3 glow = emTint * eSample.a * emissiveStrength;
                // 발광 점멸 (옵트인) — 주기 다른 사인 3개 합성 유사노이즈, [flickerMin..1].
                // ※ 반드시 휘도 압축 **후**에 곱한다: strength 가 크면(80 등) Reinhard 가
                //   포화돼 압축 전 곱은 화면에서 거의 안 보임 (0.7×80 vs 80 → 압축 후 동일).
                float ozFlicker = 1.0;
                if (emissiveFlickerSpeed > 0.001) {
                    float ft = emissiveFlickerTime * emissiveFlickerSpeed;
                    float fn = 0.55 + 0.30 * sin(ft * 6.2831) + 0.25 * sin(ft * 15.71) + 0.15 * sin(ft * 37.30);
                    ozFlicker = mix(emissiveFlickerMin, 1.0, clamp(fn, 0.0, 1.0));
                }
                // 주기 펄스 (옵트인) — period 초마다 한 사이클. sharp 0 = 사인 호흡, 1 = 사각파(딱딱 점멸).
                // Flicker 가 글로우(틴트×알파)만 흔드는 것과 달리 펄스는 **발광 전체**(텍스처 rgb 포함)를 곱한다 —
                // 해골 눈처럼 "켜졌다 꺼지는" 연출은 텍스처 발광이 남아 있으면 티가 안 남 (2026-09-11 실측).
                float ozPulse = 1.0;
                if (emissivePulsePeriod > 0.001) {
                    float ph = fract(emissiveFlickerTime / emissivePulsePeriod);
                    float sw = 0.5 - 0.5 * cos(ph * 6.2831853);            // 0(꺼짐) → 1(켜짐) → 0
                    float k = mix(0.5, 0.02, clamp(emissivePulseSharp, 0.0, 1.0));
                    float pw = smoothstep(0.5 - k, 0.5 + k, sw);
                    ozPulse = mix(emissivePulseMin, 1.0, pw);
                }
                // 불규칙 암전 (옵트인) — 느린 시간의 1D 값 노이즈(정수 격자 해시 + smoothstep 보간) 0..1 이
                // threshold 아래일 때만 0(완전 꺼짐), 아니면 1. 펄스처럼 **발광 전체**에 곱한다 — 글로우만 끄면 텍스처 발광이 남아 암전으로 안 보임.
                // 해시 입력은 mod 289 로 묶어 시간이 커져도 sin 정밀도 붕괴 없음.
                if (emissiveBlackoutFreq > 0.001) {
                    float bt = emissiveFlickerTime * emissiveBlackoutFreq;
                    float bi = mod(floor(bt), 289.0);
                    float bh0 = fract(sin(bi * 127.1) * 43758.5453);
                    float bh1 = fract(sin(mod(bi + 1.0, 289.0) * 127.1) * 43758.5453);
                    float bn = mix(bh0, bh1, smoothstep(0.0, 1.0, fract(bt)));
                    ozPulse *= step(emissiveBlackoutThreshold, bn);
                }
                // 칸별 깜빡임 (옵트인) — UV 를 tiling 칸으로 나눠 칸마다 다른 박자로 켜졌다 꺼진다 (옛 램프 셰이더 OZEmissiveBlink 와 같은 식).
                // 칸은 흐름과 무관하게 옷에 고정 — 전광판처럼 칸은 제자리, 무늬만 흐를 수 있다.
                if (emissiveCellSpeed > 0.001) {
                    vec2 cellTiling = vec2(emissiveCellTilingX, emissiveCellTilingY);
                    vec2 cellId = floor(vMapUv * cellTiling);
                    float cn = ozFxNoise(cellId / cellTiling, 500.0);
                    float cellOn = step(0.2, fract(cn * emissiveFlickerTime * emissiveCellSpeed));
                    // 낡은 전광판 (옵트인) — 고른 칸(비율 emissiveCellRatio)만, 규칙적인 박자 대신 불규칙하게(emissiveCellRandom) 꺼지거나 파르르 떤다.
                    // 기본값(비율 1 · 불규칙 0 · 죽은 칸 0)에서는 위 cellOn 그대로 — 예전 결과와 같다.
                    float cH = ozFxHash(cellId + 17.0), cD = ozFxHash(cellId + 43.0);
                    float cT = emissiveFlickerTime * emissiveCellSpeed * (0.6 + cH * 0.8) + cD * 7.0;
                    float cR = ozFxHash(cellId + mod(floor(cT), 61.0) * vec2(1.7, 9.2));
                    float cRnd = cR < 0.3 ? 0.0 : (cR < 0.45 ? step(0.5, fract(cT * 9.0)) : 1.0);   // 꺼짐 30% · 떨림 15% · 켜짐 55%
                    cellOn = mix(cellOn, cRnd, emissiveCellRandom);
                    // 부드럽게 (옵트인) — 딱 켜졌다 꺼지는 대신 칸마다 다른 박자·속도로 서서히 밝아졌다 어두워진다 (별 반짝임). 0 이면 위 값 그대로
                    float cTw = 0.5 + 0.5 * sin(6.2831853 * fract(cT));
                    cellOn = mix(cellOn, 0.08 + 0.92 * cTw * cTw, emissiveCellSoft);
                    cellOn = mix(1.0, cellOn, step(cH, emissiveCellRatio));
                    ozPulse *= cellOn * step(emissiveCellDead, cD);
                }
                // 훑는 빛 (옵트인) — 효과 텍스처는 제자리에 두고, 밝은 띠만 UV 위를 한 방향으로 지나가며 그 자리의 효과를 밝힌다 (펄스처럼 발광 전체에 곱).
                // 띠 위치 = UV 를 방향으로 잰 값 × 띠 개수 − 시간 × 속도. 시간 쪽은 fract 로 묶어 정밀도 유지. 속도 0 이면 건드리지 않는다 (예전 결과 그대로)
                if (emissiveSweepSpeed != 0.0) {
                    float swA = radians(emissiveSweepAngle);
                    float swP = fract(dot(vMapUv, vec2(cos(swA), sin(swA))) * emissiveSweepCount - fract(emissiveFlickerTime * emissiveSweepSpeed));
                    float swBand = 1.0 - smoothstep(0.0, max(emissiveSweepWidth, 0.01), abs(swP - 0.5) * 2.0);
                    float swMul = mix(emissiveSweepBase, 1.0 + emissiveSweepGain, swBand);
                    // 선에만 (옵트인) — 텍스처가 진한 곳만 띠에 반응, 옅은 바탕은 그대로 둔다. 0 이면 위 값 그대로
                    if (emissiveSweepLine > 0.0) {
                        float swCov = emissiveColorMode > 0.5 ? fxCov : max(eSample.a, max(eSample.r, max(eSample.g, eSample.b)));
                        swMul = mix(1.0, swMul, smoothstep(emissiveSweepLine - 0.05, emissiveSweepLine + 0.05, swCov));
                    }
                    ozPulse *= swMul;
                }
                // 무늬 (옵트인) — 빛을 더하는 대신 옷의 바탕색에 덮는다 (조명을 받는 일반 색). 발광 양을 0 으로 두면 "빛나지 않고 움직이기만 하는 무늬".
                // 이 자리(emissivemap_fragment)는 조명 계산 전이라 diffuseColor 를 바꾸면 조명에 그대로 반영된다.
                if (emissivePattern > 0.0) {
                    float pCov = max(eSample.a, max(eSample.r, max(eSample.g, eSample.b)));
                    vec3 pCol = clamp(eSample.rgb + emTint * eSample.a, 0.0, 1.0);
                    if (emissiveColorMode > 0.5) { pCov = fxCov; pCol = clamp(fxCol, 0.0, 1.0); }   // 덮는 곳 = 알파, 덮는 색 = 그 색 (밝기와 무관)
                    float pA = clamp(pCov * emissivePattern * ozFlicker * ozPulse, 0.0, 1.0);
                    diffuseColor.rgb = mix(diffuseColor.rgb, pCol, pA);
                }
                // 블룸 소스용 압축 전 HDR 기록 — Unity URP 블룸은 HDR 원본을 받으므로
                // 셀렉티브 블룸 패스(selectiveBloom.ts)가 이 값을 출력해 동일 구조를 만든다.
                // 고정색도 점멸 (0 = 옛 규칙). 색 방식 1·2 는 빛이 전부 이 자리에 있으므로 항상 같이 흔든다
                vec3 ozFixed = eSample.rgb * mix(1.0, ozFlicker, emissiveColorMode > 0.5 ? 1.0 : emissiveFlickerColor);
                ozRawEm = (ozFixed + glow * ozFlicker) * ozPulse;
                ozRawEm *= emissiveGlow;                 // 발광 양 (1 = 그대로, 0 = 빛 없음 → 블룸 대상에서도 빠짐)
                // 소프트 하이라이트 압축 — 유니티 에디터는 EDR(HDR 디스플레이)로 출력해
                // 강한 글로우에도 베이스 질감이 보존되지만, 웹 SDR 캔버스는 1.0 하드클립으로
                // 평평해짐 ("질감 죽는" 아티스트 지적, C_012 코 실측 2026-08-12).
                // ※ 반드시 휘도 기준 Reinhard — 채널별 압축은 색 비율을 뭉개 탈색됨
                //   (빨강 (19,.5,.5) → (.95,.33,.33), 38:1 → 2.9:1 붕괴 실측).
                //   휘도만 압축하고 색조/채도는 유지. headroom 1.2 = 셀렉티브 블룸(0.45) 발화 유지.
                float gLum = dot(glow, vec3(0.2126, 0.7152, 0.0722));
                if (gLum > 1e-4) {
                    float gLumC = gLum / (1.0 + gLum) * 1.2;
                    // 채널 하한 = 유니티식 SDR 채널 포화 min(raw, 1). 휘도 압축이 부채널을
                    // 원값 이하로 끌어내리지 못하게 — #e02707×30 에서 G=0.48 이 0.09 로 죽어
                    // 유니티(노랑) 대비 코랄로 틀어지던 실측 케이스 (C_012 3번 팔레트 2026-08-12).
                    // 순색 틴트(부채널≈0)와 시안 호박은 수치 불변.
                    glow = max(glow * (gLumC / gLum), min(glow, vec3(1.0)));
                    // 최상단 흰색 롤오프 — EDR/필름 특성: 아주 밝은 코어는 파스텔로 탈색.
                    // 시작점/강도는 아트 튜닝 노브 (스튜디오 '뷰어 보정' 슬라이더).
                    float desat = smoothstep(emissiveDesatStart, emissiveDesatStart + 0.45, gLumC) * emissiveDesatMax;
                    glow = mix(glow, vec3(gLumC), desat);
                }
                // 색 방식 1·2: 강도를 올려도 흰색으로 날아가지 않게 — 가장 밝은 채널이 1 을 넘으면 색 비율을 지킨 채 1 로 맞추고(1 이하는 그대로),
                // 넘친 만큼만 조금 뽀얗게 한다. 블룸 소스(ozRawEm)는 위에서 줄이기 전 값을 이미 받았으므로 강도만큼 번진다.
                #ifndef OZ_U
                if (emissiveColorMode > 0.5) {
                    float fxMax = max(ozFixed.r, max(ozFixed.g, ozFixed.b));
                    if (fxMax > 1.0) ozFixed = mix(ozFixed / fxMax, vec3(1.0), 0.3 * smoothstep(1.0, 12.0, fxMax));
                }
                #endif
                vec3 emTotal = (ozFixed + glow * ozFlicker) * ozPulse;
                emTotal *= emissiveGlow;
                totalEmissiveRadiance += emTotal;

                // 베이스 억제 안 함 — Unity처럼 순수 additive(Linear Dodge): 이미시브는 라이팅된 베이스 위에 가산.
                // (이전엔 diffuseColor *= (1-emMask) 로 억제해 bloom 색을 순수하게 뽑았으나, 베이스 재질감이
                //  사라지는 부작용 → 아티스트 요구(재질 유지 + add)에 맞춰 제거. bloom 은 베이스 색 일부 포함될 수 있음.)
            }
`
);
function Pm(s) {
  var t, n;
  const e = (t = s == null ? void 0 : s.userData) == null ? void 0 : t.uniforms;
  return !!(e != null && e.emissiveMap) && (((n = e.emissiveGlow) == null ? void 0 : n.value) ?? 1) > 0;
}
function Dm(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (l, c, h) => new ae(l, c, h).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = !!e.emissiveMap, a = {
    maskTintMap1: { value: e.maskTintMap1 },
    maskTintMap2: { value: e.maskTintMap2 },
    tintColorR1: e.tintColorR1Uniform ?? { value: e.tintColorR1 ?? n(0.957, 0.769, 0.725) },
    tintColorG1: { value: e.tintColorG1 ?? n(0.996, 0.553, 0.688) },
    tintColorB1: { value: e.tintColorB1 ?? n(0.902, 0.902, 0.902) },
    tintColorR2: { value: e.tintColorR2 ?? new ae(0, 0, 0) },
    tintColorG2: { value: e.tintColorG2 ?? new ae(0, 0, 0) },
    tintColorB2: { value: e.tintColorB2 ?? new ae(0, 0, 0) },
    rimEdgePower: { value: e.rimEdgePower ?? 5 },
    rimPower: { value: e.rimPower ?? 0.4 },
    rimColor: { value: e.rimColor ?? n(0.447, 0.565, 0.671) },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {},
    // 셀렉티브 블룸 모드 스위치 — 발광 여부와 무관하게 전 OZ 머티리얼 바인딩.
    // 비발광 재질도 블룸 소스 패스에서 검정 출력 (멀티 머티리얼 메시의 비발광 서브재질 오염 방지)
    ozBloomSrc: Br,
    ...r ? Ko(e) : {},
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.onBeforeCompile = (l) => {
    for (const [_, d] of Object.entries(a))
      l.uniforms[_] = d;
    const c = i ? (
      /* glsl */
      `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
    ) : "", h = r ? `#define OZ_FX_SKIN_MAP maskTintMap1
` + $o : "", u = (
      /* glsl */
      `
            uniform sampler2D maskTintMap1;
            uniform sampler2D maskTintMap2;
            uniform vec3 tintColorR1;
            uniform vec3 tintColorG1;
            uniform vec3 tintColorB1;
            uniform vec3 tintColorR2;
            uniform vec3 tintColorG2;
            uniform vec3 tintColorB2;
            uniform float rimEdgePower;
            uniform float rimPower;
            uniform vec3 rimColor;
            uniform float volumeMaskEnable;
            uniform vec3 volumeMaskCenter;
            uniform float volumeMaskRadius;
            uniform float ozBloomSrc;
            varying vec3 vObjPosition;
            ${c}
            ${h}
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <common>",
      u + `
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <common>",
      `varying vec3 vObjPosition;
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <skinning_vertex>",
      `#include <skinning_vertex>
vObjPosition = transformed;`
    );
    const f = (
      /* glsl */
      `
            // Volume Mask: 오브젝트 공간에서 중심점 기준 구면 클리핑
            if (volumeMaskEnable > 0.5) {
                float vmd = distance(vObjPosition, volumeMaskCenter);
                if (vmd > volumeMaskRadius) discard;
            }
            {
                vec2 maskUv = vMapUv;
                vec4 mask1 = texture2D(maskTintMap1, maskUv);
                vec4 mask2 = texture2D(maskTintMap2, maskUv);

                vec3 tint1 = mask1.r * tintColorR1 + mask1.g * tintColorG1 + mask1.b * tintColorB1;
                vec3 tint2 = mask2.r * tintColorR2 + mask2.g * tintColorG2 + mask2.b * tintColorB2;
                vec3 blendSrc = tint1 + tint2;

                // Hard Light blend
                vec3 base = diffuseColor.rgb;
                vec3 result1 = 1.0 - 2.0 * (1.0 - base) * (1.0 - blendSrc);
                vec3 result2 = 2.0 * base * blendSrc;
                vec3 zeroOrOne = step(blendSrc, vec3(0.5));
                vec3 hardLight = result2 * zeroOrOne + (1.0 - zeroOrOne) * result1;

                diffuseColor.rgb = mix(base, hardLight, mask1.a);
            }
        `
    );
    if (l.fragmentShader = l.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + f
    ), i) {
      const _ = (
        /* glsl */
        `
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
            `
      );
      l.fragmentShader = l.fragmentShader.replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
` + _
      );
      const d = (
        /* glsl */
        `
                {
                    vec4 pbrMask2 = texture2D(pbrMaskMap, vMapUv);
                    float smoothness = (1.0 - pbrMask2.a) * smoothnessIntensity;
                    roughnessFactor = 1.0 - smoothness;
                }
            `
      );
      l.fragmentShader = l.fragmentShader.replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
` + d
      );
      const p = (
        /* glsl */
        `
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
            `
      );
      l.fragmentShader = l.fragmentShader.replace(
        "#include <aomap_fragment>",
        `#include <aomap_fragment>
` + p
      );
    }
    const g = (
      /* glsl */
      `
            {
                vec3 viewDir = normalize(vViewPosition);
                float NdotV = dot(normal, viewDir);
                float fresnel = 1.0 - clamp(NdotV, 0.0, 1.0);
                float rim = pow(fresnel, rimEdgePower) * rimPower;
                totalEmissiveRadiance += rim * rimColor;
            }
            ${r ? Zo : ""}
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + g
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
if (ozBloomSrc > 0.5) { gl_FragColor = vec4(${r ? "ozRawEm" : "vec3(0.0)"}, 1.0); }`
    );
  };
  const o = "OZMask2Tint" + (i ? "_PBR" : "") + (r ? "_E" : "");
  return t.customProgramCacheKey = () => o + kr(), t.userData.uniforms = a, t;
}
function Lm(s) {
  return s.userData.decalSlots ?? null;
}
function Im(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (m, g, _) => new ae(m, g, _).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = !!e.emissiveMap, a = e.decalSlots ?? 0, o = a > 0, l = [], c = {};
  c.decalAlphaCut = { value: e.decalAlphaCut ?? 0.03 }, c.decalAlphaKnee = { value: e.decalAlphaKnee ?? 0.1 };
  let h = null;
  if (o) {
    const m = new Uint8Array([0, 0, 0, 0]);
    h = new Es(m, 1, 1, 1023), h.needsUpdate = !0;
  }
  for (let m = 0; m < a; m++) {
    const g = {
      enabled: { value: 0 },
      texture: { value: h },
      color: { value: new Ve(1, 1, 1, 1) },
      invMatrix: { value: new Ce() },
      useSkinColor: { value: 0 }
    };
    l.push(g), c[`decalEnabled${m}`] = g.enabled, c[`decalTex${m}`] = g.texture, c[`decalColor${m}`] = g.color, c[`decalInvMatrix${m}`] = g.invMatrix, c[`decalUseSkinColor${m}`] = g.useSkinColor;
  }
  const u = {
    maskTintMap: { value: e.maskTintMap },
    tintColorR: e.tintColorRUniform ?? { value: e.tintColorR ?? n(0.957, 0.769, 0.725) },
    tintColorG: { value: e.tintColorG ?? n(0, 0, 0) },
    tintColorB: { value: e.tintColorB ?? n(0, 0, 0) },
    rimEdgePower: { value: e.rimEdgePower ?? 7.5 },
    rimPower: { value: e.rimPower ?? 0.4 },
    rimColor: { value: e.rimColor ?? n(0.447, 0.565, 0.671) },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 1 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {},
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 },
    ...c,
    ...r ? { ozBloomSrc: Br, ...Ko(e) } : {}
  };
  t.onBeforeCompile = (m) => {
    for (const [A, w] of Object.entries(u))
      m.uniforms[A] = w;
    const g = i ? (
      /* glsl */
      `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
    ) : "";
    let _ = "";
    if (o) {
      _ = `varying vec3 vWorldPosition;
uniform float decalAlphaCut;
uniform float decalAlphaKnee;
`;
      for (let A = 0; A < a; A++)
        _ += `
            uniform float decalEnabled${A};
            uniform sampler2D decalTex${A};
            uniform vec4 decalColor${A};
            uniform mat4 decalInvMatrix${A};
            uniform float decalUseSkinColor${A};
                `;
    }
    const d = (
      /* glsl */
      `
            uniform sampler2D maskTintMap;
            uniform vec3 tintColorR;
            uniform vec3 tintColorG;
            uniform vec3 tintColorB;
            uniform float rimEdgePower;
            uniform float rimPower;
            uniform vec3 rimColor;
            uniform float volumeMaskEnable;
            uniform vec3 volumeMaskCenter;
            uniform float volumeMaskRadius;
            varying vec3 vObjPosition;
            ${g}
            ${_}
            ${r ? `uniform float ozBloomSrc;
#define OZ_FX_SKIN_MAP maskTintMap
` + $o : ""}
        `
    );
    m.fragmentShader = m.fragmentShader.replace(
      "#include <common>",
      d + `
#include <common>`
    );
    let p = `varying vec3 vObjPosition;
`;
    o && (p += `varying vec3 vWorldPosition;
`), m.vertexShader = m.vertexShader.replace(
      "#include <common>",
      p + "#include <common>"
    );
    let S = `#include <skinning_vertex>
vObjPosition = transformed;`;
    o && (S += `
vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`), m.vertexShader = m.vertexShader.replace(
      "#include <skinning_vertex>",
      S
    );
    const b = (
      /* glsl */
      `
            // Volume Mask: 오브젝트 공간에서 중심점 기준 구면 클리핑
            if (volumeMaskEnable > 0.5) {
                float vmd = distance(vObjPosition, volumeMaskCenter);
                if (vmd > volumeMaskRadius) discard;
            }
            {
                vec2 maskUv = vMapUv;
                vec4 mask = texture2D(maskTintMap, maskUv);

                vec3 tint = mask.r * tintColorR + mask.g * tintColorG + mask.b * tintColorB;

                // Hard Light blend
                vec3 base = diffuseColor.rgb;
                vec3 result1 = 1.0 - 2.0 * (1.0 - base) * (1.0 - tint);
                vec3 result2 = 2.0 * base * tint;
                vec3 zeroOrOne = step(tint, vec3(0.5));
                vec3 hardLight = result2 * zeroOrOne + (1.0 - zeroOrOne) * result1;

                diffuseColor.rgb = mix(base, hardLight, mask.a);
            }
        `
    );
    let x = "";
    if (o)
      for (let A = 0; A < a; A++)
        x += /* glsl */
        `
            if (decalEnabled${A} > 0.5) {
                vec4 dLocal${A} = decalInvMatrix${A} * vec4(vWorldPosition, 1.0);
                vec3 dUv${A} = dLocal${A}.xyz / dLocal${A}.w;
                if (dUv${A}.x >= 0.0 && dUv${A}.x <= 1.0 &&
                    dUv${A}.y >= 0.0 && dUv${A}.y <= 1.0 &&
                    dUv${A}.z >= 0.0 && dUv${A}.z <= 1.0) {
                    vec2 decalUv${A} = vec2(1.0 - dUv${A}.x, 1.0 - dUv${A}.y);
                    vec4 dSample${A} = texture2D(decalTex${A}, decalUv${A});
                    // 저알파 안개 컷 — 소프트 데칼(블러시 등)은 본체 밖으로 알파 1~3% 띠가 넓게 퍼져 있고,
                    // 어두운 피부에선 그 8bit 단계가 등고선 얼룩으로 드러난다 (2026-09-11 Blush_005 실측).
                    // cut 이하는 0, knee 까지 부드럽게 복귀 — 원본 알파에 곱하는 계수라 본체 그라데이션은 유지.
                    float dHaze${A} = smoothstep(decalAlphaCut, decalAlphaKnee, dSample${A}.a);
                    float dAlpha${A} = dSample${A}.a * dHaze${A} * decalColor${A}.a;
                    vec3 dTexColor${A} = dSample${A}.rgb;

                    if (decalUseSkinColor${A} > 0.5) {
                        // OZ_Decal_Skin: Blend(base=skinColor, blend=tex, mode=Multiply)
                        vec3 dResult${A} = tintColorR * dTexColor${A};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dResult${A}, dAlpha${A});
                    } else {
                        // OZ_Decal_Color: Blend(base=_Color, blend=tex, mode=HardLight)
                        vec3 dBase${A} = decalColor${A}.rgb;
                        vec3 dBlend${A} = dTexColor${A};
                        vec3 dHL1_${A} = 1.0 - 2.0 * (1.0 - dBase${A}) * (1.0 - dBlend${A});
                        vec3 dHL2_${A} = 2.0 * dBase${A} * dBlend${A};
                        vec3 dStep${A} = step(dBlend${A}, vec3(0.5));
                        vec3 dHardLight${A} = dHL2_${A} * dStep${A} + (1.0 - dStep${A}) * dHL1_${A};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dHardLight${A}, dAlpha${A});
                    }
                }
            }
                `;
    if (m.fragmentShader = m.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + b + x
    ), i) {
      const A = (
        /* glsl */
        `
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
            `
      );
      m.fragmentShader = m.fragmentShader.replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
` + A
      );
      const w = (
        /* glsl */
        `
                {
                    vec4 pbrMask2 = texture2D(pbrMaskMap, vMapUv);
                    float smoothness = (1.0 - pbrMask2.a) * smoothnessIntensity;
                    roughnessFactor = 1.0 - smoothness;
                }
            `
      );
      m.fragmentShader = m.fragmentShader.replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
` + w
      );
      const I = (
        /* glsl */
        `
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
            `
      );
      m.fragmentShader = m.fragmentShader.replace(
        "#include <aomap_fragment>",
        `#include <aomap_fragment>
` + I
      );
    }
    const C = (
      /* glsl */
      `
            {
                vec3 viewDir = normalize(vViewPosition);
                float NdotV = dot(normal, viewDir);
                float fresnel = 1.0 - clamp(NdotV, 0.0, 1.0);
                float rim = pow(fresnel, rimEdgePower) * rimPower;
                totalEmissiveRadiance += rim * rimColor;
            }
            ${r ? Zo : ""}
        `
    );
    m.fragmentShader = m.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + C
    ), r && (m.fragmentShader = m.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
if (ozBloomSrc > 0.5) { gl_FragColor = vec4(ozRawEm, 1.0); }`
    ));
  };
  const f = o ? `_D${a}` : "";
  return t.customProgramCacheKey = () => (i ? "OZMaskTint_PBR" : "OZMaskTint") + f + (r ? "_E" : "") + kr(), t.userData.uniforms = u, o && (t.userData.decalSlots = l), t;
}
function Fm(s, e) {
  const t = s.clone(), n = !!e.blend, i = n || e.enableSecondaryLobe === !1, r = (l, c, h) => new ae(l, c, h).convertSRGBToLinear(), a = {
    hairBaseColor: { value: e.baseColor ?? r(0.752, 0.535, 0.475) },
    hairSpecColor: { value: e.specColor ?? r(0.567, 0.404, 0.397) },
    hairSmoothness: { value: e.smoothness ?? 0.65 },
    hairSpecShift: { value: -(e.specularShift ?? -1) },
    hairSpecExponent: { value: e.specularExponent ?? 0 },
    hairSpecTint: { value: e.specularTint ?? new ae(1, 1, 1) },
    hairSecSpecShift: { value: -(e.secondarySpecularShift ?? 0.18) },
    hairSecSpecExponent: { value: e.secondarySpecularExponent ?? 0.75 },
    hairSecSpecTint: { value: e.secondarySpecularTint ?? new ae(1, 1, 1) },
    hairRimTransmission: { value: e.hairRim ?? 3 },
    // rim 조합(아트 확정값): 외곽(지오메트리) 가중치 / 굴곡(노말맵) 가중치 / 날카로움 / 합성(1=max,0=add)
    // 외곽 1 + 굴곡 1.5, max 합성 (아트 확정, 2026-07).
    hairRimGeom: { value: e.rimGeom ?? 1 },
    hairRimBump: { value: e.rimBump ?? 1.5 },
    hairRimExp: { value: e.rimExp ?? 4 },
    hairRimMax: { value: e.rimMax ?? 1 },
    hairShiftDir: { value: e.shiftDirection ?? 1 },
    hairMaskMap: { value: e.maskMap ?? null },
    hairAlphaClip: { value: e.blend ? 0 : e.alphaClip ?? 0.5 },
    hairSpecIntensity: { value: 1 },
    hairGeomNormalTBN: { value: 0 },
    hairGaussianSpec: { value: 0 },
    hairSpecAAScale: { value: 0 },
    // 헤어 앰비언트(GI) — Unity WebAvatarScene 의 m_AmbientSkyColor (0.362,0.386,0.434 linear,
    // 스카이박스 없음 → 플랫). 웹 씬의 AmbientLight(#6e6b68)×1/π 는 이보다 ~7x 어두워
    // 그늘면이 죽던 원인 (2026-08-11 매칭 스크린샷 실측). Unity GI = bakedGI × albedo × AO 재현.
    hairAmbientColor: { value: e.ambientColor ?? new ae(0.362, 0.386, 0.434) },
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.color.set(1, 1, 1), t.envMapIntensity = 0, t.side = e.doubleSided !== !1 ? 2 : 0, e.blend && (t.transparent = !0, t.depthWrite = !1, t.premultipliedAlpha = !0, t.alphaTest = 0);
  const o = e.normalInten ?? 1;
  if (e.normalMap)
    t.normalMap = e.normalMap, t.normalScale.set(o, o);
  else if (!t.normalMap) {
    const l = new Uint8Array([128, 128, 255, 255]), c = new Es(l, 1, 1, 1023);
    c.needsUpdate = !0, t.normalMap = c, t.normalScale.set(1, 1);
  }
  return t.onBeforeCompile = (l) => {
    for (const [m, g] of Object.entries(a))
      l.uniforms[m] = g;
    const c = (
      /* glsl */
      `
            uniform vec3 hairBaseColor;
            uniform vec3 hairSpecColor;
            uniform float hairSmoothness;
            uniform float hairSpecShift;
            uniform float hairSpecExponent;
            uniform vec3 hairSpecTint;
            uniform float hairSecSpecShift;
            uniform float hairSecSpecExponent;
            uniform vec3 hairSecSpecTint;
            uniform float hairRimTransmission;
            uniform float hairRimGeom;
            uniform float hairRimBump;
            uniform float hairRimExp;
            uniform float hairRimMax;
            uniform float hairShiftDir;
            uniform sampler2D hairMaskMap;
            uniform float hairAlphaClip;
            uniform float hairSpecIntensity;
            uniform float hairGeomNormalTBN;
            uniform float hairGaussianSpec;
            uniform float hairSpecAAScale;
            uniform vec3 hairAmbientColor;
            uniform float volumeMaskEnable;
            uniform vec3 volumeMaskCenter;
            uniform float volumeMaskRadius;
            varying vec3 vObjPosition;
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <common>",
      c + `
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <common>",
      `varying vec3 vObjPosition;
#include <common>`
    ), l.vertexShader = l.vertexShader.replace(
      "#include <skinning_vertex>",
      `#include <skinning_vertex>
vObjPosition = transformed;`
    );
    const h = (
      /* glsl */
      `
            {
                // Volume Mask: 오브젝트 공간에서 중심점 기준 구면 클리핑
                if (volumeMaskEnable > 0.5) {
                    float vmd = distance(vObjPosition, volumeMaskCenter);
                    if (vmd > volumeMaskRadius) discard;
                }
                if (diffuseColor.a < hairAlphaClip) discard;
                diffuseColor.rgb *= hairBaseColor;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + h
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <normal_fragment_maps>",
      `vec3 _hairGeomNormal = normal;
#include <normal_fragment_maps>`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>
metalnessFactor = 0.0;`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>
roughnessFactor = 1.0;`
    );
    const u = (
      /* glsl */
      `
            {
                // ── Re-read base map for hair albedo (diffuseColor was zeroed) ──
                #ifdef USE_MAP
                    vec4 _hairBaseMap = texture2D(map, vMapUv);
                #else
                    vec4 _hairBaseMap = vec4(1.0);
                #endif
                vec3 hairAlbedo = hairBaseColor * _hairBaseMap.rgb;

                // ── Mask Map: R=Smoothness mult, G=AO, B=HairShift ──
                vec4 hairMask = texture2D(hairMaskMap, vMapUv);
                float maskSmoothness = hairMask.r;
                float maskAO = hairMask.g;
                float maskShift = hairMask.b;

                // Specular color = _SpecColor * MaskMap.R
                vec3 hairSpec = hairSpecColor * maskSmoothness;

                // ── TBN vectors (view space) ──
                // Unity: TBN은 vertex 보간된 geometry basis에서 구축.
                // 노말맵은 셰이딩 노말만 변경하고, TBN 자체를 왜곡하지 않음.
                // → TBN 구축에는 geometry normal, 라이팅에는 normal-mapped normal 사용.
                // Unity ShaderGraph Two-Sided 패리티: OZ_Hair 그래프엔 IsFrontFace 분기가 없어
                // 뒷면도 앞면과 같은 버텍스 노멀로 라이팅된다. three 는 DOUBLE_SIDED 에서
                // faceDirection 으로 노멀을 뒤집어(뒷면=역광) 위에서 내려다볼 때 스파이크
                // 안쪽(뒷면)이 급격히 어두워졌음 (H_031 실측 2026-08-11) → 여기서 되돌린다.
                vec3 N_tbn = _hairGeomNormal * faceDirection;
                vec3 N = normal * faceDirection;
                #ifdef USE_TANGENT
                    // 노멀을 unflip 했으므로 T/B 도 raw varying 그대로 (Unity 와 동일 기저)
                    vec3 T = normalize(vTangent);
                    // vBitangent = cross(N, T) * tangent.w (탄젠트 핸드니스 포함)
                    vec3 B = normalize(vBitangent);
                    // Re-orthogonalize against geometry normal
                    T = normalize(T - N_tbn * dot(N_tbn, T));
                    B = normalize(B - N_tbn * dot(N_tbn, B));
                #else
                    // Fallback: derive from derivatives
                    vec3 T = normalize(dFdx(vViewPosition));
                    vec3 B = normalize(cross(N_tbn, T));
                #endif

                // Strand direction: _StrandDir = 0 → bitangent
                vec3 strandDir = B;

                // ── Smoothness → BlinnPhong Exponent pipeline ──
                // Unity: primarySmoothness = _SpecularExponent * _Smoothness
                float priSmooth = hairSpecExponent * hairSmoothness;
                float secSmooth = hairSecSpecExponent * hairSmoothness;

                // PerceptualSmoothnessToPerceptualRoughness → PerceptualRoughnessToRoughness → BlinnPhongExponent
                float priPR = 1.0 - priSmooth;
                float priR  = priPR * priPR;
                float priExp = clamp(2.0 / max(priR * priR, 0.0001) - 2.0, 0.0001, 100000.0);

                float secPR = 1.0 - secSmooth;
                float secR  = secPR * secPR;
                float secExp = clamp(2.0 / max(secR * secR, 0.0001) - 2.0, 0.0001, 100000.0);

                // ── Shift tangents ──
                // Unity ShaderGraph: MaskMap.B × _SpecularShift를 미리 곱한 후 Lighting_half에 전달.
                // ShiftTangent_Lux(strandDir, N, shift) = normalize(strandDir + N * shift)
                float shift1 = hairShiftDir * maskShift * hairSpecShift;
                float shift2 = hairShiftDir * maskShift * hairSecSpecShift;
                vec3 t1 = normalize(strandDir + N * shift1);
                vec3 t2 = normalize(strandDir + N * shift2);

                // ── View direction ──
                vec3 V = normalize(vViewPosition);
                float geomNdotV = dot(N_tbn, V);

                vec3 totalHairDirect = vec3(0.0);

                // ── Directional lights ──
                #if NUM_DIR_LIGHTS > 0
                for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
                    vec3 L = directionalLights[i].direction;
                    vec3 lightColor = directionalLights[i].color;

                    float NdotL = dot(N, L);
                    float LdotV = dot(L, V);
                    float invLenLV = inversesqrt(max(2.0 * LdotV + 2.0, 0.0001));
                    vec3 H = (L + V) * invLenLV;

                    // D_KajiyaKay primary lobe
                    float TdotH1 = dot(t1, H);
                    float sinTHSq1 = clamp(1.0 - TdotH1 * TdotH1, 0.0, 1.0);
                    float dirAttn1 = clamp(TdotH1 + 1.0, 0.0, 1.0);
                    float norm1 = (priExp + 2.0) * 0.5 * RECIPROCAL_PI;
                    float priLobe = hairGaussianSpec > 0.5
                        ? exp(-priExp * 0.5 * (1.0 - sinTHSq1))
                        : pow(max(sinTHSq1, 0.0001), 0.5 * priExp);
                    vec3 hairSpec1 = hairSpecTint * dirAttn1 * norm1 * priLobe;

                    // D_KajiyaKay secondary lobe
                    ${i ? "// _EnableSecondaryLobe=0" : ""}
                    float TdotH2 = dot(t2, H);
                    float sinTHSq2 = clamp(1.0 - TdotH2 * TdotH2, 0.0, 1.0);
                    float dirAttn2 = clamp(TdotH2 + 1.0, 0.0, 1.0);
                    float norm2 = (secExp + 2.0) * 0.5 * RECIPROCAL_PI;
                    float secLobe = hairGaussianSpec > 0.5
                        ? exp(-secExp * 0.5 * (1.0 - sinTHSq2))
                        : pow(max(sinTHSq2, 0.0001), 0.5 * secExp);
                    vec3 hairSpec2 = ${i ? "vec3(0.0)" : "hairSecSpecTint * dirAttn2 * norm2 * secLobe"};

                    // Fresnel (F_Schlick)
                    float LdotH = clamp(dot(L, H), 0.0, 1.0);
                    vec3 F = hairSpec + (1.0 - hairSpec) * pow(1.0 - LdotH, 5.0);

                    // Specular anti-aliasing: 끝자락에서 노말이 급변하면
                    // pow(sinTHSq, priExp)가 픽셀마다 튀어 노이즈 발생.
                    // fwidth(N)으로 노말 변화량 감지 → 스페큘러 감쇠.
                    float normalVariance = length(fwidth(N));
                    float specAA = 1.0 / (1.0 + normalVariance * hairSpecAAScale);

                    vec3 specR = hairSpecIntensity * specAA * 0.25 * F * (hairSpec1 + hairSpec2)
                               * clamp(NdotL, 0.0, 1.0)
                               * clamp(geomNdotV * 65504.0, 0.0, 1.0);

                    // Transmission (Yibing/Morten hybrid scatter model)
                    // rim(scatterFresnel2) = 외곽(geom) + 굴곡(노말맵 N) 조합. 아트 비교용 파라미터.
                    //   hairRimGeom=외곽 강도, hairRimBump=굴곡 강도, hairRimExp=날카로움, hairRimMax(1=max,0=add)
                    float geomRim = pow(clamp(1.0 - geomNdotV, 0.0, 1.0), hairRimExp);
                    float nrmRim  = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), hairRimExp);
                    float scatterFresnel1 = pow(clamp(-LdotV, 0.0, 1.0), 9.0)
                                          * pow(clamp(1.0 - geomNdotV * geomNdotV, 0.0, 1.0), 12.0);
                    float scatterFresnel2 = hairRimMax > 0.5
                        ? max(geomRim * hairRimGeom, nrmRim * hairRimBump)
                        : (geomRim * hairRimGeom + nrmRim * hairRimBump);
                    float transmission = scatterFresnel1 + hairRimTransmission * scatterFresnel2;
                    vec3 specT = hairAlbedo * transmission;

                    // Diffuse
                    vec3 hairDiffuse = hairAlbedo * clamp(NdotL, 0.0, 1.0);

                    totalHairDirect += (hairDiffuse + specR + specT) * lightColor * RECIPROCAL_PI;
                }
                #endif

                // ── Ambient / GI — Unity URP GlobalIllumination 재현 ──
                // Unity: indirectDiffuse = bakedGI(플랫 앰비언트) × albedo × occlusion (1/π 없음).
                // three 기본 indirectDiffuse(AmbientLight #6e6b68 × 1/π)는 ~7x 어두워
                // 그늘면이 유니티보다 죽었음 → 씬 라이트와 분리해 Unity 상수로 직접 계산.
                vec3 totalHairAmbient = hairAlbedo * hairAmbientColor * maskAO;

                totalEmissiveRadiance += totalHairDirect + totalHairAmbient;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + u
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
            reflectedLight.directDiffuse = vec3(0.0);
            reflectedLight.directSpecular = vec3(0.0);
            reflectedLight.indirectSpecular = vec3(0.0);
            reflectedLight.indirectDiffuse = vec3(0.0);`
    );
    const f = "gl_FragColor.rgb = min(gl_FragColor.rgb, vec3(1.0));";
    n ? l.fragmentShader = l.fragmentShader.replace(
      "#include <premultiplied_alpha_fragment>",
      `${f}
#include <premultiplied_alpha_fragment>`
    ) : l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
${f}`
    );
  }, t.customProgramCacheKey = () => e.blend ? "OZHairBlend" : i ? "OZHair_NoSec" : "OZHair", t.userData.hairUniforms = a, t;
}
function Um(s, e) {
  const t = s.clone();
  t.transparent = !0, t.depthWrite = !1, t.side = 2, t.alphaTest = 0, t.metalness = 0, t.roughness = 1, t.envMapIntensity = 0, e.normalMap && (e.normalMap.flipY = !1, e.normalMap.colorSpace = un, t.normalMap = e.normalMap, t.normalMapType = 0, t.normalScale = new ze(1, 1), t.userData._BumpScale = 1);
  const n = (o, l, c) => new ae(o, l, c).convertSRGBToLinear(), i = e.uvTransform ?? {
    rotation: { value: 0 },
    scale: { value: 1.5 },
    offsetX: { value: 0 },
    offsetY: { value: 0 }
  }, r = {
    maskTintMap: { value: e.maskTintMap },
    tintColorR: e.tintColorRUniform ?? { value: e.tintColorR ?? n(0.957, 0.769, 0.725) },
    tintColorG: { value: e.tintColorG ?? n(0, 0, 0) },
    tintColorB: { value: e.tintColorB ?? n(0, 0, 0) },
    uvScaleYEyeBlink: e.uvScaleYEyeBlink ?? { value: 1 },
    uvRotation: i.rotation,
    uvScale: i.scale,
    uvOffsetX: i.offsetX,
    uvOffsetY: i.offsetY
  };
  t.onBeforeCompile = (o) => {
    for (const [h, u] of Object.entries(r))
      o.uniforms[h] = u;
    const l = (
      /* glsl */
      `
            uniform sampler2D maskTintMap;
            uniform vec3 tintColorR;
            uniform vec3 tintColorG;
            uniform vec3 tintColorB;
            uniform float uvRotation;
            uniform float uvScale;
            uniform float uvOffsetX;
            uniform float uvOffsetY;
            uniform float uvScaleYEyeBlink;
        `
    );
    o.fragmentShader = o.fragmentShader.replace(
      "#include <common>",
      l + `
#include <common>`
    );
    const c = (
      /* glsl */
      `
            // ── UV Transform (Unity OZ_UV_Transform SubGraph) ──
            // 순서: offset → center → rotate → scale → uncenter
            vec2 _spriteUv = vMapUv;
            {
                // 1. Offset (이동한 위치가 회전 중심이 됨)
                vec2 shifted = _spriteUv + vec2(uvOffsetX, -uvOffsetY);
                vec2 centered = shifted - 0.5;
                // 2. Rotate
                float cosR = cos(uvRotation);
                float sinR = sin(uvRotation);
                vec2 rotated = vec2(
                    centered.x * cosR - centered.y * sinR,
                    centered.x * sinR + centered.y * cosR
                );
                // 3. Scale: Unity 공식 = rotated * (2 - Scale)
                //    Scale=1.5 → *0.5 → 텍스처 확대 (기본)
                //    Scale=1.0 → *1.0 → identity
                //    Scale=0.0 → *2.0 → 텍스처 축소
                // EyeBlink: Y 스케일 = _UV_Scale * _UV_Scale_Y_EyeBlink
                vec2 scaleVec = vec2(uvScale, uvScale * uvScaleYEyeBlink);
                rotated *= (2.0 - scaleVec);
                // 5. Uncenter
                _spriteUv = rotated + 0.5;
            }

            // ── map_fragment 대체: 변환된 UV로 디퓨즈 맵 샘플링 ──
            #ifdef USE_MAP
                vec4 sampledDiffuseColor = texture2D( map, _spriteUv );
                diffuseColor *= sampledDiffuseColor;
            #endif

            // ── 마스크 틴팅 + Hard Light 블렌딩 ──
            {
                vec4 mask = texture2D(maskTintMap, _spriteUv);

                vec3 tint = mask.r * tintColorR + mask.g * tintColorG + mask.b * tintColorB;

                // Hard Light blend
                vec3 base = diffuseColor.rgb;
                vec3 result1 = 1.0 - 2.0 * (1.0 - base) * (1.0 - tint);
                vec3 result2 = 2.0 * base * tint;
                vec3 zeroOrOne = step(tint, vec3(0.5));
                vec3 hardLight = result2 * zeroOrOne + (1.0 - zeroOrOne) * result1;

                diffuseColor.rgb = mix(base, hardLight, mask.a);
            }
        `
    );
    o.fragmentShader = o.fragmentShader.replace(
      "#include <map_fragment>",
      c
    ), e.normalMap && (o.fragmentShader = o.fragmentShader.replace(
      "#include <normal_fragment_maps>",
      /* glsl */
      `
#ifdef USE_NORMALMAP_OBJECTSPACE
    normal = texture2D( normalMap, _spriteUv ).xyz * 2.0 - 1.0;
    #ifdef FLIP_SIDED
        normal = - normal;
    #endif
    #ifdef DOUBLE_SIDED
        normal = normal * faceDirection;
    #endif
    normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
    vec3 mapN = texture2D( normalMap, _spriteUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;
    normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
    normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif
                `
    )), o.fragmentShader = o.fragmentShader.replace(
      "#include <envmap_physical_pars_fragment>",
      `#include <envmap_physical_pars_fragment>
            #ifdef ENVMAP_TYPE_CUBE_UV
                #undef ENVMAP_TYPE_CUBE_UV
            #endif`
    ), e.normalMap || (o.fragmentShader = o.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
                reflectedLight.indirectDiffuse *= 0.25;`
    ));
  };
  const a = "OZSpriteMaskTint" + (e.normalMap ? "_N" : "");
  return t.customProgramCacheKey = () => a, t.userData.eyeBlinkUniform = r.uvScaleYEyeBlink, t.userData.uvTransformUniforms = i, t.userData.uniforms = r, t;
}
function Nm(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (o, l, c) => new ae(o, l, c).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = t.transparent === !0, a = {
    lensTopColor: { value: e.topColor ?? n(0, 0.017, 0.17) },
    lensBottomColor: { value: e.bottomColor ?? n(0, 0.096, 1) },
    lensGradientSmooth: { value: e.gradientSmooth ?? 0.15 },
    lensGradientPosition: { value: e.gradientPosition ?? 0.2 },
    lensSpecColor: { value: e.specularColor ?? n(0, 0.66, 0.76) },
    lensSpecIntensity: { value: e.specularIntensity ?? 1 },
    lensSpecPower: { value: e.specularPower ?? 20 },
    lensFresnelPower: { value: e.fresnelPower ?? 2 },
    lensLightScale: { value: e.lightScale ?? 1 },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 1 },
      smoothnessIntensity: { value: e.smoothness ?? 0.65 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {}
  };
  return t.onBeforeCompile = (o) => {
    for (const [u, f] of Object.entries(a))
      o.uniforms[u] = f;
    const c = (
      /* glsl */
      `
            uniform vec3 lensTopColor;
            uniform vec3 lensBottomColor;
            uniform float lensGradientSmooth;
            uniform float lensGradientPosition;
            uniform vec3 lensSpecColor;
            uniform float lensSpecIntensity;
            uniform float lensSpecPower;
            uniform float lensFresnelPower;
            uniform float lensLightScale;
            ${i ? (
        /* glsl */
        `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
      ) : ""}
        `
    );
    o.fragmentShader = o.fragmentShader.replace(
      "#include <common>",
      c + `
#include <common>`
    );
    const h = (
      /* glsl */
      `
            {
                // PBR 마스크맵: R=Metallic, G=AO, B=LensArea, A=Smoothness(반전)
                ${i ? "vec4 lensMask = texture2D(pbrMaskMap, vMapUv);" : "vec4 lensMask = vec4(0.0, 1.0, 1.0, 0.0);"}
                float lensArea = lensMask.b;
                float lensAO = lensMask.g;

                // UV.y 기반 그라디언트 (TopColor=상단, BottomColor=하단)
                // GLB export 시 UV.y 반전 보정 (Unity UV.y=0→bottom, GLB UV.y=1→bottom)
                float lensUvY = 1.0 - vMapUv.y;
                float lensSub = lensGradientPosition - lensUvY;
                float lensT = smoothstep(0.0, lensGradientSmooth, lensSub);
                vec3 lensGradient = mix(lensTopColor, lensBottomColor, lensT);
                lensGradient *= lensArea * lensAO;

                // Blinn-Phong 스페큘러 (메인 디렉셔널 라이트)
                vec3 lV = normalize(vViewPosition);
                vec3 lN = normal;
                vec3 lSpecContrib = vec3(0.0);

                #if NUM_DIR_LIGHTS > 0
                {
                    vec3 lL = directionalLights[0].direction;
                    vec3 lLightColor = directionalLights[0].color * lensLightScale;
                    vec3 lH = normalize(lL + lV);
                    float lNdotH = clamp(dot(lN, lH), 0.0, 1.0);
                    float lSpec = pow(lNdotH, lensSpecPower);
                    lSpecContrib = lLightColor * lSpec * ${i ? "(1.0 - smoothnessIntensity)" : "0.35"};
                }
                #endif

                // 프레넬
                float lNdotV = clamp(dot(lN, lV), 0.0, 1.0);
                float lFresnel = pow(1.0 - lNdotV, lensFresnelPower);

                // 그라디언트 ↔ 하이라이트 블렌딩
                vec3 lSpecFresnel = lSpecContrib + vec3(lFresnel);
                vec3 lHighlight = lSpecFresnel * (lensSpecColor * lensSpecIntensity) * lensArea;
                diffuseColor.rgb = mix(lensGradient, lHighlight, lSpecFresnel);
            }
        `
    );
    o.fragmentShader = o.fragmentShader.replace(
      "#include <normal_fragment_maps>",
      `#include <normal_fragment_maps>
` + h
    ), i && (o.fragmentShader = o.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>

                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
                `
    ), o.fragmentShader = o.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>

                {
                    // JPEG에 알파 채널 없음 → smoothnessIntensity를 직접 사용
                    roughnessFactor = 1.0 - smoothnessIntensity;
                }
                `
    ), o.fragmentShader = o.fragmentShader.replace(
      "#include <aomap_fragment>",
      `#include <aomap_fragment>

                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
                `
    )), r && (o.fragmentShader = o.fragmentShader.replace(
      "#include <opaque_fragment>",
      `#include <opaque_fragment>

                {
                    float ozEnvSpecLum = dot(reflectedLight.indirectSpecular, vec3(0.2126, 0.7152, 0.0722));
                    gl_FragColor.a = clamp(gl_FragColor.a + ozEnvSpecLum, 0.0, 1.0);
                }
                `
    ));
  }, t.customProgramCacheKey = () => `${i ? "OZLens_PBR" : "OZLens"}${r ? "_T" : ""}`, t.userData.uniforms = a, t;
}
function km(s, e) {
  var a, o;
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null, t.emissive.set(0, 0, 0), t.emissiveMap = null, t.emissiveIntensity = 1, e.metallicIntensity != null && (t.metalnessMap = null, t.metalness = e.metallicIntensity), e.smoothness != null && (t.roughnessMap = null, t.roughness = 1 - e.smoothness);
  const n = { value: 0 }, i = !!e.pbrMaskMap, r = {
    emissiveBlinkMap: { value: e.emissiveMap },
    emissiveStrength: { value: e.emissiveStrength ?? 1 },
    emissiveTintGamma: { value: e.emissiveTintGamma ?? 1 },
    blinkSpeed: { value: e.blinkSpeed ?? 3 },
    mapTiling: { value: new ze(((a = e.mapTiling) == null ? void 0 : a[0]) ?? 2, ((o = e.mapTiling) == null ? void 0 : o[1]) ?? 4) },
    uBlinkTime: n,
    ozBloomSrc: Br,
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {}
  };
  return t.onBeforeCompile = (l) => {
    for (const [f, m] of Object.entries(r))
      l.uniforms[f] = m;
    const h = (
      /* glsl */
      `
            uniform sampler2D emissiveBlinkMap;
            uniform float emissiveStrength;
            uniform float emissiveTintGamma;
            uniform float blinkSpeed;
            uniform vec2 mapTiling;
            uniform float uBlinkTime;
            uniform float ozBloomSrc;
            // 블룸 소스용 압축 전 HDR 발광 (selectiveBloom.ts)
            vec3 ozRawEm = vec3(0.0);
            vec3 ozEmDecode(vec3 c, float g) {
                c = max(c, 0.0);
                #ifdef OZ_U
                if (abs(g - 2.2) < 0.005) return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
                #endif
                return pow(c, vec3(g));
            }
            ${i ? (
        /* glsl */
        `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
      ) : ""}

            // Unity Hash_Tchou_2_1 포팅 (deterministic hash)
            float hashTchou21(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            // Unity SimpleNoise_ValueNoise_Deterministic 포팅
            float valueNoise(vec2 uv) {
                vec2 i = floor(uv);
                vec2 f = fract(uv);
                f = f * f * (3.0 - 2.0 * f);
                float r0 = hashTchou21(i + vec2(0.0, 0.0));
                float r1 = hashTchou21(i + vec2(1.0, 0.0));
                float r2 = hashTchou21(i + vec2(0.0, 1.0));
                float r3 = hashTchou21(i + vec2(1.0, 1.0));
                float bot = mix(r0, r1, f.x);
                float top = mix(r2, r3, f.x);
                return mix(bot, top, f.y);
            }

            // Unity SimpleNoise_Deterministic (3 octaves)
            float simpleNoise(vec2 uv, float scale) {
                float out_ = 0.0;
                out_ += valueNoise(uv * scale) * 0.125;
                out_ += valueNoise(uv * (scale / 2.0)) * 0.25;
                out_ += valueNoise(uv * (scale / 4.0)) * 0.5;
                return out_;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <common>",
      h + `
#include <common>`
    );
    const u = (
      /* glsl */
      `
            {
                vec3 eSample = texture2D(emissiveBlinkMap, vMapUv).rgb;
                // 색공간 보정(Unity 매칭): pow(color, gamma). 1.0=raw.
                vec3 emissive = ozEmDecode(eSample, emissiveTintGamma) * emissiveStrength;

                // 포스터라이즈 UV → 셀별 노이즈
                vec2 posterized = floor(vMapUv / (1.0 / mapTiling)) * (1.0 / mapTiling);
                float noise = simpleNoise(posterized, 500.0);

                // 블링크: frac(noise * time * speed) >= 0.2
                float phase = fract(noise * uBlinkTime * blinkSpeed);
                float isOn = step(0.2, phase);

                totalEmissiveRadiance += emissive * isOn;
                ozRawEm = emissive * isOn;  // 블룸 소스용 HDR 원본 (블링크 상태 포함)

                // 베이스 억제 안 함 — 순수 additive: 이미시브를 베이스 재질 위에 가산 (Unity Linear Dodge).
                // (이전 diffuseColor *= (1-isOn) 제거: 재질감 소실 부작용 → 아티스트 요구에 맞춰 add 유지.)
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + u
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
if (ozBloomSrc > 0.5) { gl_FragColor = vec4(ozRawEm, 1.0); }`
    );
  }, t.customProgramCacheKey = () => (i ? "OZEmissiveBlink_PBR" : "OZEmissiveBlink") + kr(), t.userData.uniforms = r, { material: t, timeUniform: n };
}
function Qo(s) {
  const e = parseInt(s.slice(1, 3), 16) / 255, t = parseInt(s.slice(3, 5), 16) / 255, n = parseInt(s.slice(5, 7), 16) / 255, i = s.length >= 9 ? parseInt(s.slice(7, 9), 16) / 255 : 1;
  return { r: e, g: t, b: n, a: i };
}
function Jo(s) {
  var e;
  for (const t in s) {
    if (t === "_meta") continue;
    const n = (e = s[t]) == null ? void 0 : e.colors;
    if (Array.isArray(n))
      for (const i of n)
        Array.isArray(i == null ? void 0 : i.colors) && (i.colors = i.colors.map(
          (r) => typeof r == "string" ? Qo(r) : r
        ));
  }
}
function Bm(s) {
  var t;
  if (!s) return;
  const e = s.PresetPartsDatas;
  if (Array.isArray(e))
    for (const n of e) {
      const i = (t = n == null ? void 0 : n.Color) == null ? void 0 : t.colors;
      Array.isArray(i) && (n.Color.colors = i.map(
        (r) => typeof r == "string" ? Qo(r) : r
      ));
    }
}
function Mn(s, e = Math.random) {
  return s.kind === "constant" ? s.value : s.min + (s.max - s.min) * e();
}
function Om(s, e) {
  const t = s.points;
  if (t.length === 0) return 0;
  if (t.length === 1 || e <= t[0][0]) return t[0][1];
  if (e >= t[t.length - 1][0]) return t[t.length - 1][1];
  let n = 0, i = t.length - 1;
  for (; i - n > 1; ) {
    const h = n + i >> 1;
    t[h][0] <= e ? n = h : i = h;
  }
  const [r, a] = t[n], [o, l] = t[i], c = (e - r) / (o - r);
  return a + (l - a) * c;
}
function el(s, e, t) {
  const n = s.stops;
  if (n.length === 0) {
    t[0] = t[1] = t[2] = t[3] = 0;
    return;
  }
  if (n.length === 1 || e <= n[0].t) {
    t[0] = n[0].rgba[0], t[1] = n[0].rgba[1], t[2] = n[0].rgba[2], t[3] = n[0].rgba[3];
    return;
  }
  const i = n.length - 1;
  if (e >= n[i].t) {
    t[0] = n[i].rgba[0], t[1] = n[i].rgba[1], t[2] = n[i].rgba[2], t[3] = n[i].rgba[3];
    return;
  }
  let r = 0, a = i;
  for (; a - r > 1; ) {
    const h = r + a >> 1;
    n[h].t <= e ? r = h : a = h;
  }
  const o = n[r], l = n[a], c = (e - o.t) / (l.t - o.t);
  t[0] = o.rgba[0] + (l.rgba[0] - o.rgba[0]) * c, t[1] = o.rgba[1] + (l.rgba[1] - o.rgba[1]) * c, t[2] = o.rgba[2] + (l.rgba[2] - o.rgba[2]) * c, t[3] = o.rgba[3] + (l.rgba[3] - o.rgba[3]) * c;
}
function Gm(s, e, t) {
  if (s.kind === "constant") {
    t[0] = s.rgba[0], t[1] = s.rgba[1], t[2] = s.rgba[2], t[3] = s.rgba[3];
    return;
  }
  if (s.kind === "range") {
    const n = e();
    t[0] = s.minRgba[0] + (s.maxRgba[0] - s.minRgba[0]) * n, t[1] = s.minRgba[1] + (s.maxRgba[1] - s.minRgba[1]) * n, t[2] = s.minRgba[2] + (s.maxRgba[2] - s.minRgba[2]) * n, t[3] = s.minRgba[3] + (s.maxRgba[3] - s.minRgba[3]) * n;
    return;
  }
  el({ stops: s.stops }, e(), t);
}
const co = Math.PI / 180;
function zm(s, e, t, n) {
  switch (s.type) {
    case "cone":
      Hm(s, e, t, n);
      break;
    case "sphere":
      ho(s, e, t, n, !1);
      break;
    case "hemisphere":
      ho(s, e, t, n, !0);
      break;
    case "box":
      Vm(s, e, t, n);
      break;
  }
}
function Hm(s, e, t, n) {
  const i = s.radius ?? 1, r = s.radiusThickness ?? 1, a = (s.angle ?? 25) * co, o = (s.arc ?? 360) * co, l = (i * (1 - r)) ** 2, c = i * i, h = Math.sqrt(l + e() * (c - l)), u = e() * o, f = h * Math.cos(u), m = h * Math.sin(u);
  t[0] = f, t[1] = 0, t[2] = m;
  const g = Math.sqrt(f * f + m * m), _ = g > 1e-6 ? f / g : 0, d = g > 1e-6 ? m / g : 0, p = Math.tan(a), S = _ * p, b = d * p, x = 1, C = Math.sqrt(S * S + x * x + b * b);
  n[0] = S / C, n[1] = x / C, n[2] = b / C;
}
function ho(s, e, t, n, i) {
  const r = s.radius ?? 1, a = s.radiusThickness ?? 0;
  let o = e() * 2 - 1;
  i && o < 0 && (o = -o);
  const l = e() * Math.PI * 2, c = Math.sqrt(1 - o * o), h = c * Math.cos(l), u = o, f = c * Math.sin(l), m = (r * (1 - a)) ** 3, g = r ** 3, _ = a === 0 ? r : Math.cbrt(m + e() * (g - m));
  t[0] = h * _, t[1] = u * _, t[2] = f * _, n[0] = h, n[1] = u, n[2] = f;
}
function Vm(s, e, t, n) {
  const i = s.box ?? [1, 1, 1];
  t[0] = (e() - 0.5) * i[0], t[1] = (e() - 0.5) * i[1], t[2] = (e() - 0.5) * i[2], n[0] = 0, n[1] = 0, n[2] = 1;
}
function Wm(s) {
  switch (s) {
    case "additive":
      return { blending: 2, transparent: !0, depthWrite: !1 };
    case "alpha":
      return { blending: 1, transparent: !0, depthWrite: !1 };
    case "multiply":
      return { blending: 4, transparent: !0, depthWrite: !1 };
    case "premultiply":
      return {
        blending: 5,
        blendSrc: 201,
        blendDst: 205,
        premultipliedAlpha: !0,
        transparent: !0,
        depthWrite: !1
      };
  }
}
const jm = (
  /* glsl */
  `
attribute vec3 iPosition;
attribute float iScale;
attribute float iRotation;
attribute vec4 iColor;

varying vec2 vUv;
varying vec4 vColor;

void main() {
  // 빌보드: 인스턴스 중심을 먼저 view space 로 변환(모델 변환=마운트 회전+스케일 포함),
  // 그 다음 quad 코너를 view space 에서 오프셋 → 카메라를 항상 정면으로 향함(모자 회전 무관).
  // 크기는 emitter 의 월드(균일) 스케일을 곱해 반영 (Unity Local/Hierarchy scaling 과 동일).
  vec4 mvCenter = modelViewMatrix * vec4(iPosition, 1.0);
  float worldScale = length(modelMatrix[0].xyz);
  float c = cos(iRotation);
  float s = sin(iRotation);
  vec2 rotated = vec2(position.x * c - position.y * s,
                      position.x * s + position.y * c);
  mvCenter.xy += rotated * iScale * worldScale;
  gl_Position = projectionMatrix * mvCenter;
  vUv = uv;
  vColor = iColor;
}
`
), Xm = (
  /* glsl */
  `
uniform sampler2D map;
varying vec2 vUv;
varying vec4 vColor;
void main() {
  vec4 tex = texture2D(map, vUv);
  gl_FragColor = tex * vColor;
  if (gl_FragColor.a < 0.001) discard;
}
`
);
function qm(s, e) {
  const t = Wm(e), n = new It({
    vertexShader: jm,
    fragmentShader: Xm,
    uniforms: { map: { value: s } },
    transparent: t.transparent,
    depthWrite: t.depthWrite,
    blending: t.blending,
    side: 2
  });
  return t.blendSrc !== void 0 && (n.blendSrc = t.blendSrc), t.blendDst !== void 0 && (n.blendDst = t.blendDst), t.premultipliedAlpha && (n.premultipliedAlpha = !0), n;
}
const Ln = new Float32Array(3), us = new Float32Array(3), yi = [0, 0, 0, 0], Ei = [0, 0, 0, 0], fs = Math.PI / 180;
class Ym {
  constructor(e, t, n = Math.random) {
    this.aliveCount = 0, this.colorOverride = null, this.emissionAcc = 0, this.cycleTime = 0, this.burstCyclesRemaining = [], this.burstNextTime = [], this.spec = e, this.rng = n, this.maxParticles = e.maxParticles;
    const i = this.maxParticles;
    this.posX = new Float32Array(i), this.posY = new Float32Array(i), this.posZ = new Float32Array(i), this.velX = new Float32Array(i), this.velY = new Float32Array(i), this.velZ = new Float32Array(i), this.ages = new Float32Array(i), this.lifetimes = new Float32Array(i), this.debugStartSizes = new Float32Array(i), this.startColorR = new Float32Array(i), this.startColorG = new Float32Array(i), this.startColorB = new Float32Array(i), this.startColorA = new Float32Array(i), this.rotations = new Float32Array(i), this.object3d = new rt(), this.burstCyclesRemaining = e.emission.bursts.map((o) => o.cycles), this.burstNextTime = e.emission.bursts.map((o) => o.time), this.currentScales = new Float32Array(i), this.currentColors = new Float32Array(i * 4), this.instancePositions = new Float32Array(i * 3), this.instanceRotations = new Float32Array(i), this.geometry = new pp();
    const r = new li(1, 1);
    this.geometry.index = r.index, this.geometry.attributes.position = r.attributes.position, this.geometry.attributes.uv = r.attributes.uv, this.instancePosAttr = new kn(this.instancePositions, 3), this.instancePosAttr.setUsage(35048), this.instanceScaleAttr = new kn(this.currentScales, 1), this.instanceScaleAttr.setUsage(35048), this.instanceRotAttr = new kn(this.instanceRotations, 1), this.instanceRotAttr.setUsage(35048), this.instanceColorAttr = new kn(this.currentColors, 4), this.instanceColorAttr.setUsage(35048), this.geometry.setAttribute("iPosition", this.instancePosAttr), this.geometry.setAttribute("iScale", this.instanceScaleAttr), this.geometry.setAttribute("iRotation", this.instanceRotAttr), this.geometry.setAttribute("iColor", this.instanceColorAttr), this.geometry.instanceCount = 0, this.material = qm(t, e.renderer.blendMode), this.mesh = new vt(this.geometry, this.material), this.mesh.frustumCulled = !1, this.object3d.add(this.mesh);
    const a = e.attachment;
    this.object3d.position.set(a.localPosition[0], a.localPosition[1], a.localPosition[2]), this.object3d.rotation.set(a.localRotation[0] * fs, a.localRotation[1] * fs, a.localRotation[2] * fs), this.object3d.scale.set(a.localScale[0], a.localScale[1], a.localScale[2]);
  }
  get instanceCount() {
    return this.aliveCount;
  }
  spawnOne() {
    if (this.aliveCount >= this.maxParticles) return;
    const e = this.aliveCount++, t = this.spec;
    if (zm(t.shape, this.rng, Ln, us), t.shape.type === "box")
      this.posX[e] = Ln[0] + t.shape.position[0], this.posY[e] = Ln[1] + t.shape.position[1], this.posZ[e] = Ln[2] + t.shape.position[2];
    else {
      const o = t.shape.scale[0], l = t.shape.scale[1], c = t.shape.scale[2];
      this.posX[e] = Ln[0] * o + t.shape.position[0], this.posY[e] = Ln[1] * l + t.shape.position[1], this.posZ[e] = Ln[2] * c + t.shape.position[2];
    }
    const n = Mn(t.startSpeed, this.rng);
    this.velX[e] = us[0] * n, this.velY[e] = us[1] * n, this.velZ[e] = us[2] * n, this.ages[e] = 0, this.lifetimes[e] = Mn(t.startLifetime, this.rng), this.debugStartSizes[e] = Mn(t.startSize, this.rng), this.rotations[e] = Mn(t.startRotation, this.rng) * fs, Gm(t.startColor, this.rng, yi);
    const i = this.colorOverride ? this.colorOverride[0] : yi[0], r = this.colorOverride ? this.colorOverride[1] : yi[1], a = this.colorOverride ? this.colorOverride[2] : yi[2];
    this.startColorR[e] = i * t.renderer.tintColor[0], this.startColorG[e] = r * t.renderer.tintColor[1], this.startColorB[e] = a * t.renderer.tintColor[2], this.startColorA[e] = yi[3] * t.renderer.tintColor[3];
  }
  update(e) {
    const t = this.spec, n = this.aliveCount, i = t.enabled !== !1;
    if (i) {
      for (this.emissionAcc += t.emission.rateOverTime * e; this.emissionAcc >= 1 && this.aliveCount < this.maxParticles; )
        this.spawnOne(), this.emissionAcc -= 1;
      this.aliveCount >= this.maxParticles && (this.emissionAcc = 0);
    }
    const r = this.cycleTime + e;
    for (let l = 0; l < t.emission.bursts.length; l++) {
      const c = t.emission.bursts[l];
      if (!(this.burstCyclesRemaining[l] <= 0 && c.cycles !== 0))
        for (; r >= this.burstNextTime[l]; ) {
          if (i && this.rng() < c.probability)
            for (let h = 0; h < c.count; h++) this.spawnOne();
          if (c.cycles !== 0 && --this.burstCyclesRemaining[l] <= 0 || c.interval <= 0) break;
          this.burstNextTime[l] += c.interval;
        }
    }
    const a = Mn(t.gravityModifier, this.rng), o = t.forceOverLifetime;
    for (let l = 0; l < n && l < this.aliveCount; l++) {
      if (this.ages[l] += e, this.ages[l] >= this.lifetimes[l]) {
        const u = this.aliveCount - 1;
        l !== u && (this.posX[l] = this.posX[u], this.posY[l] = this.posY[u], this.posZ[l] = this.posZ[u], this.velX[l] = this.velX[u], this.velY[l] = this.velY[u], this.velZ[l] = this.velZ[u], this.ages[l] = this.ages[u], this.lifetimes[l] = this.lifetimes[u], this.debugStartSizes[l] = this.debugStartSizes[u], this.startColorR[l] = this.startColorR[u], this.startColorG[l] = this.startColorG[u], this.startColorB[l] = this.startColorB[u], this.startColorA[l] = this.startColorA[u], this.rotations[l] = this.rotations[u]), this.aliveCount--, l--;
        continue;
      }
      const c = this.ages[l] / this.lifetimes[l];
      this.velY[l] -= 9.81 * a * e, o && (this.velX[l] += Mn(o.x, this.rng) * e, this.velY[l] += Mn(o.y, this.rng) * e, this.velZ[l] += Mn(o.z, this.rng) * e), this.posX[l] += this.velX[l] * e, this.posY[l] += this.velY[l] * e, this.posZ[l] += this.velZ[l] * e, this.instancePositions[l * 3] = this.posX[l], this.instancePositions[l * 3 + 1] = this.posY[l], this.instancePositions[l * 3 + 2] = this.posZ[l], this.instanceRotations[l] = this.rotations[l];
      const h = t.sizeOverLifetime ? Om(t.sizeOverLifetime, c) : 1;
      this.currentScales[l] = this.debugStartSizes[l] * h, t.colorOverLifetime ? (el(t.colorOverLifetime, c, Ei), this.currentColors[l * 4] = this.startColorR[l] * Ei[0], this.currentColors[l * 4 + 1] = this.startColorG[l] * Ei[1], this.currentColors[l * 4 + 2] = this.startColorB[l] * Ei[2], this.currentColors[l * 4 + 3] = this.startColorA[l] * Ei[3]) : (this.currentColors[l * 4] = this.startColorR[l], this.currentColors[l * 4 + 1] = this.startColorG[l], this.currentColors[l * 4 + 2] = this.startColorB[l], this.currentColors[l * 4 + 3] = this.startColorA[l]);
    }
    if (this.cycleTime = r, this.cycleTime >= t.duration && t.looping) {
      this.cycleTime -= t.duration;
      for (let l = 0; l < t.emission.bursts.length; l++)
        this.burstCyclesRemaining[l] = t.emission.bursts[l].cycles, this.burstNextTime[l] = Math.max(
          t.emission.bursts[l].time,
          this.burstNextTime[l] - t.duration
        );
    }
    this.geometry.instanceCount = this.aliveCount, this.instancePosAttr.needsUpdate = !0, this.instanceScaleAttr.needsUpdate = !0, this.instanceRotAttr.needsUpdate = !0, this.instanceColorAttr.needsUpdate = !0;
  }
  dispose() {
    var e;
    this.geometry.dispose(), this.material.dispose(), (e = this.material.uniforms.map) != null && e.value && this.material.uniforms.map.value.dispose();
  }
}
async function uo(s, e, t = new Di()) {
  const n = `${e}avatar/particles/${s}.json`, i = await fetch(n);
  if (!i.ok) throw new Error(`particle spec fetch failed: ${i.status} ${n}`);
  const r = await i.json(), a = Array.isArray(r.effects) ? r.effects : [r];
  return { effects: await Promise.all(a.map(async (l) => {
    const c = `${e}avatar/particles/${l.renderer.texture}`, h = await t.loadAsync(c);
    return h.colorSpace = mt, h.flipY = !1, { spec: l, texture: h };
  })) };
}
class Km {
  constructor(e, t, n = new Di()) {
    this.baseUrl = e, this.mode = t, this.textureLoader = n, this.effects = /* @__PURE__ */ new Map(), this.ctx = /* @__PURE__ */ new Map(), this.loadingSeq = /* @__PURE__ */ new Map(), this.prefetched = /* @__PURE__ */ new Map();
  }
  /** 파티클 정의·텍스처를 미리 받기 시작 (받기만 — 붙이는 건 setEffect). 파츠를 받는 동안 같이 받아 두면
   *  파츠가 붙자마자 파티클이 만들어져, 셰이더 미리 준비(precompile)에 파티클도 포함된다. */
  prefetch(e) {
    if (this.mode === "off" || this.prefetched.has(e)) return;
    const t = uo(e, this.baseUrl, this.textureLoader);
    t.catch(() => {
    }), this.prefetched.set(e, t);
  }
  async setEffect(e, t, n, i = null) {
    if (this.detach(e), this.mode === "off" || t === null || n === null) return;
    const r = (this.loadingSeq.get(e) ?? 0) + 1;
    this.loadingSeq.set(e, r);
    const a = this.prefetched.get(t);
    this.prefetched.delete(t);
    const o = await (a ?? uo(t, this.baseUrl, this.textureLoader));
    if (this.loadingSeq.get(e) !== r) {
      for (const l of o.effects) l.texture.dispose();
      return;
    }
    this.ctx.set(e, { layers: o.effects, partRoot: n, colorOverride: i }), this.rebuild(e);
  }
  /** 레이어 effect 인스턴스 생성 + holder 에 부착 (spec 교체 시에도 사용). */
  attachEffect(e, t, n) {
    const i = this.mode === "reduced" ? this.reduceSpec(t.spec) : t.spec, r = t.texture.clone();
    r.needsUpdate = !0;
    const a = new Ym(i, r);
    return a.colorOverride = i.colorSync === !1 ? null : n, a.object3d.position.set(0, 0, 0), e.add(a.object3d), e.userData.effect = a, a;
  }
  /** ctx.layers 로 effect 들을 (재)생성. **레이어마다 독립 오브젝트(holder)** — 씬 오브젝트 1개 =
   *  파티클 1개 = JSON 레이어 1개 (1:1). 각자 자기 localPositions 위치를 갖고 개별
   *  이동/저장된다 (Unity 의 GameObject+ParticleSystem 멘탈모델, 2026-08-19 피드백).
   *  착용/재착용 시에만 전체 재생성 — spec 스크럽은 applySpec 이 effect 만 교체. */
  rebuild(e) {
    var o;
    const t = this.ctx.get(e);
    if (!t) return;
    const n = this.effects.get(e);
    if (n) for (const l of n)
      l.effect.dispose(), l.holder.removeFromParent();
    const i = [], r = [];
    for (let l = 0; l < t.layers.length; l++) {
      const c = t.layers[l], h = c.spec, u = [];
      for (const m of this.findMountNames(t.partRoot, h.attachment.mountBone)) {
        const g = t.partRoot.getObjectByName(m);
        g && u.push({ node: g });
      }
      if (u.length === 0) {
        const m = h.attachment.localPositions;
        if (m != null && m.length) for (const g of m) u.push({ node: t.partRoot, offset: g });
        else u.push({ node: t.partRoot, offset: h.attachment.localPosition });
      }
      const f = h.name ?? `L${l + 1}`;
      for (let m = 0; m < u.length; m++) {
        const { node: g, offset: _ } = u[m], d = new rt();
        d.name = `Ptc_${h.partId}_${f}${u.length > 1 ? `_${m + 1}` : ""}`, d.userData.ptcPartId = h.partId, d.userData.ptcLayerIndex = l, d.userData.ptcOffsetIndex = m, d.userData.ptcLayerLabel = f, _ && d.position.set(_[0], _[1], _[2]), g.add(d);
        const p = this.attachEffect(d, c, t.colorOverride);
        i.push({ effect: p, holder: d }), r.push(`${f}${_ ? `@${_}` : `@${g.name || "partRoot"}`}`);
      }
    }
    this.effects.set(e, i);
    const a = ((o = t.layers[0]) == null ? void 0 : o.spec.partId) ?? "?";
    console.log(`[Particle] ${a}: ${i.length} emitter(s) / ${t.layers.length} layer(s) [${r.join(", ")}]`);
  }
  /** mountBone("Mount_C004_01") 의 family("Mount_C004_") 에 속한 모든 마운트 노드명 수집 (양쪽 눈). */
  findMountNames(e, t) {
    const n = t.replace(/_\d+$/, "_"), i = [];
    return e.traverse((r) => {
      r.name && r.name.startsWith(n) && /_\d+$/.test(r.name) && i.push(r.name);
    }), i.length === 0 && e.getObjectByName(t) && i.push(t), i.sort();
  }
  detach(e) {
    const t = this.effects.get(e);
    if (t) for (const i of t)
      i.effect.dispose(), i.holder.removeFromParent();
    this.effects.delete(e);
    const n = this.ctx.get(e);
    if (n) {
      for (const i of n.layers) i.texture.dispose();
      this.ctx.delete(e);
    }
  }
  // ─── UI 튜닝 훅 (로컬 뷰어/스튜디오 패널용) ───
  /** 현재 적용 중인 spec (편집 후 applySpec 으로 반영). layer = 레이어 인덱스 (기본 0). */
  getSpec(e, t = 0) {
    var n, i;
    return ((i = (n = this.ctx.get(e)) == null ? void 0 : n.layers[t]) == null ? void 0 : i.spec) ?? null;
  }
  /** spec 교체 (라이브 튜닝). holder(씬 노드)는 유지하고 내부 effect 만 갈아끼움 —
   *  선택/uuid/visible/Transform 이 스크럽 중에도 보존된다. layer = 레이어 인덱스. */
  applySpec(e, t, n = 0) {
    const i = this.ctx.get(e);
    if (!(!i || !i.layers[n])) {
      i.layers[n] = { ...i.layers[n], spec: t };
      for (const r of this.effects.get(e) ?? [])
        r.holder.userData.ptcLayerIndex === n && (r.holder.remove(r.effect.object3d), r.effect.dispose(), r.effect = this.attachEffect(r.holder, i.layers[n], i.colorOverride));
    }
  }
  /** 레이어 수 (에디터 표시용). */
  layerCount(e) {
    var t;
    return ((t = this.ctx.get(e)) == null ? void 0 : t.layers.length) ?? 0;
  }
  /** 현재 파티클이 활성인 카테고리 목록. */
  activeCategories() {
    return [...this.ctx.keys()];
  }
  update(e) {
    for (const t of this.effects.values()) for (const { effect: n } of t) n.update(e);
  }
  dispose() {
    for (const e of [...this.ctx.keys()]) this.detach(e);
  }
  reduceSpec(e) {
    return {
      ...e,
      maxParticles: Math.min(50, e.maxParticles),
      emission: {
        ...e.emission,
        rateOverTime: e.emission.rateOverTime * 0.5
      }
    };
  }
}
const pr = (s, e, t) => Math.max(e, Math.min(t, s));
function $m(s, e) {
  return {
    x: pr(s.x, -e.offsetRange[0], e.offsetRange[0]),
    y: pr(s.y, -e.offsetRange[1], e.offsetRange[1]),
    s: pr(s.s, e.scaleMin, e.scaleMax)
  };
}
function Zm(s, e, t, n) {
  const i = (a) => a.r === 0 && a.g === 0 && a.b === 0 && a.a === 0;
  if (!!e && e.length > 0 && !i(e[0])) {
    const a = t && s > 0 && e.length > 1 ? 1 : 0, o = e[a], l = new ae(o.r, o.g, o.b).convertSRGBToLinear();
    return new Ve(l.r, l.g, l.b, o.a);
  }
  if (n) {
    const a = new ae(n[0], n[1], n[2]).convertSRGBToLinear();
    return new Ve(a.r, a.g, a.b, n[3]);
  }
  return new Ve(1, 1, 1, 1);
}
const ds = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), xe = class xe {
  constructor(e, t) {
    this.onProgress = null, this.gltfLoader = new jo().setMeshoptDecoder(Yo), this.textureLoader = new Di(), this.boneMap = /* @__PURE__ */ new Map(), this.baseArmature = null, this.avatarRoot = new fn(), this.activeParts = /* @__PURE__ */ new Map(), this.isLoaded = !1, this.currentAvatarData = null, this.hairNodes = null, this.capMountGroup = null, this.capUseDefaultMount = !1, this.hairCapMountBone = "", this.blinkTimeUniforms = [], this.currentBlendShapes = [], this.volumeMaskEnabled = !1, this.enableCastShadow = !1, this.debugSpheres = [], this.volumeMaskTargets = [], this.headJointMatrix = null, this._resourceSizes = /* @__PURE__ */ new Map(), this._partResources = /* @__PURE__ */ new Map(), this._decalTextures = [], this._hiResQueue = /* @__PURE__ */ new Map(), this.skinColorUniform = { value: new ae(0.957, 0.769, 0.725).convertSRGBToLinear() }, this.uvTransforms = /* @__PURE__ */ new Map(), this.eyeBlinkUniform = { value: 1 }, this.eyeBlinkUniformR = { value: 1 }, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = 0, this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending = !1, this.decalsBaseUrl = "avatar/decals/", this.decalsMetadata = null, this.decalsMetadataPromise = null, this.partsMetadata = null, this.partsMetadataPromise = null, this.activeDecalProjectors = /* @__PURE__ */ new Map(), this.decalCategorySlots = /* @__PURE__ */ new Map(), this.faceDecalSlots = [], this.faceSkinnedMesh = null, this.swapSeq = /* @__PURE__ */ new Map(), this.baseSkeletonGlb = "avatar/skeleton/Msh_Ava_Bip.glb", this.animBaseUrl = "avatar/animations/", this.partsBaseUrl = "avatar/parts/", this.masksBaseUrl = "avatar/masks/", this.defaultPresetJson = '{"PresetPartsDatas":[{"Category":0,"ID":"Ava_H_008","Color":{"colors":[{"r":0.878,"g":0.369,"b":0.043,"a":1.0},{"r":0.8,"g":0.455,"b":0.29,"a":1.0}]}},{"Category":1,"ID":"Ava_F_001","Color":{"colors":[{"r":0.949,"g":0.875,"b":0.863,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":2,"ID":"Ava_B_001","Color":{"colors":[{"r":0.192,"g":0.129,"b":0.075,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":3,"ID":"Ava_E_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":4,"ID":"Ava_N_001","Color":{"colors":[]}},{"Category":5,"ID":"Ava_M_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":6,"ID":"Ava_U_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":7,"ID":"Ava_L_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":9,"ID":"Ava_S_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}}],"blendShapes":[],"PresetName":"UserPreset"}', this.mixer = null, this.animClips = /* @__PURE__ */ new Map(), this.currentAction = null, this.defaultAction = null, this.poseAction = null, this.prevMotionIndex = -1, this.defaultIdleName = "Ani_Idle_001_Idle", this.deferBackground = !1, this.backgroundPending = !1, this.idleAnimations = [
      "Ani_Idle_002_Hi",
      "Ani_Idle_003_Leg",
      "Ani_Idle_004_Stretch"
    ], this.hairPhysicsEnabled = !1, this.magicaHair = null, this.fillMissingShoes = !1, this._eyeBlinkPaused = !1, this._hairShiftDir = 1, this._hairNormalScale = 1, this.hiResEnabled = !0, this.skeletonPrefetch = null, this._maxConcurrent = 0, this._activeFetches = 0, this._fetchQueue = [], this._decalGlbPrefetch = /* @__PURE__ */ new Map(), this.scene = e, this.baseUrl = (t == null ? void 0 : t.baseUrl) ?? "", this.onProgress = (t == null ? void 0 : t.onProgress) ?? null, this.scene.add(this.avatarRoot), this.particleSystem = new Km(this.baseUrl, (t == null ? void 0 : t.particleMode) ?? "full"), this.deferBackground = !!(t != null && t.deferBackgroundLoads), t != null && t.idleAnimations && (this.idleAnimations = [...t.idleAnimations]), this.fillMissingShoes = !!(t != null && t.fillMissingShoes);
  }
  setEyeBlinkValue(e) {
    this.eyeBlinkUniform.value = e, this.eyeBlinkUniformR.value = e;
  }
  /** 기본 프리셋으로 아바타 로드 */
  async start() {
    if (this.defaultPresetJson) {
      const e = JSON.parse(this.defaultPresetJson);
      await this.loadAvatarFromData(e);
    }
  }
  /** 매 프레임 호출 */
  update(e) {
    var t;
    this.mixer && this.mixer.update(e), (t = this.magicaHair) != null && t.active && this.magicaHair.update(e);
    for (const n of this.blinkTimeUniforms)
      n.value += e;
    this.updateEyeBlink(e), this.updateVolumeMaskCenters(), this.updateDecalProjections(), this.particleSystem.update(e);
  }
  /** 애니메이션 일시정지 중에도 이펙트(파티클/발광 점멸)만 계속 진행 — Unity 처럼
   *  포즈 정지와 이펙트는 독립 (스튜디오 일시정지/T포즈에서 파티클 튜닝용). */
  updateEffectsOnly(e) {
    for (const t of this.blinkTimeUniforms)
      t.value += e;
    this.particleSystem.update(e);
  }
  // ── 헤어 물리 ──
  /** 물리 켜기/끄기. 켜면 착용 중 헤어에 바로 붙고, 헤어를 바꿀 때마다 다시 붙는다 */
  setHairPhysicsEnabled(e) {
    var t;
    this.hairPhysicsEnabled = e, e ? this.rebuildHairPhysics() : (t = this.magicaHair) == null || t.dispose();
  }
  getMagicaHair() {
    return this.magicaHair;
  }
  /** 현재 헤어 파츠에 물리를 다시 붙인다. 헤어 로드/교체 뒤, 그리고 묶음 구성(고정점 등)을 바꾼 뒤 호출 */
  rebuildHairPhysics() {
    var i, r, a, o;
    if ((i = this.magicaHair) == null || i.dispose(), !this.hairPhysicsEnabled) return;
    const e = (r = this.activeParts.get("0")) == null ? void 0 : r[0];
    if (!e) return;
    const t = (o = (a = this.currentAvatarData) == null ? void 0 : a.PresetPartsDatas.find((l) => l.Category === 0)) == null ? void 0 : o.ID, n = /* @__PURE__ */ new Set();
    if (e.traverse((l) => {
      const c = l;
      if (c.isSkinnedMesh && c.skeleton) for (const h of c.skeleton.bones) n.add(h);
    }), !this.magicaHair) {
      if (!xe.hairPhysicsClass) return;
      this.magicaHair = new xe.hairPhysicsClass();
    }
    this.magicaHair.build(e, (l) => this.boneMap.get(l + "_1") ?? this.boneMap.get(l), t, [...n]);
  }
  getAvatarRoot() {
    return this.avatarRoot;
  }
  getBone(e) {
    return this.boneMap.get(e);
  }
  /** 눈 깜빡임 일시 정지/재개 (프로필 캡쳐용) */
  setEyeBlinkPaused(e) {
    e && (this.setEyeBlinkValue(1), this.eyeBlinkElapsed = -1), this._eyeBlinkPaused = e;
  }
  /** 프로필 캡쳐용: idle 프레임 0으로 강제 설정. 반환값으로 복원 함수 제공 */
  forceIdlePose() {
    var i;
    if (!this.mixer || !this.defaultAction) return null;
    const e = this.currentAction, t = ((i = this.currentAction) == null ? void 0 : i.time) ?? 0, n = this.mixer.timeScale;
    return this.mixer.stopAllAction(), this.defaultAction.reset(), this.defaultAction.time = 0, this.defaultAction.play(), this.mixer.timeScale = 0, this.mixer.update(0), this.avatarRoot.updateMatrixWorld(!0), () => {
      this.mixer.timeScale = n, this.mixer.stopAllAction(), e && (e.reset(), e.time = t, e.play()), this.currentAction = e, this.mixer.update(0);
    };
  }
  /** 모든 헤어 머티리얼의 hairShiftDir uniform 값 변경 */
  setHairShiftDirection(e) {
    this._hairShiftDir = e, this.avatarRoot.traverse((t) => {
      var i, r;
      if (!t.isMesh) return;
      const n = Array.isArray(t.material) ? t.material : [t.material];
      for (const a of n) {
        const o = (r = (i = a.userData) == null ? void 0 : i.hairUniforms) == null ? void 0 : r.hairShiftDir;
        o && (o.value = e);
      }
    });
  }
  /** 모든 헤어 머티리얼의 normalScale 변경 */
  setHairNormalScale(e) {
    this._hairNormalScale = e, this.avatarRoot.traverse((t) => {
      var i;
      if (!t.isMesh) return;
      const n = Array.isArray(t.material) ? t.material : [t.material];
      for (const r of n)
        (i = r.userData) != null && i.hairUniforms && r.normalScale && r.normalScale.set(e, e);
    });
  }
  /** 헤어 uniform 일괄 변경 헬퍼 */
  setHairUniform(e, t) {
    this.avatarRoot.traverse((n) => {
      var r, a;
      if (!n.isMesh) return;
      const i = Array.isArray(n.material) ? n.material : [n.material];
      for (const o of i) {
        const l = (a = (r = o.userData) == null ? void 0 : r.hairUniforms) == null ? void 0 : a[e];
        l && (l.value = t);
      }
    });
  }
  setHairSpecIntensity(e) {
    this.setHairUniform("hairSpecIntensity", e);
  }
  setHairGeomNormalTBN(e) {
    this.setHairUniform("hairGeomNormalTBN", e);
  }
  setHairGaussianSpec(e) {
    this.setHairUniform("hairGaussianSpec", e);
  }
  setHairSpecAAScale(e) {
    this.setHairUniform("hairSpecAAScale", e);
  }
  /** GLB _MetallicIntensity 에 보정 배율 적용 (모든 셰이더 공통). null 이면 그대로 null(미설정 유지).
   *  metalness 는 [0,1] 이므로 1.0 으로 클램프. */
  static metallicBoosted(e) {
    return e != null ? Math.min(1, e * xe.METALLIC_INTENSITY_MULTIPLIER) : void 0;
  }
  /** 파티클 색 override = 해골눈 발광 색 — 효과 색(effectColors[0]), 없으면 예전 칸(colors[4]). 컬러변경 시 눈색과 동기화. */
  static particleEyeColor(e, t) {
    const n = (t == null ? void 0 : t[0]) ?? (e == null ? void 0 : e[4]);
    return n ? [n.r, n.g, n.b] : null;
  }
  /** 특정 파츠의 머티리얼 속성을 런타임 수정 */
  setMaterialProperty(e, t, n, i) {
    for (const [, r] of this.activeParts)
      for (const a of r)
        a.traverse((o) => {
          var h, u, f, m, g, _;
          if (!o.isMesh) return;
          const l = o, c = Array.isArray(l.material) ? l.material : [l.material];
          for (const d of c) {
            if (d.name !== t) continue;
            const p = (h = d.userData) == null ? void 0 : h.hairUniforms;
            if (p) {
              if (n === "_BumpScale") {
                (u = d.normalScale) == null || u.set(i, i);
                return;
              }
              const b = xe.HAIR_PROP_MAP[n];
              if (b && p[b]) {
                p[b].value = i;
                return;
              }
            }
            if (n === "_BumpScale" && ((f = d.userData) != null && f.uvTransformUniforms)) {
              const b = d;
              if (b.normalScale) {
                b.normalScale.set(i, i), d.userData._BumpScale = i;
                return;
              }
            }
            if (n === "_NormalInten") {
              const b = d;
              b.normalScale && b.normalScale.set(i, i), d.userData._NormalInten = i;
              return;
            }
            if (n === "_MetallicIntensity") {
              const b = xe.metallicBoosted(i) ?? 0, x = (m = d.userData) == null ? void 0 : m.uniforms;
              x != null && x.metallicIntensity && (x.metallicIntensity.value = b), d.metalness = b, d.userData._MetallicIntensity = i;
              return;
            }
            if (n === "_Smoothness") {
              const b = (g = d.userData) == null ? void 0 : g.uniforms;
              b != null && b.smoothnessIntensity && (b.smoothnessIntensity.value = i), d.roughness = 1 - i, d.userData._Smoothness = i;
              return;
            }
            const S = (_ = d.userData) == null ? void 0 : _.uniforms;
            if (S) {
              const b = xe.PROP_UNIFORM_MAP[n];
              if (b && S[b]) {
                S[b].value = i, n.startsWith("_Emissive_") && xe.syncEffectLayer(l);
                return;
              }
            }
            d.userData[n] = i;
          }
        });
  }
  /** 볼륨 마스크 활성화/비활성화 — 모든 활성 머티리얼의 volumeMaskEnable uniform 토글 */
  setVolumeMask(e) {
    var t, n;
    this.volumeMaskEnabled = e, this.volumeMaskTargets = [];
    for (const i of this.debugSpheres)
      i.removeFromParent(), (t = i.geometry) == null || t.dispose(), (n = i.material) == null || n.dispose();
    this.debugSpheres = [];
    for (const [, i] of this.activeParts)
      for (const r of i)
        r.traverse((a) => {
          var h, u, f, m, g;
          if (!a.isMesh) return;
          const o = a, l = o.material, c = Array.isArray(l) ? l : [l];
          for (const _ of c) {
            const d = !!((h = _.userData) != null && h.hasExplicitVolumeMask), p = e && d ? 1 : 0, S = (u = _.userData) == null ? void 0 : u.hairUniforms;
            S != null && S.volumeMaskEnable && (S.volumeMaskEnable.value = p, e && d && ((f = _.userData) != null && f.rawMaskCenterUnity) && this.volumeMaskTargets.push({
              uniforms: S,
              rawCenter: _.userData.rawMaskCenterUnity,
              mesh: o
            }));
            const b = (m = _.userData) == null ? void 0 : m.uniforms;
            b != null && b.volumeMaskEnable && (b.volumeMaskEnable.value = p, e && d && ((g = _.userData) != null && g.rawMaskCenterUnity) && this.volumeMaskTargets.push({
              uniforms: b,
              rawCenter: _.userData.rawMaskCenterUnity,
              mesh: o
            }));
          }
        });
    e && this.updateVolumeMaskCenters();
  }
  getIsLoaded() {
    return this.isLoaded;
  }
  getCurrentData() {
    return this.currentAvatarData;
  }
  getResourceInfo() {
    const e = Array.from(this._partResources.values()), t = this.resolve(this.baseSkeletonGlb), n = this._resourceSizes.get(t) ?? 0;
    n > 0 && e.unshift({
      partId: "Msh_Ava_Bip",
      category: -1,
      categoryName: "Skeleton",
      isEx: !1,
      glbUrl: t,
      glbSize: n,
      embeddedTextures: [],
      externalTextures: [],
      meshes: [],
      materials: []
    });
    let i = 0;
    for (const [r, a] of this._resourceSizes)
      r.includes("Ava_D_") && r.endsWith(".glb") && (i += a);
    return (this._decalTextures.length > 0 || i > 0) && e.push({
      partId: "Decals",
      category: -2,
      categoryName: "Decal",
      isEx: !1,
      glbUrl: "",
      glbSize: i,
      embeddedTextures: [],
      externalTextures: this._decalTextures,
      meshes: [],
      materials: []
    }), e;
  }
  getTotalResourceSize() {
    let e = 0;
    for (const t of this.getResourceInfo()) {
      e += t.glbSize;
      for (const n of t.externalTextures) e += n.size;
    }
    return e;
  }
  /** 파티클 시스템 접근자 (로컬 뷰어 튜닝 UI 용 — 외부 컴포넌트에서는 사용하지 않음). */
  getParticleSystem() {
    return this.particleSystem;
  }
  /** 개별 파츠 교체 (전체 리로드 없이) */
  async swapPart(e, t, n, i) {
    var S, b, x, C, A, w, I, q;
    const r = (this.swapSeq.get(e) ?? 0) + 1;
    this.swapSeq.set(e, r);
    const a = (b = (S = this.currentAvatarData) == null ? void 0 : S.PresetPartsDatas.find((v) => v.Category === e && v.ID === t)) == null ? void 0 : b.Custom, o = (i == null ? void 0 : i.custom) ?? a, l = {
      Category: e,
      ID: t,
      Color: n ? { colors: n, ...(x = i == null ? void 0 : i.effectColors) != null && x.length ? { effectColors: i.effectColors } : {} } : void 0,
      ...o ? { Custom: o } : {}
    };
    if (!t || t === "") {
      if (e === 17) {
        if (await this.playPose("Pose_Idle"), this.currentAvatarData) {
          const B = this.currentAvatarData.PresetPartsDatas.findIndex(($) => $.Category === e);
          B >= 0 && this.currentAvatarData.PresetPartsDatas.splice(B, 1);
        }
        return;
      }
      if (xe.isDecalCategory(e)) {
        if (this.removeDecalCategory(e), this.currentAvatarData) {
          const B = this.currentAvatarData.PresetPartsDatas.findIndex(($) => $.Category === e);
          B >= 0 && this.currentAvatarData.PresetPartsDatas.splice(B, 1);
        }
        return;
      }
      const v = l.Category.toString(), E = this.activeParts.get(v);
      if (E) {
        for (const B of E)
          this.avatarRoot.remove(B), this.disposeMeshes(B);
        this.activeParts.delete(v);
      }
      this._partResources.delete(v);
      const k = `${l.Category}_Ex`, G = this.activeParts.get(k);
      if (G) {
        for (const B of G)
          this.avatarRoot.remove(B), this.disposeMeshes(B);
        this.activeParts.delete(k);
      }
      if (this._partResources.delete(k), e === 8 && (this.capMountGroup && (this.capMountGroup.removeFromParent(), this.disposeMeshes(this.capMountGroup), this.capMountGroup = null), this.capUseDefaultMount = !1, this.updateHairCapVisibility(), this.setVolumeMask(!1)), e === 0 && (this.hairCapMountBone = "", this.updateHairCapVisibility(), this.capMountGroup)) {
        const B = this.boneMap.get("Mount_HairCap_001");
        B && (this.capMountGroup.removeFromParent(), this.capMountGroup.scale.set(1, 1, 1), B.add(this.capMountGroup));
      }
      if (this.currentAvatarData) {
        const B = this.currentAvatarData.PresetPartsDatas.findIndex(($) => $.Category === e);
        B >= 0 && this.currentAvatarData.PresetPartsDatas.splice(B, 1);
      }
      return;
    }
    if (this.currentAvatarData) {
      const v = this.currentAvatarData.PresetPartsDatas.findIndex((E) => E.Category === e);
      v >= 0 ? this.currentAvatarData.PresetPartsDatas[v] = l : this.currentAvatarData.PresetPartsDatas.push(l);
    }
    if (e === 1 && this.getSkinColor(), xe.isDecalCategory(e)) {
      await this.loadDecalPart(e, t, n, i == null ? void 0 : i.applySubColorToEx, o);
      return;
    }
    if (e === 17) {
      if (i != null && i.animationTrigger ? await this.playPose(i.animationTrigger) : console.warn("[Pose] animationTrigger가 없음 — options:", i), this.currentAvatarData) {
        const v = this.currentAvatarData.PresetPartsDatas.findIndex((E) => E.Category === e);
        v >= 0 ? this.currentAvatarData.PresetPartsDatas[v] = l : this.currentAvatarData.PresetPartsDatas.push(l);
      }
      return;
    }
    if (e === 4) {
      if (i != null && i.blendShapes && i.blendShapes.length > 0) {
        const v = /* @__PURE__ */ new Map();
        for (const k of this.currentBlendShapes) v.set(k.type, k.value);
        for (const k of i.blendShapes) v.set(k.type, k.value);
        const E = Array.from(v, ([k, G]) => ({ type: k, value: G }));
        this.setBlendShapes(E);
      }
      if (this.currentAvatarData) {
        const v = this.currentAvatarData.PresetPartsDatas.findIndex((E) => E.Category === e);
        v >= 0 ? this.currentAvatarData.PresetPartsDatas[v] = l : this.currentAvatarData.PresetPartsDatas.push(l);
      }
      return;
    }
    e === 8 && (this.capUseDefaultMount = !!(i != null && i.useDefaultHairCapMount)), e === 0 && (this.hairCapMountBone = (i == null ? void 0 : i.capMountBone) ?? "");
    const c = this.volumeMaskEnabled && (e === 0 || e === 11), h = (C = this.partsMetadata) == null ? void 0 : C[t], u = h == null ? void 0 : h.files;
    try {
      await this.loadAndAttachPart(l, !1, r, u);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) !== r) return;
    const f = (v) => {
      if (!c) return;
      const E = l.Category.toString(), k = `${l.Category}_Ex`;
      for (const G of [E, k]) {
        const B = this.activeParts.get(G);
        if (B) for (const $ of B) $.visible = !v;
      }
    };
    f(!0);
    try {
      await this.loadAndAttachPart(l, !0, r, u);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) !== r) return;
    if (f(!0), (e === 8 || e === 0) && this.updateHairCapVisibility(), e === 8 && this.setVolumeMask(!!(i != null && i.useVolumeMask)), this.volumeMaskEnabled && (e === 0 || e === 11 || e === 1) && this.setVolumeMask(!0), f(!1), e === 1 && this.activeDecalProjectors.size > 0 && this.reorderDecalSlots(), e === 0 && this.capMountGroup) {
      const v = this.getCapMountBone();
      v && (this.capMountGroup.removeFromParent(), this.capMountGroup.scale.set(1, 1, 1), v.add(this.capMountGroup));
    }
    if (this.currentBlendShapes.length > 0 && this.applyBlendShapes(this.currentBlendShapes), i != null && i.blendShapes && i.blendShapes.length > 0) {
      const v = /* @__PURE__ */ new Map();
      for (const k of this.currentBlendShapes) v.set(k.type, k.value);
      for (const k of i.blendShapes) v.set(k.type, k.value);
      const E = Array.from(v, ([k, G]) => ({ type: k, value: G }));
      this.setBlendShapes(E);
    }
    e === 0 && this.rebuildHairPhysics();
    const m = `${e}_Ex`, g = this.activeParts.get(m);
    g && requestAnimationFrame(() => {
      for (const v of g)
        v.visible = !1, requestAnimationFrame(() => {
          v.visible = !0;
        });
    }), this.loadHiResTextures();
    const _ = (A = this.partsMetadata) == null ? void 0 : A[t], d = !!(_ != null && _.hasParticle), p = ((w = this.activeParts.get(e.toString())) == null ? void 0 : w[0]) ?? null;
    console.log(`[Particle] swapPart ${t} cat=${e} hasParticle=${d} partRoot=${(p == null ? void 0 : p.name) ?? "null"}`), (this.swapSeq.get(e) ?? 0) === r ? this.particleSystem.setEffect(
      e,
      d ? t : null,
      d ? p : null,
      d ? xe.particleEyeColor(n, ((I = l.Color) == null ? void 0 : I.effectColors) ?? ((q = this.effectColorResolver) == null ? void 0 : q.call(this, e, t, n))) : null
    ).then(() => console.log(`[Particle] setEffect resolved for ${t}`)).catch((v) => console.warn(`[Particle] setEffect failed for ${t}:`, v)) : console.log(`[Particle] swapSeq mismatch, skipping setEffect for ${t}`);
  }
  /** Pose 애니메이션 재생 (trigger 이름으로 매칭, LoopRepeat) */
  async playPose(e) {
    if (!this.mixer) return;
    const t = xe.POSE_ANIM_MAP[e];
    if (t !== void 0) {
      if (t === "") {
        this.poseAction = null, this.fadeToDefault();
        return;
      }
      await this.playAnimationByName(t, !0), this.poseAction = this.currentAction;
    }
  }
  /** 애니메이션 한 번 재생 → 끝나면 원래 포즈(또는 Idle)로 돌아감 (oz-avatar-lineup 클릭 손인사, 2026-11-13) */
  async playOnce(e) {
    await this.playAnimationByName(e, !1);
  }
  /** 랜덤 아이들 애니메이션 재생 */
  async playRandomAnimation() {
    if (!this.mixer || this.idleAnimations.length === 0) return;
    let e = Math.floor(Math.random() * this.idleAnimations.length), t = 0;
    for (; e === this.prevMotionIndex && t < 10; )
      e = Math.floor(Math.random() * this.idleAnimations.length), t++;
    this.prevMotionIndex = e, await this.playAnimationByName(this.idleAnimations[e]);
  }
  /** JSON 데이터로 아바타 로드 */
  /** 지금 불러오는(입고 있는) 아바타에 발광 텍스처를 쓰는 파츠가 있는가 — 블룸 셰이더를 미리 준비할지 판단용 */
  hasEmissivePart() {
    const e = this.partsMetadata;
    return !e || !this.currentAvatarData ? !1 : this.currentAvatarData.PresetPartsDatas.some((t) => {
      var i;
      const n = (i = e[t.ID]) == null ? void 0 : i.files;
      return !!(n != null && n.emissive) || Object.values((n == null ? void 0 : n.sub) ?? {}).some((r) => !!r.emissive);
    });
  }
  async loadAvatarFromData(e) {
    var h, u, f, m, g, _;
    this.currentAvatarData = e, this.clearAvatar(), (h = this.onProgress) == null || h.call(this, 0), this.getSkinColor(), performance.now(), this.loadPartsMetadata(), this.prefetchDecals(e), performance.now();
    try {
      await this.loadBaseSkeleton();
    } catch (d) {
      console.error("[AvatarViewer] 스켈레톤 로드 실패:", d);
    }
    if (this.boneMap.size === 0) {
      console.error("[AvatarViewer] 본 노드 없음");
      return;
    }
    this.avatarRoot.updateMatrixWorld(!0), performance.now();
    const t = await this.loadPartsMetadata(), n = [], i = [];
    let r = null, a = null;
    for (const d of e.PresetPartsDatas) {
      if (!d.ID || d.ID === "") continue;
      const p = (u = t[d.ID]) == null ? void 0 : u.category;
      typeof p == "number" && p !== d.Category && (d.Category = p);
      const S = xe.isDecalCategory(d.Category), b = d.Category === 17;
      if (!S && !b && !t[d.ID]) {
        console.warn(`[AvatarViewer] partsdata에 없는 파츠 — skip: ${d.ID}`);
        continue;
      }
      if (b) {
        a = d;
        continue;
      }
      if (S)
        n.push(d);
      else if (d.Category === 8)
        r = d;
      else {
        if (d.Category === 0) {
          const x = t[d.ID];
          this.hairCapMountBone = (x == null ? void 0 : x.capMountBone) ?? "";
        }
        i.push(d);
      }
    }
    if (this.fillMissingShoes && !i.some(
      (d) => d.Category === 9
      /* Shoes */
    ) && t[xe.DEFAULT_SHOES.ID]) {
      const d = JSON.parse(JSON.stringify(xe.DEFAULT_SHOES)), p = e.PresetPartsDatas.findIndex((S) => S.Category === 9 && !S.ID);
      p >= 0 ? e.PresetPartsDatas[p] = d : e.PresetPartsDatas.push(d), i.push(d);
    }
    r && ((f = t[r.ID]) != null && f.hasParticle) && this.particleSystem.prefetch(r.ID);
    const o = i.reduce((d, p) => {
      var b;
      const S = (b = t[p.ID]) == null ? void 0 : b.files;
      return d + ((S == null ? void 0 : S.glb) !== !1 ? 1 : 0) + ((S == null ? void 0 : S.ex) !== !1 ? 1 : 0);
    }, 0) + (r ? 1 : 0);
    let l = 0;
    const c = () => {
      var d;
      l++, (d = this.onProgress) == null || d.call(this, 50 + l / Math.max(1, o) * 50);
    };
    if (await Promise.all(i.flatMap((d) => {
      var b;
      const p = (b = t[d.ID]) == null ? void 0 : b.files, S = [];
      return (p == null ? void 0 : p.glb) !== !1 && S.push((async () => {
        try {
          await this.loadAndAttachPart(d, !1, void 0, p);
        } catch (x) {
          console.warn(`[AvatarViewer] 파츠 로드 실패: ${d.ID}`, x);
        }
        c();
      })()), (p == null ? void 0 : p.ex) !== !1 && S.push((async () => {
        try {
          await this.loadAndAttachPart(d, !0, void 0, p);
        } catch {
        }
        c();
      })()), S;
    })), r) {
      const d = t[r.ID];
      this.capUseDefaultMount = !!(d != null && d.useDefaultHairCapMount), performance.now();
      try {
        await this.loadAndAttachPart(r, !1, void 0, d == null ? void 0 : d.files);
      } catch (p) {
        console.warn(`[AvatarViewer] Cap 로드 실패: ${r.ID}`, p);
      }
      if (c(), this.updateHairCapVisibility(), d != null && d.useVolumeMask && this.setVolumeMask(!0), d != null && d.hasParticle) {
        const p = ((m = this.activeParts.get(r.Category.toString())) == null ? void 0 : m[0]) ?? null;
        p && this.particleSystem.setEffect(r.Category, r.ID, p, xe.particleEyeColor((g = r.Color) == null ? void 0 : g.colors, this.fxColors(r))).catch((S) => console.warn(`[Particle] setEffect failed for ${r.ID}:`, S));
      }
    }
    if (n.length > 0) {
      performance.now();
      for (const d of n)
        try {
          const p = t[d.ID];
          await this.loadDecalPart(d.Category, d.ID, (_ = d.Color) == null ? void 0 : _.colors, !!(p != null && p.applySubColorToEx), d.Custom);
        } catch (p) {
          console.warn(`[Decal] 로드 실패: ${d.ID}`, p);
        }
    }
    if (performance.now(), e.blendShapes && this.applyBlendShapes(e.blendShapes), this.updateHairCapVisibility(), this.resetEyeBlink(), this.avatarRoot.traverse((d) => {
      d.isMesh && (d.frustumCulled = !1);
    }), performance.now(), this.animClips.size > 0 && this.initializeAnimation(), a) {
      const d = t[a.ID], p = (d == null ? void 0 : d.animationTrigger) ?? a.AnimationTrigger;
      p && await this.playPose(p);
    }
    this.isLoaded = !0, this.rebuildHairPhysics(), this.deferBackground ? this.backgroundPending = !0 : this.startBackgroundLoads();
  }
  /** 고해상도(@2x) 텍스처 받기 켜기/끄기 — 아주 작게 보이는 화면(프로필 미리보기 90×160 등)은 차이가 안 보여 끈다. 켜면 밀린 것을 바로 받는다 */
  setHiRes(e) {
    this.hiResEnabled !== e && (this.hiResEnabled = e, e && !this.backgroundPending && this.loadHiResTextures());
  }
  /** 로드 뒤 배경 받기 — @2x 고해상도 텍스처 교체 + Idle 애니메이션 미리 받기 */
  startBackgroundLoads() {
    this.backgroundPending = !1, this.loadHiResTextures();
    for (const e of this.idleAnimations)
      this.loadAnimationClip(e);
  }
  /** @2x 고해상도 텍스처 백그라운드 로드 → 교체 */
  async loadHiResTextures() {
    if (!this.hiResEnabled || this._hiResQueue.size === 0) return;
    const e = new Di(), t = (l) => new Promise((c) => {
      e.load(l, c, void 0, () => c(null));
    }), n = Array.from(this._hiResQueue.entries());
    this._hiResQueue.clear();
    const i = n.flatMap(([, l]) => l), r = /* @__PURE__ */ new Map();
    let a = 0;
    const o = async () => {
      for (; a < i.length; ) {
        const l = i[a++];
        let c = r.get(l.url);
        c || (c = t(l.url), r.set(l.url, c));
        const h = await c;
        h && (h.colorSpace = ut, h.flipY = !1, l.uniform ? l.uniform.value = h : l.material && l.prop && (l.material[l.prop] = h, l.material.needsUpdate = !0));
      }
    };
    await Promise.all([o(), o(), o(), o()]);
  }
  clearAvatar() {
    var e;
    this._hiResQueue.clear(), (e = this.magicaHair) == null || e.dispose(), this.mixer && (this.mixer.stopAllAction(), this.mixer = null), this.currentAction = null, this.defaultAction = null, this.poseAction = null;
    for (const [, t] of this.activeParts)
      for (const n of t)
        this.avatarRoot.remove(n), this.disposeMeshes(n);
    this.activeParts.clear(), this.baseArmature && (this.avatarRoot.remove(this.baseArmature), this.baseArmature = null, this.boneMap.clear()), this.hairNodes = null, this.capMountGroup = null, this.capUseDefaultMount = !1, this.currentBlendShapes = [], this.hairCapMountBone = "", this.blinkTimeUniforms = [], this.uvTransforms.clear(), this._partResources.clear(), this._resourceSizes.clear(), this._decalTextures = [], this.volumeMaskTargets = [], this.headJointMatrix = null, this.clearAllDecals(), this.faceDecalSlots = [], this.faceSkinnedMesh = null, this.resetEyeBlink(), this.particleSystem.dispose(), this.isLoaded = !1;
  }
  //#region Private
  resolve(e) {
    return this.baseUrl + e;
  }
  /** 미리 받기 (2026-11-17): 누구의 아바타든 똑같은 파일(뼈대·파츠 목록)을 아바타 정보(서버 응답)를 기다리는 동안 받기 시작한다.
   *  예전엔 아바타 정보가 온 뒤에야 시작해 그 왕복 시간(실측 0.4초)만큼 늦었다. 받은 뼈대는 다음 loadBaseSkeleton 한 번이 쓴다 */
  prefetchBase() {
    if (this.loadPartsMetadata(), this.skeletonPrefetch) return;
    const e = this._fetchWithStream(this.resolve(this.baseSkeletonGlb), () => {
    });
    e.catch(() => {
      this.skeletonPrefetch === e && (this.skeletonPrefetch = null);
    }), this.skeletonPrefetch = e;
  }
  async loadBaseSkeleton() {
    performance.now();
    const e = this.resolve(this.baseSkeletonGlb), t = () => this._fetchWithStream(e, (o) => {
      var l;
      (l = this.onProgress) == null || l.call(this, o * 50);
    }), n = this.skeletonPrefetch;
    this.skeletonPrefetch = null;
    const i = n ? await n.catch(t) : await t();
    this._resourceSizes.set(e, i.byteLength);
    const r = await new Promise((o, l) => {
      this.gltfLoader.parse(i.slice(0), "", o, l);
    });
    performance.now(), this.baseArmature = r.scene, this.avatarRoot.add(this.baseArmature), this.boneMap.clear();
    const a = r.scene.getObjectByName("Bip001");
    if (a && a.traverse((o) => {
      o.name && this.boneMap.set(o.name, o);
    }), r.animations && r.animations.length > 0) {
      this.animClips.clear();
      for (const o of r.animations)
        this.animClips.has(o.name) || this.animClips.set(o.name, o);
    }
  }
  async loadAndAttachPart(e, t = !1, n, i) {
    var Q, ge, fe, Ie, Pe;
    const r = e.ID, a = t ? "_Ex" : "", o = i ?? {};
    if (t && o.ex === !1 || !t && o.glb === !1) return;
    const l = this.resolve(`${this.partsBaseUrl}${r}${a}.glb`), c = t ? `${e.Category}_Ex` : e.Category.toString(), u = [
      1,
      6,
      7,
      9,
      10,
      8
      /* Cap */
    ].includes(e.Category) && !t;
    let f = null, m = null, g = null;
    const _ = {}, p = [
      3,
      2,
      5
      /* Mouth */
    ].includes(e.Category);
    let S = null, b = null;
    const x = (e.Category === 0 || e.Category === 11) && !t;
    let C = null, A = null;
    const w = (Z) => this.loadTexture(Z).catch(() => null), I = (async () => {
      if (u) {
        performance.now();
        const [Z, ne, ie, R] = await Promise.all([
          o.mask1 ? w(this.resolve(`${this.masksBaseUrl}${r}_mask1.${o.mask1}`)) : Promise.resolve(null),
          o.mask2 ? w(this.resolve(`${this.masksBaseUrl}${r}_mask2.${o.mask2}`)) : Promise.resolve(null),
          o.pbr ? w(this.resolve(`${this.masksBaseUrl}${r}_pbr.${o.pbr}`)) : Promise.resolve(null),
          o.emissive ? w(this.resolve(`${this.masksBaseUrl}${r}_emissive.${o.emissive}`)) : Promise.resolve(null)
        ]);
        Z && ne ? f = { mask1: Z, mask2: ne, pbr: ie ?? void 0 } : Z && (m = { mask: Z, pbr: ie ?? void 0, emissive: R }), g = R;
        const _e = { mask1: Z, mask2: ne, pbr: ie, emissive: R };
        await Promise.all(Object.entries(o.sub ?? {}).map(async ([Ne, Ae]) => {
          const ke = (H) => Ae[H] ? Ae[H] === "=" ? Promise.resolve(_e[H]) : w(this.resolve(`${this.masksBaseUrl}${r}_sub_${H}.${Ae[H]}`)) : Promise.resolve(null), [Re, T, M, F] = await Promise.all([ke("mask1"), ke("mask2"), ke("pbr"), ke("emissive")]);
          _[Ne] = { mask1: Re, mask2: T, pbr: M, emissive: F };
        }));
      } else if (p) {
        const Z = t ? o.exMask1 : o.mask1, ne = t ? o.exNormal : o.normal, [ie, R] = await Promise.all([
          Z ? w(this.resolve(`${this.masksBaseUrl}${r}${a}_mask1.${Z}`)) : Promise.resolve(null),
          // 노말맵: Sprite_MaskTint 셰이더의 _Normal_Map (눈/입/눈썹 가짜 3D 음영).
          // main / Ex 별도 export되므로 suffix에 따라 다른 파일 로드.
          ne ? w(this.resolve(`${this.masksBaseUrl}${r}${a}_normal.${ne}`)) : Promise.resolve(null)
        ]);
        S = ie, b = R;
      } else if (x) {
        performance.now();
        const [Z, ne] = await Promise.all([
          o.mask ? w(this.resolve(`${this.masksBaseUrl}${r}_mask.${o.mask}`)) : Promise.resolve(null),
          o.normal ? w(this.resolve(`${this.masksBaseUrl}${r}_normal.${o.normal}`)) : Promise.resolve(null)
        ]);
        C = Z, A = ne, Z || console.warn(`[AvatarViewer] 헤어 마스크 텍스처 로드 실패: ${r}`);
      }
    })(), q = (async () => {
      const Z = await this.fetchWithProgress(l);
      return this._resourceSizes.set(l, Z.byteLength), new Promise((ne, ie) => {
        this.gltfLoader.parse(Z.slice(0), "", ne, ie);
      });
    })(), [v] = await Promise.all([q, I]);
    if (n !== void 0 && this.swapSeq.get(e.Category) !== n) return;
    const E = ["Hair", "FaceType", "EyeBrow", "Eye", "Nose", "Mouth", "Upper", "Lower", "Cap", "Shoes", "Glasses", "Whiskers"], k = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), B = (Q = v.parser) == null ? void 0 : Q.json;
    if (B != null && B.images) {
      const Z = B.images.map((ie) => {
        var R, Me;
        return ie.bufferView != null ? ((Me = (R = B.bufferViews) == null ? void 0 : R[ie.bufferView]) == null ? void 0 : Me.byteLength) ?? 0 : 0;
      }), ne = (ge = v.parser) == null ? void 0 : ge.associations;
      if (ne) {
        for (const [ie, R] of ne)
          if ((R == null ? void 0 : R.textures) !== void 0 && (ie != null && ie.isTexture)) {
            const Me = (Ie = (fe = B.textures) == null ? void 0 : fe[R.textures]) == null ? void 0 : Ie.source;
            if (Me !== void 0) {
              k.set(ie, Z[Me] ?? 0);
              const _e = ((Pe = B.images[Me]) == null ? void 0 : Pe.mimeType) ?? "";
              G.set(ie, _e);
            }
          }
      }
    }
    v.scene.traverse((Z) => {
      const ne = Z;
      if (!ne.isMesh || ne.geometry.attributes.color) return;
      const ie = ne.geometry.attributes.position.count;
      ne.geometry.setAttribute("color", new Mt(new Uint8Array(ie * 4).fill(255), 4, !0));
      for (const R of Array.isArray(ne.material) ? ne.material : [ne.material]) R && (R.vertexColors = !0);
    });
    const $ = /* @__PURE__ */ new Set(), z = [], J = [], V = [], he = /* @__PURE__ */ new Set();
    v.scene.traverse((Z) => {
      if (!Z.isMesh) return;
      const ne = Z, ie = ne.geometry, R = Array.isArray(ne.material) ? ne.material : [ne.material], Me = [];
      for (const ke of R) {
        const Re = ke.name || "unnamed";
        if (Me.push(Re), !he.has(Re)) {
          he.add(Re);
          const T = {};
          for (const [M, F] of Object.entries(ke.userData))
            typeof F == "number" && (T[M] = F);
          T._Emissive_Strangth != null && (T._Emissive_Tint_Gamma ?? (T._Emissive_Tint_Gamma = xe.EMISSIVE_TINT_GAMMA)), Object.keys(T).length > 0 && V.push({ materialName: Re, properties: T });
        }
        if (ke instanceof hn) {
          const T = [
            ["map", ke.map],
            ["normalMap", ke.normalMap],
            ["aoMap", ke.aoMap],
            ["emissiveMap", ke.emissiveMap],
            ["roughnessMap", ke.roughnessMap],
            ["metalnessMap", ke.metalnessMap]
          ];
          for (const [M, F] of T)
            if (F && !$.has(F)) {
              $.add(F);
              const H = F.image, Y = G.get(F) ?? "", X = Y === "image/jpeg" ? ".jpg" : Y === "image/png" ? ".png" : "";
              z.push({
                type: M,
                name: (F.name || "") + X,
                url: "",
                size: k.get(F) ?? 0,
                texture: F,
                width: (H == null ? void 0 : H.width) ?? 0,
                height: (H == null ? void 0 : H.height) ?? 0
              });
            }
        }
      }
      const _e = ie.getAttribute("position"), Ne = _e ? _e.count : 0, Ae = ie.index ? ie.index.count : Ne;
      J.push({
        name: ne.name || "unnamed",
        vertexCount: Ne,
        triangleCount: Math.floor(Ae / 3),
        materialNames: Me
      });
    });
    const ue = [], oe = (Z, ne, ie) => {
      if (!ne) return;
      const R = this.resolve(`${this.masksBaseUrl}${r}${ie}`), Me = ne.image, _e = R.split("/").pop() || "";
      ue.push({
        type: Z,
        name: _e,
        url: R,
        size: this._resourceSizes.get(R) ?? 0,
        texture: ne,
        width: (Me == null ? void 0 : Me.width) ?? 0,
        height: (Me == null ? void 0 : Me.height) ?? 0
      });
    };
    if (f) {
      const Z = f;
      oe("mask1", Z.mask1, `_mask1.${o.mask1 || "png"}`), oe("mask2", Z.mask2, `_mask2.${o.mask2 || "png"}`), oe("pbr", Z.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (m) {
      const Z = m;
      oe("mask", Z.mask, `_mask1.${o.mask1 || "png"}`), oe("pbr", Z.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (g && oe("emissive", g, `_emissive.${o.emissive || "png"}`), S && oe("mask1", S, `${a}_mask1.${(t ? o.exMask1 : o.mask1) || "png"}`), b && oe("normal", b, `${a}_normal.${(t ? o.exNormal : o.normal) || "png"}`), C && oe("mask", C, `_mask.${o.mask || "png"}`), A && oe("normal", A, `_normal.${o.normal || "png"}`), this._partResources.set(c, {
      partId: r + a,
      category: e.Category,
      categoryName: E[e.Category] ?? `Cat${e.Category}`,
      isEx: t,
      glbUrl: l,
      glbSize: this._resourceSizes.get(l) ?? 0,
      embeddedTextures: z,
      externalTextures: ue,
      meshes: J,
      materials: V
    }), e.Category === 0 && !t) {
      const Z = this.isCapActive(), ne = [];
      let ie = null;
      const R = (Me) => {
        for (let _e = Me.parent; _e; _e = _e.parent) if (_e.name.endsWith("_Cap")) return !0;
        return !1;
      };
      v.scene.traverse((Me) => {
        Me.name.endsWith("_Cap") ? (ie = Me, Me.visible = Z) : Me.isSkinnedMesh && !R(Me) && (ne.push(Me), Me.visible = !Z);
      }), ne.length && ie ? this.hairNodes = { normal: ne, cap: ie } : this.hairNodes = null;
    }
    const We = e.Category === 8 && !t, Ye = We ? this.getCapMountBone() : null;
    if (v.scene.traverse((Z) => {
      var ne, ie, R, Me, _e, Ne, Ae, ke, Re;
      if (Z.isSkinnedMesh) {
        const T = Z;
        We || this.rebindToBaseSkeleton(T);
        const M = T.material.name;
        if (M != null && M.endsWith("_Lens")) {
          this.applyLensMaterial(T, (ne = e.Color) == null ? void 0 : ne.colors);
          return;
        }
        if (M != null && M.endsWith("_Lamp")) {
          if (g) {
            const H = T.material, Y = H.userData, { material: X, timeUniform: Ee } = km(H, {
              emissiveMap: g,
              emissiveStrength: Y._Emissive_Strangth ?? 10,
              emissiveTintGamma: Y._Emissive_Tint_Gamma ?? xe.EMISSIVE_TINT_GAMMA,
              // 색공간 보정 — 2.2 = Unity(sRGB 텍스처), 머티리얼에 값이 있으면 그것
              blinkSpeed: Y._Blink_Speed ?? 0.5,
              mapTiling: [Y._Map_Tiling_X ?? 2, Y._Map_Tiling_Y ?? 4],
              metallicIntensity: xe.metallicBoosted(Y._MetallicIntensity),
              smoothness: Y._Smoothness
            });
            T.material = X, T.layers.enable(dr), this.blinkTimeUniforms.push(Ee);
          }
          return;
        }
        const F = M ? _[M] : void 0;
        if (F) {
          T.userData.ozSubOwn = !0, F.mask1 && F.mask2 ? this.applyMask2TintMaterial(T, { mask1: F.mask1, mask2: F.mask2, pbr: F.pbr ?? void 0 }, (ie = e.Color) == null ? void 0 : ie.colors, F.emissive, this.fxColors(e)) : F.mask1 ? this.applyMaskTintMaterial(T, { mask: F.mask1, pbr: F.pbr ?? void 0, emissive: F.emissive }, e.Category, (R = e.Color) == null ? void 0 : R.colors, this.fxColors(e)) : (Me = e.Color) != null && Me.colors && this.applyColorsToMesh(T, e.Category, e.Color.colors);
          return;
        }
        if (S) {
          if (this.applySpriteMaskTintMaterial(T, S, (_e = e.Color) == null ? void 0 : _e.colors, e.Category, t, b), b) {
            const Y = T.material.name || "unnamed";
            V.find((X) => X.materialName === Y) || V.push({ materialName: Y, properties: { _BumpScale: 1 } });
          }
        } else if (x) {
          const H = T.material, Y = C ?? H.aoMap;
          Y && this.applyHairMaterial(T, Y, (Ne = e.Color) == null ? void 0 : Ne.colors, A);
        } else f ? this.applyMask2TintMaterial(T, f, (Ae = e.Color) == null ? void 0 : Ae.colors, g, this.fxColors(e)) : m ? this.applyMaskTintMaterial(T, m, e.Category, (ke = e.Color) == null ? void 0 : ke.colors, this.fxColors(e)) : (Re = e.Color) != null && Re.colors && this.applyColorsToMesh(T, e.Category, e.Color.colors);
      }
    }), We && Ye) {
      this.capMountGroup && (this.capMountGroup.removeFromParent(), this.disposeMeshes(this.capMountGroup));
      const Z = new fn();
      Z.name = e.ID, v.scene.updateMatrixWorld(!0);
      const ne = v.scene.matrixWorld.clone().invert();
      v.scene.traverse((R) => {
        if (R.isSkinnedMesh) {
          const Me = R, _e = new vt(Me.geometry, Me.material);
          _e.name = Me.name, _e.frustumCulled = !1, _e.layers.mask = Me.layers.mask, ne.clone().multiply(Me.matrixWorld).decompose(_e.position, _e.quaternion, _e.scale), Z.add(_e);
        } else if (R.name && R.name.startsWith("Mount_")) {
          const Me = new rt();
          Me.name = R.name, ne.clone().multiply(R.matrixWorld).decompose(Me.position, Me.quaternion, Me.scale), Z.add(Me);
        }
      }), Z.scale.set(1, 1, 1), Ye.add(Z), this.capMountGroup = Z;
      const ie = this.activeParts.get(c);
      if (ie)
        for (const R of ie)
          R.removeFromParent(), this.disposeMeshes(R);
      this.activeParts.set(c, [Z]), this.enableCastShadow && Z.traverse((R) => {
        R.isMesh && (R.castShadow = !0);
      });
    } else {
      this.avatarRoot.add(v.scene);
      const Z = this.activeParts.get(c);
      if (Z)
        for (const ne of Z)
          this.avatarRoot.remove(ne), this.disposeMeshes(ne);
      this.activeParts.set(c, [v.scene]);
    }
    this.enableCastShadow && v.scene.traverse((Z) => {
      Z.isMesh && (Z.castShadow = !0);
    });
    const j = o.hi;
    if (j && Object.keys(j).length > 0) {
      const Z = [], ne = [];
      f ? (j.mask1 && ne.push(["mask1", "maskTintMap1", "_mask1@2x.webp"]), j.mask2 && ne.push(["mask2", "maskTintMap2", "_mask2@2x.webp"]), j.pbr && ne.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : m ? (j.mask1 && ne.push(["mask1", "maskTintMap", "_mask1@2x.webp"]), j.pbr && ne.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : p ? (j[t ? "exMask1" : "mask1"] || j.mask1) && ne.push(["mask1", "maskTintMap", `${a}_mask1@2x.webp`]) : x && j.mask && ne.push(["mask", "hairMaskMap", "_mask@2x.webp"]), v.scene.traverse((ie) => {
        var _e;
        if (!ie.isMesh) return;
        const R = ie.material, Me = (_e = R == null ? void 0 : R.userData) == null ? void 0 : _e.uniforms;
        if (!(!Me || ie.userData.ozSubOwn))
          for (const [, Ne, Ae] of ne)
            Me[Ne] && Z.push({
              uniform: Me[Ne],
              url: this.resolve(`${this.masksBaseUrl}${r}${Ae}`)
            });
      }), j.normal && A && v.scene.traverse((ie) => {
        if (!ie.isMesh) return;
        const R = ie.material;
        R != null && R.normalMap && Z.push({
          material: R,
          prop: "normalMap",
          url: this.resolve(`${this.masksBaseUrl}${r}_normal@2x.webp`)
        });
      }), Z.length > 0 && this._hiResQueue.set(e.Category + (t ? 100 : 0), Z);
    }
  }
  /** 스트림 기반 fetch (스켈레톤용 — 바이트 단위 진행률) */
  async _fetchWithStream(e, t, n = 3) {
    for (let i = 0; i < n; i++) {
      let r;
      try {
        r = await fetch(e);
      } catch (f) {
        if (i < n - 1) {
          await new Promise((m) => setTimeout(m, 500 * (i + 1)));
          continue;
        }
        throw f;
      }
      if (r.status === 429 && i < n - 1) {
        await new Promise((f) => setTimeout(f, 300 * (i + 1)));
        continue;
      }
      if (!r.ok) throw new Error(`Fetch failed ${r.status}: ${e}`);
      const a = parseInt(r.headers.get("content-length") || "0", 10);
      if (!r.body || a <= 0) {
        const f = await r.arrayBuffer();
        return t(1), f;
      }
      const o = r.body.getReader(), l = [];
      let c = 0;
      for (; ; ) {
        const { done: f, value: m } = await o.read();
        if (f) break;
        l.push(m), c += m.byteLength, t(c / a);
      }
      const h = new Uint8Array(c);
      let u = 0;
      for (const f of l)
        h.set(f, u), u += f.byteLength;
      return h.buffer;
    }
    throw new Error(`Fetch failed after retries: ${e}`);
  }
  /** 동시 요청 수 제한 설정 (0=무제한, 모바일에서 4~6 권장) */
  setMaxConcurrentFetches(e) {
    this._maxConcurrent = e;
  }
  async _acquireFetchSlot() {
    if (this._maxConcurrent <= 0 || this._activeFetches < this._maxConcurrent) {
      this._activeFetches++;
      return;
    }
    return new Promise((e) => {
      this._fetchQueue.push(() => {
        this._activeFetches++, e();
      });
    });
  }
  _releaseFetchSlot() {
    if (this._activeFetches--, this._maxConcurrent > 0) {
      const e = this._fetchQueue.shift();
      e && e();
    }
  }
  /** 429 자동 재시도 + 바이트 진행률 추적 fetch (모듈 레벨 캐시 적용) */
  async fetchWithProgress(e, t = 3) {
    const n = ds.get(e);
    if (n) return n;
    await this._acquireFetchSlot();
    const i = ds.get(e);
    if (i)
      return this._releaseFetchSlot(), i;
    const r = this._fetchWithProgressInner(e, t);
    ds.set(e, r);
    try {
      return await r;
    } catch (a) {
      throw ds.delete(e), a;
    } finally {
      this._releaseFetchSlot();
    }
  }
  async _fetchWithProgressInner(e, t) {
    for (let n = 0; n < t; n++) {
      let i;
      try {
        i = await fetch(e);
      } catch (r) {
        if (n < t - 1) {
          await new Promise((a) => setTimeout(a, 500 * (n + 1)));
          continue;
        }
        throw r;
      }
      if (i.status === 429 && n < t - 1) {
        await new Promise((r) => setTimeout(r, 300 * (n + 1)));
        continue;
      }
      if (!i.ok) throw new Error(`Fetch failed ${i.status}: ${e}`);
      return await i.arrayBuffer();
    }
    throw new Error(`Fetch failed after retries: ${e}`);
  }
  async loadTexture(e) {
    const t = mr.get(e);
    if (t) return t;
    const n = this._loadTextureInner(e);
    mr.set(e, n);
    try {
      return await n;
    } catch (i) {
      throw mr.delete(e), i;
    }
  }
  async _loadTextureInner(e) {
    const t = await this.fetchWithProgress(e), n = new Blob([t]);
    this._resourceSizes.set(e, n.size);
    const i = URL.createObjectURL(n);
    return new Promise((r, a) => {
      this.textureLoader.load(i, (o) => {
        URL.revokeObjectURL(i), o.flipY = !1, o.colorSpace = ut, r(o);
      }, void 0, (o) => {
        URL.revokeObjectURL(i), a(o);
      });
    });
  }
  /** 현재 프리셋에서 FaceType의 colors[0] (피부색) 추출 — sRGB→linear 변환 + 공유 uniform 갱신 */
  getSkinColor() {
    var i, r;
    if (!this.currentAvatarData) return;
    const e = this.currentAvatarData.PresetPartsDatas.find(
      (a) => a.Category === 1
      /* FaceType */
    ), t = (r = (i = e == null ? void 0 : e.Color) == null ? void 0 : i.colors) == null ? void 0 : r[0];
    if (!t) return;
    const n = new ae(t.r, t.g, t.b).convertSRGBToLinear();
    return this.skinColorUniform.value.copy(n), n;
  }
  /** 이 파츠의 효과 색 — 데이터에 있으면 그대로, 없으면 resolver 로 찾아 데이터에도 적어 둔다 (저장할 때 같이 나가게) */
  fxColors(e) {
    var n, i;
    if (!e.Color) return;
    if ((n = e.Color.effectColors) != null && n.length) return e.Color.effectColors;
    const t = (i = this.effectColorResolver) == null ? void 0 : i.call(this, e.Category, e.ID, e.Color.colors);
    return t != null && t.length && (e.Color.effectColors = t), t;
  }
  /**
   * 효과 레이어의 '효과 색'(머티리얼 색 방식 0) — 색 프리셋의 효과 색(effectColors[0]). 그 필드가 없는 데이터(옛 저장본·아직 안 옮긴 파츠)는
   * 예전 칸의 옷 색(slot: 마스크 2장 = colors[4], 1장 = colors[1]). 어느 쪽이든 값은 raw 로 넘긴다 (계산은 예전 그대로 — 색만 어디서 오느냐가 다르다).
   */
  static effectTint(e, t) {
    const n = (t == null ? void 0 : t[0]) ?? e;
    return n ? new ae(n.r, n.g, n.b) : void 0;
  }
  /** GLB 머티리얼 extras(.mat 값) → 효과 레이어 파라미터 (MaskTint·Mask2Tint 공용, ozEffectLayer.ts) */
  static effectLayerParams(e, t, n) {
    return (e._Emissive_Flow_X || e._Emissive_Flow_Y) && xe.setRepeatWrap(t), {
      emissiveMap: t,
      emissiveStrength: e._Emissive_Strangth,
      emissiveTintColor: n,
      emissiveTintGamma: e._Emissive_Tint_Gamma ?? xe.EMISSIVE_TINT_GAMMA,
      // 색공간 보정 — 2.2 = Unity(sRGB), 머티리얼에 값이 있으면 그것
      emissiveDesatStart: e._Emissive_Desat_Start,
      // 파츠별 흰색 롤오프 (.mat)
      emissiveDesatMax: e._Emissive_Desat_Max,
      emissiveFlickerSpeed: e._Emissive_Flicker_Speed,
      // 파츠별 발광 점멸 (.mat, 옵트인)
      emissiveFlickerMin: e._Emissive_Flicker_Min,
      emissiveFlickerColor: e._Emissive_Flicker_Color,
      emissivePulsePeriod: e._Emissive_Pulse_Period,
      // 파츠별 주기 펄스 (.mat, 옵트인 — 해골 눈 C_016)
      emissivePulseMin: e._Emissive_Pulse_Min,
      emissivePulseSharp: e._Emissive_Pulse_Sharp,
      emissiveBlackoutFreq: e._Emissive_Blackout_Freq,
      // 불규칙 암전 (.mat, 옵트인 — 프레디 모자)
      emissiveBlackoutThreshold: e._Emissive_Blackout_Threshold,
      emissiveFlowX: e._Emissive_Flow_X,
      // 흐름 (UV/초)
      emissiveFlowY: e._Emissive_Flow_Y,
      emissiveCellSpeed: e._Emissive_Cell_Speed,
      // 칸별 깜빡임
      emissiveCellTilingX: e._Emissive_Cell_Tiling_X,
      emissiveCellTilingY: e._Emissive_Cell_Tiling_Y,
      emissiveCellRatio: e._Emissive_Cell_Ratio,
      emissiveCellRandom: e._Emissive_Cell_Random,
      emissiveCellDead: e._Emissive_Cell_Dead,
      emissiveCellSoft: e._Emissive_Cell_Soft,
      emissiveColorMode: e._Emissive_Color_Mode,
      emissivePixelSpeed: e._Emissive_Pixel_Speed,
      // 픽셀 상승
      emissivePixelTilingX: e._Emissive_Pixel_Tiling_X,
      emissivePixelTilingY: e._Emissive_Pixel_Tiling_Y,
      emissivePixelGap: e._Emissive_Pixel_Gap,
      emissivePixelShape: e._Emissive_Pixel_Shape,
      emissivePixelSoft: e._Emissive_Pixel_Soft,
      emissivePixelDensity: e._Emissive_Pixel_Density,
      // 픽셀 상승 다듬기 (기본 0·1·0)
      emissiveSweepSpeed: e._Emissive_Sweep_Speed,
      emissiveSweepAngle: e._Emissive_Sweep_Angle,
      emissiveSweepCount: e._Emissive_Sweep_Count,
      emissiveSweepWidth: e._Emissive_Sweep_Width,
      emissiveSweepGain: e._Emissive_Sweep_Gain,
      emissiveSweepBase: e._Emissive_Sweep_Base,
      emissiveSweepLine: e._Emissive_Sweep_Line,
      // 훑는 빛 (속도 0 = 없음)
      emissiveWarp: e._Emissive_Warp,
      emissiveWarpScale: e._Emissive_Warp_Scale,
      emissiveWarpSpeed: e._Emissive_Warp_Speed,
      emissiveWarpAngle: e._Emissive_Warp_Angle,
      // 일렁임 (세기 0 = 없음)
      emissiveColorGain: e._Emissive_Color_Gain,
      // 텍스처 색 세기
      emissiveGlow: e._Emissive_Glow,
      // 발광 양 (기본 1)
      emissivePattern: e._Emissive_Pattern
      // 무늬 양 (기본 0)
    };
  }
  static setRepeatWrap(e) {
    !e || e.wrapS === 1e3 || (e.wrapS = e.wrapT = 1e3, e.needsUpdate = !0);
  }
  /** 효과 레이어 머티리얼을 붙인 뒤: 시간 공급 등록 + 블룸 대상 여부 갱신 */
  registerEffectLayer(e, t) {
    var n, i;
    for (const r of t) {
      const a = (i = (n = r.userData) == null ? void 0 : n.uniforms) == null ? void 0 : i.emissiveFlickerTime;
      a && !this.blinkTimeUniforms.includes(a) && this.blinkTimeUniforms.push(a);
    }
    xe.syncEffectLayer(e);
  }
  /** 효과 레이어 값이 바뀐 뒤 메시 상태 맞추기 (뷰어·Studio 라이브 편집 공용): 흐르는 효과 텍스처는 반복 모드로,
   *  빛을 내는 머티리얼이 하나라도 있으면 셀렉티브 블룸 소스 레이어에 넣고 없으면 뺀다 (selectiveBloom.ts) */
  static syncEffectLayer(e) {
    var i, r, a;
    const t = Array.isArray(e.material) ? e.material : [e.material], n = t.map((o) => {
      var l;
      return (l = o == null ? void 0 : o.userData) == null ? void 0 : l.uniforms;
    }).filter((o) => !!(o != null && o.emissiveGlow));
    if (n.length !== 0) {
      for (const o of n) ((i = o.emissiveFlowX) != null && i.value || (r = o.emissiveFlowY) != null && r.value) && xe.setRepeatWrap((a = o.emissiveMap) == null ? void 0 : a.value);
      t.some((o) => Pm(o)) ? e.layers.enable(dr) : e.layers.disable(dr);
    }
  }
  applyMask2TintMaterial(e, t, n, i, r) {
    const o = (Array.isArray(e.material) ? e.material : [e.material]).map((l) => {
      if (!(l instanceof hn)) return l;
      const c = (x) => new ae(x.r, x.g, x.b).convertSRGBToLinear(), h = n != null && n[0] ? c(n[0]) : void 0, u = n != null && n[1] ? c(n[1]) : void 0, f = n != null && n[2] ? c(n[2]) : void 0, m = n != null && n[3] ? c(n[3]) : void 0, g = n != null && n[4] ? c(n[4]) : void 0, _ = l.userData, d = _._Emissive_Strangth != null && i, p = _._Mask_Center_X != null ? new P(_._Mask_Center_X, _._Mask_Center_Y, _._Mask_Center_Z) : void 0, S = _._Mask_Radius ?? void 0, b = Dm(l, {
        maskTintMap1: t.mask1,
        maskTintMap2: t.mask2,
        pbrMaskMap: t.pbr,
        tintColorR1Uniform: this.skinColorUniform,
        tintColorG1: h,
        tintColorB1: u,
        tintColorR2: f,
        tintColorG2: m,
        tintColorB2: g,
        metallicIntensity: xe.metallicBoosted(_._MetallicIntensity),
        smoothness: _._Smoothness,
        aoIntensity: _._AOIntensity,
        rimPower: _._Rim_Power,
        rimEdgePower: _._Rim_Edge_Power,
        ...d ? xe.effectLayerParams(_, i, xe.effectTint(n == null ? void 0 : n[4], r)) : {},
        // _Mask2_Tint_B = colors[4] (raw, Unity SetColor 매칭)
        maskRadius: S
      });
      return p && (b.userData.rawMaskCenterUnity = p.clone(), b.userData.hasExplicitVolumeMask = !0), b;
    });
    e.material = o.length === 1 ? o[0] : o, this.registerEffectLayer(e, o), this.attachVolumeMaskDepthMaterial(e);
  }
  applyMaskTintMaterial(e, t, n, i, r) {
    const o = (Array.isArray(e.material) ? e.material : [e.material]).map((l) => {
      if (!(l instanceof hn)) return l;
      const c = (b) => new ae(b.r, b.g, b.b).convertSRGBToLinear();
      let h, u, f, m = !1;
      n === 1 ? (h = i != null && i[0] ? c(i[0]) : void 0, u = i != null && i[1] ? c(i[1]) : void 0) : n === 10 ? (h = new ae(0, 0, 0), u = i != null && i[0] ? c(i[0]) : void 0, f = i != null && i[1] ? c(i[1]) : void 0) : (m = !0, u = i != null && i[0] ? c(i[0]) : void 0, f = i != null && i[1] ? c(i[1]) : void 0);
      const g = l.userData, _ = g._Mask_Center_X != null ? new P(g._Mask_Center_X, g._Mask_Center_Y, g._Mask_Center_Z) : void 0, d = g._Mask_Radius ?? void 0, p = n === 1, S = Im(l, {
        maskTintMap: t.mask,
        pbrMaskMap: t.pbr,
        tintColorR: h,
        tintColorRUniform: m ? this.skinColorUniform : void 0,
        tintColorG: u,
        tintColorB: f,
        metallicIntensity: xe.metallicBoosted(g._MetallicIntensity),
        smoothness: g._Smoothness,
        aoIntensity: g._AOIntensity,
        rimPower: g._Rim_Power,
        rimEdgePower: g._Rim_Edge_Power,
        maskRadius: d,
        decalSlots: p ? xe.MAX_DECAL_SLOTS : 0,
        // 효과 레이어 — Mask2Tint 와 같은 조건(효과 텍스처 + _Emissive_Strangth). 색 = 두 번째 색(colors[1], raw)
        ...g._Emissive_Strangth != null && t.emissive ? xe.effectLayerParams(g, t.emissive, xe.effectTint(i == null ? void 0 : i[1], r)) : {}
      });
      if (_ && (S.userData.rawMaskCenterUnity = _.clone(), S.userData.hasExplicitVolumeMask = !0), p) {
        const b = Lm(S);
        b && (this.faceDecalSlots = b, this.faceSkinnedMesh = e);
      }
      return S;
    });
    e.material = o.length === 1 ? o[0] : o, this.registerEffectLayer(e, o), this.attachVolumeMaskDepthMaterial(e);
  }
  applySpriteMaskTintMaterial(e, t, n, i, r, a) {
    const o = Array.isArray(e.material) ? e.material : [e.material], l = i === 3, c = i === 3 ? r ? "eye_r" : "eye_l" : i === 2 ? r ? "eyebrow_r" : "eyebrow_l" : "mouth_l", h = {
      rotation: { value: 0 },
      scale: { value: 1.5 },
      offsetX: { value: 0 },
      offsetY: { value: 0 }
    };
    this.uvTransforms.set(c, h);
    const u = o.map((f) => {
      if (!(f instanceof hn)) return f;
      const m = (d) => new ae(d.r, d.g, d.b).convertSRGBToLinear(), g = n != null && n[0] ? m(n[0]) : void 0, _ = n != null && n[1] ? m(n[1]) : void 0;
      return Um(f, {
        maskTintMap: t,
        tintColorRUniform: this.skinColorUniform,
        tintColorG: g,
        tintColorB: _,
        uvScaleYEyeBlink: l ? r ? this.eyeBlinkUniformR : this.eyeBlinkUniform : void 0,
        uvTransform: h,
        normalMap: a ?? void 0
      });
    });
    e.material = u.length === 1 ? u[0] : u;
  }
  applyHairMaterial(e, t, n, i) {
    const a = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof hn)) return o;
      const l = (d) => new ae(d.r, d.g, d.b).convertSRGBToLinear(), c = n != null && n[0] ? l(n[0]) : void 0, h = n != null && n[1] ? l(n[1]) : void 0, u = o.transparent, f = o.userData, m = f._Mask_Center_X != null ? new P(f._Mask_Center_X, f._Mask_Center_Y, f._Mask_Center_Z) : void 0, g = f._Mask_Radius ?? void 0, _ = Fm(o, {
        baseColor: c,
        specColor: h,
        maskMap: t,
        normalMap: i ?? void 0,
        blend: u,
        smoothness: f._Smoothness,
        specularShift: f._SpecularShift,
        specularExponent: f._SpecularExponent,
        secondarySpecularShift: f._SecondarySpecularShift,
        secondarySpecularExponent: f._SecondarySpecularExponent,
        enableSecondaryLobe: f._EnableSecondaryLobe !== 0,
        hairRim: f._Hair_Rim ?? (u ? 1.5 : void 0),
        normalInten: f._BumpScale,
        shiftDirection: this._hairShiftDir,
        maskRadius: g
      });
      return m && (_.userData.rawMaskCenterUnity = m.clone(), _.userData.hasExplicitVolumeMask = !0), _;
    });
    e.material = a.length === 1 ? a[0] : a, this.attachVolumeMaskDepthMaterial(e);
  }
  applyLensMaterial(e, t) {
    const n = e.material;
    n.transparent && (e.renderOrder = xe.LENS_RENDER_ORDER);
    const i = n.aoMap, r = (u) => new ae(u.r, u.g, u.b).convertSRGBToLinear(), a = t != null && t[2] ? r(t[2]) : void 0, o = t != null && t[3] ? r(t[3]) : void 0, l = t != null && t[4] ? r(t[4]) : void 0, c = n.userData, h = 0.8;
    e.material = Nm(n, {
      pbrMaskMap: i ?? void 0,
      topColor: a,
      bottomColor: o,
      specularColor: l,
      gradientSmooth: c._Gradient_Smooth,
      gradientPosition: c._Gradient_Position,
      specularPower: c._Specular_Power,
      fresnelPower: c._Fresnel_Power,
      smoothness: c._Smoothness,
      metallicIntensity: xe.metallicBoosted(c._MetallicIntensity),
      aoIntensity: c._AOIntensity,
      lightScale: h
    });
  }
  rebindToBaseSkeleton(e) {
    if (this.boneMap.size === 0) return;
    const t = e.skeleton;
    if (!t || !t.bones.length) return;
    const n = [];
    for (const r of t.bones) {
      const a = this.boneMap.get(r.name + "_1") || this.boneMap.get(r.name);
      a ? n.push(a) : n.push(r);
    }
    const i = new As(n, t.boneInverses);
    if (e.bind(i, e.bindMatrix), !this.headJointMatrix) {
      for (let r = 0; r < t.bones.length; r++)
        if (t.bones[r].name === "Bip001_Head" || t.bones[r].name === "Bip001_Head_1") {
          const a = t.boneInverses[r];
          this.headJointMatrix = a.clone().invert(), new P().setFromMatrixPosition(this.headJointMatrix);
          const l = new P(), c = new P(), h = new P();
          this.headJointMatrix.extractBasis(l, c, h);
          break;
        }
    }
  }
  /**
   * 매 프레임 볼륨 마스크 center를 Head 본의 현재 월드 행렬 기준으로 재계산.
   *
   * vObjPosition = transformed (skinning 후) 공간에서 distance 체크.
   * center = bindMatrixInverse * headBone.matrixWorld * centerInHeadLocal
   */
  updateVolumeMaskCenters() {
    if (!this.volumeMaskEnabled || this.volumeMaskTargets.length === 0) return;
    const e = this.boneMap.get("Bip001_Head");
    if (!e) return;
    e.updateWorldMatrix(!0, !1);
    const t = new P(), n = new P(), i = new P();
    for (const r of this.volumeMaskTargets) {
      const a = r.rawCenter;
      t.set(-a.x, a.y, -a.z), n.copy(t).applyMatrix4(e.matrixWorld), i.copy(n).applyMatrix4(r.mesh.bindMatrixInverse), r.uniforms.volumeMaskCenter && r.uniforms.volumeMaskCenter.value.copy(i);
    }
  }
  /**
   * 볼륨 마스크가 있는 머티리얼의 customDepthMaterial을 설정하여
   * shadow map 렌더링 시에도 동일한 구면 클리핑이 적용되도록 한다.
   * color pass의 uniform을 참조로 공유하므로 center/radius 업데이트가 자동 전파됨.
   */
  attachVolumeMaskDepthMaterial(e) {
    var a, o;
    const t = Array.isArray(e.material) ? e.material : [e.material];
    let n = null;
    for (const l of t) {
      const c = ((a = l.userData) == null ? void 0 : a.hairUniforms) ?? ((o = l.userData) == null ? void 0 : o.uniforms);
      if (c != null && c.volumeMaskEnable) {
        n = c;
        break;
      }
    }
    if (!n) return;
    const i = new Uo({
      depthPacking: 3201
    }), r = {
      volumeMaskEnable: n.volumeMaskEnable,
      volumeMaskCenter: n.volumeMaskCenter,
      volumeMaskRadius: n.volumeMaskRadius
    };
    i.onBeforeCompile = (l) => {
      for (const [c, h] of Object.entries(r))
        l.uniforms[c] = h;
      l.vertexShader = l.vertexShader.replace(
        "#include <common>",
        `varying vec3 vObjPosition;
#include <common>`
      ), l.vertexShader = l.vertexShader.replace(
        "#include <skinning_vertex>",
        `#include <skinning_vertex>
vObjPosition = transformed;`
      ), l.fragmentShader = l.fragmentShader.replace(
        "#include <common>",
        /* glsl */
        `
                uniform float volumeMaskEnable;
                uniform vec3 volumeMaskCenter;
                uniform float volumeMaskRadius;
                varying vec3 vObjPosition;
                
#include <common>`
      ), l.fragmentShader = l.fragmentShader.replace(
        "#include <map_fragment>",
        /* glsl */
        `
                #include <map_fragment>
                if (volumeMaskEnable > 0.5) {
                    float vmd = distance(vObjPosition, volumeMaskCenter);
                    if (vmd > volumeMaskRadius) discard;
                }
                `
      );
    }, e.customDepthMaterial = i;
  }
  applyColorsToMesh(e, t, n) {
    const i = Array.isArray(e.material) ? e.material : [e.material];
    for (const r of i)
      if (r instanceof hn && n.length > 0 && n[0]) {
        const a = n[0];
        r.color.set(a.r, a.g, a.b);
      }
  }
  /** 블렌드셰이프 외부 적용 (디버그/테스트용) */
  setBlendShapes(e) {
    this.applyBlendShapes(e), this.currentAvatarData && (this.currentAvatarData.blendShapes = [...e]);
  }
  /** 블렌드셰이프 적용 (에디터 슬라이더에서 호출 가능) */
  applyBlendShapes(e) {
    this.currentBlendShapes = e, this.avatarRoot.traverse((t) => {
      if (!t.isSkinnedMesh) return;
      const n = t;
      if (!(!n.morphTargetDictionary || !n.morphTargetInfluences))
        for (const i of e) {
          const r = tl[i.type];
          if (!r) continue;
          const a = n.morphTargetDictionary[r];
          a !== void 0 && (n.morphTargetInfluences[a] = Math.max(0, Math.min(1, i.value / 100)));
        }
    }), this.applyUVBlendShapes(e);
  }
  /** UV 블렌드셰이프: weight → UV uniform 변환 (Unity ApplyBlendShapeToUV 포팅) */
  applyUVBlendShapes(e) {
    for (const o of this.uvTransforms.values())
      o.rotation.value = 0, o.scale.value = 1.5, o.offsetX.value = 0, o.offsetY.value = 0;
    const t = this.uvTransforms.get("eye_l"), n = this.uvTransforms.get("eye_r"), i = this.uvTransforms.get("eyebrow_l"), r = this.uvTransforms.get("eyebrow_r"), a = this.uvTransforms.get("mouth_l");
    for (const o of e) {
      if (o.value === 0) continue;
      const l = o.value;
      switch (o.type) {
        case 6:
        case 8: {
          const c = l / 40 * -0.3;
          t && (t.rotation.value = c * -1), n && (n.rotation.value = c);
          break;
        }
        case 7:
        case 9: {
          const c = l / 40 * 0.3;
          t && (t.rotation.value = c * -1), n && (n.rotation.value = c);
          break;
        }
        case 10:
          t && (t.offsetY.value = l / 45 * -0.15);
          break;
        case 11:
          t && (t.offsetY.value = l / 45 * 0.1);
          break;
        case 12:
          n && (n.offsetY.value = l / 45 * -0.15);
          break;
        case 13:
          n && (n.offsetY.value = l / 45 * 0.1);
          break;
        case 18:
        case 20: {
          const c = l / 40 * 0.15;
          t && (t.offsetX.value = c), n && (n.offsetX.value = c * -1);
          break;
        }
        case 19:
        case 21: {
          const c = l / 70 * -0.15;
          t && (t.offsetX.value = c), n && (n.offsetX.value = c * -1);
          break;
        }
        case 14: {
          const c = l / 60 * 0.06 + 1.5;
          t && (t.scale.value = c), n && (n.scale.value = c);
          break;
        }
        case 15: {
          const c = 1.5 - l / 60 * 0.5;
          t && (t.scale.value = c), n && (n.scale.value = c);
          break;
        }
        case 22: {
          const c = l / 40 * -0.25;
          i && (i.rotation.value = c * -1), r && (r.rotation.value = c);
          break;
        }
        case 23: {
          const c = l / 40 * 0.3;
          i && (i.rotation.value = c * -1), r && (r.rotation.value = c);
          break;
        }
        case 26:
          i && (i.offsetY.value = l / 45 * -0.25);
          break;
        case 27:
          i && (i.offsetY.value = l / 45 * 0.15);
          break;
        case 28:
          r && (r.offsetY.value = l / 45 * -0.25);
          break;
        case 29:
          r && (r.offsetY.value = l / 45 * 0.15);
          break;
        case 34: {
          const c = l / 40 * 0.15;
          i && (i.offsetX.value = c), r && (r.offsetX.value = c * -1);
          break;
        }
        case 35: {
          const c = l / 70 * -0.15;
          i && (i.offsetX.value = c), r && (r.offsetX.value = c * -1);
          break;
        }
        case 30: {
          const c = l / 100 * 0.06 + 1.5;
          i && (i.scale.value = c), r && (r.scale.value = c);
          break;
        }
        case 31: {
          const c = 1.5 - l / 100 * 0.5;
          i && (i.scale.value = c), r && (r.scale.value = c);
          break;
        }
        case 46:
          a && (a.rotation.value = l / 60 * -0.3 * -1);
          break;
        case 47:
          a && (a.rotation.value = l / 60 * 0.3 * -1);
          break;
        case 48:
          a && (a.scale.value = l / 100 * 0.08 + 1.5);
          break;
        case 49:
          a && (a.scale.value = 1.5 - l / 100 * 0.5);
          break;
        case 50:
          a && (a.offsetX.value = l / 50 * 0.25);
          break;
        case 51:
          a && (a.offsetX.value = l / 50 * -0.25);
          break;
        case 52:
          a && (a.offsetY.value = l / 80 * -0.1);
          break;
        case 53:
          a && (a.offsetY.value = l / 80 * 0.15);
          break;
      }
    }
  }
  initializeAnimation() {
    this.mixer = new Cp(this.avatarRoot);
    const e = this.findAnimClip(this.defaultIdleName);
    e && (this.defaultAction = this.mixer.clipAction(e), this.defaultAction.setLoop(2201, 1 / 0), this.defaultAction.play(), this.currentAction = this.defaultAction), this.mixer.addEventListener("finished", (t) => {
      t.action !== this.defaultAction && this.fadeToDefault();
    });
  }
  async playAnimationByName(e, t = !1) {
    if (!this.mixer) return;
    let n = this.findAnimClip(e);
    if (!n && (n = await this.loadAnimationClip(e), !n))
      return;
    const i = this.mixer.clipAction(n);
    t ? (i.setLoop(2201, 1 / 0), i.clampWhenFinished = !1) : (i.setLoop(2200, 1), i.clampWhenFinished = !0), i.setEffectiveTimeScale(1), this.currentAction && this.currentAction !== i ? (this.currentAction.enabled = !0, i.reset(), i.play(), i.crossFadeFrom(this.currentAction, 0.25, !1)) : (i.reset(), i.play()), this.currentAction = i;
  }
  /** 개별 애니메이션 GLB를 lazy load */
  loadAnimationClip(e) {
    return new Promise((t) => {
      const n = this.resolve(`${this.animBaseUrl}${e}.glb`);
      this.gltfLoader.load(
        n,
        (i) => {
          if (i.animations && i.animations.length > 0) {
            for (const a of i.animations) {
              const o = this.animClips.get(a.name);
              (!o || a.tracks.length > o.tracks.length) && this.animClips.set(a.name, a);
            }
            const r = this.findAnimClip(e);
            t(r);
          } else
            t(null);
        },
        void 0,
        () => {
          console.warn(`[AvatarViewer] 애니메이션 로드 실패: ${n}`), t(null);
        }
      );
    });
  }
  fadeToDefault() {
    if (!this.currentAction || !this.mixer) return;
    const e = this.poseAction ?? this.defaultAction;
    !e || e === this.currentAction || (this.currentAction.enabled = !0, e.reset(), e.play(), e.crossFadeFrom(this.currentAction, 0.25, !0), this.currentAction = e);
  }
  findAnimClip(e) {
    if (this.animClips.has(e)) return this.animClips.get(e);
    for (const [t, n] of this.animClips)
      if (t.includes(e)) return n;
    return null;
  }
  /** Cap 마운트 포인트 본 조회 (헤어 데이터의 capMountBone 사용, useDefaultHairCapMount 시 항상 001) */
  getCapMountBone() {
    var e;
    if (this.capUseDefaultMount)
      return this.boneMap.get("Mount_HairCap_001") ?? null;
    if (this.hairCapMountBone)
      return this.boneMap.get(this.hairCapMountBone) ?? this.boneMap.get("Mount_HairCap_001") ?? null;
    if (this.currentAvatarData) {
      const t = this.currentAvatarData.PresetPartsDatas.find(
        (i) => i.Category === 0
        /* Hair */
      ), n = (e = t == null ? void 0 : t.ID) == null ? void 0 : e.match(/Ava_[HW]_(\d+)/);
      if (n)
        return this.boneMap.get(`Mount_HairCap_${n[1]}`) ?? this.boneMap.get("Mount_HairCap_001") ?? null;
    }
    return this.boneMap.get("Mount_HairCap_001") ?? null;
  }
  updateHairCapVisibility() {
    if (!this.hairNodes) return;
    const e = this.isCapActive();
    this.hairNodes.cap.visible = e;
    for (const t of this.hairNodes.normal) t.visible = !e;
  }
  isCapActive() {
    const e = this.activeParts.get("8");
    return e != null && e.length > 0;
  }
  /** SmoothEyeBlink — 매 프레임 호출 */
  updateEyeBlink(e) {
    if (!this._eyeBlinkPaused) {
      if (this.eyeBlinkElapsed >= 0) {
        if (this.eyeBlinkElapsed += e, this.eyeBlinkElapsed >= xe.BLINK_DURATION)
          this.setEyeBlinkValue(1), this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending ? (this.eyeBlinkDoublePending = !1, this.eyeBlinkNextAt = 0.1) : this.eyeBlinkNextAt = xe.BLINK_MIN_INTERVAL + Math.random() * (xe.BLINK_MAX_INTERVAL - xe.BLINK_MIN_INTERVAL);
        else {
          const t = this.eyeBlinkElapsed / xe.BLINK_DURATION, n = Math.sin(t * Math.PI);
          this.setEyeBlinkValue(1 - n * 0.85);
        }
        return;
      }
      this.eyeBlinkTimer += e, this.eyeBlinkTimer >= this.eyeBlinkNextAt && (this.eyeBlinkTimer = 0, this.eyeBlinkElapsed = 0, this.eyeBlinkDoublePending = Math.random() < xe.BLINK_DOUBLE_CHANCE);
    }
  }
  /** 눈 깜빡임 타이머 초기화 (파츠 로드 완료 후 호출) */
  resetEyeBlink() {
    this.setEyeBlinkValue(1), this.eyeBlinkElapsed = -1, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = xe.BLINK_MIN_INTERVAL + Math.random() * (xe.BLINK_MAX_INTERVAL - xe.BLINK_MIN_INTERVAL), this.eyeBlinkDoublePending = !1;
  }
  // ── 데칼 시스템 ──
  /** decals.json 로드 (최초 1회, 이후 캐시) */
  async loadDecalsMetadata() {
    return this.decalsMetadata ? this.decalsMetadata : this.decalsMetadataPromise ? this.decalsMetadataPromise : (this.decalsMetadataPromise = (async () => {
      try {
        const e = this.resolve(this.decalsBaseUrl + "decals.json"), t = await fetch(e);
        if (!t.ok) throw new Error(`Failed to load decals.json: ${t.status}`);
        const n = await t.json();
        return this.decalsMetadata = n, n;
      } catch (e) {
        return console.warn("[Decal] decals.json 로드 실패:", e), this.decalsMetadata = {}, {};
      }
    })(), this.decalsMetadataPromise);
  }
  /** 아바타가 쓰는 데칼의 메타·GLB·텍스처를 미리 받기 시작 (받기만 — 적용은 loadDecalPart) */
  prefetchDecals(e) {
    const t = e.PresetPartsDatas.filter((n) => n.ID && xe.isDecalCategory(n.Category)).map((n) => n.ID);
    t.length !== 0 && this.loadDecalsMetadata().then((n) => {
      var i;
      for (const r of t) {
        const a = n[r];
        if ((i = a == null ? void 0 : a.projectors) != null && i.length) {
          for (const o of a.projectors.length > 1 ? ["", "_Ex"] : [""]) {
            const l = this.resolve(`${this.partsBaseUrl}${r}${o}.glb`);
            this._decalGlbPrefetch.has(l) || this._decalGlbPrefetch.set(l, fetch(l).then((c) => c.ok ? c.arrayBuffer() : null).catch(() => null));
          }
          for (const o of a.projectors)
            o.texture && o.size && this.loadTexture(this.resolve(this.decalsBaseUrl + o.texture)).catch(() => {
            });
        }
      }
    });
  }
  /** 데칼 메타(범위 등) 조회 — 에디터 커스텀 UI 용 (additive) */
  getDecalMeta(e) {
    var t;
    return ((t = this.decalsMetadata) == null ? void 0 : t[e]) ?? void 0;
  }
  /** partsdata-viewer.json 로드 (최초 1회, 이후 캐시) */
  async loadPartsMetadata() {
    return this.partsMetadata ? this.partsMetadata : this.partsMetadataPromise ? this.partsMetadataPromise : (this.partsMetadataPromise = (async () => {
      try {
        const e = this.resolve("partsdata-viewer.json"), t = await fetch(e);
        if (!t.ok) throw new Error(`Failed: ${t.status}`);
        const n = await t.json();
        return Jo(n), this.partsMetadata = n, n;
      } catch (e) {
        return console.warn("[AvatarViewer] partsdata-viewer.json 로드 실패:", e), this.partsMetadata = {}, {};
      }
    })(), this.partsMetadataPromise);
  }
  /** 데칼 카테고리인지 확인 */
  static isDecalCategory(e) {
    return e >= 12 && e <= 16;
  }
  /** 데칼 파츠 로드 (texture + 프로젝터 설정) */
  async loadDecalPart(e, t, n, i, r) {
    const a = this.swapSeq.get(e) ?? 0;
    if (this.removeDecalCategory(e), !t || t === "") return;
    const o = await this.loadDecalsMetadata();
    if ((this.swapSeq.get(e) ?? 0) !== a) return;
    const l = o[t];
    if (!l || !l.projectors || l.projectors.length === 0) {
      console.warn(`[Decal] 메타데이터 없음: ${t}`, l);
      return;
    }
    const c = this.boneMap.get(l.bone);
    if (!c) {
      console.warn(`[Decal] 본 없음: ${l.bone}`);
      return;
    }
    const h = (_) => {
      var d;
      return Zm(_, n, i, ((d = l.projectors[_]) == null ? void 0 : d.color) ?? l.color);
    }, u = [], f = [], g = l.projectors.length > 1 ? ["", "_Ex"] : [""];
    for (const _ of g)
      try {
        const d = this.resolve(`${this.partsBaseUrl}${t}${_}.glb`), p = this._decalGlbPrefetch.get(d);
        this._decalGlbPrefetch.delete(d);
        const S = p ? await p : await fetch(d).then((b) => b.ok ? b.arrayBuffer() : null);
        if (S) {
          this._resourceSizes.set(d, S.byteLength);
          const b = await new Promise((x, C) => {
            this.gltfLoader.parse(S, "", (A) => x(A.scene), C);
          });
          f.push(b);
        } else
          f.push(null);
      } catch {
        f.push(null);
      }
    if ((this.swapSeq.get(e) ?? 0) === a) {
      for (let _ = 0; _ < l.projectors.length; _++) {
        const d = l.projectors[_];
        if (!d.texture || !d.size) continue;
        const p = this.findFreeDecalSlot();
        if (p < 0) {
          console.warn(`[Decal] 빈 슬롯 없음 (max ${xe.MAX_DECAL_SLOTS})`);
          break;
        }
        let S;
        try {
          const I = this.resolve(this.decalsBaseUrl + d.texture);
          S = await this.loadTexture(I), S.colorSpace = mt, S.generateMipmaps = !1, S.minFilter = 1006;
          const q = S.image;
          this._decalTextures.push({
            type: "decal",
            name: I.split("/").pop() || "",
            url: I,
            size: this._resourceSizes.get(I) ?? 0,
            texture: S,
            width: (q == null ? void 0 : q.width) ?? 0,
            height: (q == null ? void 0 : q.height) ?? 0
          });
        } catch (I) {
          console.warn(`[Decal] 텍스처 로드 실패: ${d.texture}`, I);
          continue;
        }
        if ((this.swapSeq.get(e) ?? 0) !== a) return;
        const b = new Ce(), x = f[_] ?? f[0];
        if (x) {
          const I = x.children[0];
          I && (I.updateMatrix(), b.copy(I.matrix));
        } else if (d.position || d.rotation) {
          const I = new P(...d.position ?? [0, 0, 0]), q = new Lt(...d.rotation ?? [0, 0, 0, 1]);
          b.compose(I, q, new P(1, 1, 1));
        }
        const C = new Ce().set(
          1 / d.size[0],
          0,
          0,
          0.5,
          0,
          1 / d.size[1],
          0,
          0.5,
          0,
          0,
          1 / d.size[2],
          0.5,
          0,
          0,
          0,
          1
        ), A = h(_), w = {
          slotIndex: p,
          category: e,
          bone: c,
          localMatrix: b.clone(),
          sizeScaleMatrix: C,
          texture: S,
          color: A.clone(),
          hasSkinColor: !!l.hasSkinColor,
          baseLocalMatrix: b.clone(),
          baseSize: [d.size[0], d.size[1], d.size[2]],
          customRange: l.custom,
          isEx: _ > 0
          // pi=0 main(L), pi>0 Ex(R) → 좌우 이동 미러
        };
        r && l.custom && this.applyCustomToProjector(w, r), this.activeDecalProjectors.set(p, w), u.push(p);
      }
      this.decalCategorySlots.set(e, u), this.reorderDecalSlots(), this.updateDecalProjections();
    }
  }
  /** 데칼 카테고리 해제 */
  removeDecalCategory(e) {
    const t = this.decalCategorySlots.get(e);
    if (t) {
      for (const n of t) {
        const i = this.activeDecalProjectors.get(n);
        if (i && i.texture.dispose(), this.activeDecalProjectors.delete(n), n < this.faceDecalSlots.length) {
          const r = this.faceDecalSlots[n];
          r.enabled.value = 0;
        }
      }
      this.decalCategorySlots.delete(e);
    }
  }
  /** 빈 데칼 슬롯 인덱스 반환 */
  findFreeDecalSlot() {
    for (let e = 0; e < xe.MAX_DECAL_SLOTS; e++)
      if (!this.activeDecalProjectors.has(e)) return e;
    return -1;
  }
  /** 모든 활성 데칼 프로젝터를 draw order에 맞게 슬롯 재배치 */
  reorderDecalSlots() {
    if (this.faceDecalSlots.length === 0) return;
    const e = [];
    for (const [, t] of this.activeDecalProjectors)
      e.push(t);
    e.sort((t, n) => {
      const i = xe.DECAL_DRAW_ORDER[t.category] ?? 0, r = xe.DECAL_DRAW_ORDER[n.category] ?? 0;
      return i - r;
    });
    for (let t = 0; t < this.faceDecalSlots.length; t++)
      this.faceDecalSlots[t].enabled.value = 0;
    this.activeDecalProjectors.clear(), this.decalCategorySlots.clear();
    for (let t = 0; t < e.length && t < xe.MAX_DECAL_SLOTS; t++) {
      const n = e[t];
      n.slotIndex = t, this.activeDecalProjectors.set(t, n);
      const i = this.decalCategorySlots.get(n.category) ?? [];
      i.push(t), this.decalCategorySlots.set(n.category, i);
      const r = this.faceDecalSlots[t];
      r.enabled.value = 1, r.texture.value = n.texture, r.color.value = n.color.clone(), r.useSkinColor.value = n.hasSkinColor ? 1 : 0;
    }
  }
  /**
   * custom(이동/스케일)을 프로젝터의 base 행렬/size 로부터 재계산해 proj.localMatrix/sizeScaleMatrix 에 반영.
   * 프로젝터 로컬 축이 화면 기준과 X/Y 스왑돼 있어 custom.x(좌우)→로컬Y, custom.y(상하)→로컬X 로 매핑.
   * base 로부터 항상 재계산하므로 반복 호출해도 누적 오차 없음.
   */
  applyCustomToProjector(e, t) {
    const n = e.customRange;
    if (!n) return;
    const i = $m(t, n), r = e.isEx ? -i.x : i.x, a = e.baseLocalMatrix.clone();
    (r !== 0 || i.y !== 0) && a.multiply(new Ce().makeTranslation(r, i.y, 0)), e.localMatrix = a;
    const o = Number.isFinite(i.s) ? i.s : e.baseSize[0], l = Number.isFinite(i.s) ? i.s : e.baseSize[1];
    e.sizeScaleMatrix = new Ce().set(
      1 / o,
      0,
      0,
      0.5,
      0,
      1 / l,
      0,
      0.5,
      0,
      0,
      1 / e.baseSize[2],
      0.5,
      0,
      0,
      0,
      1
    );
  }
  /**
   * 데칼 커스텀 라이브 갱신 — 이미 로드된 프로젝터의 행렬만 재계산(재로드/재fetch 없음 → 깜빡임 없음).
   * 에디터 슬라이더가 매 프레임 호출. 해당 카테고리의 모든 프로젝터(L/R 포함)에 동일 custom 적용.
   */
  updateDecalCustom(e, t) {
    const n = this.decalCategorySlots.get(e);
    if (n) {
      for (const i of n) {
        const r = this.activeDecalProjectors.get(i);
        r && r.customRange && this.applyCustomToProjector(r, t);
      }
      this.updateDecalProjections();
    }
  }
  /** 매 프레임: 데칼 프로젝션 행렬 갱신 (본 애니메이션 반영) */
  /**
   * 데칼 프로젝션 행렬을 즉시 강제 갱신 (off-loop 렌더 직전용).
   * 매 프레임 animate 루프에서 자동 호출되지만, 프로필 캡처처럼 루프 밖에서
   * avatarRoot 회전을 바꾼 뒤 즉시 렌더할 때는 invMatrix uniform 이 직전(회전된)
   * 프레임 값이라 modelMatrix(리셋됨)와 불일치 → 데칼 어긋남. 캡처 직전 이 메서드 호출 필요.
   */
  refreshDecalProjections() {
    this.updateDecalProjections();
  }
  updateDecalProjections() {
    if (this.activeDecalProjectors.size === 0 || this.faceDecalSlots.length === 0) return;
    const e = new Ce(), t = new Ce(), n = new Ce(), i = new Ce();
    this.faceSkinnedMesh && (this.faceSkinnedMesh.updateMatrixWorld(!1), i.copy(this.faceSkinnedMesh.matrixWorld).invert());
    for (const [r, a] of this.activeDecalProjectors)
      r >= this.faceDecalSlots.length || (a.bone.updateWorldMatrix(!0, !1), t.multiplyMatrices(a.bone.matrixWorld, a.localMatrix), e.copy(t).invert(), n.multiplyMatrices(a.sizeScaleMatrix, e), this.faceDecalSlots[r].invMatrix.value.copy(n));
  }
  /** 모든 데칼 해제 */
  clearAllDecals() {
    for (const [e, t] of this.activeDecalProjectors)
      t.texture.dispose(), e < this.faceDecalSlots.length && (this.faceDecalSlots[e].enabled.value = 0);
    this.activeDecalProjectors.clear(), this.decalCategorySlots.clear();
  }
  disposeMeshes(e) {
    e.traverse((t) => {
      var n;
      if (t.isMesh) {
        const i = t;
        (n = i.geometry) == null || n.dispose();
        const r = Array.isArray(i.material) ? i.material : [i.material];
        for (const a of r) a.dispose();
      }
    });
  }
  //#endregion
};
xe.BLINK_DURATION = 0.15, xe.BLINK_MIN_INTERVAL = 2, xe.BLINK_MAX_INTERVAL = 6, xe.BLINK_DOUBLE_CHANCE = 0.15, xe.MAX_DECAL_SLOTS = 6, xe.DECAL_DRAW_ORDER = {
  12: 0,
  // DecoAge
  13: 1,
  // DecoBlush
  16: 2,
  // DecoSpot
  15: 3,
  // DecoScar
  14: 4
  // DecoPaint
}, xe.hairPhysicsClass = null, xe.DEFAULT_SHOES = { Category: 9, ID: "Ava_S_001", Color: { colors: [{ r: 0.851, g: 0.851, b: 0.851, a: 1 }, { r: 0.078, g: 0.459, b: 1, a: 1 }] } }, xe.HAIR_PROP_MAP = {
  _Smoothness: "hairSmoothness",
  _SpecularShift: "hairSpecShift",
  _SpecularExponent: "hairSpecExponent",
  _SecondarySpecularShift: "hairSecSpecShift",
  _SecondarySpecularExponent: "hairSecSpecExponent",
  _Hair_Rim: "hairRimTransmission"
}, xe.PROP_UNIFORM_MAP = {
  _MetallicIntensity: "metallicIntensity",
  _Smoothness: "smoothnessIntensity",
  _AOIntensity: "aoIntensity",
  _Rim_Power: "rimPower",
  _Rim_Edge_Power: "rimEdgePower",
  _Emissive_Strangth: "emissiveStrength",
  _Emissive_Tint_Gamma: "emissiveTintGamma",
  _Emissive_Desat_Start: "emissiveDesatStart",
  _Emissive_Desat_Max: "emissiveDesatMax",
  _Emissive_Flicker_Speed: "emissiveFlickerSpeed",
  _Emissive_Flicker_Min: "emissiveFlickerMin",
  _Emissive_Flicker_Color: "emissiveFlickerColor",
  _Emissive_Pulse_Period: "emissivePulsePeriod",
  _Emissive_Pulse_Min: "emissivePulseMin",
  _Emissive_Pulse_Sharp: "emissivePulseSharp",
  _Emissive_Blackout_Freq: "emissiveBlackoutFreq",
  _Emissive_Blackout_Threshold: "emissiveBlackoutThreshold",
  _Emissive_Flow_X: "emissiveFlowX",
  _Emissive_Flow_Y: "emissiveFlowY",
  _Emissive_Cell_Speed: "emissiveCellSpeed",
  _Emissive_Cell_Tiling_X: "emissiveCellTilingX",
  _Emissive_Cell_Tiling_Y: "emissiveCellTilingY",
  _Emissive_Cell_Ratio: "emissiveCellRatio",
  _Emissive_Cell_Random: "emissiveCellRandom",
  _Emissive_Cell_Dead: "emissiveCellDead",
  _Emissive_Cell_Soft: "emissiveCellSoft",
  _Emissive_Color_Mode: "emissiveColorMode",
  _Emissive_Pixel_Speed: "emissivePixelSpeed",
  _Emissive_Pixel_Tiling_X: "emissivePixelTilingX",
  _Emissive_Pixel_Tiling_Y: "emissivePixelTilingY",
  _Emissive_Pixel_Gap: "emissivePixelGap",
  _Emissive_Pixel_Shape: "emissivePixelShape",
  _Emissive_Pixel_Soft: "emissivePixelSoft",
  _Emissive_Sweep_Speed: "emissiveSweepSpeed",
  _Emissive_Sweep_Angle: "emissiveSweepAngle",
  _Emissive_Sweep_Count: "emissiveSweepCount",
  _Emissive_Sweep_Width: "emissiveSweepWidth",
  _Emissive_Sweep_Gain: "emissiveSweepGain",
  _Emissive_Sweep_Base: "emissiveSweepBase",
  _Emissive_Sweep_Line: "emissiveSweepLine",
  _Emissive_Warp: "emissiveWarp",
  _Emissive_Warp_Scale: "emissiveWarpScale",
  _Emissive_Warp_Speed: "emissiveWarpSpeed",
  _Emissive_Warp_Angle: "emissiveWarpAngle",
  _Emissive_Pixel_Density: "emissivePixelDensity",
  _Emissive_Color_Gain: "emissiveColorGain",
  _Emissive_Glow: "emissiveGlow",
  _Emissive_Pattern: "emissivePattern",
  _Blink_Speed: "blinkSpeed",
  _Gradient_Smooth: "lensGradientSmooth",
  _Gradient_Position: "lensGradientPosition",
  _Specular_Power: "lensSpecPower",
  _Fresnel_Power: "lensFresnelPower"
}, xe.EMISSIVE_TINT_GAMMA = 2.2, xe.METALLIC_INTENSITY_MULTIPLIER = 1.25, xe.POSE_ANIM_MAP = {
  Pose_Idle: "",
  Pose_CombatStand: "Ani_002_CombatStand",
  Pose_CrossedArms: "Ani_003_CrossedArms",
  Pose_EgocentricStand: "Ani_004_EgocentricStand",
  Pose_ThumbsUp: "Ani_005_ThumbsUp",
  Pose_DanceHello: "Ani_006_Dance_Hello",
  Pose_DanceDrunk: "Ani_007_Dance_Drunk",
  Pose_Victory: "Ani_008_Victory",
  Pose_FlexMuscles: "Ani_009_FlexMuscles",
  Pose_Levitation: "Ani_010_Levitation",
  Pose_Boxing: "Ani_011_Boxing",
  Pose_ZombieWalk: "Ani_012_ZombieWalk",
  Pose_PowerStand: "Ani_013_PowerStand",
  Pose_KungFu: "Ani_014_KungFu",
  Pose_SkipWalk: "Ani_015_SkipWalk",
  Pose_BadassWalk: "Ani_016_BadassWalk",
  Pose_CrossArmsStand: "Ani_017_CrossArmsStand",
  Pose_CowardStand: "Ani_018_CowardStand",
  Pose_EvilLaugh: "Ani_019_EvilLaugh"
}, xe.LENS_RENDER_ORDER = 10;
let Er = xe;
var tl = /* @__PURE__ */ ((s) => (s[s.Fat = 0] = "Fat", s[s.Muscles = 1] = "Muscles", s[s.Slimness = 2] = "Slimness", s[s.Thin = 3] = "Thin", s[s.BreastSize = 4] = "BreastSize", s[s.Neck_Width = 5] = "Neck_Width", s[s.EyeL_Rotate_Left = 6] = "EyeL_Rotate_Left", s[s.EyeL_Rotate_Right = 7] = "EyeL_Rotate_Right", s[s.EyeR_Rotate_Left = 8] = "EyeR_Rotate_Left", s[s.EyeR_Rotate_Right = 9] = "EyeR_Rotate_Right", s[s.EyeL_Move_Up = 10] = "EyeL_Move_Up", s[s.EyeL_Move_Down = 11] = "EyeL_Move_Down", s[s.EyeR_Move_Up = 12] = "EyeR_Move_Up", s[s.EyeR_Move_Down = 13] = "EyeR_Move_Down", s[s.EyeL_Scale_Up = 14] = "EyeL_Scale_Up", s[s.EyeL_Scale_Down = 15] = "EyeL_Scale_Down", s[s.EyeR_Scale_Up = 16] = "EyeR_Scale_Up", s[s.EyeR_Scale_Down = 17] = "EyeR_Scale_Down", s[s.EyeL_Move_In = 18] = "EyeL_Move_In", s[s.EyeL_Move_Out = 19] = "EyeL_Move_Out", s[s.EyeR_Move_In = 20] = "EyeR_Move_In", s[s.EyeR_Move_Out = 21] = "EyeR_Move_Out", s[s.BrowL_Rotate_Left = 22] = "BrowL_Rotate_Left", s[s.BrowL_Rotate_Right = 23] = "BrowL_Rotate_Right", s[s.BrowR_Rotate_Left = 24] = "BrowR_Rotate_Left", s[s.BrowR_Rotate_Right = 25] = "BrowR_Rotate_Right", s[s.BrowL_Move_Up = 26] = "BrowL_Move_Up", s[s.BrowL_Move_Down = 27] = "BrowL_Move_Down", s[s.BrowR_Move_Up = 28] = "BrowR_Move_Up", s[s.BrowR_Move_Down = 29] = "BrowR_Move_Down", s[s.BrowL_Scale_Up = 30] = "BrowL_Scale_Up", s[s.BrowL_Scale_Down = 31] = "BrowL_Scale_Down", s[s.BrowR_Scale_Up = 32] = "BrowR_Scale_Up", s[s.BrowR_Scale_Down = 33] = "BrowR_Scale_Down", s[s.BrowL_Move_In = 34] = "BrowL_Move_In", s[s.BrowL_Move_Out = 35] = "BrowL_Move_Out", s[s.BrowR_Move_In = 36] = "BrowR_Move_In", s[s.BrowR_Move_Out = 37] = "BrowR_Move_Out", s[s.Nose_Rotate_Left = 38] = "Nose_Rotate_Left", s[s.Nose_Rotate_Right = 39] = "Nose_Rotate_Right", s[s.Nose_Scale_Up = 40] = "Nose_Scale_Up", s[s.Nose_Scale_Down = 41] = "Nose_Scale_Down", s[s.Nose_Move_Left = 42] = "Nose_Move_Left", s[s.Nose_Move_Right = 43] = "Nose_Move_Right", s[s.Nose_Move_Up = 44] = "Nose_Move_Up", s[s.Nose_Move_Down = 45] = "Nose_Move_Down", s[s.Mouth_Rotate_Left = 46] = "Mouth_Rotate_Left", s[s.Mouth_Rotate_Right = 47] = "Mouth_Rotate_Right", s[s.Mouth_Scale_Up = 48] = "Mouth_Scale_Up", s[s.Mouth_Scale_Down = 49] = "Mouth_Scale_Down", s[s.Mouth_Move_Left = 50] = "Mouth_Move_Left", s[s.Mouth_Move_Right = 51] = "Mouth_Move_Right", s[s.Mouth_Move_Up = 52] = "Mouth_Move_Up", s[s.Mouth_Move_Down = 53] = "Mouth_Move_Down", s[s.Face_Vertical_Up = 54] = "Face_Vertical_Up", s[s.Face_Vertical_Down = 55] = "Face_Vertical_Down", s[s.Face_Horizon_Up = 56] = "Face_Horizon_Up", s[s.Face_Horizon_Down = 57] = "Face_Horizon_Down", s[s.Face_Nose_Scale_Up = 58] = "Face_Nose_Scale_Up", s[s.Face_Nose_Scale_Down = 59] = "Face_Nose_Scale_Down", s[s.Face_Ear_Fold = 60] = "Face_Ear_Fold", s[s.Glasses_Move_Up = 61] = "Glasses_Move_Up", s[s.Glasses_Move_Down = 62] = "Glasses_Move_Down", s[s.Face_Jaw_Square = 63] = "Face_Jaw_Square", s[s.Face_Jaw_Sharp = 64] = "Face_Jaw_Sharp", s[s.Face_Nose_Vertical_Down = 65] = "Face_Nose_Vertical_Down", s[s.Face_Nose_Vertical_Up = 66] = "Face_Nose_Vertical_Up", s[s.Face_Nose_Real_Down = 67] = "Face_Nose_Real_Down", s[s.Face_Nose_Real_Up = 68] = "Face_Nose_Real_Up", s[s.Glasses_Scale_Up = 69] = "Glasses_Scale_Up", s[s.Glasses_Scale_Down = 70] = "Glasses_Scale_Down", s))(tl || {});
function Qm(s) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = s.clone();
  return nl(s, n, function(i, r) {
    e.set(r, i), t.set(i, r);
  }), n.traverse(function(i) {
    if (!i.isSkinnedMesh) return;
    const r = i, a = e.get(i), o = a.skeleton.bones;
    r.skeleton = a.skeleton.clone(), r.bindMatrix.copy(a.bindMatrix), r.skeleton.bones = o.map(function(l) {
      return t.get(l);
    }), r.bind(r.skeleton, r.bindMatrix);
  }), n;
}
function nl(s, e, t) {
  t(s, e);
  for (let n = 0; n < s.children.length; n++)
    nl(s.children[n], e.children[n], t);
}
const fo = /* @__PURE__ */ new Map();
async function il(s) {
  let e = fo.get(s);
  e || (e = (async () => {
    const n = await fetch(s);
    if (!n.ok) throw new Error(`skeleton fetch ${n.status}: ${s}`);
    const i = await n.arrayBuffer(), r = new jo().setMeshoptDecoder(Yo), a = await new Promise((o, l) => {
      r.parse(i, "", o, l);
    });
    return {
      scene: a.scene,
      // template — 이걸 매번 clone해서 반환
      animations: a.animations ?? [],
      bytes: i.byteLength
    };
  })(), fo.set(s, e));
  const t = await e;
  return {
    scene: Qm(t.scene),
    animations: t.animations,
    bytes: t.bytes
  };
}
class Or {
  constructor() {
    this.enabled = !1, this.records = /* @__PURE__ */ new Map(), this.batches = [], this.longTasks = [], this.longTaskObserver = null, this.setSlotsT0 = 0;
  }
  /** OZAvatarGrid 생성자에서 1회 호출. */
  init() {
    var e;
    if (this.enabled = this.detectEnabled(), !!this.enabled) {
      if (typeof PerformanceObserver < "u" && ((e = PerformanceObserver.supportedEntryTypes) != null && e.includes("longtask")))
        try {
          this.longTaskObserver = new PerformanceObserver((t) => {
            for (const n of t.getEntries()) this.longTasks.push(n);
          }), this.longTaskObserver.observe({ type: "longtask", buffered: !0 });
        } catch {
        }
      console.info("[GridPerf] enabled");
    }
  }
  /** OZAvatarGrid.setSlots 진입 시 호출. 이전 기록을 비우고 t0 설정. */
  beginSetSlots() {
    this.enabled && (this.records.clear(), this.batches.length = 0, this.longTasks.length = 0, this.setSlotsT0 = performance.now());
  }
  /** 아바타 로드 시작 (GridAvatarInstance.loadFromUrl 진입) */
  markAvatarStart(e) {
    if (!this.enabled) return;
    const t = this.ensureRecord(e);
    t.startT = performance.now();
  }
  /** 아바타 로드 완료 (onLoaded 실제 fire 직전/직후) */
  markAvatarEnd(e) {
    if (!this.enabled) return;
    const t = this.ensureRecord(e);
    t.endT = performance.now();
  }
  /** phase 시간(ms) 기록. 같은 phase 여러 번 호출되면 누적하지 않고 push — dump가 처리. */
  record(e, t, n) {
    if (!this.enabled) return;
    this.ensureRecord(e).phases.push({ phase: t, ms: n });
  }
  /** batch 시작 — kickBatchLoader가 splice 직후 호출 */
  recordBatch(e, t) {
    if (this.enabled) {
      this.batches.push({ index: e, startT: performance.now(), ids: t.slice() });
      for (const n of t) {
        const i = this.ensureRecord(n);
        i.batchIndex === void 0 && (i.batchIndex = e);
      }
    }
  }
  /** batch 끝 — Promise.all 종료 직후 */
  endBatch(e) {
    if (!this.enabled) return;
    const t = this.batches.find((n) => n.index === e);
    t && (t.endT = performance.now());
  }
  ensureRecord(e) {
    let t = this.records.get(e);
    return t || (t = { id: e, phases: [] }, this.records.set(e, t)), t;
  }
  /** URL → 카테고리 분류. Report bucket 용. */
  static classifyResource(e) {
    return e.includes("/avatar-json/") ? "preset_json" : e.includes("partsdata-viewer.json") || e.includes("partsdata-editor.json") || e.includes("partsdata.json") ? "partsdata_json" : e.includes("/skeleton/") && e.endsWith(".glb") ? "skeleton_glb" : e.includes("/animations/") && e.endsWith(".glb") ? e.includes("Idle") ? "idle_glb" : "pose_glb" : e.includes("/parts/") && e.endsWith(".glb") ? "parts_glb" : e.includes("/masks/") ? "mask_tex" : "other";
  }
  /**
   * Resource Timing 스냅샷을 긁어서 아바타 시간 윈도우(startT~endT)에 귀속.
   * 공용 리소스(skeleton, partsdata_json, 여러 아바타가 공유한 parts/masks)는
   * 첫 번째 소유 아바타에만 귀속 (중복 카운트 방지).
   */
  collectResources() {
    if (!this.enabled) return [];
    const e = performance.getEntriesByType("resource"), t = [], n = Array.from(this.records.values()).filter((i) => i.startT !== void 0).sort((i, r) => (i.startT ?? 0) - (r.startT ?? 0));
    for (const i of e) {
      const r = i.name, a = Or.classifyResource(r);
      if (a === "other" || i.startTime < this.setSlotsT0 - 50) continue;
      let o;
      for (const l of n) {
        const c = l.startT ?? 0, h = l.endT ?? Number.POSITIVE_INFINITY;
        if (i.startTime >= c - 10 && i.startTime <= h + 10) {
          o = l.id;
          break;
        }
      }
      t.push({
        url: r,
        bytes: i.transferSize > 0 ? i.transferSize : i.encodedBodySize ?? 0,
        duration: i.duration,
        startTime: i.startTime,
        cached: i.transferSize === 0 && (i.decodedBodySize ?? 0) > 0,
        category: a,
        ownerId: o
      });
    }
    return t;
  }
  /** onAllReady 시점에 OZAvatarGrid가 호출. */
  dump() {
    if (!this.enabled) return;
    const e = Array.from(this.records.values());
    if (e.length === 0) {
      console.info("[GridPerf] no records");
      return;
    }
    const t = this.collectResources(), n = performance.now(), i = e.map((x) => {
      const C = x.startT ?? this.setSlotsT0, A = x.endT ?? n;
      return { id: x.id, batch: x.batchIndex ?? -1, total: A - C };
    }), r = Math.min(...i.map((x) => {
      var C;
      return x.total + (((C = this.records.get(x.id)) == null ? void 0 : C.startT) ?? 0) - this.setSlotsT0;
    })), a = Math.max(...i.map((x) => {
      var C;
      return x.total + (((C = this.records.get(x.id)) == null ? void 0 : C.startT) ?? 0) - this.setSlotsT0;
    })), o = i.map((x) => x.total).sort((x, C) => x - C), l = o[Math.floor(o.length * 0.5)], c = o[Math.floor(o.length * 0.95)], h = t.reduce((x, C) => x + C.bytes, 0), u = t.filter((x) => x.cached).length, f = this.longTasks.filter(
      (x) => x.startTime >= this.setSlotsT0 - 20 && x.startTime <= n + 20
    ), m = f.reduce((x, C) => x + (C.duration - 50), 0);
    console.group(`=== Grid Load Report (N=${e.length}) ===`), console.log(
      `first=${r.toFixed(0)}ms  last=${a.toFixed(0)}ms  p50=${l == null ? void 0 : l.toFixed(0)}ms  p95=${c == null ? void 0 : c.toFixed(0)}ms
network=${(h / 1024).toFixed(0)}KB (cache-hit ${t.length > 0 ? Math.round(u / t.length * 100) : 0}%)
longTasks=${f.length} events, total blocking=${m.toFixed(0)}ms`
    );
    const g = /* @__PURE__ */ new Map();
    for (const x of e)
      for (const C of x.phases) {
        let A = g.get(C.phase);
        A || (A = [], g.set(C.phase, A)), A.push(C.ms);
      }
    const _ = [];
    for (const [x, C] of g)
      C.sort((A, w) => A - w), _.push({
        phase: x,
        count: C.length,
        p50: +C[Math.floor(C.length * 0.5)].toFixed(1),
        p95: +C[Math.floor(C.length * 0.95)].toFixed(1),
        max: +C[C.length - 1].toFixed(1)
      });
    console.log("Per-phase (ms):"), console.table(_);
    const d = /* @__PURE__ */ new Map();
    for (const x of t) {
      let C = d.get(x.category);
      C || (C = { count: 0, bytes: 0, cached: 0, durations: [] }, d.set(x.category, C)), C.count++, C.bytes += x.bytes, x.cached && C.cached++, C.durations.push(x.duration);
    }
    const p = Array.from(d.entries()).map(([x, C]) => {
      C.durations.sort((w, I) => w - I);
      const A = C.durations.reduce((w, I) => w + I, 0) / Math.max(1, C.durations.length);
      return {
        category: x,
        count: C.count,
        KB: +(C.bytes / 1024).toFixed(1),
        avg_ms: +A.toFixed(0),
        cache_hit: `${Math.round(C.cached / C.count * 100)}%`
      };
    });
    console.log("Network by category:"), console.table(p);
    const S = this.batches.map((x) => ({
      index: x.index,
      start_ms: +(x.startT - this.setSlotsT0).toFixed(0),
      duration_ms: +((x.endT ?? n) - x.startT).toFixed(0),
      count: x.ids.length
    }));
    console.log("Batch timeline:"), console.table(S);
    const b = e.map((x) => {
      const C = {
        id: x.id,
        batch: x.batchIndex ?? -1
      };
      for (const A of x.phases) {
        const w = A.phase, I = C[w];
        C[w] = typeof I == "number" ? +(I + A.ms).toFixed(0) : +A.ms.toFixed(0);
      }
      return C.total = +((x.endT ?? n) - (x.startT ?? this.setSlotsT0)).toFixed(0), C;
    });
    console.log("Per-avatar detail:"), console.table(b), console.groupEnd();
  }
  detectEnabled() {
    if (typeof window > "u") return !1;
    if (window.__ozGridPerf === !0) return !0;
    try {
      if (new URLSearchParams(window.location.search).get("grid-perf") === "1") return !0;
    } catch {
    }
    return !1;
  }
}
const nt = new Or(), po = /* @__PURE__ */ new Map();
async function sl(s) {
  let e = po.get(s);
  return e || (e = (async () => {
    try {
      const t = await fetch(s);
      if (!t.ok) throw new Error(`partsMeta HTTP ${t.status}: ${s}`);
      const n = await t.json();
      return Jo(n), n;
    } catch (t) {
      return console.warn("[GridSharedPartsMeta] 로드 실패:", t), {};
    }
  })(), po.set(s, e)), e;
}
class Jm {
  constructor(e) {
    var a, o;
    this.visible = !0, this.ready = !1, this.nativeHeight = 0, this.hover = !1, this._pendingDt = 0, this._perfPartTotal = 0, this._perfPartCount = 0, this.disposed = !1, this.id = e.id, this.element = e.element, this.scene = e.scene, this.onLoaded = e.onLoaded, this.onError = e.onError, this.viewer = new Er(e.scene, { baseUrl: e.baseUrl, particleMode: "off", idleAnimations: [], fillMissingShoes: !0 }), this.root = this.viewer.getAvatarRoot();
    const t = this.viewer;
    t.loadHiResTextures = async () => {
    }, t.loadBaseSkeleton = async () => {
      var m, g;
      const l = t.resolve(t.baseSkeletonGlb), { scene: c, animations: h, bytes: u } = await il(l);
      (g = (m = t._resourceSizes) == null ? void 0 : m.set) == null || g.call(m, l, u), t.baseArmature = c, t.avatarRoot.add(c), t.boneMap.clear();
      const f = c.getObjectByName("Bip001");
      if (f && f.traverse((_) => {
        _.name && t.boneMap.set(_.name, _);
      }), h.length > 0) {
        t.animClips.clear();
        for (const _ of h)
          t.animClips.has(_.name) || t.animClips.set(_.name, _);
      }
    };
    {
      const l = t.resolve("partsdata-viewer.json");
      t.loadPartsMetadata = async () => {
        const c = performance.now(), h = await sl(l);
        return nt.enabled && nt.record(this.id, "partsMeta", performance.now() - c), t.partsMetadata = h, h;
      };
    }
    const n = (a = t.loadAndAttachPart) == null ? void 0 : a.bind(t);
    n && (t.loadAndAttachPart = async (...l) => {
      if (!nt.enabled) return n(...l);
      const c = performance.now();
      try {
        return await n(...l);
      } finally {
        this._perfPartTotal += performance.now() - c, this._perfPartCount++;
      }
    });
    const i = (o = t.playPose) == null ? void 0 : o.bind(t);
    i && (t.playPose = async (...l) => {
      if (!nt.enabled) return i(...l);
      const c = performance.now();
      try {
        return await i(...l);
      } finally {
        nt.record(this.id, "pose", performance.now() - c);
      }
    });
    const r = t.loadBaseSkeleton;
    t.loadBaseSkeleton = async () => {
      if (!nt.enabled) return r();
      const l = performance.now();
      try {
        return await r();
      } finally {
        nt.record(this.id, "skeleton.getShared", performance.now() - l);
      }
    };
  }
  get isDisposed() {
    return this.disposed;
  }
  /** AvatarViewer 내장 기본 프리셋 사용 (테스트 편의용) */
  async loadDefault() {
    var e, t;
    if (!this.disposed) {
      nt.markAvatarStart(this.id);
      try {
        if (await this.viewer.start(), this.disposed) return;
        this.measureNativeHeight(), nt.markAvatarEnd(this.id), (e = this.onLoaded) == null || e.call(this, this.id);
      } catch (n) {
        throw nt.markAvatarEnd(this.id), this.disposed || (t = this.onError) == null || t.call(this, this.id, n instanceof Error ? n : new Error(String(n))), n;
      }
    }
  }
  /**
   * 로드 직후 native bounding box height 측정.
   * tickInstances가 이미 root.scale을 설정했을 수 있으므로
   * 일시적으로 scale=1로 되돌리고 측정 후 복원.
   * OZAvatarGrid가 이 값으로 카드 height에 맞춘 스케일을 계산한다.
   */
  measureNativeHeight() {
    const e = this.root.scale.clone(), t = this.root.position.clone();
    this.root.scale.setScalar(1), this.root.position.set(0, 0, 0), this.root.updateMatrixWorld(!0);
    const n = new Zt().setFromObject(this.root), i = new P();
    n.getSize(i), this.nativeHeight = i.y, this.root.scale.copy(e), this.root.position.copy(t), this.root.updateMatrixWorld(!0);
  }
  /** AvatarDataJson 객체 직접 전달 (내부 사용 — 콜백 발사 없음) */
  async loadDataInternal(e) {
    if (this.disposed) return;
    Bm(e);
    const t = performance.now();
    await this.viewer.loadAvatarFromData(e), nt.enabled && (nt.record(this.id, "loadData", performance.now() - t), this._perfPartCount > 0 && (nt.record(this.id, "parts.total", this._perfPartTotal), nt.record(this.id, "parts.count", this._perfPartCount))), !this.disposed && (this.measureNativeHeight(), this.desyncAnimation());
  }
  /**
   * 같은 row의 아바타들이 batch 로드로 거의 동시에 playPose를 호출 → action.time=0에서
   * 같이 시작 → 같은 포즈는 시각적으로 sync된다. 로드 직후 한 번만 랜덤 오프셋을
   * 줘서 desync. (AvatarViewer 격리 — private 필드는 런타임 bracket 접근.)
   */
  desyncAnimation() {
    const t = this.viewer.currentAction ?? null;
    if (!t) return;
    const n = t.getClip();
    !n || n.duration <= 0 || (t.time = Math.random() * n.duration);
  }
  /** AvatarDataJson 객체 직접 전달 — onLoaded/onError 발사 */
  async loadFromData(e) {
    var t, n;
    if (!this.disposed) {
      nt.markAvatarStart(this.id);
      try {
        await this.loadDataInternal(e), nt.markAvatarEnd(this.id), (t = this.onLoaded) == null || t.call(this, this.id);
      } catch (i) {
        throw nt.markAvatarEnd(this.id), this.disposed || (n = this.onError) == null || n.call(this, this.id, i instanceof Error ? i : new Error(String(i))), i;
      }
    }
  }
  /**
   * 프리셋 URL fetch + 로드 — onLoaded/onError 발사.
   * API 응답이 { avatar_json: "..." } 래핑이면 풀고, 평탄 객체면 그대로 사용.
   */
  async loadFromUrl(e) {
    var t, n;
    if (!this.disposed) {
      nt.markAvatarStart(this.id);
      try {
        const i = performance.now(), r = await fetch(e);
        if (!r.ok) throw new Error(`preset HTTP ${r.status}: ${e}`);
        const a = await r.json();
        nt.enabled && nt.record(this.id, "presetFetch", performance.now() - i);
        const o = typeof (a == null ? void 0 : a.avatar_json) == "string" ? JSON.parse(a.avatar_json) : a;
        await this.loadDataInternal(o), this.disposed || (nt.markAvatarEnd(this.id), (t = this.onLoaded) == null || t.call(this, this.id));
      } catch (i) {
        throw nt.markAvatarEnd(this.id), this.disposed || (n = this.onError) == null || n.call(this, this.id, i instanceof Error ? i : new Error(String(i))), i;
      }
    }
  }
  /** 매 프레임 호출 (visible일 때만 OZAvatarGrid가 부른다) */
  update(e) {
    this.disposed || this.viewer.update(e);
  }
  dispose() {
    this.disposed || (this.disposed = !0, this.viewer.clearAvatar(), this.scene.remove(this.root));
  }
}
function eg(s) {
  const e = new ae(s);
  return new It({
    uniforms: {
      // 배경 = 프로필 뷰어와 같은 스튜디오형 (SceneConfig OZ_FLAT_BG_GLSL)
      flatColor: { value: [e.r, e.g, e.b] },
      flatOn: { value: 1 },
      flatAspect: { value: 1 },
      uSlotSize: { value: new ze(1, 1) },
      // 픽셀 단위 (w, h)
      uCornerRadius: { value: 12 },
      // 픽셀 단위
      uOutlineWidth: { value: 1 },
      // 픽셀 단위
      uOutlineColor: { value: new Ve(1, 1, 1, 0.05) }
      // rgba (matches React border)
    },
    vertexShader: (
      /* glsl */
      `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `
    ),
    fragmentShader: (
      /* glsl */
      `
${Xp}
            uniform vec2 uSlotSize;
            uniform float uCornerRadius;
            uniform float uOutlineWidth;
            uniform vec4 uOutlineColor;
            varying vec2 vUv;

            // SDF rounded rectangle — p: pixel relative to center, b: half-size, r: radius
            float sdRoundedRect(vec2 p, vec2 b, float r) {
                vec2 q = abs(p) - b + r;
                return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
            }

            void main() {
                // 라운드 사각형 마스크
                vec2 pixelPos = (vUv - 0.5) * uSlotSize;
                float sdf = sdRoundedRect(pixelPos, uSlotSize * 0.5, uCornerRadius);
                float mask = 1.0 - smoothstep(-0.5, 0.5, sdf);
                if (mask <= 0.0) discard;

                vec3 col = ozFlatBg(vec2(vUv.x, vUv.y - 0.08));

                // Outline
                float outlineMask = smoothstep(-uOutlineWidth - 0.5, -uOutlineWidth + 0.5, sdf);
                col = mix(col, uOutlineColor.rgb, outlineMask * uOutlineColor.a);

                gl_FragColor = vec4(col, mask);
            }
        `
    ),
    depthWrite: !0,
    transparent: !0
  });
}
function tg(s) {
  s.traverse((e) => {
    const t = e;
    if (!t.isMesh) return;
    const n = Array.isArray(t.material) ? t.material : [t.material];
    n.some((i) => i && (!i.transparent || i.blending === 5)) && (t.renderOrder = -0.5);
    for (const i of n)
      i && (i.transparent || (i.transparent = !0, i.blending = 5, i.blendEquation = 100, i.blendSrc = 201, i.blendDst = 200, i.blendEquationAlpha = 100, i.blendSrcAlpha = 200, i.blendDstAlpha = 201, i.depthWrite = !0));
  });
}
function mo(s) {
  const e = new Lt().setFromEuler(
    new qt(
      Ri.degToRad(s.x),
      Ri.degToRad(-s.y),
      Ri.degToRad(-s.z),
      "YXZ"
    )
  ), t = new P(0, 0, 1).applyQuaternion(e);
  return new P().addScaledVector(t, -5);
}
const Yt = class Yt {
  constructor(e) {
    this.composer = null, this.rafId = 0, this.lastT = 0, this.resizeObserver = null, this.paused = !1, this.instances = /* @__PURE__ */ new Map(), this.slotQuads = /* @__PURE__ */ new Map(), this.loadGen = 0, this.pendingLoads = [], this.pendingLoadIds = [], this.batchRunning = !1, this.lazyObserver = null, this.lazyMap = /* @__PURE__ */ new Map(), this.slotElements = /* @__PURE__ */ new Map(), this._frameCounter = 0, this._batchCounter = 0, this.container = e.container, this.canvas = e.canvas, this.baseUrl = e.baseUrl, this.dprCap = e.dprCap ?? 1.5, this.onContextLost = e.onContextLost, this.renderer = new Gd({
      canvas: this.canvas,
      alpha: !0,
      antialias: !0,
      powerPreference: "high-performance",
      premultipliedAlpha: !0
    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.dprCap)), this.renderer.setClearColor(0, 0), this.renderer.toneMapping = 1, this.renderer.toneMappingExposure = Ht.toneMappingExposure, this.renderer.outputColorSpace = mt, this.canvas.addEventListener("webglcontextlost", (i) => {
      var r;
      i.preventDefault(), (r = this.onContextLost) == null || r.call(this);
    }, !1), this.scene = new ka(), this.camera = new Ii(0, 1, 1, 0, 0.1, 2e4), this.camera.position.z = 1e4, this.setupLights(), this.setupEnvMap(), this.setupComposer(), this.setupResize(), nt.init(), this.start();
    const t = `${this.baseUrl}avatar/skeleton/Msh_Ava_Bip.glb`, n = `${this.baseUrl}partsdata-viewer.json`;
    il(t).catch(() => {
    }), sl(n).catch(() => {
    });
  }
  /**
   * EffectComposer 파이프라인 — oz-avatar.ts와 동일.
   * RenderPass → UnrealBloomPass(emissive boost) → LiftGammaGain → OutputPass.
   * LinearToneMapping + 강한 라이트 → HDR 값 폭발하므로 LGG가 필수 (압축).
   */
  setupComposer() {
    const e = this.container.clientWidth || 1, t = this.container.clientHeight || 1, n = Math.min(window.devicePixelRatio, this.dprCap), i = new dn(e * n, t * n, {
      type: 1016,
      samples: 2
    });
    this.composer = new Up(this.renderer, i), this.composer.addPass(new Np(this.scene, this.camera)), this.composer.addPass(new Wo({
      uniforms: {
        tDiffuse: { value: null },
        uInvGamma: { value: new P(...Ht.liftGammaGain.invGamma) },
        uGain: { value: new P(...Ht.liftGammaGain.gain) }
      },
      vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
      fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform vec3 uInvGamma;
                uniform vec3 uGain;
                varying vec2 vUv;
                void main() {
                    vec4 tex = texture2D(tDiffuse, vUv);
                    vec3 c = tex.rgb;
            ${jp}
                    vec3 outColor = clamp(c, 0.0, 1.0);
                    // 캔버스 transparent — slot quad가 깐 alpha=1을 그대로 통과시키고
                    // premultipliedAlpha=true 캔버스라 color * alpha 출력.
                    gl_FragColor = vec4(outColor * tex.a, tex.a);
                }
            `
    })), this.composer.addPass(new Bp());
  }
  /**
   * SceneConfig 값으로 main / rim / ambient light 설정.
   * envMap은 setupEnvMap에서 별도 처리.
   */
  setupLights() {
    const e = Ht.mainLight, t = new Sr(new ae(e.color), e.intensity);
    t.target.position.set(0, 0, 0), this.scene.add(t.target), t.position.copy(mo(e.rotation)), this.scene.add(t);
    const n = Ht.rimLight, i = new Sr(new ae(n.color), n.intensity);
    i.position.copy(mo(n.rotation)), this.scene.add(i);
    const r = Ht.ambient, a = new dp(new ae(r.color), r.intensity);
    this.scene.add(a);
  }
  /** PMREM 환경맵 (specular IBL용 — oz-avatar.ts와 동일) */
  setupEnvMap() {
    const e = new _r(this.renderer), t = new ka();
    t.background = new ae(Ht.envMapColor), this.scene.environment = e.fromScene(t).texture, e.dispose();
  }
  setupResize() {
    this.resizeObserver = new ResizeObserver(() => this.handleResize()), this.resizeObserver.observe(this.container), this.handleResize();
  }
  handleResize() {
    var n;
    const e = this.container.clientWidth, t = this.container.clientHeight;
    e === 0 || t === 0 || (this.renderer.setSize(e, t, !1), this.camera.left = 0, this.camera.right = e, this.camera.top = t, this.camera.bottom = 0, this.camera.updateProjectionMatrix(), (n = this.composer) == null || n.setSize(e, t));
  }
  start() {
    const e = (t) => {
      var r;
      if (this.rafId = requestAnimationFrame(e), this.paused) return;
      const n = (t - this.lastT) / 1e3;
      this.lastT = t;
      const i = Math.min(n, 0.1);
      this.tickInstances(i), this.renderer.setScissorTest(!1), (r = this.composer) == null || r.render(i);
    };
    this.rafId = requestAnimationFrame(e);
  }
  tickInstances(e) {
    if (this.instances.size === 0) return;
    const t = this.container.getBoundingClientRect(), n = this.container.clientHeight, i = this._frameCounter++ & 1;
    let r = 0;
    for (const a of this.instances.values()) {
      const o = a.element.getBoundingClientRect(), l = o.left + o.width / 2 - t.left, c = o.top + o.height / 2 - t.top, h = n - c, u = this.slotQuads.get(a.id);
      u && (u.mesh.position.set(l, h, -500), u.mesh.scale.set(o.width, o.height, 1), u.material.uniforms.uSlotSize.value.set(o.width, o.height));
      const f = a.nativeHeight > 0 ? a.nativeHeight : 1.2, m = o.height * 0.6 / f, g = -(f / 2) * m;
      a.root.position.set(l, h + g, 0), a.root.scale.setScalar(m);
      const _ = o.bottom > 0 && o.top < window.innerHeight;
      a.visible = _, a.root.visible = _ && a.ready, u && (u.mesh.visible = _ && a.ready), _ && (a._pendingDt += e, (r & 1) === i && (a.update(a._pendingDt), a._pendingDt = 0)), r++;
    }
  }
  /**
   * 컨테이너 풀 높이 캔버스에서 viewport에 보이는 영역만 fragment 작업.
   */
  applyScissor() {
    const e = this.container.getBoundingClientRect(), t = Math.min(
      this.container.clientHeight,
      window.innerHeight - e.top
    ), n = Math.max(0, -e.top), i = t - n;
    if (i <= 0) {
      this.renderer.setScissorTest(!1);
      return;
    }
    this.renderer.setScissor(
      0,
      this.container.clientHeight - t,
      this.container.clientWidth,
      i
    ), this.renderer.setScissorTest(!0);
  }
  /**
   * setSlots — 카드 N개에 GridAvatarInstance 등록.
   * 호출할 때마다 기존 인스턴스는 dispose, 새로 생성.
   * presetUrl이 없으면 viewer.start() (AvatarViewer 내장 기본 프리셋) 사용.
   *
   * callbacks:
   *   - onLoaded(id): 한 카드 로드 완료
   *   - onError(id, err): 한 카드 로드 실패 (호스트가 PNG fallback 등 대응)
   *   - onAllReady(count): 모든 카드 처리 끝 (성공+실패 합산)
   */
  setSlots(e, t) {
    var o, l;
    nt.beginSetSlots(), this.clearInstances();
    const n = e.length;
    let i = 0;
    const r = () => {
      var c;
      i++, i >= n && (nt.dump(), (c = t == null ? void 0 : t.onAllReady) == null || c.call(t, n));
    }, a = ++this.loadGen;
    (o = this.lazyObserver) == null || o.disconnect(), this.lazyObserver = new IntersectionObserver((c) => {
      var h;
      if (a === this.loadGen) {
        for (const u of c) {
          if (!u.isIntersecting) continue;
          const f = u.target.dataset.gridSlotId;
          if (!f) continue;
          const m = this.lazyMap.get(f);
          m && (this.lazyMap.delete(f), this.pendingLoads.push(m), this.pendingLoadIds.push(f), (h = this.lazyObserver) == null || h.unobserve(u.target));
        }
        a === this.loadGen && this.kickBatchLoader(a);
      }
    }, { rootMargin: `${Yt.LAZY_ROOT_MARGIN_PX}px 0px` });
    for (const c of e) {
      const h = this.createSlotQuad(c.bgColor ?? "#2a2a2a");
      this.scene.add(h.mesh), this.slotQuads.set(c.id, h);
      const u = new Jm({
        id: c.id,
        element: c.element,
        scene: this.scene,
        baseUrl: this.baseUrl,
        onLoaded: (_) => {
          u.isDisposed || tg(u.root);
          const d = u.isDisposed || !this.composer ? [] : Rm(this.renderer, u.root, this.camera, this.scene, this.composer.renderTarget1), p = () => {
            var b;
            u.isDisposed || (u.ready = !0, (b = t == null ? void 0 : t.onLoaded) == null || b.call(t, _), r());
          }, S = performance.now();
          Cm(d, 5e3).then(() => setTimeout(p, Math.max(0, Yt.REVEAL_DELAY_MS - (performance.now() - S))));
        },
        onError: (_, d) => {
          var p;
          (p = t == null ? void 0 : t.onError) == null || p.call(t, _, d), r();
        }
      });
      u.root.rotation.y = Ri.degToRad(Ht.avatar.rotationY), this.instances.set(c.id, u), this.slotElements.set(c.id, c.element), c.element.dataset.gridSlotId = c.id;
      const f = () => u.isDisposed || a !== this.loadGen ? Promise.resolve() : c.presetUrl ? u.loadFromUrl(c.presetUrl) : u.loadDefault(), m = c.element.getBoundingClientRect();
      m.bottom > -Yt.LAZY_ROOT_MARGIN_PX && m.top < window.innerHeight + Yt.LAZY_ROOT_MARGIN_PX ? (this.pendingLoads.push(f), this.pendingLoadIds.push(c.id)) : (this.lazyMap.set(c.id, f), this.lazyObserver.observe(c.element));
    }
    if (n === 0) {
      (l = t == null ? void 0 : t.onAllReady) == null || l.call(t, 0);
      return;
    }
    this.kickBatchLoader(a);
  }
  /**
   * Rolling concurrency pool — 항상 최대 MAX_CONCURRENT개 worker active.
   * 각 worker는 queue가 빌 때까지 계속 다음 load fn을 pull. row barrier 없음.
   *
   * Lazy observer가 loading 중에 새 항목을 push하면:
   *   - 기존 worker가 아직 루프 중이면 그대로 집어감
   *   - worker들이 모두 빠져나간 뒤 push되면 batchRunning=false 상태라
   *     observer 콜백이 kickBatchLoader 재호출 → 새 stream 시작
   *
   * GridPerf.recordBatch/endBatch 은 호환 위해 stream 단위로 1회 호출.
   * baseline 비교 metric은 first_ready/last_ready/p50/p95 (batch 무관).
   */
  kickBatchLoader(e) {
    if (this.batchRunning || e !== this.loadGen) return;
    this.batchRunning = !0;
    const t = this._batchCounter++, n = this.pendingLoadIds.slice();
    nt.recordBatch(t, n);
    const i = async () => {
      for (; this.pendingLoads.length > 0 && e === this.loadGen; ) {
        const r = this.pendingLoads.shift();
        this.pendingLoadIds.shift(), await r().catch(() => {
        });
      }
    };
    (async () => {
      try {
        const r = [];
        for (let a = 0; a < Yt.MAX_CONCURRENT; a++)
          r.push(i());
        await Promise.all(r), nt.endBatch(t);
      } finally {
        this.batchRunning = !1;
      }
    })();
  }
  /** 호버 상태 설정 (DOM 측에서 mouseenter/leave로 호출) */
  setHover(e, t) {
    const n = this.instances.get(e);
    n && (n.hover = t);
  }
  clearInstances() {
    var e;
    this.loadGen++, (e = this.lazyObserver) == null || e.disconnect(), this.lazyObserver = null, this.lazyMap.clear(), this.pendingLoads.length = 0, this.pendingLoadIds.length = 0, this._batchCounter = 0;
    for (const t of this.slotElements.values())
      delete t.dataset.gridSlotId;
    this.slotElements.clear();
    for (const t of this.instances.values())
      t.dispose();
    this.instances.clear();
    for (const t of this.slotQuads.values())
      this.scene.remove(t.mesh), t.mesh.geometry.dispose(), t.material.dispose();
    this.slotQuads.clear();
  }
  /** Slot 배경 quad 생성 — 1x1 unit PlaneGeometry + RuntimeGradient ShaderMaterial */
  createSlotQuad(e) {
    const t = eg(e), n = new li(1, 1), i = new vt(n, t);
    return i.renderOrder = -1, { mesh: i, material: t };
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    this.paused = !1, this.lastT = performance.now();
  }
  dispose() {
    var e;
    cancelAnimationFrame(this.rafId), (e = this.resizeObserver) == null || e.disconnect(), this.resizeObserver = null, this.clearInstances(), this.renderer.dispose();
  }
};
Yt.MAX_CONCURRENT = 6, Yt.REVEAL_DELAY_MS = 150, Yt.LAZY_ROOT_MARGIN_PX = 400;
let Ar = Yt;
var go = { id: "dev #353", env: "dev", number: 353, time: "2026-11-18 15:41:09", commit: "5e12d88e6" };
const rl = typeof go < "u" ? go : { id: "source", env: "source", number: 0, time: "", commit: "" };
function _o(s = rl) {
  return `${s.id}${s.time ? ` · ${s.time} KST` : ""}${s.commit ? ` · ${s.commit}` : ""}`;
}
function ng(s) {
  if (typeof window > "u") return;
  const e = window;
  if (e.OZAvatarBuild = e.OZAvatarBuild ?? {}, !e.OZAvatarBuild[s]) {
    e.OZAvatarBuild[s] = rl, console.info(`[${s}] build ${_o()}`), sg();
    try {
      if (!new URLSearchParams(location.search).has("ozbuild")) return;
      const t = () => {
        let n = document.getElementById("oz-build-badge");
        n || (n = document.createElement("div"), n.id = "oz-build-badge", n.style.cssText = "position:fixed;left:6px;bottom:6px;z-index:2147483647;padding:3px 7px;border-radius:4px;background:rgba(0,0,0,.72);color:#fff;font:11px/1.4 monospace;pointer-events:none;white-space:pre", document.body.appendChild(n)), n.textContent = Object.entries(e.OZAvatarBuild).map(([i, r]) => `${i}: ${_o(r)}`).join(`
`);
      };
      document.body ? t() : document.addEventListener("DOMContentLoaded", t, { once: !0 });
    } catch {
    }
  }
}
let vo = !1;
function al() {
  const s = Array.from(document.querySelectorAll("script[src]")), e = s.find((t) => /oz-(avatar|stream-overlay)[^/]*\.(js|cjs)/.test(t.src)) ?? s.find((t) => /\/assets\/index-[^/]+\.js/.test(t.src));
  return e ? new URL("./", e.src.replace(/\/assets\/[^/]+$/, "/x")).href : new URL("./", location.href).href;
}
function ig() {
  const s = document.querySelector("oz-avatar, oz-avatar-editor, oz-avatar-grid"), e = s == null ? void 0 : s.getAttribute("base-url");
  return e ? new URL(e, location.href).href : al();
}
function gr() {
  const s = window, e = { scriptBase: al(), assetBase: ig(), builds: s.OZAvatarBuild ?? {} };
  if (s.OZAvatarDebug) {
    s.OZAvatarDebug.open(e);
    return;
  }
  const t = document.createElement("script");
  t.src = `${e.scriptBase}oz-debug.js?_t=${Date.now()}`, t.onload = () => {
    var n;
    return (n = s.OZAvatarDebug) == null ? void 0 : n.open(e);
  }, t.onerror = () => console.warn("[oz-avatar] 디버그 패널(oz-debug.js)을 받지 못함:", t.src), document.head.appendChild(t);
}
function sg() {
  if (vo) return;
  vo = !0, window.OZAvatarDebugOpen = gr;
  try {
    new URLSearchParams(location.search).has("ozdebug") && setTimeout(gr, 800);
  } catch {
  }
  let s = [];
  const e = (t, n) => {
    if (t <= 48 && n <= 48) return !0;
    for (const i of Array.from(document.querySelectorAll("oz-avatar, oz-avatar-editor, oz-avatar-grid"))) {
      const r = i.getBoundingClientRect();
      if (r.width && t >= r.left && n >= r.top && t <= r.left + 48 && n <= r.top + 48) return !0;
    }
    return !1;
  };
  window.addEventListener("pointerdown", (t) => {
    if (!e(t.clientX, t.clientY)) {
      s = [];
      return;
    }
    const n = performance.now();
    s = s.filter((i) => n - i < 2500), s.push(n), s.length >= 7 && (s = [], gr());
  }, { capture: !0, passive: !0 });
}
ng("oz-avatar-grid");
const rg = `
:host {
    display: block;
    position: absolute;
    inset: 0;
    pointer-events: none;
}
canvas {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
}
`;
class ag extends HTMLElement {
  constructor() {
    super(...arguments), this.grid = null, this.initialized = !1, this.onVisibilityChange = () => {
      var e, t;
      document.hidden ? (e = this.grid) == null || e.pause() : (t = this.grid) == null || t.resume();
    };
  }
  connectedCallback() {
    if (this.initialized) return;
    this.initialized = !0;
    const e = this.attachShadow({ mode: "open" });
    e.innerHTML = `<style>${rg}</style>`, this.canvas = document.createElement("canvas"), e.appendChild(this.canvas);
    const t = this.parentElement;
    if (!t) {
      console.error("[oz-avatar-grid] parentElement 없음 — 부모 컨테이너가 필요합니다");
      return;
    }
    const n = parseFloat(this.getAttribute("dpr-cap") ?? "1.5"), i = this.getAttribute("base-url") ?? "";
    this.grid = new Ar({
      container: t,
      canvas: this.canvas,
      baseUrl: i,
      dprCap: n,
      onContextLost: () => {
        this.dispatchEvent(new CustomEvent("gl-context-lost"));
      }
    }), document.addEventListener("visibilitychange", this.onVisibilityChange);
  }
  disconnectedCallback() {
    var e;
    document.removeEventListener("visibilitychange", this.onVisibilityChange), (e = this.grid) == null || e.dispose(), this.grid = null;
  }
  /**
   * 카드 N개에 GridAvatarInstance 등록.
   * presetUrl이 없는 슬롯은 AvatarViewer 내장 기본 프리셋으로 로드.
   * 로드 결과는 slot-loaded / slot-error / slots-ready 이벤트로 전달된다.
   */
  setSlots(e) {
    this.grid && this.grid.setSlots(e, {
      onLoaded: (t) => {
        this.dispatchEvent(new CustomEvent("slot-loaded", { detail: { id: t } }));
      },
      onError: (t, n) => {
        this.dispatchEvent(new CustomEvent("slot-error", {
          detail: { id: t, error: n.message }
        }));
      },
      onAllReady: (t) => {
        this.dispatchEvent(new CustomEvent("slots-ready", { detail: { count: t } }));
      }
    });
  }
  /** 호버 신호 (DOM 측에서 mouseenter/leave) */
  setHover(e, t) {
    var n;
    (n = this.grid) == null || n.setHover(e, t);
  }
  /** 일시정지 (모달 열림 등) */
  pause() {
    var e;
    (e = this.grid) == null || e.pause();
  }
  /** 재개 */
  resume() {
    var e;
    (e = this.grid) == null || e.resume();
  }
  /** 명시적 dispose */
  dispose() {
    var e;
    (e = this.grid) == null || e.dispose(), this.grid = null;
  }
}
customElements.define("oz-avatar-grid", ag);
export {
  ag as OzAvatarGridElement
};
