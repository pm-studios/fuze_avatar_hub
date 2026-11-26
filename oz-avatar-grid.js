/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Lr = "169";
const ea = "attached", Sl = "detached";
const pn = "", ft = "srgb", ut = "srgb-linear", Ir = "display-p3", As = "display-p3-linear", bs = "linear", rt = "srgb", xs = "rec709", Ss = "p3";
const ta = "300 es";
class On {
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
let na = 1234567;
const Ri = Math.PI / 180, si = 180 / Math.PI;
function jt() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (bt[s & 255] + bt[s >> 8 & 255] + bt[s >> 16 & 255] + bt[s >> 24 & 255] + "-" + bt[e & 255] + bt[e >> 8 & 255] + "-" + bt[e >> 16 & 15 | 64] + bt[e >> 24 & 255] + "-" + bt[t & 63 | 128] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 255] + bt[t >> 24 & 255] + bt[n & 255] + bt[n >> 8 & 255] + bt[n >> 16 & 255] + bt[n >> 24 & 255]).toLowerCase();
}
function St(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Fr(s, e) {
  return (s % e + e) % e;
}
function Ml(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function yl(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function Pi(s, e, t) {
  return (1 - t) * s + t * e;
}
function Al(s, e, t, n) {
  return Pi(s, e, 1 - Math.exp(-t * n));
}
function El(s, e = 1) {
  return e - Math.abs(Fr(s, e * 2) - e);
}
function Tl(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function wl(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Cl(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Rl(s, e) {
  return s + Math.random() * (e - s);
}
function Pl(s) {
  return s * (0.5 - Math.random());
}
function Dl(s) {
  s !== void 0 && (na = s);
  let e = na += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Ll(s) {
  return s * Ri;
}
function Il(s) {
  return s * si;
}
function Fl(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Ul(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function Nl(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function kl(s, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), h = a((e + n) / 2), f = r((e - n) / 2), u = a((e - n) / 2), d = r((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, l * f, l * u, o * c);
      break;
    case "YZY":
      s.set(l * u, o * h, l * f, o * c);
      break;
    case "ZXZ":
      s.set(l * f, l * u, o * h, o * c);
      break;
    case "XZX":
      s.set(o * h, l * g, l * d, o * c);
      break;
    case "YXY":
      s.set(l * d, o * h, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * d, o * h, o * c);
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
const Di = {
  DEG2RAD: Ri,
  RAD2DEG: si,
  generateUUID: jt,
  clamp: St,
  euclideanModulo: Fr,
  mapLinear: Ml,
  inverseLerp: yl,
  lerp: Pi,
  damp: Al,
  pingpong: El,
  smoothstep: Tl,
  smootherstep: wl,
  randInt: Cl,
  randFloat: Rl,
  randFloatSpread: Pl,
  seededRandom: Dl,
  degToRad: Ll,
  radToDeg: Il,
  isPowerOfTwo: Fl,
  ceilPowerOfTwo: Ul,
  floorPowerOfTwo: Nl,
  setQuaternionFromProperEuler: kl,
  normalize: tt,
  denormalize: Vt
};
class Oe {
  constructor(e = 0, t = 0) {
    Oe.prototype.isVector2 = !0, this.x = e, this.y = t;
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
class ze {
  constructor(e, t, n, i, r, a, o, l, c) {
    ze.prototype.isMatrix3 = !0, this.elements = [
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
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], f = n[7], u = n[2], d = n[5], g = n[8], _ = i[0], p = i[3], m = i[6], S = i[1], b = i[4], x = i[7], A = i[2], y = i[5], w = i[8];
    return r[0] = a * _ + o * S + l * A, r[3] = a * p + o * b + l * y, r[6] = a * m + o * x + l * w, r[1] = c * _ + h * S + f * A, r[4] = c * p + h * b + f * y, r[7] = c * m + h * x + f * w, r[2] = u * _ + d * S + g * A, r[5] = u * p + d * b + g * y, r[8] = u * m + d * x + g * w, this;
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = h * a - o * c, u = o * l - h * r, d = c * r - a * l, g = t * f + n * u + i * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = f * _, e[1] = (i * c - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = u * _, e[4] = (h * t - i * l) * _, e[5] = (i * r - o * t) * _, e[6] = d * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * r) * _, this;
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
    return this.premultiply(Fs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Fs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Fs.makeTranslation(e, t)), this;
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
const Fs = /* @__PURE__ */ new ze();
function wo(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function Ii(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Bl() {
  const s = Ii("canvas");
  return s.style.display = "block", s;
}
const ia = {};
function gs(s) {
  s in ia || (ia[s] = !0, console.warn(s));
}
function Ol(s, e, t) {
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
function Gl(s) {
  const e = s.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function zl(s) {
  const e = s.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const sa = /* @__PURE__ */ new ze().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), ra = /* @__PURE__ */ new ze().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), pi = {
  [ut]: {
    transfer: bs,
    primaries: xs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s,
    fromReference: (s) => s
  },
  [ft]: {
    transfer: rt,
    primaries: xs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s.convertSRGBToLinear(),
    fromReference: (s) => s.convertLinearToSRGB()
  },
  [As]: {
    transfer: bs,
    primaries: Ss,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.applyMatrix3(ra),
    fromReference: (s) => s.applyMatrix3(sa)
  },
  [Ir]: {
    transfer: rt,
    primaries: Ss,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.convertSRGBToLinear().applyMatrix3(ra),
    fromReference: (s) => s.applyMatrix3(sa).convertLinearToSRGB()
  }
}, Hl = /* @__PURE__ */ new Set([ut, As]), qe = {
  enabled: !0,
  _workingColorSpace: ut,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(s) {
    if (!Hl.has(s))
      throw new Error(`Unsupported working color space, "${s}".`);
    this._workingColorSpace = s;
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = pi[e].toReference, i = pi[t].fromReference;
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this._workingColorSpace);
  },
  getPrimaries: function(s) {
    return pi[s].primaries;
  },
  getTransfer: function(s) {
    return s === pn ? bs : pi[s].transfer;
  },
  getLuminanceCoefficients: function(s, e = this._workingColorSpace) {
    return s.fromArray(pi[e].luminanceCoefficients);
  }
};
function ni(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Us(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let zn;
class Vl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      zn === void 0 && (zn = Ii("canvas")), zn.width = e.width, zn.height = e.height;
      const n = zn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = zn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ii("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = ni(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ni(t[n] / 255) * 255) : t[n] = ni(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Wl = 0;
class Co {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Wl++ }), this.uuid = jt(), this.data = e, this.dataReady = !0, this.version = 0;
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
          i[a].isDataTexture ? r.push(Ns(i[a].image)) : r.push(Ns(i[a]));
      } else
        r = Ns(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ns(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Vl.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let jl = 0;
class dt extends On {
  constructor(e = dt.DEFAULT_IMAGE, t = dt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, o = 1023, l = 1009, c = dt.DEFAULT_ANISOTROPY, h = pn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: jl++ }), this.uuid = jt(), this.name = "", this.source = new Co(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Oe(0, 0), this.repeat = new Oe(1, 1), this.center = new Oe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ze(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
dt.DEFAULT_IMAGE = null;
dt.DEFAULT_MAPPING = 300;
dt.DEFAULT_ANISOTROPY = 1;
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
    const l = e.elements, c = l[0], h = l[4], f = l[8], u = l[1], d = l[5], g = l[9], _ = l[2], p = l[6], m = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(f - _) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(f + _) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + d + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2, x = (d + 1) / 2, A = (m + 1) / 2, y = (h + u) / 4, w = (f + _) / 4, D = (g + p) / 4;
      return b > x && b > A ? b < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), i = y / n, r = w / n) : x > A ? x < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(x), n = y / i, r = D / i) : A < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(A), n = w / r, i = D / r), this.set(n, i, r, t), this;
    }
    let S = Math.sqrt((p - g) * (p - g) + (f - _) * (f - _) + (u - h) * (u - h));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (p - g) / S, this.y = (f - _) / S, this.z = (u - h) / S, this.w = Math.acos((c + d + m - 1) / 2), this;
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
class Xl extends On {
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
    const r = new dt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
    return this.texture.source = new Co(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class gn extends Xl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ro extends dt {
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
class ql extends dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Rt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], f = n[i + 3];
    const u = r[a + 0], d = r[a + 1], g = r[a + 2], _ = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
      return;
    }
    if (o === 1) {
      e[t + 0] = u, e[t + 1] = d, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (f !== _ || l !== u || c !== d || h !== g) {
      let p = 1 - o;
      const m = l * u + c * d + h * g + f * _, S = m >= 0 ? 1 : -1, b = 1 - m * m;
      if (b > Number.EPSILON) {
        const A = Math.sqrt(b), y = Math.atan2(A, m * S);
        p = Math.sin(p * y) / A, o = Math.sin(o * y) / A;
      }
      const x = o * S;
      if (l = l * p + u * x, c = c * p + d * x, h = h * p + g * x, f = f * p + _ * x, p === 1 - o) {
        const A = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= A, c *= A, h *= A, f *= A;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], f = r[a], u = r[a + 1], d = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * f + l * d - c * u, e[t + 1] = l * g + h * u + c * f - o * d, e[t + 2] = c * g + h * d + o * u - l * f, e[t + 3] = h * g - o * f - l * u - c * d, e;
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
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), f = o(r / 2), u = l(n / 2), d = l(i / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = u * h * f + c * d * g, this._y = c * d * f - u * h * g, this._z = c * h * g + u * d * f, this._w = c * h * f - u * d * g;
        break;
      case "YXZ":
        this._x = u * h * f + c * d * g, this._y = c * d * f - u * h * g, this._z = c * h * g - u * d * f, this._w = c * h * f + u * d * g;
        break;
      case "ZXY":
        this._x = u * h * f - c * d * g, this._y = c * d * f + u * h * g, this._z = c * h * g + u * d * f, this._w = c * h * f - u * d * g;
        break;
      case "ZYX":
        this._x = u * h * f - c * d * g, this._y = c * d * f + u * h * g, this._z = c * h * g - u * d * f, this._w = c * h * f + u * d * g;
        break;
      case "YZX":
        this._x = u * h * f + c * d * g, this._y = c * d * f + u * h * g, this._z = c * h * g - u * d * f, this._w = c * h * f - u * d * g;
        break;
      case "XZY":
        this._x = u * h * f - c * d * g, this._y = c * d * f - u * h * g, this._z = c * h * g + u * d * f, this._w = c * h * f + u * d * g;
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
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], f = t[10], u = n + o + f;
    if (u > 0) {
      const d = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / d, this._x = (h - l) * d, this._y = (r - c) * d, this._z = (a - i) * d;
    } else if (n > o && n > f) {
      const d = 2 * Math.sqrt(1 + n - o - f);
      this._w = (h - l) / d, this._x = 0.25 * d, this._y = (i + a) / d, this._z = (r + c) / d;
    } else if (o > f) {
      const d = 2 * Math.sqrt(1 + o - n - f);
      this._w = (r - c) / d, this._x = (i + a) / d, this._y = 0.25 * d, this._z = (l + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + f - n - o);
      this._w = (a - i) / d, this._x = (r + c) / d, this._y = (l + h) / d, this._z = 0.25 * d;
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
      const d = 1 - t;
      return this._w = d * a + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), f = Math.sin((1 - t) * h) / c, u = Math.sin(t * h) / c;
    return this._w = a * f + this._w * u, this._x = n * f + this._x * u, this._y = i * f + this._y * u, this._z = r * f + this._z * u, this._onChangeCallback(), this;
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
    return this.applyQuaternion(aa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(aa.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - r * i), f = 2 * (r * n - a * t);
    return this.x = t + l * c + a * f - o * h, this.y = n + l * h + o * c - r * f, this.z = i + l * f + r * h - a * c, this;
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
    return ks.copy(this).projectOnVector(e), this.sub(ks);
  }
  reflect(e) {
    return this.sub(ks.copy(e).multiplyScalar(2 * this.dot(e)));
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
const ks = /* @__PURE__ */ new P(), aa = /* @__PURE__ */ new Rt();
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
      this.expandByPoint(Gt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Gt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Gt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(a, Gt) : Gt.fromBufferAttribute(r, a), Gt.applyMatrix4(e.matrixWorld), this.expandByPoint(Gt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), zi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), zi.copy(n.boundingBox)), zi.applyMatrix4(e.matrixWorld), this.union(zi);
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
    return this.clampPoint(e.center, Gt), Gt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(mi), Hi.subVectors(this.max, mi), Hn.subVectors(e.a, mi), Vn.subVectors(e.b, mi), Wn.subVectors(e.c, mi), vn.subVectors(Vn, Hn), bn.subVectors(Wn, Vn), wn.subVectors(Hn, Wn);
    let t = [
      0,
      -vn.z,
      vn.y,
      0,
      -bn.z,
      bn.y,
      0,
      -wn.z,
      wn.y,
      vn.z,
      0,
      -vn.x,
      bn.z,
      0,
      -bn.x,
      wn.z,
      0,
      -wn.x,
      -vn.y,
      vn.x,
      0,
      -bn.y,
      bn.x,
      0,
      -wn.y,
      wn.x,
      0
    ];
    return !Bs(t, Hn, Vn, Wn, Hi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Bs(t, Hn, Vn, Wn, Hi)) ? !1 : (Vi.crossVectors(vn, bn), t = [Vi.x, Vi.y, Vi.z], Bs(t, Hn, Vn, Wn, Hi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Gt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Gt).length() * 0.5), e;
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
], Gt = /* @__PURE__ */ new P(), zi = /* @__PURE__ */ new Zt(), Hn = /* @__PURE__ */ new P(), Vn = /* @__PURE__ */ new P(), Wn = /* @__PURE__ */ new P(), vn = /* @__PURE__ */ new P(), bn = /* @__PURE__ */ new P(), wn = /* @__PURE__ */ new P(), mi = /* @__PURE__ */ new P(), Hi = /* @__PURE__ */ new P(), Vi = /* @__PURE__ */ new P(), Cn = /* @__PURE__ */ new P();
function Bs(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Cn.fromArray(s, r);
    const o = i.x * Math.abs(Cn.x) + i.y * Math.abs(Cn.y) + i.z * Math.abs(Cn.z), l = e.dot(Cn), c = t.dot(Cn), h = n.dot(Cn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const Yl = /* @__PURE__ */ new Zt(), gi = /* @__PURE__ */ new P(), Os = /* @__PURE__ */ new P();
class Qt {
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Yl.setFromPoints(e).getCenter(n);
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
    gi.subVectors(e, this.center);
    const t = gi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(gi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Os.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(gi.copy(e.center).add(Os)), this.expandByPoint(gi.copy(e.center).sub(Os))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const sn = /* @__PURE__ */ new P(), Gs = /* @__PURE__ */ new P(), Wi = /* @__PURE__ */ new P(), xn = /* @__PURE__ */ new P(), zs = /* @__PURE__ */ new P(), ji = /* @__PURE__ */ new P(), Hs = /* @__PURE__ */ new P();
class Es {
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
    Gs.copy(e).add(t).multiplyScalar(0.5), Wi.copy(t).sub(e).normalize(), xn.copy(this.origin).sub(Gs);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Wi), o = xn.dot(this.direction), l = -xn.dot(Wi), c = xn.lengthSq(), h = Math.abs(1 - a * a);
    let f, u, d, g;
    if (h > 0)
      if (f = a * l - o, u = a * o - l, g = r * h, f >= 0)
        if (u >= -g)
          if (u <= g) {
            const _ = 1 / h;
            f *= _, u *= _, d = f * (f + a * u + 2 * o) + u * (a * f + u + 2 * l) + c;
          } else
            u = r, f = Math.max(0, -(a * u + o)), d = -f * f + u * (u + 2 * l) + c;
        else
          u = -r, f = Math.max(0, -(a * u + o)), d = -f * f + u * (u + 2 * l) + c;
      else
        u <= -g ? (f = Math.max(0, -(-a * r + o)), u = f > 0 ? -r : Math.min(Math.max(-r, -l), r), d = -f * f + u * (u + 2 * l) + c) : u <= g ? (f = 0, u = Math.min(Math.max(-r, -l), r), d = u * (u + 2 * l) + c) : (f = Math.max(0, -(a * r + o)), u = f > 0 ? r : Math.min(Math.max(-r, -l), r), d = -f * f + u * (u + 2 * l) + c);
    else
      u = a > 0 ? -r : r, f = Math.max(0, -(a * u + o)), d = -f * f + u * (u + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), i && i.copy(Gs).addScaledVector(Wi, u), d;
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
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (n = (e.min.x - u.x) * c, i = (e.max.x - u.x) * c) : (n = (e.max.x - u.x) * c, i = (e.min.x - u.x) * c), h >= 0 ? (r = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (r = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), f >= 0 ? (o = (e.min.z - u.z) * f, l = (e.max.z - u.z) * f) : (o = (e.max.z - u.z) * f, l = (e.min.z - u.z) * f), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, sn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    zs.subVectors(t, e), ji.subVectors(n, e), Hs.crossVectors(zs, ji);
    let a = this.direction.dot(Hs), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    xn.subVectors(this.origin, e);
    const l = o * this.direction.dot(ji.crossVectors(xn, ji));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(zs.cross(xn));
    if (c < 0 || l + c > a)
      return null;
    const h = -o * xn.dot(Hs);
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
class Re {
  constructor(e, t, n, i, r, a, o, l, c, h, f, u, d, g, _, p) {
    Re.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, h, f, u, d, g, _, p);
  }
  set(e, t, n, i, r, a, o, l, c, h, f, u, d, g, _, p) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = i, m[1] = r, m[5] = a, m[9] = o, m[13] = l, m[2] = c, m[6] = h, m[10] = f, m[14] = u, m[3] = d, m[7] = g, m[11] = _, m[15] = p, this;
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
    return new Re().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / jn.setFromMatrixColumn(e, 0).length(), r = 1 / jn.setFromMatrixColumn(e, 1).length(), a = 1 / jn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), f = Math.sin(r);
    if (e.order === "XYZ") {
      const u = a * h, d = a * f, g = o * h, _ = o * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = d + g * c, t[5] = u - _ * c, t[9] = -o * l, t[2] = _ - u * c, t[6] = g + d * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const u = l * h, d = l * f, g = c * h, _ = c * f;
      t[0] = u + _ * o, t[4] = g * o - d, t[8] = a * c, t[1] = a * f, t[5] = a * h, t[9] = -o, t[2] = d * o - g, t[6] = _ + u * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const u = l * h, d = l * f, g = c * h, _ = c * f;
      t[0] = u - _ * o, t[4] = -a * f, t[8] = g + d * o, t[1] = d + g * o, t[5] = a * h, t[9] = _ - u * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const u = a * h, d = a * f, g = o * h, _ = o * f;
      t[0] = l * h, t[4] = g * c - d, t[8] = u * c + _, t[1] = l * f, t[5] = _ * c + u, t[9] = d * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const u = a * l, d = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = _ - u * f, t[8] = g * f + d, t[1] = f, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = d * f + g, t[10] = u - _ * f;
    } else if (e.order === "XZY") {
      const u = a * l, d = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = u * f + _, t[5] = a * h, t[9] = d * f - g, t[2] = g * f - d, t[6] = o * h, t[10] = _ * f + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Kl, e, $l);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Lt.subVectors(e, t), Lt.lengthSq() === 0 && (Lt.z = 1), Lt.normalize(), Sn.crossVectors(n, Lt), Sn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Lt.x += 1e-4 : Lt.z += 1e-4, Lt.normalize(), Sn.crossVectors(n, Lt)), Sn.normalize(), Xi.crossVectors(Lt, Sn), i[0] = Sn.x, i[4] = Xi.x, i[8] = Lt.x, i[1] = Sn.y, i[5] = Xi.y, i[9] = Lt.y, i[2] = Sn.z, i[6] = Xi.z, i[10] = Lt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], f = n[5], u = n[9], d = n[13], g = n[2], _ = n[6], p = n[10], m = n[14], S = n[3], b = n[7], x = n[11], A = n[15], y = i[0], w = i[4], D = i[8], X = i[12], v = i[1], T = i[5], k = i[9], G = i[13], B = i[2], $ = i[6], z = i[10], J = i[14], V = i[3], he = i[7], ue = i[11], oe = i[15];
    return r[0] = a * y + o * v + l * B + c * V, r[4] = a * w + o * T + l * $ + c * he, r[8] = a * D + o * k + l * z + c * ue, r[12] = a * X + o * G + l * J + c * oe, r[1] = h * y + f * v + u * B + d * V, r[5] = h * w + f * T + u * $ + d * he, r[9] = h * D + f * k + u * z + d * ue, r[13] = h * X + f * G + u * J + d * oe, r[2] = g * y + _ * v + p * B + m * V, r[6] = g * w + _ * T + p * $ + m * he, r[10] = g * D + _ * k + p * z + m * ue, r[14] = g * X + _ * G + p * J + m * oe, r[3] = S * y + b * v + x * B + A * V, r[7] = S * w + b * T + x * $ + A * he, r[11] = S * D + b * k + x * z + A * ue, r[15] = S * X + b * G + x * J + A * oe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], f = e[6], u = e[10], d = e[14], g = e[3], _ = e[7], p = e[11], m = e[15];
    return g * (+r * l * f - i * c * f - r * o * u + n * c * u + i * o * d - n * l * d) + _ * (+t * l * d - t * c * u + r * a * u - i * a * d + i * c * h - r * l * h) + p * (+t * c * f - t * o * d - r * a * f + n * a * d + r * o * h - n * c * h) + m * (-i * o * h - t * l * f + t * o * u + i * a * f - n * a * u + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = e[9], u = e[10], d = e[11], g = e[12], _ = e[13], p = e[14], m = e[15], S = f * p * c - _ * u * c + _ * l * d - o * p * d - f * l * m + o * u * m, b = g * u * c - h * p * c - g * l * d + a * p * d + h * l * m - a * u * m, x = h * _ * c - g * f * c + g * o * d - a * _ * d - h * o * m + a * f * m, A = g * f * l - h * _ * l - g * o * u + a * _ * u + h * o * p - a * f * p, y = t * S + n * b + i * x + r * A;
    if (y === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / y;
    return e[0] = S * w, e[1] = (_ * u * r - f * p * r - _ * i * d + n * p * d + f * i * m - n * u * m) * w, e[2] = (o * p * r - _ * l * r + _ * i * c - n * p * c - o * i * m + n * l * m) * w, e[3] = (f * l * r - o * u * r - f * i * c + n * u * c + o * i * d - n * l * d) * w, e[4] = b * w, e[5] = (h * p * r - g * u * r + g * i * d - t * p * d - h * i * m + t * u * m) * w, e[6] = (g * l * r - a * p * r - g * i * c + t * p * c + a * i * m - t * l * m) * w, e[7] = (a * u * r - h * l * r + h * i * c - t * u * c - a * i * d + t * l * d) * w, e[8] = x * w, e[9] = (g * f * r - h * _ * r - g * n * d + t * _ * d + h * n * m - t * f * m) * w, e[10] = (a * _ * r - g * o * r + g * n * c - t * _ * c - a * n * m + t * o * m) * w, e[11] = (h * o * r - a * f * r - h * n * c + t * f * c + a * n * d - t * o * d) * w, e[12] = A * w, e[13] = (h * _ * i - g * f * i + g * n * u - t * _ * u - h * n * p + t * f * p) * w, e[14] = (g * o * i - a * _ * i - g * n * l + t * _ * l + a * n * p - t * o * p) * w, e[15] = (a * f * i - h * o * i + h * n * l - t * f * l - a * n * u + t * o * u) * w, this;
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
    const i = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, f = o + o, u = r * c, d = r * h, g = r * f, _ = a * h, p = a * f, m = o * f, S = l * c, b = l * h, x = l * f, A = n.x, y = n.y, w = n.z;
    return i[0] = (1 - (_ + m)) * A, i[1] = (d + x) * A, i[2] = (g - b) * A, i[3] = 0, i[4] = (d - x) * y, i[5] = (1 - (u + m)) * y, i[6] = (p + S) * y, i[7] = 0, i[8] = (g + b) * w, i[9] = (p - S) * w, i[10] = (1 - (u + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = jn.set(i[0], i[1], i[2]).length();
    const a = jn.set(i[4], i[5], i[6]).length(), o = jn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], zt.copy(this);
    const c = 1 / r, h = 1 / a, f = 1 / o;
    return zt.elements[0] *= c, zt.elements[1] *= c, zt.elements[2] *= c, zt.elements[4] *= h, zt.elements[5] *= h, zt.elements[6] *= h, zt.elements[8] *= f, zt.elements[9] *= f, zt.elements[10] *= f, t.setFromRotationMatrix(zt), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = 2e3) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), f = (t + e) / (t - e), u = (n + i) / (n - i);
    let d, g;
    if (o === 2e3)
      d = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === 2001)
      d = -a / (a - r), g = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = u, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = 2e3) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), f = 1 / (a - r), u = (t + e) * c, d = (n + i) * h;
    let g, _;
    if (o === 2e3)
      g = (a + r) * f, _ = -2 * f;
    else if (o === 2001)
      g = r * f, _ = -1 * f;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -u, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -d, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const jn = /* @__PURE__ */ new P(), zt = /* @__PURE__ */ new Re(), Kl = /* @__PURE__ */ new P(0, 0, 0), $l = /* @__PURE__ */ new P(1, 1, 1), Sn = /* @__PURE__ */ new P(), Xi = /* @__PURE__ */ new P(), Lt = /* @__PURE__ */ new P(), oa = /* @__PURE__ */ new Re(), la = /* @__PURE__ */ new Rt();
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
    const i = e.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], f = i[2], u = i[6], d = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(St(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-St(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(St(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, d), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-St(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(St(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, r)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-St(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return oa.makeRotationFromQuaternion(e), this.setFromRotationMatrix(oa, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return la.setFromEuler(this), this.setFromQuaternion(la, e);
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
class Po {
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
let Zl = 0;
const ca = /* @__PURE__ */ new P(), Xn = /* @__PURE__ */ new Rt(), rn = /* @__PURE__ */ new Re(), qi = /* @__PURE__ */ new P(), _i = /* @__PURE__ */ new P(), Ql = /* @__PURE__ */ new P(), Jl = /* @__PURE__ */ new Rt(), ha = /* @__PURE__ */ new P(1, 0, 0), ua = /* @__PURE__ */ new P(0, 1, 0), fa = /* @__PURE__ */ new P(0, 0, 1), da = { type: "added" }, ec = { type: "removed" }, qn = { type: "childadded", child: null }, Vs = { type: "childremoved", child: null };
class it extends On {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Zl++ }), this.uuid = jt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DEFAULT_UP.clone();
    const e = new P(), t = new qt(), n = new Rt(), i = new P(1, 1, 1);
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
        value: new Re()
      },
      normalMatrix: {
        value: new ze()
      }
    }), this.matrix = new Re(), this.matrixWorld = new Re(), this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Po(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return Xn.setFromAxisAngle(e, t), this.quaternion.multiply(Xn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.premultiply(Xn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ha, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ua, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(fa, e);
  }
  translateOnAxis(e, t) {
    return ca.copy(e).applyQuaternion(this.quaternion), this.position.add(ca.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(ha, e);
  }
  translateY(e) {
    return this.translateOnAxis(ua, e);
  }
  translateZ(e) {
    return this.translateOnAxis(fa, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(rn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? qi.copy(e) : qi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), _i.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? rn.lookAt(_i, qi, this.up) : rn.lookAt(qi, _i, this.up), this.quaternion.setFromRotationMatrix(rn), i && (rn.extractRotation(i.matrixWorld), Xn.setFromRotationMatrix(rn), this.quaternion.premultiply(Xn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(da), qn.child = e, this.dispatchEvent(qn), qn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ec), Vs.child = e, this.dispatchEvent(Vs), Vs.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), rn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), rn.multiply(e.parent.matrixWorld)), e.applyMatrix4(rn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(da), qn.child = e, this.dispatchEvent(qn), qn.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_i, e, Ql), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_i, Jl, e), e;
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
            const f = l[c];
            r(e.shapes, f);
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
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), f = a(e.shapes), u = a(e.skeletons), d = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), u.length > 0 && (n.skeletons = u), d.length > 0 && (n.animations = d), g.length > 0 && (n.nodes = g);
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
it.DEFAULT_UP = /* @__PURE__ */ new P(0, 1, 0);
it.DEFAULT_MATRIX_AUTO_UPDATE = !0;
it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ht = /* @__PURE__ */ new P(), an = /* @__PURE__ */ new P(), Ws = /* @__PURE__ */ new P(), on = /* @__PURE__ */ new P(), Yn = /* @__PURE__ */ new P(), Kn = /* @__PURE__ */ new P(), pa = /* @__PURE__ */ new P(), js = /* @__PURE__ */ new P(), Xs = /* @__PURE__ */ new P(), qs = /* @__PURE__ */ new P(), Ys = /* @__PURE__ */ new Ve(), Ks = /* @__PURE__ */ new Ve(), $s = /* @__PURE__ */ new Ve();
class Wt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Ht.subVectors(e, t), i.cross(Ht);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    Ht.subVectors(i, t), an.subVectors(n, t), Ws.subVectors(e, t);
    const a = Ht.dot(Ht), o = Ht.dot(an), l = Ht.dot(Ws), c = an.dot(an), h = an.dot(Ws), f = a * c - o * o;
    if (f === 0)
      return r.set(0, 0, 0), null;
    const u = 1 / f, d = (c * l - o * h) * u, g = (a * h - o * l) * u;
    return r.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return this.getBarycoord(e, t, n, i, on) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, on.x), l.addScaledVector(a, on.y), l.addScaledVector(o, on.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return Ys.setScalar(0), Ks.setScalar(0), $s.setScalar(0), Ys.fromBufferAttribute(e, t), Ks.fromBufferAttribute(e, n), $s.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(Ys, r.x), a.addScaledVector(Ks, r.y), a.addScaledVector($s, r.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Ht.subVectors(n, t), an.subVectors(e, t), Ht.cross(an).dot(i) < 0;
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
    return Ht.subVectors(this.c, this.b), an.subVectors(this.a, this.b), Ht.cross(an).length() * 0.5;
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
    Yn.subVectors(i, n), Kn.subVectors(r, n), js.subVectors(e, n);
    const l = Yn.dot(js), c = Kn.dot(js);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Xs.subVectors(e, i);
    const h = Yn.dot(Xs), f = Kn.dot(Xs);
    if (h >= 0 && f <= h)
      return t.copy(i);
    const u = l * f - h * c;
    if (u <= 0 && l >= 0 && h <= 0)
      return a = l / (l - h), t.copy(n).addScaledVector(Yn, a);
    qs.subVectors(e, r);
    const d = Yn.dot(qs), g = Kn.dot(qs);
    if (g >= 0 && d <= g)
      return t.copy(r);
    const _ = d * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Kn, o);
    const p = h * g - d * f;
    if (p <= 0 && f - h >= 0 && d - g >= 0)
      return pa.subVectors(r, i), o = (f - h) / (f - h + (d - g)), t.copy(i).addScaledVector(pa, o);
    const m = 1 / (p + _ + u);
    return a = _ * m, o = u * m, t.copy(n).addScaledVector(Yn, a).addScaledVector(Kn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Do = {
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
}, Mn = { h: 0, s: 0, l: 0 }, Yi = { h: 0, s: 0, l: 0 };
function Zs(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class re {
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
  setHex(e, t = ft) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, qe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = qe.workingColorSpace) {
    if (e = Fr(e, 1), t = St(t, 0, 1), n = St(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = Zs(a, r, e + 1 / 3), this.g = Zs(a, r, e), this.b = Zs(a, r, e - 1 / 3);
    }
    return qe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = ft) {
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
  setColorName(e, t = ft) {
    const n = Do[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ni(e.r), this.g = ni(e.g), this.b = ni(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Us(e.r), this.g = Us(e.g), this.b = Us(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ft) {
    return qe.fromWorkingColorSpace(xt.copy(this), e), Math.round(St(xt.r * 255, 0, 255)) * 65536 + Math.round(St(xt.g * 255, 0, 255)) * 256 + Math.round(St(xt.b * 255, 0, 255));
  }
  getHexString(e = ft) {
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
      const f = a - o;
      switch (c = h <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case n:
          l = (i - r) / f + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / f + 2;
          break;
        case r:
          l = (n - i) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = qe.workingColorSpace) {
    return qe.fromWorkingColorSpace(xt.copy(this), t), e.r = xt.r, e.g = xt.g, e.b = xt.b, e;
  }
  getStyle(e = ft) {
    qe.fromWorkingColorSpace(xt.copy(this), e);
    const t = xt.r, n = xt.g, i = xt.b;
    return e !== ft ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Mn), this.setHSL(Mn.h + e, Mn.s + t, Mn.l + n);
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
    this.getHSL(Mn), e.getHSL(Yi);
    const n = Pi(Mn.h, Yi.h, t), i = Pi(Mn.s, Yi.s, t), r = Pi(Mn.l, Yi.l, t);
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
const xt = /* @__PURE__ */ new re();
re.NAMES = Do;
let tc = 0;
class $t extends On {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: tc++ }), this.uuid = jt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new re(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
class Bn extends $t {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new re(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new qt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ht = /* @__PURE__ */ new P(), Ki = /* @__PURE__ */ new Oe();
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
        Ki.fromBufferAttribute(this, t), Ki.applyMatrix3(e), this.setXY(t, Ki.x, Ki.y);
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
class Lo extends Mt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Io extends Mt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Xt extends Mt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let nc = 0;
const Nt = /* @__PURE__ */ new Re(), Qs = /* @__PURE__ */ new it(), $n = /* @__PURE__ */ new P(), It = /* @__PURE__ */ new Zt(), vi = /* @__PURE__ */ new Zt(), gt = /* @__PURE__ */ new P();
class Bt extends On {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: nc++ }), this.uuid = jt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (wo(e) ? Io : Lo)(e, 1) : this.index = e, this;
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
      const r = new ze().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return Qs.lookAt(e), Qs.updateMatrix(), this.applyMatrix4(Qs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter($n).negate(), this.translate($n.x, $n.y, $n.z), this;
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
          It.setFromBufferAttribute(r), this.morphTargetsRelative ? (gt.addVectors(this.boundingBox.min, It.min), this.boundingBox.expandByPoint(gt), gt.addVectors(this.boundingBox.max, It.max), this.boundingBox.expandByPoint(gt)) : (this.boundingBox.expandByPoint(It.min), this.boundingBox.expandByPoint(It.max));
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
      if (It.setFromBufferAttribute(e), t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          vi.setFromBufferAttribute(o), this.morphTargetsRelative ? (gt.addVectors(It.min, vi.min), It.expandByPoint(gt), gt.addVectors(It.max, vi.max), It.expandByPoint(gt)) : (It.expandByPoint(vi.min), It.expandByPoint(vi.max));
        }
      It.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        gt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(gt));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            gt.fromBufferAttribute(o, c), l && ($n.fromBufferAttribute(e, c), gt.add($n)), i = Math.max(i, n.distanceToSquared(gt));
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
    for (let D = 0; D < n.count; D++)
      o[D] = new P(), l[D] = new P();
    const c = new P(), h = new P(), f = new P(), u = new Oe(), d = new Oe(), g = new Oe(), _ = new P(), p = new P();
    function m(D, X, v) {
      c.fromBufferAttribute(n, D), h.fromBufferAttribute(n, X), f.fromBufferAttribute(n, v), u.fromBufferAttribute(r, D), d.fromBufferAttribute(r, X), g.fromBufferAttribute(r, v), h.sub(c), f.sub(c), d.sub(u), g.sub(u);
      const T = 1 / (d.x * g.y - g.x * d.y);
      isFinite(T) && (_.copy(h).multiplyScalar(g.y).addScaledVector(f, -d.y).multiplyScalar(T), p.copy(f).multiplyScalar(d.x).addScaledVector(h, -g.x).multiplyScalar(T), o[D].add(_), o[X].add(_), o[v].add(_), l[D].add(p), l[X].add(p), l[v].add(p));
    }
    let S = this.groups;
    S.length === 0 && (S = [{
      start: 0,
      count: e.count
    }]);
    for (let D = 0, X = S.length; D < X; ++D) {
      const v = S[D], T = v.start, k = v.count;
      for (let G = T, B = T + k; G < B; G += 3)
        m(
          e.getX(G + 0),
          e.getX(G + 1),
          e.getX(G + 2)
        );
    }
    const b = new P(), x = new P(), A = new P(), y = new P();
    function w(D) {
      A.fromBufferAttribute(i, D), y.copy(A);
      const X = o[D];
      b.copy(X), b.sub(A.multiplyScalar(A.dot(X))).normalize(), x.crossVectors(y, X);
      const T = x.dot(l[D]) < 0 ? -1 : 1;
      a.setXYZW(D, b.x, b.y, b.z, T);
    }
    for (let D = 0, X = S.length; D < X; ++D) {
      const v = S[D], T = v.start, k = v.count;
      for (let G = T, B = T + k; G < B; G += 3)
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
        for (let u = 0, d = n.count; u < d; u++)
          n.setXYZ(u, 0, 0, 0);
      const i = new P(), r = new P(), a = new P(), o = new P(), l = new P(), c = new P(), h = new P(), f = new P();
      if (e)
        for (let u = 0, d = e.count; u < d; u += 3) {
          const g = e.getX(u + 0), _ = e.getX(u + 1), p = e.getX(u + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), a.fromBufferAttribute(t, p), h.subVectors(a, r), f.subVectors(i, r), h.cross(f), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, p), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let u = 0, d = t.count; u < d; u += 3)
          i.fromBufferAttribute(t, u + 0), r.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), h.subVectors(a, r), f.subVectors(i, r), h.cross(f), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      gt.fromBufferAttribute(e, t), gt.normalize(), e.setXYZ(t, gt.x, gt.y, gt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, f = o.normalized, u = new c.constructor(l.length * h);
      let d = 0, g = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        o.isInterleavedBufferAttribute ? d = l[_] * o.data.stride + o.offset : d = l[_] * h;
        for (let m = 0; m < h; m++)
          u[g++] = c[d++];
      }
      return new Mt(u, h, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Bt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, f = c.length; h < f; h++) {
        const u = c[h], d = e(u, n);
        l.push(d);
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
      for (let f = 0, u = c.length; f < u; f++) {
        const d = c[f];
        h.push(d.toJSON(e.data));
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
      const h = [], f = r[c];
      for (let u = 0, d = f.length; u < d; u++)
        h.push(f[u].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
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
const ma = /* @__PURE__ */ new Re(), Rn = /* @__PURE__ */ new Es(), $i = /* @__PURE__ */ new Qt(), ga = /* @__PURE__ */ new P(), Zi = /* @__PURE__ */ new P(), Qi = /* @__PURE__ */ new P(), Ji = /* @__PURE__ */ new P(), Js = /* @__PURE__ */ new P(), es = /* @__PURE__ */ new P(), _a = /* @__PURE__ */ new P(), ts = /* @__PURE__ */ new P();
class vt extends it {
  constructor(e = new Bt(), t = new Bn()) {
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
      es.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], f = r[l];
        h !== 0 && (Js.fromBufferAttribute(f, e), a ? es.addScaledVector(Js, h) : es.addScaledVector(Js.sub(t), h));
      }
      t.add(es);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), $i.copy(n.boundingSphere), $i.applyMatrix4(r), Rn.copy(e.ray).recast(e.near), !($i.containsPoint(Rn.origin) === !1 && (Rn.intersectSphere($i, ga) === null || Rn.origin.distanceToSquared(ga) > (e.far - e.near) ** 2)) && (ma.copy(r).invert(), Rn.copy(e.ray).applyMatrix4(ma), !(n.boundingBox !== null && Rn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Rn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, f = r.attributes.normal, u = r.groups, d = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = u.length; g < _; g++) {
          const p = u[g], m = a[p.materialIndex], S = Math.max(p.start, d.start), b = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
          for (let x = S, A = b; x < A; x += 3) {
            const y = o.getX(x), w = o.getX(x + 1), D = o.getX(x + 2);
            i = ns(this, m, e, n, c, h, f, y, w, D), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(o.count, d.start + d.count);
        for (let p = g, m = _; p < m; p += 3) {
          const S = o.getX(p), b = o.getX(p + 1), x = o.getX(p + 2);
          i = ns(this, a, e, n, c, h, f, S, b, x), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = u.length; g < _; g++) {
          const p = u[g], m = a[p.materialIndex], S = Math.max(p.start, d.start), b = Math.min(l.count, Math.min(p.start + p.count, d.start + d.count));
          for (let x = S, A = b; x < A; x += 3) {
            const y = x, w = x + 1, D = x + 2;
            i = ns(this, m, e, n, c, h, f, y, w, D), i && (i.faceIndex = Math.floor(x / 3), i.face.materialIndex = p.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(l.count, d.start + d.count);
        for (let p = g, m = _; p < m; p += 3) {
          const S = p, b = p + 1, x = p + 2;
          i = ns(this, a, e, n, c, h, f, S, b, x), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
        }
      }
  }
}
function ic(s, e, t, n, i, r, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, r, i, !0, o) : l = n.intersectTriangle(i, r, a, e.side === 0, o), l === null) return null;
  ts.copy(o), ts.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(ts);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: ts.clone(),
    object: s
  };
}
function ns(s, e, t, n, i, r, a, o, l, c) {
  s.getVertexPosition(o, Zi), s.getVertexPosition(l, Qi), s.getVertexPosition(c, Ji);
  const h = ic(s, e, t, n, Zi, Qi, Ji, _a);
  if (h) {
    const f = new P();
    Wt.getBarycoord(_a, Zi, Qi, Ji, f), i && (h.uv = Wt.getInterpolatedAttribute(i, o, l, c, f, new Oe())), r && (h.uv1 = Wt.getInterpolatedAttribute(r, o, l, c, f, new Oe())), a && (h.normal = Wt.getInterpolatedAttribute(a, o, l, c, f, new P()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a: o,
      b: l,
      c,
      normal: new P(),
      materialIndex: 0
    };
    Wt.getNormal(Zi, Qi, Ji, u.normal), h.face = u, h.barycoord = f;
  }
  return h;
}
class Ui extends Bt {
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
    const l = [], c = [], h = [], f = [];
    let u = 0, d = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Xt(c, 3)), this.setAttribute("normal", new Xt(h, 3)), this.setAttribute("uv", new Xt(f, 2));
    function g(_, p, m, S, b, x, A, y, w, D, X) {
      const v = x / w, T = A / D, k = x / 2, G = A / 2, B = y / 2, $ = w + 1, z = D + 1;
      let J = 0, V = 0;
      const he = new P();
      for (let ue = 0; ue < z; ue++) {
        const oe = ue * T - G;
        for (let We = 0; We < $; We++) {
          const Ye = We * v - k;
          he[_] = Ye * S, he[p] = oe * b, he[m] = B, c.push(he.x, he.y, he.z), he[_] = 0, he[p] = 0, he[m] = y > 0 ? 1 : -1, h.push(he.x, he.y, he.z), f.push(We / w), f.push(1 - ue / D), J += 1;
        }
      }
      for (let ue = 0; ue < D; ue++)
        for (let oe = 0; oe < w; oe++) {
          const We = u + oe + $ * ue, Ye = u + oe + $ * (ue + 1), j = u + (oe + 1) + $ * (ue + 1), Q = u + (oe + 1) + $ * ue;
          l.push(We, Ye, Q), l.push(Ye, j, Q), V += 6;
        }
      o.addGroup(d, V, X), d += V, u += J;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ui(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ri(s) {
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
function At(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = ri(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function sc(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function Fo(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : qe.workingColorSpace;
}
const Ur = { clone: ri, merge: At };
var rc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ac = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ft extends $t {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = rc, this.fragmentShader = ac, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ri(e.uniforms), this.uniformsGroups = sc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class Uo extends it {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Re(), this.projectionMatrix = new Re(), this.projectionMatrixInverse = new Re(), this.coordinateSystem = 2e3;
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
const yn = /* @__PURE__ */ new P(), va = /* @__PURE__ */ new Oe(), ba = /* @__PURE__ */ new Oe();
class Ct extends Uo {
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
    this.fov = si * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Ri * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return si * 2 * Math.atan(
      Math.tan(Ri * 0.5 * this.fov) / this.zoom
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
    yn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(yn.x, yn.y).multiplyScalar(-e / yn.z), yn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(yn.x, yn.y).multiplyScalar(-e / yn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, va, ba), t.subVectors(ba, va);
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
    let t = e * Math.tan(Ri * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
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
const Zn = -90, Qn = 1;
class oc extends it {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Ct(Zn, Qn, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Ct(Zn, Qn, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Ct(Zn, Qn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ct(Zn, Qn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Ct(Zn, Qn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Ct(Zn, Qn, e, t);
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
    const [r, a, o, l, c, h] = this.children, f = e.getRenderTarget(), u = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(f, u, d), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class No extends dt {
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
class lc extends gn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new No(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
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
    }, i = new Ui(5, 5, 5), r = new Ft({
      name: "CubemapFromEquirect",
      uniforms: ri(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const a = new vt(i, r), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new oc(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const er = /* @__PURE__ */ new P(), cc = /* @__PURE__ */ new P(), hc = /* @__PURE__ */ new ze();
class Un {
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
    const i = er.subVectors(n, t).cross(cc.subVectors(e, t)).normalize();
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
    const n = e.delta(er), i = this.normal.dot(n);
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
    const n = t || hc.getNormalMatrix(e), i = this.coplanarPoint(er).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
const Pn = /* @__PURE__ */ new Qt(), is = /* @__PURE__ */ new P();
class Nr {
  constructor(e = new Un(), t = new Un(), n = new Un(), i = new Un(), r = new Un(), a = new Un()) {
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
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], f = i[6], u = i[7], d = i[8], g = i[9], _ = i[10], p = i[11], m = i[12], S = i[13], b = i[14], x = i[15];
    if (n[0].setComponents(l - r, u - c, p - d, x - m).normalize(), n[1].setComponents(l + r, u + c, p + d, x + m).normalize(), n[2].setComponents(l + a, u + h, p + g, x + S).normalize(), n[3].setComponents(l - a, u - h, p - g, x - S).normalize(), n[4].setComponents(l - o, u - f, p - _, x - b).normalize(), t === 2e3)
      n[5].setComponents(l + o, u + f, p + _, x + b).normalize();
    else if (t === 2001)
      n[5].setComponents(o, f, _, b).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Pn);
  }
  intersectsSprite(e) {
    return Pn.center.set(0, 0, 0), Pn.radius = 0.7071067811865476, Pn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Pn);
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
      if (is.x = i.normal.x > 0 ? e.max.x : e.min.x, is.y = i.normal.y > 0 ? e.max.y : e.min.y, is.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(is) < 0)
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
function ko() {
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
function uc(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, f = c.byteLength, u = s.createBuffer();
    s.bindBuffer(l, u), s.bufferData(l, c, h), o.onUploadCallback();
    let d;
    if (c instanceof Float32Array)
      d = s.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? d = s.HALF_FLOAT : d = s.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      d = s.SHORT;
    else if (c instanceof Uint32Array)
      d = s.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      d = s.INT;
    else if (c instanceof Int8Array)
      d = s.BYTE;
    else if (c instanceof Uint8Array)
      d = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      d = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: u,
      type: d,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: f
    };
  }
  function n(o, l, c) {
    const h = l.array, f = l.updateRanges;
    if (s.bindBuffer(c, o), f.length === 0)
      s.bufferSubData(c, 0, h);
    else {
      f.sort((d, g) => d.start - g.start);
      let u = 0;
      for (let d = 1; d < f.length; d++) {
        const g = f[u], _ = f[d];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          _.start + _.count - g.start
        ) : (++u, f[u] = _);
      }
      f.length = u + 1;
      for (let d = 0, g = f.length; d < g; d++) {
        const _ = f[d];
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
class ci extends Bt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, f = e / o, u = t / l, d = [], g = [], _ = [], p = [];
    for (let m = 0; m < h; m++) {
      const S = m * u - a;
      for (let b = 0; b < c; b++) {
        const x = b * f - r;
        g.push(x, -S, 0), _.push(0, 0, 1), p.push(b / o), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++)
      for (let S = 0; S < o; S++) {
        const b = S + c * m, x = S + c * (m + 1), A = S + 1 + c * (m + 1), y = S + 1 + c * m;
        d.push(b, x, y), d.push(x, A, y);
      }
    this.setIndex(d), this.setAttribute("position", new Xt(g, 3)), this.setAttribute("normal", new Xt(_, 3)), this.setAttribute("uv", new Xt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ci(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var fc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, dc = `#ifdef USE_ALPHAHASH
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
#endif`, pc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, mc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, gc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, _c = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vc = `#ifdef USE_AOMAP
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
#endif`, bc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, xc = `#ifdef USE_BATCHING
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
#endif`, Sc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Mc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, yc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ac = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Ec = `#ifdef USE_IRIDESCENCE
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
#endif`, Tc = `#ifdef USE_BUMPMAP
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
#endif`, wc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Cc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Rc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Pc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Dc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Lc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ic = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Fc = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Uc = `#define PI 3.141592653589793
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
} // validated`, Nc = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, kc = `vec3 transformedNormal = objectNormal;
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
#endif`, Bc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Oc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Gc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, zc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Hc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Vc = `
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
}`, Wc = `#ifdef USE_ENVMAP
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
#endif`, jc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Xc = `#ifdef USE_ENVMAP
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
#endif`, qc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Yc = `#ifdef USE_ENVMAP
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
#endif`, Kc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, $c = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Zc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Qc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Jc = `#ifdef USE_GRADIENTMAP
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
}`, eh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, th = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, nh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ih = `uniform bool receiveShadow;
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
#endif`, sh = `#ifdef USE_ENVMAP
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
#endif`, rh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ah = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, oh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, lh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ch = `PhysicalMaterial material;
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
#endif`, hh = `struct PhysicalMaterial {
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
}`, uh = `
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
#endif`, fh = `#if defined( RE_IndirectDiffuse )
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
#endif`, dh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ph = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, mh = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, gh = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _h = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, vh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, bh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Sh = `#if defined( USE_POINTS_UV )
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
#endif`, Mh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, yh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ah = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Eh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Th = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, wh = `#ifdef USE_MORPHTARGETS
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
#endif`, Ch = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Rh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Ph = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Dh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ih = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Fh = `#ifdef USE_NORMALMAP
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
#endif`, Uh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Nh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, kh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Bh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Oh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Gh = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, zh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Hh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Vh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Wh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, jh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Xh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, qh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Yh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Kh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, $h = `float getShadowMask() {
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
}`, Zh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Qh = `#ifdef USE_SKINNING
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
#endif`, Jh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, eu = `#ifdef USE_SKINNING
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
#endif`, tu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, nu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, iu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, su = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, ru = `#ifdef USE_TRANSMISSION
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
#endif`, au = `#ifdef USE_TRANSMISSION
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
#endif`, ou = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, lu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, cu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, hu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const uu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, fu = `uniform sampler2D t2D;
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
}`, du = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, pu = `#ifdef ENVMAP_TYPE_CUBE
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
}`, mu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, gu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, _u = `#include <common>
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
}`, vu = `#if DEPTH_PACKING == 3200
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
}`, bu = `#define DISTANCE
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
}`, xu = `#define DISTANCE
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
}`, Su = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Mu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yu = `uniform float scale;
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
}`, Au = `uniform vec3 diffuse;
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
}`, Eu = `#include <common>
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
}`, Tu = `uniform vec3 diffuse;
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
}`, wu = `#define LAMBERT
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
}`, Cu = `#define LAMBERT
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
}`, Ru = `#define MATCAP
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
}`, Pu = `#define MATCAP
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
}`, Du = `#define NORMAL
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
}`, Lu = `#define NORMAL
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
}`, Iu = `#define PHONG
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
}`, Fu = `#define PHONG
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
}`, Uu = `#define STANDARD
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
}`, Nu = `#define STANDARD
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
}`, ku = `#define TOON
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
}`, Bu = `#define TOON
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
}`, Ou = `uniform float size;
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
}`, Gu = `uniform vec3 diffuse;
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
}`, zu = `#include <common>
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
}`, Hu = `uniform vec3 color;
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
}`, Vu = `uniform float rotation;
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
}`, Wu = `uniform vec3 diffuse;
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
}`, Ge = {
  alphahash_fragment: fc,
  alphahash_pars_fragment: dc,
  alphamap_fragment: pc,
  alphamap_pars_fragment: mc,
  alphatest_fragment: gc,
  alphatest_pars_fragment: _c,
  aomap_fragment: vc,
  aomap_pars_fragment: bc,
  batching_pars_vertex: xc,
  batching_vertex: Sc,
  begin_vertex: Mc,
  beginnormal_vertex: yc,
  bsdfs: Ac,
  iridescence_fragment: Ec,
  bumpmap_pars_fragment: Tc,
  clipping_planes_fragment: wc,
  clipping_planes_pars_fragment: Cc,
  clipping_planes_pars_vertex: Rc,
  clipping_planes_vertex: Pc,
  color_fragment: Dc,
  color_pars_fragment: Lc,
  color_pars_vertex: Ic,
  color_vertex: Fc,
  common: Uc,
  cube_uv_reflection_fragment: Nc,
  defaultnormal_vertex: kc,
  displacementmap_pars_vertex: Bc,
  displacementmap_vertex: Oc,
  emissivemap_fragment: Gc,
  emissivemap_pars_fragment: zc,
  colorspace_fragment: Hc,
  colorspace_pars_fragment: Vc,
  envmap_fragment: Wc,
  envmap_common_pars_fragment: jc,
  envmap_pars_fragment: Xc,
  envmap_pars_vertex: qc,
  envmap_physical_pars_fragment: sh,
  envmap_vertex: Yc,
  fog_vertex: Kc,
  fog_pars_vertex: $c,
  fog_fragment: Zc,
  fog_pars_fragment: Qc,
  gradientmap_pars_fragment: Jc,
  lightmap_pars_fragment: eh,
  lights_lambert_fragment: th,
  lights_lambert_pars_fragment: nh,
  lights_pars_begin: ih,
  lights_toon_fragment: rh,
  lights_toon_pars_fragment: ah,
  lights_phong_fragment: oh,
  lights_phong_pars_fragment: lh,
  lights_physical_fragment: ch,
  lights_physical_pars_fragment: hh,
  lights_fragment_begin: uh,
  lights_fragment_maps: fh,
  lights_fragment_end: dh,
  logdepthbuf_fragment: ph,
  logdepthbuf_pars_fragment: mh,
  logdepthbuf_pars_vertex: gh,
  logdepthbuf_vertex: _h,
  map_fragment: vh,
  map_pars_fragment: bh,
  map_particle_fragment: xh,
  map_particle_pars_fragment: Sh,
  metalnessmap_fragment: Mh,
  metalnessmap_pars_fragment: yh,
  morphinstance_vertex: Ah,
  morphcolor_vertex: Eh,
  morphnormal_vertex: Th,
  morphtarget_pars_vertex: wh,
  morphtarget_vertex: Ch,
  normal_fragment_begin: Rh,
  normal_fragment_maps: Ph,
  normal_pars_fragment: Dh,
  normal_pars_vertex: Lh,
  normal_vertex: Ih,
  normalmap_pars_fragment: Fh,
  clearcoat_normal_fragment_begin: Uh,
  clearcoat_normal_fragment_maps: Nh,
  clearcoat_pars_fragment: kh,
  iridescence_pars_fragment: Bh,
  opaque_fragment: Oh,
  packing: Gh,
  premultiplied_alpha_fragment: zh,
  project_vertex: Hh,
  dithering_fragment: Vh,
  dithering_pars_fragment: Wh,
  roughnessmap_fragment: jh,
  roughnessmap_pars_fragment: Xh,
  shadowmap_pars_fragment: qh,
  shadowmap_pars_vertex: Yh,
  shadowmap_vertex: Kh,
  shadowmask_pars_fragment: $h,
  skinbase_vertex: Zh,
  skinning_pars_vertex: Qh,
  skinning_vertex: Jh,
  skinnormal_vertex: eu,
  specularmap_fragment: tu,
  specularmap_pars_fragment: nu,
  tonemapping_fragment: iu,
  tonemapping_pars_fragment: su,
  transmission_fragment: ru,
  transmission_pars_fragment: au,
  uv_pars_fragment: ou,
  uv_pars_vertex: lu,
  uv_vertex: cu,
  worldpos_vertex: hu,
  background_vert: uu,
  background_frag: fu,
  backgroundCube_vert: du,
  backgroundCube_frag: pu,
  cube_vert: mu,
  cube_frag: gu,
  depth_vert: _u,
  depth_frag: vu,
  distanceRGBA_vert: bu,
  distanceRGBA_frag: xu,
  equirect_vert: Su,
  equirect_frag: Mu,
  linedashed_vert: yu,
  linedashed_frag: Au,
  meshbasic_vert: Eu,
  meshbasic_frag: Tu,
  meshlambert_vert: wu,
  meshlambert_frag: Cu,
  meshmatcap_vert: Ru,
  meshmatcap_frag: Pu,
  meshnormal_vert: Du,
  meshnormal_frag: Lu,
  meshphong_vert: Iu,
  meshphong_frag: Fu,
  meshphysical_vert: Uu,
  meshphysical_frag: Nu,
  meshtoon_vert: ku,
  meshtoon_frag: Bu,
  points_vert: Ou,
  points_frag: Gu,
  shadow_vert: zu,
  shadow_frag: Hu,
  sprite_vert: Vu,
  sprite_frag: Wu
}, se = {
  common: {
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new ze() },
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
    aoMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new ze() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new ze() },
    normalScale: { value: /* @__PURE__ */ new Oe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new ze() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new re(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new ze() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Oe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  }
}, Kt = {
  basic: {
    uniforms: /* @__PURE__ */ At([
      se.common,
      se.specularmap,
      se.envmap,
      se.aomap,
      se.lightmap,
      se.fog
    ]),
    vertexShader: Ge.meshbasic_vert,
    fragmentShader: Ge.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ At([
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
        emissive: { value: /* @__PURE__ */ new re(0) }
      }
    ]),
    vertexShader: Ge.meshlambert_vert,
    fragmentShader: Ge.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ At([
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
        emissive: { value: /* @__PURE__ */ new re(0) },
        specular: { value: /* @__PURE__ */ new re(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ge.meshphong_vert,
    fragmentShader: Ge.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ At([
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
        emissive: { value: /* @__PURE__ */ new re(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ge.meshphysical_vert,
    fragmentShader: Ge.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ At([
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
        emissive: { value: /* @__PURE__ */ new re(0) }
      }
    ]),
    vertexShader: Ge.meshtoon_vert,
    fragmentShader: Ge.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ At([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      se.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ge.meshmatcap_vert,
    fragmentShader: Ge.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ At([
      se.points,
      se.fog
    ]),
    vertexShader: Ge.points_vert,
    fragmentShader: Ge.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ At([
      se.common,
      se.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ge.linedashed_vert,
    fragmentShader: Ge.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ At([
      se.common,
      se.displacementmap
    ]),
    vertexShader: Ge.depth_vert,
    fragmentShader: Ge.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ At([
      se.common,
      se.bumpmap,
      se.normalmap,
      se.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.meshnormal_vert,
    fragmentShader: Ge.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ At([
      se.sprite,
      se.fog
    ]),
    vertexShader: Ge.sprite_vert,
    fragmentShader: Ge.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new ze() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ge.background_vert,
    fragmentShader: Ge.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new ze() }
    },
    vertexShader: Ge.backgroundCube_vert,
    fragmentShader: Ge.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ge.cube_vert,
    fragmentShader: Ge.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ge.equirect_vert,
    fragmentShader: Ge.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ At([
      se.common,
      se.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ge.distanceRGBA_vert,
    fragmentShader: Ge.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ At([
      se.lights,
      se.fog,
      {
        color: { value: /* @__PURE__ */ new re(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ge.shadow_vert,
    fragmentShader: Ge.shadow_frag
  }
};
Kt.physical = {
  uniforms: /* @__PURE__ */ At([
    Kt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Oe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new ze() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new re(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new ze() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new ze() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Oe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new re(0) },
      specularColor: { value: /* @__PURE__ */ new re(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new ze() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new ze() },
      anisotropyVector: { value: /* @__PURE__ */ new Oe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new ze() }
    }
  ]),
  vertexShader: Ge.meshphysical_vert,
  fragmentShader: Ge.meshphysical_frag
};
const ss = { r: 0, b: 0, g: 0 }, Dn = /* @__PURE__ */ new qt(), ju = /* @__PURE__ */ new Re();
function Xu(s, e, t, n, i, r, a) {
  const o = new re(0);
  let l = r === !0 ? 0 : 1, c, h, f = null, u = 0, d = null;
  function g(S) {
    let b = S.isScene === !0 ? S.background : null;
    return b && b.isTexture && (b = (S.backgroundBlurriness > 0 ? t : e).get(b)), b;
  }
  function _(S) {
    let b = !1;
    const x = g(S);
    x === null ? m(o, l) : x && x.isColor && (m(x, 1), b = !0);
    const A = s.xr.getEnvironmentBlendMode();
    A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || b) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function p(S, b) {
    const x = g(b);
    x && (x.isCubeTexture || x.mapping === 306) ? (h === void 0 && (h = new vt(
      new Ui(1, 1, 1),
      new Ft({
        name: "BackgroundCubeMaterial",
        uniforms: ri(Kt.backgroundCube.uniforms),
        vertexShader: Kt.backgroundCube.vertexShader,
        fragmentShader: Kt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(A, y, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), Dn.copy(b.backgroundRotation), Dn.x *= -1, Dn.y *= -1, Dn.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === !1 && (Dn.y *= -1, Dn.z *= -1), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(ju.makeRotationFromEuler(Dn)), h.material.toneMapped = qe.getTransfer(x.colorSpace) !== rt, (f !== x || u !== x.version || d !== s.toneMapping) && (h.material.needsUpdate = !0, f = x, u = x.version, d = s.toneMapping), h.layers.enableAll(), S.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (c === void 0 && (c = new vt(
      new ci(2, 2),
      new Ft({
        name: "BackgroundMaterial",
        uniforms: ri(Kt.background.uniforms),
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
    }), i.update(c)), c.material.uniforms.t2D.value = x, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.toneMapped = qe.getTransfer(x.colorSpace) !== rt, x.matrixAutoUpdate === !0 && x.updateMatrix(), c.material.uniforms.uvTransform.value.copy(x.matrix), (f !== x || u !== x.version || d !== s.toneMapping) && (c.material.needsUpdate = !0, f = x, u = x.version, d = s.toneMapping), c.layers.enableAll(), S.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(S, b) {
    S.getRGB(ss, Fo(s)), n.buffers.color.setClear(ss.r, ss.g, ss.b, b, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(S, b = 1) {
      o.set(S), l = b, m(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(S) {
      l = S, m(o, l);
    },
    render: _,
    addToRenderList: p
  };
}
function qu(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = u(null);
  let r = i, a = !1;
  function o(v, T, k, G, B) {
    let $ = !1;
    const z = f(G, k, T);
    r !== z && (r = z, c(r.object)), $ = d(v, G, k, B), $ && g(v, G, k, B), B !== null && e.update(B, s.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, x(v, T, k, G), B !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(B).buffer));
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
  function f(v, T, k) {
    const G = k.wireframe === !0;
    let B = n[v.id];
    B === void 0 && (B = {}, n[v.id] = B);
    let $ = B[T.id];
    $ === void 0 && ($ = {}, B[T.id] = $);
    let z = $[G];
    return z === void 0 && (z = u(l()), $[G] = z), z;
  }
  function u(v) {
    const T = [], k = [], G = [];
    for (let B = 0; B < t; B++)
      T[B] = 0, k[B] = 0, G[B] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: T,
      enabledAttributes: k,
      attributeDivisors: G,
      object: v,
      attributes: {},
      index: null
    };
  }
  function d(v, T, k, G) {
    const B = r.attributes, $ = T.attributes;
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
  function g(v, T, k, G) {
    const B = {}, $ = T.attributes;
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
    for (let T = 0, k = v.length; T < k; T++)
      v[T] = 0;
  }
  function p(v) {
    m(v, 0);
  }
  function m(v, T) {
    const k = r.newAttributes, G = r.enabledAttributes, B = r.attributeDivisors;
    k[v] = 1, G[v] === 0 && (s.enableVertexAttribArray(v), G[v] = 1), B[v] !== T && (s.vertexAttribDivisor(v, T), B[v] = T);
  }
  function S() {
    const v = r.newAttributes, T = r.enabledAttributes;
    for (let k = 0, G = T.length; k < G; k++)
      T[k] !== v[k] && (s.disableVertexAttribArray(k), T[k] = 0);
  }
  function b(v, T, k, G, B, $, z) {
    z === !0 ? s.vertexAttribIPointer(v, T, k, B, $) : s.vertexAttribPointer(v, T, k, G, B, $);
  }
  function x(v, T, k, G) {
    _();
    const B = G.attributes, $ = k.getAttributes(), z = T.defaultAttributeValues;
    for (const J in $) {
      const V = $[J];
      if (V.location >= 0) {
        let he = B[J];
        if (he === void 0 && (J === "instanceMatrix" && v.instanceMatrix && (he = v.instanceMatrix), J === "instanceColor" && v.instanceColor && (he = v.instanceColor)), he !== void 0) {
          const ue = he.normalized, oe = he.itemSize, We = e.get(he);
          if (We === void 0) continue;
          const Ye = We.buffer, j = We.type, Q = We.bytesPerElement, _e = j === s.INT || j === s.UNSIGNED_INT || he.gpuType === 1013;
          if (he.isInterleavedBufferAttribute) {
            const fe = he.data, Ie = fe.stride, Pe = he.offset;
            if (fe.isInstancedInterleavedBuffer) {
              for (let Z = 0; Z < V.locationSize; Z++)
                m(V.location + Z, fe.meshPerAttribute);
              v.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = fe.meshPerAttribute * fe.count);
            } else
              for (let Z = 0; Z < V.locationSize; Z++)
                p(V.location + Z);
            s.bindBuffer(s.ARRAY_BUFFER, Ye);
            for (let Z = 0; Z < V.locationSize; Z++)
              b(
                V.location + Z,
                oe / V.locationSize,
                j,
                ue,
                Ie * Q,
                (Pe + oe / V.locationSize * Z) * Q,
                _e
              );
          } else {
            if (he.isInstancedBufferAttribute) {
              for (let fe = 0; fe < V.locationSize; fe++)
                m(V.location + fe, he.meshPerAttribute);
              v.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = he.meshPerAttribute * he.count);
            } else
              for (let fe = 0; fe < V.locationSize; fe++)
                p(V.location + fe);
            s.bindBuffer(s.ARRAY_BUFFER, Ye);
            for (let fe = 0; fe < V.locationSize; fe++)
              b(
                V.location + fe,
                oe / V.locationSize,
                j,
                ue,
                oe * Q,
                oe / V.locationSize * fe * Q,
                _e
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
  function A() {
    D();
    for (const v in n) {
      const T = n[v];
      for (const k in T) {
        const G = T[k];
        for (const B in G)
          h(G[B].object), delete G[B];
        delete T[k];
      }
      delete n[v];
    }
  }
  function y(v) {
    if (n[v.id] === void 0) return;
    const T = n[v.id];
    for (const k in T) {
      const G = T[k];
      for (const B in G)
        h(G[B].object), delete G[B];
      delete T[k];
    }
    delete n[v.id];
  }
  function w(v) {
    for (const T in n) {
      const k = n[T];
      if (k[v.id] === void 0) continue;
      const G = k[v.id];
      for (const B in G)
        h(G[B].object), delete G[B];
      delete k[v.id];
    }
  }
  function D() {
    X(), a = !0, r !== i && (r = i, c(r.object));
  }
  function X() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: D,
    resetDefaultState: X,
    dispose: A,
    releaseStatesOfGeometry: y,
    releaseStatesOfProgram: w,
    initAttributes: _,
    enableAttribute: p,
    disableUnusedAttributes: S
  };
}
function Yu(s, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, f) {
    f !== 0 && (s.drawArraysInstanced(n, c, h, f), t.update(h, n, f));
  }
  function o(c, h, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, f);
    let d = 0;
    for (let g = 0; g < f; g++)
      d += h[g];
    t.update(d, n, 1);
  }
  function l(c, h, f, u) {
    if (f === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], h[g], u[g]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, u, 0, f);
      let g = 0;
      for (let _ = 0; _ < f; _++)
        g += h[_];
      for (let _ = 0; _ < u.length; _++)
        t.update(g, n, u[_]);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Ku(s, e, t, n) {
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
    const D = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !D);
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
  const f = t.logarithmicDepthBuffer === !0, u = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (u === !0) {
    const w = e.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const d = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), p = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), m = s.getParameter(s.MAX_VERTEX_ATTRIBS), S = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), b = s.getParameter(s.MAX_VARYING_VECTORS), x = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), A = g > 0, y = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: f,
    reverseDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: p,
    maxAttributes: m,
    maxVertexUniforms: S,
    maxVaryings: b,
    maxFragmentUniforms: x,
    vertexTextures: A,
    maxSamples: y
  };
}
function $u(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const a = new Un(), o = new ze(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, u) {
    const d = f.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = u, n = f.length, d;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(f, u) {
    t = h(f, u, 0);
  }, this.setState = function(f, u, d) {
    const g = f.clippingPlanes, _ = f.clipIntersection, p = f.clipShadows, m = s.get(f);
    if (!i || g === null || g.length === 0 || r && !p)
      r ? h(null) : c();
    else {
      const S = r ? 0 : n, b = S * 4;
      let x = m.clippingState || null;
      l.value = x, x = h(g, u, b, d);
      for (let A = 0; A !== b; ++A)
        x[A] = t[A];
      m.clippingState = x, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(f, u, d, g) {
    const _ = f !== null ? f.length : 0;
    let p = null;
    if (_ !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const m = d + _ * 4, S = u.matrixWorldInverse;
        o.getNormalMatrix(S), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let b = 0, x = d; b !== _; ++b, x += 4)
          a.copy(f[b]).applyMatrix4(S, o), a.normal.toArray(p, x), p[x + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, p;
  }
}
function Zu(s) {
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
            const c = new lc(l.height);
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
class Ni extends Uo {
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
const ti = 4, xa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], kn = 20, tr = /* @__PURE__ */ new Ni(), Sa = /* @__PURE__ */ new re();
let nr = null, ir = 0, sr = 0, rr = !1;
const Nn = (1 + Math.sqrt(5)) / 2, Jn = 1 / Nn, Ma = [
  /* @__PURE__ */ new P(-Nn, Jn, 0),
  /* @__PURE__ */ new P(Nn, Jn, 0),
  /* @__PURE__ */ new P(-Jn, 0, Nn),
  /* @__PURE__ */ new P(Jn, 0, Nn),
  /* @__PURE__ */ new P(0, Nn, -Jn),
  /* @__PURE__ */ new P(0, Nn, Jn),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, 1)
];
class Sr {
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
    nr = this._renderer.getRenderTarget(), ir = this._renderer.getActiveCubeFace(), sr = this._renderer.getActiveMipmapLevel(), rr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Ea(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Aa(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(nr, ir, sr), this._renderer.xr.enabled = rr, e.scissorTest = !1, rs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), nr = this._renderer.getRenderTarget(), ir = this._renderer.getActiveCubeFace(), sr = this._renderer.getActiveMipmapLevel(), rr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
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
    }, i = ya(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ya(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Qu(r)), this._blurMaterial = Ju(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new vt(this._lodPlanes[0], e);
    this._renderer.compile(t, tr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Ct(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, u = h.toneMapping;
    h.getClearColor(Sa), h.toneMapping = 0, h.autoClear = !1;
    const d = new Bn({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new vt(new Ui(), d);
    let _ = !1;
    const p = e.background;
    p ? p.isColor && (d.color.copy(p), e.background = null, _ = !0) : (d.color.copy(Sa), _ = !0);
    for (let m = 0; m < 6; m++) {
      const S = m % 3;
      S === 0 ? (o.up.set(0, l[m], 0), o.lookAt(c[m], 0, 0)) : S === 1 ? (o.up.set(0, 0, l[m]), o.lookAt(0, c[m], 0)) : (o.up.set(0, l[m], 0), o.lookAt(0, 0, c[m]));
      const b = this._cubeSize;
      rs(i, S * b, m > 2 ? b : 0, b, b), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = u, h.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ea()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Aa());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new vt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    rs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, tr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Ma[(i - r - 1) % Ma.length];
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
    const h = 3, f = new vt(this._lodPlanes[i], c), u = c.uniforms, d = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * kn - 1), _ = r / g, p = isFinite(r) ? 1 + Math.floor(h * _) : kn;
    p > kn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);
    const m = [];
    let S = 0;
    for (let w = 0; w < kn; ++w) {
      const D = w / _, X = Math.exp(-D * D / 2);
      m.push(X), w === 0 ? S += X : w < p && (S += 2 * X);
    }
    for (let w = 0; w < m.length; w++)
      m[w] = m[w] / S;
    u.envMap.value = e.texture, u.samples.value = p, u.weights.value = m, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: b } = this;
    u.dTheta.value = g, u.mipInt.value = b - n;
    const x = this._sizeLods[i], A = 3 * x * (i > b - ti ? i - b + ti : 0), y = 4 * (this._cubeSize - x);
    rs(t, A, y, 3 * x, 2 * x), l.setRenderTarget(t), l.render(f, tr);
  }
}
function Qu(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - ti + 1 + xa.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s - ti ? l = xa[a - s + ti - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, f = 1 + c, u = [h, h, f, h, f, f, h, h, f, f, h, f], d = 6, g = 6, _ = 3, p = 2, m = 1, S = new Float32Array(_ * g * d), b = new Float32Array(p * g * d), x = new Float32Array(m * g * d);
    for (let y = 0; y < d; y++) {
      const w = y % 3 * 2 / 3 - 1, D = y > 2 ? 0 : -1, X = [
        w,
        D,
        0,
        w + 2 / 3,
        D,
        0,
        w + 2 / 3,
        D + 1,
        0,
        w,
        D,
        0,
        w + 2 / 3,
        D + 1,
        0,
        w,
        D + 1,
        0
      ];
      S.set(X, _ * g * y), b.set(u, p * g * y);
      const v = [y, y, y, y, y, y];
      x.set(v, m * g * y);
    }
    const A = new Bt();
    A.setAttribute("position", new Mt(S, _)), A.setAttribute("uv", new Mt(b, p)), A.setAttribute("faceIndex", new Mt(x, m)), e.push(A), i > ti && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ya(s, e, t) {
  const n = new gn(s, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function rs(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Ju(s, e, t) {
  const n = new Float32Array(kn), i = new P(0, 1, 0);
  return new Ft({
    name: "SphericalGaussianBlur",
    defines: {
      n: kn,
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
    vertexShader: kr(),
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
function Aa() {
  return new Ft({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: kr(),
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
function Ea() {
  return new Ft({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: kr(),
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
function kr() {
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
function ef(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, h = l === 301 || l === 302;
      if (c || h) {
        let f = e.get(o);
        const u = f !== void 0 ? f.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== u)
          return t === null && (t = new Sr(s)), f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), f.texture;
        if (f !== void 0)
          return f.texture;
        {
          const d = o.image;
          return c && d && d.height > 0 || h && d && i(d) ? (t === null && (t = new Sr(s)), f = c ? t.fromEquirectangular(o) : t.fromCubemap(o), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), o.addEventListener("dispose", r), f.texture) : null;
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
function tf(s) {
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
      return i === null && gs("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function nf(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const u = f.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes)
      e.remove(u.attributes[g]);
    for (const g in u.morphAttributes) {
      const _ = u.morphAttributes[g];
      for (let p = 0, m = _.length; p < m; p++)
        e.remove(_[p]);
    }
    u.removeEventListener("dispose", a), delete i[u.id];
    const d = r.get(u);
    d && (e.remove(d), r.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(f, u) {
    return i[u.id] === !0 || (u.addEventListener("dispose", a), i[u.id] = !0, t.memory.geometries++), u;
  }
  function l(f) {
    const u = f.attributes;
    for (const g in u)
      e.update(u[g], s.ARRAY_BUFFER);
    const d = f.morphAttributes;
    for (const g in d) {
      const _ = d[g];
      for (let p = 0, m = _.length; p < m; p++)
        e.update(_[p], s.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const u = [], d = f.index, g = f.attributes.position;
    let _ = 0;
    if (d !== null) {
      const S = d.array;
      _ = d.version;
      for (let b = 0, x = S.length; b < x; b += 3) {
        const A = S[b + 0], y = S[b + 1], w = S[b + 2];
        u.push(A, y, y, w, w, A);
      }
    } else if (g !== void 0) {
      const S = g.array;
      _ = g.version;
      for (let b = 0, x = S.length / 3 - 1; b < x; b += 3) {
        const A = b + 0, y = b + 1, w = b + 2;
        u.push(A, y, y, w, w, A);
      }
    } else
      return;
    const p = new (wo(u) ? Io : Lo)(u, 1);
    p.version = _;
    const m = r.get(f);
    m && e.remove(m), r.set(f, p);
  }
  function h(f) {
    const u = r.get(f);
    if (u) {
      const d = f.index;
      d !== null && u.version < d.version && c(f);
    } else
      c(f);
    return r.get(f);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function sf(s, e, t) {
  let n;
  function i(u) {
    n = u;
  }
  let r, a;
  function o(u) {
    r = u.type, a = u.bytesPerElement;
  }
  function l(u, d) {
    s.drawElements(n, d, r, u * a), t.update(d, n, 1);
  }
  function c(u, d, g) {
    g !== 0 && (s.drawElementsInstanced(n, d, r, u * a, g), t.update(d, n, g));
  }
  function h(u, d, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, r, u, 0, g);
    let p = 0;
    for (let m = 0; m < g; m++)
      p += d[m];
    t.update(p, n, 1);
  }
  function f(u, d, g, _) {
    if (g === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let m = 0; m < u.length; m++)
        c(u[m] / a, d[m], _[m]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, d, 0, r, u, 0, _, 0, g);
      let m = 0;
      for (let S = 0; S < g; S++)
        m += d[S];
      for (let S = 0; S < _.length; S++)
        t.update(m, n, _[S]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = f;
}
function rf(s) {
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
function af(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ve();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== f) {
      let X = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", X);
      };
      u !== void 0 && u.texture.dispose();
      const d = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], m = o.morphAttributes.normal || [], S = o.morphAttributes.color || [];
      let b = 0;
      d === !0 && (b = 1), g === !0 && (b = 2), _ === !0 && (b = 3);
      let x = o.attributes.position.count * b, A = 1;
      x > e.maxTextureSize && (A = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
      const y = new Float32Array(x * A * 4 * f), w = new Ro(y, x, A, f);
      w.type = 1015, w.needsUpdate = !0;
      const D = b * 4;
      for (let v = 0; v < f; v++) {
        const T = p[v], k = m[v], G = S[v], B = x * A * 4 * v;
        for (let $ = 0; $ < T.count; $++) {
          const z = $ * D;
          d === !0 && (i.fromBufferAttribute(T, $), y[B + z + 0] = i.x, y[B + z + 1] = i.y, y[B + z + 2] = i.z, y[B + z + 3] = 0), g === !0 && (i.fromBufferAttribute(k, $), y[B + z + 4] = i.x, y[B + z + 5] = i.y, y[B + z + 6] = i.z, y[B + z + 7] = 0), _ === !0 && (i.fromBufferAttribute(G, $), y[B + z + 8] = i.x, y[B + z + 9] = i.y, y[B + z + 10] = i.z, y[B + z + 11] = G.itemSize === 4 ? i.w : 1);
        }
      }
      u = {
        count: f,
        texture: w,
        size: new Oe(x, A)
      }, n.set(o, u), o.addEventListener("dispose", X);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let d = 0;
      for (let _ = 0; _ < c.length; _++)
        d += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", g), l.getUniforms().setValue(s, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s, "morphTargetsTexture", u.texture, t), l.getUniforms().setValue(s, "morphTargetsTextureSize", u.size);
  }
  return {
    update: r
  };
}
function of(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, f = e.get(l, h);
    if (i.get(f) !== c && (e.update(f), i.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const u = l.skeleton;
      i.get(u) !== c && (u.update(), i.set(u, c));
    }
    return f;
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
class Bo extends dt {
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
const Oo = /* @__PURE__ */ new dt(), Ta = /* @__PURE__ */ new Bo(1, 1), Go = /* @__PURE__ */ new Ro(), zo = /* @__PURE__ */ new ql(), Ho = /* @__PURE__ */ new No(), wa = [], Ca = [], Ra = new Float32Array(16), Pa = new Float32Array(9), Da = new Float32Array(4);
function hi(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = wa[i];
  if (r === void 0 && (r = new Float32Array(i), wa[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, s[a].toArray(r, o);
  }
  return r;
}
function pt(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t]) return !1;
  return !0;
}
function mt(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function Ts(s, e) {
  let t = Ca[e];
  t === void 0 && (t = new Int32Array(e), Ca[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function lf(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function cf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    s.uniform2fv(this.addr, e), mt(t, e);
  }
}
function hf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (pt(t, e)) return;
    s.uniform3fv(this.addr, e), mt(t, e);
  }
}
function uf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    s.uniform4fv(this.addr, e), mt(t, e);
  }
}
function ff(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    Da.set(n), s.uniformMatrix2fv(this.addr, !1, Da), mt(t, n);
  }
}
function df(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    Pa.set(n), s.uniformMatrix3fv(this.addr, !1, Pa), mt(t, n);
  }
}
function pf(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (pt(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), mt(t, e);
  } else {
    if (pt(t, n)) return;
    Ra.set(n), s.uniformMatrix4fv(this.addr, !1, Ra), mt(t, n);
  }
}
function mf(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function gf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    s.uniform2iv(this.addr, e), mt(t, e);
  }
}
function _f(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (pt(t, e)) return;
    s.uniform3iv(this.addr, e), mt(t, e);
  }
}
function vf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    s.uniform4iv(this.addr, e), mt(t, e);
  }
}
function bf(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function xf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (pt(t, e)) return;
    s.uniform2uiv(this.addr, e), mt(t, e);
  }
}
function Sf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (pt(t, e)) return;
    s.uniform3uiv(this.addr, e), mt(t, e);
  }
}
function Mf(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (pt(t, e)) return;
    s.uniform4uiv(this.addr, e), mt(t, e);
  }
}
function yf(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (Ta.compareFunction = 515, r = Ta) : r = Oo, t.setTexture2D(e || r, i);
}
function Af(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || zo, i);
}
function Ef(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Ho, i);
}
function Tf(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Go, i);
}
function wf(s) {
  switch (s) {
    case 5126:
      return lf;
    case 35664:
      return cf;
    case 35665:
      return hf;
    case 35666:
      return uf;
    case 35674:
      return ff;
    case 35675:
      return df;
    case 35676:
      return pf;
    case 5124:
    case 35670:
      return mf;
    case 35667:
    case 35671:
      return gf;
    case 35668:
    case 35672:
      return _f;
    case 35669:
    case 35673:
      return vf;
    case 5125:
      return bf;
    case 36294:
      return xf;
    case 36295:
      return Sf;
    case 36296:
      return Mf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return yf;
    case 35679:
    case 36299:
    case 36307:
      return Af;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ef;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Tf;
  }
}
function Cf(s, e) {
  s.uniform1fv(this.addr, e);
}
function Rf(s, e) {
  const t = hi(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Pf(s, e) {
  const t = hi(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Df(s, e) {
  const t = hi(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Lf(s, e) {
  const t = hi(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function If(s, e) {
  const t = hi(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Ff(s, e) {
  const t = hi(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Uf(s, e) {
  s.uniform1iv(this.addr, e);
}
function Nf(s, e) {
  s.uniform2iv(this.addr, e);
}
function kf(s, e) {
  s.uniform3iv(this.addr, e);
}
function Bf(s, e) {
  s.uniform4iv(this.addr, e);
}
function Of(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Gf(s, e) {
  s.uniform2uiv(this.addr, e);
}
function zf(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Hf(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Vf(s, e, t) {
  const n = this.cache, i = e.length, r = Ts(t, i);
  pt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Oo, r[a]);
}
function Wf(s, e, t) {
  const n = this.cache, i = e.length, r = Ts(t, i);
  pt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || zo, r[a]);
}
function jf(s, e, t) {
  const n = this.cache, i = e.length, r = Ts(t, i);
  pt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || Ho, r[a]);
}
function Xf(s, e, t) {
  const n = this.cache, i = e.length, r = Ts(t, i);
  pt(n, r) || (s.uniform1iv(this.addr, r), mt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || Go, r[a]);
}
function qf(s) {
  switch (s) {
    case 5126:
      return Cf;
    case 35664:
      return Rf;
    case 35665:
      return Pf;
    case 35666:
      return Df;
    case 35674:
      return Lf;
    case 35675:
      return If;
    case 35676:
      return Ff;
    case 5124:
    case 35670:
      return Uf;
    case 35667:
    case 35671:
      return Nf;
    case 35668:
    case 35672:
      return kf;
    case 35669:
    case 35673:
      return Bf;
    case 5125:
      return Of;
    case 36294:
      return Gf;
    case 36295:
      return zf;
    case 36296:
      return Hf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Vf;
    case 35679:
    case 36299:
    case 36307:
      return Wf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return jf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Xf;
  }
}
class Yf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = wf(t.type);
  }
}
class Kf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = qf(t.type);
  }
}
class $f {
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
const ar = /(\w+)(\])?(\[|\.)?/g;
function La(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function Zf(s, e, t) {
  const n = s.name, i = n.length;
  for (ar.lastIndex = 0; ; ) {
    const r = ar.exec(n), a = ar.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      La(t, c === void 0 ? new Yf(o, s, e) : new Kf(o, s, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && (f = new $f(o), La(t, f)), t = f;
    }
  }
}
class _s {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      Zf(r, a, this);
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
function Ia(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const Qf = 37297;
let Jf = 0;
function ed(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function td(s) {
  const e = qe.getPrimaries(qe.workingColorSpace), t = qe.getPrimaries(s);
  let n;
  switch (e === t ? n = "" : e === Ss && t === xs ? n = "LinearDisplayP3ToLinearSRGB" : e === xs && t === Ss && (n = "LinearSRGBToLinearDisplayP3"), s) {
    case ut:
    case As:
      return [n, "LinearTransferOETF"];
    case ft:
    case Ir:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"];
  }
}
function Fa(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + ed(s.getShaderSource(e), a);
  } else
    return i;
}
function nd(s, e) {
  const t = td(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function id(s, e) {
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
const as = /* @__PURE__ */ new P();
function sd() {
  qe.getLuminanceCoefficients(as);
  const s = as.x.toFixed(4), e = as.y.toFixed(4), t = as.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function rd(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ci).join(`
`);
}
function ad(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function od(s, e) {
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
function Ci(s) {
  return s !== "";
}
function Ua(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Na(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ld = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Mr(s) {
  return s.replace(ld, hd);
}
const cd = /* @__PURE__ */ new Map();
function hd(s, e) {
  let t = Ge[e];
  if (t === void 0) {
    const n = cd.get(e);
    if (n !== void 0)
      t = Ge[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Mr(t);
}
const ud = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ka(s) {
  return s.replace(ud, fd);
}
function fd(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Ba(s) {
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
function dd(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function pd(s) {
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
function md(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function gd(s) {
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
function _d(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function vd(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = dd(t), c = pd(t), h = md(t), f = gd(t), u = _d(t), d = rd(t), g = ad(r), _ = i.createProgram();
  let p, m, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Ci).join(`
`), p.length > 0 && (p += `
`), m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(Ci).join(`
`), m.length > 0 && (m += `
`)) : (p = [
    Ba(t),
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
  ].filter(Ci).join(`
`), m = [
    Ba(t),
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
    t.envMap ? "#define " + f : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
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
    t.toneMapping !== 0 ? Ge.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? id("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ge.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    nd("linearToOutputTexel", t.outputColorSpace),
    sd(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Ci).join(`
`)), a = Mr(a), a = Ua(a, t), a = Na(a, t), o = Mr(o), o = Ua(o, t), o = Na(o, t), a = ka(a), o = ka(o), t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, p = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, m = [
    "#define varying in",
    t.glslVersion === ta ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === ta ? "" : "#define gl_FragColor pc_fragColor",
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
` + m);
  const b = S + p + a, x = S + m + o, A = Ia(i, i.VERTEX_SHADER, b), y = Ia(i, i.FRAGMENT_SHADER, x);
  i.attachShader(_, A), i.attachShader(_, y), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function w(T) {
    if (s.debug.checkShaderErrors) {
      const k = i.getProgramInfoLog(_).trim(), G = i.getShaderInfoLog(A).trim(), B = i.getShaderInfoLog(y).trim();
      let $ = !0, z = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if ($ = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, _, A, y);
        else {
          const J = Fa(i, A, "vertex"), V = Fa(i, y, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + T.name + `
Material Type: ` + T.type + `

Program Info Log: ` + k + `
` + J + `
` + V
          );
        }
      else k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (G === "" || B === "") && (z = !1);
      z && (T.diagnostics = {
        runnable: $,
        programLog: k,
        vertexShader: {
          log: G,
          prefix: p
        },
        fragmentShader: {
          log: B,
          prefix: m
        }
      });
    }
    i.deleteShader(A), i.deleteShader(y), D = new _s(i, _), X = od(i, _);
  }
  let D;
  this.getUniforms = function() {
    return D === void 0 && w(this), D;
  };
  let X;
  this.getAttributes = function() {
    return X === void 0 && w(this), X;
  };
  let v = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return v === !1 && (v = i.getProgramParameter(_, Qf)), v;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Jf++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = A, this.fragmentShader = y, this;
}
let bd = 0;
class xd {
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
    return n === void 0 && (n = new Sd(e), t.set(e, n)), n;
  }
}
class Sd {
  constructor(e) {
    this.id = bd++, this.code = e, this.usedTimes = 0;
  }
}
function Md(s, e, t, n, i, r, a) {
  const o = new Po(), l = new xd(), c = /* @__PURE__ */ new Set(), h = [], f = i.logarithmicDepthBuffer, u = i.reverseDepthBuffer, d = i.vertexTextures;
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
  function p(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function m(v, T, k, G, B) {
    const $ = G.fog, z = B.geometry, J = v.isMeshStandardMaterial ? G.environment : null, V = (v.isMeshStandardMaterial ? t : e).get(v.envMap || J), he = V && V.mapping === 306 ? V.image.height : null, ue = _[v.type];
    v.precision !== null && (g = i.getMaxPrecision(v.precision), g !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", g, "instead."));
    const oe = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, We = oe !== void 0 ? oe.length : 0;
    let Ye = 0;
    z.morphAttributes.position !== void 0 && (Ye = 1), z.morphAttributes.normal !== void 0 && (Ye = 2), z.morphAttributes.color !== void 0 && (Ye = 3);
    let j, Q, _e, fe;
    if (ue) {
      const wt = Kt[ue];
      j = wt.vertexShader, Q = wt.fragmentShader;
    } else
      j = v.vertexShader, Q = v.fragmentShader, l.update(v), _e = l.getVertexShaderID(v), fe = l.getFragmentShaderID(v);
    const Ie = s.getRenderTarget(), Pe = B.isInstancedMesh === !0, Z = B.isBatchedMesh === !0, ee = !!v.map, ie = !!v.matcap, R = !!V, Me = !!v.aoMap, ve = !!v.lightMap, Ne = !!v.bumpMap, Ee = !!v.normalMap, ke = !!v.displacementMap, Ce = !!v.emissiveMap, C = !!v.metalnessMap, M = !!v.roughnessMap, F = v.anisotropy > 0, H = v.clearcoat > 0, Y = v.dispersion > 0, q = v.iridescence > 0, Ae = v.sheen > 0, ae = v.transmission > 0, ge = F && !!v.anisotropyMap, Ke = H && !!v.clearcoatMap, te = H && !!v.clearcoatNormalMap, be = H && !!v.clearcoatRoughnessMap, Fe = q && !!v.iridescenceMap, Ue = q && !!v.iridescenceThicknessMap, xe = Ae && !!v.sheenColorMap, je = Ae && !!v.sheenRoughnessMap, Be = !!v.specularMap, st = !!v.specularColorMap, L = !!v.specularIntensityMap, de = ae && !!v.transmissionMap, W = ae && !!v.thicknessMap, K = !!v.gradientMap, le = !!v.alphaMap, pe = v.alphaTest > 0, Xe = !!v.alphaHash, ct = !!v.extensions;
    let Tt = 0;
    v.toneMapped && (Ie === null || Ie.isXRRenderTarget === !0) && (Tt = s.toneMapping);
    const $e = {
      shaderID: ue,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: j,
      fragmentShader: Q,
      defines: v.defines,
      customVertexShaderID: _e,
      customFragmentShaderID: fe,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: g,
      batching: Z,
      batchingColor: Z && B._colorsTexture !== null,
      instancing: Pe,
      instancingColor: Pe && B.instanceColor !== null,
      instancingMorph: Pe && B.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: Ie === null ? s.outputColorSpace : Ie.isXRRenderTarget === !0 ? Ie.texture.colorSpace : ut,
      alphaToCoverage: !!v.alphaToCoverage,
      map: ee,
      matcap: ie,
      envMap: R,
      envMapMode: R && V.mapping,
      envMapCubeUVHeight: he,
      aoMap: Me,
      lightMap: ve,
      bumpMap: Ne,
      normalMap: Ee,
      displacementMap: d && ke,
      emissiveMap: Ce,
      normalMapObjectSpace: Ee && v.normalMapType === 1,
      normalMapTangentSpace: Ee && v.normalMapType === 0,
      metalnessMap: C,
      roughnessMap: M,
      anisotropy: F,
      anisotropyMap: ge,
      clearcoat: H,
      clearcoatMap: Ke,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: be,
      dispersion: Y,
      iridescence: q,
      iridescenceMap: Fe,
      iridescenceThicknessMap: Ue,
      sheen: Ae,
      sheenColorMap: xe,
      sheenRoughnessMap: je,
      specularMap: Be,
      specularColorMap: st,
      specularIntensityMap: L,
      transmission: ae,
      transmissionMap: de,
      thicknessMap: W,
      gradientMap: K,
      opaque: v.transparent === !1 && v.blending === 1 && v.alphaToCoverage === !1,
      alphaMap: le,
      alphaTest: pe,
      alphaHash: Xe,
      combine: v.combine,
      //
      mapUv: ee && p(v.map.channel),
      aoMapUv: Me && p(v.aoMap.channel),
      lightMapUv: ve && p(v.lightMap.channel),
      bumpMapUv: Ne && p(v.bumpMap.channel),
      normalMapUv: Ee && p(v.normalMap.channel),
      displacementMapUv: ke && p(v.displacementMap.channel),
      emissiveMapUv: Ce && p(v.emissiveMap.channel),
      metalnessMapUv: C && p(v.metalnessMap.channel),
      roughnessMapUv: M && p(v.roughnessMap.channel),
      anisotropyMapUv: ge && p(v.anisotropyMap.channel),
      clearcoatMapUv: Ke && p(v.clearcoatMap.channel),
      clearcoatNormalMapUv: te && p(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: be && p(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Fe && p(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ue && p(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: xe && p(v.sheenColorMap.channel),
      sheenRoughnessMapUv: je && p(v.sheenRoughnessMap.channel),
      specularMapUv: Be && p(v.specularMap.channel),
      specularColorMapUv: st && p(v.specularColorMap.channel),
      specularIntensityMapUv: L && p(v.specularIntensityMap.channel),
      transmissionMapUv: de && p(v.transmissionMap.channel),
      thicknessMapUv: W && p(v.thicknessMap.channel),
      alphaMapUv: le && p(v.alphaMap.channel),
      //
      vertexTangents: !!z.attributes.tangent && (Ee || F),
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!z.attributes.uv && (ee || le),
      fog: !!$,
      useFog: v.fog === !0,
      fogExp2: !!$ && $.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      reverseDepthBuffer: u,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: z.morphAttributes.position !== void 0,
      morphNormals: z.morphAttributes.normal !== void 0,
      morphColors: z.morphAttributes.color !== void 0,
      morphTargetsCount: We,
      morphTextureStride: Ye,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: s.shadowMap.enabled && k.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: Tt,
      decodeVideoTexture: ee && v.map.isVideoTexture === !0 && qe.getTransfer(v.map.colorSpace) === rt,
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
    const T = [];
    if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const k in v.defines)
        T.push(k), T.push(v.defines[k]);
    return v.isRawShaderMaterial === !1 && (b(T, v), x(T, v), T.push(s.outputColorSpace)), T.push(v.customProgramCacheKey), T.join();
  }
  function b(v, T) {
    v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapCubeUVHeight), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.morphAttributeCount), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking);
  }
  function x(v, T) {
    o.disableAll(), T.supportsVertexTextures && o.enable(0), T.instancing && o.enable(1), T.instancingColor && o.enable(2), T.instancingMorph && o.enable(3), T.matcap && o.enable(4), T.envMap && o.enable(5), T.normalMapObjectSpace && o.enable(6), T.normalMapTangentSpace && o.enable(7), T.clearcoat && o.enable(8), T.iridescence && o.enable(9), T.alphaTest && o.enable(10), T.vertexColors && o.enable(11), T.vertexAlphas && o.enable(12), T.vertexUv1s && o.enable(13), T.vertexUv2s && o.enable(14), T.vertexUv3s && o.enable(15), T.vertexTangents && o.enable(16), T.anisotropy && o.enable(17), T.alphaHash && o.enable(18), T.batching && o.enable(19), T.dispersion && o.enable(20), T.batchingColor && o.enable(21), v.push(o.mask), o.disableAll(), T.fog && o.enable(0), T.useFog && o.enable(1), T.flatShading && o.enable(2), T.logarithmicDepthBuffer && o.enable(3), T.reverseDepthBuffer && o.enable(4), T.skinning && o.enable(5), T.morphTargets && o.enable(6), T.morphNormals && o.enable(7), T.morphColors && o.enable(8), T.premultipliedAlpha && o.enable(9), T.shadowMapEnabled && o.enable(10), T.doubleSided && o.enable(11), T.flipSided && o.enable(12), T.useDepthPacking && o.enable(13), T.dithering && o.enable(14), T.transmission && o.enable(15), T.sheen && o.enable(16), T.opaque && o.enable(17), T.pointsUvs && o.enable(18), T.decodeVideoTexture && o.enable(19), T.alphaToCoverage && o.enable(20), v.push(o.mask);
  }
  function A(v) {
    const T = _[v.type];
    let k;
    if (T) {
      const G = Kt[T];
      k = Ur.clone(G.uniforms);
    } else
      k = v.uniforms;
    return k;
  }
  function y(v, T) {
    let k;
    for (let G = 0, B = h.length; G < B; G++) {
      const $ = h[G];
      if ($.cacheKey === T) {
        k = $, ++k.usedTimes;
        break;
      }
    }
    return k === void 0 && (k = new vd(s, T, v, r), h.push(k)), k;
  }
  function w(v) {
    if (--v.usedTimes === 0) {
      const T = h.indexOf(v);
      h[T] = h[h.length - 1], h.pop(), v.destroy();
    }
  }
  function D(v) {
    l.remove(v);
  }
  function X() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: S,
    getUniforms: A,
    acquireProgram: y,
    releaseProgram: w,
    releaseShaderCache: D,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: X
  };
}
function yd() {
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
function Ad(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Oa(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Ga() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(f, u, d, g, _, p) {
    let m = s[e];
    return m === void 0 ? (m = {
      id: f.id,
      object: f,
      geometry: u,
      material: d,
      groupOrder: g,
      renderOrder: f.renderOrder,
      z: _,
      group: p
    }, s[e] = m) : (m.id = f.id, m.object = f, m.geometry = u, m.material = d, m.groupOrder = g, m.renderOrder = f.renderOrder, m.z = _, m.group = p), e++, m;
  }
  function o(f, u, d, g, _, p) {
    const m = a(f, u, d, g, _, p);
    d.transmission > 0 ? n.push(m) : d.transparent === !0 ? i.push(m) : t.push(m);
  }
  function l(f, u, d, g, _, p) {
    const m = a(f, u, d, g, _, p);
    d.transmission > 0 ? n.unshift(m) : d.transparent === !0 ? i.unshift(m) : t.unshift(m);
  }
  function c(f, u) {
    t.length > 1 && t.sort(f || Ad), n.length > 1 && n.sort(u || Oa), i.length > 1 && i.sort(u || Oa);
  }
  function h() {
    for (let f = e, u = s.length; f < u; f++) {
      const d = s[f];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
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
function Ed() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new Ga(), s.set(n, [a])) : i >= r.length ? (a = new Ga(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Td() {
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
            color: new re()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new re(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new re(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new re(),
            groundColor: new re()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new re(),
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
function wd() {
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
            shadowMapSize: new Oe()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Oe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let Cd = 0;
function Rd(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function Pd(s) {
  const e = new Td(), t = wd(), n = {
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
  const i = new P(), r = new Re(), a = new Re();
  function o(c) {
    let h = 0, f = 0, u = 0;
    for (let X = 0; X < 9; X++) n.probe[X].set(0, 0, 0);
    let d = 0, g = 0, _ = 0, p = 0, m = 0, S = 0, b = 0, x = 0, A = 0, y = 0, w = 0;
    c.sort(Rd);
    for (let X = 0, v = c.length; X < v; X++) {
      const T = c[X], k = T.color, G = T.intensity, B = T.distance, $ = T.shadow && T.shadow.map ? T.shadow.map.texture : null;
      if (T.isAmbientLight)
        h += k.r * G, f += k.g * G, u += k.b * G;
      else if (T.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(T.sh.coefficients[z], G);
        w++;
      } else if (T.isDirectionalLight) {
        const z = e.get(T);
        if (z.color.copy(T.color).multiplyScalar(T.intensity), T.castShadow) {
          const J = T.shadow, V = t.get(T);
          V.shadowIntensity = J.intensity, V.shadowBias = J.bias, V.shadowNormalBias = J.normalBias, V.shadowRadius = J.radius, V.shadowMapSize = J.mapSize, n.directionalShadow[d] = V, n.directionalShadowMap[d] = $, n.directionalShadowMatrix[d] = T.shadow.matrix, S++;
        }
        n.directional[d] = z, d++;
      } else if (T.isSpotLight) {
        const z = e.get(T);
        z.position.setFromMatrixPosition(T.matrixWorld), z.color.copy(k).multiplyScalar(G), z.distance = B, z.coneCos = Math.cos(T.angle), z.penumbraCos = Math.cos(T.angle * (1 - T.penumbra)), z.decay = T.decay, n.spot[_] = z;
        const J = T.shadow;
        if (T.map && (n.spotLightMap[A] = T.map, A++, J.updateMatrices(T), T.castShadow && y++), n.spotLightMatrix[_] = J.matrix, T.castShadow) {
          const V = t.get(T);
          V.shadowIntensity = J.intensity, V.shadowBias = J.bias, V.shadowNormalBias = J.normalBias, V.shadowRadius = J.radius, V.shadowMapSize = J.mapSize, n.spotShadow[_] = V, n.spotShadowMap[_] = $, x++;
        }
        _++;
      } else if (T.isRectAreaLight) {
        const z = e.get(T);
        z.color.copy(k).multiplyScalar(G), z.halfWidth.set(T.width * 0.5, 0, 0), z.halfHeight.set(0, T.height * 0.5, 0), n.rectArea[p] = z, p++;
      } else if (T.isPointLight) {
        const z = e.get(T);
        if (z.color.copy(T.color).multiplyScalar(T.intensity), z.distance = T.distance, z.decay = T.decay, T.castShadow) {
          const J = T.shadow, V = t.get(T);
          V.shadowIntensity = J.intensity, V.shadowBias = J.bias, V.shadowNormalBias = J.normalBias, V.shadowRadius = J.radius, V.shadowMapSize = J.mapSize, V.shadowCameraNear = J.camera.near, V.shadowCameraFar = J.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = $, n.pointShadowMatrix[g] = T.shadow.matrix, b++;
        }
        n.point[g] = z, g++;
      } else if (T.isHemisphereLight) {
        const z = e.get(T);
        z.skyColor.copy(T.color).multiplyScalar(G), z.groundColor.copy(T.groundColor).multiplyScalar(G), n.hemi[m] = z, m++;
      }
    }
    p > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = se.LTC_FLOAT_1, n.rectAreaLTC2 = se.LTC_FLOAT_2) : (n.rectAreaLTC1 = se.LTC_HALF_1, n.rectAreaLTC2 = se.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = u;
    const D = n.hash;
    (D.directionalLength !== d || D.pointLength !== g || D.spotLength !== _ || D.rectAreaLength !== p || D.hemiLength !== m || D.numDirectionalShadows !== S || D.numPointShadows !== b || D.numSpotShadows !== x || D.numSpotMaps !== A || D.numLightProbes !== w) && (n.directional.length = d, n.spot.length = _, n.rectArea.length = p, n.point.length = g, n.hemi.length = m, n.directionalShadow.length = S, n.directionalShadowMap.length = S, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = x, n.spotShadowMap.length = x, n.directionalShadowMatrix.length = S, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = x + A - y, n.spotLightMap.length = A, n.numSpotLightShadowsWithMaps = y, n.numLightProbes = w, D.directionalLength = d, D.pointLength = g, D.spotLength = _, D.rectAreaLength = p, D.hemiLength = m, D.numDirectionalShadows = S, D.numPointShadows = b, D.numSpotShadows = x, D.numSpotMaps = A, D.numLightProbes = w, n.version = Cd++);
  }
  function l(c, h) {
    let f = 0, u = 0, d = 0, g = 0, _ = 0;
    const p = h.matrixWorldInverse;
    for (let m = 0, S = c.length; m < S; m++) {
      const b = c[m];
      if (b.isDirectionalLight) {
        const x = n.directional[f];
        x.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(p), f++;
      } else if (b.isSpotLight) {
        const x = n.spot[d];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(p), x.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(p), d++;
      } else if (b.isRectAreaLight) {
        const x = n.rectArea[g];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(p), a.identity(), r.copy(b.matrixWorld), r.premultiply(p), a.extractRotation(r), x.halfWidth.set(b.width * 0.5, 0, 0), x.halfHeight.set(0, b.height * 0.5, 0), x.halfWidth.applyMatrix4(a), x.halfHeight.applyMatrix4(a), g++;
      } else if (b.isPointLight) {
        const x = n.point[u];
        x.position.setFromMatrixPosition(b.matrixWorld), x.position.applyMatrix4(p), u++;
      } else if (b.isHemisphereLight) {
        const x = n.hemi[_];
        x.direction.setFromMatrixPosition(b.matrixWorld), x.direction.transformDirection(p), _++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function za(s) {
  const e = new Pd(s), t = [], n = [];
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
function Dd(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new za(s), e.set(i, [o])) : r >= a.length ? (o = new za(s), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Vo extends $t {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ld extends $t {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Id = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Fd = `uniform sampler2D shadow_pass;
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
function Ud(s, e, t) {
  let n = new Nr();
  const i = new Oe(), r = new Oe(), a = new Ve(), o = new Vo({ depthPacking: 3201 }), l = new Ld(), c = {}, h = t.maxTextureSize, f = { 0: 1, 1: 0, 2: 2 }, u = new Ft({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Oe() },
      radius: { value: 4 }
    },
    vertexShader: Id,
    fragmentShader: Fd
  }), d = u.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new Bt();
  g.setAttribute(
    "position",
    new Mt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new vt(g, u), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let m = this.type;
  this.render = function(y, w, D) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || y.length === 0) return;
    const X = s.getRenderTarget(), v = s.getActiveCubeFace(), T = s.getActiveMipmapLevel(), k = s.state;
    k.setBlending(0), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1);
    const G = m !== 3 && this.type === 3, B = m === 3 && this.type !== 3;
    for (let $ = 0, z = y.length; $ < z; $++) {
      const J = y[$], V = J.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      i.copy(V.mapSize);
      const he = V.getFrameExtents();
      if (i.multiply(he), r.copy(V.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / he.x), i.x = r.x * he.x, V.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / he.y), i.y = r.y * he.y, V.mapSize.y = r.y)), V.map === null || G === !0 || B === !0) {
        const oe = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        V.map !== null && V.map.dispose(), V.map = new gn(i.x, i.y, oe), V.map.texture.name = J.name + ".shadowMap", V.camera.updateProjectionMatrix();
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
        ), k.viewport(a), V.updateMatrices(J, oe), n = V.getFrustum(), x(w, D, V.camera, J, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === 3 && S(V, D), V.needsUpdate = !1;
    }
    m = this.type, p.needsUpdate = !1, s.setRenderTarget(X, v, T);
  };
  function S(y, w) {
    const D = e.update(_);
    u.defines.VSM_SAMPLES !== y.blurSamples && (u.defines.VSM_SAMPLES = y.blurSamples, d.defines.VSM_SAMPLES = y.blurSamples, u.needsUpdate = !0, d.needsUpdate = !0), y.mapPass === null && (y.mapPass = new gn(i.x, i.y)), u.uniforms.shadow_pass.value = y.map.texture, u.uniforms.resolution.value = y.mapSize, u.uniforms.radius.value = y.radius, s.setRenderTarget(y.mapPass), s.clear(), s.renderBufferDirect(w, null, D, u, _, null), d.uniforms.shadow_pass.value = y.mapPass.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, s.setRenderTarget(y.map), s.clear(), s.renderBufferDirect(w, null, D, d, _, null);
  }
  function b(y, w, D, X) {
    let v = null;
    const T = D.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (T !== void 0)
      v = T;
    else if (v = D.isPointLight === !0 ? l : o, s.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const k = v.uuid, G = w.uuid;
      let B = c[k];
      B === void 0 && (B = {}, c[k] = B);
      let $ = B[G];
      $ === void 0 && ($ = v.clone(), B[G] = $, w.addEventListener("dispose", A)), v = $;
    }
    if (v.visible = w.visible, v.wireframe = w.wireframe, X === 3 ? v.side = w.shadowSide !== null ? w.shadowSide : w.side : v.side = w.shadowSide !== null ? w.shadowSide : f[w.side], v.alphaMap = w.alphaMap, v.alphaTest = w.alphaTest, v.map = w.map, v.clipShadows = w.clipShadows, v.clippingPlanes = w.clippingPlanes, v.clipIntersection = w.clipIntersection, v.displacementMap = w.displacementMap, v.displacementScale = w.displacementScale, v.displacementBias = w.displacementBias, v.wireframeLinewidth = w.wireframeLinewidth, v.linewidth = w.linewidth, D.isPointLight === !0 && v.isMeshDistanceMaterial === !0) {
      const k = s.properties.get(v);
      k.light = D;
    }
    return v;
  }
  function x(y, w, D, X, v) {
    if (y.visible === !1) return;
    if (y.layers.test(w.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && v === 3) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, y.matrixWorld);
      const G = e.update(y), B = y.material;
      if (Array.isArray(B)) {
        const $ = G.groups;
        for (let z = 0, J = $.length; z < J; z++) {
          const V = $[z], he = B[V.materialIndex];
          if (he && he.visible) {
            const ue = b(y, he, X, v);
            y.onBeforeShadow(s, y, w, D, G, ue, V), s.renderBufferDirect(D, null, G, ue, y, V), y.onAfterShadow(s, y, w, D, G, ue, V);
          }
        }
      } else if (B.visible) {
        const $ = b(y, B, X, v);
        y.onBeforeShadow(s, y, w, D, G, $, null), s.renderBufferDirect(D, null, G, $, y, null), y.onAfterShadow(s, y, w, D, G, $, null);
      }
    }
    const k = y.children;
    for (let G = 0, B = k.length; G < B; G++)
      x(k[G], w, D, X, v);
  }
  function A(y) {
    y.target.removeEventListener("dispose", A);
    for (const D in c) {
      const X = c[D], v = y.target.uuid;
      v in X && (X[v].dispose(), delete X[v]);
    }
  }
}
const Nd = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function kd(s) {
  function e() {
    let L = !1;
    const de = new Ve();
    let W = null;
    const K = new Ve(0, 0, 0, 0);
    return {
      setMask: function(le) {
        W !== le && !L && (s.colorMask(le, le, le, le), W = le);
      },
      setLocked: function(le) {
        L = le;
      },
      setClear: function(le, pe, Xe, ct, Tt) {
        Tt === !0 && (le *= ct, pe *= ct, Xe *= ct), de.set(le, pe, Xe, ct), K.equals(de) === !1 && (s.clearColor(le, pe, Xe, ct), K.copy(de));
      },
      reset: function() {
        L = !1, W = null, K.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let L = !1, de = !1, W = null, K = null, le = null;
    return {
      setReversed: function(pe) {
        de = pe;
      },
      setTest: function(pe) {
        pe ? _e(s.DEPTH_TEST) : fe(s.DEPTH_TEST);
      },
      setMask: function(pe) {
        W !== pe && !L && (s.depthMask(pe), W = pe);
      },
      setFunc: function(pe) {
        if (de && (pe = Nd[pe]), K !== pe) {
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
        L = pe;
      },
      setClear: function(pe) {
        le !== pe && (s.clearDepth(pe), le = pe);
      },
      reset: function() {
        L = !1, W = null, K = null, le = null;
      }
    };
  }
  function n() {
    let L = !1, de = null, W = null, K = null, le = null, pe = null, Xe = null, ct = null, Tt = null;
    return {
      setTest: function($e) {
        L || ($e ? _e(s.STENCIL_TEST) : fe(s.STENCIL_TEST));
      },
      setMask: function($e) {
        de !== $e && !L && (s.stencilMask($e), de = $e);
      },
      setFunc: function($e, wt, tn) {
        (W !== $e || K !== wt || le !== tn) && (s.stencilFunc($e, wt, tn), W = $e, K = wt, le = tn);
      },
      setOp: function($e, wt, tn) {
        (pe !== $e || Xe !== wt || ct !== tn) && (s.stencilOp($e, wt, tn), pe = $e, Xe = wt, ct = tn);
      },
      setLocked: function($e) {
        L = $e;
      },
      setClear: function($e) {
        Tt !== $e && (s.clearStencil($e), Tt = $e);
      },
      reset: function() {
        L = !1, de = null, W = null, K = null, le = null, pe = null, Xe = null, ct = null, Tt = null;
      }
    };
  }
  const i = new e(), r = new t(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), u = [], d = null, g = !1, _ = null, p = null, m = null, S = null, b = null, x = null, A = null, y = new re(0, 0, 0), w = 0, D = !1, X = null, v = null, T = null, k = null, G = null;
  const B = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1, z = 0;
  const J = s.getParameter(s.VERSION);
  J.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL (\d)/.exec(J)[1]), $ = z >= 1) : J.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), $ = z >= 2);
  let V = null, he = {};
  const ue = s.getParameter(s.SCISSOR_BOX), oe = s.getParameter(s.VIEWPORT), We = new Ve().fromArray(ue), Ye = new Ve().fromArray(oe);
  function j(L, de, W, K) {
    const le = new Uint8Array(4), pe = s.createTexture();
    s.bindTexture(L, pe), s.texParameteri(L, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(L, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Xe = 0; Xe < W; Xe++)
      L === s.TEXTURE_3D || L === s.TEXTURE_2D_ARRAY ? s.texImage3D(de, 0, s.RGBA, 1, 1, K, 0, s.RGBA, s.UNSIGNED_BYTE, le) : s.texImage2D(de + Xe, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, le);
    return pe;
  }
  const Q = {};
  Q[s.TEXTURE_2D] = j(s.TEXTURE_2D, s.TEXTURE_2D, 1), Q[s.TEXTURE_CUBE_MAP] = j(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Q[s.TEXTURE_2D_ARRAY] = j(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), Q[s.TEXTURE_3D] = j(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), r.setClear(1), a.setClear(0), _e(s.DEPTH_TEST), r.setFunc(3), ve(!1), Ne(1), _e(s.CULL_FACE), R(0);
  function _e(L) {
    c[L] !== !0 && (s.enable(L), c[L] = !0);
  }
  function fe(L) {
    c[L] !== !1 && (s.disable(L), c[L] = !1);
  }
  function Ie(L, de) {
    return h[L] !== de ? (s.bindFramebuffer(L, de), h[L] = de, L === s.DRAW_FRAMEBUFFER && (h[s.FRAMEBUFFER] = de), L === s.FRAMEBUFFER && (h[s.DRAW_FRAMEBUFFER] = de), !0) : !1;
  }
  function Pe(L, de) {
    let W = u, K = !1;
    if (L) {
      W = f.get(de), W === void 0 && (W = [], f.set(de, W));
      const le = L.textures;
      if (W.length !== le.length || W[0] !== s.COLOR_ATTACHMENT0) {
        for (let pe = 0, Xe = le.length; pe < Xe; pe++)
          W[pe] = s.COLOR_ATTACHMENT0 + pe;
        W.length = le.length, K = !0;
      }
    } else
      W[0] !== s.BACK && (W[0] = s.BACK, K = !0);
    K && s.drawBuffers(W);
  }
  function Z(L) {
    return d !== L ? (s.useProgram(L), d = L, !0) : !1;
  }
  const ee = {
    100: s.FUNC_ADD,
    101: s.FUNC_SUBTRACT,
    102: s.FUNC_REVERSE_SUBTRACT
  };
  ee[103] = s.MIN, ee[104] = s.MAX;
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
  function R(L, de, W, K, le, pe, Xe, ct, Tt, $e) {
    if (L === 0) {
      g === !0 && (fe(s.BLEND), g = !1);
      return;
    }
    if (g === !1 && (_e(s.BLEND), g = !0), L !== 5) {
      if (L !== _ || $e !== D) {
        if ((p !== 100 || b !== 100) && (s.blendEquation(s.FUNC_ADD), p = 100, b = 100), $e)
          switch (L) {
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
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
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
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        m = null, S = null, x = null, A = null, y.set(0, 0, 0), w = 0, _ = L, D = $e;
      }
      return;
    }
    le = le || de, pe = pe || W, Xe = Xe || K, (de !== p || le !== b) && (s.blendEquationSeparate(ee[de], ee[le]), p = de, b = le), (W !== m || K !== S || pe !== x || Xe !== A) && (s.blendFuncSeparate(ie[W], ie[K], ie[pe], ie[Xe]), m = W, S = K, x = pe, A = Xe), (ct.equals(y) === !1 || Tt !== w) && (s.blendColor(ct.r, ct.g, ct.b, Tt), y.copy(ct), w = Tt), _ = L, D = !1;
  }
  function Me(L, de) {
    L.side === 2 ? fe(s.CULL_FACE) : _e(s.CULL_FACE);
    let W = L.side === 1;
    de && (W = !W), ve(W), L.blending === 1 && L.transparent === !1 ? R(0) : R(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), r.setFunc(L.depthFunc), r.setTest(L.depthTest), r.setMask(L.depthWrite), i.setMask(L.colorWrite);
    const K = L.stencilWrite;
    a.setTest(K), K && (a.setMask(L.stencilWriteMask), a.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), a.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), ke(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? _e(s.SAMPLE_ALPHA_TO_COVERAGE) : fe(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ve(L) {
    X !== L && (L ? s.frontFace(s.CW) : s.frontFace(s.CCW), X = L);
  }
  function Ne(L) {
    L !== 0 ? (_e(s.CULL_FACE), L !== v && (L === 1 ? s.cullFace(s.BACK) : L === 2 ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : fe(s.CULL_FACE), v = L;
  }
  function Ee(L) {
    L !== T && ($ && s.lineWidth(L), T = L);
  }
  function ke(L, de, W) {
    L ? (_e(s.POLYGON_OFFSET_FILL), (k !== de || G !== W) && (s.polygonOffset(de, W), k = de, G = W)) : fe(s.POLYGON_OFFSET_FILL);
  }
  function Ce(L) {
    L ? _e(s.SCISSOR_TEST) : fe(s.SCISSOR_TEST);
  }
  function C(L) {
    L === void 0 && (L = s.TEXTURE0 + B - 1), V !== L && (s.activeTexture(L), V = L);
  }
  function M(L, de, W) {
    W === void 0 && (V === null ? W = s.TEXTURE0 + B - 1 : W = V);
    let K = he[W];
    K === void 0 && (K = { type: void 0, texture: void 0 }, he[W] = K), (K.type !== L || K.texture !== de) && (V !== W && (s.activeTexture(W), V = W), s.bindTexture(L, de || Q[L]), K.type = L, K.texture = de);
  }
  function F() {
    const L = he[V];
    L !== void 0 && L.type !== void 0 && (s.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function H() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Y() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function q() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ae() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ae() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ge() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ke() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function te() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function be() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Fe() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ue(L) {
    We.equals(L) === !1 && (s.scissor(L.x, L.y, L.z, L.w), We.copy(L));
  }
  function xe(L) {
    Ye.equals(L) === !1 && (s.viewport(L.x, L.y, L.z, L.w), Ye.copy(L));
  }
  function je(L, de) {
    let W = l.get(de);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(de, W));
    let K = W.get(L);
    K === void 0 && (K = s.getUniformBlockIndex(de, L.name), W.set(L, K));
  }
  function Be(L, de) {
    const K = l.get(de).get(L);
    o.get(de) !== K && (s.uniformBlockBinding(de, K, L.__bindingPointIndex), o.set(de, K));
  }
  function st() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), c = {}, V = null, he = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), u = [], d = null, g = !1, _ = null, p = null, m = null, S = null, b = null, x = null, A = null, y = new re(0, 0, 0), w = 0, D = !1, X = null, v = null, T = null, k = null, G = null, We.set(0, 0, s.canvas.width, s.canvas.height), Ye.set(0, 0, s.canvas.width, s.canvas.height), i.reset(), r.reset(), a.reset();
  }
  return {
    buffers: {
      color: i,
      depth: r,
      stencil: a
    },
    enable: _e,
    disable: fe,
    bindFramebuffer: Ie,
    drawBuffers: Pe,
    useProgram: Z,
    setBlending: R,
    setMaterial: Me,
    setFlipSided: ve,
    setCullFace: Ne,
    setLineWidth: Ee,
    setPolygonOffset: ke,
    setScissorTest: Ce,
    activeTexture: C,
    bindTexture: M,
    unbindTexture: F,
    compressedTexImage2D: H,
    compressedTexImage3D: Y,
    texImage2D: be,
    texImage3D: Fe,
    updateUBOMapping: je,
    uniformBlockBinding: Be,
    texStorage2D: Ke,
    texStorage3D: te,
    texSubImage2D: q,
    texSubImage3D: Ae,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: ge,
    scissor: Ue,
    viewport: xe,
    reset: st
  };
}
function Ha(s, e, t, n) {
  const i = Bd(n);
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
function Bd(s) {
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
function Od(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Oe(), h = /* @__PURE__ */ new WeakMap();
  let f;
  const u = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(C, M) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(C, M)
    ) : Ii("canvas");
  }
  function _(C, M, F) {
    let H = 1;
    const Y = Ce(C);
    if ((Y.width > F || Y.height > F) && (H = F / Math.max(Y.width, Y.height)), H < 1)
      if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap || typeof VideoFrame < "u" && C instanceof VideoFrame) {
        const q = Math.floor(H * Y.width), Ae = Math.floor(H * Y.height);
        f === void 0 && (f = g(q, Ae));
        const ae = M ? g(q, Ae) : f;
        return ae.width = q, ae.height = Ae, ae.getContext("2d").drawImage(C, 0, 0, q, Ae), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + q + "x" + Ae + ")."), ae;
      } else
        return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), C;
    return C;
  }
  function p(C) {
    return C.generateMipmaps && C.minFilter !== 1003 && C.minFilter !== 1006;
  }
  function m(C) {
    s.generateMipmap(C);
  }
  function S(C, M, F, H, Y = !1) {
    if (C !== null) {
      if (s[C] !== void 0) return s[C];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
    }
    let q = M;
    if (M === s.RED && (F === s.FLOAT && (q = s.R32F), F === s.HALF_FLOAT && (q = s.R16F), F === s.UNSIGNED_BYTE && (q = s.R8)), M === s.RED_INTEGER && (F === s.UNSIGNED_BYTE && (q = s.R8UI), F === s.UNSIGNED_SHORT && (q = s.R16UI), F === s.UNSIGNED_INT && (q = s.R32UI), F === s.BYTE && (q = s.R8I), F === s.SHORT && (q = s.R16I), F === s.INT && (q = s.R32I)), M === s.RG && (F === s.FLOAT && (q = s.RG32F), F === s.HALF_FLOAT && (q = s.RG16F), F === s.UNSIGNED_BYTE && (q = s.RG8)), M === s.RG_INTEGER && (F === s.UNSIGNED_BYTE && (q = s.RG8UI), F === s.UNSIGNED_SHORT && (q = s.RG16UI), F === s.UNSIGNED_INT && (q = s.RG32UI), F === s.BYTE && (q = s.RG8I), F === s.SHORT && (q = s.RG16I), F === s.INT && (q = s.RG32I)), M === s.RGB_INTEGER && (F === s.UNSIGNED_BYTE && (q = s.RGB8UI), F === s.UNSIGNED_SHORT && (q = s.RGB16UI), F === s.UNSIGNED_INT && (q = s.RGB32UI), F === s.BYTE && (q = s.RGB8I), F === s.SHORT && (q = s.RGB16I), F === s.INT && (q = s.RGB32I)), M === s.RGBA_INTEGER && (F === s.UNSIGNED_BYTE && (q = s.RGBA8UI), F === s.UNSIGNED_SHORT && (q = s.RGBA16UI), F === s.UNSIGNED_INT && (q = s.RGBA32UI), F === s.BYTE && (q = s.RGBA8I), F === s.SHORT && (q = s.RGBA16I), F === s.INT && (q = s.RGBA32I)), M === s.RGB && F === s.UNSIGNED_INT_5_9_9_9_REV && (q = s.RGB9_E5), M === s.RGBA) {
      const Ae = Y ? bs : qe.getTransfer(H);
      F === s.FLOAT && (q = s.RGBA32F), F === s.HALF_FLOAT && (q = s.RGBA16F), F === s.UNSIGNED_BYTE && (q = Ae === rt ? s.SRGB8_ALPHA8 : s.RGBA8), F === s.UNSIGNED_SHORT_4_4_4_4 && (q = s.RGBA4), F === s.UNSIGNED_SHORT_5_5_5_1 && (q = s.RGB5_A1);
    }
    return (q === s.R16F || q === s.R32F || q === s.RG16F || q === s.RG32F || q === s.RGBA16F || q === s.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function b(C, M) {
    let F;
    return C ? M === null || M === 1014 || M === 1020 ? F = s.DEPTH24_STENCIL8 : M === 1015 ? F = s.DEPTH32F_STENCIL8 : M === 1012 && (F = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === 1014 || M === 1020 ? F = s.DEPTH_COMPONENT24 : M === 1015 ? F = s.DEPTH_COMPONENT32F : M === 1012 && (F = s.DEPTH_COMPONENT16), F;
  }
  function x(C, M) {
    return p(C) === !0 || C.isFramebufferTexture && C.minFilter !== 1003 && C.minFilter !== 1006 ? Math.log2(Math.max(M.width, M.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? M.mipmaps.length : 1;
  }
  function A(C) {
    const M = C.target;
    M.removeEventListener("dispose", A), w(M), M.isVideoTexture && h.delete(M);
  }
  function y(C) {
    const M = C.target;
    M.removeEventListener("dispose", y), X(M);
  }
  function w(C) {
    const M = n.get(C);
    if (M.__webglInit === void 0) return;
    const F = C.source, H = u.get(F);
    if (H) {
      const Y = H[M.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && D(C), Object.keys(H).length === 0 && u.delete(F);
    }
    n.remove(C);
  }
  function D(C) {
    const M = n.get(C);
    s.deleteTexture(M.__webglTexture);
    const F = C.source, H = u.get(F);
    delete H[M.__cacheKey], a.memory.textures--;
  }
  function X(C) {
    const M = n.get(C);
    if (C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget)
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
    const F = C.textures;
    for (let H = 0, Y = F.length; H < Y; H++) {
      const q = n.get(F[H]);
      q.__webglTexture && (s.deleteTexture(q.__webglTexture), a.memory.textures--), n.remove(F[H]);
    }
    n.remove(C);
  }
  let v = 0;
  function T() {
    v = 0;
  }
  function k() {
    const C = v;
    return C >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + i.maxTextures), v += 1, C;
  }
  function G(C) {
    const M = [];
    return M.push(C.wrapS), M.push(C.wrapT), M.push(C.wrapR || 0), M.push(C.magFilter), M.push(C.minFilter), M.push(C.anisotropy), M.push(C.internalFormat), M.push(C.format), M.push(C.type), M.push(C.generateMipmaps), M.push(C.premultiplyAlpha), M.push(C.flipY), M.push(C.unpackAlignment), M.push(C.colorSpace), M.join();
  }
  function B(C, M) {
    const F = n.get(C);
    if (C.isVideoTexture && Ee(C), C.isRenderTargetTexture === !1 && C.version > 0 && F.__version !== C.version) {
      const H = C.image;
      if (H === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (H.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ye(F, C, M);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, F.__webglTexture, s.TEXTURE0 + M);
  }
  function $(C, M) {
    const F = n.get(C);
    if (C.version > 0 && F.__version !== C.version) {
      Ye(F, C, M);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, F.__webglTexture, s.TEXTURE0 + M);
  }
  function z(C, M) {
    const F = n.get(C);
    if (C.version > 0 && F.__version !== C.version) {
      Ye(F, C, M);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, F.__webglTexture, s.TEXTURE0 + M);
  }
  function J(C, M) {
    const F = n.get(C);
    if (C.version > 0 && F.__version !== C.version) {
      j(F, C, M);
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
  function oe(C, M) {
    if (M.type === 1015 && e.has("OES_texture_float_linear") === !1 && (M.magFilter === 1006 || M.magFilter === 1007 || M.magFilter === 1005 || M.magFilter === 1008 || M.minFilter === 1006 || M.minFilter === 1007 || M.minFilter === 1005 || M.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(C, s.TEXTURE_WRAP_S, V[M.wrapS]), s.texParameteri(C, s.TEXTURE_WRAP_T, V[M.wrapT]), (C === s.TEXTURE_3D || C === s.TEXTURE_2D_ARRAY) && s.texParameteri(C, s.TEXTURE_WRAP_R, V[M.wrapR]), s.texParameteri(C, s.TEXTURE_MAG_FILTER, he[M.magFilter]), s.texParameteri(C, s.TEXTURE_MIN_FILTER, he[M.minFilter]), M.compareFunction && (s.texParameteri(C, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(C, s.TEXTURE_COMPARE_FUNC, ue[M.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (M.magFilter === 1003 || M.minFilter !== 1005 && M.minFilter !== 1008 || M.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(C, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy;
      }
    }
  }
  function We(C, M) {
    let F = !1;
    C.__webglInit === void 0 && (C.__webglInit = !0, M.addEventListener("dispose", A));
    const H = M.source;
    let Y = u.get(H);
    Y === void 0 && (Y = {}, u.set(H, Y));
    const q = G(M);
    if (q !== C.__cacheKey) {
      Y[q] === void 0 && (Y[q] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), Y[q].usedTimes++;
      const Ae = Y[C.__cacheKey];
      Ae !== void 0 && (Y[C.__cacheKey].usedTimes--, Ae.usedTimes === 0 && D(M)), C.__cacheKey = q, C.__webglTexture = Y[q].texture;
    }
    return F;
  }
  function Ye(C, M, F) {
    let H = s.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (H = s.TEXTURE_2D_ARRAY), M.isData3DTexture && (H = s.TEXTURE_3D);
    const Y = We(C, M), q = M.source;
    t.bindTexture(H, C.__webglTexture, s.TEXTURE0 + F);
    const Ae = n.get(q);
    if (q.version !== Ae.__version || Y === !0) {
      t.activeTexture(s.TEXTURE0 + F);
      const ae = qe.getPrimaries(qe.workingColorSpace), ge = M.colorSpace === pn ? null : qe.getPrimaries(M.colorSpace), Ke = M.colorSpace === pn || ae === ge ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, M.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, M.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ke);
      let te = _(M.image, !1, i.maxTextureSize);
      te = ke(M, te);
      const be = r.convert(M.format, M.colorSpace), Fe = r.convert(M.type);
      let Ue = S(M.internalFormat, be, Fe, M.colorSpace, M.isVideoTexture);
      oe(H, M);
      let xe;
      const je = M.mipmaps, Be = M.isVideoTexture !== !0, st = Ae.__version === void 0 || Y === !0, L = q.dataReady, de = x(M, te);
      if (M.isDepthTexture)
        Ue = b(M.format === 1027, M.type), st && (Be ? t.texStorage2D(s.TEXTURE_2D, 1, Ue, te.width, te.height) : t.texImage2D(s.TEXTURE_2D, 0, Ue, te.width, te.height, 0, be, Fe, null));
      else if (M.isDataTexture)
        if (je.length > 0) {
          Be && st && t.texStorage2D(s.TEXTURE_2D, de, Ue, je[0].width, je[0].height);
          for (let W = 0, K = je.length; W < K; W++)
            xe = je[W], Be ? L && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, xe.width, xe.height, be, Fe, xe.data) : t.texImage2D(s.TEXTURE_2D, W, Ue, xe.width, xe.height, 0, be, Fe, xe.data);
          M.generateMipmaps = !1;
        } else
          Be ? (st && t.texStorage2D(s.TEXTURE_2D, de, Ue, te.width, te.height), L && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, te.width, te.height, be, Fe, te.data)) : t.texImage2D(s.TEXTURE_2D, 0, Ue, te.width, te.height, 0, be, Fe, te.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Be && st && t.texStorage3D(s.TEXTURE_2D_ARRAY, de, Ue, je[0].width, je[0].height, te.depth);
          for (let W = 0, K = je.length; W < K; W++)
            if (xe = je[W], M.format !== 1023)
              if (be !== null)
                if (Be) {
                  if (L)
                    if (M.layerUpdates.size > 0) {
                      const le = Ha(xe.width, xe.height, M.format, M.type);
                      for (const pe of M.layerUpdates) {
                        const Xe = xe.data.subarray(
                          pe * le / xe.data.BYTES_PER_ELEMENT,
                          (pe + 1) * le / xe.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, pe, xe.width, xe.height, 1, be, Xe, 0, 0);
                      }
                      M.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, xe.width, xe.height, te.depth, be, xe.data, 0, 0);
                } else
                  t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, W, Ue, xe.width, xe.height, te.depth, 0, xe.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Be ? L && t.texSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, xe.width, xe.height, te.depth, be, Fe, xe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, W, Ue, xe.width, xe.height, te.depth, 0, be, Fe, xe.data);
        } else {
          Be && st && t.texStorage2D(s.TEXTURE_2D, de, Ue, je[0].width, je[0].height);
          for (let W = 0, K = je.length; W < K; W++)
            xe = je[W], M.format !== 1023 ? be !== null ? Be ? L && t.compressedTexSubImage2D(s.TEXTURE_2D, W, 0, 0, xe.width, xe.height, be, xe.data) : t.compressedTexImage2D(s.TEXTURE_2D, W, Ue, xe.width, xe.height, 0, xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? L && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, xe.width, xe.height, be, Fe, xe.data) : t.texImage2D(s.TEXTURE_2D, W, Ue, xe.width, xe.height, 0, be, Fe, xe.data);
        }
      else if (M.isDataArrayTexture)
        if (Be) {
          if (st && t.texStorage3D(s.TEXTURE_2D_ARRAY, de, Ue, te.width, te.height, te.depth), L)
            if (M.layerUpdates.size > 0) {
              const W = Ha(te.width, te.height, M.format, M.type);
              for (const K of M.layerUpdates) {
                const le = te.data.subarray(
                  K * W / te.data.BYTES_PER_ELEMENT,
                  (K + 1) * W / te.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, K, te.width, te.height, 1, be, Fe, le);
              }
              M.clearLayerUpdates();
            } else
              t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, be, Fe, te.data);
        } else
          t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Ue, te.width, te.height, te.depth, 0, be, Fe, te.data);
      else if (M.isData3DTexture)
        Be ? (st && t.texStorage3D(s.TEXTURE_3D, de, Ue, te.width, te.height, te.depth), L && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, be, Fe, te.data)) : t.texImage3D(s.TEXTURE_3D, 0, Ue, te.width, te.height, te.depth, 0, be, Fe, te.data);
      else if (M.isFramebufferTexture) {
        if (st)
          if (Be)
            t.texStorage2D(s.TEXTURE_2D, de, Ue, te.width, te.height);
          else {
            let W = te.width, K = te.height;
            for (let le = 0; le < de; le++)
              t.texImage2D(s.TEXTURE_2D, le, Ue, W, K, 0, be, Fe, null), W >>= 1, K >>= 1;
          }
      } else if (je.length > 0) {
        if (Be && st) {
          const W = Ce(je[0]);
          t.texStorage2D(s.TEXTURE_2D, de, Ue, W.width, W.height);
        }
        for (let W = 0, K = je.length; W < K; W++)
          xe = je[W], Be ? L && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, be, Fe, xe) : t.texImage2D(s.TEXTURE_2D, W, Ue, be, Fe, xe);
        M.generateMipmaps = !1;
      } else if (Be) {
        if (st) {
          const W = Ce(te);
          t.texStorage2D(s.TEXTURE_2D, de, Ue, W.width, W.height);
        }
        L && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, be, Fe, te);
      } else
        t.texImage2D(s.TEXTURE_2D, 0, Ue, be, Fe, te);
      p(M) && m(H), Ae.__version = q.version, M.onUpdate && M.onUpdate(M);
    }
    C.__version = M.version;
  }
  function j(C, M, F) {
    if (M.image.length !== 6) return;
    const H = We(C, M), Y = M.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, C.__webglTexture, s.TEXTURE0 + F);
    const q = n.get(Y);
    if (Y.version !== q.__version || H === !0) {
      t.activeTexture(s.TEXTURE0 + F);
      const Ae = qe.getPrimaries(qe.workingColorSpace), ae = M.colorSpace === pn ? null : qe.getPrimaries(M.colorSpace), ge = M.colorSpace === pn || Ae === ae ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, M.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, M.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ge);
      const Ke = M.isCompressedTexture || M.image[0].isCompressedTexture, te = M.image[0] && M.image[0].isDataTexture, be = [];
      for (let K = 0; K < 6; K++)
        !Ke && !te ? be[K] = _(M.image[K], !0, i.maxCubemapSize) : be[K] = te ? M.image[K].image : M.image[K], be[K] = ke(M, be[K]);
      const Fe = be[0], Ue = r.convert(M.format, M.colorSpace), xe = r.convert(M.type), je = S(M.internalFormat, Ue, xe, M.colorSpace), Be = M.isVideoTexture !== !0, st = q.__version === void 0 || H === !0, L = Y.dataReady;
      let de = x(M, Fe);
      oe(s.TEXTURE_CUBE_MAP, M);
      let W;
      if (Ke) {
        Be && st && t.texStorage2D(s.TEXTURE_CUBE_MAP, de, je, Fe.width, Fe.height);
        for (let K = 0; K < 6; K++) {
          W = be[K].mipmaps;
          for (let le = 0; le < W.length; le++) {
            const pe = W[le];
            M.format !== 1023 ? Ue !== null ? Be ? L && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, pe.width, pe.height, Ue, pe.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, je, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, pe.width, pe.height, Ue, xe, pe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, je, pe.width, pe.height, 0, Ue, xe, pe.data);
          }
        }
      } else {
        if (W = M.mipmaps, Be && st) {
          W.length > 0 && de++;
          const K = Ce(be[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, de, je, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (te) {
            Be ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, be[K].width, be[K].height, Ue, xe, be[K].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, je, be[K].width, be[K].height, 0, Ue, xe, be[K].data);
            for (let le = 0; le < W.length; le++) {
              const Xe = W[le].image[K].image;
              Be ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, Xe.width, Xe.height, Ue, xe, Xe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, je, Xe.width, Xe.height, 0, Ue, xe, Xe.data);
            }
          } else {
            Be ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Ue, xe, be[K]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, je, Ue, xe, be[K]);
            for (let le = 0; le < W.length; le++) {
              const pe = W[le];
              Be ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, Ue, xe, pe.image[K]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, je, Ue, xe, pe.image[K]);
            }
          }
      }
      p(M) && m(s.TEXTURE_CUBE_MAP), q.__version = Y.version, M.onUpdate && M.onUpdate(M);
    }
    C.__version = M.version;
  }
  function Q(C, M, F, H, Y, q) {
    const Ae = r.convert(F.format, F.colorSpace), ae = r.convert(F.type), ge = S(F.internalFormat, Ae, ae, F.colorSpace);
    if (!n.get(M).__hasExternalTextures) {
      const te = Math.max(1, M.width >> q), be = Math.max(1, M.height >> q);
      Y === s.TEXTURE_3D || Y === s.TEXTURE_2D_ARRAY ? t.texImage3D(Y, q, ge, te, be, M.depth, 0, Ae, ae, null) : t.texImage2D(Y, q, ge, te, be, 0, Ae, ae, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, C), Ne(M) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, H, Y, n.get(F).__webglTexture, 0, ve(M)) : (Y === s.TEXTURE_2D || Y >= s.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, H, Y, n.get(F).__webglTexture, q), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function _e(C, M, F) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, C), M.depthBuffer) {
      const H = M.depthTexture, Y = H && H.isDepthTexture ? H.type : null, q = b(M.stencilBuffer, Y), Ae = M.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ae = ve(M);
      Ne(M) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ae, q, M.width, M.height) : F ? s.renderbufferStorageMultisample(s.RENDERBUFFER, ae, q, M.width, M.height) : s.renderbufferStorage(s.RENDERBUFFER, q, M.width, M.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, Ae, s.RENDERBUFFER, C);
    } else {
      const H = M.textures;
      for (let Y = 0; Y < H.length; Y++) {
        const q = H[Y], Ae = r.convert(q.format, q.colorSpace), ae = r.convert(q.type), ge = S(q.internalFormat, Ae, ae, q.colorSpace), Ke = ve(M);
        F && Ne(M) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Ke, ge, M.width, M.height) : Ne(M) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Ke, ge, M.width, M.height) : s.renderbufferStorage(s.RENDERBUFFER, ge, M.width, M.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function fe(C, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, C), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), B(M.depthTexture, 0);
    const H = n.get(M.depthTexture).__webglTexture, Y = ve(M);
    if (M.depthTexture.format === 1026)
      Ne(M) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, H, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, H, 0);
    else if (M.depthTexture.format === 1027)
      Ne(M) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, H, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, H, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Ie(C) {
    const M = n.get(C), F = C.isWebGLCubeRenderTarget === !0;
    if (M.__boundDepthTexture !== C.depthTexture) {
      const H = C.depthTexture;
      if (M.__depthDisposeCallback && M.__depthDisposeCallback(), H) {
        const Y = () => {
          delete M.__boundDepthTexture, delete M.__depthDisposeCallback, H.removeEventListener("dispose", Y);
        };
        H.addEventListener("dispose", Y), M.__depthDisposeCallback = Y;
      }
      M.__boundDepthTexture = H;
    }
    if (C.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      fe(M.__webglFramebuffer, C);
    } else if (F) {
      M.__webglDepthbuffer = [];
      for (let H = 0; H < 6; H++)
        if (t.bindFramebuffer(s.FRAMEBUFFER, M.__webglFramebuffer[H]), M.__webglDepthbuffer[H] === void 0)
          M.__webglDepthbuffer[H] = s.createRenderbuffer(), _e(M.__webglDepthbuffer[H], C, !1);
        else {
          const Y = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, q = M.__webglDepthbuffer[H];
          s.bindRenderbuffer(s.RENDERBUFFER, q), s.framebufferRenderbuffer(s.FRAMEBUFFER, Y, s.RENDERBUFFER, q);
        }
    } else if (t.bindFramebuffer(s.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0)
      M.__webglDepthbuffer = s.createRenderbuffer(), _e(M.__webglDepthbuffer, C, !1);
    else {
      const H = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Y = M.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, Y), s.framebufferRenderbuffer(s.FRAMEBUFFER, H, s.RENDERBUFFER, Y);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Pe(C, M, F) {
    const H = n.get(C);
    M !== void 0 && Q(H.__webglFramebuffer, C, C.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), F !== void 0 && Ie(C);
  }
  function Z(C) {
    const M = C.texture, F = n.get(C), H = n.get(M);
    C.addEventListener("dispose", y);
    const Y = C.textures, q = C.isWebGLCubeRenderTarget === !0, Ae = Y.length > 1;
    if (Ae || (H.__webglTexture === void 0 && (H.__webglTexture = s.createTexture()), H.__version = M.version, a.memory.textures++), q) {
      F.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (M.mipmaps && M.mipmaps.length > 0) {
          F.__webglFramebuffer[ae] = [];
          for (let ge = 0; ge < M.mipmaps.length; ge++)
            F.__webglFramebuffer[ae][ge] = s.createFramebuffer();
        } else
          F.__webglFramebuffer[ae] = s.createFramebuffer();
    } else {
      if (M.mipmaps && M.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let ae = 0; ae < M.mipmaps.length; ae++)
          F.__webglFramebuffer[ae] = s.createFramebuffer();
      } else
        F.__webglFramebuffer = s.createFramebuffer();
      if (Ae)
        for (let ae = 0, ge = Y.length; ae < ge; ae++) {
          const Ke = n.get(Y[ae]);
          Ke.__webglTexture === void 0 && (Ke.__webglTexture = s.createTexture(), a.memory.textures++);
        }
      if (C.samples > 0 && Ne(C) === !1) {
        F.__webglMultisampledFramebuffer = s.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < Y.length; ae++) {
          const ge = Y[ae];
          F.__webglColorRenderbuffer[ae] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
          const Ke = r.convert(ge.format, ge.colorSpace), te = r.convert(ge.type), be = S(ge.internalFormat, Ke, te, ge.colorSpace, C.isXRRenderTarget === !0), Fe = ve(C);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Fe, be, C.width, C.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ae, s.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), C.depthBuffer && (F.__webglDepthRenderbuffer = s.createRenderbuffer(), _e(F.__webglDepthRenderbuffer, C, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, H.__webglTexture), oe(s.TEXTURE_CUBE_MAP, M);
      for (let ae = 0; ae < 6; ae++)
        if (M.mipmaps && M.mipmaps.length > 0)
          for (let ge = 0; ge < M.mipmaps.length; ge++)
            Q(F.__webglFramebuffer[ae][ge], C, M, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, ge);
        else
          Q(F.__webglFramebuffer[ae], C, M, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      p(M) && m(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Ae) {
      for (let ae = 0, ge = Y.length; ae < ge; ae++) {
        const Ke = Y[ae], te = n.get(Ke);
        t.bindTexture(s.TEXTURE_2D, te.__webglTexture), oe(s.TEXTURE_2D, Ke), Q(F.__webglFramebuffer, C, Ke, s.COLOR_ATTACHMENT0 + ae, s.TEXTURE_2D, 0), p(Ke) && m(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = s.TEXTURE_2D;
      if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (ae = C.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(ae, H.__webglTexture), oe(ae, M), M.mipmaps && M.mipmaps.length > 0)
        for (let ge = 0; ge < M.mipmaps.length; ge++)
          Q(F.__webglFramebuffer[ge], C, M, s.COLOR_ATTACHMENT0, ae, ge);
      else
        Q(F.__webglFramebuffer, C, M, s.COLOR_ATTACHMENT0, ae, 0);
      p(M) && m(ae), t.unbindTexture();
    }
    C.depthBuffer && Ie(C);
  }
  function ee(C) {
    const M = C.textures;
    for (let F = 0, H = M.length; F < H; F++) {
      const Y = M[F];
      if (p(Y)) {
        const q = C.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, Ae = n.get(Y).__webglTexture;
        t.bindTexture(q, Ae), m(q), t.unbindTexture();
      }
    }
  }
  const ie = [], R = [];
  function Me(C) {
    if (C.samples > 0) {
      if (Ne(C) === !1) {
        const M = C.textures, F = C.width, H = C.height;
        let Y = s.COLOR_BUFFER_BIT;
        const q = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Ae = n.get(C), ae = M.length > 1;
        if (ae)
          for (let ge = 0; ge < M.length; ge++)
            t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ge, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ge, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, Ae.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ae.__webglFramebuffer);
        for (let ge = 0; ge < M.length; ge++) {
          if (C.resolveDepthBuffer && (C.depthBuffer && (Y |= s.DEPTH_BUFFER_BIT), C.stencilBuffer && C.resolveStencilBuffer && (Y |= s.STENCIL_BUFFER_BIT)), ae) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, Ae.__webglColorRenderbuffer[ge]);
            const Ke = n.get(M[ge]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Ke, 0);
          }
          s.blitFramebuffer(0, 0, F, H, 0, 0, F, H, Y, s.NEAREST), l === !0 && (ie.length = 0, R.length = 0, ie.push(s.COLOR_ATTACHMENT0 + ge), C.depthBuffer && C.resolveDepthBuffer === !1 && (ie.push(q), R.push(q), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, R)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, ie));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ae)
          for (let ge = 0; ge < M.length; ge++) {
            t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ge, s.RENDERBUFFER, Ae.__webglColorRenderbuffer[ge]);
            const Ke = n.get(M[ge]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ge, s.TEXTURE_2D, Ke, 0);
          }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ae.__webglMultisampledFramebuffer);
      } else if (C.depthBuffer && C.resolveDepthBuffer === !1 && l) {
        const M = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [M]);
      }
    }
  }
  function ve(C) {
    return Math.min(i.maxSamples, C.samples);
  }
  function Ne(C) {
    const M = n.get(C);
    return C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function Ee(C) {
    const M = a.render.frame;
    h.get(C) !== M && (h.set(C, M), C.update());
  }
  function ke(C, M) {
    const F = C.colorSpace, H = C.format, Y = C.type;
    return C.isCompressedTexture === !0 || C.isVideoTexture === !0 || F !== ut && F !== pn && (qe.getTransfer(F) === rt ? (H !== 1023 || Y !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), M;
  }
  function Ce(C) {
    return typeof HTMLImageElement < "u" && C instanceof HTMLImageElement ? (c.width = C.naturalWidth || C.width, c.height = C.naturalHeight || C.height) : typeof VideoFrame < "u" && C instanceof VideoFrame ? (c.width = C.displayWidth, c.height = C.displayHeight) : (c.width = C.width, c.height = C.height), c;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = T, this.setTexture2D = B, this.setTexture2DArray = $, this.setTexture3D = z, this.setTextureCube = J, this.rebindTextures = Pe, this.setupRenderTarget = Z, this.updateRenderTargetMipmap = ee, this.updateMultisampleRenderTarget = Me, this.setupDepthRenderbuffer = Ie, this.setupFrameBufferTexture = Q, this.useMultisampledRTT = Ne;
}
function Gd(s, e) {
  function t(n, i = pn) {
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
      if (a === rt)
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
        if (n === 36196 || n === 37492) return a === rt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === 37808) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === rt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === 36492) return a === rt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
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
class zd extends Ct {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class mn extends it {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Hd = { type: "move" };
class or {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new mn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new mn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new mn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
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
          const p = t.getJointPose(_, n), m = this._getHandJoint(c, _);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], u = h.position.distanceTo(f.position), d = 0.02, g = 5e-3;
        c.inputState.pinching && u > d + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && u <= d - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Hd)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new mn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Vd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Wd = `
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
class jd {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new dt(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Ft({
        vertexShader: Vd,
        fragmentShader: Wd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new vt(new ci(20, 20), n);
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
class Xd extends On {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, f = null, u = null, d = null, g = null;
    const _ = new jd(), p = t.getContextAttributes();
    let m = null, S = null;
    const b = [], x = [], A = new Oe();
    let y = null;
    const w = new Ct();
    w.layers.enable(1), w.viewport = new Ve();
    const D = new Ct();
    D.layers.enable(2), D.viewport = new Ve();
    const X = [w, D], v = new zd();
    v.layers.enable(1), v.layers.enable(2);
    let T = null, k = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(j) {
      let Q = b[j];
      return Q === void 0 && (Q = new or(), b[j] = Q), Q.getTargetRaySpace();
    }, this.getControllerGrip = function(j) {
      let Q = b[j];
      return Q === void 0 && (Q = new or(), b[j] = Q), Q.getGripSpace();
    }, this.getHand = function(j) {
      let Q = b[j];
      return Q === void 0 && (Q = new or(), b[j] = Q), Q.getHandSpace();
    };
    function G(j) {
      const Q = x.indexOf(j.inputSource);
      if (Q === -1)
        return;
      const _e = b[Q];
      _e !== void 0 && (_e.update(j.inputSource, j.frame, c || a), _e.dispatchEvent({ type: j.type, data: j.inputSource }));
    }
    function B() {
      i.removeEventListener("select", G), i.removeEventListener("selectstart", G), i.removeEventListener("selectend", G), i.removeEventListener("squeeze", G), i.removeEventListener("squeezestart", G), i.removeEventListener("squeezeend", G), i.removeEventListener("end", B), i.removeEventListener("inputsourceschange", $);
      for (let j = 0; j < b.length; j++) {
        const Q = x[j];
        Q !== null && (x[j] = null, b[j].disconnect(Q));
      }
      T = null, k = null, _.reset(), e.setRenderTarget(m), d = null, u = null, f = null, i = null, S = null, Ye.stop(), n.isPresenting = !1, e.setPixelRatio(y), e.setSize(A.width, A.height, !1), n.dispatchEvent({ type: "sessionend" });
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
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(j) {
      if (i = j, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", G), i.addEventListener("selectstart", G), i.addEventListener("selectend", G), i.addEventListener("squeeze", G), i.addEventListener("squeezestart", G), i.addEventListener("squeezeend", G), i.addEventListener("end", B), i.addEventListener("inputsourceschange", $), p.xrCompatible !== !0 && await t.makeXRCompatible(), y = e.getPixelRatio(), e.getSize(A), i.renderState.layers === void 0) {
          const Q = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: r
          };
          d = new XRWebGLLayer(i, t, Q), i.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), S = new gn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: p.stencil
            }
          );
        } else {
          let Q = null, _e = null, fe = null;
          p.depth && (fe = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Q = p.stencil ? 1027 : 1026, _e = p.stencil ? 1020 : 1014);
          const Ie = {
            colorFormat: t.RGBA8,
            depthFormat: fe,
            scaleFactor: r
          };
          f = new XRWebGLBinding(i, t), u = f.createProjectionLayer(Ie), i.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), S = new gn(
            u.textureWidth,
            u.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Bo(u.textureWidth, u.textureHeight, _e, void 0, void 0, void 0, void 0, void 0, void 0, Q),
              stencilBuffer: p.stencil,
              colorSpace: e.outputColorSpace,
              samples: p.antialias ? 4 : 0,
              resolveDepthBuffer: u.ignoreDepthValues === !1
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
        const _e = j.removed[Q], fe = x.indexOf(_e);
        fe >= 0 && (x[fe] = null, b[fe].disconnect(_e));
      }
      for (let Q = 0; Q < j.added.length; Q++) {
        const _e = j.added[Q];
        let fe = x.indexOf(_e);
        if (fe === -1) {
          for (let Pe = 0; Pe < b.length; Pe++)
            if (Pe >= x.length) {
              x.push(_e), fe = Pe;
              break;
            } else if (x[Pe] === null) {
              x[Pe] = _e, fe = Pe;
              break;
            }
          if (fe === -1) break;
        }
        const Ie = b[fe];
        Ie && Ie.connect(_e);
      }
    }
    const z = new P(), J = new P();
    function V(j, Q, _e) {
      z.setFromMatrixPosition(Q.matrixWorld), J.setFromMatrixPosition(_e.matrixWorld);
      const fe = z.distanceTo(J), Ie = Q.projectionMatrix.elements, Pe = _e.projectionMatrix.elements, Z = Ie[14] / (Ie[10] - 1), ee = Ie[14] / (Ie[10] + 1), ie = (Ie[9] + 1) / Ie[5], R = (Ie[9] - 1) / Ie[5], Me = (Ie[8] - 1) / Ie[0], ve = (Pe[8] + 1) / Pe[0], Ne = Z * Me, Ee = Z * ve, ke = fe / (-Me + ve), Ce = ke * -Me;
      if (Q.matrixWorld.decompose(j.position, j.quaternion, j.scale), j.translateX(Ce), j.translateZ(ke), j.matrixWorld.compose(j.position, j.quaternion, j.scale), j.matrixWorldInverse.copy(j.matrixWorld).invert(), Ie[10] === -1)
        j.projectionMatrix.copy(Q.projectionMatrix), j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);
      else {
        const C = Z + ke, M = ee + ke, F = Ne - Ce, H = Ee + (fe - Ce), Y = ie * ee / M * C, q = R * ee / M * C;
        j.projectionMatrix.makePerspective(F, H, Y, q, C, M), j.projectionMatrixInverse.copy(j.projectionMatrix).invert();
      }
    }
    function he(j, Q) {
      Q === null ? j.matrixWorld.copy(j.matrix) : j.matrixWorld.multiplyMatrices(Q.matrixWorld, j.matrix), j.matrixWorldInverse.copy(j.matrixWorld).invert();
    }
    this.updateCamera = function(j) {
      if (i === null) return;
      let Q = j.near, _e = j.far;
      _.texture !== null && (_.depthNear > 0 && (Q = _.depthNear), _.depthFar > 0 && (_e = _.depthFar)), v.near = D.near = w.near = Q, v.far = D.far = w.far = _e, (T !== v.near || k !== v.far) && (i.updateRenderState({
        depthNear: v.near,
        depthFar: v.far
      }), T = v.near, k = v.far);
      const fe = j.parent, Ie = v.cameras;
      he(v, fe);
      for (let Pe = 0; Pe < Ie.length; Pe++)
        he(Ie[Pe], fe);
      Ie.length === 2 ? V(v, w, D) : v.projectionMatrix.copy(w.projectionMatrix), ue(j, v, fe);
    };
    function ue(j, Q, _e) {
      _e === null ? j.matrix.copy(Q.matrixWorld) : (j.matrix.copy(_e.matrixWorld), j.matrix.invert(), j.matrix.multiply(Q.matrixWorld)), j.matrix.decompose(j.position, j.quaternion, j.scale), j.updateMatrixWorld(!0), j.projectionMatrix.copy(Q.projectionMatrix), j.projectionMatrixInverse.copy(Q.projectionMatrixInverse), j.isPerspectiveCamera && (j.fov = si * 2 * Math.atan(1 / j.projectionMatrix.elements[5]), j.zoom = 1);
    }
    this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (!(u === null && d === null))
        return l;
    }, this.setFoveation = function(j) {
      l = j, u !== null && (u.fixedFoveation = j), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = j);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(v);
    };
    let oe = null;
    function We(j, Q) {
      if (h = Q.getViewerPose(c || a), g = Q, h !== null) {
        const _e = h.views;
        d !== null && (e.setRenderTargetFramebuffer(S, d.framebuffer), e.setRenderTarget(S));
        let fe = !1;
        _e.length !== v.cameras.length && (v.cameras.length = 0, fe = !0);
        for (let Pe = 0; Pe < _e.length; Pe++) {
          const Z = _e[Pe];
          let ee = null;
          if (d !== null)
            ee = d.getViewport(Z);
          else {
            const R = f.getViewSubImage(u, Z);
            ee = R.viewport, Pe === 0 && (e.setRenderTargetTextures(
              S,
              R.colorTexture,
              u.ignoreDepthValues ? void 0 : R.depthStencilTexture
            ), e.setRenderTarget(S));
          }
          let ie = X[Pe];
          ie === void 0 && (ie = new Ct(), ie.layers.enable(Pe), ie.viewport = new Ve(), X[Pe] = ie), ie.matrix.fromArray(Z.transform.matrix), ie.matrix.decompose(ie.position, ie.quaternion, ie.scale), ie.projectionMatrix.fromArray(Z.projectionMatrix), ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(), ie.viewport.set(ee.x, ee.y, ee.width, ee.height), Pe === 0 && (v.matrix.copy(ie.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), fe === !0 && v.cameras.push(ie);
        }
        const Ie = i.enabledFeatures;
        if (Ie && Ie.includes("depth-sensing")) {
          const Pe = f.getDepthInformation(_e[0]);
          Pe && Pe.isValid && Pe.texture && _.init(e, Pe, i.renderState);
        }
      }
      for (let _e = 0; _e < b.length; _e++) {
        const fe = x[_e], Ie = b[_e];
        fe !== null && Ie !== void 0 && Ie.update(fe, Q, c || a);
      }
      oe && oe(j, Q), Q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Q }), g = null;
    }
    const Ye = new ko();
    Ye.setAnimationLoop(We), this.setAnimationLoop = function(j) {
      oe = j;
    }, this.dispose = function() {
    };
  }
}
const Ln = /* @__PURE__ */ new qt(), qd = /* @__PURE__ */ new Re();
function Yd(s, e) {
  function t(p, m) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function n(p, m) {
    m.color.getRGB(p.fogColor.value, Fo(s)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function i(p, m, S, b, x) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? r(p, m) : m.isMeshToonMaterial ? (r(p, m), f(p, m)) : m.isMeshPhongMaterial ? (r(p, m), h(p, m)) : m.isMeshStandardMaterial ? (r(p, m), u(p, m), m.isMeshPhysicalMaterial && d(p, m, x)) : m.isMeshMatcapMaterial ? (r(p, m), g(p, m)) : m.isMeshDepthMaterial ? r(p, m) : m.isMeshDistanceMaterial ? (r(p, m), _(p, m)) : m.isMeshNormalMaterial ? r(p, m) : m.isLineBasicMaterial ? (a(p, m), m.isLineDashedMaterial && o(p, m)) : m.isPointsMaterial ? l(p, m, S, b) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function r(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, t(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === 1 && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, t(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === 1 && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, t(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, t(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const S = e.get(m), b = S.envMap, x = S.envMapRotation;
    b && (p.envMap.value = b, Ln.copy(x), Ln.x *= -1, Ln.y *= -1, Ln.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (Ln.y *= -1, Ln.z *= -1), p.envMapRotation.value.setFromMatrix4(qd.makeRotationFromEuler(Ln)), p.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap && (p.lightMap.value = m.lightMap, p.lightMapIntensity.value = m.lightMapIntensity, t(m.lightMap, p.lightMapTransform)), m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, p.aoMapTransform));
  }
  function a(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, t(m.map, p.mapTransform));
  }
  function o(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function l(p, m, S, b) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * S, p.scale.value = b * 0.5, m.map && (p.map.value = m.map, t(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function h(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function f(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function u(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, p.roughnessMapTransform)), m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function d(p, m, S) {
    p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === 1 && p.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (p.dispersion.value = m.dispersion), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = S.texture, p.transmissionSamplerSize.value.set(S.width, S.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function _(p, m) {
    const S = e.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(S.matrixWorld), p.nearDistance.value = S.shadow.camera.near, p.farDistance.value = S.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Kd(s, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(S, b) {
    const x = b.program;
    n.uniformBlockBinding(S, x);
  }
  function c(S, b) {
    let x = i[S.id];
    x === void 0 && (g(S), x = h(S), i[S.id] = x, S.addEventListener("dispose", p));
    const A = b.program;
    n.updateUBOMapping(S, A);
    const y = e.render.frame;
    r[S.id] !== y && (u(S), r[S.id] = y);
  }
  function h(S) {
    const b = f();
    S.__bindingPointIndex = b;
    const x = s.createBuffer(), A = S.__size, y = S.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, x), s.bufferData(s.UNIFORM_BUFFER, A, y), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, b, x), x;
  }
  function f() {
    for (let S = 0; S < o; S++)
      if (a.indexOf(S) === -1)
        return a.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(S) {
    const b = i[S.id], x = S.uniforms, A = S.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, b);
    for (let y = 0, w = x.length; y < w; y++) {
      const D = Array.isArray(x[y]) ? x[y] : [x[y]];
      for (let X = 0, v = D.length; X < v; X++) {
        const T = D[X];
        if (d(T, y, X, A) === !0) {
          const k = T.__offset, G = Array.isArray(T.value) ? T.value : [T.value];
          let B = 0;
          for (let $ = 0; $ < G.length; $++) {
            const z = G[$], J = _(z);
            typeof z == "number" || typeof z == "boolean" ? (T.__data[0] = z, s.bufferSubData(s.UNIFORM_BUFFER, k + B, T.__data)) : z.isMatrix3 ? (T.__data[0] = z.elements[0], T.__data[1] = z.elements[1], T.__data[2] = z.elements[2], T.__data[3] = 0, T.__data[4] = z.elements[3], T.__data[5] = z.elements[4], T.__data[6] = z.elements[5], T.__data[7] = 0, T.__data[8] = z.elements[6], T.__data[9] = z.elements[7], T.__data[10] = z.elements[8], T.__data[11] = 0) : (z.toArray(T.__data, B), B += J.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, k, T.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function d(S, b, x, A) {
    const y = S.value, w = b + "_" + x;
    if (A[w] === void 0)
      return typeof y == "number" || typeof y == "boolean" ? A[w] = y : A[w] = y.clone(), !0;
    {
      const D = A[w];
      if (typeof y == "number" || typeof y == "boolean") {
        if (D !== y)
          return A[w] = y, !0;
      } else if (D.equals(y) === !1)
        return D.copy(y), !0;
    }
    return !1;
  }
  function g(S) {
    const b = S.uniforms;
    let x = 0;
    const A = 16;
    for (let w = 0, D = b.length; w < D; w++) {
      const X = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let v = 0, T = X.length; v < T; v++) {
        const k = X[v], G = Array.isArray(k.value) ? k.value : [k.value];
        for (let B = 0, $ = G.length; B < $; B++) {
          const z = G[B], J = _(z), V = x % A, he = V % J.boundary, ue = V + he;
          x += he, ue !== 0 && A - ue < J.storage && (x += A - ue), k.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = x, x += J.storage;
        }
      }
    }
    const y = x % A;
    return y > 0 && (x += A - y), S.__size = x, S.__cache = {}, this;
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
  function p(S) {
    const b = S.target;
    b.removeEventListener("dispose", p);
    const x = a.indexOf(b.__bindingPointIndex);
    a.splice(x, 1), s.deleteBuffer(i[b.id]), delete i[b.id], delete r[b.id];
  }
  function m() {
    for (const S in i)
      s.deleteBuffer(i[S]);
    a = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: m
  };
}
class $d {
  constructor(e = {}) {
    const {
      canvas: t = Bl(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let u;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      u = n.getContextAttributes().alpha;
    } else
      u = a;
    const d = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, p = null;
    const m = [], S = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ft, this.toneMapping = 0, this.toneMappingExposure = 1;
    const b = this;
    let x = !1, A = 0, y = 0, w = null, D = -1, X = null;
    const v = new Ve(), T = new Ve();
    let k = null;
    const G = new re(0);
    let B = 0, $ = t.width, z = t.height, J = 1, V = null, he = null;
    const ue = new Ve(0, 0, $, z), oe = new Ve(0, 0, $, z);
    let We = !1;
    const Ye = new Nr();
    let j = !1, Q = !1;
    const _e = new Re(), fe = new Re(), Ie = new P(), Pe = new Ve(), Z = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ee = !1;
    function ie() {
      return w === null ? J : 1;
    }
    let R = n;
    function Me(E, I) {
      return t.getContext(E, I);
    }
    try {
      const E = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: f
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Lr}`), t.addEventListener("webglcontextlost", K, !1), t.addEventListener("webglcontextrestored", le, !1), t.addEventListener("webglcontextcreationerror", pe, !1), R === null) {
        const I = "webgl2";
        if (R = Me(I, E), R === null)
          throw Me(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let ve, Ne, Ee, ke, Ce, C, M, F, H, Y, q, Ae, ae, ge, Ke, te, be, Fe, Ue, xe, je, Be, st, L;
    function de() {
      ve = new tf(R), ve.init(), Be = new Gd(R, ve), Ne = new Ku(R, ve, e, Be), Ee = new kd(R), Ne.reverseDepthBuffer && Ee.buffers.depth.setReversed(!0), ke = new rf(R), Ce = new yd(), C = new Od(R, ve, Ee, Ce, Ne, Be, ke), M = new Zu(b), F = new ef(b), H = new uc(R), st = new qu(R, H), Y = new nf(R, H, ke, st), q = new of(R, Y, H, ke), Ue = new af(R, Ne, C), te = new $u(Ce), Ae = new Md(b, M, F, ve, Ne, st, te), ae = new Yd(b, Ce), ge = new Ed(), Ke = new Dd(ve), Fe = new Xu(b, M, F, Ee, q, u, l), be = new Ud(b, q, Ne), L = new Kd(R, ke, Ne, Ee), xe = new Yu(R, ve, ke), je = new sf(R, ve, ke), ke.programs = Ae.programs, b.capabilities = Ne, b.extensions = ve, b.properties = Ce, b.renderLists = ge, b.shadowMap = be, b.state = Ee, b.info = ke;
    }
    de();
    const W = new Xd(b, R);
    this.xr = W, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = ve.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = ve.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return J;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (J = E, this.setSize($, z, !1));
    }, this.getSize = function(E) {
      return E.set($, z);
    }, this.setSize = function(E, I, N = !0) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      $ = E, z = I, t.width = Math.floor(E * J), t.height = Math.floor(I * J), N === !0 && (t.style.width = E + "px", t.style.height = I + "px"), this.setViewport(0, 0, E, I);
    }, this.getDrawingBufferSize = function(E) {
      return E.set($ * J, z * J).floor();
    }, this.setDrawingBufferSize = function(E, I, N) {
      $ = E, z = I, J = N, t.width = Math.floor(E * N), t.height = Math.floor(I * N), this.setViewport(0, 0, E, I);
    }, this.getCurrentViewport = function(E) {
      return E.copy(v);
    }, this.getViewport = function(E) {
      return E.copy(ue);
    }, this.setViewport = function(E, I, N, O) {
      E.isVector4 ? ue.set(E.x, E.y, E.z, E.w) : ue.set(E, I, N, O), Ee.viewport(v.copy(ue).multiplyScalar(J).round());
    }, this.getScissor = function(E) {
      return E.copy(oe);
    }, this.setScissor = function(E, I, N, O) {
      E.isVector4 ? oe.set(E.x, E.y, E.z, E.w) : oe.set(E, I, N, O), Ee.scissor(T.copy(oe).multiplyScalar(J).round());
    }, this.getScissorTest = function() {
      return We;
    }, this.setScissorTest = function(E) {
      Ee.setScissorTest(We = E);
    }, this.setOpaqueSort = function(E) {
      V = E;
    }, this.setTransparentSort = function(E) {
      he = E;
    }, this.getClearColor = function(E) {
      return E.copy(Fe.getClearColor());
    }, this.setClearColor = function() {
      Fe.setClearColor.apply(Fe, arguments);
    }, this.getClearAlpha = function() {
      return Fe.getClearAlpha();
    }, this.setClearAlpha = function() {
      Fe.setClearAlpha.apply(Fe, arguments);
    }, this.clear = function(E = !0, I = !0, N = !0) {
      let O = 0;
      if (E) {
        let U = !1;
        if (w !== null) {
          const ne = w.texture.format;
          U = ne === 1033 || ne === 1031 || ne === 1029;
        }
        if (U) {
          const ne = w.texture.type, ce = ne === 1009 || ne === 1014 || ne === 1012 || ne === 1020 || ne === 1017 || ne === 1018, Se = Fe.getClearColor(), ye = Fe.getClearAlpha(), De = Se.r, Le = Se.g, Te = Se.b;
          ce ? (d[0] = De, d[1] = Le, d[2] = Te, d[3] = ye, R.clearBufferuiv(R.COLOR, 0, d)) : (g[0] = De, g[1] = Le, g[2] = Te, g[3] = ye, R.clearBufferiv(R.COLOR, 0, g));
        } else
          O |= R.COLOR_BUFFER_BIT;
      }
      I && (O |= R.DEPTH_BUFFER_BIT, R.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), N && (O |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(O);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", K, !1), t.removeEventListener("webglcontextrestored", le, !1), t.removeEventListener("webglcontextcreationerror", pe, !1), ge.dispose(), Ke.dispose(), Ce.dispose(), M.dispose(), F.dispose(), q.dispose(), st.dispose(), L.dispose(), Ae.dispose(), W.dispose(), W.removeEventListener("sessionstart", Xr), W.removeEventListener("sessionend", qr), Tn.stop();
    };
    function K(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), x = !0;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), x = !1;
      const E = ke.autoReset, I = be.enabled, N = be.autoUpdate, O = be.needsUpdate, U = be.type;
      de(), ke.autoReset = E, be.enabled = I, be.autoUpdate = N, be.needsUpdate = O, be.type = U;
    }
    function pe(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function Xe(E) {
      const I = E.target;
      I.removeEventListener("dispose", Xe), ct(I);
    }
    function ct(E) {
      Tt(E), Ce.remove(E);
    }
    function Tt(E) {
      const I = Ce.get(E).programs;
      I !== void 0 && (I.forEach(function(N) {
        Ae.releaseProgram(N);
      }), E.isShaderMaterial && Ae.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, I, N, O, U, ne) {
      I === null && (I = Z);
      const ce = U.isMesh && U.matrixWorld.determinant() < 0, Se = _l(E, I, N, O, U);
      Ee.setMaterial(O, ce);
      let ye = N.index, De = 1;
      if (O.wireframe === !0) {
        if (ye = Y.getWireframeAttribute(N), ye === void 0) return;
        De = 2;
      }
      const Le = N.drawRange, Te = N.attributes.position;
      let et = Le.start * De, at = (Le.start + Le.count) * De;
      ne !== null && (et = Math.max(et, ne.start * De), at = Math.min(at, (ne.start + ne.count) * De)), ye !== null ? (et = Math.max(et, 0), at = Math.min(at, ye.count)) : Te != null && (et = Math.max(et, 0), at = Math.min(at, Te.count));
      const ot = at - et;
      if (ot < 0 || ot === 1 / 0) return;
      st.setup(U, O, Se, N, ye);
      let Pt, Ze = xe;
      if (ye !== null && (Pt = H.get(ye), Ze = je, Ze.setIndex(Pt)), U.isMesh)
        O.wireframe === !0 ? (Ee.setLineWidth(O.wireframeLinewidth * ie()), Ze.setMode(R.LINES)) : Ze.setMode(R.TRIANGLES);
      else if (U.isLine) {
        let we = O.linewidth;
        we === void 0 && (we = 1), Ee.setLineWidth(we * ie()), U.isLineSegments ? Ze.setMode(R.LINES) : U.isLineLoop ? Ze.setMode(R.LINE_LOOP) : Ze.setMode(R.LINE_STRIP);
      } else U.isPoints ? Ze.setMode(R.POINTS) : U.isSprite && Ze.setMode(R.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          Ze.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (ve.get("WEBGL_multi_draw"))
          Ze.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const we = U._multiDrawStarts, _t = U._multiDrawCounts, Qe = U._multiDrawCount, Ot = ye ? H.get(ye).bytesPerElement : 1, Gn = Ce.get(O).currentProgram.getUniforms();
          for (let Dt = 0; Dt < Qe; Dt++)
            Gn.setValue(R, "_gl_DrawID", Dt), Ze.render(we[Dt] / Ot, _t[Dt]);
        }
      else if (U.isInstancedMesh)
        Ze.renderInstances(et, ot, U.count);
      else if (N.isInstancedBufferGeometry) {
        const we = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0, _t = Math.min(N.instanceCount, we);
        Ze.renderInstances(et, ot, _t);
      } else
        Ze.render(et, ot);
    };
    function $e(E, I, N) {
      E.transparent === !0 && E.side === 2 && E.forceSinglePass === !1 ? (E.side = 1, E.needsUpdate = !0, Gi(E, I, N), E.side = 0, E.needsUpdate = !0, Gi(E, I, N), E.side = 2) : Gi(E, I, N);
    }
    this.compile = function(E, I, N = null) {
      N === null && (N = E), p = Ke.get(N), p.init(I), S.push(p), N.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), E !== N && E.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U));
      }), p.setupLights();
      const O = /* @__PURE__ */ new Set();
      return E.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
          return;
        const ne = U.material;
        if (ne)
          if (Array.isArray(ne))
            for (let ce = 0; ce < ne.length; ce++) {
              const Se = ne[ce];
              $e(Se, N, U), O.add(Se);
            }
          else
            $e(ne, N, U), O.add(ne);
      }), S.pop(), p = null, O;
    }, this.compileAsync = function(E, I, N = null) {
      const O = this.compile(E, I, N);
      return new Promise((U) => {
        function ne() {
          if (O.forEach(function(ce) {
            Ce.get(ce).currentProgram.isReady() && O.delete(ce);
          }), O.size === 0) {
            U(E);
            return;
          }
          setTimeout(ne, 10);
        }
        ve.get("KHR_parallel_shader_compile") !== null ? ne() : setTimeout(ne, 10);
      });
    };
    let wt = null;
    function tn(E) {
      wt && wt(E);
    }
    function Xr() {
      Tn.stop();
    }
    function qr() {
      Tn.start();
    }
    const Tn = new ko();
    Tn.setAnimationLoop(tn), typeof self < "u" && Tn.setContext(self), this.setAnimationLoop = function(E) {
      wt = E, W.setAnimationLoop(E), E === null ? Tn.stop() : Tn.start();
    }, W.addEventListener("sessionstart", Xr), W.addEventListener("sessionend", qr), this.render = function(E, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (x === !0) return;
      if (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(I), I = W.getCamera()), E.isScene === !0 && E.onBeforeRender(b, E, I, w), p = Ke.get(E, S.length), p.init(I), S.push(p), fe.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), Ye.setFromProjectionMatrix(fe), Q = this.localClippingEnabled, j = te.init(this.clippingPlanes, Q), _ = ge.get(E, m.length), _.init(), m.push(_), W.enabled === !0 && W.isPresenting === !0) {
        const ne = b.xr.getDepthSensingMesh();
        ne !== null && Ps(ne, I, -1 / 0, b.sortObjects);
      }
      Ps(E, I, 0, b.sortObjects), _.finish(), b.sortObjects === !0 && _.sort(V, he), ee = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, ee && Fe.addToRenderList(_, E), this.info.render.frame++, j === !0 && te.beginShadows();
      const N = p.state.shadowsArray;
      be.render(N, E, I), j === !0 && te.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const O = _.opaque, U = _.transmissive;
      if (p.setupLights(), I.isArrayCamera) {
        const ne = I.cameras;
        if (U.length > 0)
          for (let ce = 0, Se = ne.length; ce < Se; ce++) {
            const ye = ne[ce];
            Kr(O, U, E, ye);
          }
        ee && Fe.render(E);
        for (let ce = 0, Se = ne.length; ce < Se; ce++) {
          const ye = ne[ce];
          Yr(_, E, ye, ye.viewport);
        }
      } else
        U.length > 0 && Kr(O, U, E, I), ee && Fe.render(E), Yr(_, E, I);
      w !== null && (C.updateMultisampleRenderTarget(w), C.updateRenderTargetMipmap(w)), E.isScene === !0 && E.onAfterRender(b, E, I), st.resetDefaultState(), D = -1, X = null, S.pop(), S.length > 0 ? (p = S[S.length - 1], j === !0 && te.setGlobalState(b.clippingPlanes, p.state.camera)) : p = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null;
    };
    function Ps(E, I, N, O) {
      if (E.visible === !1) return;
      if (E.layers.test(I.layers)) {
        if (E.isGroup)
          N = E.renderOrder;
        else if (E.isLOD)
          E.autoUpdate === !0 && E.update(I);
        else if (E.isLight)
          p.pushLight(E), E.castShadow && p.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || Ye.intersectsSprite(E)) {
            O && Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);
            const ce = q.update(E), Se = E.material;
            Se.visible && _.push(E, ce, Se, N, Pe.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || Ye.intersectsObject(E))) {
          const ce = q.update(E), Se = E.material;
          if (O && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Pe.copy(E.boundingSphere.center)) : (ce.boundingSphere === null && ce.computeBoundingSphere(), Pe.copy(ce.boundingSphere.center)), Pe.applyMatrix4(E.matrixWorld).applyMatrix4(fe)), Array.isArray(Se)) {
            const ye = ce.groups;
            for (let De = 0, Le = ye.length; De < Le; De++) {
              const Te = ye[De], et = Se[Te.materialIndex];
              et && et.visible && _.push(E, ce, et, N, Pe.z, Te);
            }
          } else Se.visible && _.push(E, ce, Se, N, Pe.z, null);
        }
      }
      const ne = E.children;
      for (let ce = 0, Se = ne.length; ce < Se; ce++)
        Ps(ne[ce], I, N, O);
    }
    function Yr(E, I, N, O) {
      const U = E.opaque, ne = E.transmissive, ce = E.transparent;
      p.setupLightsView(N), j === !0 && te.setGlobalState(b.clippingPlanes, N), O && Ee.viewport(v.copy(O)), U.length > 0 && Oi(U, I, N), ne.length > 0 && Oi(ne, I, N), ce.length > 0 && Oi(ce, I, N), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function Kr(E, I, N, O) {
      if ((N.isScene === !0 ? N.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[O.id] === void 0 && (p.state.transmissionRenderTarget[O.id] = new gn(1, 1, {
        generateMipmaps: !0,
        type: ve.has("EXT_color_buffer_half_float") || ve.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: qe.workingColorSpace
      }));
      const ne = p.state.transmissionRenderTarget[O.id], ce = O.viewport || v;
      ne.setSize(ce.z, ce.w);
      const Se = b.getRenderTarget();
      b.setRenderTarget(ne), b.getClearColor(G), B = b.getClearAlpha(), B < 1 && b.setClearColor(16777215, 0.5), b.clear(), ee && Fe.render(N);
      const ye = b.toneMapping;
      b.toneMapping = 0;
      const De = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), p.setupLightsView(O), j === !0 && te.setGlobalState(b.clippingPlanes, O), Oi(E, N, O), C.updateMultisampleRenderTarget(ne), C.updateRenderTargetMipmap(ne), ve.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Le = !1;
        for (let Te = 0, et = I.length; Te < et; Te++) {
          const at = I[Te], ot = at.object, Pt = at.geometry, Ze = at.material, we = at.group;
          if (Ze.side === 2 && ot.layers.test(O.layers)) {
            const _t = Ze.side;
            Ze.side = 1, Ze.needsUpdate = !0, $r(ot, N, O, Pt, Ze, we), Ze.side = _t, Ze.needsUpdate = !0, Le = !0;
          }
        }
        Le === !0 && (C.updateMultisampleRenderTarget(ne), C.updateRenderTargetMipmap(ne));
      }
      b.setRenderTarget(Se), b.setClearColor(G, B), De !== void 0 && (O.viewport = De), b.toneMapping = ye;
    }
    function Oi(E, I, N) {
      const O = I.isScene === !0 ? I.overrideMaterial : null;
      for (let U = 0, ne = E.length; U < ne; U++) {
        const ce = E[U], Se = ce.object, ye = ce.geometry, De = O === null ? ce.material : O, Le = ce.group;
        Se.layers.test(N.layers) && $r(Se, I, N, ye, De, Le);
      }
    }
    function $r(E, I, N, O, U, ne) {
      E.onBeforeRender(b, I, N, O, U, ne), E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), U.onBeforeRender(b, I, N, O, E, ne), U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1 ? (U.side = 1, U.needsUpdate = !0, b.renderBufferDirect(N, I, O, U, E, ne), U.side = 0, U.needsUpdate = !0, b.renderBufferDirect(N, I, O, U, E, ne), U.side = 2) : b.renderBufferDirect(N, I, O, U, E, ne), E.onAfterRender(b, I, N, O, U, ne);
    }
    function Gi(E, I, N) {
      I.isScene !== !0 && (I = Z);
      const O = Ce.get(E), U = p.state.lights, ne = p.state.shadowsArray, ce = U.state.version, Se = Ae.getParameters(E, U.state, ne, I, N), ye = Ae.getProgramCacheKey(Se);
      let De = O.programs;
      O.environment = E.isMeshStandardMaterial ? I.environment : null, O.fog = I.fog, O.envMap = (E.isMeshStandardMaterial ? F : M).get(E.envMap || O.environment), O.envMapRotation = O.environment !== null && E.envMap === null ? I.environmentRotation : E.envMapRotation, De === void 0 && (E.addEventListener("dispose", Xe), De = /* @__PURE__ */ new Map(), O.programs = De);
      let Le = De.get(ye);
      if (Le !== void 0) {
        if (O.currentProgram === Le && O.lightsStateVersion === ce)
          return Qr(E, Se), Le;
      } else
        Se.uniforms = Ae.getUniforms(E), E.onBeforeCompile(Se, b), Le = Ae.acquireProgram(Se, ye), De.set(ye, Le), O.uniforms = Se.uniforms;
      const Te = O.uniforms;
      return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Te.clippingPlanes = te.uniform), Qr(E, Se), O.needsLights = bl(E), O.lightsStateVersion = ce, O.needsLights && (Te.ambientLightColor.value = U.state.ambient, Te.lightProbe.value = U.state.probe, Te.directionalLights.value = U.state.directional, Te.directionalLightShadows.value = U.state.directionalShadow, Te.spotLights.value = U.state.spot, Te.spotLightShadows.value = U.state.spotShadow, Te.rectAreaLights.value = U.state.rectArea, Te.ltc_1.value = U.state.rectAreaLTC1, Te.ltc_2.value = U.state.rectAreaLTC2, Te.pointLights.value = U.state.point, Te.pointLightShadows.value = U.state.pointShadow, Te.hemisphereLights.value = U.state.hemi, Te.directionalShadowMap.value = U.state.directionalShadowMap, Te.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Te.spotShadowMap.value = U.state.spotShadowMap, Te.spotLightMatrix.value = U.state.spotLightMatrix, Te.spotLightMap.value = U.state.spotLightMap, Te.pointShadowMap.value = U.state.pointShadowMap, Te.pointShadowMatrix.value = U.state.pointShadowMatrix), O.currentProgram = Le, O.uniformsList = null, Le;
    }
    function Zr(E) {
      if (E.uniformsList === null) {
        const I = E.currentProgram.getUniforms();
        E.uniformsList = _s.seqWithValue(I.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function Qr(E, I) {
      const N = Ce.get(E);
      N.outputColorSpace = I.outputColorSpace, N.batching = I.batching, N.batchingColor = I.batchingColor, N.instancing = I.instancing, N.instancingColor = I.instancingColor, N.instancingMorph = I.instancingMorph, N.skinning = I.skinning, N.morphTargets = I.morphTargets, N.morphNormals = I.morphNormals, N.morphColors = I.morphColors, N.morphTargetsCount = I.morphTargetsCount, N.numClippingPlanes = I.numClippingPlanes, N.numIntersection = I.numClipIntersection, N.vertexAlphas = I.vertexAlphas, N.vertexTangents = I.vertexTangents, N.toneMapping = I.toneMapping;
    }
    function _l(E, I, N, O, U) {
      I.isScene !== !0 && (I = Z), C.resetTextureUnits();
      const ne = I.fog, ce = O.isMeshStandardMaterial ? I.environment : null, Se = w === null ? b.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : ut, ye = (O.isMeshStandardMaterial ? F : M).get(O.envMap || ce), De = O.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4, Le = !!N.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), Te = !!N.morphAttributes.position, et = !!N.morphAttributes.normal, at = !!N.morphAttributes.color;
      let ot = 0;
      O.toneMapped && (w === null || w.isXRRenderTarget === !0) && (ot = b.toneMapping);
      const Pt = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, Ze = Pt !== void 0 ? Pt.length : 0, we = Ce.get(O), _t = p.state.lights;
      if (j === !0 && (Q === !0 || E !== X)) {
        const Ut = E === X && O.id === D;
        te.setState(O, E, Ut);
      }
      let Qe = !1;
      O.version === we.__version ? (we.needsLights && we.lightsStateVersion !== _t.state.version || we.outputColorSpace !== Se || U.isBatchedMesh && we.batching === !1 || !U.isBatchedMesh && we.batching === !0 || U.isBatchedMesh && we.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && we.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && we.instancing === !1 || !U.isInstancedMesh && we.instancing === !0 || U.isSkinnedMesh && we.skinning === !1 || !U.isSkinnedMesh && we.skinning === !0 || U.isInstancedMesh && we.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && we.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && we.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && we.instancingMorph === !1 && U.morphTexture !== null || we.envMap !== ye || O.fog === !0 && we.fog !== ne || we.numClippingPlanes !== void 0 && (we.numClippingPlanes !== te.numPlanes || we.numIntersection !== te.numIntersection) || we.vertexAlphas !== De || we.vertexTangents !== Le || we.morphTargets !== Te || we.morphNormals !== et || we.morphColors !== at || we.toneMapping !== ot || we.morphTargetsCount !== Ze) && (Qe = !0) : (Qe = !0, we.__version = O.version);
      let Ot = we.currentProgram;
      Qe === !0 && (Ot = Gi(O, I, U));
      let Gn = !1, Dt = !1, Ds = !1;
      const lt = Ot.getUniforms(), _n = we.uniforms;
      if (Ee.useProgram(Ot.program) && (Gn = !0, Dt = !0, Ds = !0), O.id !== D && (D = O.id, Dt = !0), Gn || X !== E) {
        Ne.reverseDepthBuffer ? (_e.copy(E.projectionMatrix), Gl(_e), zl(_e), lt.setValue(R, "projectionMatrix", _e)) : lt.setValue(R, "projectionMatrix", E.projectionMatrix), lt.setValue(R, "viewMatrix", E.matrixWorldInverse);
        const Ut = lt.map.cameraPosition;
        Ut !== void 0 && Ut.setValue(R, Ie.setFromMatrixPosition(E.matrixWorld)), Ne.logarithmicDepthBuffer && lt.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(E.far + 1) / Math.LN2)
        ), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && lt.setValue(R, "isOrthographic", E.isOrthographicCamera === !0), X !== E && (X = E, Dt = !0, Ds = !0);
      }
      if (U.isSkinnedMesh) {
        lt.setOptional(R, U, "bindMatrix"), lt.setOptional(R, U, "bindMatrixInverse");
        const Ut = U.skeleton;
        Ut && (Ut.boneTexture === null && Ut.computeBoneTexture(), lt.setValue(R, "boneTexture", Ut.boneTexture, C));
      }
      U.isBatchedMesh && (lt.setOptional(R, U, "batchingTexture"), lt.setValue(R, "batchingTexture", U._matricesTexture, C), lt.setOptional(R, U, "batchingIdTexture"), lt.setValue(R, "batchingIdTexture", U._indirectTexture, C), lt.setOptional(R, U, "batchingColorTexture"), U._colorsTexture !== null && lt.setValue(R, "batchingColorTexture", U._colorsTexture, C));
      const Ls = N.morphAttributes;
      if ((Ls.position !== void 0 || Ls.normal !== void 0 || Ls.color !== void 0) && Ue.update(U, N, Ot), (Dt || we.receiveShadow !== U.receiveShadow) && (we.receiveShadow = U.receiveShadow, lt.setValue(R, "receiveShadow", U.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (_n.envMap.value = ye, _n.flipEnvMap.value = ye.isCubeTexture && ye.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && I.environment !== null && (_n.envMapIntensity.value = I.environmentIntensity), Dt && (lt.setValue(R, "toneMappingExposure", b.toneMappingExposure), we.needsLights && vl(_n, Ds), ne && O.fog === !0 && ae.refreshFogUniforms(_n, ne), ae.refreshMaterialUniforms(_n, O, J, z, p.state.transmissionRenderTarget[E.id]), _s.upload(R, Zr(we), _n, C)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (_s.upload(R, Zr(we), _n, C), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && lt.setValue(R, "center", U.center), lt.setValue(R, "modelViewMatrix", U.modelViewMatrix), lt.setValue(R, "normalMatrix", U.normalMatrix), lt.setValue(R, "modelMatrix", U.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) {
        const Ut = O.uniformsGroups;
        for (let Is = 0, xl = Ut.length; Is < xl; Is++) {
          const Jr = Ut[Is];
          L.update(Jr, Ot), L.bind(Jr, Ot);
        }
      }
      return Ot;
    }
    function vl(E, I) {
      E.ambientLightColor.needsUpdate = I, E.lightProbe.needsUpdate = I, E.directionalLights.needsUpdate = I, E.directionalLightShadows.needsUpdate = I, E.pointLights.needsUpdate = I, E.pointLightShadows.needsUpdate = I, E.spotLights.needsUpdate = I, E.spotLightShadows.needsUpdate = I, E.rectAreaLights.needsUpdate = I, E.hemisphereLights.needsUpdate = I;
    }
    function bl(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return A;
    }, this.getActiveMipmapLevel = function() {
      return y;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(E, I, N) {
      Ce.get(E.texture).__webglTexture = I, Ce.get(E.depthTexture).__webglTexture = N;
      const O = Ce.get(E);
      O.__hasExternalTextures = !0, O.__autoAllocateDepthBuffer = N === void 0, O.__autoAllocateDepthBuffer || ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(E, I) {
      const N = Ce.get(E);
      N.__webglFramebuffer = I, N.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(E, I = 0, N = 0) {
      w = E, A = I, y = N;
      let O = !0, U = null, ne = !1, ce = !1;
      if (E) {
        const ye = Ce.get(E);
        if (ye.__useDefaultFramebuffer !== void 0)
          Ee.bindFramebuffer(R.FRAMEBUFFER, null), O = !1;
        else if (ye.__webglFramebuffer === void 0)
          C.setupRenderTarget(E);
        else if (ye.__hasExternalTextures)
          C.rebindTextures(E, Ce.get(E.texture).__webglTexture, Ce.get(E.depthTexture).__webglTexture);
        else if (E.depthBuffer) {
          const Te = E.depthTexture;
          if (ye.__boundDepthTexture !== Te) {
            if (Te !== null && Ce.has(Te) && (E.width !== Te.image.width || E.height !== Te.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            C.setupDepthRenderbuffer(E);
          }
        }
        const De = E.texture;
        (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (ce = !0);
        const Le = Ce.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(Le[I]) ? U = Le[I][N] : U = Le[I], ne = !0) : E.samples > 0 && C.useMultisampledRTT(E) === !1 ? U = Ce.get(E).__webglMultisampledFramebuffer : Array.isArray(Le) ? U = Le[N] : U = Le, v.copy(E.viewport), T.copy(E.scissor), k = E.scissorTest;
      } else
        v.copy(ue).multiplyScalar(J).floor(), T.copy(oe).multiplyScalar(J).floor(), k = We;
      if (Ee.bindFramebuffer(R.FRAMEBUFFER, U) && O && Ee.drawBuffers(E, U), Ee.viewport(v), Ee.scissor(T), Ee.setScissorTest(k), ne) {
        const ye = Ce.get(E.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + I, ye.__webglTexture, N);
      } else if (ce) {
        const ye = Ce.get(E.texture), De = I || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, ye.__webglTexture, N || 0, De);
      }
      D = -1;
    }, this.readRenderTargetPixels = function(E, I, N, O, U, ne, ce) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Se = Ce.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && ce !== void 0 && (Se = Se[ce]), Se) {
        Ee.bindFramebuffer(R.FRAMEBUFFER, Se);
        try {
          const ye = E.texture, De = ye.format, Le = ye.type;
          if (!Ne.textureFormatReadable(De)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ne.textureTypeReadable(Le)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= E.width - O && N >= 0 && N <= E.height - U && R.readPixels(I, N, O, U, Be.convert(De), Be.convert(Le), ne);
        } finally {
          const ye = w !== null ? Ce.get(w).__webglFramebuffer : null;
          Ee.bindFramebuffer(R.FRAMEBUFFER, ye);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(E, I, N, O, U, ne, ce) {
      if (!(E && E.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Se = Ce.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && ce !== void 0 && (Se = Se[ce]), Se) {
        const ye = E.texture, De = ye.format, Le = ye.type;
        if (!Ne.textureFormatReadable(De))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ne.textureTypeReadable(Le))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (I >= 0 && I <= E.width - O && N >= 0 && N <= E.height - U) {
          Ee.bindFramebuffer(R.FRAMEBUFFER, Se);
          const Te = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, Te), R.bufferData(R.PIXEL_PACK_BUFFER, ne.byteLength, R.STREAM_READ), R.readPixels(I, N, O, U, Be.convert(De), Be.convert(Le), 0);
          const et = w !== null ? Ce.get(w).__webglFramebuffer : null;
          Ee.bindFramebuffer(R.FRAMEBUFFER, et);
          const at = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await Ol(R, at, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Te), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, ne), R.deleteBuffer(Te), R.deleteSync(at), ne;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(E, I = null, N = 0) {
      E.isTexture !== !0 && (gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, E = arguments[1]);
      const O = Math.pow(2, -N), U = Math.floor(E.image.width * O), ne = Math.floor(E.image.height * O), ce = I !== null ? I.x : 0, Se = I !== null ? I.y : 0;
      C.setTexture2D(E, 0), R.copyTexSubImage2D(R.TEXTURE_2D, N, 0, 0, ce, Se, U, ne), Ee.unbindTexture();
    }, this.copyTextureToTexture = function(E, I, N = null, O = null, U = 0) {
      E.isTexture !== !0 && (gs("WebGLRenderer: copyTextureToTexture function signature has changed."), O = arguments[0] || null, E = arguments[1], I = arguments[2], U = arguments[3] || 0, N = null);
      let ne, ce, Se, ye, De, Le;
      N !== null ? (ne = N.max.x - N.min.x, ce = N.max.y - N.min.y, Se = N.min.x, ye = N.min.y) : (ne = E.image.width, ce = E.image.height, Se = 0, ye = 0), O !== null ? (De = O.x, Le = O.y) : (De = 0, Le = 0);
      const Te = Be.convert(I.format), et = Be.convert(I.type);
      C.setTexture2D(I, 0), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, I.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, I.unpackAlignment);
      const at = R.getParameter(R.UNPACK_ROW_LENGTH), ot = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Pt = R.getParameter(R.UNPACK_SKIP_PIXELS), Ze = R.getParameter(R.UNPACK_SKIP_ROWS), we = R.getParameter(R.UNPACK_SKIP_IMAGES), _t = E.isCompressedTexture ? E.mipmaps[U] : E.image;
      R.pixelStorei(R.UNPACK_ROW_LENGTH, _t.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, _t.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Se), R.pixelStorei(R.UNPACK_SKIP_ROWS, ye), E.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, U, De, Le, ne, ce, Te, et, _t.data) : E.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, U, De, Le, _t.width, _t.height, Te, _t.data) : R.texSubImage2D(R.TEXTURE_2D, U, De, Le, ne, ce, Te, et, _t), R.pixelStorei(R.UNPACK_ROW_LENGTH, at), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Pt), R.pixelStorei(R.UNPACK_SKIP_ROWS, Ze), R.pixelStorei(R.UNPACK_SKIP_IMAGES, we), U === 0 && I.generateMipmaps && R.generateMipmap(R.TEXTURE_2D), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, I, N = null, O = null, U = 0) {
      E.isTexture !== !0 && (gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."), N = arguments[0] || null, O = arguments[1] || null, E = arguments[2], I = arguments[3], U = arguments[4] || 0);
      let ne, ce, Se, ye, De, Le, Te, et, at;
      const ot = E.isCompressedTexture ? E.mipmaps[U] : E.image;
      N !== null ? (ne = N.max.x - N.min.x, ce = N.max.y - N.min.y, Se = N.max.z - N.min.z, ye = N.min.x, De = N.min.y, Le = N.min.z) : (ne = ot.width, ce = ot.height, Se = ot.depth, ye = 0, De = 0, Le = 0), O !== null ? (Te = O.x, et = O.y, at = O.z) : (Te = 0, et = 0, at = 0);
      const Pt = Be.convert(I.format), Ze = Be.convert(I.type);
      let we;
      if (I.isData3DTexture)
        C.setTexture3D(I, 0), we = R.TEXTURE_3D;
      else if (I.isDataArrayTexture || I.isCompressedArrayTexture)
        C.setTexture2DArray(I, 0), we = R.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, I.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, I.unpackAlignment);
      const _t = R.getParameter(R.UNPACK_ROW_LENGTH), Qe = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Ot = R.getParameter(R.UNPACK_SKIP_PIXELS), Gn = R.getParameter(R.UNPACK_SKIP_ROWS), Dt = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ot.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, ye), R.pixelStorei(R.UNPACK_SKIP_ROWS, De), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Le), E.isDataTexture || E.isData3DTexture ? R.texSubImage3D(we, U, Te, et, at, ne, ce, Se, Pt, Ze, ot.data) : I.isCompressedArrayTexture ? R.compressedTexSubImage3D(we, U, Te, et, at, ne, ce, Se, Pt, ot.data) : R.texSubImage3D(we, U, Te, et, at, ne, ce, Se, Pt, Ze, ot), R.pixelStorei(R.UNPACK_ROW_LENGTH, _t), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Qe), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ot), R.pixelStorei(R.UNPACK_SKIP_ROWS, Gn), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Dt), U === 0 && I.generateMipmaps && R.generateMipmap(we), Ee.unbindTexture();
    }, this.initRenderTarget = function(E) {
      Ce.get(E).__webglFramebuffer === void 0 && C.setupRenderTarget(E);
    }, this.initTexture = function(E) {
      E.isCubeTexture ? C.setTextureCube(E, 0) : E.isData3DTexture ? C.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? C.setTexture2DArray(E, 0) : C.setTexture2D(E, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      A = 0, y = 0, w = null, Ee.reset(), st.reset();
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
    t.drawingBufferColorSpace = e === Ir ? "display-p3" : "srgb", t.unpackColorSpace = qe.workingColorSpace === As ? "display-p3" : "srgb";
  }
}
class Va extends it {
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
class Zd {
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
class Br {
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
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Br(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const Wa = /* @__PURE__ */ new P(), ja = /* @__PURE__ */ new Ve(), Xa = /* @__PURE__ */ new Ve(), Qd = /* @__PURE__ */ new P(), qa = /* @__PURE__ */ new Re(), os = /* @__PURE__ */ new P(), lr = /* @__PURE__ */ new Qt(), Ya = /* @__PURE__ */ new Re(), cr = /* @__PURE__ */ new Es();
class Jd extends vt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = ea, this.bindMatrix = new Re(), this.bindMatrixInverse = new Re(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Zt()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, os), this.boundingBox.expandByPoint(os);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, os), this.boundingSphere.expandByPoint(os);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), lr.copy(this.boundingSphere), lr.applyMatrix4(i), e.ray.intersectsSphere(lr) !== !1 && (Ya.copy(i).invert(), cr.copy(e.ray).applyMatrix4(Ya), !(this.boundingBox !== null && cr.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, cr)));
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
    super.updateMatrixWorld(e), this.bindMode === ea ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Sl ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    ja.fromBufferAttribute(i.attributes.skinIndex, e), Xa.fromBufferAttribute(i.attributes.skinWeight, e), Wa.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = Xa.getComponent(r);
      if (a !== 0) {
        const o = ja.getComponent(r);
        qa.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Qd.copy(Wa).applyMatrix4(qa), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Wo extends it {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class ws extends dt {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = 1003, h = 1003, f, u) {
    super(null, a, o, l, c, h, i, r, f, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Ka = /* @__PURE__ */ new Re(), ep = /* @__PURE__ */ new Re();
class Cs {
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
        this.boneInverses.push(new Re());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Re();
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
      const o = e[r] ? e[r].matrixWorld : ep;
      Ka.multiplyMatrices(o, t[r]), Ka.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Cs(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new ws(t, e, e, 1023, 1015);
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
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new Wo()), this.bones.push(a), this.boneInverses.push(new Re().fromArray(e.boneInverses[n]));
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
class fn extends Mt {
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
const ei = /* @__PURE__ */ new Re(), $a = /* @__PURE__ */ new Re(), ls = [], Za = /* @__PURE__ */ new Zt(), tp = /* @__PURE__ */ new Re(), bi = /* @__PURE__ */ new vt(), xi = /* @__PURE__ */ new Qt();
class np extends vt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new fn(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, tp);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Zt()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ei), Za.copy(e.boundingBox).applyMatrix4(ei), this.boundingBox.union(Za);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Qt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, ei), xi.copy(e.boundingSphere).applyMatrix4(ei), this.boundingSphere.union(xi);
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
    if (bi.geometry = this.geometry, bi.material = this.material, bi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), xi.copy(this.boundingSphere), xi.applyMatrix4(n), e.ray.intersectsSphere(xi) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, ei), $a.multiplyMatrices(n, ei), bi.matrixWorld = $a, bi.raycast(e, ls);
        for (let a = 0, o = ls.length; a < o; a++) {
          const l = ls[a];
          l.instanceId = r, l.object = this, t.push(l);
        }
        ls.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new fn(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new ws(new Float32Array(i * this.count), i, this.count, 1028, 1015));
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
class jo extends $t {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new re(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ms = /* @__PURE__ */ new P(), ys = /* @__PURE__ */ new P(), Qa = /* @__PURE__ */ new Re(), Si = /* @__PURE__ */ new Es(), cs = /* @__PURE__ */ new Qt(), hr = /* @__PURE__ */ new P(), Ja = /* @__PURE__ */ new P();
class Or extends it {
  constructor(e = new Bt(), t = new jo()) {
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
        Ms.fromBufferAttribute(t, i - 1), ys.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Ms.distanceTo(ys);
      e.setAttribute("lineDistance", new Xt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), cs.copy(n.boundingSphere), cs.applyMatrix4(i), cs.radius += r, e.ray.intersectsSphere(cs) === !1) return;
    Qa.copy(i).invert(), Si.copy(e.ray).applyMatrix4(Qa);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, u = n.attributes.position;
    if (h !== null) {
      const d = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let _ = d, p = g - 1; _ < p; _ += c) {
        const m = h.getX(_), S = h.getX(_ + 1), b = hs(this, e, Si, l, m, S);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), p = h.getX(d), m = hs(this, e, Si, l, _, p);
        m && t.push(m);
      }
    } else {
      const d = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let _ = d, p = g - 1; _ < p; _ += c) {
        const m = hs(this, e, Si, l, _, _ + 1);
        m && t.push(m);
      }
      if (this.isLineLoop) {
        const _ = hs(this, e, Si, l, g - 1, d);
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
function hs(s, e, t, n, i, r) {
  const a = s.geometry.attributes.position;
  if (Ms.fromBufferAttribute(a, i), ys.fromBufferAttribute(a, r), t.distanceSqToSegment(Ms, ys, hr, Ja) > n) return;
  hr.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(hr);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Ja.clone().applyMatrix4(s.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s
    };
}
const eo = /* @__PURE__ */ new P(), to = /* @__PURE__ */ new P();
class ip extends Or {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        eo.fromBufferAttribute(t, i), to.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + eo.distanceTo(to);
      e.setAttribute("lineDistance", new Xt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class sp extends Or {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Xo extends $t {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new re(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const no = /* @__PURE__ */ new Re(), yr = /* @__PURE__ */ new Es(), us = /* @__PURE__ */ new Qt(), fs = /* @__PURE__ */ new P();
class rp extends it {
  constructor(e = new Bt(), t = new Xo()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), us.copy(n.boundingSphere), us.applyMatrix4(i), us.radius += r, e.ray.intersectsSphere(us) === !1) return;
    no.copy(i).invert(), yr.copy(e.ray).applyMatrix4(no);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, f = n.attributes.position;
    if (c !== null) {
      const u = Math.max(0, a.start), d = Math.min(c.count, a.start + a.count);
      for (let g = u, _ = d; g < _; g++) {
        const p = c.getX(g);
        fs.fromBufferAttribute(f, p), io(fs, p, l, i, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start), d = Math.min(f.count, a.start + a.count);
      for (let g = u, _ = d; g < _; g++)
        fs.fromBufferAttribute(f, g), io(fs, g, l, i, e, t, this);
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
function io(s, e, t, n, i, r, a) {
  const o = yr.distanceSqToPoint(s);
  if (o < t) {
    const l = new P();
    yr.closestPointToPoint(s, l), l.applyMatrix4(n);
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
class ap extends Ft {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class dn extends $t {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new re(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new re(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Oe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new qt(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Jt extends dn {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Oe(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return St(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new re(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new re(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new re(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
function ds(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function op(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function lp(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function so(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[a++] = s[o + l];
  }
  return i;
}
function qo(s, e, t, n) {
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
class ki {
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
class cp extends ki {
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
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, f = this._offsetNext, u = this._weightPrev, d = this._weightNext, g = (n - t) / (i - t), _ = g * g, p = _ * g, m = -u * p + 2 * u * _ - u * g, S = (1 + u) * p + (-1.5 - 2 * u) * _ + (-0.5 + u) * g + 1, b = (-1 - d) * p + (1.5 + d) * _ + 0.5 * g, x = d * p - d * _;
    for (let A = 0; A !== o; ++A)
      r[A] = m * a[h + A] + S * a[c + A] + b * a[l + A] + x * a[f + A];
    return r;
  }
}
class Yo extends ki {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), f = 1 - h;
    for (let u = 0; u !== o; ++u)
      r[u] = a[c + u] * f + a[l + u] * h;
    return r;
  }
}
class hp extends ki {
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
    this.name = e, this.times = ds(t, this.TimeBufferType), this.values = ds(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
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
        times: ds(e.times, Array),
        values: ds(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new hp(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Yo(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new cp(this.times, this.values, this.getValueSize(), e);
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
    if (i !== void 0 && op(i))
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
          const f = o * n, u = f - n, d = f + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[f + g];
            if (_ !== t[u + g] || _ !== t[d + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const f = o * n, u = a * n;
          for (let d = 0; d !== n; ++d)
            t[u + d] = t[f + d];
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
class ui extends en {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ui.prototype.ValueTypeName = "bool";
ui.prototype.ValueBufferType = Array;
ui.prototype.DefaultInterpolation = 2300;
ui.prototype.InterpolantFactoryMethodLinear = void 0;
ui.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ko extends en {
}
Ko.prototype.ValueTypeName = "color";
class ai extends en {
}
ai.prototype.ValueTypeName = "number";
class up extends ki {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4)
      Rt.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class oi extends en {
  InterpolantFactoryMethodLinear(e) {
    return new up(this.times, this.values, this.getValueSize(), e);
  }
}
oi.prototype.ValueTypeName = "quaternion";
oi.prototype.InterpolantFactoryMethodSmooth = void 0;
class fi extends en {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
fi.prototype.ValueTypeName = "string";
fi.prototype.ValueBufferType = Array;
fi.prototype.DefaultInterpolation = 2300;
fi.prototype.InterpolantFactoryMethodLinear = void 0;
fi.prototype.InterpolantFactoryMethodSmooth = void 0;
class li extends en {
}
li.prototype.ValueTypeName = "vector";
class Ar {
  constructor(e = "", t = -1, n = [], i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = jt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(dp(n[a]).scale(i));
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
      const h = lp(l);
      l = so(l, 1, h), c = so(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), a.push(
        new ai(
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
        const f = h[1];
        let u = i[f];
        u || (i[f] = u = []), u.push(c);
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
    const n = function(f, u, d, g, _) {
      if (d.length !== 0) {
        const p = [], m = [];
        qo(d, p, m, g), p.length !== 0 && _.push(new f(u, p, m));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let f = 0; f < c.length; f++) {
      const u = c[f].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const d = {};
          let g;
          for (g = 0; g < u.length; g++)
            if (u[g].morphTargets)
              for (let _ = 0; _ < u[g].morphTargets.length; _++)
                d[u[g].morphTargets[_]] = -1;
          for (const _ in d) {
            const p = [], m = [];
            for (let S = 0; S !== u[g].morphTargets.length; ++S) {
              const b = u[g];
              p.push(b.time), m.push(b.morphTarget === _ ? 1 : 0);
            }
            i.push(new ai(".morphTargetInfluence[" + _ + "]", p, m));
          }
          l = d.length * a;
        } else {
          const d = ".bones[" + t[f].name + "]";
          n(
            li,
            d + ".position",
            u,
            "pos",
            i
          ), n(
            oi,
            d + ".quaternion",
            u,
            "rot",
            i
          ), n(
            li,
            d + ".scale",
            u,
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
function fp(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ai;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return li;
    case "color":
      return Ko;
    case "quaternion":
      return oi;
    case "bool":
    case "boolean":
      return ui;
    case "string":
      return fi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function dp(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = fp(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    qo(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const En = {
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
class pp {
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
    }, this.addHandler = function(h, f) {
      return c.push(h, f), this;
    }, this.removeHandler = function(h) {
      const f = c.indexOf(h);
      return f !== -1 && c.splice(f, 2), this;
    }, this.getHandler = function(h) {
      for (let f = 0, u = c.length; f < u; f += 2) {
        const d = c[f], g = c[f + 1];
        if (d.global && (d.lastIndex = 0), d.test(h))
          return g;
      }
      return null;
    };
  }
}
const mp = /* @__PURE__ */ new pp();
class di {
  constructor(e) {
    this.manager = e !== void 0 ? e : mp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
di.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const ln = {};
class gp extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class $o extends di {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = En.get(e);
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
        const h = ln[e], f = c.body.getReader(), u = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), d = u ? parseInt(u) : 0, g = d !== 0;
        let _ = 0;
        const p = new ReadableStream({
          start(m) {
            S();
            function S() {
              f.read().then(({ done: b, value: x }) => {
                if (b)
                  m.close();
                else {
                  _ += x.byteLength;
                  const A = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: d });
                  for (let y = 0, w = h.length; y < w; y++) {
                    const D = h[y];
                    D.onProgress && D.onProgress(A);
                  }
                  m.enqueue(x), S();
                }
              }, (b) => {
                m.error(b);
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new gp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
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
            const f = /charset="?([^;"\s]*)"?/i.exec(o), u = f && f[1] ? f[1].toLowerCase() : void 0, d = new TextDecoder(u);
            return c.arrayBuffer().then((g) => d.decode(g));
          }
      }
    }).then((c) => {
      En.add(e, c);
      const h = ln[e];
      delete ln[e];
      for (let f = 0, u = h.length; f < u; f++) {
        const d = h[f];
        d.onLoad && d.onLoad(c);
      }
    }).catch((c) => {
      const h = ln[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete ln[e];
      for (let f = 0, u = h.length; f < u; f++) {
        const d = h[f];
        d.onError && d.onError(c);
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
class Zo extends di {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = En.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const o = Ii("img");
    function l() {
      h(), En.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(f) {
      h(), i && i(f), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class Fi extends di {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new dt(), a = new Zo(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Rs extends it {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new re(e), this.intensity = t;
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
const ur = /* @__PURE__ */ new Re(), ro = /* @__PURE__ */ new P(), ao = /* @__PURE__ */ new P();
class Gr {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Oe(512, 512), this.map = null, this.mapPass = null, this.matrix = new Re(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Nr(), this._frameExtents = new Oe(1, 1), this._viewportCount = 1, this._viewports = [
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
    ro.setFromMatrixPosition(e.matrixWorld), t.position.copy(ro), ao.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ao), t.updateMatrixWorld(), ur.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ur), n.set(
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
    ), n.multiply(ur);
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
class _p extends Gr {
  constructor() {
    super(new Ct(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = si * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class vp extends Rs {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new _p();
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
const oo = /* @__PURE__ */ new Re(), Mi = /* @__PURE__ */ new P(), fr = /* @__PURE__ */ new P();
class bp extends Gr {
  constructor() {
    super(new Ct(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Oe(4, 2), this._viewportCount = 6, this._viewports = [
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
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Mi.setFromMatrixPosition(e.matrixWorld), n.position.copy(Mi), fr.copy(n.position), fr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(fr), n.updateMatrixWorld(), i.makeTranslation(-Mi.x, -Mi.y, -Mi.z), oo.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(oo);
  }
}
class xp extends Rs {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new bp();
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
class Sp extends Gr {
  constructor() {
    super(new Ni(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class vs extends Rs {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it(), this.shadow = new Sp();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Mp extends Rs {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Li {
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
class yp extends Bt {
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
class Qo extends di {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = En.get(e);
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
      return En.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), En.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    En.add(e, l), r.manager.itemStart(e);
  }
}
class Ap {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = lo(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = lo();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function lo() {
  return performance.now();
}
class Ep {
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
    Rt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, r) {
    const a = this._workIndex * r;
    Rt.multiplyQuaternionsFlat(e, a, e, t, e, n), Rt.slerpFlat(e, t, e, t, e, a, i);
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
const zr = "\\[\\]\\.:\\/", Tp = new RegExp("[" + zr + "]", "g"), Hr = "[^" + zr + "]", wp = "[^" + zr.replace("\\.", "") + "]", Cp = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Hr), Rp = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", wp), Pp = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Hr), Dp = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Hr), Lp = new RegExp(
  "^" + Cp + Rp + Pp + Dp + "$"
), Ip = ["material", "materials", "bones", "map"];
class Fp {
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
    return e.replace(/\s/g, "_").replace(Tp, "");
  }
  static parseTrackName(e) {
    const t = Lp.exec(e);
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
      Ip.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
Je.Composite = Fp;
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
class Up {
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
          for (let h = 0, f = l.length; h !== f; ++h)
            l[h].evaluate(a), c[h].accumulateAdditive(o);
          break;
        case 2500:
        default:
          for (let h = 0, f = l.length; h !== f; ++h)
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
const Np = new Float32Array(1);
class kp extends On {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, a = e._propertyBindings, o = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let h = c[l];
    h === void 0 && (h = {}, c[l] = h);
    for (let f = 0; f !== r; ++f) {
      const u = i[f], d = u.name;
      let g = h[d];
      if (g !== void 0)
        ++g.referenceCount, a[f] = g;
      else {
        if (g = a[f], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, d));
          continue;
        }
        const _ = t && t._propertyBindings[f].binding.parsedPath;
        g = new Ep(
          Je.create(n, d, _),
          u.ValueTypeName,
          u.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, l, d), a[f] = g;
      }
      o[f].resultBuffer = g.buffer;
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
    const f = o.actionByRoot, u = (e._localRoot || this._root).uuid;
    delete f[u], l.length === 0 && delete a[r], this._removeInactiveBindingsForAction(e);
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
    return n === void 0 && (n = new Yo(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Np
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
    let a = typeof e == "string" ? Ar.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = 2500), l !== void 0) {
      const f = l.actionByRoot[r];
      if (f !== void 0 && f.blendMode === n)
        return f;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const h = new Up(this, a, t, n);
    return this._bindAction(h, c), this._addInactiveAction(h, o, r), h;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, r = typeof e == "string" ? Ar.findByName(n, e) : e, a = r ? r.uuid : e, o = this._actionsByClip[a];
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
        const h = c._cacheIndex, f = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, f._cacheIndex = h, t[h] = f, t.pop(), this._removeInactiveBindingsForAction(c);
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
  revision: Lr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Lr);
const Bp = {
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
class Bi {
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
const Op = new Ni(-1, 1, 1, -1, 0, 1);
class Gp extends Bt {
  constructor() {
    super(), this.setAttribute("position", new Xt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Xt([0, 2, 0, 0, 2, 0], 2));
  }
}
const zp = new Gp();
class Jo {
  constructor(e) {
    this._mesh = new vt(zp, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Op);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class el extends Bi {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof Ft ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Ur.clone(e.uniforms), this.material = new Ft({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Jo(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class co extends Bi {
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
class Hp extends Bi {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Vp {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new Oe());
      this._width = n.width, this._height = n.height, t = new gn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: 1016 }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new el(Bp), this.copyPass.material.blending = 0, this.clock = new Ap();
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
        co !== void 0 && (a instanceof co ? n = !0 : a instanceof Hp && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Oe());
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
class Wp extends Bi {
  constructor(e, t, n = null, i = null, r = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = r, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new re();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let r, a;
    this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), e.autoClear = i;
  }
}
const jp = {
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
class Xp extends Bi {
  constructor() {
    super();
    const e = jp;
    this.uniforms = Ur.clone(e.uniforms), this.material = new ap({
      name: e.name,
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    }), this.fsQuad = new Jo(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, n) {
    this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, qe.getTransfer(this._outputColorSpace) === rt && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === 7 && (this.material.defines.NEUTRAL_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
const qp = 1.2, Yp = 20, Kp = 0.33, $p = "#fcfeff", Zp = 0.75, Qp = 1.9, Jp = 0.36, em = 0.9, tm = "#fefdfb", nm = 1.9, im = 153, sm = "#999897", rm = 0.6, am = 168, om = -13, lm = 1.2, cm = {
  ambientIntensity: qp,
  bloomClamp: Yp,
  bloomSpread: Kp,
  colorFilter: $p,
  envIntensity: Zp,
  exposure: Qp,
  glowStrength: Jp,
  glowThreshold: em,
  mainColor: tm,
  mainIntensity: nm,
  mainRotX: im,
  rim2Color: sm,
  rim2Intensity: rm,
  rim2RotX: am,
  rim2RotY: om,
  rimIntensity: lm
}, hm = 40, um = -7, fm = {
  y: 0.84,
  z: 2.22,
  rotationX: -5
}, dm = {
  fov: hm,
  avatarRotationY: um,
  view: fm
}, yi = dm, pm = {
  // Renderer
  // 기본 화면 = 순수 렌더 (2026-11-20 사용자 결정 "이게 정본" — Studio 씬·시뮬레이터·웹이 같은 화면). 노출·Color Filter·블룸 값은 한 묶음:
  // 12착장을 Unity 렌더와 대조해 맞춘 값이고, 파츠 .mat 수치(헤어 림·금속·조명 반사·발광 세기)가 이 값 기준이다. 바꾸면 파츠를 다시 맞춰야 한다.
  // Studio 패널 기본값(viewport/unity-bloom.ts UNITY_LOOK_GLOW·PURE_LOOK)과 같아야 한다 — Studio tests/look-sync.test.ts 가 대조.
  toneMappingExposure: 1.27,
  // 화면 전체에 곱하는 색 (Studio Post Processing > Color Filter)
  colorFilter: "#f7fbff",
  // Main Light (Unity: pos(0,0,0), rot(153.055, 6.881, 0.955), intensity=1.05)
  mainLight: {
    color: "#fefbf1",
    intensity: 3.5,
    unityIntensity: 1.05,
    // Unity 원본 intensity (커스텀 셰이더 라이트 보정용)
    rotation: { x: 153.055, y: 12, z: 0.955 }
  },
  // Rim Light (Unity: pos(0.02, 0.578, 0.534), rot(205.607, -144.941, 90.515), intensity=0.7)
  rimLight: {
    color: "#81c3f3",
    intensity: 1.5,
    rotation: { x: 205.607, y: -144.941, z: 90.515 }
  },
  // 림 라이트 2 — Studio Environment 의 Rim Light 2. 세기 0 이면 조명을 만들지 않는다 (기본)
  rimLight2: {
    color: "#ffffff",
    intensity: 0,
    rotation: { x: 25, y: 160, z: 0 }
  },
  // 환경 반사 세기 (scene.environmentIntensity)
  envIntensity: 1,
  // Ambient Light
  ambient: {
    color: "#6e6b68",
    intensity: 1
  },
  // Shadow
  shadow: {
    mapSize: 2048,
    bias: -2e-3,
    normalBias: 0.02,
    cameraNear: 0.1,
    cameraFar: 10,
    cameraLeft: -1.5,
    cameraRight: 1.5,
    cameraTop: 2,
    cameraBottom: -0.5,
    groundOpacity: 0.3
  },
  // Bloom — 이미시브 전용 셀렉티브 블룸 (selectiveBloom.ts, Unity URP HDR 블룸 구조).
  // 발광 메시만 압축 전 HDR 로 별도 렌더한 버퍼에 블룸 → 본 화면 가산.
  // Unity 볼륨 실측: threshold 0.45 / intensity 0.18 / scatter 0.7 에 맞춰 캘리브레이션.
  bloom: {
    strength: 0.18,
    radius: 0.7,
    threshold: 0.45,
    // (예전 화면 전용) 번짐 단계 수 = Unity 프로필 max(maxIterations 6 − skipIterations 8, 1) = 1 → 번짐 거의 없음. 넓은 번짐을 원하면 2~5
    iterations: 1,
    // 블룸이 받는 밝기 상한 (Studio Post Processing > Clamp) — 발광 세기가 아주 높은 파츠가 넓게 번지는 것을 막는다
    clamp: 8
  },
  // Environment Map
  envMapColor: "#6e6b68",
  // Gradient Background (RuntimeGradient.shader)
  gradient: {
    color: "#565143",
    highlightIntensity: 0.32,
    highlightPosition: [0.42, 0.13],
    highlightSize: 1.37,
    highlightSoftness: 0.5,
    shadowIntensity: 0,
    shadowPosition: [0.17, 0.78],
    shadowSize: 1.49,
    overallContrast: 0.5,
    colorSaturation: 0.35,
    directionalInfluence: 0.02
  },
  // LiftGammaGain
  liftGammaGain: {
    invGamma: [1 / 1.02, 1 / 1.02, 1 / 1.02],
    gain: [1.1, 1.1, 1.1]
  },
  // Light distance (라이트 위치 계산용)
  lightDist: 5,
  // 웹 컴포넌트 기본 카메라/아바타 설정 — 원본 = camera-config.json (Avatar Studio 카메라 패널에서 편집)
  camera: {
    positionY: yi.view.y,
    positionZ: yi.view.z,
    rotationX: yi.view.rotationX,
    // pitch (도) — 처음 로드 때만
    fov: yi.fov
  },
  avatar: {
    rotationY: yi.avatarRotationY
    // Y축 회전 (도)
  }
};
function mm(s, e) {
  const t = JSON.parse(JSON.stringify(s));
  if (!e) return t;
  const n = (a) => typeof e[a] == "number" && Number.isFinite(e[a]) ? e[a] : void 0, i = (a) => typeof e[a] == "string" && /^#[0-9a-f]{6}$/i.test(e[a]) ? e[a].toLowerCase() : void 0, r = (a, o) => {
    a !== void 0 && o(a);
  };
  return r(n("exposure"), (a) => {
    t.toneMappingExposure = a;
  }), r(i("colorFilter"), (a) => {
    t.colorFilter = a;
  }), r(n("mainIntensity"), (a) => {
    t.mainLight.intensity = a;
  }), r(i("mainColor"), (a) => {
    t.mainLight.color = a;
  }), r(n("mainRotX"), (a) => {
    t.mainLight.rotation.x = a;
  }), r(n("mainRotY"), (a) => {
    t.mainLight.rotation.y = a;
  }), r(n("rimIntensity"), (a) => {
    t.rimLight.intensity = a;
  }), r(i("rimColor"), (a) => {
    t.rimLight.color = a;
  }), r(n("rimRotX"), (a) => {
    t.rimLight.rotation.x = a;
  }), r(n("rimRotY"), (a) => {
    t.rimLight.rotation.y = a;
  }), r(n("rim2Intensity"), (a) => {
    t.rimLight2.intensity = a;
  }), r(i("rim2Color"), (a) => {
    t.rimLight2.color = a;
  }), r(n("rim2RotX"), (a) => {
    t.rimLight2.rotation.x = a;
  }), r(n("rim2RotY"), (a) => {
    t.rimLight2.rotation.y = a;
  }), r(n("ambientIntensity"), (a) => {
    t.ambient.intensity = a;
  }), e.ambientOn === !1 && (t.ambient.intensity = 0), r(n("envIntensity"), (a) => {
    t.envIntensity = a;
  }), r(n("glowStrength"), (a) => {
    t.bloom.strength = Math.max(0, a);
  }), r(n("glowThreshold"), (a) => {
    t.bloom.threshold = Math.max(0, a);
  }), r(n("bloomSpread"), (a) => {
    t.bloom.radius = Math.min(1, Math.max(0, a));
  }), r(n("bloomClamp"), (a) => {
    t.bloom.clamp = Math.min(100, Math.max(0.1, a));
  }), e.bloomOn === !1 && (t.bloom.strength = 0), r(i("gradColor"), (a) => {
    t.gradient.color = a;
  }), t;
}
const gm = /* @__PURE__ */ Object.assign({ "./scene-env.json": cm }), _m = Object.values(gm)[0] ?? null, Et = mm(pm, _m), Vr = (s) => s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4), vm = [1, 3, 5].map((s) => Vr(parseInt(Et.colorFilter.slice(s, s + 2), 16) / 255).toFixed(5)).join(", "), bm = (
  /* glsl */
  `{ c = max(c, 0.0) * vec3(${vm}); }`
), xm = [1, 3, 5].map((s) => (1 / (Et.toneMappingExposure * Vr(parseInt(Et.colorFilter.slice(s, s + 2), 16) / 255))).toFixed(5)).join(", "), Sm = (
  /* glsl */
  `
uniform vec3 flatColor; uniform float flatOn; uniform float flatAspect;
vec3 ozFlatL2S(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
vec3 ozFlatS2L(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 ozFlatBg(vec2 uv) {
    vec3 s = ozFlatL2S(flatColor);
    float x = uv.x * 2.0 - 1.0, y = uv.y * 2.0 - 1.0;
    float f = 0.0, xp = 1.0;
    f += xp * ((((((2.163 * y + 2.528) * y + -6.177) * y + -4.135) * y + 3.939) * y + 0.187) * y + 0.026); xp *= x;
    f += xp * (((((-2.831 * y + 1.598) * y + 4.696) * y + -3.015) * y + -2.001) * y + 0.687); xp *= x;
    f += xp * ((((2.640 * y + 0.550) * y + -4.745) * y + 0.396) * y + 1.046); xp *= x;
    f += xp * (((-0.429 * y + 0.059) * y + 0.135) * y + 0.702); xp *= x;
    f += xp * ((1.001 * y + -1.160) * y + -3.574); xp *= x;
    f += xp * (0.314 * y + -0.287); xp *= x;
    f += xp * (1.643); xp *= x;
    f = clamp(f, -4.0, 1.8);
    vec3 mid = 0.2682 + 0.6263 * s;
    float l = dot(mid, vec3(0.299, 0.587, 0.114));
    s = l * (1.0 + 0.0966 * f) + (mid - l) * (1.0 - 0.055 * f);
    return ozFlatS2L(clamp(s, 0.0, 1.0)) * vec3(${xm});
}`
);
[1, 3, 5].map((s) => Vr(parseInt(Et.gradient.color.slice(s, s + 2), 16) / 255));
function ho(s, e) {
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
class tl extends di {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Tm(t);
    }), this.register(function(t) {
      return new wm(t);
    }), this.register(function(t) {
      return new Nm(t);
    }), this.register(function(t) {
      return new km(t);
    }), this.register(function(t) {
      return new Bm(t);
    }), this.register(function(t) {
      return new Rm(t);
    }), this.register(function(t) {
      return new Pm(t);
    }), this.register(function(t) {
      return new Dm(t);
    }), this.register(function(t) {
      return new Lm(t);
    }), this.register(function(t) {
      return new Em(t);
    }), this.register(function(t) {
      return new Im(t);
    }), this.register(function(t) {
      return new Cm(t);
    }), this.register(function(t) {
      return new Um(t);
    }), this.register(function(t) {
      return new Fm(t);
    }), this.register(function(t) {
      return new ym(t);
    }), this.register(function(t) {
      return new Om(t);
    }), this.register(function(t) {
      return new Gm(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const c = Li.extractUrlBase(e);
      a = Li.resolveURL(c, this.path);
    } else
      a = Li.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new $o(this.manager);
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
      if (l.decode(new Uint8Array(e, 0, 4)) === nl) {
        try {
          a[He.KHR_BINARY_GLTF] = new zm(e);
        } catch (f) {
          i && i(f);
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
    const c = new eg(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const f = this.pluginCallbacks[h](c);
      f.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[f.name] = f, a[f.name] = !0;
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const f = r.extensionsUsed[h], u = r.extensionsRequired || [];
        switch (f) {
          case He.KHR_MATERIALS_UNLIT:
            a[f] = new Am();
            break;
          case He.KHR_DRACO_MESH_COMPRESSION:
            a[f] = new Hm(r, this.dracoLoader);
            break;
          case He.KHR_TEXTURE_TRANSFORM:
            a[f] = new Vm();
            break;
          case He.KHR_MESH_QUANTIZATION:
            a[f] = new Wm();
            break;
          default:
            u.indexOf(f) >= 0 && o[f] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".');
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
function Mm() {
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
class ym {
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
    const h = new re(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], ut);
    const f = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new vs(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new xp(h), c.distance = f;
        break;
      case "spot":
        c = new vp(h), c.distance = f, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, un(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
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
class Am {
  constructor() {
    this.name = He.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Bn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new re(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], ut), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, ft));
    }
    return Promise.all(i);
  }
}
class Em {
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
class Tm {
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
      t.clearcoatNormalScale = new Oe(o, o);
    }
    return Promise.all(r);
  }
}
class wm {
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
class Cm {
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
class Rm {
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
    t.sheenColor = new re(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], ut);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, ft)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class Pm {
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
class Dm {
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
    return t.attenuationColor = new re().setRGB(o[0], o[1], o[2], ut), Promise.all(r);
  }
}
class Lm {
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
class Im {
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
    return t.specularColor = new re().setRGB(o[0], o[1], o[2], ut), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, ft)), Promise.all(r);
  }
}
class Fm {
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
class Um {
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
class Nm {
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
class km {
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
class Bm {
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
class Om {
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
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, f = i.byteStride, u = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, f, u, i.mode, i.filter).then(function(d) {
          return d.buffer;
        }) : a.ready.then(function() {
          const d = new ArrayBuffer(h * f);
          return a.decodeGltfBuffer(new Uint8Array(d), h, f, u, i.mode, i.filter), d;
        });
      });
    } else
      return null;
  }
}
class Gm {
  constructor(e) {
    this.name = He.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== kt.TRIANGLES && c.mode !== kt.TRIANGLE_STRIP && c.mode !== kt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a)
      o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), f = h.isGroup ? h.children : [h], u = c[0].count, d = [];
      for (const g of f) {
        const _ = new Re(), p = new P(), m = new Rt(), S = new P(1, 1, 1), b = new np(g.geometry, g.material, u);
        for (let x = 0; x < u; x++)
          l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, x), l.ROTATION && m.fromBufferAttribute(l.ROTATION, x), l.SCALE && S.fromBufferAttribute(l.SCALE, x), b.setMatrixAt(x, _.compose(p, m, S));
        for (const x in l)
          if (x === "_COLOR_0") {
            const A = l[x];
            b.instanceColor = new fn(A.array, A.itemSize, A.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && g.geometry.setAttribute(x, l[x]);
        it.prototype.copy.call(b, g), this.parser.assignFinalMaterial(b), d.push(b);
      }
      return h.isGroup ? (h.clear(), h.add(...d), h) : d[0];
    }));
  }
}
const nl = "glTF", Ai = 12, uo = { JSON: 1313821514, BIN: 5130562 };
class zm {
  constructor(e) {
    this.name = He.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ai), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== nl)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Ai, r = new DataView(e, Ai);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const l = r.getUint32(a, !0);
      if (a += 4, l === uo.JSON) {
        const c = new Uint8Array(e, Ai + a, o);
        this.content = n.decode(c);
      } else if (l === uo.BIN) {
        const c = Ai + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Hm {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = He.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const f = Er[h] || h.toLowerCase();
      o[f] = a[h];
    }
    for (const h in e.attributes) {
      const f = Er[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const u = n.accessors[e.attributes[h]], d = ii[u.componentType];
        c[f] = d.name, l[f] = u.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(f, u) {
        i.decodeDracoFile(h, function(d) {
          for (const g in d.attributes) {
            const _ = d.attributes[g], p = l[g];
            p !== void 0 && (_.normalized = p);
          }
          f(d);
        }, o, c, ut, u);
      });
    });
  }
}
class Vm {
  constructor() {
    this.name = He.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Wm {
  constructor() {
    this.name = He.KHR_MESH_QUANTIZATION;
  }
}
class il extends ki {
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
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, f = (n - t) / h, u = f * f, d = u * f, g = e * c, _ = g - c, p = -2 * d + 3 * u, m = d - u, S = 1 - p, b = m - u + f;
    for (let x = 0; x !== o; x++) {
      const A = a[_ + x + o], y = a[_ + x + l] * h, w = a[g + x + o], D = a[g + x] * h;
      r[x] = S * A + b * y + p * w + m * D;
    }
    return r;
  }
}
const jm = new Rt();
class Xm extends il {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return jm.fromArray(r).normalize().toArray(r), r;
  }
}
const kt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, ii = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, fo = {
  9728: 1003,
  9729: 1006,
  9984: 1004,
  9985: 1007,
  9986: 1005,
  9987: 1008
}, po = {
  33071: 1001,
  33648: 1002,
  10497: 1e3
}, dr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Er = {
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
}, An = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, qm = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: 2301,
  STEP: 2300
}, pr = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ym(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new dn({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), s.DefaultMaterial;
}
function In(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function un(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Km(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const f = e[c];
    if (f.POSITION !== void 0 && (n = !0), f.NORMAL !== void 0 && (i = !0), f.COLOR_0 !== void 0 && (r = !0), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const f = e[c];
    if (n) {
      const u = f.POSITION !== void 0 ? t.getDependency("accessor", f.POSITION) : s.attributes.position;
      a.push(u);
    }
    if (i) {
      const u = f.NORMAL !== void 0 ? t.getDependency("accessor", f.NORMAL) : s.attributes.normal;
      o.push(u);
    }
    if (r) {
      const u = f.COLOR_0 !== void 0 ? t.getDependency("accessor", f.COLOR_0) : s.attributes.color;
      l.push(u);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], f = c[1], u = c[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = f), r && (s.morphAttributes.color = u), s.morphTargetsRelative = !0, s;
  });
}
function $m(s, e) {
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
function Zm(s) {
  let e;
  const t = s.extensions && s.extensions[He.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + mr(t.attributes) : e = s.indices + ":" + mr(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + mr(s.targets[n]);
  return e;
}
function mr(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Tr(s) {
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
function Qm(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Jm = new Re();
class eg {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Mm(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, r = !1, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && a < 98 ? this.textureLoader = new Fi(this.options.manager) : this.textureLoader = new Qo(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new $o(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return In(r, o, i), un(o, i), Promise.all(n._invokeAll(function(l) {
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
      n.load(Li.resolveURL(t.uri, i.path), r, void 0, function() {
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
      const a = dr[i.type], o = ii[i.componentType], l = i.normalized === !0, c = new o(i.count * a);
      return Promise.resolve(new Mt(c, a, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], l = dr[i.type], c = ii[i.componentType], h = c.BYTES_PER_ELEMENT, f = h * l, u = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, p;
      if (d && d !== f) {
        const m = Math.floor(u / d), S = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + m + ":" + i.count;
        let b = t.cache.get(S);
        b || (_ = new c(o, m * d, i.count * d / h), b = new Zd(_, d / h), t.cache.add(S, b)), p = new Br(b, l, u % d / h, g);
      } else
        o === null ? _ = new c(i.count * l) : _ = new c(o, u, i.count * l), p = new Mt(_, l, g);
      if (i.sparse !== void 0) {
        const m = dr.SCALAR, S = ii[i.sparse.indices.componentType], b = i.sparse.indices.byteOffset || 0, x = i.sparse.values.byteOffset || 0, A = new S(a[1], b, i.sparse.count * m), y = new c(a[2], x, i.sparse.count * l);
        o !== null && (p = new Mt(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
        for (let w = 0, D = A.length; w < D; w++) {
          const X = A[w];
          if (p.setX(X, y[w * l]), l >= 2 && p.setY(X, y[w * l + 1]), l >= 3 && p.setZ(X, y[w * l + 2]), l >= 4 && p.setW(X, y[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        p.normalized = g;
      }
      return p;
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
      const u = (r.samplers || {})[a.sampler] || {};
      return h.magFilter = fo[u.magFilter] || 1006, h.minFilter = fo[u.minFilter] || 1008, h.wrapS = po[u.wrapS] || 1e3, h.wrapT = po[u.wrapT] || 1e3, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((f) => f.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function(f) {
        c = !0;
        const u = new Blob([f], { type: a.mimeType });
        return l = o.createObjectURL(u), l;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(f) {
      return new Promise(function(u, d) {
        let g = u;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const p = new dt(_);
          p.needsUpdate = !0, u(p);
        }), t.load(Li.resolveURL(f, r.path), g, void 0, d);
      });
    }).then(function(f) {
      return c === !0 && o.revokeObjectURL(l), un(f, a), f.userData.mimeType = a.mimeType || Qm(a.uri), f;
    }).catch(function(f) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), f;
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
      l || (l = new Xo(), $t.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new jo(), $t.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
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
    return dn;
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
      const f = i[He.KHR_MATERIALS_UNLIT];
      a = f.getMaterialType(), c.push(f.extendParams(o, r, t));
    } else {
      const f = r.pbrMetallicRoughness || {};
      if (o.color = new re(1, 1, 1), o.opacity = 1, Array.isArray(f.baseColorFactor)) {
        const u = f.baseColorFactor;
        o.color.setRGB(u[0], u[1], u[2], ut), o.opacity = u[3];
      }
      f.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", f.baseColorTexture, ft)), o.metalness = f.metallicFactor !== void 0 ? f.metallicFactor : 1, o.roughness = f.roughnessFactor !== void 0 ? f.roughnessFactor : 1, f.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", f.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", f.metallicRoughnessTexture))), a = this._invokeOne(function(u) {
        return u.getMaterialType && u.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(u) {
        return u.extendMaterialParams && u.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === !0 && (o.side = 2);
    const h = r.alphaMode || pr.OPAQUE;
    if (h === pr.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === pr.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== Bn && (c.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new Oe(1, 1), r.normalTexture.scale !== void 0)) {
      const f = r.normalTexture.scale;
      o.normalScale.set(f, f);
    }
    if (r.occlusionTexture !== void 0 && a !== Bn && (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== Bn) {
      const f = r.emissiveFactor;
      o.emissive = new re().setRGB(f[0], f[1], f[2], ut);
    }
    return r.emissiveTexture !== void 0 && a !== Bn && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, ft)), Promise.all(c).then(function() {
      const f = new a(o);
      return r.name && (f.name = r.name), un(f, r), t.associations.set(f, { materials: e }), r.extensions && In(i, f, r), f;
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
        return mo(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = Zm(c), f = i[h];
      if (f)
        a.push(f.promise);
      else {
        let u;
        c.extensions && c.extensions[He.KHR_DRACO_MESH_COMPRESSION] ? u = r(c) : u = mo(new Bt(), c, t), i[h] = { primitive: c, promise: u }, a.push(u);
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
      const h = a[l].material === void 0 ? Ym(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], f = [];
      for (let d = 0, g = h.length; d < g; d++) {
        const _ = h[d], p = a[d];
        let m;
        const S = c[d];
        if (p.mode === kt.TRIANGLES || p.mode === kt.TRIANGLE_STRIP || p.mode === kt.TRIANGLE_FAN || p.mode === void 0)
          m = r.isSkinnedMesh === !0 ? new Jd(_, S) : new vt(_, S), m.isSkinnedMesh === !0 && m.normalizeSkinWeights(), p.mode === kt.TRIANGLE_STRIP ? m.geometry = ho(m.geometry, 1) : p.mode === kt.TRIANGLE_FAN && (m.geometry = ho(m.geometry, 2));
        else if (p.mode === kt.LINES)
          m = new ip(_, S);
        else if (p.mode === kt.LINE_STRIP)
          m = new Or(_, S);
        else if (p.mode === kt.LINE_LOOP)
          m = new sp(_, S);
        else if (p.mode === kt.POINTS)
          m = new rp(_, S);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && $m(m, r), m.name = t.createUniqueName(r.name || "mesh_" + e), un(m, r), p.extensions && In(i, m, p), t.assignFinalMaterial(m), f.push(m);
      }
      for (let d = 0, g = f.length; d < g; d++)
        t.associations.set(f[d], {
          meshes: e,
          primitives: d
        });
      if (f.length === 1)
        return r.extensions && In(i, f[0], r), f[0];
      const u = new mn();
      r.extensions && In(i, u, r), t.associations.set(u, { meshes: e });
      for (let d = 0, g = f.length; d < g; d++)
        u.add(f[d]);
      return u;
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
    return n.type === "perspective" ? t = new Ct(Di.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ni(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), un(t, n), Promise.resolve(t);
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
        const f = a[c];
        if (f) {
          o.push(f);
          const u = new Re();
          r !== null && u.fromArray(r.array, c * 16), l.push(u);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Cs(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let f = 0, u = i.channels.length; f < u; f++) {
      const d = i.channels[f], g = i.samplers[d.sampler], _ = d.target, p = _.node, m = i.parameters !== void 0 ? i.parameters[g.input] : g.input, S = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", p)), o.push(this.getDependency("accessor", m)), l.push(this.getDependency("accessor", S)), c.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h)
    ]).then(function(f) {
      const u = f[0], d = f[1], g = f[2], _ = f[3], p = f[4], m = [];
      for (let S = 0, b = u.length; S < b; S++) {
        const x = u[S], A = d[S], y = g[S], w = _[S], D = p[S];
        if (x === void 0) continue;
        x.updateMatrix && x.updateMatrix();
        const X = n._createAnimationTracks(x, A, y, w, D);
        if (X)
          for (let v = 0; v < X.length; v++)
            m.push(X[v]);
      }
      return new Ar(r, void 0, m);
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
      const h = c[0], f = c[1], u = c[2];
      u !== null && h.traverse(function(d) {
        d.isSkinnedMesh && d.bind(u, Jm);
      });
      for (let d = 0, g = f.length; d < g; d++)
        h.add(f[d]);
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
      if (r.isBone === !0 ? h = new Wo() : c.length > 1 ? h = new mn() : c.length === 1 ? h = c[0] : h = new it(), h !== c[0])
        for (let f = 0, u = c.length; f < u; f++)
          h.add(c[f]);
      if (r.name && (h.userData.name = r.name, h.name = a), un(h, r), r.extensions && In(n, h, r), r.matrix !== void 0) {
        const f = new Re();
        f.fromArray(r.matrix), h.applyMatrix4(f);
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
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new mn();
    n.name && (r.name = i.createUniqueName(n.name)), un(r, n), n.extensions && In(t, r, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, f = l.length; h < f; h++)
        r.add(l[h]);
      const c = (h) => {
        const f = /* @__PURE__ */ new Map();
        for (const [u, d] of i.associations)
          (u instanceof $t || u instanceof dt) && f.set(u, d);
        return h.traverse((u) => {
          const d = i.associations.get(u);
          d != null && f.set(u, d);
        }), f;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    An[r.path] === An.weights ? e.traverse(function(u) {
      u.morphTargetInfluences && l.push(u.name ? u.name : u.uuid);
    }) : l.push(o);
    let c;
    switch (An[r.path]) {
      case An.weights:
        c = ai;
        break;
      case An.rotation:
        c = oi;
        break;
      case An.position:
      case An.scale:
        c = li;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = ai;
            break;
          case 2:
          case 3:
          default:
            c = li;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? qm[i.interpolation] : 2301, f = this._getArrayFromAccessor(n);
    for (let u = 0, d = l.length; u < d; u++) {
      const g = new c(
        l[u] + "." + An[r.path],
        t.array,
        f,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Tr(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof oi ? Xm : il;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function tg(s, e, t) {
  const n = e.attributes, i = new Zt();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new P(l[0], l[1], l[2]),
        new P(c[0], c[1], c[2])
      ), o.normalized) {
        const h = Tr(ii[o.componentType]);
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
      const f = r[c];
      if (f.POSITION !== void 0) {
        const u = t.json.accessors[f.POSITION], d = u.min, g = u.max;
        if (d !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(d[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(g[2]))), u.normalized) {
            const _ = Tr(ii[u.componentType]);
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
function mo(s, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      s.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = Er[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return qe.workingColorSpace !== ut && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`), un(s, e), tg(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Km(s, e.targets, t) : s;
  });
}
var sl = function() {
  var s = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : s, r, a = WebAssembly.instantiate(o(i), {}).then(function(m) {
    r = m.instance, r.exports.__wasm_call_ctors();
  });
  function o(m) {
    for (var S = new Uint8Array(m.length), b = 0; b < m.length; ++b) {
      var x = m.charCodeAt(b);
      S[b] = x > 96 ? x - 97 : x > 64 ? x - 39 : x + 4;
    }
    for (var A = 0, b = 0; b < m.length; ++b)
      S[A++] = S[b] < 60 ? n[S[b]] : (S[b] - 60) * 64 + S[++b];
    return S.buffer.slice(0, A);
  }
  function l(m, S, b, x, A, y) {
    var w = r.exports.sbrk, D = b + 3 & -4, X = w(D * x), v = w(A.length), T = new Uint8Array(r.exports.memory.buffer);
    T.set(A, v);
    var k = m(X, b, x, v, A.length);
    if (k == 0 && y && y(X, D, x), S.set(T.subarray(X, X + b * x)), w(X - w(0)), k != 0)
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
  }, f = [], u = 0;
  function d(m) {
    var S = {
      object: new Worker(m),
      pending: 0,
      requests: {}
    };
    return S.object.onmessage = function(b) {
      var x = b.data;
      S.pending -= x.count, S.requests[x.id][x.action](x.value), delete S.requests[x.id];
    }, S;
  }
  function g(m) {
    for (var S = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + l.toString() + p.toString(), b = new Blob([S], { type: "text/javascript" }), x = URL.createObjectURL(b), A = 0; A < m; ++A)
      f[A] = d(x);
    URL.revokeObjectURL(x);
  }
  function _(m, S, b, x, A) {
    for (var y = f[0], w = 1; w < f.length; ++w)
      f[w].pending < y.pending && (y = f[w]);
    return new Promise(function(D, X) {
      var v = new Uint8Array(b), T = u++;
      y.pending += m, y.requests[T] = { resolve: D, reject: X }, y.object.postMessage({ id: T, count: m, size: S, source: v, mode: x, filter: A }, [v.buffer]);
    });
  }
  function p(m) {
    a.then(function() {
      var S = m.data;
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
    useWorkers: function(m) {
      g(m);
    },
    decodeVertexBuffer: function(m, S, b, x, A) {
      l(r.exports.meshopt_decodeVertexBuffer, m, S, b, x, r.exports[c[A]]);
    },
    decodeIndexBuffer: function(m, S, b, x) {
      l(r.exports.meshopt_decodeIndexBuffer, m, S, b, x);
    },
    decodeIndexSequence: function(m, S, b, x) {
      l(r.exports.meshopt_decodeIndexSequence, m, S, b, x);
    },
    decodeGltfBuffer: function(m, S, b, x, A, y) {
      l(r.exports[h[A]], m, S, b, x, r.exports[c[y]]);
    },
    decodeGltfBufferAsync: function(m, S, b, x, A) {
      return f.length > 0 ? _(m, S, b, h[x], c[A]) : a.then(function() {
        var y = new Uint8Array(m * S);
        return l(r.exports[h[x]], y, m, S, b, r.exports[c[A]]), y;
      });
    }
  };
}();
function ng() {
  try {
    return new URLSearchParams(location.search).has("ozdebug");
  } catch {
    return !1;
  }
}
const ig = (s) => s.properties;
function sg(s, e, t, n, i) {
  const r = s.getRenderTarget();
  s.setRenderTarget(i);
  try {
    const a = s.compile(e, t, n), o = [];
    for (const l of a) {
      const c = ig(s).get(l).currentProgram;
      c && o.push(c);
    }
    return o;
  } catch (a) {
    return console.warn("[precompile] 실패 — 첫 프레임에 컴파일됨:", a), [];
  } finally {
    s.setRenderTarget(r);
  }
}
function rg(s, e = 1e4) {
  const t = performance.now();
  let n = [...new Set(s)];
  return new Promise((i) => {
    const r = () => {
      n = n.filter((a) => a.program !== void 0 && !a.isReady()), n.length === 0 || performance.now() - t > e ? i() : setTimeout(r, 8);
    };
    r();
  });
}
const gr = 11, Wr = { value: 0 };
function rl(s) {
  return {
    emissiveMap: { value: s.emissiveMap },
    emissiveStrength: { value: s.emissiveStrength ?? 1 },
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
    emissiveTintColor: { value: s.emissiveTintColor ?? new re(1, 1, 1) },
    // emissive 틴트 색공간 보정: pow(tint, gamma). 1.0=raw, ~2.2=sRGB→linear.
    // Unity SetColor 감마처리와 정합되는 값을 아티스트가 튜너로 찾아 확정.
    emissiveTintGamma: { value: s.emissiveTintGamma ?? 1 }
  };
}
const al = (
  /* glsl */
  `
            uniform sampler2D emissiveMap;
            uniform float emissiveStrength;
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
                if (abs(g - 2.2) < 0.005) return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
                return pow(c, vec3(g));
            }
`
), ol = (
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
                if (emissiveColorMode < 0.5) eSample.rgb = ozEmDecode(eSample.rgb, emissiveTintGamma);
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
                // 색 방식 1·2: 강도를 올려도 흰색으로 날아가지 않게 — 가장 밝은 채널이 1 을 넘으면 색 비율을 지킨 채 1 로 맞추고(1 이하는 그대로),
                // 넘친 만큼만 조금 뽀얗게 한다. 블룸 소스(ozRawEm)는 위에서 줄이기 전 값을 이미 받았으므로 강도만큼 번진다.
                vec3 emTotal = (ozFixed + glow * ozFlicker) * ozPulse;
                emTotal *= emissiveGlow;
                ozRawEm = emTotal;
                totalEmissiveRadiance += emTotal;

                // 베이스 억제 안 함 — Unity처럼 순수 additive(Linear Dodge): 이미시브는 라이팅된 베이스 위에 가산.
                // (이전엔 diffuseColor *= (1-emMask) 로 억제해 bloom 색을 순수하게 뽑았으나, 베이스 재질감이
                //  사라지는 부작용 → 아티스트 요구(재질 유지 + add)에 맞춰 제거. bloom 은 베이스 색 일부 포함될 수 있음.)
            }
`
);
function ag(s) {
  var t, n;
  const e = (t = s == null ? void 0 : s.userData) == null ? void 0 : t.uniforms;
  return !!(e != null && e.emissiveMap) && (((n = e.emissiveGlow) == null ? void 0 : n.value) ?? 1) > 0;
}
function og(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (l, c, h) => new re(l, c, h).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = !!e.emissiveMap, a = {
    maskTintMap1: { value: e.maskTintMap1 },
    maskTintMap2: { value: e.maskTintMap2 },
    tintColorR1: e.tintColorR1Uniform ?? { value: e.tintColorR1 ?? n(0.957, 0.769, 0.725) },
    tintColorG1: { value: e.tintColorG1 ?? n(0.996, 0.553, 0.688) },
    tintColorB1: { value: e.tintColorB1 ?? n(0.902, 0.902, 0.902) },
    tintColorR2: { value: e.tintColorR2 ?? new re(0, 0, 0) },
    tintColorG2: { value: e.tintColorG2 ?? new re(0, 0, 0) },
    tintColorB2: { value: e.tintColorB2 ?? new re(0, 0, 0) },
    rimEdgePower: { value: e.rimEdgePower ?? 5 },
    rimPower: { value: e.rimPower ?? 0.4 },
    specGain: { value: e.specularGain ?? 1 },
    specSkin: { value: e.tintColorR1Uniform ? 1 : 0 },
    // 마스크 R 이 맨살인 재질(공유 피부색을 받는 옷)만 1
    rimColor: { value: e.rimColor ?? n(0.447, 0.565, 0.671) },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {},
    // 셀렉티브 블룸 모드 스위치 — 발광 여부와 무관하게 전 OZ 머티리얼 바인딩.
    // 비발광 재질도 블룸 소스 패스에서 검정 출력 (멀티 머티리얼 메시의 비발광 서브재질 오염 방지)
    ozBloomSrc: Wr,
    ...r ? rl(e) : {},
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.onBeforeCompile = (l) => {
    for (const [_, p] of Object.entries(a))
      l.uniforms[_] = p;
    const c = i ? (
      /* glsl */
      `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
    ) : "", h = r ? `#define OZ_FX_SKIN_MAP maskTintMap1
` + al : "", f = (
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
            uniform float specGain;
            uniform float specSkin;
            float ozSkinW = 0.0;   // 맨살(마스크 R) 정도 — 조명 반사 배율은 옷에만
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
      f + `
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
    const u = (
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
                ozSkinW = clamp(mask1.r, 0.0, 1.0) * specSkin;
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
` + u
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
      const p = (
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
` + p
      );
      const m = (
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
` + m
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
            ${r ? ol : ""}
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
reflectedLight.directSpecular *= mix(specGain, 1.0, ozSkinW);`
    ), l.fragmentShader = l.fragmentShader.replace(
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
  return t.customProgramCacheKey = () => o, t.userData.uniforms = a, t;
}
function lg(s) {
  return s.userData.decalSlots ?? null;
}
function cg(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (d, g, _) => new re(d, g, _).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = !!e.emissiveMap, a = e.decalSlots ?? 0, o = a > 0, l = [], c = {};
  let h = null;
  if (o) {
    const d = new Uint8Array([0, 0, 0, 0]);
    h = new ws(d, 1, 1, 1023), h.needsUpdate = !0;
  }
  for (let d = 0; d < a; d++) {
    const g = {
      enabled: { value: 0 },
      texture: { value: h },
      color: { value: new Ve(1, 1, 1, 1) },
      invMatrix: { value: new Re() },
      useSkinColor: { value: 0 }
    };
    l.push(g), c[`decalEnabled${d}`] = g.enabled, c[`decalTex${d}`] = g.texture, c[`decalColor${d}`] = g.color, c[`decalInvMatrix${d}`] = g.invMatrix, c[`decalUseSkinColor${d}`] = g.useSkinColor;
  }
  const f = {
    maskTintMap: { value: e.maskTintMap },
    tintColorR: e.tintColorRUniform ?? { value: e.tintColorR ?? n(0.957, 0.769, 0.725) },
    tintColorG: { value: e.tintColorG ?? n(0, 0, 0) },
    tintColorB: { value: e.tintColorB ?? n(0, 0, 0) },
    rimEdgePower: { value: e.rimEdgePower ?? 7.5 },
    rimPower: { value: e.rimPower ?? 0.4 },
    specGain: { value: e.specularGain ?? 1 },
    specSkin: { value: e.tintColorRUniform ? 1 : 0 },
    // 마스크 R 이 맨살인 재질(공유 피부색을 받는 옷)만 1
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
    ...r ? { ozBloomSrc: Wr, ...rl(e) } : {}
  };
  t.onBeforeCompile = (d) => {
    for (const [y, w] of Object.entries(f))
      d.uniforms[y] = w;
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
`;
      for (let y = 0; y < a; y++)
        _ += `
            uniform float decalEnabled${y};
            uniform sampler2D decalTex${y};
            uniform vec4 decalColor${y};
            uniform mat4 decalInvMatrix${y};
            uniform float decalUseSkinColor${y};
                `;
    }
    const p = (
      /* glsl */
      `
            uniform sampler2D maskTintMap;
            uniform vec3 tintColorR;
            uniform vec3 tintColorG;
            uniform vec3 tintColorB;
            uniform float rimEdgePower;
            uniform float rimPower;
            uniform float specGain;
            uniform float specSkin;
            float ozSkinW = 0.0;   // 맨살(마스크 R) 정도 — 조명 반사 배율은 옷에만
            uniform vec3 rimColor;
            uniform float volumeMaskEnable;
            uniform vec3 volumeMaskCenter;
            uniform float volumeMaskRadius;
            varying vec3 vObjPosition;
            ${g}
            ${_}
            ${r ? `uniform float ozBloomSrc;
#define OZ_FX_SKIN_MAP maskTintMap
` + al : ""}
        `
    );
    d.fragmentShader = d.fragmentShader.replace(
      "#include <common>",
      p + `
#include <common>`
    );
    let m = `varying vec3 vObjPosition;
`;
    o && (m += `varying vec3 vWorldPosition;
`), d.vertexShader = d.vertexShader.replace(
      "#include <common>",
      m + "#include <common>"
    );
    let S = `#include <skinning_vertex>
vObjPosition = transformed;`;
    o && (S += `
vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`), d.vertexShader = d.vertexShader.replace(
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
                ozSkinW = clamp(mask.r, 0.0, 1.0) * specSkin;

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
      for (let y = 0; y < a; y++)
        x += /* glsl */
        `
            if (decalEnabled${y} > 0.5) {
                vec4 dLocal${y} = decalInvMatrix${y} * vec4(vWorldPosition, 1.0);
                vec3 dUv${y} = dLocal${y}.xyz / dLocal${y}.w;
                if (dUv${y}.x >= 0.0 && dUv${y}.x <= 1.0 &&
                    dUv${y}.y >= 0.0 && dUv${y}.y <= 1.0 &&
                    dUv${y}.z >= 0.0 && dUv${y}.z <= 1.0) {
                    vec2 decalUv${y} = vec2(1.0 - dUv${y}.x, 1.0 - dUv${y}.y);
                    vec4 dSample${y} = texture2D(decalTex${y}, decalUv${y});
                    float dAlpha${y} = dSample${y}.a * decalColor${y}.a;
                    vec3 dTexColor${y} = dSample${y}.rgb;

                    if (decalUseSkinColor${y} > 0.5) {
                        // OZ_Decal_Skin: Blend(base=skinColor, blend=tex, mode=Multiply)
                        vec3 dResult${y} = tintColorR * dTexColor${y};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dResult${y}, dAlpha${y});
                    } else {
                        // OZ_Decal_Color: Blend(base=_Color, blend=tex, mode=HardLight)
                        vec3 dBase${y} = decalColor${y}.rgb;
                        vec3 dBlend${y} = dTexColor${y};
                        vec3 dHL1_${y} = 1.0 - 2.0 * (1.0 - dBase${y}) * (1.0 - dBlend${y});
                        vec3 dHL2_${y} = 2.0 * dBase${y} * dBlend${y};
                        vec3 dStep${y} = step(dBlend${y}, vec3(0.5));
                        vec3 dHardLight${y} = dHL2_${y} * dStep${y} + (1.0 - dStep${y}) * dHL1_${y};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dHardLight${y}, dAlpha${y});
                    }
                }
            }
                `;
    if (d.fragmentShader = d.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + b + x
    ), i) {
      const y = (
        /* glsl */
        `
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
            `
      );
      d.fragmentShader = d.fragmentShader.replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
` + y
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
      d.fragmentShader = d.fragmentShader.replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
` + w
      );
      const D = (
        /* glsl */
        `
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
            `
      );
      d.fragmentShader = d.fragmentShader.replace(
        "#include <aomap_fragment>",
        `#include <aomap_fragment>
` + D
      );
    }
    const A = (
      /* glsl */
      `
            {
                vec3 viewDir = normalize(vViewPosition);
                float NdotV = dot(normal, viewDir);
                float fresnel = 1.0 - clamp(NdotV, 0.0, 1.0);
                float rim = pow(fresnel, rimEdgePower) * rimPower;
                totalEmissiveRadiance += rim * rimColor;
            }
            ${r ? ol : ""}
        `
    );
    d.fragmentShader = d.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
reflectedLight.directSpecular *= mix(specGain, 1.0, ozSkinW);`
    ), d.fragmentShader = d.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + A
    ), r && (d.fragmentShader = d.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
if (ozBloomSrc > 0.5) { gl_FragColor = vec4(ozRawEm, 1.0); }`
    ));
  };
  const u = o ? `_D${a}` : "";
  return t.customProgramCacheKey = () => (i ? "OZMaskTint_PBR" : "OZMaskTint") + u + (r ? "_E" : ""), t.userData.uniforms = f, o && (t.userData.decalSlots = l), t;
}
function hg(s, e) {
  const t = s.clone(), i = !!e.blend || e.enableSecondaryLobe === !1, r = (l, c, h) => new re(l, c, h).convertSRGBToLinear(), a = {
    hairBaseColor: { value: e.baseColor ?? r(0.752, 0.535, 0.475) },
    hairSpecColor: { value: e.specColor ?? r(0.567, 0.404, 0.397) },
    hairSmoothness: { value: e.smoothness ?? 0.65 },
    hairSpecShift: { value: -(e.specularShift ?? -1) },
    hairSpecExponent: { value: e.specularExponent ?? 0 },
    hairSpecTint: { value: e.specularTint ?? new re(1, 1, 1) },
    hairSecSpecShift: { value: -(e.secondarySpecularShift ?? 0.18) },
    hairSecSpecExponent: { value: e.secondarySpecularExponent ?? 0.75 },
    hairSecSpecTint: { value: e.secondarySpecularTint ?? new re(1, 1, 1) },
    hairRimTransmission: { value: e.hairRim ?? 3 },
    hairShiftDir: { value: e.shiftDirection ?? 1 },
    hairMaskMap: { value: e.maskMap ?? null },
    hairAlphaClip: { value: e.blend ? 0 : e.alphaClip ?? 0.5 },
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.color.set(1, 1, 1), t.envMapIntensity = 0, t.side = e.doubleSided !== !1 ? 2 : 0, e.blend && (t.transparent = !0, t.depthWrite = !1, t.premultipliedAlpha = !0, t.alphaTest = 0);
  const o = e.normalInten ?? 1;
  if (e.normalMap)
    t.normalMap = e.normalMap, t.normalScale.set(o, o);
  else if (!t.normalMap) {
    const l = new Uint8Array([128, 128, 255, 255]), c = new ws(l, 1, 1, 1023);
    c.needsUpdate = !0, t.normalMap = c, t.normalScale.set(1, 1);
  }
  return t.onBeforeCompile = (l) => {
    for (const [u, d] of Object.entries(a))
      l.uniforms[u] = d;
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
            uniform float hairShiftDir;
            uniform sampler2D hairMaskMap;
            uniform float hairAlphaClip;
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
    const f = (
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
                // Unity OZ_Hair 셰이더는 양면이지만 뒷면에서 노멀을 뒤집지 않는다 — three 가 뒤집어 둔 것을 원래대로
                vec3 N_tbn = _hairGeomNormal * faceDirection;
                vec3 N = normal * faceDirection;
                #ifdef USE_TANGENT
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
                // 시선 각도 = 조명·하이라이트와 같은 셰이딩 노말(노말맵 적용) — three.js 표준. 기하 노말을 쓰면 Rim 이 실루엣에만 맺히고 굴곡에는 안 맺힌다 (아티스트 QA 2026-11-16)
                float NdotV = dot(N, V);

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
                    float priLobe = pow(max(sinTHSq1, 0.0001), 0.5 * priExp);
                    vec3 hairSpec1 = hairSpecTint * dirAttn1 * norm1 * priLobe;

                    // D_KajiyaKay secondary lobe
                    ${i ? "// _EnableSecondaryLobe=0" : ""}
                    float TdotH2 = dot(t2, H);
                    float sinTHSq2 = clamp(1.0 - TdotH2 * TdotH2, 0.0, 1.0);
                    float dirAttn2 = clamp(TdotH2 + 1.0, 0.0, 1.0);
                    float norm2 = (secExp + 2.0) * 0.5 * RECIPROCAL_PI;
                    float secLobe = pow(max(sinTHSq2, 0.0001), 0.5 * secExp);
                    vec3 hairSpec2 = ${i ? "vec3(0.0)" : "hairSecSpecTint * dirAttn2 * norm2 * secLobe"};

                    // Fresnel (F_Schlick)
                    float LdotH = clamp(dot(L, H), 0.0, 1.0);
                    vec3 F = hairSpec + (1.0 - hairSpec) * pow(1.0 - LdotH, 5.0);

                    vec3 specR = 0.25 * F * (hairSpec1 + hairSpec2)
                               * clamp(NdotL, 0.0, 1.0)
                               * clamp(NdotV * 65504.0, 0.0, 1.0);

                    // Transmission (Yibing/Morten hybrid scatter model)
                    float scatterFresnel1 = pow(clamp(-LdotV, 0.0, 1.0), 9.0)
                                          * pow(clamp(1.0 - NdotV * NdotV, 0.0, 1.0), 12.0);
                    float rim1 = 1.0 - NdotV;
                    float scatterFresnel2 = clamp(rim1 * rim1 * rim1 * rim1, 0.0, 1.0);
                    float transmission = scatterFresnel1 + hairRimTransmission * scatterFresnel2;
                    vec3 specT = hairAlbedo * transmission;

                    // Diffuse
                    vec3 hairDiffuse = hairAlbedo * clamp(NdotL, 0.0, 1.0);

                    totalHairDirect += (hairDiffuse + specR + specT) * lightColor * RECIPROCAL_PI;
                }
                #endif

                // 앰비언트 — 씬 AmbientLight 를 표준 방식(irradiance × albedo / π)으로
                vec3 totalHairAmbient = hairAlbedo * getAmbientLightIrradiance(ambientLightColor) * RECIPROCAL_PI * maskAO;

                totalEmissiveRadiance += totalHairDirect + totalHairAmbient;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + f
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
            reflectedLight.directDiffuse = vec3(0.0);
            reflectedLight.directSpecular = vec3(0.0);
            reflectedLight.indirectSpecular = vec3(0.0);
            reflectedLight.indirectDiffuse = vec3(0.0);`
    );
  }, t.customProgramCacheKey = () => e.blend ? "OZHairBlend" : i ? "OZHair_NoSec" : "OZHair", t.userData.hairUniforms = a, t;
}
function ug(s, e) {
  const t = s.clone();
  t.transparent = !0, t.depthWrite = !1, t.side = 2, t.alphaTest = 0, t.metalness = 0, t.roughness = 1, t.envMapIntensity = 0, e.normalMap && (e.normalMap.flipY = !1, e.normalMap.colorSpace = pn, t.normalMap = e.normalMap, t.normalMapType = 0, t.normalScale = new Oe(1, 1), t.userData._BumpScale = 1);
  const n = (o, l, c) => new re(o, l, c).convertSRGBToLinear(), i = e.uvTransform ?? {
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
    for (const [h, f] of Object.entries(r))
      o.uniforms[h] = f;
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
    );
  };
  const a = "OZSpriteMaskTint" + (e.normalMap ? "_N" : "");
  return t.customProgramCacheKey = () => a, t.userData.eyeBlinkUniform = r.uvScaleYEyeBlink, t.userData.uvTransformUniforms = i, t.userData.uniforms = r, t;
}
function fg(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (o, l, c) => new re(o, l, c).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = t.transparent === !0, a = {
    lensTopColor: { value: e.topColor ?? n(0, 0.017, 0.17) },
    lensBottomColor: { value: e.bottomColor ?? n(0, 0.096, 1) },
    lensGradientSmooth: { value: e.gradientSmooth ?? 0.15 },
    lensGradientPosition: { value: e.gradientPosition ?? 0.2 },
    lensSpecColor: { value: e.specularColor ?? n(0, 0.66, 0.76) },
    lensSpecIntensity: { value: e.specularIntensity ?? 1 },
    lensSpecPower: { value: e.specularPower ?? 20 },
    lensFresnelPower: { value: e.fresnelPower ?? 2 },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 1 },
      smoothnessIntensity: { value: e.smoothness ?? 0.65 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {}
  };
  return t.onBeforeCompile = (o) => {
    for (const [f, u] of Object.entries(a))
      o.uniforms[f] = u;
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
                    // three 의 조명 색은 Unity light.color × π 단위 — 헤어 셰이더와 같이 1/π 로 환산
                    vec3 lLightColor = directionalLights[0].color * RECIPROCAL_PI;
                    vec3 lH = normalize(lL + lV);
                    float lNdotH = clamp(dot(lN, lH), 0.0, 1.0);
                    float lSpec = pow(lNdotH, lensSpecPower);
                    lSpecContrib = lLightColor * lSpec * (1.0 - lensMask.a); // Unity: Specular × (1 - MaskMap.A)
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
    ));
  }, t.customProgramCacheKey = () => `${i ? "OZLens_PBR" : "OZLens"}${r ? "_T" : ""}`, t.userData.uniforms = a, t;
}
function dg(s, e) {
  var a, o;
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null, t.emissive.set(0, 0, 0), t.emissiveMap = null, t.emissiveIntensity = 1, e.metallicIntensity != null && (t.metalnessMap = null, t.metalness = e.metallicIntensity), e.smoothness != null && (t.roughnessMap = null, t.roughness = 1 - e.smoothness);
  const n = { value: 0 }, i = !!e.pbrMaskMap, r = {
    emissiveBlinkMap: { value: e.emissiveMap },
    emissiveStrength: { value: e.emissiveStrength ?? 1 },
    emissiveTintGamma: { value: e.emissiveTintGamma ?? 1 },
    blinkSpeed: { value: e.blinkSpeed ?? 3 },
    mapTiling: { value: new Oe(((a = e.mapTiling) == null ? void 0 : a[0]) ?? 2, ((o = e.mapTiling) == null ? void 0 : o[1]) ?? 4) },
    uBlinkTime: n,
    ozBloomSrc: Wr,
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {}
  };
  return t.onBeforeCompile = (l) => {
    for (const [u, d] of Object.entries(r))
      l.uniforms[u] = d;
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
                if (abs(g - 2.2) < 0.005) return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
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
    const f = (
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
` + f
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
if (ozBloomSrc > 0.5) { gl_FragColor = vec4(ozRawEm, 1.0); }`
    );
  }, t.customProgramCacheKey = () => i ? "OZEmissiveBlink_PBR" : "OZEmissiveBlink", t.userData.uniforms = r, { material: t, timeUniform: n };
}
function ll(s) {
  const e = parseInt(s.slice(1, 3), 16) / 255, t = parseInt(s.slice(3, 5), 16) / 255, n = parseInt(s.slice(5, 7), 16) / 255, i = s.length >= 9 ? parseInt(s.slice(7, 9), 16) / 255 : 1;
  return { r: e, g: t, b: n, a: i };
}
function cl(s) {
  var e;
  for (const t in s) {
    if (t === "_meta") continue;
    const n = (e = s[t]) == null ? void 0 : e.colors;
    if (Array.isArray(n))
      for (const i of n)
        Array.isArray(i == null ? void 0 : i.colors) && (i.colors = i.colors.map(
          (r) => typeof r == "string" ? ll(r) : r
        ));
  }
}
function pg(s) {
  var t;
  if (!s) return;
  const e = s.PresetPartsDatas;
  if (Array.isArray(e))
    for (const n of e) {
      const i = (t = n == null ? void 0 : n.Color) == null ? void 0 : t.colors;
      Array.isArray(i) && (n.Color.colors = i.map(
        (r) => typeof r == "string" ? ll(r) : r
      ));
    }
}
function cn(s, e = Math.random) {
  return s.kind === "constant" ? s.value : s.min + (s.max - s.min) * e();
}
function mg(s, e) {
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
function hl(s, e, t) {
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
function gg(s, e, t) {
  if (s.kind === "constant") {
    t[0] = s.rgba[0], t[1] = s.rgba[1], t[2] = s.rgba[2], t[3] = s.rgba[3];
    return;
  }
  if (s.kind === "range") {
    const n = e();
    t[0] = s.minRgba[0] + (s.maxRgba[0] - s.minRgba[0]) * n, t[1] = s.minRgba[1] + (s.maxRgba[1] - s.minRgba[1]) * n, t[2] = s.minRgba[2] + (s.maxRgba[2] - s.minRgba[2]) * n, t[3] = s.minRgba[3] + (s.maxRgba[3] - s.minRgba[3]) * n;
    return;
  }
  hl({ stops: s.stops }, e(), t);
}
const wr = Math.PI / 180;
function _g(s, e, t, n) {
  switch (s.type) {
    case "cone":
      vg(s, e, t, n);
      break;
    case "sphere":
      go(s, e, t, n, !1);
      break;
    case "hemisphere":
      go(s, e, t, n, !0);
      break;
    case "box":
      bg(s, e, t, n);
      break;
    case "circle":
      xg(s, e, t, n);
      break;
  }
}
function vg(s, e, t, n) {
  const i = s.radius ?? 1, r = s.radiusThickness ?? 1, a = (s.angle ?? 25) * wr, o = (s.arc ?? 360) * wr, l = (i * (1 - r)) ** 2, c = i * i, h = Math.sqrt(l + e() * (c - l)), f = e() * o, u = h * Math.cos(f), d = h * Math.sin(f);
  t[0] = u, t[1] = 0, t[2] = d;
  const g = Math.sqrt(u * u + d * d), _ = g > 1e-6 ? u / g : 0, p = g > 1e-6 ? d / g : 0, m = Math.tan(a), S = _ * m, b = p * m, x = 1, A = Math.sqrt(S * S + x * x + b * b);
  n[0] = S / A, n[1] = x / A, n[2] = b / A;
}
function go(s, e, t, n, i) {
  const r = s.radius ?? 1, a = s.radiusThickness ?? 0;
  let o = e() * 2 - 1;
  i && o < 0 && (o = -o);
  const l = e() * Math.PI * 2, c = Math.sqrt(1 - o * o), h = c * Math.cos(l), f = o, u = c * Math.sin(l), d = (r * (1 - a)) ** 3, g = r ** 3, _ = a === 0 ? r : Math.cbrt(d + e() * (g - d));
  t[0] = h * _, t[1] = f * _, t[2] = u * _, n[0] = h, n[1] = f, n[2] = u;
}
function bg(s, e, t, n) {
  const i = s.box ?? [1, 1, 1];
  t[0] = (e() - 0.5) * i[0], t[1] = (e() - 0.5) * i[1], t[2] = (e() - 0.5) * i[2], n[0] = 0, n[1] = 0, n[2] = 1;
}
function xg(s, e, t, n) {
  const i = s.radius ?? 1, r = s.radiusThickness ?? 1, a = (i * (1 - r)) ** 2, o = Math.sqrt(a + e() * (i * i - a)), l = e() * (s.arc ?? 360) * wr, c = Math.cos(l), h = Math.sin(l);
  t[0] = c * o, t[1] = 0, t[2] = h * o, n[0] = c, n[1] = 0, n[2] = h;
}
function Sg(s) {
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
const Mg = (
  /* glsl */
  `
attribute vec3 iPosition;
attribute float iScale;
attribute float iRotation;
attribute vec4 iColor;
attribute vec3 iVel;
attribute float iFrame;
uniform vec2 uStretch;
uniform vec2 uSheet;

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
  if (uStretch.x > 0.0) {
    vec3 vv = (modelViewMatrix * vec4(iVel, 0.0)).xyz;
    float sp = length(vv.xy);
    vec2 d = sp > 1e-5 ? vv.xy / sp : vec2(0.0, 1.0);
    float w = iScale * worldScale;
    mvCenter.xy += d * position.y * (w * uStretch.x + length(vv) * uStretch.y) + vec2(d.y, -d.x) * position.x * w;
  } else {
    mvCenter.xy += rotated * iScale * worldScale;
  }
  gl_Position = projectionMatrix * mvCenter;
  vUv = uv;
  if (uSheet.x * uSheet.y > 1.0) {
    vUv = (vec2(uv.x, 1.0 - uv.y) + vec2(mod(iFrame, uSheet.x), floor(iFrame / uSheet.x))) / uSheet;
  }
  vColor = iColor;
}
`
), yg = (
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
function Ag(s, e, t = [0, 0], n = [1, 1]) {
  const i = Sg(e), r = new Ft({
    vertexShader: Mg,
    fragmentShader: yg,
    uniforms: { map: { value: s }, uStretch: { value: new Oe(t[0], t[1]) }, uSheet: { value: new Oe(n[0], n[1]) } },
    transparent: i.transparent,
    depthWrite: i.depthWrite,
    blending: i.blending,
    side: 2
  });
  return i.blendSrc !== void 0 && (r.blendSrc = i.blendSrc), i.blendDst !== void 0 && (r.blendDst = i.blendDst), i.premultipliedAlpha && (r.premultipliedAlpha = !0), r;
}
const Fn = new Float32Array(3), ps = new Float32Array(3), Ei = [0, 0, 0, 0], Ti = [0, 0, 0, 0], wi = Math.PI / 180;
class Eg {
  constructor(e, t, n = Math.random) {
    this.aliveCount = 0, this.colorOverride = null, this.time = 0, this.emissionAcc = 0, this.cycleTime = 0, this.burstCyclesRemaining = [], this.burstNextTime = [], this.spec = e, this.rng = n, this.maxParticles = e.maxParticles;
    const i = this.maxParticles;
    this.posX = new Float32Array(i), this.posY = new Float32Array(i), this.posZ = new Float32Array(i), this.velX = new Float32Array(i), this.velY = new Float32Array(i), this.velZ = new Float32Array(i), this.ages = new Float32Array(i), this.lifetimes = new Float32Array(i), this.debugStartSizes = new Float32Array(i), this.startColorR = new Float32Array(i), this.startColorG = new Float32Array(i), this.startColorB = new Float32Array(i), this.startColorA = new Float32Array(i), this.rotations = new Float32Array(i), this.angVels = new Float32Array(i), this.startFrames = new Float32Array(i), this.stretched = e.renderer.mode === "stretched";
    const r = e.textureSheet, a = Math.max(1, Math.round((r == null ? void 0 : r.tilesX) ?? 1)), o = Math.max(1, Math.round((r == null ? void 0 : r.tilesY) ?? 1));
    this.sheetCount = a * o, this.object3d = new it(), this.burstCyclesRemaining = e.emission.bursts.map((h) => h.cycles), this.burstNextTime = e.emission.bursts.map((h) => h.time), this.currentScales = new Float32Array(i), this.currentColors = new Float32Array(i * 4), this.instancePositions = new Float32Array(i * 3), this.instanceRotations = new Float32Array(i), this.geometry = new yp();
    const l = new ci(1, 1);
    this.geometry.index = l.index, this.geometry.attributes.position = l.attributes.position, this.geometry.attributes.uv = l.attributes.uv, this.instancePosAttr = new fn(this.instancePositions, 3), this.instancePosAttr.setUsage(35048), this.instanceScaleAttr = new fn(this.currentScales, 1), this.instanceScaleAttr.setUsage(35048), this.instanceRotAttr = new fn(this.instanceRotations, 1), this.instanceRotAttr.setUsage(35048), this.instanceColorAttr = new fn(this.currentColors, 4), this.instanceColorAttr.setUsage(35048), this.geometry.setAttribute("iPosition", this.instancePosAttr), this.geometry.setAttribute("iScale", this.instanceScaleAttr), this.geometry.setAttribute("iRotation", this.instanceRotAttr), this.geometry.setAttribute("iColor", this.instanceColorAttr), this.instanceVels = new Float32Array(i * 3), this.instanceFrames = new Float32Array(i), this.instanceVelAttr = new fn(this.instanceVels, 3), this.instanceVelAttr.setUsage(35048), this.instanceFrameAttr = new fn(this.instanceFrames, 1), this.instanceFrameAttr.setUsage(35048), this.geometry.setAttribute("iVel", this.instanceVelAttr), this.geometry.setAttribute("iFrame", this.instanceFrameAttr), this.geometry.instanceCount = 0, this.material = Ag(
      t,
      e.renderer.blendMode,
      this.stretched ? [Math.max(1e-3, e.renderer.lengthScale ?? 2), e.renderer.speedScale ?? 0] : [0, 0],
      [a, o]
    ), this.mesh = new vt(this.geometry, this.material), this.mesh.frustumCulled = !1, e.renderer.renderOrder && (this.mesh.renderOrder = e.renderer.renderOrder), this.object3d.add(this.mesh);
    const c = e.attachment;
    this.object3d.position.set(c.localPosition[0], c.localPosition[1], c.localPosition[2]), this.object3d.rotation.set(c.localRotation[0] * wi, c.localRotation[1] * wi, c.localRotation[2] * wi), this.object3d.scale.set(c.localScale[0], c.localScale[1], c.localScale[2]);
  }
  get instanceCount() {
    return this.aliveCount;
  }
  spawnOne() {
    var o;
    if (this.aliveCount >= this.maxParticles) return;
    const e = this.aliveCount++, t = this.spec;
    if (_g(t.shape, this.rng, Fn, ps), t.shape.type === "box")
      this.posX[e] = Fn[0] + t.shape.position[0], this.posY[e] = Fn[1] + t.shape.position[1], this.posZ[e] = Fn[2] + t.shape.position[2];
    else {
      const l = t.shape.scale[0], c = t.shape.scale[1], h = t.shape.scale[2];
      this.posX[e] = Fn[0] * l + t.shape.position[0], this.posY[e] = Fn[1] * c + t.shape.position[1], this.posZ[e] = Fn[2] * h + t.shape.position[2];
    }
    const n = cn(t.startSpeed, this.rng);
    this.velX[e] = ps[0] * n, this.velY[e] = ps[1] * n, this.velZ[e] = ps[2] * n, this.ages[e] = 0, this.lifetimes[e] = cn(t.startLifetime, this.rng), this.debugStartSizes[e] = cn(t.startSize, this.rng), this.rotations[e] = cn(t.startRotation, this.rng) * wi, gg(t.startColor, this.rng, Ei);
    const i = this.colorOverride ? this.colorOverride[0] : Ei[0], r = this.colorOverride ? this.colorOverride[1] : Ei[1], a = this.colorOverride ? this.colorOverride[2] : Ei[2];
    this.startColorR[e] = i * t.renderer.tintColor[0], this.startColorG[e] = r * t.renderer.tintColor[1], this.startColorB[e] = a * t.renderer.tintColor[2], this.startColorA[e] = Ei[3] * t.renderer.tintColor[3], this.angVels[e] = t.rotationOverLifetime ? cn(t.rotationOverLifetime, this.rng) * wi : 0, this.startFrames[e] = (o = t.textureSheet) != null && o.randomStart ? Math.floor(this.rng() * this.sheetCount) : 0;
  }
  update(e) {
    const t = this.spec, n = this.aliveCount, i = t.enabled !== !1;
    if (i) {
      for (this.emissionAcc += t.emission.rateOverTime * e; this.emissionAcc >= 1 && this.aliveCount < this.maxParticles; )
        this.spawnOne(), this.emissionAcc -= 1;
      this.aliveCount >= this.maxParticles && (this.emissionAcc = 0);
    }
    const r = this.cycleTime + e;
    for (let u = 0; u < t.emission.bursts.length; u++) {
      const d = t.emission.bursts[u];
      if (!(this.burstCyclesRemaining[u] <= 0 && d.cycles !== 0))
        for (; r >= this.burstNextTime[u]; ) {
          if (i && this.rng() < d.probability)
            for (let g = 0; g < d.count; g++) this.spawnOne();
          if (d.cycles !== 0 && --this.burstCyclesRemaining[u] <= 0 || d.interval <= 0) break;
          this.burstNextTime[u] += d.interval;
        }
    }
    const a = cn(t.gravityModifier, this.rng), o = t.forceOverLifetime, l = t.drag ? Math.exp(-t.drag * e) : 1, c = t.noise && t.noise.strength ? t.noise : null, h = this.sheetCount > 1 ? t.textureSheet : null;
    this.time += e;
    const f = c ? this.time * c.scrollSpeed : 0;
    for (let u = 0; u < n && u < this.aliveCount; u++) {
      if (this.ages[u] += e, this.ages[u] >= this.lifetimes[u]) {
        const _ = this.aliveCount - 1;
        u !== _ && (this.posX[u] = this.posX[_], this.posY[u] = this.posY[_], this.posZ[u] = this.posZ[_], this.velX[u] = this.velX[_], this.velY[u] = this.velY[_], this.velZ[u] = this.velZ[_], this.ages[u] = this.ages[_], this.lifetimes[u] = this.lifetimes[_], this.debugStartSizes[u] = this.debugStartSizes[_], this.startColorR[u] = this.startColorR[_], this.startColorG[u] = this.startColorG[_], this.startColorB[u] = this.startColorB[_], this.startColorA[u] = this.startColorA[_], this.rotations[u] = this.rotations[_], this.angVels[u] = this.angVels[_], this.startFrames[u] = this.startFrames[_]), this.aliveCount--, u--;
        continue;
      }
      const d = this.ages[u] / this.lifetimes[u];
      if (this.velY[u] -= 9.81 * a * e, o && (this.velX[u] += cn(o.x, this.rng) * e, this.velY[u] += cn(o.y, this.rng) * e, this.velZ[u] += cn(o.z, this.rng) * e), c) {
        const _ = c.frequency, p = c.strength * e, m = this.posX[u] * _, S = this.posY[u] * _, b = this.posZ[u] * _;
        this.velX[u] += p * (Math.sin(S + f) + Math.sin(b * 1.31 + f * 0.71 + 1.7)) * 0.5, this.velY[u] += p * (Math.sin(b + f * 0.83 + 3.1) + Math.sin(m * 1.31 + f + 0.4)) * 0.5, this.velZ[u] += p * (Math.sin(m + f * 0.67 + 5.2) + Math.sin(S * 1.31 + f * 0.91 + 2.3)) * 0.5;
      }
      if (l !== 1 && (this.velX[u] *= l, this.velY[u] *= l, this.velZ[u] *= l), this.rotations[u] += this.angVels[u] * e, this.posX[u] += this.velX[u] * e, this.posY[u] += this.velY[u] * e, this.posZ[u] += this.velZ[u] * e, this.instancePositions[u * 3] = this.posX[u], this.instancePositions[u * 3 + 1] = this.posY[u], this.instancePositions[u * 3 + 2] = this.posZ[u], this.instanceRotations[u] = this.rotations[u], this.stretched && (this.instanceVels[u * 3] = this.velX[u], this.instanceVels[u * 3 + 1] = this.velY[u], this.instanceVels[u * 3 + 2] = this.velZ[u]), h) {
        const _ = h.fps ? this.ages[u] * h.fps : Math.min(d, 0.9999) * (h.cycles ?? 1) * this.sheetCount;
        this.instanceFrames[u] = (this.startFrames[u] + Math.floor(_)) % this.sheetCount;
      }
      const g = t.sizeOverLifetime ? mg(t.sizeOverLifetime, d) : 1;
      this.currentScales[u] = this.debugStartSizes[u] * g, t.colorOverLifetime ? (hl(t.colorOverLifetime, d, Ti), this.currentColors[u * 4] = this.startColorR[u] * Ti[0], this.currentColors[u * 4 + 1] = this.startColorG[u] * Ti[1], this.currentColors[u * 4 + 2] = this.startColorB[u] * Ti[2], this.currentColors[u * 4 + 3] = this.startColorA[u] * Ti[3]) : (this.currentColors[u * 4] = this.startColorR[u], this.currentColors[u * 4 + 1] = this.startColorG[u], this.currentColors[u * 4 + 2] = this.startColorB[u], this.currentColors[u * 4 + 3] = this.startColorA[u]);
    }
    if (this.cycleTime = r, this.cycleTime >= t.duration && t.looping) {
      this.cycleTime -= t.duration;
      for (let u = 0; u < t.emission.bursts.length; u++)
        this.burstCyclesRemaining[u] = t.emission.bursts[u].cycles, this.burstNextTime[u] = Math.max(
          t.emission.bursts[u].time,
          this.burstNextTime[u] - t.duration
        );
    }
    this.geometry.instanceCount = this.aliveCount, this.instancePosAttr.needsUpdate = !0, this.instanceScaleAttr.needsUpdate = !0, this.instanceRotAttr.needsUpdate = !0, this.instanceColorAttr.needsUpdate = !0, this.stretched && (this.instanceVelAttr.needsUpdate = !0), h && (this.instanceFrameAttr.needsUpdate = !0);
  }
  dispose() {
    var e;
    this.geometry.dispose(), this.material.dispose(), (e = this.material.uniforms.map) != null && e.value && this.material.uniforms.map.value.dispose();
  }
}
async function _o(s, e, t = new Fi()) {
  const n = `${e}avatar/particles/${s}.json`, i = await fetch(n);
  if (!i.ok) throw new Error(`particle spec fetch failed: ${i.status} ${n}`);
  const r = await i.json(), a = Array.isArray(r.effects) ? r.effects : [r];
  return { effects: await Promise.all(a.map(async (l) => {
    const c = `${e}avatar/particles/${l.renderer.texture}`, h = await t.loadAsync(c);
    return h.colorSpace = ft, h.flipY = !1, { spec: l, texture: h };
  })) };
}
class Tg {
  constructor(e, t, n = new Fi()) {
    this.baseUrl = e, this.mode = t, this.textureLoader = n, this.effects = /* @__PURE__ */ new Map(), this.ctx = /* @__PURE__ */ new Map(), this.loadingSeq = /* @__PURE__ */ new Map(), this.prefetched = /* @__PURE__ */ new Map();
  }
  /** 파티클 정의·텍스처를 미리 받기 시작 (받기만 — 붙이는 건 setEffect). 파츠를 받는 동안 같이 받아 두면
   *  파츠가 붙자마자 파티클이 만들어져, 셰이더 미리 준비(precompile)에 파티클도 포함된다. */
  prefetch(e) {
    if (this.mode === "off" || this.prefetched.has(e)) return;
    const t = _o(e, this.baseUrl, this.textureLoader);
    t.catch(() => {
    }), this.prefetched.set(e, t);
  }
  async setEffect(e, t, n, i = null) {
    if (this.detach(e), this.mode === "off" || t === null || n === null) return;
    const r = (this.loadingSeq.get(e) ?? 0) + 1;
    this.loadingSeq.set(e, r);
    const a = this.prefetched.get(t);
    this.prefetched.delete(t);
    const o = await (a ?? _o(t, this.baseUrl, this.textureLoader));
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
    const a = new Eg(i, r);
    return a.colorOverride = i.colorSync === !1 ? null : n, a.object3d.position.set(0, 0, 0), e.add(a.object3d), e.userData.effect = a, a;
  }
  /** ctx.layers 로 effect 들을 (재)생성. **레이어마다 독립 오브젝트(holder)** — 씬 오브젝트 1개 =
   *  파티클 1개 = JSON 레이어 1개 (1:1). 각자 자기 localPositions 위치를 갖고 개별
   *  이동/저장된다 (Unity 의 GameObject+ParticleSystem 멘탈모델, 2026-08-19 피드백).
   *  착용/재착용 시에만 전체 재생성 — spec 스크럽은 applySpec 이 effect 만 교체. */
  rebuild(e) {
    var o, l;
    const t = this.ctx.get(e);
    if (!t) return;
    const n = this.effects.get(e);
    if (n) for (const c of n)
      c.effect.dispose(), c.holder.removeFromParent(), (o = c.holder.userData.ptcAlign) == null || o.removeFromParent();
    const i = [], r = [];
    for (let c = 0; c < t.layers.length; c++) {
      const h = t.layers[c], f = h.spec, u = [], d = /^Bip/.test(f.attachment.mountBone) ? this.findBone(t.partRoot, f.attachment.mountBone) : null;
      if (d) {
        const _ = new it();
        _.name = `PtcAlign_${f.partId}_${c}`, _.quaternion.copy(d.rest).invert(), d.node.add(_);
        const p = f.attachment.localPositions;
        for (const m of p != null && p.length ? p : [f.attachment.localPosition]) u.push({ node: _, offset: m });
      } else if (f.attachment.mountBone) for (const _ of this.findMountNames(t.partRoot, f.attachment.mountBone)) {
        const p = t.partRoot.getObjectByName(_);
        p && u.push({ node: p });
      }
      if (u.length === 0) {
        const _ = f.attachment.localPositions;
        if (_ != null && _.length) for (const p of _) u.push({ node: t.partRoot, offset: p });
        else u.push({ node: t.partRoot, offset: f.attachment.localPosition });
      }
      const g = f.name ?? `L${c + 1}`;
      for (let _ = 0; _ < u.length; _++) {
        const { node: p, offset: m } = u[_], S = new it();
        S.name = `Ptc_${f.partId}_${g}${u.length > 1 ? `_${_ + 1}` : ""}`, S.userData.ptcPartId = f.partId, S.userData.ptcLayerIndex = c, S.userData.ptcOffsetIndex = _, S.userData.ptcLayerLabel = g, m && S.position.set(m[0], m[1], m[2]), d && (S.userData.ptcAlign = p), p.add(S);
        const b = this.attachEffect(S, h, t.colorOverride);
        i.push({ effect: b, holder: S }), r.push(`${g}${m ? `@${m}` : `@${p.name || "partRoot"}`}`);
      }
    }
    this.effects.set(e, i);
    const a = ((l = t.layers[0]) == null ? void 0 : l.spec.partId) ?? "?";
    console.log(`[Particle] ${a}: ${i.length} emitter(s) / ${t.layers.length} layer(s) [${r.join(", ")}]`);
  }
  /** 이 파츠가 쓰는 살아 있는 뼈대에서 이름으로 뼈 찾기 + 기본 자세의 방향. 파츠 GLB 안에도 같은 이름의 멈춘 노드가 있어
   *  이름 검색으로는 안 된다 — 스킨 메시가 실제로 묶인 뼈(skeleton.bones)에서 찾는다. 파츠에 없으면(모자) 위로 올라가며 가장 가까운 것. */
  findBone(e, t) {
    let n = null;
    for (let i = e; i && !n; i = i.parent)
      i.traverse((r) => {
        const a = r.skeleton;
        if (n || !a) return;
        const o = a.bones.findIndex((c) => c.name === t);
        if (o < 0) return;
        const l = new Rt();
        new Re().copy(a.boneInverses[o]).invert().decompose(new P(), l, new P()), n = { node: a.bones[o], rest: l };
      });
    return n;
  }
  /** mountBone("Mount_C004_01") 의 family("Mount_C004_") 에 속한 모든 마운트 노드명 수집 (양쪽 눈). */
  findMountNames(e, t) {
    const n = t.replace(/_\d+$/, "_"), i = [];
    return e.traverse((r) => {
      r.name && r.name.startsWith(n) && /_\d+$/.test(r.name) && i.push(r.name);
    }), i.length === 0 && e.getObjectByName(t) && i.push(t), i.sort();
  }
  detach(e) {
    var i;
    const t = this.effects.get(e);
    if (t) for (const r of t)
      r.effect.dispose(), r.holder.removeFromParent(), (i = r.holder.userData.ptcAlign) == null || i.removeFromParent();
    this.effects.delete(e);
    const n = this.ctx.get(e);
    if (n) {
      for (const r of n.layers) r.texture.dispose();
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
const _r = (s, e, t) => Math.max(e, Math.min(t, s));
function wg(s, e) {
  return {
    x: _r(s.x, -e.offsetRange[0], e.offsetRange[0]),
    y: _r(s.y, -e.offsetRange[1], e.offsetRange[1]),
    s: _r(s.s, e.scaleMin, e.scaleMax)
  };
}
function Cg(s, e, t, n) {
  const i = (a) => a.r === 0 && a.g === 0 && a.b === 0 && a.a === 0;
  if (!!e && e.length > 0 && !i(e[0])) {
    const a = t && s > 0 && e.length > 1 ? 1 : 0, o = e[a], l = new re(o.r, o.g, o.b).convertSRGBToLinear();
    return new Ve(l.r, l.g, l.b, o.a);
  }
  if (n) {
    const a = new re(n[0], n[1], n[2]).convertSRGBToLinear();
    return new Ve(a.r, a.g, a.b, n[3]);
  }
  return new Ve(1, 1, 1, 1);
}
const Cr = /* @__PURE__ */ new WeakMap();
let hn = null;
function Rg() {
  try {
    const s = new URLSearchParams(location.search).get("oztexfix");
    return s === "1" ? !0 : s === "0" ? !1 : null;
  } catch {
    return null;
  }
}
function Rr() {
  var s;
  if (hn !== null) return hn;
  hn = !1;
  try {
    const e = Rg();
    if (e !== null) hn = e;
    else if (typeof ImageData < "u") {
      const t = document.createElement("canvas");
      t.width = t.height = 1;
      const n = t.getContext("webgl2", { antialias: !1 });
      if (n) {
        n.bindTexture(n.TEXTURE_2D, n.createTexture()), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA8, n.RGBA, n.UNSIGNED_BYTE, new ImageData(new Uint8ClampedArray([200, 100, 50, 255]), 1, 1)), n.bindFramebuffer(n.FRAMEBUFFER, n.createFramebuffer()), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, n.getParameter(n.TEXTURE_BINDING_2D), 0);
        const i = new Uint8Array(4);
        n.checkFramebufferStatus(n.FRAMEBUFFER) === n.FRAMEBUFFER_COMPLETE && (n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, i), hn = Math.abs(i[0] - 200) > 6 || Math.abs(i[1] - 100) > 6 || Math.abs(i[2] - 50) > 6), (s = n.getExtension("WEBGL_lose_context")) == null || s.loseContext();
      }
    }
  } catch {
    hn = !1;
  }
  hn && (Lg(), console.warn("[oz] 이 브라우저는 그림을 텍스처로 올릴 때 값을 바꾼다 — 바이트로 올리는 보정을 켠다"));
  try {
    window.__ozTexFix = hn;
  } catch {
  }
  return hn;
}
function Pg(s) {
  return s[0] === 137 && s[1] === 80 ? "image/png" : s[0] === 255 && s[1] === 216 ? "image/jpeg" : s[0] === 82 && s[1] === 73 && s[8] === 87 && s[9] === 69 ? "image/webp" : "";
}
async function Dg(s, e) {
  var o, l, c;
  const t = window.ImageDecoder;
  if (!t) return null;
  const n = await (await fetch(s)).arrayBuffer(), i = Pg(new Uint8Array(n, 0, Math.min(12, n.byteLength)));
  if (!i) return null;
  const r = new t({ data: n, type: i, colorSpaceConversion: "none", premultiplyAlpha: "none" }), a = (await r.decode()).image;
  try {
    const h = a.displayWidth, f = a.displayHeight, u = String(a.format);
    if (!/^(RGB|BGR)[AX]$/.test(u)) return null;
    const d = new Uint8Array(a.allocationSize()), g = await a.copyTo(d), _ = ((o = g == null ? void 0 : g[0]) == null ? void 0 : o.stride) ?? h * 4, p = ((l = g == null ? void 0 : g[0]) == null ? void 0 : l.offset) ?? 0, m = new Uint8Array(h * f * 4), S = u[0] === "B", b = u[3] === "X";
    for (let x = 0; x < f; x++) {
      const A = p + x * _, y = (e ? f - 1 - x : x) * h * 4;
      if (!S && !b) m.set(d.subarray(A, A + h * 4), y);
      else for (let w = 0; w < h * 4; w += 4)
        m[y + w] = d[A + w + (S ? 2 : 0)], m[y + w + 1] = d[A + w + 1], m[y + w + 2] = d[A + w + (S ? 0 : 2)], m[y + w + 3] = b ? 255 : d[A + w + 3];
    }
    return { data: m, width: h, height: f };
  } finally {
    a.close(), (c = r.close) == null || c.call(r);
  }
}
async function vo(s, e, t) {
  try {
    const n = await Dg(e, t), i = s;
    n && n.width === (i.naturalWidth ?? i.width) && n.height === (i.naturalHeight ?? i.height) && Cr.set(s, n);
  } catch (n) {
    console.warn("[oz] 그림 바이트 풀기 실패 — 캔버스로 올린다:", e, n);
  }
}
function bo(s) {
  if (!s || typeof s != "object") return null;
  const e = Cr.get(s);
  if (e)
    return Cr.delete(s), e;
  if (typeof ImageData < "u" && s instanceof ImageData) return { data: new Uint8Array(s.data.buffer, s.data.byteOffset, s.data.byteLength), width: s.width, height: s.height };
  const t = typeof HTMLImageElement < "u" && s instanceof HTMLImageElement, n = typeof ImageBitmap < "u" && s instanceof ImageBitmap;
  if (!t && !n) return null;
  const i = t ? s.naturalWidth : s.width, r = t ? s.naturalHeight : s.height;
  if (!i || !r) return null;
  const a = document.createElement("canvas");
  a.width = i, a.height = r;
  const o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) return null;
  o.drawImage(s, 0, 0);
  const l = o.getImageData(0, 0, i, r).data;
  return { data: new Uint8Array(l.buffer, l.byteOffset, l.byteLength), width: i, height: r };
}
let xo = !1;
function Lg() {
  if (xo || typeof WebGL2RenderingContext > "u") return;
  xo = !0;
  const s = WebGL2RenderingContext.prototype, e = 6408, t = 5121, n = s.texImage2D, i = s.texSubImage2D;
  s.texImage2D = function(...r) {
    try {
      const a = r.length;
      if ((a === 6 || a === 9) && r[a - 3] === e && r[a - 2] === t) {
        const o = bo(r[a - 1]);
        if (o && (a === 6 || r[3] === o.width && r[4] === o.height)) return n.call(this, r[0], r[1], r[2], o.width, o.height, 0, e, t, o.data);
      }
    } catch (a) {
      console.warn("[oz] 텍스처 올리기 보정 실패:", a);
    }
    return n.apply(this, r);
  }, s.texSubImage2D = function(...r) {
    try {
      const a = r.length;
      if ((a === 7 || a === 9) && r[a - 3] === e && r[a - 2] === t) {
        const o = bo(r[a - 1]);
        if (o && (a === 7 || r[4] === o.width && r[5] === o.height)) return i.call(this, r[0], r[1], r[2], r[3], o.width, o.height, e, t, o.data);
      }
    } catch (a) {
      console.warn("[oz] 텍스처 올리기 보정 실패:", a);
    }
    return i.apply(this, r);
  };
}
let So = !1;
function Ig() {
  if (So || typeof window > "u") return;
  So = !0;
  const s = Zo.prototype, e = s.load;
  s.load = function(i, r, a, o) {
    return e.call(this, i, (l) => {
      if (!r) return;
      if (!Rr()) return r(l);
      const c = l;
      vo(c, c.currentSrc || c.src, !1).then(() => r(l));
    }, a, o);
  };
  const t = Qo.prototype, n = t.load;
  t.load = function(i, r, a, o) {
    const l = this;
    return n.call(this, i, (c) => {
      var f;
      if (!r) return;
      if (!Rr()) return r(c);
      const h = l.manager.resolveURL(l.path !== void 0 ? l.path + i : i);
      vo(c, h, ((f = l.options) == null ? void 0 : f.imageOrientation) === "flipY").then(() => r(c));
    }, a, o);
  };
}
Ig();
const ms = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), me = class me {
  constructor(e, t) {
    this.onProgress = null, this.gltfLoader = new tl().setMeshoptDecoder(sl), this.textureLoader = new Fi(), this.boneMap = /* @__PURE__ */ new Map(), this.baseArmature = null, this.avatarRoot = new mn(), this.activeParts = /* @__PURE__ */ new Map(), this.isLoaded = !1, this.currentAvatarData = null, this.hairNodes = null, this.capMountGroup = null, this.capUseDefaultMount = !1, this.hairCapMountBone = "", this.blinkTimeUniforms = [], this.currentBlendShapes = [], this.volumeMaskEnabled = !1, this.enableCastShadow = !1, this.debugSpheres = [], this.volumeMaskTargets = [], this.headJointMatrix = null, this._resourceSizes = /* @__PURE__ */ new Map(), this._partResources = /* @__PURE__ */ new Map(), this._decalTextures = [], this._hiResQueue = /* @__PURE__ */ new Map(), this.skinColorUniform = { value: new re(0.957, 0.769, 0.725).convertSRGBToLinear() }, this.uvTransforms = /* @__PURE__ */ new Map(), this.eyeBlinkUniform = { value: 1 }, this.eyeBlinkUniformR = { value: 1 }, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = 0, this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending = !1, this.decalsBaseUrl = "avatar/decals/", this.decalsMetadata = null, this.decalsMetadataPromise = null, this.partsMetadata = null, this.partsMetadataPromise = null, this.activeDecalProjectors = /* @__PURE__ */ new Map(), this.decalCategorySlots = /* @__PURE__ */ new Map(), this.faceDecalSlots = [], this.faceSkinnedMesh = null, this.swapSeq = /* @__PURE__ */ new Map(), this.baseSkeletonGlb = "avatar/skeleton/Msh_Ava_Bip.glb", this.animBaseUrl = "avatar/animations/", this.partsBaseUrl = "avatar/parts/", this.masksBaseUrl = "avatar/masks/", this.defaultPresetJson = '{"PresetPartsDatas":[{"Category":0,"ID":"Ava_H_008","Color":{"colors":[{"r":0.878,"g":0.369,"b":0.043,"a":1.0},{"r":0.8,"g":0.455,"b":0.29,"a":1.0}]}},{"Category":1,"ID":"Ava_F_001","Color":{"colors":[{"r":0.949,"g":0.875,"b":0.863,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":2,"ID":"Ava_B_001","Color":{"colors":[{"r":0.192,"g":0.129,"b":0.075,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":3,"ID":"Ava_E_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":4,"ID":"Ava_N_001","Color":{"colors":[]}},{"Category":5,"ID":"Ava_M_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":6,"ID":"Ava_U_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":7,"ID":"Ava_L_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":9,"ID":"Ava_S_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}}],"blendShapes":[],"PresetName":"UserPreset"}', this.mixer = null, this.animClips = /* @__PURE__ */ new Map(), this.currentAction = null, this.defaultAction = null, this.poseAction = null, this.prevMotionIndex = -1, this.defaultIdleName = "Ani_Idle_001_Idle", this.deferBackground = !1, this.backgroundPending = !1, this.idleAnimations = [
      "Ani_Idle_002_Hi",
      "Ani_Idle_003_Leg",
      "Ani_Idle_004_Stretch"
    ], this.hairPhysicsEnabled = !1, this.magicaHair = null, this.fillMissingShoes = !1, this._eyeBlinkPaused = !1, this._hairShiftDir = 1, this._hairNormalScale = 1, this._busySwaps = 0, this.onBusyChange = null, this.hiResEnabled = !0, this.skeletonPrefetch = null, this._maxConcurrent = 0, this._activeFetches = 0, this._fetchQueue = [], this._decalGlbPrefetch = /* @__PURE__ */ new Map(), this.scene = e, this.baseUrl = (t == null ? void 0 : t.baseUrl) ?? "", this.onProgress = (t == null ? void 0 : t.onProgress) ?? null, this.scene.add(this.avatarRoot), this.particleSystem = new Tg(this.baseUrl, (t == null ? void 0 : t.particleMode) ?? "full"), this.deferBackground = !!(t != null && t.deferBackgroundLoads), t != null && t.idleAnimations && (this.idleAnimations = [...t.idleAnimations]), this.fillMissingShoes = !!(t != null && t.fillMissingShoes);
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
      if (!me.hairPhysicsClass) return;
      this.magicaHair = new me.hairPhysicsClass();
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
  /** 포즈 파츠의 저장 스냅샷 프레임 (partsdata-viewer.json 의 snapshotFrame — Studio 에서 포즈마다 지정, 30fps. 없으면 0) */
  getSnapshotFrame(e) {
    var t, n;
    return Number((n = (t = this.partsMetadata) == null ? void 0 : t[e]) == null ? void 0 : n.snapshotFrame) || 0;
  }
  /** 저장 스냅샷용: 포즈(trigger)의 frame(30fps) 자세로 고정 — 찍고 나서 반환된 함수로 원래 재생 상태 복원.
   *  포즈 파일을 아직 안 받았으면 받는다. Pose_Idle·모르는 포즈 = 기본 Idle */
  async forcePoseFrame(e, t) {
    if (!this.mixer) return null;
    const n = me.POSE_ANIM_MAP[e];
    let i = this.defaultAction;
    if (n) {
      const l = this.findAnimClip(n) ?? await this.loadAnimationClip(n);
      l && this.mixer && (i = this.mixer.clipAction(l));
    }
    if (!i || !this.mixer) return null;
    const r = this.currentAction, a = (r == null ? void 0 : r.time) ?? 0, o = this.mixer.timeScale;
    return this.mixer.stopAllAction(), i.reset(), i.time = Math.min(Math.max(0, t) / 30, i.getClip().duration), i.play(), this.mixer.timeScale = 0, this.mixer.update(0), this.avatarRoot.updateMatrixWorld(!0), this.updateVolumeMaskCenters(), () => {
      this.mixer.timeScale = o, this.mixer.stopAllAction(), r && (r.reset(), r.time = a, r.play()), this.currentAction = r, this.mixer.update(0);
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
  /** 머티리얼의 림 색 (.mat _Rim_Color → GLB extras _Rim_Color_R/G/B, sRGB) — 없으면 undefined(셰이더 기본색). 2026-11-26 전엔 안 실려 Studio 에서 바꿔도 웹은 기본색이었다 */
  static rimColorOf(e) {
    if (typeof (e == null ? void 0 : e._Rim_Color_R) == "number")
      return new re().setRGB(e._Rim_Color_R, e._Rim_Color_G ?? 0, e._Rim_Color_B ?? 0, ft);
  }
  /** GLB _MetallicIntensity 에 보정 배율 적용 (모든 셰이더 공통). null 이면 그대로 null(미설정 유지).
   *  metalness 는 [0,1] 이므로 1.0 으로 클램프. */
  static metallicBoosted(e) {
    return e != null ? Math.min(1, e) : void 0;
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
          var h, f, u, d, g, _;
          if (!o.isMesh) return;
          const l = o, c = Array.isArray(l.material) ? l.material : [l.material];
          for (const p of c) {
            if (p.name !== t) continue;
            const m = (h = p.userData) == null ? void 0 : h.hairUniforms;
            if (m) {
              if (n === "_BumpScale") {
                (f = p.normalScale) == null || f.set(i, i);
                return;
              }
              const b = me.HAIR_PROP_MAP[n];
              if (b && m[b]) {
                m[b].value = i;
                return;
              }
            }
            if (n === "_BumpScale" && ((u = p.userData) != null && u.uvTransformUniforms)) {
              const b = p;
              if (b.normalScale) {
                b.normalScale.set(i, i), p.userData._BumpScale = i;
                return;
              }
            }
            if (n === "_NormalInten") {
              const b = p;
              b.normalScale && b.normalScale.set(i, i), p.userData._NormalInten = i;
              return;
            }
            if (n === "_MetallicIntensity") {
              const b = me.metallicBoosted(i) ?? 0, x = (d = p.userData) == null ? void 0 : d.uniforms;
              x != null && x.metallicIntensity && (x.metallicIntensity.value = b), p.metalness = b, p.userData._MetallicIntensity = i;
              return;
            }
            if (n === "_Smoothness") {
              const b = (g = p.userData) == null ? void 0 : g.uniforms;
              b != null && b.smoothnessIntensity && (b.smoothnessIntensity.value = i), p.roughness = 1 - i, p.userData._Smoothness = i;
              return;
            }
            const S = (_ = p.userData) == null ? void 0 : _.uniforms;
            if (S) {
              const b = me.PROP_UNIFORM_MAP[n];
              if (b && S[b]) {
                S[b].value = i, n.startsWith("_Emissive_") && me.syncEffectLayer(l);
                return;
              }
            }
            p.userData[n] = i;
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
          var h, f, u, d, g;
          if (!a.isMesh) return;
          const o = a, l = o.material, c = Array.isArray(l) ? l : [l];
          for (const _ of c) {
            const p = !!((h = _.userData) != null && h.hasExplicitVolumeMask), m = e && p ? 1 : 0, S = (f = _.userData) == null ? void 0 : f.hairUniforms;
            S != null && S.volumeMaskEnable && (S.volumeMaskEnable.value = m, e && p && ((u = _.userData) != null && u.rawMaskCenterUnity) && this.volumeMaskTargets.push({
              uniforms: S,
              rawCenter: _.userData.rawMaskCenterUnity,
              mesh: o
            }));
            const b = (d = _.userData) == null ? void 0 : d.uniforms;
            b != null && b.volumeMaskEnable && (b.volumeMaskEnable.value = m, e && p && ((g = _.userData) != null && g.rawMaskCenterUnity) && this.volumeMaskTargets.push({
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
  /** 파츠를 받아 붙이는 중인가 */
  get isBusy() {
    return this._busySwaps > 0;
  }
  /** 개별 파츠 교체 (전체 리로드 없이) */
  async swapPart(e, t, n, i) {
    var r, a;
    ++this._busySwaps === 1 && ((r = this.onBusyChange) == null || r.call(this, !0));
    try {
      await this._swapPart(e, t, n, i);
    } finally {
      --this._busySwaps === 0 && ((a = this.onBusyChange) == null || a.call(this, !1));
    }
  }
  async _swapPart(e, t, n, i) {
    var S, b, x, A, y, w, D, X;
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
      if (me.isDecalCategory(e)) {
        if (this.removeDecalCategory(e), this.currentAvatarData) {
          const B = this.currentAvatarData.PresetPartsDatas.findIndex(($) => $.Category === e);
          B >= 0 && this.currentAvatarData.PresetPartsDatas.splice(B, 1);
        }
        return;
      }
      const v = l.Category.toString(), T = this.activeParts.get(v);
      if (T) {
        for (const B of T)
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
      const v = this.currentAvatarData.PresetPartsDatas.findIndex((T) => T.Category === e);
      v >= 0 ? this.currentAvatarData.PresetPartsDatas[v] = l : this.currentAvatarData.PresetPartsDatas.push(l);
    }
    if (e === 1 && this.getSkinColor(), me.isDecalCategory(e)) {
      await this.loadDecalPart(e, t, n, i == null ? void 0 : i.applySubColorToEx, o);
      return;
    }
    if (e === 17) {
      if (i != null && i.animationTrigger ? await this.playPose(i.animationTrigger) : console.warn("[Pose] animationTrigger가 없음 — options:", i), this.currentAvatarData) {
        const v = this.currentAvatarData.PresetPartsDatas.findIndex((T) => T.Category === e);
        v >= 0 ? this.currentAvatarData.PresetPartsDatas[v] = l : this.currentAvatarData.PresetPartsDatas.push(l);
      }
      return;
    }
    if (e === 4) {
      if (i != null && i.blendShapes && i.blendShapes.length > 0) {
        const v = /* @__PURE__ */ new Map();
        for (const k of this.currentBlendShapes) v.set(k.type, k.value);
        for (const k of i.blendShapes) v.set(k.type, k.value);
        const T = Array.from(v, ([k, G]) => ({ type: k, value: G }));
        this.setBlendShapes(T);
      }
      if (this.currentAvatarData) {
        const v = this.currentAvatarData.PresetPartsDatas.findIndex((T) => T.Category === e);
        v >= 0 ? this.currentAvatarData.PresetPartsDatas[v] = l : this.currentAvatarData.PresetPartsDatas.push(l);
      }
      return;
    }
    e === 8 && (this.capUseDefaultMount = !!(i != null && i.useDefaultHairCapMount)), e === 0 && (this.hairCapMountBone = (i == null ? void 0 : i.capMountBone) ?? "");
    const c = this.volumeMaskEnabled && (e === 0 || e === 11), h = (A = this.partsMetadata) == null ? void 0 : A[t], f = h == null ? void 0 : h.files;
    try {
      await this.loadAndAttachPart(l, !1, r, f);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) !== r) return;
    const u = (v) => {
      if (!c) return;
      const T = l.Category.toString(), k = `${l.Category}_Ex`;
      for (const G of [T, k]) {
        const B = this.activeParts.get(G);
        if (B) for (const $ of B) $.visible = !v;
      }
    };
    u(!0);
    try {
      await this.loadAndAttachPart(l, !0, r, f);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) !== r) return;
    if (u(!0), (e === 8 || e === 0) && this.updateHairCapVisibility(), e === 8 && this.setVolumeMask(!!(i != null && i.useVolumeMask)), this.volumeMaskEnabled && (e === 0 || e === 11 || e === 1) && this.setVolumeMask(!0), u(!1), e === 1 && this.activeDecalProjectors.size > 0 && this.reorderDecalSlots(), e === 0 && this.capMountGroup) {
      const v = this.getCapMountBone();
      v && (this.capMountGroup.removeFromParent(), this.capMountGroup.scale.set(1, 1, 1), v.add(this.capMountGroup));
    }
    if (this.currentBlendShapes.length > 0 && this.applyBlendShapes(this.currentBlendShapes), i != null && i.blendShapes && i.blendShapes.length > 0) {
      const v = /* @__PURE__ */ new Map();
      for (const k of this.currentBlendShapes) v.set(k.type, k.value);
      for (const k of i.blendShapes) v.set(k.type, k.value);
      const T = Array.from(v, ([k, G]) => ({ type: k, value: G }));
      this.setBlendShapes(T);
    }
    e === 0 && this.rebuildHairPhysics();
    const d = `${e}_Ex`, g = this.activeParts.get(d);
    g && requestAnimationFrame(() => {
      for (const v of g)
        v.visible = !1, requestAnimationFrame(() => {
          v.visible = !0;
        });
    }), this.loadHiResTextures();
    const _ = (y = this.partsMetadata) == null ? void 0 : y[t], p = !!(_ != null && _.hasParticle), m = ((w = this.activeParts.get(e.toString())) == null ? void 0 : w[0]) ?? null;
    console.log(`[Particle] swapPart ${t} cat=${e} hasParticle=${p} partRoot=${(m == null ? void 0 : m.name) ?? "null"}`), (this.swapSeq.get(e) ?? 0) === r ? this.particleSystem.setEffect(
      e,
      p ? t : null,
      p ? m : null,
      p ? me.particleEyeColor(n, ((D = l.Color) == null ? void 0 : D.effectColors) ?? ((X = this.effectColorResolver) == null ? void 0 : X.call(this, e, t, n))) : null
    ).then(() => console.log(`[Particle] setEffect resolved for ${t}`)).catch((v) => console.warn(`[Particle] setEffect failed for ${t}:`, v)) : console.log(`[Particle] swapSeq mismatch, skipping setEffect for ${t}`);
  }
  /** Pose 애니메이션 재생 (trigger 이름으로 매칭, LoopRepeat) */
  async playPose(e) {
    if (!this.mixer) return;
    const t = me.POSE_ANIM_MAP[e];
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
    var f, u, d, g, _, p, m, S, b, x;
    this.currentAvatarData = e, this.clearAvatar(), (f = this.onProgress) == null || f.call(this, 0), this.getSkinColor(), performance.now(), this.loadPartsMetadata(), this.prefetchDecals(e), performance.now();
    try {
      await this.loadBaseSkeleton();
    } catch (A) {
      console.error("[AvatarViewer] 스켈레톤 로드 실패:", A);
    }
    if (this.boneMap.size === 0) {
      console.error("[AvatarViewer] 본 노드 없음");
      return;
    }
    this.avatarRoot.updateMatrixWorld(!0), performance.now();
    const t = await this.loadPartsMetadata(), n = [], i = [];
    let r = null, a = null;
    for (const A of e.PresetPartsDatas) {
      if (!A.ID || A.ID === "") continue;
      const y = (u = t[A.ID]) == null ? void 0 : u.category;
      typeof y == "number" && y !== A.Category && (A.Category = y);
      const w = me.isDecalCategory(A.Category), D = A.Category === 17;
      if (!w && !D && !t[A.ID]) {
        console.warn(`[AvatarViewer] partsdata에 없는 파츠 — skip: ${A.ID}`);
        continue;
      }
      if (D) {
        a = A;
        continue;
      }
      if (w)
        n.push(A);
      else if (A.Category === 8)
        r = A;
      else {
        if (A.Category === 0) {
          const X = t[A.ID];
          this.hairCapMountBone = (X == null ? void 0 : X.capMountBone) ?? "";
        }
        i.push(A);
      }
    }
    if (this.fillMissingShoes && !i.some(
      (A) => A.Category === 9
      /* Shoes */
    ) && t[me.DEFAULT_SHOES.ID]) {
      const A = JSON.parse(JSON.stringify(me.DEFAULT_SHOES)), y = e.PresetPartsDatas.findIndex((w) => w.Category === 9 && !w.ID);
      y >= 0 ? e.PresetPartsDatas[y] = A : e.PresetPartsDatas.push(A), i.push(A);
    }
    r && ((d = t[r.ID]) != null && d.hasParticle) && this.particleSystem.prefetch(r.ID);
    const o = i.reduce((A, y) => {
      var D;
      const w = (D = t[y.ID]) == null ? void 0 : D.files;
      return A + ((w == null ? void 0 : w.glb) !== !1 ? 1 : 0) + ((w == null ? void 0 : w.ex) !== !1 ? 1 : 0);
    }, 0) + (r ? 1 : 0);
    let l = 0;
    const c = () => {
      var A;
      l++, (A = this.onProgress) == null || A.call(this, 50 + l / Math.max(1, o) * 50);
    };
    if (await Promise.all(i.flatMap((A) => {
      var D;
      const y = (D = t[A.ID]) == null ? void 0 : D.files, w = [];
      return (y == null ? void 0 : y.glb) !== !1 && w.push((async () => {
        try {
          await this.loadAndAttachPart(A, !1, void 0, y);
        } catch (X) {
          console.warn(`[AvatarViewer] 파츠 로드 실패: ${A.ID}`, X);
        }
        c();
      })()), (y == null ? void 0 : y.ex) !== !1 && w.push((async () => {
        try {
          await this.loadAndAttachPart(A, !0, void 0, y);
        } catch {
        }
        c();
      })()), w;
    })), r) {
      const A = t[r.ID];
      this.capUseDefaultMount = !!(A != null && A.useDefaultHairCapMount), performance.now();
      try {
        await this.loadAndAttachPart(r, !1, void 0, A == null ? void 0 : A.files);
      } catch (y) {
        console.warn(`[AvatarViewer] Cap 로드 실패: ${r.ID}`, y);
      }
      if (c(), this.updateHairCapVisibility(), A != null && A.useVolumeMask && this.setVolumeMask(!0), A != null && A.hasParticle) {
        const y = ((g = this.activeParts.get(r.Category.toString())) == null ? void 0 : g[0]) ?? null;
        y && this.particleSystem.setEffect(r.Category, r.ID, y, me.particleEyeColor((_ = r.Color) == null ? void 0 : _.colors, this.fxColors(r))).catch((w) => console.warn(`[Particle] setEffect failed for ${r.ID}:`, w));
      }
    }
    const h = /* @__PURE__ */ new Set();
    r && ((p = t[r.ID]) != null && p.hasParticle) && h.add(r.Category);
    for (const A of i) {
      if (!((m = t[A.ID]) != null && m.hasParticle)) continue;
      const y = ((S = this.activeParts.get(A.Category.toString())) == null ? void 0 : S[0]) ?? null;
      y && (h.add(A.Category), this.particleSystem.setEffect(A.Category, A.ID, y, me.particleEyeColor((b = A.Color) == null ? void 0 : b.colors, this.fxColors(A))).catch((w) => console.warn(`[Particle] setEffect failed for ${A.ID}:`, w)));
    }
    for (const A of this.particleSystem.activeCategories()) h.has(A) || this.particleSystem.setEffect(A, null, null);
    if (n.length > 0) {
      performance.now();
      for (const A of n)
        try {
          const y = t[A.ID];
          await this.loadDecalPart(A.Category, A.ID, (x = A.Color) == null ? void 0 : x.colors, !!(y != null && y.applySubColorToEx), A.Custom);
        } catch (y) {
          console.warn(`[Decal] 로드 실패: ${A.ID}`, y);
        }
    }
    if (performance.now(), e.blendShapes && this.applyBlendShapes(e.blendShapes), this.updateHairCapVisibility(), this.resetEyeBlink(), this.avatarRoot.traverse((A) => {
      A.isMesh && (A.frustumCulled = !1);
    }), performance.now(), this.animClips.size > 0 && this.initializeAnimation(), a) {
      const A = t[a.ID], y = (A == null ? void 0 : A.animationTrigger) ?? a.AnimationTrigger;
      y && await this.playPose(y);
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
    const e = new Fi(), t = (l) => new Promise((c) => {
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
    var Q, _e, fe, Ie, Pe;
    const r = e.ID, a = t ? "_Ex" : "", o = i ?? {};
    if (t && o.ex === !1 || !t && o.glb === !1) return;
    const l = this.resolve(`${this.partsBaseUrl}${r}${a}.glb`), c = t ? `${e.Category}_Ex` : e.Category.toString(), f = [
      1,
      6,
      7,
      9,
      10,
      8
      /* Cap */
    ].includes(e.Category) && !t;
    let u = null, d = null, g = null;
    const _ = {}, m = [
      3,
      2,
      5
      /* Mouth */
    ].includes(e.Category);
    let S = null, b = null;
    const x = (e.Category === 0 || e.Category === 11) && !t;
    let A = null, y = null;
    const w = (Z) => this.loadTexture(Z).catch(() => null), D = (async () => {
      if (f) {
        performance.now();
        const [Z, ee, ie, R] = await Promise.all([
          o.mask1 ? w(this.resolve(`${this.masksBaseUrl}${r}_mask1.${o.mask1}`)) : Promise.resolve(null),
          o.mask2 ? w(this.resolve(`${this.masksBaseUrl}${r}_mask2.${o.mask2}`)) : Promise.resolve(null),
          o.pbr ? w(this.resolve(`${this.masksBaseUrl}${r}_pbr.${o.pbr}`)) : Promise.resolve(null),
          o.emissive ? w(this.resolve(`${this.masksBaseUrl}${r}_emissive.${o.emissive}`)) : Promise.resolve(null)
        ]);
        Z && ee ? u = { mask1: Z, mask2: ee, pbr: ie ?? void 0 } : Z && (d = { mask: Z, pbr: ie ?? void 0, emissive: R }), g = R;
        const ve = { mask1: Z, mask2: ee, pbr: ie, emissive: R };
        await Promise.all(Object.entries(o.sub ?? {}).map(async ([Ne, Ee]) => {
          const ke = (H) => Ee[H] ? Ee[H] === "=" ? Promise.resolve(ve[H]) : w(this.resolve(`${this.masksBaseUrl}${r}_sub_${H}.${Ee[H]}`)) : Promise.resolve(null), [Ce, C, M, F] = await Promise.all([ke("mask1"), ke("mask2"), ke("pbr"), ke("emissive")]);
          _[Ne] = { mask1: Ce, mask2: C, pbr: M, emissive: F };
        }));
      } else if (m) {
        const Z = t ? o.exMask1 : o.mask1, ee = t ? o.exNormal : o.normal, [ie, R] = await Promise.all([
          Z ? w(this.resolve(`${this.masksBaseUrl}${r}${a}_mask1.${Z}`)) : Promise.resolve(null),
          // 노말맵: Sprite_MaskTint 셰이더의 _Normal_Map (눈/입/눈썹 가짜 3D 음영).
          // main / Ex 별도 export되므로 suffix에 따라 다른 파일 로드.
          ee ? w(this.resolve(`${this.masksBaseUrl}${r}${a}_normal.${ee}`)) : Promise.resolve(null)
        ]);
        S = ie, b = R;
      } else if (x) {
        performance.now();
        const [Z, ee] = await Promise.all([
          o.mask ? w(this.resolve(`${this.masksBaseUrl}${r}_mask.${o.mask}`)) : Promise.resolve(null),
          o.normal ? w(this.resolve(`${this.masksBaseUrl}${r}_normal.${o.normal}`)) : Promise.resolve(null)
        ]);
        A = Z, y = ee, Z || console.warn(`[AvatarViewer] 헤어 마스크 텍스처 로드 실패: ${r}`);
      }
    })(), X = (async () => {
      const Z = await this.fetchWithProgress(l);
      return this._resourceSizes.set(l, Z.byteLength), new Promise((ee, ie) => {
        this.gltfLoader.parse(Z.slice(0), "", ee, ie);
      });
    })(), [v] = await Promise.all([X, D]);
    if (n !== void 0 && this.swapSeq.get(e.Category) !== n) return;
    const T = ["Hair", "FaceType", "EyeBrow", "Eye", "Nose", "Mouth", "Upper", "Lower", "Cap", "Shoes", "Glasses", "Whiskers"], k = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), B = (Q = v.parser) == null ? void 0 : Q.json;
    if (B != null && B.images) {
      const Z = B.images.map((ie) => {
        var R, Me;
        return ie.bufferView != null ? ((Me = (R = B.bufferViews) == null ? void 0 : R[ie.bufferView]) == null ? void 0 : Me.byteLength) ?? 0 : 0;
      }), ee = (_e = v.parser) == null ? void 0 : _e.associations;
      if (ee) {
        for (const [ie, R] of ee)
          if ((R == null ? void 0 : R.textures) !== void 0 && (ie != null && ie.isTexture)) {
            const Me = (Ie = (fe = B.textures) == null ? void 0 : fe[R.textures]) == null ? void 0 : Ie.source;
            if (Me !== void 0) {
              k.set(ie, Z[Me] ?? 0);
              const ve = ((Pe = B.images[Me]) == null ? void 0 : Pe.mimeType) ?? "";
              G.set(ie, ve);
            }
          }
      }
    }
    v.scene.traverse((Z) => {
      const ee = Z;
      if (!ee.isMesh || ee.geometry.attributes.color) return;
      const ie = ee.geometry.attributes.position.count;
      ee.geometry.setAttribute("color", new Mt(new Uint8Array(ie * 4).fill(255), 4, !0));
      for (const R of Array.isArray(ee.material) ? ee.material : [ee.material]) R && (R.vertexColors = !0);
    });
    const $ = /* @__PURE__ */ new Set(), z = [], J = [], V = [], he = /* @__PURE__ */ new Set();
    v.scene.traverse((Z) => {
      if (!Z.isMesh) return;
      const ee = Z, ie = ee.geometry, R = Array.isArray(ee.material) ? ee.material : [ee.material], Me = [];
      for (const ke of R) {
        const Ce = ke.name || "unnamed";
        if (Me.push(Ce), !he.has(Ce)) {
          he.add(Ce);
          const C = {};
          for (const [M, F] of Object.entries(ke.userData))
            typeof F == "number" && (C[M] = F);
          C._Emissive_Strangth != null && (C._Emissive_Tint_Gamma ?? (C._Emissive_Tint_Gamma = me.EMISSIVE_TINT_GAMMA)), Object.keys(C).length > 0 && V.push({ materialName: Ce, properties: C });
        }
        if (ke instanceof dn) {
          const C = [
            ["map", ke.map],
            ["normalMap", ke.normalMap],
            ["aoMap", ke.aoMap],
            ["emissiveMap", ke.emissiveMap],
            ["roughnessMap", ke.roughnessMap],
            ["metalnessMap", ke.metalnessMap]
          ];
          for (const [M, F] of C)
            if (F && !$.has(F)) {
              $.add(F);
              const H = F.image, Y = G.get(F) ?? "", q = Y === "image/jpeg" ? ".jpg" : Y === "image/png" ? ".png" : "";
              z.push({
                type: M,
                name: (F.name || "") + q,
                url: "",
                size: k.get(F) ?? 0,
                texture: F,
                width: (H == null ? void 0 : H.width) ?? 0,
                height: (H == null ? void 0 : H.height) ?? 0
              });
            }
        }
      }
      const ve = ie.getAttribute("position"), Ne = ve ? ve.count : 0, Ee = ie.index ? ie.index.count : Ne;
      J.push({
        name: ee.name || "unnamed",
        vertexCount: Ne,
        triangleCount: Math.floor(Ee / 3),
        materialNames: Me
      });
    });
    const ue = [], oe = (Z, ee, ie) => {
      if (!ee) return;
      const R = this.resolve(`${this.masksBaseUrl}${r}${ie}`), Me = ee.image, ve = R.split("/").pop() || "";
      ue.push({
        type: Z,
        name: ve,
        url: R,
        size: this._resourceSizes.get(R) ?? 0,
        texture: ee,
        width: (Me == null ? void 0 : Me.width) ?? 0,
        height: (Me == null ? void 0 : Me.height) ?? 0
      });
    };
    if (u) {
      const Z = u;
      oe("mask1", Z.mask1, `_mask1.${o.mask1 || "png"}`), oe("mask2", Z.mask2, `_mask2.${o.mask2 || "png"}`), oe("pbr", Z.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (d) {
      const Z = d;
      oe("mask", Z.mask, `_mask1.${o.mask1 || "png"}`), oe("pbr", Z.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (g && oe("emissive", g, `_emissive.${o.emissive || "png"}`), S && oe("mask1", S, `${a}_mask1.${(t ? o.exMask1 : o.mask1) || "png"}`), b && oe("normal", b, `${a}_normal.${(t ? o.exNormal : o.normal) || "png"}`), A && oe("mask", A, `_mask.${o.mask || "png"}`), y && oe("normal", y, `_normal.${o.normal || "png"}`), this._partResources.set(c, {
      partId: r + a,
      category: e.Category,
      categoryName: T[e.Category] ?? `Cat${e.Category}`,
      isEx: t,
      glbUrl: l,
      glbSize: this._resourceSizes.get(l) ?? 0,
      embeddedTextures: z,
      externalTextures: ue,
      meshes: J,
      materials: V
    }), e.Category === 0 && !t) {
      const Z = this.isCapActive(), ee = [];
      let ie = null;
      const R = (Me) => {
        for (let ve = Me.parent; ve; ve = ve.parent) if (ve.name.endsWith("_Cap")) return !0;
        return !1;
      };
      v.scene.traverse((Me) => {
        Me.name.endsWith("_Cap") ? (ie = Me, Me.visible = Z) : Me.isSkinnedMesh && !R(Me) && (ee.push(Me), Me.visible = !Z);
      }), ee.length && ie ? this.hairNodes = { normal: ee, cap: ie } : this.hairNodes = null;
    }
    const We = e.Category === 8 && !t, Ye = We ? this.getCapMountBone() : null;
    if (v.scene.traverse((Z) => {
      var ee, ie, R, Me, ve, Ne, Ee, ke, Ce;
      if (Z.isSkinnedMesh) {
        const C = Z;
        We || this.rebindToBaseSkeleton(C);
        const M = C.material.name;
        if (M != null && M.endsWith("_Lens")) {
          this.applyLensMaterial(C, (ee = e.Color) == null ? void 0 : ee.colors);
          return;
        }
        if (M != null && M.endsWith("_Lamp")) {
          if (g) {
            const H = C.material, Y = H.userData, { material: q, timeUniform: Ae } = dg(H, {
              emissiveMap: g,
              emissiveStrength: Y._Emissive_Strangth ?? 10,
              emissiveTintGamma: Y._Emissive_Tint_Gamma ?? me.EMISSIVE_TINT_GAMMA,
              // 색공간 보정 — 2.2 = Unity(sRGB 텍스처), 머티리얼에 값이 있으면 그것
              blinkSpeed: Y._Blink_Speed ?? 0.5,
              mapTiling: [Y._Map_Tiling_X ?? 2, Y._Map_Tiling_Y ?? 4],
              metallicIntensity: me.metallicBoosted(Y._MetallicIntensity),
              smoothness: Y._Smoothness
            });
            C.material = q, C.layers.enable(gr), this.blinkTimeUniforms.push(Ae);
          }
          return;
        }
        const F = M ? _[M] : void 0;
        if (F) {
          C.userData.ozSubOwn = !0, F.mask1 && F.mask2 ? this.applyMask2TintMaterial(C, { mask1: F.mask1, mask2: F.mask2, pbr: F.pbr ?? void 0 }, (ie = e.Color) == null ? void 0 : ie.colors, F.emissive, this.fxColors(e)) : F.mask1 ? this.applyMaskTintMaterial(C, { mask: F.mask1, pbr: F.pbr ?? void 0, emissive: F.emissive }, e.Category, (R = e.Color) == null ? void 0 : R.colors, this.fxColors(e)) : (Me = e.Color) != null && Me.colors && this.applyColorsToMesh(C, e.Category, e.Color.colors);
          return;
        }
        if (S) {
          if (this.applySpriteMaskTintMaterial(C, S, (ve = e.Color) == null ? void 0 : ve.colors, e.Category, t, b), b) {
            const Y = C.material.name || "unnamed";
            V.find((q) => q.materialName === Y) || V.push({ materialName: Y, properties: { _BumpScale: 1 } });
          }
        } else if (x) {
          const H = C.material, Y = A ?? H.aoMap;
          Y && this.applyHairMaterial(C, Y, (Ne = e.Color) == null ? void 0 : Ne.colors, y);
        } else u ? this.applyMask2TintMaterial(C, u, (Ee = e.Color) == null ? void 0 : Ee.colors, g, this.fxColors(e)) : d ? this.applyMaskTintMaterial(C, d, e.Category, (ke = e.Color) == null ? void 0 : ke.colors, this.fxColors(e)) : (Ce = e.Color) != null && Ce.colors && this.applyColorsToMesh(C, e.Category, e.Color.colors);
      }
    }), We && Ye) {
      this.capMountGroup && (this.capMountGroup.removeFromParent(), this.disposeMeshes(this.capMountGroup));
      const Z = new mn();
      Z.name = e.ID, v.scene.updateMatrixWorld(!0);
      const ee = v.scene.matrixWorld.clone().invert();
      v.scene.traverse((R) => {
        if (R.isSkinnedMesh) {
          const Me = R, ve = new vt(Me.geometry, Me.material);
          ve.name = Me.name, ve.frustumCulled = !1, ve.layers.mask = Me.layers.mask, ee.clone().multiply(Me.matrixWorld).decompose(ve.position, ve.quaternion, ve.scale), Z.add(ve);
        } else if (R.name && R.name.startsWith("Mount_")) {
          const Me = new it();
          Me.name = R.name, ee.clone().multiply(R.matrixWorld).decompose(Me.position, Me.quaternion, Me.scale), Z.add(Me);
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
      v.scene.traverse((ee) => {
        ee.isMesh && (ee.frustumCulled = !1);
      }), this.avatarRoot.add(v.scene);
      const Z = this.activeParts.get(c);
      if (Z)
        for (const ee of Z)
          this.avatarRoot.remove(ee), this.disposeMeshes(ee);
      this.activeParts.set(c, [v.scene]);
    }
    this.enableCastShadow && v.scene.traverse((Z) => {
      Z.isMesh && (Z.castShadow = !0);
    });
    const j = o.hi;
    if (j && Object.keys(j).length > 0) {
      const Z = [], ee = [];
      u ? (j.mask1 && ee.push(["mask1", "maskTintMap1", "_mask1@2x.webp"]), j.mask2 && ee.push(["mask2", "maskTintMap2", "_mask2@2x.webp"]), j.pbr && ee.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : d ? (j.mask1 && ee.push(["mask1", "maskTintMap", "_mask1@2x.webp"]), j.pbr && ee.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : m ? (j[t ? "exMask1" : "mask1"] || j.mask1) && ee.push(["mask1", "maskTintMap", `${a}_mask1@2x.webp`]) : x && j.mask && ee.push(["mask", "hairMaskMap", "_mask@2x.webp"]), v.scene.traverse((ie) => {
        var ve;
        if (!ie.isMesh) return;
        const R = ie.material, Me = (ve = R == null ? void 0 : R.userData) == null ? void 0 : ve.uniforms;
        if (!(!Me || ie.userData.ozSubOwn))
          for (const [, Ne, Ee] of ee)
            Me[Ne] && Z.push({
              uniform: Me[Ne],
              url: this.resolve(`${this.masksBaseUrl}${r}${Ee}`)
            });
      }), j.normal && y && v.scene.traverse((ie) => {
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
      } catch (u) {
        if (i < n - 1) {
          await new Promise((d) => setTimeout(d, 500 * (i + 1)));
          continue;
        }
        throw u;
      }
      if (r.status === 429 && i < n - 1) {
        await new Promise((u) => setTimeout(u, 300 * (i + 1)));
        continue;
      }
      if (!r.ok) throw new Error(`Fetch failed ${r.status}: ${e}`);
      const a = parseInt(r.headers.get("content-length") || "0", 10);
      if (!r.body || a <= 0) {
        const u = await r.arrayBuffer();
        return t(1), u;
      }
      const o = r.body.getReader(), l = [];
      let c = 0;
      for (; ; ) {
        const { done: u, value: d } = await o.read();
        if (u) break;
        l.push(d), c += d.byteLength, t(c / a);
      }
      const h = new Uint8Array(c);
      let f = 0;
      for (const u of l)
        h.set(u, f), f += u.byteLength;
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
    const n = ms.get(e);
    if (n) return n;
    await this._acquireFetchSlot();
    const i = ms.get(e);
    if (i)
      return this._releaseFetchSlot(), i;
    const r = this._fetchWithProgressInner(e, t);
    ms.set(e, r);
    try {
      return await r;
    } catch (a) {
      throw ms.delete(e), a;
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
    const t = vr.get(e);
    if (t) return t;
    const n = this._loadTextureInner(e);
    vr.set(e, n);
    try {
      return await n;
    } catch (i) {
      throw vr.delete(e), i;
    }
  }
  async _loadTextureInner(e) {
    const t = await this.fetchWithProgress(e), n = new Blob([t]);
    if (this._resourceSizes.set(e, n.size), typeof createImageBitmap == "function" && !Rr())
      try {
        const r = await createImageBitmap(n, { premultiplyAlpha: "none", colorSpaceConversion: "none" }), a = new dt(r);
        return a.flipY = !1, a.colorSpace = ut, a.needsUpdate = !0, a;
      } catch {
      }
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
    const n = new re(t.r, t.g, t.b).convertSRGBToLinear();
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
    return n ? new re(n.r, n.g, n.b) : void 0;
  }
  /** GLB 머티리얼 extras(.mat 값) → 효과 레이어 파라미터 (MaskTint·Mask2Tint 공용, ozEffectLayer.ts) */
  static effectLayerParams(e, t, n) {
    return (e._Emissive_Flow_X || e._Emissive_Flow_Y) && me.setRepeatWrap(t), {
      emissiveMap: t,
      emissiveStrength: e._Emissive_Strangth,
      emissiveTintColor: n,
      emissiveTintGamma: e._Emissive_Tint_Gamma ?? me.EMISSIVE_TINT_GAMMA,
      // 색공간 보정 — 2.2 = Unity(sRGB), 머티리얼에 값이 있으면 그것
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
    me.syncEffectLayer(e);
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
      for (const o of n) ((i = o.emissiveFlowX) != null && i.value || (r = o.emissiveFlowY) != null && r.value) && me.setRepeatWrap((a = o.emissiveMap) == null ? void 0 : a.value);
      t.some((o) => ag(o)) ? e.layers.enable(gr) : e.layers.disable(gr);
    }
  }
  applyMask2TintMaterial(e, t, n, i, r) {
    const o = (Array.isArray(e.material) ? e.material : [e.material]).map((l) => {
      if (!(l instanceof dn)) return l;
      const c = (x) => new re(x.r, x.g, x.b).convertSRGBToLinear(), h = n != null && n[0] ? c(n[0]) : void 0, f = n != null && n[1] ? c(n[1]) : void 0, u = n != null && n[2] ? c(n[2]) : void 0, d = n != null && n[3] ? c(n[3]) : void 0, g = n != null && n[4] ? c(n[4]) : void 0, _ = l.userData, p = _._Emissive_Strangth != null && i, m = _._Mask_Center_X != null ? new P(_._Mask_Center_X, _._Mask_Center_Y, _._Mask_Center_Z) : void 0, S = _._Mask_Radius ?? void 0, b = og(l, {
        maskTintMap1: t.mask1,
        maskTintMap2: t.mask2,
        pbrMaskMap: t.pbr,
        tintColorR1Uniform: this.skinColorUniform,
        tintColorG1: h,
        tintColorB1: f,
        tintColorR2: u,
        tintColorG2: d,
        tintColorB2: g,
        metallicIntensity: me.metallicBoosted(_._MetallicIntensity),
        smoothness: _._Smoothness,
        aoIntensity: _._AOIntensity,
        rimPower: _._Rim_Power,
        rimColor: me.rimColorOf(_),
        specularGain: _._Specular_Gain,
        rimEdgePower: _._Rim_Edge_Power,
        ...p ? me.effectLayerParams(_, i, me.effectTint(n == null ? void 0 : n[4], r)) : {},
        // _Mask2_Tint_B = colors[4] (raw, Unity SetColor 매칭)
        maskRadius: S
      });
      return m && (b.userData.rawMaskCenterUnity = m.clone(), b.userData.hasExplicitVolumeMask = !0), b;
    });
    e.material = o.length === 1 ? o[0] : o, this.registerEffectLayer(e, o), this.attachVolumeMaskDepthMaterial(e);
  }
  applyMaskTintMaterial(e, t, n, i, r) {
    const o = (Array.isArray(e.material) ? e.material : [e.material]).map((l) => {
      if (!(l instanceof dn)) return l;
      const c = (b) => new re(b.r, b.g, b.b).convertSRGBToLinear();
      let h, f, u, d = !1;
      n === 1 ? (h = i != null && i[0] ? c(i[0]) : void 0, f = i != null && i[1] ? c(i[1]) : void 0) : n === 10 ? (h = new re(0, 0, 0), f = i != null && i[0] ? c(i[0]) : void 0, u = i != null && i[1] ? c(i[1]) : void 0) : (d = !0, f = i != null && i[0] ? c(i[0]) : void 0, u = i != null && i[1] ? c(i[1]) : void 0);
      const g = l.userData, _ = g._Mask_Center_X != null ? new P(g._Mask_Center_X, g._Mask_Center_Y, g._Mask_Center_Z) : void 0, p = g._Mask_Radius ?? void 0, m = n === 1, S = cg(l, {
        maskTintMap: t.mask,
        pbrMaskMap: t.pbr,
        tintColorR: h,
        tintColorRUniform: d ? this.skinColorUniform : void 0,
        tintColorG: f,
        tintColorB: u,
        metallicIntensity: me.metallicBoosted(g._MetallicIntensity),
        smoothness: g._Smoothness,
        aoIntensity: g._AOIntensity,
        rimPower: g._Rim_Power,
        rimColor: me.rimColorOf(g),
        specularGain: g._Specular_Gain,
        rimEdgePower: g._Rim_Edge_Power,
        maskRadius: p,
        decalSlots: m ? me.MAX_DECAL_SLOTS : 0,
        // 효과 레이어 — Mask2Tint 와 같은 조건(효과 텍스처 + _Emissive_Strangth). 색 = 두 번째 색(colors[1], raw)
        ...g._Emissive_Strangth != null && t.emissive ? me.effectLayerParams(g, t.emissive, me.effectTint(i == null ? void 0 : i[1], r)) : {}
      });
      if (_ && (S.userData.rawMaskCenterUnity = _.clone(), S.userData.hasExplicitVolumeMask = !0), m) {
        const b = lg(S);
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
    const f = o.map((u) => {
      if (!(u instanceof dn)) return u;
      const d = (p) => new re(p.r, p.g, p.b).convertSRGBToLinear(), g = n != null && n[0] ? d(n[0]) : void 0, _ = n != null && n[1] ? d(n[1]) : void 0;
      return ug(u, {
        maskTintMap: t,
        tintColorRUniform: this.skinColorUniform,
        tintColorG: g,
        tintColorB: _,
        uvScaleYEyeBlink: l ? r ? this.eyeBlinkUniformR : this.eyeBlinkUniform : void 0,
        uvTransform: h,
        normalMap: a ?? void 0
      });
    });
    e.material = f.length === 1 ? f[0] : f;
  }
  applyHairMaterial(e, t, n, i) {
    const a = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof dn)) return o;
      const l = (p) => new re(p.r, p.g, p.b).convertSRGBToLinear(), c = n != null && n[0] ? l(n[0]) : void 0, h = n != null && n[1] ? l(n[1]) : void 0, f = o.transparent, u = o.userData, d = u._Mask_Center_X != null ? new P(u._Mask_Center_X, u._Mask_Center_Y, u._Mask_Center_Z) : void 0, g = u._Mask_Radius ?? void 0, _ = hg(o, {
        baseColor: c,
        specColor: h,
        maskMap: t,
        normalMap: i ?? void 0,
        blend: f,
        smoothness: u._Smoothness,
        specularShift: u._SpecularShift,
        specularExponent: u._SpecularExponent,
        secondarySpecularShift: u._SecondarySpecularShift,
        secondarySpecularExponent: u._SecondarySpecularExponent,
        enableSecondaryLobe: u._EnableSecondaryLobe !== 0,
        hairRim: u._Hair_Rim ?? (f ? 1.5 : void 0),
        normalInten: u._BumpScale,
        shiftDirection: this._hairShiftDir,
        maskRadius: g
      });
      return d && (_.userData.rawMaskCenterUnity = d.clone(), _.userData.hasExplicitVolumeMask = !0), _;
    });
    e.material = a.length === 1 ? a[0] : a, this.attachVolumeMaskDepthMaterial(e);
  }
  applyLensMaterial(e, t) {
    const n = e.material;
    n.transparent && (e.renderOrder = me.LENS_RENDER_ORDER);
    const i = n.aoMap, r = (h) => new re(h.r, h.g, h.b).convertSRGBToLinear(), a = t != null && t[2] ? r(t[2]) : void 0, o = t != null && t[3] ? r(t[3]) : void 0, l = t != null && t[4] ? r(t[4]) : void 0, c = n.userData;
    e.material = fg(n, {
      pbrMaskMap: i ?? void 0,
      topColor: a,
      bottomColor: o,
      specularColor: l,
      gradientSmooth: c._Gradient_Smooth,
      gradientPosition: c._Gradient_Position,
      specularPower: c._Specular_Power,
      fresnelPower: c._Fresnel_Power,
      smoothness: c._Smoothness,
      metallicIntensity: me.metallicBoosted(c._MetallicIntensity),
      aoIntensity: c._AOIntensity
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
    const i = new Cs(n, t.boneInverses);
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
    const i = new Vo({
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
      if (r instanceof dn && n.length > 0 && n[0]) {
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
          const r = ul[i.type];
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
    this.mixer = new kp(this.avatarRoot);
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
        if (this.eyeBlinkElapsed += e, this.eyeBlinkElapsed >= me.BLINK_DURATION)
          this.setEyeBlinkValue(1), this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending ? (this.eyeBlinkDoublePending = !1, this.eyeBlinkNextAt = 0.1) : this.eyeBlinkNextAt = me.BLINK_MIN_INTERVAL + Math.random() * (me.BLINK_MAX_INTERVAL - me.BLINK_MIN_INTERVAL);
        else {
          const t = this.eyeBlinkElapsed / me.BLINK_DURATION, n = Math.sin(t * Math.PI);
          this.setEyeBlinkValue(1 - n * 0.85);
        }
        return;
      }
      this.eyeBlinkTimer += e, this.eyeBlinkTimer >= this.eyeBlinkNextAt && (this.eyeBlinkTimer = 0, this.eyeBlinkElapsed = 0, this.eyeBlinkDoublePending = Math.random() < me.BLINK_DOUBLE_CHANCE);
    }
  }
  /** 눈 깜빡임 타이머 초기화 (파츠 로드 완료 후 호출) */
  resetEyeBlink() {
    this.setEyeBlinkValue(1), this.eyeBlinkElapsed = -1, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = me.BLINK_MIN_INTERVAL + Math.random() * (me.BLINK_MAX_INTERVAL - me.BLINK_MIN_INTERVAL), this.eyeBlinkDoublePending = !1;
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
    const t = e.PresetPartsDatas.filter((n) => n.ID && me.isDecalCategory(n.Category)).map((n) => n.ID);
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
        return cl(n), this.partsMetadata = n, n;
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
      var p;
      return Cg(_, n, i, ((p = l.projectors[_]) == null ? void 0 : p.color) ?? l.color);
    }, f = [], u = [], g = l.projectors.length > 1 ? ["", "_Ex"] : [""];
    for (const _ of g)
      try {
        const p = this.resolve(`${this.partsBaseUrl}${t}${_}.glb`), m = this._decalGlbPrefetch.get(p);
        this._decalGlbPrefetch.delete(p);
        const S = m ? await m : await fetch(p).then((b) => b.ok ? b.arrayBuffer() : null);
        if (S) {
          this._resourceSizes.set(p, S.byteLength);
          const b = await new Promise((x, A) => {
            this.gltfLoader.parse(S, "", (y) => x(y.scene), A);
          });
          u.push(b);
        } else
          u.push(null);
      } catch {
        u.push(null);
      }
    if ((this.swapSeq.get(e) ?? 0) === a) {
      for (let _ = 0; _ < l.projectors.length; _++) {
        const p = l.projectors[_];
        if (!p.texture || !p.size) continue;
        const m = this.findFreeDecalSlot();
        if (m < 0) {
          console.warn(`[Decal] 빈 슬롯 없음 (max ${me.MAX_DECAL_SLOTS})`);
          break;
        }
        let S;
        try {
          const D = this.resolve(this.decalsBaseUrl + p.texture);
          S = await this.loadTexture(D), S.colorSpace = ft, S.generateMipmaps = !1, S.minFilter = 1006;
          const X = S.image;
          this._decalTextures.push({
            type: "decal",
            name: D.split("/").pop() || "",
            url: D,
            size: this._resourceSizes.get(D) ?? 0,
            texture: S,
            width: (X == null ? void 0 : X.width) ?? 0,
            height: (X == null ? void 0 : X.height) ?? 0
          });
        } catch (D) {
          console.warn(`[Decal] 텍스처 로드 실패: ${p.texture}`, D);
          continue;
        }
        if ((this.swapSeq.get(e) ?? 0) !== a) return;
        const b = new Re(), x = u[_] ?? u[0];
        if (x) {
          const D = x.children[0];
          D && (D.updateMatrix(), b.copy(D.matrix));
        } else if (p.position || p.rotation) {
          const D = new P(...p.position ?? [0, 0, 0]), X = new Rt(...p.rotation ?? [0, 0, 0, 1]);
          b.compose(D, X, new P(1, 1, 1));
        }
        const A = new Re().set(
          1 / p.size[0],
          0,
          0,
          0.5,
          0,
          1 / p.size[1],
          0,
          0.5,
          0,
          0,
          1 / p.size[2],
          0.5,
          0,
          0,
          0,
          1
        ), y = h(_), w = {
          slotIndex: m,
          category: e,
          bone: c,
          localMatrix: b.clone(),
          sizeScaleMatrix: A,
          texture: S,
          color: y.clone(),
          hasSkinColor: !!l.hasSkinColor,
          baseLocalMatrix: b.clone(),
          baseSize: [p.size[0], p.size[1], p.size[2]],
          customRange: l.custom,
          isEx: _ > 0
          // pi=0 main(L), pi>0 Ex(R) → 좌우 이동 미러
        };
        r && l.custom && this.applyCustomToProjector(w, r), this.activeDecalProjectors.set(m, w), f.push(m);
      }
      this.decalCategorySlots.set(e, f), this.reorderDecalSlots(), this.updateDecalProjections();
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
    for (let e = 0; e < me.MAX_DECAL_SLOTS; e++)
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
      const i = me.DECAL_DRAW_ORDER[t.category] ?? 0, r = me.DECAL_DRAW_ORDER[n.category] ?? 0;
      return i - r;
    });
    for (let t = 0; t < this.faceDecalSlots.length; t++)
      this.faceDecalSlots[t].enabled.value = 0;
    this.activeDecalProjectors.clear(), this.decalCategorySlots.clear();
    for (let t = 0; t < e.length && t < me.MAX_DECAL_SLOTS; t++) {
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
    const i = wg(t, n), r = e.isEx ? -i.x : i.x, a = e.baseLocalMatrix.clone();
    (r !== 0 || i.y !== 0) && a.multiply(new Re().makeTranslation(r, i.y, 0)), e.localMatrix = a;
    const o = Number.isFinite(i.s) ? i.s : e.baseSize[0], l = Number.isFinite(i.s) ? i.s : e.baseSize[1];
    e.sizeScaleMatrix = new Re().set(
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
    const e = new Re(), t = new Re(), n = new Re(), i = new Re();
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
me.BLINK_DURATION = 0.15, me.BLINK_MIN_INTERVAL = 2, me.BLINK_MAX_INTERVAL = 6, me.BLINK_DOUBLE_CHANCE = 0.15, me.MAX_DECAL_SLOTS = 6, me.DECAL_DRAW_ORDER = {
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
}, me.hairPhysicsClass = null, me.DEFAULT_SHOES = { Category: 9, ID: "Ava_S_001", Color: { colors: [{ r: 0.851, g: 0.851, b: 0.851, a: 1 }, { r: 0.078, g: 0.459, b: 1, a: 1 }] } }, me.HAIR_PROP_MAP = {
  _Smoothness: "hairSmoothness",
  _SpecularShift: "hairSpecShift",
  _SpecularExponent: "hairSpecExponent",
  _SecondarySpecularShift: "hairSecSpecShift",
  _SecondarySpecularExponent: "hairSecSpecExponent",
  _Hair_Rim: "hairRimTransmission"
}, me.PROP_UNIFORM_MAP = {
  _MetallicIntensity: "metallicIntensity",
  _Smoothness: "smoothnessIntensity",
  _AOIntensity: "aoIntensity",
  _Rim_Power: "rimPower",
  _Specular_Gain: "specGain",
  _Rim_Edge_Power: "rimEdgePower",
  _Emissive_Strangth: "emissiveStrength",
  _Emissive_Tint_Gamma: "emissiveTintGamma",
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
}, me.EMISSIVE_TINT_GAMMA = 2.2, me.METALLIC_INTENSITY_MULTIPLIER = 1, me.POSE_ANIM_MAP = {
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
}, me.LENS_RENDER_ORDER = 10;
let Pr = me;
var ul = /* @__PURE__ */ ((s) => (s[s.Fat = 0] = "Fat", s[s.Muscles = 1] = "Muscles", s[s.Slimness = 2] = "Slimness", s[s.Thin = 3] = "Thin", s[s.BreastSize = 4] = "BreastSize", s[s.Neck_Width = 5] = "Neck_Width", s[s.EyeL_Rotate_Left = 6] = "EyeL_Rotate_Left", s[s.EyeL_Rotate_Right = 7] = "EyeL_Rotate_Right", s[s.EyeR_Rotate_Left = 8] = "EyeR_Rotate_Left", s[s.EyeR_Rotate_Right = 9] = "EyeR_Rotate_Right", s[s.EyeL_Move_Up = 10] = "EyeL_Move_Up", s[s.EyeL_Move_Down = 11] = "EyeL_Move_Down", s[s.EyeR_Move_Up = 12] = "EyeR_Move_Up", s[s.EyeR_Move_Down = 13] = "EyeR_Move_Down", s[s.EyeL_Scale_Up = 14] = "EyeL_Scale_Up", s[s.EyeL_Scale_Down = 15] = "EyeL_Scale_Down", s[s.EyeR_Scale_Up = 16] = "EyeR_Scale_Up", s[s.EyeR_Scale_Down = 17] = "EyeR_Scale_Down", s[s.EyeL_Move_In = 18] = "EyeL_Move_In", s[s.EyeL_Move_Out = 19] = "EyeL_Move_Out", s[s.EyeR_Move_In = 20] = "EyeR_Move_In", s[s.EyeR_Move_Out = 21] = "EyeR_Move_Out", s[s.BrowL_Rotate_Left = 22] = "BrowL_Rotate_Left", s[s.BrowL_Rotate_Right = 23] = "BrowL_Rotate_Right", s[s.BrowR_Rotate_Left = 24] = "BrowR_Rotate_Left", s[s.BrowR_Rotate_Right = 25] = "BrowR_Rotate_Right", s[s.BrowL_Move_Up = 26] = "BrowL_Move_Up", s[s.BrowL_Move_Down = 27] = "BrowL_Move_Down", s[s.BrowR_Move_Up = 28] = "BrowR_Move_Up", s[s.BrowR_Move_Down = 29] = "BrowR_Move_Down", s[s.BrowL_Scale_Up = 30] = "BrowL_Scale_Up", s[s.BrowL_Scale_Down = 31] = "BrowL_Scale_Down", s[s.BrowR_Scale_Up = 32] = "BrowR_Scale_Up", s[s.BrowR_Scale_Down = 33] = "BrowR_Scale_Down", s[s.BrowL_Move_In = 34] = "BrowL_Move_In", s[s.BrowL_Move_Out = 35] = "BrowL_Move_Out", s[s.BrowR_Move_In = 36] = "BrowR_Move_In", s[s.BrowR_Move_Out = 37] = "BrowR_Move_Out", s[s.Nose_Rotate_Left = 38] = "Nose_Rotate_Left", s[s.Nose_Rotate_Right = 39] = "Nose_Rotate_Right", s[s.Nose_Scale_Up = 40] = "Nose_Scale_Up", s[s.Nose_Scale_Down = 41] = "Nose_Scale_Down", s[s.Nose_Move_Left = 42] = "Nose_Move_Left", s[s.Nose_Move_Right = 43] = "Nose_Move_Right", s[s.Nose_Move_Up = 44] = "Nose_Move_Up", s[s.Nose_Move_Down = 45] = "Nose_Move_Down", s[s.Mouth_Rotate_Left = 46] = "Mouth_Rotate_Left", s[s.Mouth_Rotate_Right = 47] = "Mouth_Rotate_Right", s[s.Mouth_Scale_Up = 48] = "Mouth_Scale_Up", s[s.Mouth_Scale_Down = 49] = "Mouth_Scale_Down", s[s.Mouth_Move_Left = 50] = "Mouth_Move_Left", s[s.Mouth_Move_Right = 51] = "Mouth_Move_Right", s[s.Mouth_Move_Up = 52] = "Mouth_Move_Up", s[s.Mouth_Move_Down = 53] = "Mouth_Move_Down", s[s.Face_Vertical_Up = 54] = "Face_Vertical_Up", s[s.Face_Vertical_Down = 55] = "Face_Vertical_Down", s[s.Face_Horizon_Up = 56] = "Face_Horizon_Up", s[s.Face_Horizon_Down = 57] = "Face_Horizon_Down", s[s.Face_Nose_Scale_Up = 58] = "Face_Nose_Scale_Up", s[s.Face_Nose_Scale_Down = 59] = "Face_Nose_Scale_Down", s[s.Face_Ear_Fold = 60] = "Face_Ear_Fold", s[s.Glasses_Move_Up = 61] = "Glasses_Move_Up", s[s.Glasses_Move_Down = 62] = "Glasses_Move_Down", s[s.Face_Jaw_Square = 63] = "Face_Jaw_Square", s[s.Face_Jaw_Sharp = 64] = "Face_Jaw_Sharp", s[s.Face_Nose_Vertical_Down = 65] = "Face_Nose_Vertical_Down", s[s.Face_Nose_Vertical_Up = 66] = "Face_Nose_Vertical_Up", s[s.Face_Nose_Real_Down = 67] = "Face_Nose_Real_Down", s[s.Face_Nose_Real_Up = 68] = "Face_Nose_Real_Up", s[s.Glasses_Scale_Up = 69] = "Glasses_Scale_Up", s[s.Glasses_Scale_Down = 70] = "Glasses_Scale_Down", s))(ul || {});
function Fg(s) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = s.clone();
  return fl(s, n, function(i, r) {
    e.set(r, i), t.set(i, r);
  }), n.traverse(function(i) {
    if (!i.isSkinnedMesh) return;
    const r = i, a = e.get(i), o = a.skeleton.bones;
    r.skeleton = a.skeleton.clone(), r.bindMatrix.copy(a.bindMatrix), r.skeleton.bones = o.map(function(l) {
      return t.get(l);
    }), r.bind(r.skeleton, r.bindMatrix);
  }), n;
}
function fl(s, e, t) {
  t(s, e);
  for (let n = 0; n < s.children.length; n++)
    fl(s.children[n], e.children[n], t);
}
const Mo = /* @__PURE__ */ new Map();
async function dl(s) {
  let e = Mo.get(s);
  e || (e = (async () => {
    const n = await fetch(s);
    if (!n.ok) throw new Error(`skeleton fetch ${n.status}: ${s}`);
    const i = await n.arrayBuffer(), r = new tl().setMeshoptDecoder(sl), a = await new Promise((o, l) => {
      r.parse(i, "", o, l);
    });
    return {
      scene: a.scene,
      // template — 이걸 매번 clone해서 반환
      animations: a.animations ?? [],
      bytes: i.byteLength
    };
  })(), Mo.set(s, e));
  const t = await e;
  return {
    scene: Fg(t.scene),
    animations: t.animations,
    bytes: t.bytes
  };
}
class jr {
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
      const r = i.name, a = jr.classifyResource(r);
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
      const A = x.startT ?? this.setSlotsT0, y = x.endT ?? n;
      return { id: x.id, batch: x.batchIndex ?? -1, total: y - A };
    }), r = Math.min(...i.map((x) => {
      var A;
      return x.total + (((A = this.records.get(x.id)) == null ? void 0 : A.startT) ?? 0) - this.setSlotsT0;
    })), a = Math.max(...i.map((x) => {
      var A;
      return x.total + (((A = this.records.get(x.id)) == null ? void 0 : A.startT) ?? 0) - this.setSlotsT0;
    })), o = i.map((x) => x.total).sort((x, A) => x - A), l = o[Math.floor(o.length * 0.5)], c = o[Math.floor(o.length * 0.95)], h = t.reduce((x, A) => x + A.bytes, 0), f = t.filter((x) => x.cached).length, u = this.longTasks.filter(
      (x) => x.startTime >= this.setSlotsT0 - 20 && x.startTime <= n + 20
    ), d = u.reduce((x, A) => x + (A.duration - 50), 0);
    console.group(`=== Grid Load Report (N=${e.length}) ===`), console.log(
      `first=${r.toFixed(0)}ms  last=${a.toFixed(0)}ms  p50=${l == null ? void 0 : l.toFixed(0)}ms  p95=${c == null ? void 0 : c.toFixed(0)}ms
network=${(h / 1024).toFixed(0)}KB (cache-hit ${t.length > 0 ? Math.round(f / t.length * 100) : 0}%)
longTasks=${u.length} events, total blocking=${d.toFixed(0)}ms`
    );
    const g = /* @__PURE__ */ new Map();
    for (const x of e)
      for (const A of x.phases) {
        let y = g.get(A.phase);
        y || (y = [], g.set(A.phase, y)), y.push(A.ms);
      }
    const _ = [];
    for (const [x, A] of g)
      A.sort((y, w) => y - w), _.push({
        phase: x,
        count: A.length,
        p50: +A[Math.floor(A.length * 0.5)].toFixed(1),
        p95: +A[Math.floor(A.length * 0.95)].toFixed(1),
        max: +A[A.length - 1].toFixed(1)
      });
    console.log("Per-phase (ms):"), console.table(_);
    const p = /* @__PURE__ */ new Map();
    for (const x of t) {
      let A = p.get(x.category);
      A || (A = { count: 0, bytes: 0, cached: 0, durations: [] }, p.set(x.category, A)), A.count++, A.bytes += x.bytes, x.cached && A.cached++, A.durations.push(x.duration);
    }
    const m = Array.from(p.entries()).map(([x, A]) => {
      A.durations.sort((w, D) => w - D);
      const y = A.durations.reduce((w, D) => w + D, 0) / Math.max(1, A.durations.length);
      return {
        category: x,
        count: A.count,
        KB: +(A.bytes / 1024).toFixed(1),
        avg_ms: +y.toFixed(0),
        cache_hit: `${Math.round(A.cached / A.count * 100)}%`
      };
    });
    console.log("Network by category:"), console.table(m);
    const S = this.batches.map((x) => ({
      index: x.index,
      start_ms: +(x.startT - this.setSlotsT0).toFixed(0),
      duration_ms: +((x.endT ?? n) - x.startT).toFixed(0),
      count: x.ids.length
    }));
    console.log("Batch timeline:"), console.table(S);
    const b = e.map((x) => {
      const A = {
        id: x.id,
        batch: x.batchIndex ?? -1
      };
      for (const y of x.phases) {
        const w = y.phase, D = A[w];
        A[w] = typeof D == "number" ? +(D + y.ms).toFixed(0) : +y.ms.toFixed(0);
      }
      return A.total = +((x.endT ?? n) - (x.startT ?? this.setSlotsT0)).toFixed(0), A;
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
const nt = new jr(), yo = /* @__PURE__ */ new Map();
async function pl(s) {
  let e = yo.get(s);
  return e || (e = (async () => {
    try {
      const t = await fetch(s);
      if (!t.ok) throw new Error(`partsMeta HTTP ${t.status}: ${s}`);
      const n = await t.json();
      return cl(n), n;
    } catch (t) {
      return console.warn("[GridSharedPartsMeta] 로드 실패:", t), {};
    }
  })(), yo.set(s, e)), e;
}
class Ug {
  constructor(e) {
    var a, o;
    this.visible = !0, this.ready = !1, this.nativeHeight = 0, this.hover = !1, this._pendingDt = 0, this._perfPartTotal = 0, this._perfPartCount = 0, this.disposed = !1, this.id = e.id, this.element = e.element, this.scene = e.scene, this.onLoaded = e.onLoaded, this.onError = e.onError, this.viewer = new Pr(e.scene, { baseUrl: e.baseUrl, particleMode: "off", idleAnimations: [], fillMissingShoes: !0 }), this.root = this.viewer.getAvatarRoot();
    const t = this.viewer;
    t.loadHiResTextures = async () => {
    }, t.loadBaseSkeleton = async () => {
      var d, g;
      const l = t.resolve(t.baseSkeletonGlb), { scene: c, animations: h, bytes: f } = await dl(l);
      (g = (d = t._resourceSizes) == null ? void 0 : d.set) == null || g.call(d, l, f), t.baseArmature = c, t.avatarRoot.add(c), t.boneMap.clear();
      const u = c.getObjectByName("Bip001");
      if (u && u.traverse((_) => {
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
        const c = performance.now(), h = await pl(l);
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
    pg(e);
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
function Ng(s) {
  const e = new re(s);
  return new Ft({
    uniforms: {
      // 배경 = 프로필 뷰어와 같은 스튜디오형 (SceneConfig OZ_FLAT_BG_GLSL)
      flatColor: { value: [e.r, e.g, e.b] },
      flatOn: { value: 1 },
      flatAspect: { value: 1 },
      uSlotSize: { value: new Oe(1, 1) },
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
${Sm}
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
function kg(s) {
  s.traverse((e) => {
    const t = e;
    if (!t.isMesh) return;
    const n = Array.isArray(t.material) ? t.material : [t.material];
    n.some((i) => i && (!i.transparent || i.blending === 5)) && (t.renderOrder = -0.5);
    for (const i of n)
      i && (i.transparent || (i.transparent = !0, i.blending = 5, i.blendEquation = 100, i.blendSrc = 201, i.blendDst = 200, i.blendEquationAlpha = 100, i.blendSrcAlpha = 200, i.blendDstAlpha = 201, i.depthWrite = !0));
  });
}
function br(s) {
  const e = new Rt().setFromEuler(
    new qt(
      Di.degToRad(s.x),
      Di.degToRad(-s.y),
      Di.degToRad(-s.z),
      "YXZ"
    )
  ), t = new P(0, 0, 1).applyQuaternion(e);
  return new P().addScaledVector(t, -Et.lightDist);
}
const Yt = class Yt {
  constructor(e) {
    this.composer = null, this.rafId = 0, this.lastT = 0, this.resizeObserver = null, this.paused = !1, this.instances = /* @__PURE__ */ new Map(), this.slotQuads = /* @__PURE__ */ new Map(), this.loadGen = 0, this.pendingLoads = [], this.pendingLoadIds = [], this.batchRunning = !1, this.lazyObserver = null, this.lazyMap = /* @__PURE__ */ new Map(), this.slotElements = /* @__PURE__ */ new Map(), this._frameCounter = 0, this._batchCounter = 0, this.container = e.container, this.canvas = e.canvas, this.baseUrl = e.baseUrl, this.dprCap = e.dprCap ?? 1.5, this.onContextLost = e.onContextLost, this.renderer = new $d({
      canvas: this.canvas,
      alpha: !0,
      antialias: !0,
      powerPreference: "high-performance",
      premultipliedAlpha: !0
    }), this.renderer.debug.checkShaderErrors = ng(), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.dprCap)), this.renderer.setClearColor(0, 0), this.renderer.toneMapping = 1, this.renderer.toneMappingExposure = Et.toneMappingExposure, this.renderer.outputColorSpace = ft, this.canvas.addEventListener("webglcontextlost", (i) => {
      var r;
      i.preventDefault(), (r = this.onContextLost) == null || r.call(this);
    }, !1), this.scene = new Va(), this.camera = new Ni(0, 1, 1, 0, 0.1, 2e4), this.camera.position.z = 1e4, this.setupLights(), this.setupEnvMap(), this.setupComposer(), this.setupResize(), nt.init(), this.start();
    const t = `${this.baseUrl}avatar/skeleton/Msh_Ava_Bip.glb`, n = `${this.baseUrl}partsdata-viewer.json`;
    dl(t).catch(() => {
    }), pl(n).catch(() => {
    });
  }
  /**
   * EffectComposer 파이프라인 — oz-avatar.ts와 동일.
   * RenderPass → UnrealBloomPass(emissive boost) → LiftGammaGain → OutputPass.
   * LinearToneMapping + 강한 라이트 → HDR 값 폭발하므로 LGG가 필수 (압축).
   */
  setupComposer() {
    const e = this.container.clientWidth || 1, t = this.container.clientHeight || 1, n = Math.min(window.devicePixelRatio, this.dprCap), i = new gn(e * n, t * n, {
      type: 1016,
      samples: 2
    });
    this.composer = new Vp(this.renderer, i), this.composer.addPass(new Wp(this.scene, this.camera)), this.composer.addPass(new el({
      uniforms: {
        tDiffuse: { value: null },
        uInvGamma: { value: new P(...Et.liftGammaGain.invGamma) },
        uGain: { value: new P(...Et.liftGammaGain.gain) }
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
            ${bm}
                    vec3 outColor = clamp(c, 0.0, 1.0);
                    // 캔버스 transparent — slot quad가 깐 alpha=1을 그대로 통과시키고
                    // premultipliedAlpha=true 캔버스라 color * alpha 출력.
                    gl_FragColor = vec4(outColor * tex.a, tex.a);
                }
            `
    })), this.composer.addPass(new Xp());
  }
  /**
   * SceneConfig 값으로 main / rim / ambient light 설정.
   * envMap은 setupEnvMap에서 별도 처리.
   */
  setupLights() {
    const e = Et.mainLight, t = new vs(new re(e.color), e.intensity);
    t.target.position.set(0, 0, 0), this.scene.add(t.target), t.position.copy(br(e.rotation)), this.scene.add(t);
    const n = Et.rimLight, i = new vs(new re(n.color), n.intensity);
    i.position.copy(br(n.rotation)), this.scene.add(i);
    const r = Et.rimLight2;
    if (r.intensity > 0) {
      const l = new vs(new re(r.color), r.intensity);
      l.position.copy(br(r.rotation)), this.scene.add(l);
    }
    this.scene.environmentIntensity = Et.envIntensity;
    const a = Et.ambient, o = new Mp(new re(a.color), a.intensity);
    this.scene.add(o);
  }
  /** PMREM 환경맵 (specular IBL용 — oz-avatar.ts와 동일) */
  setupEnvMap() {
    const e = new Sr(this.renderer), t = new Va();
    t.background = new re(Et.envMapColor), this.scene.environment = e.fromScene(t).texture, e.dispose();
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
      const o = a.element.getBoundingClientRect(), l = o.left + o.width / 2 - t.left, c = o.top + o.height / 2 - t.top, h = n - c, f = this.slotQuads.get(a.id);
      f && (f.mesh.position.set(l, h, -500), f.mesh.scale.set(o.width, o.height, 1), f.material.uniforms.uSlotSize.value.set(o.width, o.height));
      const u = a.nativeHeight > 0 ? a.nativeHeight : 1.2, d = o.height * 0.6 / u, g = -(u / 2) * d;
      a.root.position.set(l, h + g, 0), a.root.scale.setScalar(d);
      const _ = o.bottom > 0 && o.top < window.innerHeight;
      a.visible = _, a.root.visible = _ && a.ready, f && (f.mesh.visible = _ && a.ready), _ && (a._pendingDt += e, (r & 1) === i && (a.update(a._pendingDt), a._pendingDt = 0)), r++;
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
        for (const f of c) {
          if (!f.isIntersecting) continue;
          const u = f.target.dataset.gridSlotId;
          if (!u) continue;
          const d = this.lazyMap.get(u);
          d && (this.lazyMap.delete(u), this.pendingLoads.push(d), this.pendingLoadIds.push(u), (h = this.lazyObserver) == null || h.unobserve(f.target));
        }
        a === this.loadGen && this.kickBatchLoader(a);
      }
    }, { rootMargin: `${Yt.LAZY_ROOT_MARGIN_PX}px 0px` });
    for (const c of e) {
      const h = this.createSlotQuad(c.bgColor ?? "#2a2a2a");
      this.scene.add(h.mesh), this.slotQuads.set(c.id, h);
      const f = new Ug({
        id: c.id,
        element: c.element,
        scene: this.scene,
        baseUrl: this.baseUrl,
        onLoaded: (_) => {
          f.isDisposed || kg(f.root);
          const p = f.isDisposed || !this.composer ? [] : sg(this.renderer, f.root, this.camera, this.scene, this.composer.renderTarget1), m = () => {
            var b;
            f.isDisposed || (f.ready = !0, (b = t == null ? void 0 : t.onLoaded) == null || b.call(t, _), r());
          }, S = performance.now();
          rg(p, 5e3).then(() => setTimeout(m, Math.max(0, Yt.REVEAL_DELAY_MS - (performance.now() - S))));
        },
        onError: (_, p) => {
          var m;
          (m = t == null ? void 0 : t.onError) == null || m.call(t, _, p), r();
        }
      });
      f.root.rotation.y = Di.degToRad(Et.avatar.rotationY), this.instances.set(c.id, f), this.slotElements.set(c.id, c.element), c.element.dataset.gridSlotId = c.id;
      const u = () => f.isDisposed || a !== this.loadGen ? Promise.resolve() : c.presetUrl ? f.loadFromUrl(c.presetUrl) : f.loadDefault(), d = c.element.getBoundingClientRect();
      d.bottom > -Yt.LAZY_ROOT_MARGIN_PX && d.top < window.innerHeight + Yt.LAZY_ROOT_MARGIN_PX ? (this.pendingLoads.push(u), this.pendingLoadIds.push(c.id)) : (this.lazyMap.set(c.id, u), this.lazyObserver.observe(c.element));
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
    const t = Ng(e), n = new ci(1, 1), i = new vt(n, t);
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
let Dr = Yt;
var Ao = { id: "dev #382", env: "dev", number: 382, time: "2026-11-26 13:31:22", commit: "e1df17930" };
const ml = typeof Ao < "u" ? Ao : { id: "source", env: "source", number: 0, time: "", commit: "" };
function Eo(s = ml) {
  return `${s.id}${s.time ? ` · ${s.time} KST` : ""}${s.commit ? ` · ${s.commit}` : ""}`;
}
function Bg(s) {
  if (typeof window > "u") return;
  const e = window;
  if (e.OZAvatarBuild = e.OZAvatarBuild ?? {}, !e.OZAvatarBuild[s]) {
    e.OZAvatarBuild[s] = ml, console.info(`[${s}] build ${Eo()}`), Gg();
    try {
      if (!new URLSearchParams(location.search).has("ozbuild")) return;
      const t = () => {
        let n = document.getElementById("oz-build-badge");
        n || (n = document.createElement("div"), n.id = "oz-build-badge", n.style.cssText = "position:fixed;left:6px;bottom:6px;z-index:2147483647;padding:3px 7px;border-radius:4px;background:rgba(0,0,0,.72);color:#fff;font:11px/1.4 monospace;pointer-events:none;white-space:pre", document.body.appendChild(n)), n.textContent = Object.entries(e.OZAvatarBuild).map(([i, r]) => `${i}: ${Eo(r)}`).join(`
`);
      };
      document.body ? t() : document.addEventListener("DOMContentLoaded", t, { once: !0 });
    } catch {
    }
  }
}
let To = !1;
function gl() {
  const s = Array.from(document.querySelectorAll("script[src]")), e = s.find((t) => /oz-(avatar|stream-overlay)[^/]*\.(js|cjs)/.test(t.src)) ?? s.find((t) => /\/assets\/index-[^/]+\.js/.test(t.src));
  return e ? new URL("./", e.src.replace(/\/assets\/[^/]+$/, "/x")).href : new URL("./", location.href).href;
}
function Og() {
  const s = document.querySelector("oz-avatar, oz-avatar-editor, oz-avatar-grid"), e = s == null ? void 0 : s.getAttribute("base-url");
  return e ? new URL(e, location.href).href : gl();
}
function xr() {
  const s = window, e = { scriptBase: gl(), assetBase: Og(), builds: s.OZAvatarBuild ?? {} };
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
function Gg() {
  if (To) return;
  To = !0, window.OZAvatarDebugOpen = xr;
  try {
    new URLSearchParams(location.search).has("ozdebug") && setTimeout(xr, 800);
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
    s = s.filter((i) => n - i < 2500), s.push(n), s.length >= 7 && (s = [], xr());
  }, { capture: !0, passive: !0 });
}
Bg("oz-avatar-grid");
const zg = `
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
class Hg extends HTMLElement {
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
    e.innerHTML = `<style>${zg}</style>`, this.canvas = document.createElement("canvas"), e.appendChild(this.canvas);
    const t = this.parentElement;
    if (!t) {
      console.error("[oz-avatar-grid] parentElement 없음 — 부모 컨테이너가 필요합니다");
      return;
    }
    const n = parseFloat(this.getAttribute("dpr-cap") ?? "1.5"), i = this.getAttribute("base-url") ?? "";
    this.grid = new Dr({
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
customElements.define("oz-avatar-grid", Hg);
export {
  Hg as OzAvatarGridElement
};
