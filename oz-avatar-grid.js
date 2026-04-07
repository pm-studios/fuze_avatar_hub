/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const gr = "169";
const Fr = "attached", Do = "detached";
const vn = "", gt = "srgb", ht = "srgb-linear", _r = "display-p3", fs = "display-p3-linear", ls = "linear", nt = "srgb", cs = "rec709", hs = "p3";
const Nr = "300 es";
class Un {
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
const _t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let kr = 1234567;
const Mi = Math.PI / 180, Jn = 180 / Math.PI;
function Vt() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (_t[s & 255] + _t[s >> 8 & 255] + _t[s >> 16 & 255] + _t[s >> 24 & 255] + "-" + _t[e & 255] + _t[e >> 8 & 255] + "-" + _t[e >> 16 & 15 | 64] + _t[e >> 24 & 255] + "-" + _t[t & 63 | 128] + _t[t >> 8 & 255] + "-" + _t[t >> 16 & 255] + _t[t >> 24 & 255] + _t[n & 255] + _t[n >> 8 & 255] + _t[n >> 16 & 255] + _t[n >> 24 & 255]).toLowerCase();
}
function vt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function br(s, e) {
  return (s % e + e) % e;
}
function Lo(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Io(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function Si(s, e, t) {
  return (1 - t) * s + t * e;
}
function Uo(s, e, t, n) {
  return Si(s, e, 1 - Math.exp(-t * n));
}
function Fo(s, e = 1) {
  return e - Math.abs(br(s, e * 2) - e);
}
function No(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function ko(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Bo(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Oo(s, e) {
  return s + Math.random() * (e - s);
}
function Go(s) {
  return s * (0.5 - Math.random());
}
function zo(s) {
  s !== void 0 && (kr = s);
  let e = kr += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Ho(s) {
  return s * Mi;
}
function Vo(s) {
  return s * Jn;
}
function Wo(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function jo(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function Xo(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function qo(s, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), u = a((e + n) / 2), d = r((e - n) / 2), h = a((e - n) / 2), f = r((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * u, l * d, l * h, o * c);
      break;
    case "YZY":
      s.set(l * h, o * u, l * d, o * c);
      break;
    case "ZXZ":
      s.set(l * d, l * h, o * u, o * c);
      break;
    case "XZX":
      s.set(o * u, l * g, l * f, o * c);
      break;
    case "YXY":
      s.set(l * f, o * u, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * f, o * u, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function zt(s, e) {
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
function et(s, e) {
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
const yi = {
  DEG2RAD: Mi,
  RAD2DEG: Jn,
  generateUUID: Vt,
  clamp: vt,
  euclideanModulo: br,
  mapLinear: Lo,
  inverseLerp: Io,
  lerp: Si,
  damp: Uo,
  pingpong: Fo,
  smoothstep: No,
  smootherstep: ko,
  randInt: Bo,
  randFloat: Oo,
  randFloatSpread: Go,
  seededRandom: zo,
  degToRad: Ho,
  radToDeg: Vo,
  isPowerOfTwo: Wo,
  ceilPowerOfTwo: jo,
  floorPowerOfTwo: Xo,
  setQuaternionFromProperEuler: qo,
  normalize: et,
  denormalize: zt
};
class Le {
  constructor(e = 0, t = 0) {
    Le.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    return Math.acos(vt(n, -1, 1));
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
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = o, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
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
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], d = n[7], h = n[2], f = n[5], g = n[8], _ = i[0], m = i[3], p = i[6], M = i[1], v = i[4], y = i[7], T = i[2], R = i[5], w = i[8];
    return r[0] = a * _ + o * M + l * T, r[3] = a * m + o * v + l * R, r[6] = a * p + o * y + l * w, r[1] = c * _ + u * M + d * T, r[4] = c * m + u * v + d * R, r[7] = c * p + u * y + d * w, r[2] = h * _ + f * M + g * T, r[5] = h * m + f * v + g * R, r[8] = h * p + f * y + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * a * u - t * o * c - n * r * u + n * o * l + i * r * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], d = u * a - o * c, h = o * l - u * r, f = c * r - a * l, g = t * d + n * h + i * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = d * _, e[1] = (i * c - u * n) * _, e[2] = (o * n - i * a) * _, e[3] = h * _, e[4] = (u * t - i * l) * _, e[5] = (i * r - o * t) * _, e[6] = f * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * r) * _, this;
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
    return this.premultiply(ys.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(ys.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(ys.makeTranslation(e, t)), this;
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
const ys = /* @__PURE__ */ new Ge();
function Qa(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function Ei(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Ko() {
  const s = Ei("canvas");
  return s.style.display = "block", s;
}
const Br = {};
function as(s) {
  s in Br || (Br[s] = !0, console.warn(s));
}
function Yo(s, e, t) {
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
function $o(s) {
  const e = s.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Qo(s) {
  const e = s.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Or = /* @__PURE__ */ new Ge().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Gr = /* @__PURE__ */ new Ge().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), hi = {
  [ht]: {
    transfer: ls,
    primaries: cs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s,
    fromReference: (s) => s
  },
  [gt]: {
    transfer: nt,
    primaries: cs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (s) => s.convertSRGBToLinear(),
    fromReference: (s) => s.convertLinearToSRGB()
  },
  [fs]: {
    transfer: ls,
    primaries: hs,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.applyMatrix3(Gr),
    fromReference: (s) => s.applyMatrix3(Or)
  },
  [_r]: {
    transfer: nt,
    primaries: hs,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (s) => s.convertSRGBToLinear().applyMatrix3(Gr),
    fromReference: (s) => s.applyMatrix3(Or).convertLinearToSRGB()
  }
}, Zo = /* @__PURE__ */ new Set([ht, fs]), je = {
  enabled: !0,
  _workingColorSpace: ht,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(s) {
    if (!Zo.has(s))
      throw new Error(`Unsupported working color space, "${s}".`);
    this._workingColorSpace = s;
  },
  convert: function(s, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return s;
    const n = hi[e].toReference, i = hi[t].fromReference;
    return i(n(s));
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this._workingColorSpace);
  },
  getPrimaries: function(s) {
    return hi[s].primaries;
  },
  getTransfer: function(s) {
    return s === vn ? ls : hi[s].transfer;
  },
  getLuminanceCoefficients: function(s, e = this._workingColorSpace) {
    return s.fromArray(hi[e].luminanceCoefficients);
  }
};
function Qn(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function As(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let Nn;
class Jo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Nn === void 0 && (Nn = Ei("canvas")), Nn.width = e.width, Nn.height = e.height;
      const n = Nn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Nn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ei("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = Qn(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Qn(t[n] / 255) * 255) : t[n] = Qn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let el = 0;
class Za {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: el++ }), this.uuid = Vt(), this.data = e, this.dataReady = !0, this.version = 0;
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
          i[a].isDataTexture ? r.push(Es(i[a].image)) : r.push(Es(i[a]));
      } else
        r = Es(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Es(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Jo.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let tl = 0;
class pt extends Un {
  constructor(e = pt.DEFAULT_IMAGE, t = pt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, o = 1023, l = 1009, c = pt.DEFAULT_ANISOTROPY, u = vn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: tl++ }), this.uuid = Vt(), this.name = "", this.source = new Za(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Le(0, 0), this.repeat = new Le(1, 1), this.center = new Le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ge(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
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
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = 300;
pt.DEFAULT_ANISOTROPY = 1;
class He {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    He.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const l = e.elements, c = l[0], u = l[4], d = l[8], h = l[1], f = l[5], g = l[9], _ = l[2], m = l[6], p = l[10];
    if (Math.abs(u - h) < 0.01 && Math.abs(d - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(u + h) < 0.1 && Math.abs(d + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, y = (f + 1) / 2, T = (p + 1) / 2, R = (u + h) / 4, w = (d + _) / 4, U = (g + m) / 4;
      return v > y && v > T ? v < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(v), i = R / n, r = w / n) : y > T ? y < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(y), n = R / i, r = U / i) : T < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(T), n = w / r, i = U / r), this.set(n, i, r, t), this;
    }
    let M = Math.sqrt((m - g) * (m - g) + (d - _) * (d - _) + (h - u) * (h - u));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (m - g) / M, this.y = (d - _) / M, this.z = (h - u) / M, this.w = Math.acos((c + f + p - 1) / 2), this;
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
class nl extends Un {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new He(0, 0, e, t), this.scissorTest = !1, this.viewport = new He(0, 0, e, t);
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
    const r = new pt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
    return this.texture.source = new Za(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Nt extends nl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Ja extends pt {
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
class il extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Lt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], d = n[i + 3];
    const h = r[a + 0], f = r[a + 1], g = r[a + 2], _ = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = h, e[t + 1] = f, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (d !== _ || l !== h || c !== f || u !== g) {
      let m = 1 - o;
      const p = l * h + c * f + u * g + d * _, M = p >= 0 ? 1 : -1, v = 1 - p * p;
      if (v > Number.EPSILON) {
        const T = Math.sqrt(v), R = Math.atan2(T, p * M);
        m = Math.sin(m * R) / T, o = Math.sin(o * R) / T;
      }
      const y = o * M;
      if (l = l * m + h * y, c = c * m + f * y, u = u * m + g * y, d = d * m + _ * y, m === 1 - o) {
        const T = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        l *= T, c *= T, u *= T, d *= T;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], d = r[a], h = r[a + 1], f = r[a + 2], g = r[a + 3];
    return e[t] = o * g + u * d + l * f - c * h, e[t + 1] = l * g + u * h + c * d - o * f, e[t + 2] = c * g + u * f + o * h - l * d, e[t + 3] = u * g - o * d - l * h - c * f, e;
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
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(i / 2), d = o(r / 2), h = l(n / 2), f = l(i / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = h * u * d + c * f * g, this._y = c * f * d - h * u * g, this._z = c * u * g + h * f * d, this._w = c * u * d - h * f * g;
        break;
      case "YXZ":
        this._x = h * u * d + c * f * g, this._y = c * f * d - h * u * g, this._z = c * u * g - h * f * d, this._w = c * u * d + h * f * g;
        break;
      case "ZXY":
        this._x = h * u * d - c * f * g, this._y = c * f * d + h * u * g, this._z = c * u * g + h * f * d, this._w = c * u * d - h * f * g;
        break;
      case "ZYX":
        this._x = h * u * d - c * f * g, this._y = c * f * d + h * u * g, this._z = c * u * g - h * f * d, this._w = c * u * d + h * f * g;
        break;
      case "YZX":
        this._x = h * u * d + c * f * g, this._y = c * f * d + h * u * g, this._z = c * u * g - h * f * d, this._w = c * u * d - h * f * g;
        break;
      case "XZY":
        this._x = h * u * d - c * f * g, this._y = c * f * d - h * u * g, this._z = c * u * g + h * f * d, this._w = c * u * d + h * f * g;
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
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], d = t[10], h = n + o + d;
    if (h > 0) {
      const f = 0.5 / Math.sqrt(h + 1);
      this._w = 0.25 / f, this._x = (u - l) * f, this._y = (r - c) * f, this._z = (a - i) * f;
    } else if (n > o && n > d) {
      const f = 2 * Math.sqrt(1 + n - o - d);
      this._w = (u - l) / f, this._x = 0.25 * f, this._y = (i + a) / f, this._z = (r + c) / f;
    } else if (o > d) {
      const f = 2 * Math.sqrt(1 + o - n - d);
      this._w = (r - c) / f, this._x = (i + a) / f, this._y = 0.25 * f, this._z = (l + u) / f;
    } else {
      const f = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - i) / f, this._x = (r + c) / f, this._y = (l + u) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(vt(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + a * o + i * c - r * l, this._y = i * u + a * l + r * o - n * c, this._z = r * u + a * c + n * l - i * o, this._w = a * u - n * o - i * l - r * c, this._onChangeCallback(), this;
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
      const f = 1 - t;
      return this._w = f * a + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), d = Math.sin((1 - t) * u) / c, h = Math.sin(t * u) / c;
    return this._w = a * d + this._w * h, this._x = n * d + this._x * h, this._y = i * d + this._y * h, this._z = r * d + this._z * h, this._onChangeCallback(), this;
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
    return this.applyQuaternion(zr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(zr.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), u = 2 * (o * t - r * i), d = 2 * (r * n - a * t);
    return this.x = t + l * c + a * d - o * u, this.y = n + l * u + o * c - r * d, this.z = i + l * d + r * u - a * c, this;
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
    return Ts.copy(this).projectOnVector(e), this.sub(Ts);
  }
  reflect(e) {
    return this.sub(Ts.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(vt(n, -1, 1));
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
const Ts = /* @__PURE__ */ new P(), zr = /* @__PURE__ */ new Lt();
class Yt {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Bt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Bt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Bt.copy(t).multiplyScalar(0.5);
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
          e.isMesh === !0 ? e.getVertexPosition(a, Bt) : Bt.fromBufferAttribute(r, a), Bt.applyMatrix4(e.matrixWorld), this.expandByPoint(Bt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ii.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ii.copy(n.boundingBox)), Ii.applyMatrix4(e.matrixWorld), this.union(Ii);
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
    return this.clampPoint(e.center, Bt), Bt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ui), Ui.subVectors(this.max, ui), kn.subVectors(e.a, ui), Bn.subVectors(e.b, ui), On.subVectors(e.c, ui), dn.subVectors(Bn, kn), fn.subVectors(On, Bn), yn.subVectors(kn, On);
    let t = [
      0,
      -dn.z,
      dn.y,
      0,
      -fn.z,
      fn.y,
      0,
      -yn.z,
      yn.y,
      dn.z,
      0,
      -dn.x,
      fn.z,
      0,
      -fn.x,
      yn.z,
      0,
      -yn.x,
      -dn.y,
      dn.x,
      0,
      -fn.y,
      fn.x,
      0,
      -yn.y,
      yn.x,
      0
    ];
    return !ws(t, kn, Bn, On, Ui) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ws(t, kn, Bn, On, Ui)) ? !1 : (Fi.crossVectors(dn, fn), t = [Fi.x, Fi.y, Fi.z], ws(t, kn, Bn, On, Ui));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Bt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Bt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (en[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), en[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), en[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), en[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), en[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), en[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), en[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), en[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(en), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const en = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], Bt = /* @__PURE__ */ new P(), Ii = /* @__PURE__ */ new Yt(), kn = /* @__PURE__ */ new P(), Bn = /* @__PURE__ */ new P(), On = /* @__PURE__ */ new P(), dn = /* @__PURE__ */ new P(), fn = /* @__PURE__ */ new P(), yn = /* @__PURE__ */ new P(), ui = /* @__PURE__ */ new P(), Ui = /* @__PURE__ */ new P(), Fi = /* @__PURE__ */ new P(), An = /* @__PURE__ */ new P();
function ws(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    An.fromArray(s, r);
    const o = i.x * Math.abs(An.x) + i.y * Math.abs(An.y) + i.z * Math.abs(An.z), l = e.dot(An), c = t.dot(An), u = n.dot(An);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const sl = /* @__PURE__ */ new Yt(), di = /* @__PURE__ */ new P(), Rs = /* @__PURE__ */ new P();
class $t {
  constructor(e = new P(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : sl.setFromPoints(e).getCenter(n);
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
    di.subVectors(e, this.center);
    const t = di.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(di, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Rs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(di.copy(e.center).add(Rs)), this.expandByPoint(di.copy(e.center).sub(Rs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tn = /* @__PURE__ */ new P(), Cs = /* @__PURE__ */ new P(), Ni = /* @__PURE__ */ new P(), pn = /* @__PURE__ */ new P(), Ps = /* @__PURE__ */ new P(), ki = /* @__PURE__ */ new P(), Ds = /* @__PURE__ */ new P();
class ps {
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
    return this.origin.copy(this.at(e, tn)), this;
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
    const t = tn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (tn.copy(this.origin).addScaledVector(this.direction, t), tn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Cs.copy(e).add(t).multiplyScalar(0.5), Ni.copy(t).sub(e).normalize(), pn.copy(this.origin).sub(Cs);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ni), o = pn.dot(this.direction), l = -pn.dot(Ni), c = pn.lengthSq(), u = Math.abs(1 - a * a);
    let d, h, f, g;
    if (u > 0)
      if (d = a * l - o, h = a * o - l, g = r * u, d >= 0)
        if (h >= -g)
          if (h <= g) {
            const _ = 1 / u;
            d *= _, h *= _, f = d * (d + a * h + 2 * o) + h * (a * d + h + 2 * l) + c;
          } else
            h = r, d = Math.max(0, -(a * h + o)), f = -d * d + h * (h + 2 * l) + c;
        else
          h = -r, d = Math.max(0, -(a * h + o)), f = -d * d + h * (h + 2 * l) + c;
      else
        h <= -g ? (d = Math.max(0, -(-a * r + o)), h = d > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -d * d + h * (h + 2 * l) + c) : h <= g ? (d = 0, h = Math.min(Math.max(-r, -l), r), f = h * (h + 2 * l) + c) : (d = Math.max(0, -(a * r + o)), h = d > 0 ? r : Math.min(Math.max(-r, -l), r), f = -d * d + h * (h + 2 * l) + c);
    else
      h = a > 0 ? -r : r, d = Math.max(0, -(a * h + o)), f = -d * d + h * (h + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), i && i.copy(Cs).addScaledVector(Ni, h), f;
  }
  intersectSphere(e, t) {
    tn.subVectors(e.center, this.origin);
    const n = tn.dot(this.direction), i = tn.dot(tn) - n * n, r = e.radius * e.radius;
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
    const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, h = this.origin;
    return c >= 0 ? (n = (e.min.x - h.x) * c, i = (e.max.x - h.x) * c) : (n = (e.max.x - h.x) * c, i = (e.min.x - h.x) * c), u >= 0 ? (r = (e.min.y - h.y) * u, a = (e.max.y - h.y) * u) : (r = (e.max.y - h.y) * u, a = (e.min.y - h.y) * u), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), d >= 0 ? (o = (e.min.z - h.z) * d, l = (e.max.z - h.z) * d) : (o = (e.max.z - h.z) * d, l = (e.min.z - h.z) * d), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, tn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ps.subVectors(t, e), ki.subVectors(n, e), Ds.crossVectors(Ps, ki);
    let a = this.direction.dot(Ds), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    pn.subVectors(this.origin, e);
    const l = o * this.direction.dot(ki.crossVectors(pn, ki));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Ps.cross(pn));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * pn.dot(Ds);
    return u < 0 ? null : this.at(u / a, r);
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
class Pe {
  constructor(e, t, n, i, r, a, o, l, c, u, d, h, f, g, _, m) {
    Pe.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, u, d, h, f, g, _, m);
  }
  set(e, t, n, i, r, a, o, l, c, u, d, h, f, g, _, m) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = u, p[10] = d, p[14] = h, p[3] = f, p[7] = g, p[11] = _, p[15] = m, this;
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
    return new Pe().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / Gn.setFromMatrixColumn(e, 0).length(), r = 1 / Gn.setFromMatrixColumn(e, 1).length(), a = 1 / Gn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(r), d = Math.sin(r);
    if (e.order === "XYZ") {
      const h = a * u, f = a * d, g = o * u, _ = o * d;
      t[0] = l * u, t[4] = -l * d, t[8] = c, t[1] = f + g * c, t[5] = h - _ * c, t[9] = -o * l, t[2] = _ - h * c, t[6] = g + f * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const h = l * u, f = l * d, g = c * u, _ = c * d;
      t[0] = h + _ * o, t[4] = g * o - f, t[8] = a * c, t[1] = a * d, t[5] = a * u, t[9] = -o, t[2] = f * o - g, t[6] = _ + h * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const h = l * u, f = l * d, g = c * u, _ = c * d;
      t[0] = h - _ * o, t[4] = -a * d, t[8] = g + f * o, t[1] = f + g * o, t[5] = a * u, t[9] = _ - h * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const h = a * u, f = a * d, g = o * u, _ = o * d;
      t[0] = l * u, t[4] = g * c - f, t[8] = h * c + _, t[1] = l * d, t[5] = _ * c + h, t[9] = f * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const h = a * l, f = a * c, g = o * l, _ = o * c;
      t[0] = l * u, t[4] = _ - h * d, t[8] = g * d + f, t[1] = d, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = f * d + g, t[10] = h - _ * d;
    } else if (e.order === "XZY") {
      const h = a * l, f = a * c, g = o * l, _ = o * c;
      t[0] = l * u, t[4] = -d, t[8] = c * u, t[1] = h * d + _, t[5] = a * u, t[9] = f * d - g, t[2] = g * d - f, t[6] = o * u, t[10] = _ * d + h;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(rl, e, al);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), mn.crossVectors(n, Pt), mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), mn.crossVectors(n, Pt)), mn.normalize(), Bi.crossVectors(Pt, mn), i[0] = mn.x, i[4] = Bi.x, i[8] = Pt.x, i[1] = mn.y, i[5] = Bi.y, i[9] = Pt.y, i[2] = mn.z, i[6] = Bi.z, i[10] = Pt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], d = n[5], h = n[9], f = n[13], g = n[2], _ = n[6], m = n[10], p = n[14], M = n[3], v = n[7], y = n[11], T = n[15], R = i[0], w = i[4], U = i[8], K = i[12], b = i[1], A = i[5], G = i[9], O = i[13], V = i[2], $ = i[6], B = i[10], ee = i[14], H = i[3], se = i[7], ue = i[11], xe = i[15];
    return r[0] = a * R + o * b + l * V + c * H, r[4] = a * w + o * A + l * $ + c * se, r[8] = a * U + o * G + l * B + c * ue, r[12] = a * K + o * O + l * ee + c * xe, r[1] = u * R + d * b + h * V + f * H, r[5] = u * w + d * A + h * $ + f * se, r[9] = u * U + d * G + h * B + f * ue, r[13] = u * K + d * O + h * ee + f * xe, r[2] = g * R + _ * b + m * V + p * H, r[6] = g * w + _ * A + m * $ + p * se, r[10] = g * U + _ * G + m * B + p * ue, r[14] = g * K + _ * O + m * ee + p * xe, r[3] = M * R + v * b + y * V + T * H, r[7] = M * w + v * A + y * $ + T * se, r[11] = M * U + v * G + y * B + T * ue, r[15] = M * K + v * O + y * ee + T * xe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], d = e[6], h = e[10], f = e[14], g = e[3], _ = e[7], m = e[11], p = e[15];
    return g * (+r * l * d - i * c * d - r * o * h + n * c * h + i * o * f - n * l * f) + _ * (+t * l * f - t * c * h + r * a * h - i * a * f + i * c * u - r * l * u) + m * (+t * c * d - t * o * f - r * a * d + n * a * f + r * o * u - n * c * u) + p * (-i * o * u - t * l * d + t * o * h + i * a * d - n * a * h + n * l * u);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], d = e[9], h = e[10], f = e[11], g = e[12], _ = e[13], m = e[14], p = e[15], M = d * m * c - _ * h * c + _ * l * f - o * m * f - d * l * p + o * h * p, v = g * h * c - u * m * c - g * l * f + a * m * f + u * l * p - a * h * p, y = u * _ * c - g * d * c + g * o * f - a * _ * f - u * o * p + a * d * p, T = g * d * l - u * _ * l - g * o * h + a * _ * h + u * o * m - a * d * m, R = t * M + n * v + i * y + r * T;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / R;
    return e[0] = M * w, e[1] = (_ * h * r - d * m * r - _ * i * f + n * m * f + d * i * p - n * h * p) * w, e[2] = (o * m * r - _ * l * r + _ * i * c - n * m * c - o * i * p + n * l * p) * w, e[3] = (d * l * r - o * h * r - d * i * c + n * h * c + o * i * f - n * l * f) * w, e[4] = v * w, e[5] = (u * m * r - g * h * r + g * i * f - t * m * f - u * i * p + t * h * p) * w, e[6] = (g * l * r - a * m * r - g * i * c + t * m * c + a * i * p - t * l * p) * w, e[7] = (a * h * r - u * l * r + u * i * c - t * h * c - a * i * f + t * l * f) * w, e[8] = y * w, e[9] = (g * d * r - u * _ * r - g * n * f + t * _ * f + u * n * p - t * d * p) * w, e[10] = (a * _ * r - g * o * r + g * n * c - t * _ * c - a * n * p + t * o * p) * w, e[11] = (u * o * r - a * d * r - u * n * c + t * d * c + a * n * f - t * o * f) * w, e[12] = T * w, e[13] = (u * _ * i - g * d * i + g * n * h - t * _ * h - u * n * m + t * d * m) * w, e[14] = (g * o * i - a * _ * i - g * n * l + t * _ * l + a * n * m - t * o * m) * w, e[15] = (a * d * i - u * o * i + u * n * l - t * d * l - a * n * h + t * o * h) * w, this;
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
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, u = r * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      u * o + n,
      u * l - i * a,
      0,
      c * l - i * o,
      u * l + i * a,
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
    const i = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, u = a + a, d = o + o, h = r * c, f = r * u, g = r * d, _ = a * u, m = a * d, p = o * d, M = l * c, v = l * u, y = l * d, T = n.x, R = n.y, w = n.z;
    return i[0] = (1 - (_ + p)) * T, i[1] = (f + y) * T, i[2] = (g - v) * T, i[3] = 0, i[4] = (f - y) * R, i[5] = (1 - (h + p)) * R, i[6] = (m + M) * R, i[7] = 0, i[8] = (g + v) * w, i[9] = (m - M) * w, i[10] = (1 - (h + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Gn.set(i[0], i[1], i[2]).length();
    const a = Gn.set(i[4], i[5], i[6]).length(), o = Gn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Ot.copy(this);
    const c = 1 / r, u = 1 / a, d = 1 / o;
    return Ot.elements[0] *= c, Ot.elements[1] *= c, Ot.elements[2] *= c, Ot.elements[4] *= u, Ot.elements[5] *= u, Ot.elements[6] *= u, Ot.elements[8] *= d, Ot.elements[9] *= d, Ot.elements[10] *= d, t.setFromRotationMatrix(Ot), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = 2e3) {
    const l = this.elements, c = 2 * r / (t - e), u = 2 * r / (n - i), d = (t + e) / (t - e), h = (n + i) / (n - i);
    let f, g;
    if (o === 2e3)
      f = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === 2001)
      f = -a / (a - r), g = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = h, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = 2e3) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - i), d = 1 / (a - r), h = (t + e) * c, f = (n + i) * u;
    let g, _;
    if (o === 2e3)
      g = (a + r) * d, _ = -2 * d;
    else if (o === 2001)
      g = r * d, _ = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -h, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const Gn = /* @__PURE__ */ new P(), Ot = /* @__PURE__ */ new Pe(), rl = /* @__PURE__ */ new P(0, 0, 0), al = /* @__PURE__ */ new P(1, 1, 1), mn = /* @__PURE__ */ new P(), Bi = /* @__PURE__ */ new P(), Pt = /* @__PURE__ */ new P(), Hr = /* @__PURE__ */ new Pe(), Vr = /* @__PURE__ */ new Lt();
class jt {
  constructor(e = 0, t = 0, n = 0, i = jt.DEFAULT_ORDER) {
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
    const i = e.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], u = i[9], d = i[2], h = i[6], f = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(vt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(h, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-vt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(vt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-vt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(h, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(vt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-vt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(h, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Hr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Hr, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Vr.setFromEuler(this), this.setFromQuaternion(Vr, e);
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
jt.DEFAULT_ORDER = "XYZ";
class eo {
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
let ol = 0;
const Wr = /* @__PURE__ */ new P(), zn = /* @__PURE__ */ new Lt(), nn = /* @__PURE__ */ new Pe(), Oi = /* @__PURE__ */ new P(), fi = /* @__PURE__ */ new P(), ll = /* @__PURE__ */ new P(), cl = /* @__PURE__ */ new Lt(), jr = /* @__PURE__ */ new P(1, 0, 0), Xr = /* @__PURE__ */ new P(0, 1, 0), qr = /* @__PURE__ */ new P(0, 0, 1), Kr = { type: "added" }, hl = { type: "removed" }, Hn = { type: "childadded", child: null }, Ls = { type: "childremoved", child: null };
class rt extends Un {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ol++ }), this.uuid = Vt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = rt.DEFAULT_UP.clone();
    const e = new P(), t = new jt(), n = new Lt(), i = new P(1, 1, 1);
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
        value: new Pe()
      },
      normalMatrix: {
        value: new Ge()
      }
    }), this.matrix = new Pe(), this.matrixWorld = new Pe(), this.matrixAutoUpdate = rt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new eo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return zn.setFromAxisAngle(e, t), this.quaternion.multiply(zn), this;
  }
  rotateOnWorldAxis(e, t) {
    return zn.setFromAxisAngle(e, t), this.quaternion.premultiply(zn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(jr, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Xr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(qr, e);
  }
  translateOnAxis(e, t) {
    return Wr.copy(e).applyQuaternion(this.quaternion), this.position.add(Wr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(jr, e);
  }
  translateY(e) {
    return this.translateOnAxis(Xr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(qr, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(nn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Oi.copy(e) : Oi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), fi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nn.lookAt(fi, Oi, this.up) : nn.lookAt(Oi, fi, this.up), this.quaternion.setFromRotationMatrix(nn), i && (nn.extractRotation(i.matrixWorld), zn.setFromRotationMatrix(nn), this.quaternion.premultiply(zn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Kr), Hn.child = e, this.dispatchEvent(Hn), Hn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(hl), Ls.child = e, this.dispatchEvent(Ls), Ls.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), nn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), nn.multiply(e.parent.matrixWorld)), e.applyMatrix4(nn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Kr), Hn.child = e, this.dispatchEvent(Hn), Hn.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fi, e, ll), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fi, cl, e), e;
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
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            r(e.shapes, d);
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
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), d = a(e.shapes), h = a(e.skeletons), f = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), h.length > 0 && (n.skeletons = h), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
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
const Gt = /* @__PURE__ */ new P(), sn = /* @__PURE__ */ new P(), Is = /* @__PURE__ */ new P(), rn = /* @__PURE__ */ new P(), Vn = /* @__PURE__ */ new P(), Wn = /* @__PURE__ */ new P(), Yr = /* @__PURE__ */ new P(), Us = /* @__PURE__ */ new P(), Fs = /* @__PURE__ */ new P(), Ns = /* @__PURE__ */ new P(), ks = /* @__PURE__ */ new He(), Bs = /* @__PURE__ */ new He(), Os = /* @__PURE__ */ new He();
class Ht {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Gt.subVectors(e, t), i.cross(Gt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    Gt.subVectors(i, t), sn.subVectors(n, t), Is.subVectors(e, t);
    const a = Gt.dot(Gt), o = Gt.dot(sn), l = Gt.dot(Is), c = sn.dot(sn), u = sn.dot(Is), d = a * c - o * o;
    if (d === 0)
      return r.set(0, 0, 0), null;
    const h = 1 / d, f = (c * l - o * u) * h, g = (a * u - o * l) * h;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, rn) === null ? !1 : rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return this.getBarycoord(e, t, n, i, rn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, rn.x), l.addScaledVector(a, rn.y), l.addScaledVector(o, rn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return ks.setScalar(0), Bs.setScalar(0), Os.setScalar(0), ks.fromBufferAttribute(e, t), Bs.fromBufferAttribute(e, n), Os.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(ks, r.x), a.addScaledVector(Bs, r.y), a.addScaledVector(Os, r.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Gt.subVectors(n, t), sn.subVectors(e, t), Gt.cross(sn).dot(i) < 0;
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
    return Gt.subVectors(this.c, this.b), sn.subVectors(this.a, this.b), Gt.cross(sn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ht.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ht.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return Ht.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Ht.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ht.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    Vn.subVectors(i, n), Wn.subVectors(r, n), Us.subVectors(e, n);
    const l = Vn.dot(Us), c = Wn.dot(Us);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Fs.subVectors(e, i);
    const u = Vn.dot(Fs), d = Wn.dot(Fs);
    if (u >= 0 && d <= u)
      return t.copy(i);
    const h = l * d - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), t.copy(n).addScaledVector(Vn, a);
    Ns.subVectors(e, r);
    const f = Vn.dot(Ns), g = Wn.dot(Ns);
    if (g >= 0 && f <= g)
      return t.copy(r);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Wn, o);
    const m = u * g - f * d;
    if (m <= 0 && d - u >= 0 && f - g >= 0)
      return Yr.subVectors(r, i), o = (d - u) / (d - u + (f - g)), t.copy(i).addScaledVector(Yr, o);
    const p = 1 / (m + _ + h);
    return a = _ * p, o = h * p, t.copy(n).addScaledVector(Vn, a).addScaledVector(Wn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const to = {
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
}, gn = { h: 0, s: 0, l: 0 }, Gi = { h: 0, s: 0, l: 0 };
function Gs(s, e, t) {
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
  setHex(e, t = gt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, je.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = je.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, je.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = je.workingColorSpace) {
    if (e = br(e, 1), t = vt(t, 0, 1), n = vt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = Gs(a, r, e + 1 / 3), this.g = Gs(a, r, e), this.b = Gs(a, r, e - 1 / 3);
    }
    return je.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = gt) {
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
  setColorName(e, t = gt) {
    const n = to[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Qn(e.r), this.g = Qn(e.g), this.b = Qn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = As(e.r), this.g = As(e.g), this.b = As(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = gt) {
    return je.fromWorkingColorSpace(bt.copy(this), e), Math.round(vt(bt.r * 255, 0, 255)) * 65536 + Math.round(vt(bt.g * 255, 0, 255)) * 256 + Math.round(vt(bt.b * 255, 0, 255));
  }
  getHexString(e = gt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = je.workingColorSpace) {
    je.fromWorkingColorSpace(bt.copy(this), t);
    const n = bt.r, i = bt.g, r = bt.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const d = a - o;
      switch (c = u <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          l = (i - r) / d + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / d + 2;
          break;
        case r:
          l = (n - i) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = je.workingColorSpace) {
    return je.fromWorkingColorSpace(bt.copy(this), t), e.r = bt.r, e.g = bt.g, e.b = bt.b, e;
  }
  getStyle(e = gt) {
    je.fromWorkingColorSpace(bt.copy(this), e);
    const t = bt.r, n = bt.g, i = bt.b;
    return e !== gt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(gn), this.setHSL(gn.h + e, gn.s + t, gn.l + n);
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
    this.getHSL(gn), e.getHSL(Gi);
    const n = Si(gn.h, Gi.h, t), i = Si(gn.s, Gi.s, t), r = Si(gn.l, Gi.l, t);
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
const bt = /* @__PURE__ */ new re();
re.NAMES = to;
let ul = 0;
class Kt extends Un {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ul++ }), this.uuid = Vt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new re(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
class xn extends Kt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new re(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new jt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ct = /* @__PURE__ */ new P(), zi = /* @__PURE__ */ new Le();
class At {
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
        zi.fromBufferAttribute(this, t), zi.applyMatrix3(e), this.setXY(t, zi.x, zi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ct.fromBufferAttribute(this, t), ct.applyMatrix3(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyMatrix4(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyNormalMatrix(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.transformDirection(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), r = et(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
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
class no extends At {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class io extends At {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Wt extends At {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let dl = 0;
const Ut = /* @__PURE__ */ new Pe(), zs = /* @__PURE__ */ new rt(), jn = /* @__PURE__ */ new P(), Dt = /* @__PURE__ */ new Yt(), pi = /* @__PURE__ */ new Yt(), ft = /* @__PURE__ */ new P();
class Xt extends Un {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: dl++ }), this.uuid = Vt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Qa(e) ? io : no)(e, 1) : this.index = e, this;
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
    return zs.lookAt(e), zs.updateMatrix(), this.applyMatrix4(zs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(jn).negate(), this.translate(jn.x, jn.y, jn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Wt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Yt());
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
          Dt.setFromBufferAttribute(r), this.morphTargetsRelative ? (ft.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(ft), ft.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(ft)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new $t());
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
          pi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ft.addVectors(Dt.min, pi.min), Dt.expandByPoint(ft), ft.addVectors(Dt.max, pi.max), Dt.expandByPoint(ft)) : (Dt.expandByPoint(pi.min), Dt.expandByPoint(pi.max));
        }
      Dt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        ft.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(ft));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            ft.fromBufferAttribute(o, c), l && (jn.fromBufferAttribute(e, c), ft.add(jn)), i = Math.max(i, n.distanceToSquared(ft));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new At(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let U = 0; U < n.count; U++)
      o[U] = new P(), l[U] = new P();
    const c = new P(), u = new P(), d = new P(), h = new Le(), f = new Le(), g = new Le(), _ = new P(), m = new P();
    function p(U, K, b) {
      c.fromBufferAttribute(n, U), u.fromBufferAttribute(n, K), d.fromBufferAttribute(n, b), h.fromBufferAttribute(r, U), f.fromBufferAttribute(r, K), g.fromBufferAttribute(r, b), u.sub(c), d.sub(c), f.sub(h), g.sub(h);
      const A = 1 / (f.x * g.y - g.x * f.y);
      isFinite(A) && (_.copy(u).multiplyScalar(g.y).addScaledVector(d, -f.y).multiplyScalar(A), m.copy(d).multiplyScalar(f.x).addScaledVector(u, -g.x).multiplyScalar(A), o[U].add(_), o[K].add(_), o[b].add(_), l[U].add(m), l[K].add(m), l[b].add(m));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: e.count
    }]);
    for (let U = 0, K = M.length; U < K; ++U) {
      const b = M[U], A = b.start, G = b.count;
      for (let O = A, V = A + G; O < V; O += 3)
        p(
          e.getX(O + 0),
          e.getX(O + 1),
          e.getX(O + 2)
        );
    }
    const v = new P(), y = new P(), T = new P(), R = new P();
    function w(U) {
      T.fromBufferAttribute(i, U), R.copy(T);
      const K = o[U];
      v.copy(K), v.sub(T.multiplyScalar(T.dot(K))).normalize(), y.crossVectors(R, K);
      const A = y.dot(l[U]) < 0 ? -1 : 1;
      a.setXYZW(U, v.x, v.y, v.z, A);
    }
    for (let U = 0, K = M.length; U < K; ++U) {
      const b = M[U], A = b.start, G = b.count;
      for (let O = A, V = A + G; O < V; O += 3)
        w(e.getX(O + 0)), w(e.getX(O + 1)), w(e.getX(O + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new At(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let h = 0, f = n.count; h < f; h++)
          n.setXYZ(h, 0, 0, 0);
      const i = new P(), r = new P(), a = new P(), o = new P(), l = new P(), c = new P(), u = new P(), d = new P();
      if (e)
        for (let h = 0, f = e.count; h < f; h += 3) {
          const g = e.getX(h + 0), _ = e.getX(h + 1), m = e.getX(h + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), a.fromBufferAttribute(t, m), u.subVectors(a, r), d.subVectors(i, r), u.cross(d), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), o.add(u), l.add(u), c.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let h = 0, f = t.count; h < f; h += 3)
          i.fromBufferAttribute(t, h + 0), r.fromBufferAttribute(t, h + 1), a.fromBufferAttribute(t, h + 2), u.subVectors(a, r), d.subVectors(i, r), u.cross(d), n.setXYZ(h + 0, u.x, u.y, u.z), n.setXYZ(h + 1, u.x, u.y, u.z), n.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ft.fromBufferAttribute(e, t), ft.normalize(), e.setXYZ(t, ft.x, ft.y, ft.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, d = o.normalized, h = new c.constructor(l.length * u);
      let f = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        o.isInterleavedBufferAttribute ? f = l[_] * o.data.stride + o.offset : f = l[_] * u;
        for (let p = 0; p < u; p++)
          h[g++] = c[f++];
      }
      return new At(h, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Xt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let u = 0, d = c.length; u < d; u++) {
        const h = c[u], f = e(h, n);
        l.push(f);
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
      const c = this.morphAttributes[l], u = [];
      for (let d = 0, h = c.length; d < h; d++) {
        const f = c[d];
        u.push(f.toJSON(e.data));
      }
      u.length > 0 && (i[l] = u, r = !0);
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
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], d = r[c];
      for (let h = 0, f = d.length; h < f; h++)
        u.push(d[h].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
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
const $r = /* @__PURE__ */ new Pe(), En = /* @__PURE__ */ new ps(), Hi = /* @__PURE__ */ new $t(), Qr = /* @__PURE__ */ new P(), Vi = /* @__PURE__ */ new P(), Wi = /* @__PURE__ */ new P(), ji = /* @__PURE__ */ new P(), Hs = /* @__PURE__ */ new P(), Xi = /* @__PURE__ */ new P(), Zr = /* @__PURE__ */ new P(), qi = /* @__PURE__ */ new P();
class xt extends rt {
  constructor(e = new Xt(), t = new xn()) {
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
      Xi.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = o[l], d = r[l];
        u !== 0 && (Hs.fromBufferAttribute(d, e), a ? Xi.addScaledVector(Hs, u) : Xi.addScaledVector(Hs.sub(t), u));
      }
      t.add(Xi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Hi.copy(n.boundingSphere), Hi.applyMatrix4(r), En.copy(e.ray).recast(e.near), !(Hi.containsPoint(En.origin) === !1 && (En.intersectSphere(Hi, Qr) === null || En.origin.distanceToSquared(Qr) > (e.far - e.near) ** 2)) && ($r.copy(r).invert(), En.copy(e.ray).applyMatrix4($r), !(n.boundingBox !== null && En.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, En)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, d = r.attributes.normal, h = r.groups, f = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = h.length; g < _; g++) {
          const m = h[g], p = a[m.materialIndex], M = Math.max(m.start, f.start), v = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = M, T = v; y < T; y += 3) {
            const R = o.getX(y), w = o.getX(y + 1), U = o.getX(y + 2);
            i = Ki(this, p, e, n, c, u, d, R, w, U), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(o.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const M = o.getX(m), v = o.getX(m + 1), y = o.getX(m + 2);
          i = Ki(this, a, e, n, c, u, d, M, v, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = h.length; g < _; g++) {
          const m = h[g], p = a[m.materialIndex], M = Math.max(m.start, f.start), v = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = M, T = v; y < T; y += 3) {
            const R = y, w = y + 1, U = y + 2;
            i = Ki(this, p, e, n, c, u, d, R, w, U), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, f.start), _ = Math.min(l.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const M = m, v = m + 1, y = m + 2;
          i = Ki(this, a, e, n, c, u, d, M, v, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function fl(s, e, t, n, i, r, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, r, i, !0, o) : l = n.intersectTriangle(i, r, a, e.side === 0, o), l === null) return null;
  qi.copy(o), qi.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(qi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: qi.clone(),
    object: s
  };
}
function Ki(s, e, t, n, i, r, a, o, l, c) {
  s.getVertexPosition(o, Vi), s.getVertexPosition(l, Wi), s.getVertexPosition(c, ji);
  const u = fl(s, e, t, n, Vi, Wi, ji, Zr);
  if (u) {
    const d = new P();
    Ht.getBarycoord(Zr, Vi, Wi, ji, d), i && (u.uv = Ht.getInterpolatedAttribute(i, o, l, c, d, new Le())), r && (u.uv1 = Ht.getInterpolatedAttribute(r, o, l, c, d, new Le())), a && (u.normal = Ht.getInterpolatedAttribute(a, o, l, c, d, new P()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = {
      a: o,
      b: l,
      c,
      normal: new P(),
      materialIndex: 0
    };
    Ht.getNormal(Vi, Wi, ji, h.normal), u.face = h, u.barycoord = d;
  }
  return u;
}
class wi extends Xt {
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
    const l = [], c = [], u = [], d = [];
    let h = 0, f = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Wt(c, 3)), this.setAttribute("normal", new Wt(u, 3)), this.setAttribute("uv", new Wt(d, 2));
    function g(_, m, p, M, v, y, T, R, w, U, K) {
      const b = y / w, A = T / U, G = y / 2, O = T / 2, V = R / 2, $ = w + 1, B = U + 1;
      let ee = 0, H = 0;
      const se = new P();
      for (let ue = 0; ue < B; ue++) {
        const xe = ue * A - O;
        for (let Ne = 0; Ne < $; Ne++) {
          const Xe = Ne * b - G;
          se[_] = Xe * M, se[m] = xe * v, se[p] = V, c.push(se.x, se.y, se.z), se[_] = 0, se[m] = 0, se[p] = R > 0 ? 1 : -1, u.push(se.x, se.y, se.z), d.push(Ne / w), d.push(1 - ue / U), ee += 1;
        }
      }
      for (let ue = 0; ue < U; ue++)
        for (let xe = 0; xe < w; xe++) {
          const Ne = h + xe + $ * ue, Xe = h + xe + $ * (ue + 1), W = h + (xe + 1) + $ * (ue + 1), Z = h + (xe + 1) + $ * ue;
          l.push(Ne, Xe, Z), l.push(Xe, W, Z), H += 6;
        }
      o.addGroup(f, H, K), f += H, h += ee;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new wi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ei(s) {
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
function yt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = ei(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function pl(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function so(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : je.workingColorSpace;
}
const Ti = { clone: ei, merge: yt };
var ml = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, gl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Mt extends Kt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ml, this.fragmentShader = gl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ei(e.uniforms), this.uniformsGroups = pl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ro extends rt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Pe(), this.projectionMatrix = new Pe(), this.projectionMatrixInverse = new Pe(), this.coordinateSystem = 2e3;
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
const _n = /* @__PURE__ */ new P(), Jr = /* @__PURE__ */ new Le(), ea = /* @__PURE__ */ new Le();
class wt extends ro {
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
    this.fov = Jn * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Mi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Jn * 2 * Math.atan(
      Math.tan(Mi * 0.5 * this.fov) / this.zoom
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
    _n.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(_n.x, _n.y).multiplyScalar(-e / _n.z), _n.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(_n.x, _n.y).multiplyScalar(-e / _n.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Jr, ea), t.subVectors(ea, Jr);
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
    let t = e * Math.tan(Mi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
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
const Xn = -90, qn = 1;
class _l extends rt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new wt(Xn, qn, e, t);
    i.layers = this.layers, this.add(i);
    const r = new wt(Xn, qn, e, t);
    r.layers = this.layers, this.add(r);
    const a = new wt(Xn, qn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new wt(Xn, qn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new wt(Xn, qn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new wt(Xn, qn, e, t);
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
    const [r, a, o, l, c, u] = this.children, d = e.getRenderTarget(), h = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, u), e.setRenderTarget(d, h, f), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class ao extends pt {
  constructor(e, t, n, i, r, a, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, r, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class bl extends Nt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new ao(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
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
    }, i = new wi(5, 5, 5), r = new Mt({
      name: "CubemapFromEquirect",
      uniforms: ei(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const a = new xt(i, r), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new _l(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Vs = /* @__PURE__ */ new P(), vl = /* @__PURE__ */ new P(), xl = /* @__PURE__ */ new Ge();
class Pn {
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
    const i = Vs.subVectors(n, t).cross(vl.subVectors(e, t)).normalize();
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
    const n = e.delta(Vs), i = this.normal.dot(n);
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
    const n = t || xl.getNormalMatrix(e), i = this.coplanarPoint(Vs).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
const Tn = /* @__PURE__ */ new $t(), Yi = /* @__PURE__ */ new P();
class vr {
  constructor(e = new Pn(), t = new Pn(), n = new Pn(), i = new Pn(), r = new Pn(), a = new Pn()) {
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
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], l = i[3], c = i[4], u = i[5], d = i[6], h = i[7], f = i[8], g = i[9], _ = i[10], m = i[11], p = i[12], M = i[13], v = i[14], y = i[15];
    if (n[0].setComponents(l - r, h - c, m - f, y - p).normalize(), n[1].setComponents(l + r, h + c, m + f, y + p).normalize(), n[2].setComponents(l + a, h + u, m + g, y + M).normalize(), n[3].setComponents(l - a, h - u, m - g, y - M).normalize(), n[4].setComponents(l - o, h - d, m - _, y - v).normalize(), t === 2e3)
      n[5].setComponents(l + o, h + d, m + _, y + v).normalize();
    else if (t === 2001)
      n[5].setComponents(o, d, _, v).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Tn);
  }
  intersectsSprite(e) {
    return Tn.center.set(0, 0, 0), Tn.radius = 0.7071067811865476, Tn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Tn);
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
      if (Yi.x = i.normal.x > 0 ? e.max.x : e.min.x, Yi.y = i.normal.y > 0 ? e.max.y : e.min.y, Yi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Yi) < 0)
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
function oo() {
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
function Ml(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, u = o.usage, d = c.byteLength, h = s.createBuffer();
    s.bindBuffer(l, h), s.bufferData(l, c, u), o.onUploadCallback();
    let f;
    if (c instanceof Float32Array)
      f = s.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = s.HALF_FLOAT : f = s.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      f = s.SHORT;
    else if (c instanceof Uint32Array)
      f = s.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      f = s.INT;
    else if (c instanceof Int8Array)
      f = s.BYTE;
    else if (c instanceof Uint8Array)
      f = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      f = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: h,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function n(o, l, c) {
    const u = l.array, d = l.updateRanges;
    if (s.bindBuffer(c, o), d.length === 0)
      s.bufferSubData(c, 0, u);
    else {
      d.sort((f, g) => f.start - g.start);
      let h = 0;
      for (let f = 1; f < d.length; f++) {
        const g = d[h], _ = d[f];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          _.start + _.count - g.start
        ) : (++h, d[h] = _);
      }
      d.length = h + 1;
      for (let f = 0, g = d.length; f < g; f++) {
        const _ = d[f];
        s.bufferSubData(
          c,
          _.start * u.BYTES_PER_ELEMENT,
          u,
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
      const u = e.get(o);
      (!u || u.version < o.version) && e.set(o, {
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
class Ri extends Xt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, u = l + 1, d = e / o, h = t / l, f = [], g = [], _ = [], m = [];
    for (let p = 0; p < u; p++) {
      const M = p * h - a;
      for (let v = 0; v < c; v++) {
        const y = v * d - r;
        g.push(y, -M, 0), _.push(0, 0, 1), m.push(v / o), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let M = 0; M < o; M++) {
        const v = M + c * p, y = M + c * (p + 1), T = M + 1 + c * (p + 1), R = M + 1 + c * p;
        f.push(v, y, R), f.push(y, T, R);
      }
    this.setIndex(f), this.setAttribute("position", new Wt(g, 3)), this.setAttribute("normal", new Wt(_, 3)), this.setAttribute("uv", new Wt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ri(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Sl = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, yl = `#ifdef USE_ALPHAHASH
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
#endif`, Al = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, El = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Tl = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, wl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Rl = `#ifdef USE_AOMAP
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
#endif`, Cl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Pl = `#ifdef USE_BATCHING
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
#endif`, Dl = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ll = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Il = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ul = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Fl = `#ifdef USE_IRIDESCENCE
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
#endif`, Nl = `#ifdef USE_BUMPMAP
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
#endif`, kl = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Bl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Ol = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Gl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, zl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Hl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Vl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Wl = `#if defined( USE_COLOR_ALPHA )
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
#endif`, jl = `#define PI 3.141592653589793
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
} // validated`, Xl = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, ql = `vec3 transformedNormal = objectNormal;
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
#endif`, Kl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Yl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, $l = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ql = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Zl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Jl = `
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
}`, ec = `#ifdef USE_ENVMAP
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
#endif`, tc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, nc = `#ifdef USE_ENVMAP
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
#endif`, ic = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, sc = `#ifdef USE_ENVMAP
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
#endif`, rc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, ac = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, oc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, lc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, cc = `#ifdef USE_GRADIENTMAP
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
}`, hc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, uc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, dc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, fc = `uniform bool receiveShadow;
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
#endif`, pc = `#ifdef USE_ENVMAP
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
#endif`, mc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, gc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, _c = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, bc = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, vc = `PhysicalMaterial material;
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
#endif`, xc = `struct PhysicalMaterial {
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
}`, Mc = `
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
#endif`, Sc = `#if defined( RE_IndirectDiffuse )
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
#endif`, yc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Ac = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ec = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Tc = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, wc = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Rc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Cc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Pc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Dc = `#if defined( USE_POINTS_UV )
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
#endif`, Lc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ic = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Uc = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Fc = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Nc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, kc = `#ifdef USE_MORPHTARGETS
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
#endif`, Bc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Oc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Gc = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, zc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Vc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Wc = `#ifdef USE_NORMALMAP
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
#endif`, jc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Xc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, qc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Kc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Yc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, $c = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Qc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Zc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Jc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, eh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, th = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, nh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ih = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, sh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, rh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, ah = `float getShadowMask() {
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
}`, oh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, lh = `#ifdef USE_SKINNING
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
#endif`, ch = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, hh = `#ifdef USE_SKINNING
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
#endif`, uh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, dh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, fh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ph = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, mh = `#ifdef USE_TRANSMISSION
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
#endif`, gh = `#ifdef USE_TRANSMISSION
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
#endif`, _h = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, bh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, vh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, xh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Mh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Sh = `uniform sampler2D t2D;
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
}`, yh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ah = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Eh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Th = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, wh = `#include <common>
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
}`, Rh = `#if DEPTH_PACKING == 3200
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
}`, Ch = `#define DISTANCE
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
}`, Ph = `#define DISTANCE
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
}`, Dh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Lh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ih = `uniform float scale;
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
}`, Uh = `uniform vec3 diffuse;
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
}`, Fh = `#include <common>
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
}`, Nh = `uniform vec3 diffuse;
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
}`, kh = `#define LAMBERT
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
}`, Bh = `#define LAMBERT
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
}`, Oh = `#define MATCAP
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
}`, Gh = `#define MATCAP
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
}`, zh = `#define NORMAL
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
}`, Hh = `#define NORMAL
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
}`, Vh = `#define PHONG
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
}`, Wh = `#define PHONG
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
}`, jh = `#define STANDARD
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
}`, Xh = `#define STANDARD
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
}`, qh = `#define TOON
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
}`, Kh = `#define TOON
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
}`, Yh = `uniform float size;
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
}`, $h = `uniform vec3 diffuse;
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
}`, Qh = `#include <common>
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
}`, Zh = `uniform vec3 color;
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
}`, Jh = `uniform float rotation;
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
}`, eu = `uniform vec3 diffuse;
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
  alphahash_fragment: Sl,
  alphahash_pars_fragment: yl,
  alphamap_fragment: Al,
  alphamap_pars_fragment: El,
  alphatest_fragment: Tl,
  alphatest_pars_fragment: wl,
  aomap_fragment: Rl,
  aomap_pars_fragment: Cl,
  batching_pars_vertex: Pl,
  batching_vertex: Dl,
  begin_vertex: Ll,
  beginnormal_vertex: Il,
  bsdfs: Ul,
  iridescence_fragment: Fl,
  bumpmap_pars_fragment: Nl,
  clipping_planes_fragment: kl,
  clipping_planes_pars_fragment: Bl,
  clipping_planes_pars_vertex: Ol,
  clipping_planes_vertex: Gl,
  color_fragment: zl,
  color_pars_fragment: Hl,
  color_pars_vertex: Vl,
  color_vertex: Wl,
  common: jl,
  cube_uv_reflection_fragment: Xl,
  defaultnormal_vertex: ql,
  displacementmap_pars_vertex: Kl,
  displacementmap_vertex: Yl,
  emissivemap_fragment: $l,
  emissivemap_pars_fragment: Ql,
  colorspace_fragment: Zl,
  colorspace_pars_fragment: Jl,
  envmap_fragment: ec,
  envmap_common_pars_fragment: tc,
  envmap_pars_fragment: nc,
  envmap_pars_vertex: ic,
  envmap_physical_pars_fragment: pc,
  envmap_vertex: sc,
  fog_vertex: rc,
  fog_pars_vertex: ac,
  fog_fragment: oc,
  fog_pars_fragment: lc,
  gradientmap_pars_fragment: cc,
  lightmap_pars_fragment: hc,
  lights_lambert_fragment: uc,
  lights_lambert_pars_fragment: dc,
  lights_pars_begin: fc,
  lights_toon_fragment: mc,
  lights_toon_pars_fragment: gc,
  lights_phong_fragment: _c,
  lights_phong_pars_fragment: bc,
  lights_physical_fragment: vc,
  lights_physical_pars_fragment: xc,
  lights_fragment_begin: Mc,
  lights_fragment_maps: Sc,
  lights_fragment_end: yc,
  logdepthbuf_fragment: Ac,
  logdepthbuf_pars_fragment: Ec,
  logdepthbuf_pars_vertex: Tc,
  logdepthbuf_vertex: wc,
  map_fragment: Rc,
  map_pars_fragment: Cc,
  map_particle_fragment: Pc,
  map_particle_pars_fragment: Dc,
  metalnessmap_fragment: Lc,
  metalnessmap_pars_fragment: Ic,
  morphinstance_vertex: Uc,
  morphcolor_vertex: Fc,
  morphnormal_vertex: Nc,
  morphtarget_pars_vertex: kc,
  morphtarget_vertex: Bc,
  normal_fragment_begin: Oc,
  normal_fragment_maps: Gc,
  normal_pars_fragment: zc,
  normal_pars_vertex: Hc,
  normal_vertex: Vc,
  normalmap_pars_fragment: Wc,
  clearcoat_normal_fragment_begin: jc,
  clearcoat_normal_fragment_maps: Xc,
  clearcoat_pars_fragment: qc,
  iridescence_pars_fragment: Kc,
  opaque_fragment: Yc,
  packing: $c,
  premultiplied_alpha_fragment: Qc,
  project_vertex: Zc,
  dithering_fragment: Jc,
  dithering_pars_fragment: eh,
  roughnessmap_fragment: th,
  roughnessmap_pars_fragment: nh,
  shadowmap_pars_fragment: ih,
  shadowmap_pars_vertex: sh,
  shadowmap_vertex: rh,
  shadowmask_pars_fragment: ah,
  skinbase_vertex: oh,
  skinning_pars_vertex: lh,
  skinning_vertex: ch,
  skinnormal_vertex: hh,
  specularmap_fragment: uh,
  specularmap_pars_fragment: dh,
  tonemapping_fragment: fh,
  tonemapping_pars_fragment: ph,
  transmission_fragment: mh,
  transmission_pars_fragment: gh,
  uv_pars_fragment: _h,
  uv_pars_vertex: bh,
  uv_vertex: vh,
  worldpos_vertex: xh,
  background_vert: Mh,
  background_frag: Sh,
  backgroundCube_vert: yh,
  backgroundCube_frag: Ah,
  cube_vert: Eh,
  cube_frag: Th,
  depth_vert: wh,
  depth_frag: Rh,
  distanceRGBA_vert: Ch,
  distanceRGBA_frag: Ph,
  equirect_vert: Dh,
  equirect_frag: Lh,
  linedashed_vert: Ih,
  linedashed_frag: Uh,
  meshbasic_vert: Fh,
  meshbasic_frag: Nh,
  meshlambert_vert: kh,
  meshlambert_frag: Bh,
  meshmatcap_vert: Oh,
  meshmatcap_frag: Gh,
  meshnormal_vert: zh,
  meshnormal_frag: Hh,
  meshphong_vert: Vh,
  meshphong_frag: Wh,
  meshphysical_vert: jh,
  meshphysical_frag: Xh,
  meshtoon_vert: qh,
  meshtoon_frag: Kh,
  points_vert: Yh,
  points_frag: $h,
  shadow_vert: Qh,
  shadow_frag: Zh,
  sprite_vert: Jh,
  sprite_frag: eu
}, ie = {
  common: {
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
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
    normalScale: { value: /* @__PURE__ */ new Le(1, 1) }
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
    alphaMapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ge() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new re(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Le(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ge() },
    alphaTest: { value: 0 }
  }
}, qt = {
  basic: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) }
      }
    ]),
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) },
        specular: { value: /* @__PURE__ */ new re(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.roughnessmap,
      ie.metalnessmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.gradientmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new re(0) }
      }
    ]),
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ yt([
      ie.points,
      ie.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.fog,
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
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ yt([
      ie.sprite,
      ie.fog
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
    uniforms: /* @__PURE__ */ yt([
      ie.common,
      ie.displacementmap,
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
    uniforms: /* @__PURE__ */ yt([
      ie.lights,
      ie.fog,
      {
        color: { value: /* @__PURE__ */ new re(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
qt.physical = {
  uniforms: /* @__PURE__ */ yt([
    qt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ge() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ge() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Le(1, 1) },
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
      sheenColor: { value: /* @__PURE__ */ new re(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ge() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ge() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ge() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Le() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ge() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new re(0) },
      specularColor: { value: /* @__PURE__ */ new re(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ge() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ge() },
      anisotropyVector: { value: /* @__PURE__ */ new Le() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ge() }
    }
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const $i = { r: 0, b: 0, g: 0 }, wn = /* @__PURE__ */ new jt(), tu = /* @__PURE__ */ new Pe();
function nu(s, e, t, n, i, r, a) {
  const o = new re(0);
  let l = r === !0 ? 0 : 1, c, u, d = null, h = 0, f = null;
  function g(M) {
    let v = M.isScene === !0 ? M.background : null;
    return v && v.isTexture && (v = (M.backgroundBlurriness > 0 ? t : e).get(v)), v;
  }
  function _(M) {
    let v = !1;
    const y = g(M);
    y === null ? p(o, l) : y && y.isColor && (p(y, 1), v = !0);
    const T = s.xr.getEnvironmentBlendMode();
    T === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || v) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function m(M, v) {
    const y = g(v);
    y && (y.isCubeTexture || y.mapping === 306) ? (u === void 0 && (u = new xt(
      new wi(1, 1, 1),
      new Mt({
        name: "BackgroundCubeMaterial",
        uniforms: ei(qt.backgroundCube.uniforms),
        vertexShader: qt.backgroundCube.vertexShader,
        fragmentShader: qt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(T, R, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), wn.copy(v.backgroundRotation), wn.x *= -1, wn.y *= -1, wn.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (wn.y *= -1, wn.z *= -1), u.material.uniforms.envMap.value = y, u.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(tu.makeRotationFromEuler(wn)), u.material.toneMapped = je.getTransfer(y.colorSpace) !== nt, (d !== y || h !== y.version || f !== s.toneMapping) && (u.material.needsUpdate = !0, d = y, h = y.version, f = s.toneMapping), u.layers.enableAll(), M.unshift(u, u.geometry, u.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new xt(
      new Ri(2, 2),
      new Mt({
        name: "BackgroundMaterial",
        uniforms: ei(qt.background.uniforms),
        vertexShader: qt.background.vertexShader,
        fragmentShader: qt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = y, c.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, c.material.toneMapped = je.getTransfer(y.colorSpace) !== nt, y.matrixAutoUpdate === !0 && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (d !== y || h !== y.version || f !== s.toneMapping) && (c.material.needsUpdate = !0, d = y, h = y.version, f = s.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(M, v) {
    M.getRGB($i, so(s)), n.buffers.color.setClear($i.r, $i.g, $i.b, v, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(M, v = 1) {
      o.set(M), l = v, p(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(M) {
      l = M, p(o, l);
    },
    render: _,
    addToRenderList: m
  };
}
function iu(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = h(null);
  let r = i, a = !1;
  function o(b, A, G, O, V) {
    let $ = !1;
    const B = d(O, G, A);
    r !== B && (r = B, c(r.object)), $ = f(b, O, G, V), $ && g(b, O, G, V), V !== null && e.update(V, s.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, y(b, A, G, O), V !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(V).buffer));
  }
  function l() {
    return s.createVertexArray();
  }
  function c(b) {
    return s.bindVertexArray(b);
  }
  function u(b) {
    return s.deleteVertexArray(b);
  }
  function d(b, A, G) {
    const O = G.wireframe === !0;
    let V = n[b.id];
    V === void 0 && (V = {}, n[b.id] = V);
    let $ = V[A.id];
    $ === void 0 && ($ = {}, V[A.id] = $);
    let B = $[O];
    return B === void 0 && (B = h(l()), $[O] = B), B;
  }
  function h(b) {
    const A = [], G = [], O = [];
    for (let V = 0; V < t; V++)
      A[V] = 0, G[V] = 0, O[V] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: A,
      enabledAttributes: G,
      attributeDivisors: O,
      object: b,
      attributes: {},
      index: null
    };
  }
  function f(b, A, G, O) {
    const V = r.attributes, $ = A.attributes;
    let B = 0;
    const ee = G.getAttributes();
    for (const H in ee)
      if (ee[H].location >= 0) {
        const ue = V[H];
        let xe = $[H];
        if (xe === void 0 && (H === "instanceMatrix" && b.instanceMatrix && (xe = b.instanceMatrix), H === "instanceColor" && b.instanceColor && (xe = b.instanceColor)), ue === void 0 || ue.attribute !== xe || xe && ue.data !== xe.data) return !0;
        B++;
      }
    return r.attributesNum !== B || r.index !== O;
  }
  function g(b, A, G, O) {
    const V = {}, $ = A.attributes;
    let B = 0;
    const ee = G.getAttributes();
    for (const H in ee)
      if (ee[H].location >= 0) {
        let ue = $[H];
        ue === void 0 && (H === "instanceMatrix" && b.instanceMatrix && (ue = b.instanceMatrix), H === "instanceColor" && b.instanceColor && (ue = b.instanceColor));
        const xe = {};
        xe.attribute = ue, ue && ue.data && (xe.data = ue.data), V[H] = xe, B++;
      }
    r.attributes = V, r.attributesNum = B, r.index = O;
  }
  function _() {
    const b = r.newAttributes;
    for (let A = 0, G = b.length; A < G; A++)
      b[A] = 0;
  }
  function m(b) {
    p(b, 0);
  }
  function p(b, A) {
    const G = r.newAttributes, O = r.enabledAttributes, V = r.attributeDivisors;
    G[b] = 1, O[b] === 0 && (s.enableVertexAttribArray(b), O[b] = 1), V[b] !== A && (s.vertexAttribDivisor(b, A), V[b] = A);
  }
  function M() {
    const b = r.newAttributes, A = r.enabledAttributes;
    for (let G = 0, O = A.length; G < O; G++)
      A[G] !== b[G] && (s.disableVertexAttribArray(G), A[G] = 0);
  }
  function v(b, A, G, O, V, $, B) {
    B === !0 ? s.vertexAttribIPointer(b, A, G, V, $) : s.vertexAttribPointer(b, A, G, O, V, $);
  }
  function y(b, A, G, O) {
    _();
    const V = O.attributes, $ = G.getAttributes(), B = A.defaultAttributeValues;
    for (const ee in $) {
      const H = $[ee];
      if (H.location >= 0) {
        let se = V[ee];
        if (se === void 0 && (ee === "instanceMatrix" && b.instanceMatrix && (se = b.instanceMatrix), ee === "instanceColor" && b.instanceColor && (se = b.instanceColor)), se !== void 0) {
          const ue = se.normalized, xe = se.itemSize, Ne = e.get(se);
          if (Ne === void 0) continue;
          const Xe = Ne.buffer, W = Ne.type, Z = Ne.bytesPerElement, ge = W === s.INT || W === s.UNSIGNED_INT || se.gpuType === 1013;
          if (se.isInterleavedBufferAttribute) {
            const de = se.data, Q = de.stride, J = se.offset;
            if (de.isInstancedInterleavedBuffer) {
              for (let oe = 0; oe < H.locationSize; oe++)
                p(H.location + oe, de.meshPerAttribute);
              b.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = de.meshPerAttribute * de.count);
            } else
              for (let oe = 0; oe < H.locationSize; oe++)
                m(H.location + oe);
            s.bindBuffer(s.ARRAY_BUFFER, Xe);
            for (let oe = 0; oe < H.locationSize; oe++)
              v(
                H.location + oe,
                xe / H.locationSize,
                W,
                ue,
                Q * Z,
                (J + xe / H.locationSize * oe) * Z,
                ge
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let de = 0; de < H.locationSize; de++)
                p(H.location + de, se.meshPerAttribute);
              b.isInstancedMesh !== !0 && O._maxInstanceCount === void 0 && (O._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let de = 0; de < H.locationSize; de++)
                m(H.location + de);
            s.bindBuffer(s.ARRAY_BUFFER, Xe);
            for (let de = 0; de < H.locationSize; de++)
              v(
                H.location + de,
                xe / H.locationSize,
                W,
                ue,
                xe * Z,
                xe / H.locationSize * de * Z,
                ge
              );
          }
        } else if (B !== void 0) {
          const ue = B[ee];
          if (ue !== void 0)
            switch (ue.length) {
              case 2:
                s.vertexAttrib2fv(H.location, ue);
                break;
              case 3:
                s.vertexAttrib3fv(H.location, ue);
                break;
              case 4:
                s.vertexAttrib4fv(H.location, ue);
                break;
              default:
                s.vertexAttrib1fv(H.location, ue);
            }
        }
      }
    }
    M();
  }
  function T() {
    U();
    for (const b in n) {
      const A = n[b];
      for (const G in A) {
        const O = A[G];
        for (const V in O)
          u(O[V].object), delete O[V];
        delete A[G];
      }
      delete n[b];
    }
  }
  function R(b) {
    if (n[b.id] === void 0) return;
    const A = n[b.id];
    for (const G in A) {
      const O = A[G];
      for (const V in O)
        u(O[V].object), delete O[V];
      delete A[G];
    }
    delete n[b.id];
  }
  function w(b) {
    for (const A in n) {
      const G = n[A];
      if (G[b.id] === void 0) continue;
      const O = G[b.id];
      for (const V in O)
        u(O[V].object), delete O[V];
      delete G[b.id];
    }
  }
  function U() {
    K(), a = !0, r !== i && (r = i, c(r.object));
  }
  function K() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: U,
    resetDefaultState: K,
    dispose: T,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: w,
    initAttributes: _,
    enableAttribute: m,
    disableUnusedAttributes: M
  };
}
function su(s, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, u) {
    s.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, d) {
    d !== 0 && (s.drawArraysInstanced(n, c, u, d), t.update(u, n, d));
  }
  function o(c, u, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, d);
    let f = 0;
    for (let g = 0; g < d; g++)
      f += u[g];
    t.update(f, n, 1);
  }
  function l(c, u, d, h) {
    if (d === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], u[g], h[g]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, h, 0, d);
      let g = 0;
      for (let _ = 0; _ < d; _++)
        g += u[_];
      for (let _ = 0; _ < h.length; _++)
        t.update(g, n, h[_]);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function ru(s, e, t, n) {
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
    const U = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    w !== 1015 && !U);
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
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const d = t.logarithmicDepthBuffer === !0, h = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (h === !0) {
    const w = e.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const f = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), p = s.getParameter(s.MAX_VERTEX_ATTRIBS), M = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), v = s.getParameter(s.MAX_VARYING_VECTORS), y = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), T = g > 0, R = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: d,
    reverseDepthBuffer: h,
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: M,
    maxVaryings: v,
    maxFragmentUniforms: y,
    vertexTextures: T,
    maxSamples: R
  };
}
function au(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const a = new Pn(), o = new Ge(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, h) {
    const f = d.length !== 0 || h || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = h, n = d.length, f;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(d, h) {
    t = u(d, h, 0);
  }, this.setState = function(d, h, f) {
    const g = d.clippingPlanes, _ = d.clipIntersection, m = d.clipShadows, p = s.get(d);
    if (!i || g === null || g.length === 0 || r && !m)
      r ? u(null) : c();
    else {
      const M = r ? 0 : n, v = M * 4;
      let y = p.clippingState || null;
      l.value = y, y = u(g, h, v, f);
      for (let T = 0; T !== v; ++T)
        y[T] = t[T];
      p.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, h, f, g) {
    const _ = d !== null ? d.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== !0 || m === null) {
        const p = f + _ * 4, M = h.matrixWorldInverse;
        o.getNormalMatrix(M), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let v = 0, y = f; v !== _; ++v, y += 4)
          a.copy(d[v]).applyMatrix4(M, o), a.normal.toArray(m, y), m[y + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function ou(s) {
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
            const c = new bl(l.height);
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
class Ci extends ro {
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
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const $n = 4, ta = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Ln = 20, Ws = /* @__PURE__ */ new Ci(), na = /* @__PURE__ */ new re();
let js = null, Xs = 0, qs = 0, Ks = !1;
const Dn = (1 + Math.sqrt(5)) / 2, Kn = 1 / Dn, ia = [
  /* @__PURE__ */ new P(-Dn, Kn, 0),
  /* @__PURE__ */ new P(Dn, Kn, 0),
  /* @__PURE__ */ new P(-Kn, 0, Dn),
  /* @__PURE__ */ new P(Kn, 0, Dn),
  /* @__PURE__ */ new P(0, Dn, -Kn),
  /* @__PURE__ */ new P(0, Dn, Kn),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, 1)
];
class rr {
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
    js = this._renderer.getRenderTarget(), Xs = this._renderer.getActiveCubeFace(), qs = this._renderer.getActiveMipmapLevel(), Ks = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = aa(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ra(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(js, Xs, qs), this._renderer.xr.enabled = Ks, e.scissorTest = !1, Qi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), js = this._renderer.getRenderTarget(), Xs = this._renderer.getActiveCubeFace(), qs = this._renderer.getActiveMipmapLevel(), Ks = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
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
      colorSpace: ht,
      depthBuffer: !1
    }, i = sa(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = sa(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = lu(r)), this._blurMaterial = cu(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new xt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ws);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new wt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, h = u.toneMapping;
    u.getClearColor(na), u.toneMapping = 0, u.autoClear = !1;
    const f = new xn({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new xt(new wi(), f);
    let _ = !1;
    const m = e.background;
    m ? m.isColor && (f.color.copy(m), e.background = null, _ = !0) : (f.color.copy(na), _ = !0);
    for (let p = 0; p < 6; p++) {
      const M = p % 3;
      M === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : M === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p]));
      const v = this._cubeSize;
      Qi(i, M * v, p > 2 ? v : 0, v, v), u.setRenderTarget(i), _ && u.render(g, o), u.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = h, u.autoClear = d, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = aa()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ra());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new xt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Qi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Ws);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = ia[(i - r - 1) % ia.length];
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
    const u = 3, d = new xt(this._lodPlanes[i], c), h = c.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Ln - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(u * _) : Ln;
    m > Ln && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ln}`);
    const p = [];
    let M = 0;
    for (let w = 0; w < Ln; ++w) {
      const U = w / _, K = Math.exp(-U * U / 2);
      p.push(K), w === 0 ? M += K : w < m && (M += 2 * K);
    }
    for (let w = 0; w < p.length; w++)
      p[w] = p[w] / M;
    h.envMap.value = e.texture, h.samples.value = m, h.weights.value = p, h.latitudinal.value = a === "latitudinal", o && (h.poleAxis.value = o);
    const { _lodMax: v } = this;
    h.dTheta.value = g, h.mipInt.value = v - n;
    const y = this._sizeLods[i], T = 3 * y * (i > v - $n ? i - v + $n : 0), R = 4 * (this._cubeSize - y);
    Qi(t, T, R, 3 * y, 2 * y), l.setRenderTarget(t), l.render(d, Ws);
  }
}
function lu(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - $n + 1 + ta.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s - $n ? l = ta[a - s + $n - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, d = 1 + c, h = [u, u, d, u, d, d, u, u, d, d, u, d], f = 6, g = 6, _ = 3, m = 2, p = 1, M = new Float32Array(_ * g * f), v = new Float32Array(m * g * f), y = new Float32Array(p * g * f);
    for (let R = 0; R < f; R++) {
      const w = R % 3 * 2 / 3 - 1, U = R > 2 ? 0 : -1, K = [
        w,
        U,
        0,
        w + 2 / 3,
        U,
        0,
        w + 2 / 3,
        U + 1,
        0,
        w,
        U,
        0,
        w + 2 / 3,
        U + 1,
        0,
        w,
        U + 1,
        0
      ];
      M.set(K, _ * g * R), v.set(h, m * g * R);
      const b = [R, R, R, R, R, R];
      y.set(b, p * g * R);
    }
    const T = new Xt();
    T.setAttribute("position", new At(M, _)), T.setAttribute("uv", new At(v, m)), T.setAttribute("faceIndex", new At(y, p)), e.push(T), i > $n && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function sa(s, e, t) {
  const n = new Nt(s, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Qi(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function cu(s, e, t) {
  const n = new Float32Array(Ln), i = new P(0, 1, 0);
  return new Mt({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ln,
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
    vertexShader: xr(),
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
function ra() {
  return new Mt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: xr(),
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
function aa() {
  return new Mt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: xr(),
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
function xr() {
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
function hu(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, u = l === 301 || l === 302;
      if (c || u) {
        let d = e.get(o);
        const h = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== h)
          return t === null && (t = new rr(s)), d = c ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const f = o.image;
          return c && f && f.height > 0 || u && f && i(f) ? (t === null && (t = new rr(s)), d = c ? t.fromEquirectangular(o) : t.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), o.addEventListener("dispose", r), d.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
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
function uu(s) {
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
      return i === null && as("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function du(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const h = d.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes)
      e.remove(h.attributes[g]);
    for (const g in h.morphAttributes) {
      const _ = h.morphAttributes[g];
      for (let m = 0, p = _.length; m < p; m++)
        e.remove(_[m]);
    }
    h.removeEventListener("dispose", a), delete i[h.id];
    const f = r.get(h);
    f && (e.remove(f), r.delete(h)), n.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, h) {
    return i[h.id] === !0 || (h.addEventListener("dispose", a), i[h.id] = !0, t.memory.geometries++), h;
  }
  function l(d) {
    const h = d.attributes;
    for (const g in h)
      e.update(h[g], s.ARRAY_BUFFER);
    const f = d.morphAttributes;
    for (const g in f) {
      const _ = f[g];
      for (let m = 0, p = _.length; m < p; m++)
        e.update(_[m], s.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const h = [], f = d.index, g = d.attributes.position;
    let _ = 0;
    if (f !== null) {
      const M = f.array;
      _ = f.version;
      for (let v = 0, y = M.length; v < y; v += 3) {
        const T = M[v + 0], R = M[v + 1], w = M[v + 2];
        h.push(T, R, R, w, w, T);
      }
    } else if (g !== void 0) {
      const M = g.array;
      _ = g.version;
      for (let v = 0, y = M.length / 3 - 1; v < y; v += 3) {
        const T = v + 0, R = v + 1, w = v + 2;
        h.push(T, R, R, w, w, T);
      }
    } else
      return;
    const m = new (Qa(h) ? io : no)(h, 1);
    m.version = _;
    const p = r.get(d);
    p && e.remove(p), r.set(d, m);
  }
  function u(d) {
    const h = r.get(d);
    if (h) {
      const f = d.index;
      f !== null && h.version < f.version && c(d);
    } else
      c(d);
    return r.get(d);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function fu(s, e, t) {
  let n;
  function i(h) {
    n = h;
  }
  let r, a;
  function o(h) {
    r = h.type, a = h.bytesPerElement;
  }
  function l(h, f) {
    s.drawElements(n, f, r, h * a), t.update(f, n, 1);
  }
  function c(h, f, g) {
    g !== 0 && (s.drawElementsInstanced(n, f, r, h * a, g), t.update(f, n, g));
  }
  function u(h, f, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, h, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++)
      m += f[p];
    t.update(m, n, 1);
  }
  function d(h, f, g, _) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let p = 0; p < h.length; p++)
        c(h[p] / a, f[p], _[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, r, h, 0, _, 0, g);
      let p = 0;
      for (let M = 0; M < g; M++)
        p += f[M];
      for (let M = 0; M < _.length; M++)
        t.update(p, n, _[M]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function pu(s) {
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
function mu(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new He();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let h = n.get(o);
    if (h === void 0 || h.count !== d) {
      let K = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", K);
      };
      h !== void 0 && h.texture.dispose();
      const f = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], M = o.morphAttributes.color || [];
      let v = 0;
      f === !0 && (v = 1), g === !0 && (v = 2), _ === !0 && (v = 3);
      let y = o.attributes.position.count * v, T = 1;
      y > e.maxTextureSize && (T = Math.ceil(y / e.maxTextureSize), y = e.maxTextureSize);
      const R = new Float32Array(y * T * 4 * d), w = new Ja(R, y, T, d);
      w.type = 1015, w.needsUpdate = !0;
      const U = v * 4;
      for (let b = 0; b < d; b++) {
        const A = m[b], G = p[b], O = M[b], V = y * T * 4 * b;
        for (let $ = 0; $ < A.count; $++) {
          const B = $ * U;
          f === !0 && (i.fromBufferAttribute(A, $), R[V + B + 0] = i.x, R[V + B + 1] = i.y, R[V + B + 2] = i.z, R[V + B + 3] = 0), g === !0 && (i.fromBufferAttribute(G, $), R[V + B + 4] = i.x, R[V + B + 5] = i.y, R[V + B + 6] = i.z, R[V + B + 7] = 0), _ === !0 && (i.fromBufferAttribute(O, $), R[V + B + 8] = i.x, R[V + B + 9] = i.y, R[V + B + 10] = i.z, R[V + B + 11] = O.itemSize === 4 ? i.w : 1);
        }
      }
      h = {
        count: d,
        texture: w,
        size: new Le(y, T)
      }, n.set(o, h), o.addEventListener("dispose", K);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let f = 0;
      for (let _ = 0; _ < c.length; _++)
        f += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", g), l.getUniforms().setValue(s, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s, "morphTargetsTexture", h.texture, t), l.getUniforms().setValue(s, "morphTargetsTextureSize", h.size);
  }
  return {
    update: r
  };
}
function gu(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, d = e.get(l, u);
    if (i.get(d) !== c && (e.update(d), i.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const h = l.skeleton;
      i.get(h) !== c && (h.update(), i.set(h, c));
    }
    return d;
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
class lo extends pt {
  constructor(e, t, n, i, r, a, o, l, c, u = 1026) {
    if (u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === 1026 && (n = 1014), n === void 0 && u === 1027 && (n = 1020), super(null, i, r, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const co = /* @__PURE__ */ new pt(), oa = /* @__PURE__ */ new lo(1, 1), ho = /* @__PURE__ */ new Ja(), uo = /* @__PURE__ */ new il(), fo = /* @__PURE__ */ new ao(), la = [], ca = [], ha = new Float32Array(16), ua = new Float32Array(9), da = new Float32Array(4);
function ri(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = la[i];
  if (r === void 0 && (r = new Float32Array(i), la[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, s[a].toArray(r, o);
  }
  return r;
}
function ut(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t]) return !1;
  return !0;
}
function dt(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function ms(s, e) {
  let t = ca[e];
  t === void 0 && (t = new Int32Array(e), ca[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function _u(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function bu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    s.uniform2fv(this.addr, e), dt(t, e);
  }
}
function vu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ut(t, e)) return;
    s.uniform3fv(this.addr, e), dt(t, e);
  }
}
function xu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    s.uniform4fv(this.addr, e), dt(t, e);
  }
}
function Mu(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    da.set(n), s.uniformMatrix2fv(this.addr, !1, da), dt(t, n);
  }
}
function Su(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    ua.set(n), s.uniformMatrix3fv(this.addr, !1, ua), dt(t, n);
  }
}
function yu(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    ha.set(n), s.uniformMatrix4fv(this.addr, !1, ha), dt(t, n);
  }
}
function Au(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Eu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    s.uniform2iv(this.addr, e), dt(t, e);
  }
}
function Tu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    s.uniform3iv(this.addr, e), dt(t, e);
  }
}
function wu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    s.uniform4iv(this.addr, e), dt(t, e);
  }
}
function Ru(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Cu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    s.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function Pu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    s.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function Du(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    s.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function Lu(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (oa.compareFunction = 515, r = oa) : r = co, t.setTexture2D(e || r, i);
}
function Iu(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || uo, i);
}
function Uu(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || fo, i);
}
function Fu(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ho, i);
}
function Nu(s) {
  switch (s) {
    case 5126:
      return _u;
    case 35664:
      return bu;
    case 35665:
      return vu;
    case 35666:
      return xu;
    case 35674:
      return Mu;
    case 35675:
      return Su;
    case 35676:
      return yu;
    case 5124:
    case 35670:
      return Au;
    case 35667:
    case 35671:
      return Eu;
    case 35668:
    case 35672:
      return Tu;
    case 35669:
    case 35673:
      return wu;
    case 5125:
      return Ru;
    case 36294:
      return Cu;
    case 36295:
      return Pu;
    case 36296:
      return Du;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Lu;
    case 35679:
    case 36299:
    case 36307:
      return Iu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Uu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fu;
  }
}
function ku(s, e) {
  s.uniform1fv(this.addr, e);
}
function Bu(s, e) {
  const t = ri(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Ou(s, e) {
  const t = ri(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Gu(s, e) {
  const t = ri(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function zu(s, e) {
  const t = ri(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function Hu(s, e) {
  const t = ri(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Vu(s, e) {
  const t = ri(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Wu(s, e) {
  s.uniform1iv(this.addr, e);
}
function ju(s, e) {
  s.uniform2iv(this.addr, e);
}
function Xu(s, e) {
  s.uniform3iv(this.addr, e);
}
function qu(s, e) {
  s.uniform4iv(this.addr, e);
}
function Ku(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Yu(s, e) {
  s.uniform2uiv(this.addr, e);
}
function $u(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Qu(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Zu(s, e, t) {
  const n = this.cache, i = e.length, r = ms(t, i);
  ut(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || co, r[a]);
}
function Ju(s, e, t) {
  const n = this.cache, i = e.length, r = ms(t, i);
  ut(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || uo, r[a]);
}
function ed(s, e, t) {
  const n = this.cache, i = e.length, r = ms(t, i);
  ut(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || fo, r[a]);
}
function td(s, e, t) {
  const n = this.cache, i = e.length, r = ms(t, i);
  ut(n, r) || (s.uniform1iv(this.addr, r), dt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || ho, r[a]);
}
function nd(s) {
  switch (s) {
    case 5126:
      return ku;
    case 35664:
      return Bu;
    case 35665:
      return Ou;
    case 35666:
      return Gu;
    case 35674:
      return zu;
    case 35675:
      return Hu;
    case 35676:
      return Vu;
    case 5124:
    case 35670:
      return Wu;
    case 35667:
    case 35671:
      return ju;
    case 35668:
    case 35672:
      return Xu;
    case 35669:
    case 35673:
      return qu;
    case 5125:
      return Ku;
    case 36294:
      return Yu;
    case 36295:
      return $u;
    case 36296:
      return Qu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zu;
    case 35679:
    case 36299:
    case 36307:
      return Ju;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ed;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return td;
  }
}
class id {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Nu(t.type);
  }
}
class sd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = nd(t.type);
  }
}
class rd {
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
const Ys = /(\w+)(\])?(\[|\.)?/g;
function fa(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function ad(s, e, t) {
  const n = s.name, i = n.length;
  for (Ys.lastIndex = 0; ; ) {
    const r = Ys.exec(n), a = Ys.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      fa(t, c === void 0 ? new id(o, s, e) : new sd(o, s, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new rd(o), fa(t, d)), t = d;
    }
  }
}
class os {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      ad(r, a, this);
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
function pa(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const od = 37297;
let ld = 0;
function cd(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function hd(s) {
  const e = je.getPrimaries(je.workingColorSpace), t = je.getPrimaries(s);
  let n;
  switch (e === t ? n = "" : e === hs && t === cs ? n = "LinearDisplayP3ToLinearSRGB" : e === cs && t === hs && (n = "LinearSRGBToLinearDisplayP3"), s) {
    case ht:
    case fs:
      return [n, "LinearTransferOETF"];
    case gt:
    case _r:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"];
  }
}
function ma(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + cd(s.getShaderSource(e), a);
  } else
    return i;
}
function ud(s, e) {
  const t = hd(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function dd(s, e) {
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
const Zi = /* @__PURE__ */ new P();
function fd() {
  je.getLuminanceCoefficients(Zi);
  const s = Zi.x.toFixed(4), e = Zi.y.toFixed(4), t = Zi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function pd(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(xi).join(`
`);
}
function md(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function gd(s, e) {
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
function xi(s) {
  return s !== "";
}
function ga(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function _a(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const _d = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ar(s) {
  return s.replace(_d, vd);
}
const bd = /* @__PURE__ */ new Map();
function vd(s, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = bd.get(e);
    if (n !== void 0)
      t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return ar(t);
}
const xd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ba(s) {
  return s.replace(xd, Md);
}
function Md(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function va(s) {
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
function Sd(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function yd(s) {
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
function Ad(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Ed(s) {
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
function Td(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function wd(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Sd(t), c = yd(t), u = Ad(t), d = Ed(t), h = Td(t), f = pd(t), g = md(r), _ = i.createProgram();
  let m, p, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(xi).join(`
`), m.length > 0 && (m += `
`), p = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(xi).join(`
`), p.length > 0 && (p += `
`)) : (m = [
    va(t),
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
    t.envMap ? "#define " + u : "",
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
  ].filter(xi).join(`
`), p = [
    va(t),
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
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + d : "",
    h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
    h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
    h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
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
    t.toneMapping !== 0 ? dd("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    ud("linearToOutputTexel", t.outputColorSpace),
    fd(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(xi).join(`
`)), a = ar(a), a = ga(a, t), a = _a(a, t), o = ar(o), o = ga(o, t), o = _a(o, t), a = ba(a), o = ba(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, m = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, p = [
    "#define varying in",
    t.glslVersion === Nr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Nr ? "" : "#define gl_FragColor pc_fragColor",
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
  const v = M + m + a, y = M + p + o, T = pa(i, i.VERTEX_SHADER, v), R = pa(i, i.FRAGMENT_SHADER, y);
  i.attachShader(_, T), i.attachShader(_, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function w(A) {
    if (s.debug.checkShaderErrors) {
      const G = i.getProgramInfoLog(_).trim(), O = i.getShaderInfoLog(T).trim(), V = i.getShaderInfoLog(R).trim();
      let $ = !0, B = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if ($ = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, _, T, R);
        else {
          const ee = ma(i, T, "vertex"), H = ma(i, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + A.name + `
Material Type: ` + A.type + `

Program Info Log: ` + G + `
` + ee + `
` + H
          );
        }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (O === "" || V === "") && (B = !1);
      B && (A.diagnostics = {
        runnable: $,
        programLog: G,
        vertexShader: {
          log: O,
          prefix: m
        },
        fragmentShader: {
          log: V,
          prefix: p
        }
      });
    }
    i.deleteShader(T), i.deleteShader(R), U = new os(i, _), K = gd(i, _);
  }
  let U;
  this.getUniforms = function() {
    return U === void 0 && w(this), U;
  };
  let K;
  this.getAttributes = function() {
    return K === void 0 && w(this), K;
  };
  let b = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return b === !1 && (b = i.getProgramParameter(_, od)), b;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = ld++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = T, this.fragmentShader = R, this;
}
let Rd = 0;
class Cd {
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
    return n === void 0 && (n = new Pd(e), t.set(e, n)), n;
  }
}
class Pd {
  constructor(e) {
    this.id = Rd++, this.code = e, this.usedTimes = 0;
  }
}
function Dd(s, e, t, n, i, r, a) {
  const o = new eo(), l = new Cd(), c = /* @__PURE__ */ new Set(), u = [], d = i.logarithmicDepthBuffer, h = i.reverseDepthBuffer, f = i.vertexTextures;
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
  function m(b) {
    return c.add(b), b === 0 ? "uv" : `uv${b}`;
  }
  function p(b, A, G, O, V) {
    const $ = O.fog, B = V.geometry, ee = b.isMeshStandardMaterial ? O.environment : null, H = (b.isMeshStandardMaterial ? t : e).get(b.envMap || ee), se = H && H.mapping === 306 ? H.image.height : null, ue = _[b.type];
    b.precision !== null && (g = i.getMaxPrecision(b.precision), g !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", g, "instead."));
    const xe = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Ne = xe !== void 0 ? xe.length : 0;
    let Xe = 0;
    B.morphAttributes.position !== void 0 && (Xe = 1), B.morphAttributes.normal !== void 0 && (Xe = 2), B.morphAttributes.color !== void 0 && (Xe = 3);
    let W, Z, ge, de;
    if (ue) {
      const Tt = qt[ue];
      W = Tt.vertexShader, Z = Tt.fragmentShader;
    } else
      W = b.vertexShader, Z = b.fragmentShader, l.update(b), ge = l.getVertexShaderID(b), de = l.getFragmentShaderID(b);
    const Q = s.getRenderTarget(), J = V.isInstancedMesh === !0, oe = V.isBatchedMesh === !0, le = !!b.map, _e = !!b.matcap, C = !!H, st = !!b.aoMap, we = !!b.lightMap, Ce = !!b.bumpMap, Ee = !!b.normalMap, ke = !!b.displacementMap, Re = !!b.emissiveMap, E = !!b.metalnessMap, x = !!b.roughnessMap, F = b.anisotropy > 0, j = b.clearcoat > 0, Y = b.dispersion > 0, X = b.iridescence > 0, ye = b.sheen > 0, ae = b.transmission > 0, me = F && !!b.anisotropyMap, qe = j && !!b.clearcoatMap, te = j && !!b.clearcoatNormalMap, be = j && !!b.clearcoatRoughnessMap, Ue = X && !!b.iridescenceMap, Fe = X && !!b.iridescenceThicknessMap, ve = ye && !!b.sheenColorMap, Ve = ye && !!b.sheenRoughnessMap, Be = !!b.specularMap, tt = !!b.specularColorMap, D = !!b.specularIntensityMap, fe = ae && !!b.transmissionMap, z = ae && !!b.thicknessMap, q = !!b.gradientMap, ce = !!b.alphaMap, pe = b.alphaTest > 0, We = !!b.alphaHash, lt = !!b.extensions;
    let Et = 0;
    b.toneMapped && (Q === null || Q.isXRRenderTarget === !0) && (Et = s.toneMapping);
    const Ye = {
      shaderID: ue,
      shaderType: b.type,
      shaderName: b.name,
      vertexShader: W,
      fragmentShader: Z,
      defines: b.defines,
      customVertexShaderID: ge,
      customFragmentShaderID: de,
      isRawShaderMaterial: b.isRawShaderMaterial === !0,
      glslVersion: b.glslVersion,
      precision: g,
      batching: oe,
      batchingColor: oe && V._colorsTexture !== null,
      instancing: J,
      instancingColor: J && V.instanceColor !== null,
      instancingMorph: J && V.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: Q === null ? s.outputColorSpace : Q.isXRRenderTarget === !0 ? Q.texture.colorSpace : ht,
      alphaToCoverage: !!b.alphaToCoverage,
      map: le,
      matcap: _e,
      envMap: C,
      envMapMode: C && H.mapping,
      envMapCubeUVHeight: se,
      aoMap: st,
      lightMap: we,
      bumpMap: Ce,
      normalMap: Ee,
      displacementMap: f && ke,
      emissiveMap: Re,
      normalMapObjectSpace: Ee && b.normalMapType === 1,
      normalMapTangentSpace: Ee && b.normalMapType === 0,
      metalnessMap: E,
      roughnessMap: x,
      anisotropy: F,
      anisotropyMap: me,
      clearcoat: j,
      clearcoatMap: qe,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: be,
      dispersion: Y,
      iridescence: X,
      iridescenceMap: Ue,
      iridescenceThicknessMap: Fe,
      sheen: ye,
      sheenColorMap: ve,
      sheenRoughnessMap: Ve,
      specularMap: Be,
      specularColorMap: tt,
      specularIntensityMap: D,
      transmission: ae,
      transmissionMap: fe,
      thicknessMap: z,
      gradientMap: q,
      opaque: b.transparent === !1 && b.blending === 1 && b.alphaToCoverage === !1,
      alphaMap: ce,
      alphaTest: pe,
      alphaHash: We,
      combine: b.combine,
      //
      mapUv: le && m(b.map.channel),
      aoMapUv: st && m(b.aoMap.channel),
      lightMapUv: we && m(b.lightMap.channel),
      bumpMapUv: Ce && m(b.bumpMap.channel),
      normalMapUv: Ee && m(b.normalMap.channel),
      displacementMapUv: ke && m(b.displacementMap.channel),
      emissiveMapUv: Re && m(b.emissiveMap.channel),
      metalnessMapUv: E && m(b.metalnessMap.channel),
      roughnessMapUv: x && m(b.roughnessMap.channel),
      anisotropyMapUv: me && m(b.anisotropyMap.channel),
      clearcoatMapUv: qe && m(b.clearcoatMap.channel),
      clearcoatNormalMapUv: te && m(b.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: be && m(b.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ue && m(b.iridescenceMap.channel),
      iridescenceThicknessMapUv: Fe && m(b.iridescenceThicknessMap.channel),
      sheenColorMapUv: ve && m(b.sheenColorMap.channel),
      sheenRoughnessMapUv: Ve && m(b.sheenRoughnessMap.channel),
      specularMapUv: Be && m(b.specularMap.channel),
      specularColorMapUv: tt && m(b.specularColorMap.channel),
      specularIntensityMapUv: D && m(b.specularIntensityMap.channel),
      transmissionMapUv: fe && m(b.transmissionMap.channel),
      thicknessMapUv: z && m(b.thicknessMap.channel),
      alphaMapUv: ce && m(b.alphaMap.channel),
      //
      vertexTangents: !!B.attributes.tangent && (Ee || F),
      vertexColors: b.vertexColors,
      vertexAlphas: b.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4,
      pointsUvs: V.isPoints === !0 && !!B.attributes.uv && (le || ce),
      fog: !!$,
      useFog: b.fog === !0,
      fogExp2: !!$ && $.isFogExp2,
      flatShading: b.flatShading === !0,
      sizeAttenuation: b.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: h,
      skinning: V.isSkinnedMesh === !0,
      morphTargets: B.morphAttributes.position !== void 0,
      morphNormals: B.morphAttributes.normal !== void 0,
      morphColors: B.morphAttributes.color !== void 0,
      morphTargetsCount: Ne,
      morphTextureStride: Xe,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numLightProbes: A.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: b.dithering,
      shadowMapEnabled: s.shadowMap.enabled && G.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: Et,
      decodeVideoTexture: le && b.map.isVideoTexture === !0 && je.getTransfer(b.map.colorSpace) === nt,
      premultipliedAlpha: b.premultipliedAlpha,
      doubleSided: b.side === 2,
      flipSided: b.side === 1,
      useDepthPacking: b.depthPacking >= 0,
      depthPacking: b.depthPacking || 0,
      index0AttributeName: b.index0AttributeName,
      extensionClipCullDistance: lt && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (lt && b.extensions.multiDraw === !0 || oe) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: b.customProgramCacheKey()
    };
    return Ye.vertexUv1s = c.has(1), Ye.vertexUv2s = c.has(2), Ye.vertexUv3s = c.has(3), c.clear(), Ye;
  }
  function M(b) {
    const A = [];
    if (b.shaderID ? A.push(b.shaderID) : (A.push(b.customVertexShaderID), A.push(b.customFragmentShaderID)), b.defines !== void 0)
      for (const G in b.defines)
        A.push(G), A.push(b.defines[G]);
    return b.isRawShaderMaterial === !1 && (v(A, b), y(A, b), A.push(s.outputColorSpace)), A.push(b.customProgramCacheKey), A.join();
  }
  function v(b, A) {
    b.push(A.precision), b.push(A.outputColorSpace), b.push(A.envMapMode), b.push(A.envMapCubeUVHeight), b.push(A.mapUv), b.push(A.alphaMapUv), b.push(A.lightMapUv), b.push(A.aoMapUv), b.push(A.bumpMapUv), b.push(A.normalMapUv), b.push(A.displacementMapUv), b.push(A.emissiveMapUv), b.push(A.metalnessMapUv), b.push(A.roughnessMapUv), b.push(A.anisotropyMapUv), b.push(A.clearcoatMapUv), b.push(A.clearcoatNormalMapUv), b.push(A.clearcoatRoughnessMapUv), b.push(A.iridescenceMapUv), b.push(A.iridescenceThicknessMapUv), b.push(A.sheenColorMapUv), b.push(A.sheenRoughnessMapUv), b.push(A.specularMapUv), b.push(A.specularColorMapUv), b.push(A.specularIntensityMapUv), b.push(A.transmissionMapUv), b.push(A.thicknessMapUv), b.push(A.combine), b.push(A.fogExp2), b.push(A.sizeAttenuation), b.push(A.morphTargetsCount), b.push(A.morphAttributeCount), b.push(A.numDirLights), b.push(A.numPointLights), b.push(A.numSpotLights), b.push(A.numSpotLightMaps), b.push(A.numHemiLights), b.push(A.numRectAreaLights), b.push(A.numDirLightShadows), b.push(A.numPointLightShadows), b.push(A.numSpotLightShadows), b.push(A.numSpotLightShadowsWithMaps), b.push(A.numLightProbes), b.push(A.shadowMapType), b.push(A.toneMapping), b.push(A.numClippingPlanes), b.push(A.numClipIntersection), b.push(A.depthPacking);
  }
  function y(b, A) {
    o.disableAll(), A.supportsVertexTextures && o.enable(0), A.instancing && o.enable(1), A.instancingColor && o.enable(2), A.instancingMorph && o.enable(3), A.matcap && o.enable(4), A.envMap && o.enable(5), A.normalMapObjectSpace && o.enable(6), A.normalMapTangentSpace && o.enable(7), A.clearcoat && o.enable(8), A.iridescence && o.enable(9), A.alphaTest && o.enable(10), A.vertexColors && o.enable(11), A.vertexAlphas && o.enable(12), A.vertexUv1s && o.enable(13), A.vertexUv2s && o.enable(14), A.vertexUv3s && o.enable(15), A.vertexTangents && o.enable(16), A.anisotropy && o.enable(17), A.alphaHash && o.enable(18), A.batching && o.enable(19), A.dispersion && o.enable(20), A.batchingColor && o.enable(21), b.push(o.mask), o.disableAll(), A.fog && o.enable(0), A.useFog && o.enable(1), A.flatShading && o.enable(2), A.logarithmicDepthBuffer && o.enable(3), A.reverseDepthBuffer && o.enable(4), A.skinning && o.enable(5), A.morphTargets && o.enable(6), A.morphNormals && o.enable(7), A.morphColors && o.enable(8), A.premultipliedAlpha && o.enable(9), A.shadowMapEnabled && o.enable(10), A.doubleSided && o.enable(11), A.flipSided && o.enable(12), A.useDepthPacking && o.enable(13), A.dithering && o.enable(14), A.transmission && o.enable(15), A.sheen && o.enable(16), A.opaque && o.enable(17), A.pointsUvs && o.enable(18), A.decodeVideoTexture && o.enable(19), A.alphaToCoverage && o.enable(20), b.push(o.mask);
  }
  function T(b) {
    const A = _[b.type];
    let G;
    if (A) {
      const O = qt[A];
      G = Ti.clone(O.uniforms);
    } else
      G = b.uniforms;
    return G;
  }
  function R(b, A) {
    let G;
    for (let O = 0, V = u.length; O < V; O++) {
      const $ = u[O];
      if ($.cacheKey === A) {
        G = $, ++G.usedTimes;
        break;
      }
    }
    return G === void 0 && (G = new wd(s, A, b, r), u.push(G)), G;
  }
  function w(b) {
    if (--b.usedTimes === 0) {
      const A = u.indexOf(b);
      u[A] = u[u.length - 1], u.pop(), b.destroy();
    }
  }
  function U(b) {
    l.remove(b);
  }
  function K() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: M,
    getUniforms: T,
    acquireProgram: R,
    releaseProgram: w,
    releaseShaderCache: U,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: K
  };
}
function Ld() {
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
function Id(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function xa(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Ma() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(d, h, f, g, _, m) {
    let p = s[e];
    return p === void 0 ? (p = {
      id: d.id,
      object: d,
      geometry: h,
      material: f,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: _,
      group: m
    }, s[e] = p) : (p.id = d.id, p.object = d, p.geometry = h, p.material = f, p.groupOrder = g, p.renderOrder = d.renderOrder, p.z = _, p.group = m), e++, p;
  }
  function o(d, h, f, g, _, m) {
    const p = a(d, h, f, g, _, m);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : t.push(p);
  }
  function l(d, h, f, g, _, m) {
    const p = a(d, h, f, g, _, m);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function c(d, h) {
    t.length > 1 && t.sort(d || Id), n.length > 1 && n.sort(h || xa), i.length > 1 && i.sort(h || xa);
  }
  function u() {
    for (let d = e, h = s.length; d < h; d++) {
      const f = s[d];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function Ud() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new Ma(), s.set(n, [a])) : i >= r.length ? (a = new Ma(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Fd() {
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
function Nd() {
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
            shadowMapSize: new Le()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let kd = 0;
function Bd(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function Od(s) {
  const e = new Fd(), t = Nd(), n = {
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
  const i = new P(), r = new Pe(), a = new Pe();
  function o(c) {
    let u = 0, d = 0, h = 0;
    for (let K = 0; K < 9; K++) n.probe[K].set(0, 0, 0);
    let f = 0, g = 0, _ = 0, m = 0, p = 0, M = 0, v = 0, y = 0, T = 0, R = 0, w = 0;
    c.sort(Bd);
    for (let K = 0, b = c.length; K < b; K++) {
      const A = c[K], G = A.color, O = A.intensity, V = A.distance, $ = A.shadow && A.shadow.map ? A.shadow.map.texture : null;
      if (A.isAmbientLight)
        u += G.r * O, d += G.g * O, h += G.b * O;
      else if (A.isLightProbe) {
        for (let B = 0; B < 9; B++)
          n.probe[B].addScaledVector(A.sh.coefficients[B], O);
        w++;
      } else if (A.isDirectionalLight) {
        const B = e.get(A);
        if (B.color.copy(A.color).multiplyScalar(A.intensity), A.castShadow) {
          const ee = A.shadow, H = t.get(A);
          H.shadowIntensity = ee.intensity, H.shadowBias = ee.bias, H.shadowNormalBias = ee.normalBias, H.shadowRadius = ee.radius, H.shadowMapSize = ee.mapSize, n.directionalShadow[f] = H, n.directionalShadowMap[f] = $, n.directionalShadowMatrix[f] = A.shadow.matrix, M++;
        }
        n.directional[f] = B, f++;
      } else if (A.isSpotLight) {
        const B = e.get(A);
        B.position.setFromMatrixPosition(A.matrixWorld), B.color.copy(G).multiplyScalar(O), B.distance = V, B.coneCos = Math.cos(A.angle), B.penumbraCos = Math.cos(A.angle * (1 - A.penumbra)), B.decay = A.decay, n.spot[_] = B;
        const ee = A.shadow;
        if (A.map && (n.spotLightMap[T] = A.map, T++, ee.updateMatrices(A), A.castShadow && R++), n.spotLightMatrix[_] = ee.matrix, A.castShadow) {
          const H = t.get(A);
          H.shadowIntensity = ee.intensity, H.shadowBias = ee.bias, H.shadowNormalBias = ee.normalBias, H.shadowRadius = ee.radius, H.shadowMapSize = ee.mapSize, n.spotShadow[_] = H, n.spotShadowMap[_] = $, y++;
        }
        _++;
      } else if (A.isRectAreaLight) {
        const B = e.get(A);
        B.color.copy(G).multiplyScalar(O), B.halfWidth.set(A.width * 0.5, 0, 0), B.halfHeight.set(0, A.height * 0.5, 0), n.rectArea[m] = B, m++;
      } else if (A.isPointLight) {
        const B = e.get(A);
        if (B.color.copy(A.color).multiplyScalar(A.intensity), B.distance = A.distance, B.decay = A.decay, A.castShadow) {
          const ee = A.shadow, H = t.get(A);
          H.shadowIntensity = ee.intensity, H.shadowBias = ee.bias, H.shadowNormalBias = ee.normalBias, H.shadowRadius = ee.radius, H.shadowMapSize = ee.mapSize, H.shadowCameraNear = ee.camera.near, H.shadowCameraFar = ee.camera.far, n.pointShadow[g] = H, n.pointShadowMap[g] = $, n.pointShadowMatrix[g] = A.shadow.matrix, v++;
        }
        n.point[g] = B, g++;
      } else if (A.isHemisphereLight) {
        const B = e.get(A);
        B.skyColor.copy(A.color).multiplyScalar(O), B.groundColor.copy(A.groundColor).multiplyScalar(O), n.hemi[p] = B, p++;
      }
    }
    m > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ie.LTC_FLOAT_1, n.rectAreaLTC2 = ie.LTC_FLOAT_2) : (n.rectAreaLTC1 = ie.LTC_HALF_1, n.rectAreaLTC2 = ie.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = h;
    const U = n.hash;
    (U.directionalLength !== f || U.pointLength !== g || U.spotLength !== _ || U.rectAreaLength !== m || U.hemiLength !== p || U.numDirectionalShadows !== M || U.numPointShadows !== v || U.numSpotShadows !== y || U.numSpotMaps !== T || U.numLightProbes !== w) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = p, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = v, n.pointShadowMap.length = v, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = v, n.spotLightMatrix.length = y + T - R, n.spotLightMap.length = T, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = w, U.directionalLength = f, U.pointLength = g, U.spotLength = _, U.rectAreaLength = m, U.hemiLength = p, U.numDirectionalShadows = M, U.numPointShadows = v, U.numSpotShadows = y, U.numSpotMaps = T, U.numLightProbes = w, n.version = kd++);
  }
  function l(c, u) {
    let d = 0, h = 0, f = 0, g = 0, _ = 0;
    const m = u.matrixWorldInverse;
    for (let p = 0, M = c.length; p < M; p++) {
      const v = c[p];
      if (v.isDirectionalLight) {
        const y = n.directional[d];
        y.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(m), d++;
      } else if (v.isSpotLight) {
        const y = n.spot[f];
        y.position.setFromMatrixPosition(v.matrixWorld), y.position.applyMatrix4(m), y.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(m), f++;
      } else if (v.isRectAreaLight) {
        const y = n.rectArea[g];
        y.position.setFromMatrixPosition(v.matrixWorld), y.position.applyMatrix4(m), a.identity(), r.copy(v.matrixWorld), r.premultiply(m), a.extractRotation(r), y.halfWidth.set(v.width * 0.5, 0, 0), y.halfHeight.set(0, v.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (v.isPointLight) {
        const y = n.point[h];
        y.position.setFromMatrixPosition(v.matrixWorld), y.position.applyMatrix4(m), h++;
      } else if (v.isHemisphereLight) {
        const y = n.hemi[_];
        y.direction.setFromMatrixPosition(v.matrixWorld), y.direction.transformDirection(m), _++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function Sa(s) {
  const e = new Od(s), t = [], n = [];
  function i(u) {
    c.camera = u, t.length = 0, n.length = 0;
  }
  function r(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
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
function Gd(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new Sa(s), e.set(i, [o])) : r >= a.length ? (o = new Sa(s), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class po extends Kt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class zd extends Kt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Hd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Vd = `uniform sampler2D shadow_pass;
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
function Wd(s, e, t) {
  let n = new vr();
  const i = new Le(), r = new Le(), a = new He(), o = new po({ depthPacking: 3201 }), l = new zd(), c = {}, u = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, h = new Mt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Le() },
      radius: { value: 4 }
    },
    vertexShader: Hd,
    fragmentShader: Vd
  }), f = h.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Xt();
  g.setAttribute(
    "position",
    new At(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new xt(g, h), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let p = this.type;
  this.render = function(R, w, U) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || R.length === 0) return;
    const K = s.getRenderTarget(), b = s.getActiveCubeFace(), A = s.getActiveMipmapLevel(), G = s.state;
    G.setBlending(0), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(!0), G.setScissorTest(!1);
    const O = p !== 3 && this.type === 3, V = p === 3 && this.type !== 3;
    for (let $ = 0, B = R.length; $ < B; $++) {
      const ee = R[$], H = ee.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", ee, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      i.copy(H.mapSize);
      const se = H.getFrameExtents();
      if (i.multiply(se), r.copy(H.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / se.x), i.x = r.x * se.x, H.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / se.y), i.y = r.y * se.y, H.mapSize.y = r.y)), H.map === null || O === !0 || V === !0) {
        const xe = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        H.map !== null && H.map.dispose(), H.map = new Nt(i.x, i.y, xe), H.map.texture.name = ee.name + ".shadowMap", H.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(H.map), s.clear();
      const ue = H.getViewportCount();
      for (let xe = 0; xe < ue; xe++) {
        const Ne = H.getViewport(xe);
        a.set(
          r.x * Ne.x,
          r.y * Ne.y,
          r.x * Ne.z,
          r.y * Ne.w
        ), G.viewport(a), H.updateMatrices(ee, xe), n = H.getFrustum(), y(w, U, H.camera, ee, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === 3 && M(H, U), H.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, s.setRenderTarget(K, b, A);
  };
  function M(R, w) {
    const U = e.update(_);
    h.defines.VSM_SAMPLES !== R.blurSamples && (h.defines.VSM_SAMPLES = R.blurSamples, f.defines.VSM_SAMPLES = R.blurSamples, h.needsUpdate = !0, f.needsUpdate = !0), R.mapPass === null && (R.mapPass = new Nt(i.x, i.y)), h.uniforms.shadow_pass.value = R.map.texture, h.uniforms.resolution.value = R.mapSize, h.uniforms.radius.value = R.radius, s.setRenderTarget(R.mapPass), s.clear(), s.renderBufferDirect(w, null, U, h, _, null), f.uniforms.shadow_pass.value = R.mapPass.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, s.setRenderTarget(R.map), s.clear(), s.renderBufferDirect(w, null, U, f, _, null);
  }
  function v(R, w, U, K) {
    let b = null;
    const A = U.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (A !== void 0)
      b = A;
    else if (b = U.isPointLight === !0 ? l : o, s.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const G = b.uuid, O = w.uuid;
      let V = c[G];
      V === void 0 && (V = {}, c[G] = V);
      let $ = V[O];
      $ === void 0 && ($ = b.clone(), V[O] = $, w.addEventListener("dispose", T)), b = $;
    }
    if (b.visible = w.visible, b.wireframe = w.wireframe, K === 3 ? b.side = w.shadowSide !== null ? w.shadowSide : w.side : b.side = w.shadowSide !== null ? w.shadowSide : d[w.side], b.alphaMap = w.alphaMap, b.alphaTest = w.alphaTest, b.map = w.map, b.clipShadows = w.clipShadows, b.clippingPlanes = w.clippingPlanes, b.clipIntersection = w.clipIntersection, b.displacementMap = w.displacementMap, b.displacementScale = w.displacementScale, b.displacementBias = w.displacementBias, b.wireframeLinewidth = w.wireframeLinewidth, b.linewidth = w.linewidth, U.isPointLight === !0 && b.isMeshDistanceMaterial === !0) {
      const G = s.properties.get(b);
      G.light = U;
    }
    return b;
  }
  function y(R, w, U, K, b) {
    if (R.visible === !1) return;
    if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && b === 3) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, R.matrixWorld);
      const O = e.update(R), V = R.material;
      if (Array.isArray(V)) {
        const $ = O.groups;
        for (let B = 0, ee = $.length; B < ee; B++) {
          const H = $[B], se = V[H.materialIndex];
          if (se && se.visible) {
            const ue = v(R, se, K, b);
            R.onBeforeShadow(s, R, w, U, O, ue, H), s.renderBufferDirect(U, null, O, ue, R, H), R.onAfterShadow(s, R, w, U, O, ue, H);
          }
        }
      } else if (V.visible) {
        const $ = v(R, V, K, b);
        R.onBeforeShadow(s, R, w, U, O, $, null), s.renderBufferDirect(U, null, O, $, R, null), R.onAfterShadow(s, R, w, U, O, $, null);
      }
    }
    const G = R.children;
    for (let O = 0, V = G.length; O < V; O++)
      y(G[O], w, U, K, b);
  }
  function T(R) {
    R.target.removeEventListener("dispose", T);
    for (const U in c) {
      const K = c[U], b = R.target.uuid;
      b in K && (K[b].dispose(), delete K[b]);
    }
  }
}
const jd = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function Xd(s) {
  function e() {
    let D = !1;
    const fe = new He();
    let z = null;
    const q = new He(0, 0, 0, 0);
    return {
      setMask: function(ce) {
        z !== ce && !D && (s.colorMask(ce, ce, ce, ce), z = ce);
      },
      setLocked: function(ce) {
        D = ce;
      },
      setClear: function(ce, pe, We, lt, Et) {
        Et === !0 && (ce *= lt, pe *= lt, We *= lt), fe.set(ce, pe, We, lt), q.equals(fe) === !1 && (s.clearColor(ce, pe, We, lt), q.copy(fe));
      },
      reset: function() {
        D = !1, z = null, q.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let D = !1, fe = !1, z = null, q = null, ce = null;
    return {
      setReversed: function(pe) {
        fe = pe;
      },
      setTest: function(pe) {
        pe ? ge(s.DEPTH_TEST) : de(s.DEPTH_TEST);
      },
      setMask: function(pe) {
        z !== pe && !D && (s.depthMask(pe), z = pe);
      },
      setFunc: function(pe) {
        if (fe && (pe = jd[pe]), q !== pe) {
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
          q = pe;
        }
      },
      setLocked: function(pe) {
        D = pe;
      },
      setClear: function(pe) {
        ce !== pe && (s.clearDepth(pe), ce = pe);
      },
      reset: function() {
        D = !1, z = null, q = null, ce = null;
      }
    };
  }
  function n() {
    let D = !1, fe = null, z = null, q = null, ce = null, pe = null, We = null, lt = null, Et = null;
    return {
      setTest: function(Ye) {
        D || (Ye ? ge(s.STENCIL_TEST) : de(s.STENCIL_TEST));
      },
      setMask: function(Ye) {
        fe !== Ye && !D && (s.stencilMask(Ye), fe = Ye);
      },
      setFunc: function(Ye, Tt, Jt) {
        (z !== Ye || q !== Tt || ce !== Jt) && (s.stencilFunc(Ye, Tt, Jt), z = Ye, q = Tt, ce = Jt);
      },
      setOp: function(Ye, Tt, Jt) {
        (pe !== Ye || We !== Tt || lt !== Jt) && (s.stencilOp(Ye, Tt, Jt), pe = Ye, We = Tt, lt = Jt);
      },
      setLocked: function(Ye) {
        D = Ye;
      },
      setClear: function(Ye) {
        Et !== Ye && (s.clearStencil(Ye), Et = Ye);
      },
      reset: function() {
        D = !1, fe = null, z = null, q = null, ce = null, pe = null, We = null, lt = null, Et = null;
      }
    };
  }
  const i = new e(), r = new t(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), h = [], f = null, g = !1, _ = null, m = null, p = null, M = null, v = null, y = null, T = null, R = new re(0, 0, 0), w = 0, U = !1, K = null, b = null, A = null, G = null, O = null;
  const V = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = !1, B = 0;
  const ee = s.getParameter(s.VERSION);
  ee.indexOf("WebGL") !== -1 ? (B = parseFloat(/^WebGL (\d)/.exec(ee)[1]), $ = B >= 1) : ee.indexOf("OpenGL ES") !== -1 && (B = parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]), $ = B >= 2);
  let H = null, se = {};
  const ue = s.getParameter(s.SCISSOR_BOX), xe = s.getParameter(s.VIEWPORT), Ne = new He().fromArray(ue), Xe = new He().fromArray(xe);
  function W(D, fe, z, q) {
    const ce = new Uint8Array(4), pe = s.createTexture();
    s.bindTexture(D, pe), s.texParameteri(D, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(D, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let We = 0; We < z; We++)
      D === s.TEXTURE_3D || D === s.TEXTURE_2D_ARRAY ? s.texImage3D(fe, 0, s.RGBA, 1, 1, q, 0, s.RGBA, s.UNSIGNED_BYTE, ce) : s.texImage2D(fe + We, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, ce);
    return pe;
  }
  const Z = {};
  Z[s.TEXTURE_2D] = W(s.TEXTURE_2D, s.TEXTURE_2D, 1), Z[s.TEXTURE_CUBE_MAP] = W(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Z[s.TEXTURE_2D_ARRAY] = W(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), Z[s.TEXTURE_3D] = W(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), r.setClear(1), a.setClear(0), ge(s.DEPTH_TEST), r.setFunc(3), we(!1), Ce(1), ge(s.CULL_FACE), C(0);
  function ge(D) {
    c[D] !== !0 && (s.enable(D), c[D] = !0);
  }
  function de(D) {
    c[D] !== !1 && (s.disable(D), c[D] = !1);
  }
  function Q(D, fe) {
    return u[D] !== fe ? (s.bindFramebuffer(D, fe), u[D] = fe, D === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = fe), D === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = fe), !0) : !1;
  }
  function J(D, fe) {
    let z = h, q = !1;
    if (D) {
      z = d.get(fe), z === void 0 && (z = [], d.set(fe, z));
      const ce = D.textures;
      if (z.length !== ce.length || z[0] !== s.COLOR_ATTACHMENT0) {
        for (let pe = 0, We = ce.length; pe < We; pe++)
          z[pe] = s.COLOR_ATTACHMENT0 + pe;
        z.length = ce.length, q = !0;
      }
    } else
      z[0] !== s.BACK && (z[0] = s.BACK, q = !0);
    q && s.drawBuffers(z);
  }
  function oe(D) {
    return f !== D ? (s.useProgram(D), f = D, !0) : !1;
  }
  const le = {
    100: s.FUNC_ADD,
    101: s.FUNC_SUBTRACT,
    102: s.FUNC_REVERSE_SUBTRACT
  };
  le[103] = s.MIN, le[104] = s.MAX;
  const _e = {
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
  function C(D, fe, z, q, ce, pe, We, lt, Et, Ye) {
    if (D === 0) {
      g === !0 && (de(s.BLEND), g = !1);
      return;
    }
    if (g === !1 && (ge(s.BLEND), g = !0), D !== 5) {
      if (D !== _ || Ye !== U) {
        if ((m !== 100 || v !== 100) && (s.blendEquation(s.FUNC_ADD), m = 100, v = 100), Ye)
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
        p = null, M = null, y = null, T = null, R.set(0, 0, 0), w = 0, _ = D, U = Ye;
      }
      return;
    }
    ce = ce || fe, pe = pe || z, We = We || q, (fe !== m || ce !== v) && (s.blendEquationSeparate(le[fe], le[ce]), m = fe, v = ce), (z !== p || q !== M || pe !== y || We !== T) && (s.blendFuncSeparate(_e[z], _e[q], _e[pe], _e[We]), p = z, M = q, y = pe, T = We), (lt.equals(R) === !1 || Et !== w) && (s.blendColor(lt.r, lt.g, lt.b, Et), R.copy(lt), w = Et), _ = D, U = !1;
  }
  function st(D, fe) {
    D.side === 2 ? de(s.CULL_FACE) : ge(s.CULL_FACE);
    let z = D.side === 1;
    fe && (z = !z), we(z), D.blending === 1 && D.transparent === !1 ? C(0) : C(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), r.setFunc(D.depthFunc), r.setTest(D.depthTest), r.setMask(D.depthWrite), i.setMask(D.colorWrite);
    const q = D.stencilWrite;
    a.setTest(q), q && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), ke(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? ge(s.SAMPLE_ALPHA_TO_COVERAGE) : de(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function we(D) {
    K !== D && (D ? s.frontFace(s.CW) : s.frontFace(s.CCW), K = D);
  }
  function Ce(D) {
    D !== 0 ? (ge(s.CULL_FACE), D !== b && (D === 1 ? s.cullFace(s.BACK) : D === 2 ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : de(s.CULL_FACE), b = D;
  }
  function Ee(D) {
    D !== A && ($ && s.lineWidth(D), A = D);
  }
  function ke(D, fe, z) {
    D ? (ge(s.POLYGON_OFFSET_FILL), (G !== fe || O !== z) && (s.polygonOffset(fe, z), G = fe, O = z)) : de(s.POLYGON_OFFSET_FILL);
  }
  function Re(D) {
    D ? ge(s.SCISSOR_TEST) : de(s.SCISSOR_TEST);
  }
  function E(D) {
    D === void 0 && (D = s.TEXTURE0 + V - 1), H !== D && (s.activeTexture(D), H = D);
  }
  function x(D, fe, z) {
    z === void 0 && (H === null ? z = s.TEXTURE0 + V - 1 : z = H);
    let q = se[z];
    q === void 0 && (q = { type: void 0, texture: void 0 }, se[z] = q), (q.type !== D || q.texture !== fe) && (H !== z && (s.activeTexture(z), H = z), s.bindTexture(D, fe || Z[D]), q.type = D, q.texture = fe);
  }
  function F() {
    const D = se[H];
    D !== void 0 && D.type !== void 0 && (s.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function j() {
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
  function ye() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ae() {
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
  function qe() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function te() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function be() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ue() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Fe(D) {
    Ne.equals(D) === !1 && (s.scissor(D.x, D.y, D.z, D.w), Ne.copy(D));
  }
  function ve(D) {
    Xe.equals(D) === !1 && (s.viewport(D.x, D.y, D.z, D.w), Xe.copy(D));
  }
  function Ve(D, fe) {
    let z = l.get(fe);
    z === void 0 && (z = /* @__PURE__ */ new WeakMap(), l.set(fe, z));
    let q = z.get(D);
    q === void 0 && (q = s.getUniformBlockIndex(fe, D.name), z.set(D, q));
  }
  function Be(D, fe) {
    const q = l.get(fe).get(D);
    o.get(fe) !== q && (s.uniformBlockBinding(fe, q, D.__bindingPointIndex), o.set(fe, q));
  }
  function tt() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), c = {}, H = null, se = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), h = [], f = null, g = !1, _ = null, m = null, p = null, M = null, v = null, y = null, T = null, R = new re(0, 0, 0), w = 0, U = !1, K = null, b = null, A = null, G = null, O = null, Ne.set(0, 0, s.canvas.width, s.canvas.height), Xe.set(0, 0, s.canvas.width, s.canvas.height), i.reset(), r.reset(), a.reset();
  }
  return {
    buffers: {
      color: i,
      depth: r,
      stencil: a
    },
    enable: ge,
    disable: de,
    bindFramebuffer: Q,
    drawBuffers: J,
    useProgram: oe,
    setBlending: C,
    setMaterial: st,
    setFlipSided: we,
    setCullFace: Ce,
    setLineWidth: Ee,
    setPolygonOffset: ke,
    setScissorTest: Re,
    activeTexture: E,
    bindTexture: x,
    unbindTexture: F,
    compressedTexImage2D: j,
    compressedTexImage3D: Y,
    texImage2D: be,
    texImage3D: Ue,
    updateUBOMapping: Ve,
    uniformBlockBinding: Be,
    texStorage2D: qe,
    texStorage3D: te,
    texSubImage2D: X,
    texSubImage3D: ye,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: me,
    scissor: Fe,
    viewport: ve,
    reset: tt
  };
}
function ya(s, e, t, n) {
  const i = qd(n);
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
function qd(s) {
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
function Kd(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Le(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const h = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, x) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, x)
    ) : Ei("canvas");
  }
  function _(E, x, F) {
    let j = 1;
    const Y = Re(E);
    if ((Y.width > F || Y.height > F) && (j = F / Math.max(Y.width, Y.height)), j < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const X = Math.floor(j * Y.width), ye = Math.floor(j * Y.height);
        d === void 0 && (d = g(X, ye));
        const ae = x ? g(X, ye) : d;
        return ae.width = X, ae.height = ye, ae.getContext("2d").drawImage(E, 0, 0, X, ye), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + X + "x" + ye + ")."), ae;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps && E.minFilter !== 1003 && E.minFilter !== 1006;
  }
  function p(E) {
    s.generateMipmap(E);
  }
  function M(E, x, F, j, Y = !1) {
    if (E !== null) {
      if (s[E] !== void 0) return s[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let X = x;
    if (x === s.RED && (F === s.FLOAT && (X = s.R32F), F === s.HALF_FLOAT && (X = s.R16F), F === s.UNSIGNED_BYTE && (X = s.R8)), x === s.RED_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.R8UI), F === s.UNSIGNED_SHORT && (X = s.R16UI), F === s.UNSIGNED_INT && (X = s.R32UI), F === s.BYTE && (X = s.R8I), F === s.SHORT && (X = s.R16I), F === s.INT && (X = s.R32I)), x === s.RG && (F === s.FLOAT && (X = s.RG32F), F === s.HALF_FLOAT && (X = s.RG16F), F === s.UNSIGNED_BYTE && (X = s.RG8)), x === s.RG_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RG8UI), F === s.UNSIGNED_SHORT && (X = s.RG16UI), F === s.UNSIGNED_INT && (X = s.RG32UI), F === s.BYTE && (X = s.RG8I), F === s.SHORT && (X = s.RG16I), F === s.INT && (X = s.RG32I)), x === s.RGB_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RGB8UI), F === s.UNSIGNED_SHORT && (X = s.RGB16UI), F === s.UNSIGNED_INT && (X = s.RGB32UI), F === s.BYTE && (X = s.RGB8I), F === s.SHORT && (X = s.RGB16I), F === s.INT && (X = s.RGB32I)), x === s.RGBA_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RGBA8UI), F === s.UNSIGNED_SHORT && (X = s.RGBA16UI), F === s.UNSIGNED_INT && (X = s.RGBA32UI), F === s.BYTE && (X = s.RGBA8I), F === s.SHORT && (X = s.RGBA16I), F === s.INT && (X = s.RGBA32I)), x === s.RGB && F === s.UNSIGNED_INT_5_9_9_9_REV && (X = s.RGB9_E5), x === s.RGBA) {
      const ye = Y ? ls : je.getTransfer(j);
      F === s.FLOAT && (X = s.RGBA32F), F === s.HALF_FLOAT && (X = s.RGBA16F), F === s.UNSIGNED_BYTE && (X = ye === nt ? s.SRGB8_ALPHA8 : s.RGBA8), F === s.UNSIGNED_SHORT_4_4_4_4 && (X = s.RGBA4), F === s.UNSIGNED_SHORT_5_5_5_1 && (X = s.RGB5_A1);
    }
    return (X === s.R16F || X === s.R32F || X === s.RG16F || X === s.RG32F || X === s.RGBA16F || X === s.RGBA32F) && e.get("EXT_color_buffer_float"), X;
  }
  function v(E, x) {
    let F;
    return E ? x === null || x === 1014 || x === 1020 ? F = s.DEPTH24_STENCIL8 : x === 1015 ? F = s.DEPTH32F_STENCIL8 : x === 1012 && (F = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === 1014 || x === 1020 ? F = s.DEPTH_COMPONENT24 : x === 1015 ? F = s.DEPTH_COMPONENT32F : x === 1012 && (F = s.DEPTH_COMPONENT16), F;
  }
  function y(E, x) {
    return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== 1003 && E.minFilter !== 1006 ? Math.log2(Math.max(x.width, x.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? x.mipmaps.length : 1;
  }
  function T(E) {
    const x = E.target;
    x.removeEventListener("dispose", T), w(x), x.isVideoTexture && u.delete(x);
  }
  function R(E) {
    const x = E.target;
    x.removeEventListener("dispose", R), K(x);
  }
  function w(E) {
    const x = n.get(E);
    if (x.__webglInit === void 0) return;
    const F = E.source, j = h.get(F);
    if (j) {
      const Y = j[x.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && U(E), Object.keys(j).length === 0 && h.delete(F);
    }
    n.remove(E);
  }
  function U(E) {
    const x = n.get(E);
    s.deleteTexture(x.__webglTexture);
    const F = E.source, j = h.get(F);
    delete j[x.__cacheKey], a.memory.textures--;
  }
  function K(E) {
    const x = n.get(E);
    if (E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let j = 0; j < 6; j++) {
        if (Array.isArray(x.__webglFramebuffer[j]))
          for (let Y = 0; Y < x.__webglFramebuffer[j].length; Y++) s.deleteFramebuffer(x.__webglFramebuffer[j][Y]);
        else
          s.deleteFramebuffer(x.__webglFramebuffer[j]);
        x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer[j]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let j = 0; j < x.__webglFramebuffer.length; j++) s.deleteFramebuffer(x.__webglFramebuffer[j]);
      else
        s.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && s.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let j = 0; j < x.__webglColorRenderbuffer.length; j++)
          x.__webglColorRenderbuffer[j] && s.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);
      x.__webglDepthRenderbuffer && s.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const F = E.textures;
    for (let j = 0, Y = F.length; j < Y; j++) {
      const X = n.get(F[j]);
      X.__webglTexture && (s.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(F[j]);
    }
    n.remove(E);
  }
  let b = 0;
  function A() {
    b = 0;
  }
  function G() {
    const E = b;
    return E >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + i.maxTextures), b += 1, E;
  }
  function O(E) {
    const x = [];
    return x.push(E.wrapS), x.push(E.wrapT), x.push(E.wrapR || 0), x.push(E.magFilter), x.push(E.minFilter), x.push(E.anisotropy), x.push(E.internalFormat), x.push(E.format), x.push(E.type), x.push(E.generateMipmaps), x.push(E.premultiplyAlpha), x.push(E.flipY), x.push(E.unpackAlignment), x.push(E.colorSpace), x.join();
  }
  function V(E, x) {
    const F = n.get(E);
    if (E.isVideoTexture && Ee(E), E.isRenderTargetTexture === !1 && E.version > 0 && F.__version !== E.version) {
      const j = E.image;
      if (j === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (j.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Xe(F, E, x);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function $(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      Xe(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, F.__webglTexture, s.TEXTURE0 + x);
  }
  function B(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      Xe(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function ee(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      W(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, F.__webglTexture, s.TEXTURE0 + x);
  }
  const H = {
    1e3: s.REPEAT,
    1001: s.CLAMP_TO_EDGE,
    1002: s.MIRRORED_REPEAT
  }, se = {
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
  function xe(E, x) {
    if (x.type === 1015 && e.has("OES_texture_float_linear") === !1 && (x.magFilter === 1006 || x.magFilter === 1007 || x.magFilter === 1005 || x.magFilter === 1008 || x.minFilter === 1006 || x.minFilter === 1007 || x.minFilter === 1005 || x.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(E, s.TEXTURE_WRAP_S, H[x.wrapS]), s.texParameteri(E, s.TEXTURE_WRAP_T, H[x.wrapT]), (E === s.TEXTURE_3D || E === s.TEXTURE_2D_ARRAY) && s.texParameteri(E, s.TEXTURE_WRAP_R, H[x.wrapR]), s.texParameteri(E, s.TEXTURE_MAG_FILTER, se[x.magFilter]), s.texParameteri(E, s.TEXTURE_MIN_FILTER, se[x.minFilter]), x.compareFunction && (s.texParameteri(E, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(E, s.TEXTURE_COMPARE_FUNC, ue[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === 1003 || x.minFilter !== 1005 && x.minFilter !== 1008 || x.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function Ne(E, x) {
    let F = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, x.addEventListener("dispose", T));
    const j = x.source;
    let Y = h.get(j);
    Y === void 0 && (Y = {}, h.set(j, Y));
    const X = O(x);
    if (X !== E.__cacheKey) {
      Y[X] === void 0 && (Y[X] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, F = !0), Y[X].usedTimes++;
      const ye = Y[E.__cacheKey];
      ye !== void 0 && (Y[E.__cacheKey].usedTimes--, ye.usedTimes === 0 && U(x)), E.__cacheKey = X, E.__webglTexture = Y[X].texture;
    }
    return F;
  }
  function Xe(E, x, F) {
    let j = s.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (j = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (j = s.TEXTURE_3D);
    const Y = Ne(E, x), X = x.source;
    t.bindTexture(j, E.__webglTexture, s.TEXTURE0 + F);
    const ye = n.get(X);
    if (X.version !== ye.__version || Y === !0) {
      t.activeTexture(s.TEXTURE0 + F);
      const ae = je.getPrimaries(je.workingColorSpace), me = x.colorSpace === vn ? null : je.getPrimaries(x.colorSpace), qe = x.colorSpace === vn || ae === me ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, qe);
      let te = _(x.image, !1, i.maxTextureSize);
      te = ke(x, te);
      const be = r.convert(x.format, x.colorSpace), Ue = r.convert(x.type);
      let Fe = M(x.internalFormat, be, Ue, x.colorSpace, x.isVideoTexture);
      xe(j, x);
      let ve;
      const Ve = x.mipmaps, Be = x.isVideoTexture !== !0, tt = ye.__version === void 0 || Y === !0, D = X.dataReady, fe = y(x, te);
      if (x.isDepthTexture)
        Fe = v(x.format === 1027, x.type), tt && (Be ? t.texStorage2D(s.TEXTURE_2D, 1, Fe, te.width, te.height) : t.texImage2D(s.TEXTURE_2D, 0, Fe, te.width, te.height, 0, be, Ue, null));
      else if (x.isDataTexture)
        if (Ve.length > 0) {
          Be && tt && t.texStorage2D(s.TEXTURE_2D, fe, Fe, Ve[0].width, Ve[0].height);
          for (let z = 0, q = Ve.length; z < q; z++)
            ve = Ve[z], Be ? D && t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, ve.width, ve.height, be, Ue, ve.data) : t.texImage2D(s.TEXTURE_2D, z, Fe, ve.width, ve.height, 0, be, Ue, ve.data);
          x.generateMipmaps = !1;
        } else
          Be ? (tt && t.texStorage2D(s.TEXTURE_2D, fe, Fe, te.width, te.height), D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, te.width, te.height, be, Ue, te.data)) : t.texImage2D(s.TEXTURE_2D, 0, Fe, te.width, te.height, 0, be, Ue, te.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Be && tt && t.texStorage3D(s.TEXTURE_2D_ARRAY, fe, Fe, Ve[0].width, Ve[0].height, te.depth);
          for (let z = 0, q = Ve.length; z < q; z++)
            if (ve = Ve[z], x.format !== 1023)
              if (be !== null)
                if (Be) {
                  if (D)
                    if (x.layerUpdates.size > 0) {
                      const ce = ya(ve.width, ve.height, x.format, x.type);
                      for (const pe of x.layerUpdates) {
                        const We = ve.data.subarray(
                          pe * ce / ve.data.BYTES_PER_ELEMENT,
                          (pe + 1) * ce / ve.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, z, 0, 0, pe, ve.width, ve.height, 1, be, We, 0, 0);
                      }
                      x.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, z, 0, 0, 0, ve.width, ve.height, te.depth, be, ve.data, 0, 0);
                } else
                  t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, z, Fe, ve.width, ve.height, te.depth, 0, ve.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Be ? D && t.texSubImage3D(s.TEXTURE_2D_ARRAY, z, 0, 0, 0, ve.width, ve.height, te.depth, be, Ue, ve.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, z, Fe, ve.width, ve.height, te.depth, 0, be, Ue, ve.data);
        } else {
          Be && tt && t.texStorage2D(s.TEXTURE_2D, fe, Fe, Ve[0].width, Ve[0].height);
          for (let z = 0, q = Ve.length; z < q; z++)
            ve = Ve[z], x.format !== 1023 ? be !== null ? Be ? D && t.compressedTexSubImage2D(s.TEXTURE_2D, z, 0, 0, ve.width, ve.height, be, ve.data) : t.compressedTexImage2D(s.TEXTURE_2D, z, Fe, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? D && t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, ve.width, ve.height, be, Ue, ve.data) : t.texImage2D(s.TEXTURE_2D, z, Fe, ve.width, ve.height, 0, be, Ue, ve.data);
        }
      else if (x.isDataArrayTexture)
        if (Be) {
          if (tt && t.texStorage3D(s.TEXTURE_2D_ARRAY, fe, Fe, te.width, te.height, te.depth), D)
            if (x.layerUpdates.size > 0) {
              const z = ya(te.width, te.height, x.format, x.type);
              for (const q of x.layerUpdates) {
                const ce = te.data.subarray(
                  q * z / te.data.BYTES_PER_ELEMENT,
                  (q + 1) * z / te.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, q, te.width, te.height, 1, be, Ue, ce);
              }
              x.clearLayerUpdates();
            } else
              t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, be, Ue, te.data);
        } else
          t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Fe, te.width, te.height, te.depth, 0, be, Ue, te.data);
      else if (x.isData3DTexture)
        Be ? (tt && t.texStorage3D(s.TEXTURE_3D, fe, Fe, te.width, te.height, te.depth), D && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, be, Ue, te.data)) : t.texImage3D(s.TEXTURE_3D, 0, Fe, te.width, te.height, te.depth, 0, be, Ue, te.data);
      else if (x.isFramebufferTexture) {
        if (tt)
          if (Be)
            t.texStorage2D(s.TEXTURE_2D, fe, Fe, te.width, te.height);
          else {
            let z = te.width, q = te.height;
            for (let ce = 0; ce < fe; ce++)
              t.texImage2D(s.TEXTURE_2D, ce, Fe, z, q, 0, be, Ue, null), z >>= 1, q >>= 1;
          }
      } else if (Ve.length > 0) {
        if (Be && tt) {
          const z = Re(Ve[0]);
          t.texStorage2D(s.TEXTURE_2D, fe, Fe, z.width, z.height);
        }
        for (let z = 0, q = Ve.length; z < q; z++)
          ve = Ve[z], Be ? D && t.texSubImage2D(s.TEXTURE_2D, z, 0, 0, be, Ue, ve) : t.texImage2D(s.TEXTURE_2D, z, Fe, be, Ue, ve);
        x.generateMipmaps = !1;
      } else if (Be) {
        if (tt) {
          const z = Re(te);
          t.texStorage2D(s.TEXTURE_2D, fe, Fe, z.width, z.height);
        }
        D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, be, Ue, te);
      } else
        t.texImage2D(s.TEXTURE_2D, 0, Fe, be, Ue, te);
      m(x) && p(j), ye.__version = X.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function W(E, x, F) {
    if (x.image.length !== 6) return;
    const j = Ne(E, x), Y = x.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, E.__webglTexture, s.TEXTURE0 + F);
    const X = n.get(Y);
    if (Y.version !== X.__version || j === !0) {
      t.activeTexture(s.TEXTURE0 + F);
      const ye = je.getPrimaries(je.workingColorSpace), ae = x.colorSpace === vn ? null : je.getPrimaries(x.colorSpace), me = x.colorSpace === vn || ye === ae ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, me);
      const qe = x.isCompressedTexture || x.image[0].isCompressedTexture, te = x.image[0] && x.image[0].isDataTexture, be = [];
      for (let q = 0; q < 6; q++)
        !qe && !te ? be[q] = _(x.image[q], !0, i.maxCubemapSize) : be[q] = te ? x.image[q].image : x.image[q], be[q] = ke(x, be[q]);
      const Ue = be[0], Fe = r.convert(x.format, x.colorSpace), ve = r.convert(x.type), Ve = M(x.internalFormat, Fe, ve, x.colorSpace), Be = x.isVideoTexture !== !0, tt = X.__version === void 0 || j === !0, D = Y.dataReady;
      let fe = y(x, Ue);
      xe(s.TEXTURE_CUBE_MAP, x);
      let z;
      if (qe) {
        Be && tt && t.texStorage2D(s.TEXTURE_CUBE_MAP, fe, Ve, Ue.width, Ue.height);
        for (let q = 0; q < 6; q++) {
          z = be[q].mipmaps;
          for (let ce = 0; ce < z.length; ce++) {
            const pe = z[ce];
            x.format !== 1023 ? Fe !== null ? Be ? D && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce, 0, 0, pe.width, pe.height, Fe, pe.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce, Ve, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce, 0, 0, pe.width, pe.height, Fe, ve, pe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce, Ve, pe.width, pe.height, 0, Fe, ve, pe.data);
          }
        }
      } else {
        if (z = x.mipmaps, Be && tt) {
          z.length > 0 && fe++;
          const q = Re(be[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, fe, Ve, q.width, q.height);
        }
        for (let q = 0; q < 6; q++)
          if (te) {
            Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, be[q].width, be[q].height, Fe, ve, be[q].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ve, be[q].width, be[q].height, 0, Fe, ve, be[q].data);
            for (let ce = 0; ce < z.length; ce++) {
              const We = z[ce].image[q].image;
              Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce + 1, 0, 0, We.width, We.height, Fe, ve, We.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce + 1, Ve, We.width, We.height, 0, Fe, ve, We.data);
            }
          } else {
            Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, Fe, ve, be[q]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ve, Fe, ve, be[q]);
            for (let ce = 0; ce < z.length; ce++) {
              const pe = z[ce];
              Be ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce + 1, 0, 0, Fe, ve, pe.image[q]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, ce + 1, Ve, Fe, ve, pe.image[q]);
            }
          }
      }
      m(x) && p(s.TEXTURE_CUBE_MAP), X.__version = Y.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function Z(E, x, F, j, Y, X) {
    const ye = r.convert(F.format, F.colorSpace), ae = r.convert(F.type), me = M(F.internalFormat, ye, ae, F.colorSpace);
    if (!n.get(x).__hasExternalTextures) {
      const te = Math.max(1, x.width >> X), be = Math.max(1, x.height >> X);
      Y === s.TEXTURE_3D || Y === s.TEXTURE_2D_ARRAY ? t.texImage3D(Y, X, me, te, be, x.depth, 0, ye, ae, null) : t.texImage2D(Y, X, me, te, be, 0, ye, ae, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, E), Ce(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, j, Y, n.get(F).__webglTexture, 0, we(x)) : (Y === s.TEXTURE_2D || Y >= s.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, j, Y, n.get(F).__webglTexture, X), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ge(E, x, F) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, E), x.depthBuffer) {
      const j = x.depthTexture, Y = j && j.isDepthTexture ? j.type : null, X = v(x.stencilBuffer, Y), ye = x.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ae = we(x);
      Ce(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ae, X, x.width, x.height) : F ? s.renderbufferStorageMultisample(s.RENDERBUFFER, ae, X, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, X, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, ye, s.RENDERBUFFER, E);
    } else {
      const j = x.textures;
      for (let Y = 0; Y < j.length; Y++) {
        const X = j[Y], ye = r.convert(X.format, X.colorSpace), ae = r.convert(X.type), me = M(X.internalFormat, ye, ae, X.colorSpace), qe = we(x);
        F && Ce(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, qe, me, x.width, x.height) : Ce(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, qe, me, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, me, x.width, x.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function de(E, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, E), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), V(x.depthTexture, 0);
    const j = n.get(x.depthTexture).__webglTexture, Y = we(x);
    if (x.depthTexture.format === 1026)
      Ce(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, j, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, j, 0);
    else if (x.depthTexture.format === 1027)
      Ce(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, j, 0, Y) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, j, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Q(E) {
    const x = n.get(E), F = E.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== E.depthTexture) {
      const j = E.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), j) {
        const Y = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, j.removeEventListener("dispose", Y);
        };
        j.addEventListener("dispose", Y), x.__depthDisposeCallback = Y;
      }
      x.__boundDepthTexture = j;
    }
    if (E.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      de(x.__webglFramebuffer, E);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++)
        if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[j]), x.__webglDepthbuffer[j] === void 0)
          x.__webglDepthbuffer[j] = s.createRenderbuffer(), ge(x.__webglDepthbuffer[j], E, !1);
        else {
          const Y = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, X = x.__webglDepthbuffer[j];
          s.bindRenderbuffer(s.RENDERBUFFER, X), s.framebufferRenderbuffer(s.FRAMEBUFFER, Y, s.RENDERBUFFER, X);
        }
    } else if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
      x.__webglDepthbuffer = s.createRenderbuffer(), ge(x.__webglDepthbuffer, E, !1);
    else {
      const j = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Y = x.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, Y), s.framebufferRenderbuffer(s.FRAMEBUFFER, j, s.RENDERBUFFER, Y);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function J(E, x, F) {
    const j = n.get(E);
    x !== void 0 && Z(j.__webglFramebuffer, E, E.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), F !== void 0 && Q(E);
  }
  function oe(E) {
    const x = E.texture, F = n.get(E), j = n.get(x);
    E.addEventListener("dispose", R);
    const Y = E.textures, X = E.isWebGLCubeRenderTarget === !0, ye = Y.length > 1;
    if (ye || (j.__webglTexture === void 0 && (j.__webglTexture = s.createTexture()), j.__version = x.version, a.memory.textures++), X) {
      F.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          F.__webglFramebuffer[ae] = [];
          for (let me = 0; me < x.mipmaps.length; me++)
            F.__webglFramebuffer[ae][me] = s.createFramebuffer();
        } else
          F.__webglFramebuffer[ae] = s.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let ae = 0; ae < x.mipmaps.length; ae++)
          F.__webglFramebuffer[ae] = s.createFramebuffer();
      } else
        F.__webglFramebuffer = s.createFramebuffer();
      if (ye)
        for (let ae = 0, me = Y.length; ae < me; ae++) {
          const qe = n.get(Y[ae]);
          qe.__webglTexture === void 0 && (qe.__webglTexture = s.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && Ce(E) === !1) {
        F.__webglMultisampledFramebuffer = s.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < Y.length; ae++) {
          const me = Y[ae];
          F.__webglColorRenderbuffer[ae] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
          const qe = r.convert(me.format, me.colorSpace), te = r.convert(me.type), be = M(me.internalFormat, qe, te, me.colorSpace, E.isXRRenderTarget === !0), Ue = we(E);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Ue, be, E.width, E.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ae, s.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = s.createRenderbuffer(), ge(F.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, j.__webglTexture), xe(s.TEXTURE_CUBE_MAP, x);
      for (let ae = 0; ae < 6; ae++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let me = 0; me < x.mipmaps.length; me++)
            Z(F.__webglFramebuffer[ae][me], E, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, me);
        else
          Z(F.__webglFramebuffer[ae], E, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      m(x) && p(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ye) {
      for (let ae = 0, me = Y.length; ae < me; ae++) {
        const qe = Y[ae], te = n.get(qe);
        t.bindTexture(s.TEXTURE_2D, te.__webglTexture), xe(s.TEXTURE_2D, qe), Z(F.__webglFramebuffer, E, qe, s.COLOR_ATTACHMENT0 + ae, s.TEXTURE_2D, 0), m(qe) && p(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = s.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ae = E.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(ae, j.__webglTexture), xe(ae, x), x.mipmaps && x.mipmaps.length > 0)
        for (let me = 0; me < x.mipmaps.length; me++)
          Z(F.__webglFramebuffer[me], E, x, s.COLOR_ATTACHMENT0, ae, me);
      else
        Z(F.__webglFramebuffer, E, x, s.COLOR_ATTACHMENT0, ae, 0);
      m(x) && p(ae), t.unbindTexture();
    }
    E.depthBuffer && Q(E);
  }
  function le(E) {
    const x = E.textures;
    for (let F = 0, j = x.length; F < j; F++) {
      const Y = x[F];
      if (m(Y)) {
        const X = E.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, ye = n.get(Y).__webglTexture;
        t.bindTexture(X, ye), p(X), t.unbindTexture();
      }
    }
  }
  const _e = [], C = [];
  function st(E) {
    if (E.samples > 0) {
      if (Ce(E) === !1) {
        const x = E.textures, F = E.width, j = E.height;
        let Y = s.COLOR_BUFFER_BIT;
        const X = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ye = n.get(E), ae = x.length > 1;
        if (ae)
          for (let me = 0; me < x.length; me++)
            t.bindFramebuffer(s.FRAMEBUFFER, ye.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, ye.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, ye.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ye.__webglFramebuffer);
        for (let me = 0; me < x.length; me++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (Y |= s.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (Y |= s.STENCIL_BUFFER_BIT)), ae) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, ye.__webglColorRenderbuffer[me]);
            const qe = n.get(x[me]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, qe, 0);
          }
          s.blitFramebuffer(0, 0, F, j, 0, 0, F, j, Y, s.NEAREST), l === !0 && (_e.length = 0, C.length = 0, _e.push(s.COLOR_ATTACHMENT0 + me), E.depthBuffer && E.resolveDepthBuffer === !1 && (_e.push(X), C.push(X), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, C)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, _e));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ae)
          for (let me = 0; me < x.length; me++) {
            t.bindFramebuffer(s.FRAMEBUFFER, ye.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.RENDERBUFFER, ye.__webglColorRenderbuffer[me]);
            const qe = n.get(x[me]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, ye.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + me, s.TEXTURE_2D, qe, 0);
          }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ye.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const x = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function we(E) {
    return Math.min(i.maxSamples, E.samples);
  }
  function Ce(E) {
    const x = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function Ee(E) {
    const x = a.render.frame;
    u.get(E) !== x && (u.set(E, x), E.update());
  }
  function ke(E, x) {
    const F = E.colorSpace, j = E.format, Y = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || F !== ht && F !== vn && (je.getTransfer(F) === nt ? (j !== 1023 || Y !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  function Re(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = A, this.setTexture2D = V, this.setTexture2DArray = $, this.setTexture3D = B, this.setTextureCube = ee, this.rebindTextures = J, this.setupRenderTarget = oe, this.updateRenderTargetMipmap = le, this.updateMultisampleRenderTarget = st, this.setupDepthRenderbuffer = Q, this.setupFrameBufferTexture = Z, this.useMultisampledRTT = Ce;
}
function Yd(s, e) {
  function t(n, i = vn) {
    let r;
    const a = je.getTransfer(i);
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
      if (a === nt)
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
        if (n === 36196 || n === 37492) return a === nt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === 37808) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === 36492) return a === nt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
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
class $d extends wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class hn extends rt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Qd = { type: "move" };
class $s {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new hn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new hn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new hn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
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
          const m = t.getJointPose(_, n), p = this._getHandJoint(c, _);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const u = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], h = u.position.distanceTo(d.position), f = 0.02, g = 5e-3;
        c.inputState.pinching && h > f + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && h <= f - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Qd)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new hn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Zd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Jd = `
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
class ef {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new pt(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Mt({
        vertexShader: Zd,
        fragmentShader: Jd,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new xt(new Ri(20, 20), n);
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
class tf extends Un {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, u = null, d = null, h = null, f = null, g = null;
    const _ = new ef(), m = t.getContextAttributes();
    let p = null, M = null;
    const v = [], y = [], T = new Le();
    let R = null;
    const w = new wt();
    w.layers.enable(1), w.viewport = new He();
    const U = new wt();
    U.layers.enable(2), U.viewport = new He();
    const K = [w, U], b = new $d();
    b.layers.enable(1), b.layers.enable(2);
    let A = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(W) {
      let Z = v[W];
      return Z === void 0 && (Z = new $s(), v[W] = Z), Z.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let Z = v[W];
      return Z === void 0 && (Z = new $s(), v[W] = Z), Z.getGripSpace();
    }, this.getHand = function(W) {
      let Z = v[W];
      return Z === void 0 && (Z = new $s(), v[W] = Z), Z.getHandSpace();
    };
    function O(W) {
      const Z = y.indexOf(W.inputSource);
      if (Z === -1)
        return;
      const ge = v[Z];
      ge !== void 0 && (ge.update(W.inputSource, W.frame, c || a), ge.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function V() {
      i.removeEventListener("select", O), i.removeEventListener("selectstart", O), i.removeEventListener("selectend", O), i.removeEventListener("squeeze", O), i.removeEventListener("squeezestart", O), i.removeEventListener("squeezeend", O), i.removeEventListener("end", V), i.removeEventListener("inputsourceschange", $);
      for (let W = 0; W < v.length; W++) {
        const Z = y[W];
        Z !== null && (y[W] = null, v[W].disconnect(Z));
      }
      A = null, G = null, _.reset(), e.setRenderTarget(p), f = null, h = null, d = null, i = null, M = null, Xe.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(T.width, T.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      r = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return h !== null ? h : f;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(W) {
      if (i = W, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", O), i.addEventListener("selectstart", O), i.addEventListener("selectend", O), i.addEventListener("squeeze", O), i.addEventListener("squeezestart", O), i.addEventListener("squeezeend", O), i.addEventListener("end", V), i.addEventListener("inputsourceschange", $), m.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(T), i.renderState.layers === void 0) {
          const Z = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, t, Z), i.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), M = new Nt(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let Z = null, ge = null, de = null;
          m.depth && (de = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Z = m.stencil ? 1027 : 1026, ge = m.stencil ? 1020 : 1014);
          const Q = {
            colorFormat: t.RGBA8,
            depthFormat: de,
            scaleFactor: r
          };
          d = new XRWebGLBinding(i, t), h = d.createProjectionLayer(Q), i.updateRenderState({ layers: [h] }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), M = new Nt(
            h.textureWidth,
            h.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new lo(h.textureWidth, h.textureHeight, ge, void 0, void 0, void 0, void 0, void 0, void 0, Z),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: h.ignoreDepthValues === !1
            }
          );
        }
        M.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), Xe.setContext(i), Xe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function $(W) {
      for (let Z = 0; Z < W.removed.length; Z++) {
        const ge = W.removed[Z], de = y.indexOf(ge);
        de >= 0 && (y[de] = null, v[de].disconnect(ge));
      }
      for (let Z = 0; Z < W.added.length; Z++) {
        const ge = W.added[Z];
        let de = y.indexOf(ge);
        if (de === -1) {
          for (let J = 0; J < v.length; J++)
            if (J >= y.length) {
              y.push(ge), de = J;
              break;
            } else if (y[J] === null) {
              y[J] = ge, de = J;
              break;
            }
          if (de === -1) break;
        }
        const Q = v[de];
        Q && Q.connect(ge);
      }
    }
    const B = new P(), ee = new P();
    function H(W, Z, ge) {
      B.setFromMatrixPosition(Z.matrixWorld), ee.setFromMatrixPosition(ge.matrixWorld);
      const de = B.distanceTo(ee), Q = Z.projectionMatrix.elements, J = ge.projectionMatrix.elements, oe = Q[14] / (Q[10] - 1), le = Q[14] / (Q[10] + 1), _e = (Q[9] + 1) / Q[5], C = (Q[9] - 1) / Q[5], st = (Q[8] - 1) / Q[0], we = (J[8] + 1) / J[0], Ce = oe * st, Ee = oe * we, ke = de / (-st + we), Re = ke * -st;
      if (Z.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(Re), W.translateZ(ke), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), Q[10] === -1)
        W.projectionMatrix.copy(Z.projectionMatrix), W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);
      else {
        const E = oe + ke, x = le + ke, F = Ce - Re, j = Ee + (de - Re), Y = _e * le / x * E, X = C * le / x * E;
        W.projectionMatrix.makePerspective(F, j, Y, X, E, x), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
      }
    }
    function se(W, Z) {
      Z === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(Z.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (i === null) return;
      let Z = W.near, ge = W.far;
      _.texture !== null && (_.depthNear > 0 && (Z = _.depthNear), _.depthFar > 0 && (ge = _.depthFar)), b.near = U.near = w.near = Z, b.far = U.far = w.far = ge, (A !== b.near || G !== b.far) && (i.updateRenderState({
        depthNear: b.near,
        depthFar: b.far
      }), A = b.near, G = b.far);
      const de = W.parent, Q = b.cameras;
      se(b, de);
      for (let J = 0; J < Q.length; J++)
        se(Q[J], de);
      Q.length === 2 ? H(b, w, U) : b.projectionMatrix.copy(w.projectionMatrix), ue(W, b, de);
    };
    function ue(W, Z, ge) {
      ge === null ? W.matrix.copy(Z.matrixWorld) : (W.matrix.copy(ge.matrixWorld), W.matrix.invert(), W.matrix.multiply(Z.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(!0), W.projectionMatrix.copy(Z.projectionMatrix), W.projectionMatrixInverse.copy(Z.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = Jn * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return b;
    }, this.getFoveation = function() {
      if (!(h === null && f === null))
        return l;
    }, this.setFoveation = function(W) {
      l = W, h !== null && (h.fixedFoveation = W), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(b);
    };
    let xe = null;
    function Ne(W, Z) {
      if (u = Z.getViewerPose(c || a), g = Z, u !== null) {
        const ge = u.views;
        f !== null && (e.setRenderTargetFramebuffer(M, f.framebuffer), e.setRenderTarget(M));
        let de = !1;
        ge.length !== b.cameras.length && (b.cameras.length = 0, de = !0);
        for (let J = 0; J < ge.length; J++) {
          const oe = ge[J];
          let le = null;
          if (f !== null)
            le = f.getViewport(oe);
          else {
            const C = d.getViewSubImage(h, oe);
            le = C.viewport, J === 0 && (e.setRenderTargetTextures(
              M,
              C.colorTexture,
              h.ignoreDepthValues ? void 0 : C.depthStencilTexture
            ), e.setRenderTarget(M));
          }
          let _e = K[J];
          _e === void 0 && (_e = new wt(), _e.layers.enable(J), _e.viewport = new He(), K[J] = _e), _e.matrix.fromArray(oe.transform.matrix), _e.matrix.decompose(_e.position, _e.quaternion, _e.scale), _e.projectionMatrix.fromArray(oe.projectionMatrix), _e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(), _e.viewport.set(le.x, le.y, le.width, le.height), J === 0 && (b.matrix.copy(_e.matrix), b.matrix.decompose(b.position, b.quaternion, b.scale)), de === !0 && b.cameras.push(_e);
        }
        const Q = i.enabledFeatures;
        if (Q && Q.includes("depth-sensing")) {
          const J = d.getDepthInformation(ge[0]);
          J && J.isValid && J.texture && _.init(e, J, i.renderState);
        }
      }
      for (let ge = 0; ge < v.length; ge++) {
        const de = y[ge], Q = v[ge];
        de !== null && Q !== void 0 && Q.update(de, Z, c || a);
      }
      xe && xe(W, Z), Z.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Z }), g = null;
    }
    const Xe = new oo();
    Xe.setAnimationLoop(Ne), this.setAnimationLoop = function(W) {
      xe = W;
    }, this.dispose = function() {
    };
  }
}
const Rn = /* @__PURE__ */ new jt(), nf = /* @__PURE__ */ new Pe();
function sf(s, e) {
  function t(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function n(m, p) {
    p.color.getRGB(m.fogColor.value, so(s)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function i(m, p, M, v, y) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), d(m, p)) : p.isMeshPhongMaterial ? (r(m, p), u(m, p)) : p.isMeshStandardMaterial ? (r(m, p), h(m, p), p.isMeshPhysicalMaterial && f(m, p, y)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), _(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? l(m, p, M, v) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === 1 && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === 1 && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const M = e.get(p), v = M.envMap, y = M.envMapRotation;
    v && (m.envMap.value = v, Rn.copy(y), Rn.x *= -1, Rn.y *= -1, Rn.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (Rn.y *= -1, Rn.z *= -1), m.envMapRotation.value.setFromMatrix4(nf.makeRotationFromEuler(Rn)), m.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, M, v) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * M, m.scale.value = v * 0.5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function u(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function d(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function h(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, M) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = M.texture, m.transmissionSamplerSize.value.set(M.width, M.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function _(m, p) {
    const M = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(M.matrixWorld), m.nearDistance.value = M.shadow.camera.near, m.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function rf(s, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(M, v) {
    const y = v.program;
    n.uniformBlockBinding(M, y);
  }
  function c(M, v) {
    let y = i[M.id];
    y === void 0 && (g(M), y = u(M), i[M.id] = y, M.addEventListener("dispose", m));
    const T = v.program;
    n.updateUBOMapping(M, T);
    const R = e.render.frame;
    r[M.id] !== R && (h(M), r[M.id] = R);
  }
  function u(M) {
    const v = d();
    M.__bindingPointIndex = v;
    const y = s.createBuffer(), T = M.__size, R = M.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, y), s.bufferData(s.UNIFORM_BUFFER, T, R), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, v, y), y;
  }
  function d() {
    for (let M = 0; M < o; M++)
      if (a.indexOf(M) === -1)
        return a.push(M), M;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function h(M) {
    const v = i[M.id], y = M.uniforms, T = M.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, v);
    for (let R = 0, w = y.length; R < w; R++) {
      const U = Array.isArray(y[R]) ? y[R] : [y[R]];
      for (let K = 0, b = U.length; K < b; K++) {
        const A = U[K];
        if (f(A, R, K, T) === !0) {
          const G = A.__offset, O = Array.isArray(A.value) ? A.value : [A.value];
          let V = 0;
          for (let $ = 0; $ < O.length; $++) {
            const B = O[$], ee = _(B);
            typeof B == "number" || typeof B == "boolean" ? (A.__data[0] = B, s.bufferSubData(s.UNIFORM_BUFFER, G + V, A.__data)) : B.isMatrix3 ? (A.__data[0] = B.elements[0], A.__data[1] = B.elements[1], A.__data[2] = B.elements[2], A.__data[3] = 0, A.__data[4] = B.elements[3], A.__data[5] = B.elements[4], A.__data[6] = B.elements[5], A.__data[7] = 0, A.__data[8] = B.elements[6], A.__data[9] = B.elements[7], A.__data[10] = B.elements[8], A.__data[11] = 0) : (B.toArray(A.__data, V), V += ee.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, G, A.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function f(M, v, y, T) {
    const R = M.value, w = v + "_" + y;
    if (T[w] === void 0)
      return typeof R == "number" || typeof R == "boolean" ? T[w] = R : T[w] = R.clone(), !0;
    {
      const U = T[w];
      if (typeof R == "number" || typeof R == "boolean") {
        if (U !== R)
          return T[w] = R, !0;
      } else if (U.equals(R) === !1)
        return U.copy(R), !0;
    }
    return !1;
  }
  function g(M) {
    const v = M.uniforms;
    let y = 0;
    const T = 16;
    for (let w = 0, U = v.length; w < U; w++) {
      const K = Array.isArray(v[w]) ? v[w] : [v[w]];
      for (let b = 0, A = K.length; b < A; b++) {
        const G = K[b], O = Array.isArray(G.value) ? G.value : [G.value];
        for (let V = 0, $ = O.length; V < $; V++) {
          const B = O[V], ee = _(B), H = y % T, se = H % ee.boundary, ue = H + se;
          y += se, ue !== 0 && T - ue < ee.storage && (y += T - ue), G.__data = new Float32Array(ee.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = y, y += ee.storage;
        }
      }
    }
    const R = y % T;
    return R > 0 && (y += T - R), M.__size = y, M.__cache = {}, this;
  }
  function _(M) {
    const v = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof M == "number" || typeof M == "boolean" ? (v.boundary = 4, v.storage = 4) : M.isVector2 ? (v.boundary = 8, v.storage = 8) : M.isVector3 || M.isColor ? (v.boundary = 16, v.storage = 12) : M.isVector4 ? (v.boundary = 16, v.storage = 16) : M.isMatrix3 ? (v.boundary = 48, v.storage = 48) : M.isMatrix4 ? (v.boundary = 64, v.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), v;
  }
  function m(M) {
    const v = M.target;
    v.removeEventListener("dispose", m);
    const y = a.indexOf(v.__bindingPointIndex);
    a.splice(y, 1), s.deleteBuffer(i[v.id]), delete i[v.id], delete r[v.id];
  }
  function p() {
    for (const M in i)
      s.deleteBuffer(i[M]);
    a = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: p
  };
}
class af {
  constructor(e = {}) {
    const {
      canvas: t = Ko(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let h;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      h = n.getContextAttributes().alpha;
    } else
      h = a;
    const f = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, m = null;
    const p = [], M = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = gt, this.toneMapping = 0, this.toneMappingExposure = 1;
    const v = this;
    let y = !1, T = 0, R = 0, w = null, U = -1, K = null;
    const b = new He(), A = new He();
    let G = null;
    const O = new re(0);
    let V = 0, $ = t.width, B = t.height, ee = 1, H = null, se = null;
    const ue = new He(0, 0, $, B), xe = new He(0, 0, $, B);
    let Ne = !1;
    const Xe = new vr();
    let W = !1, Z = !1;
    const ge = new Pe(), de = new Pe(), Q = new P(), J = new He(), oe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let le = !1;
    function _e() {
      return w === null ? ee : 1;
    }
    let C = n;
    function st(S, L) {
      return t.getContext(S, L);
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${gr}`), t.addEventListener("webglcontextlost", q, !1), t.addEventListener("webglcontextrestored", ce, !1), t.addEventListener("webglcontextcreationerror", pe, !1), C === null) {
        const L = "webgl2";
        if (C = st(L, S), C === null)
          throw st(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let we, Ce, Ee, ke, Re, E, x, F, j, Y, X, ye, ae, me, qe, te, be, Ue, Fe, ve, Ve, Be, tt, D;
    function fe() {
      we = new uu(C), we.init(), Be = new Yd(C, we), Ce = new ru(C, we, e, Be), Ee = new Xd(C), Ce.reverseDepthBuffer && Ee.buffers.depth.setReversed(!0), ke = new pu(C), Re = new Ld(), E = new Kd(C, we, Ee, Re, Ce, Be, ke), x = new ou(v), F = new hu(v), j = new Ml(C), tt = new iu(C, j), Y = new du(C, j, ke, tt), X = new gu(C, Y, j, ke), Fe = new mu(C, Ce, E), te = new au(Re), ye = new Dd(v, x, F, we, Ce, tt, te), ae = new sf(v, Re), me = new Ud(), qe = new Gd(we), Ue = new nu(v, x, F, Ee, X, h, l), be = new Wd(v, X, Ce), D = new rf(C, ke, Ce, Ee), ve = new su(C, we, ke), Ve = new fu(C, we, ke), ke.programs = ye.programs, v.capabilities = Ce, v.extensions = we, v.properties = Re, v.renderLists = me, v.shadowMap = be, v.state = Ee, v.info = ke;
    }
    fe();
    const z = new tf(v, C);
    this.xr = z, this.getContext = function() {
      return C;
    }, this.getContextAttributes = function() {
      return C.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = we.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = we.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return ee;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (ee = S, this.setSize($, B, !1));
    }, this.getSize = function(S) {
      return S.set($, B);
    }, this.setSize = function(S, L, N = !0) {
      if (z.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      $ = S, B = L, t.width = Math.floor(S * ee), t.height = Math.floor(L * ee), N === !0 && (t.style.width = S + "px", t.style.height = L + "px"), this.setViewport(0, 0, S, L);
    }, this.getDrawingBufferSize = function(S) {
      return S.set($ * ee, B * ee).floor();
    }, this.setDrawingBufferSize = function(S, L, N) {
      $ = S, B = L, ee = N, t.width = Math.floor(S * N), t.height = Math.floor(L * N), this.setViewport(0, 0, S, L);
    }, this.getCurrentViewport = function(S) {
      return S.copy(b);
    }, this.getViewport = function(S) {
      return S.copy(ue);
    }, this.setViewport = function(S, L, N, k) {
      S.isVector4 ? ue.set(S.x, S.y, S.z, S.w) : ue.set(S, L, N, k), Ee.viewport(b.copy(ue).multiplyScalar(ee).round());
    }, this.getScissor = function(S) {
      return S.copy(xe);
    }, this.setScissor = function(S, L, N, k) {
      S.isVector4 ? xe.set(S.x, S.y, S.z, S.w) : xe.set(S, L, N, k), Ee.scissor(A.copy(xe).multiplyScalar(ee).round());
    }, this.getScissorTest = function() {
      return Ne;
    }, this.setScissorTest = function(S) {
      Ee.setScissorTest(Ne = S);
    }, this.setOpaqueSort = function(S) {
      H = S;
    }, this.setTransparentSort = function(S) {
      se = S;
    }, this.getClearColor = function(S) {
      return S.copy(Ue.getClearColor());
    }, this.setClearColor = function() {
      Ue.setClearColor.apply(Ue, arguments);
    }, this.getClearAlpha = function() {
      return Ue.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ue.setClearAlpha.apply(Ue, arguments);
    }, this.clear = function(S = !0, L = !0, N = !0) {
      let k = 0;
      if (S) {
        let I = !1;
        if (w !== null) {
          const ne = w.texture.format;
          I = ne === 1033 || ne === 1031 || ne === 1029;
        }
        if (I) {
          const ne = w.texture.type, he = ne === 1009 || ne === 1014 || ne === 1012 || ne === 1020 || ne === 1017 || ne === 1018, Me = Ue.getClearColor(), Se = Ue.getClearAlpha(), De = Me.r, Ie = Me.g, Ae = Me.b;
          he ? (f[0] = De, f[1] = Ie, f[2] = Ae, f[3] = Se, C.clearBufferuiv(C.COLOR, 0, f)) : (g[0] = De, g[1] = Ie, g[2] = Ae, g[3] = Se, C.clearBufferiv(C.COLOR, 0, g));
        } else
          k |= C.COLOR_BUFFER_BIT;
      }
      L && (k |= C.DEPTH_BUFFER_BIT, C.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), N && (k |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), C.clear(k);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", q, !1), t.removeEventListener("webglcontextrestored", ce, !1), t.removeEventListener("webglcontextcreationerror", pe, !1), me.dispose(), qe.dispose(), Re.dispose(), x.dispose(), F.dispose(), X.dispose(), tt.dispose(), D.dispose(), ye.dispose(), z.dispose(), z.removeEventListener("sessionstart", wr), z.removeEventListener("sessionend", Rr), Sn.stop();
    };
    function q(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function ce() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const S = ke.autoReset, L = be.enabled, N = be.autoUpdate, k = be.needsUpdate, I = be.type;
      fe(), ke.autoReset = S, be.enabled = L, be.autoUpdate = N, be.needsUpdate = k, be.type = I;
    }
    function pe(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function We(S) {
      const L = S.target;
      L.removeEventListener("dispose", We), lt(L);
    }
    function lt(S) {
      Et(S), Re.remove(S);
    }
    function Et(S) {
      const L = Re.get(S).programs;
      L !== void 0 && (L.forEach(function(N) {
        ye.releaseProgram(N);
      }), S.isShaderMaterial && ye.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, L, N, k, I, ne) {
      L === null && (L = oe);
      const he = I.isMesh && I.matrixWorld.determinant() < 0, Me = wo(S, L, N, k, I);
      Ee.setMaterial(k, he);
      let Se = N.index, De = 1;
      if (k.wireframe === !0) {
        if (Se = Y.getWireframeAttribute(N), Se === void 0) return;
        De = 2;
      }
      const Ie = N.drawRange, Ae = N.attributes.position;
      let Je = Ie.start * De, it = (Ie.start + Ie.count) * De;
      ne !== null && (Je = Math.max(Je, ne.start * De), it = Math.min(it, (ne.start + ne.count) * De)), Se !== null ? (Je = Math.max(Je, 0), it = Math.min(it, Se.count)) : Ae != null && (Je = Math.max(Je, 0), it = Math.min(it, Ae.count));
      const at = it - Je;
      if (at < 0 || at === 1 / 0) return;
      tt.setup(I, k, Me, N, Se);
      let Rt, $e = ve;
      if (Se !== null && (Rt = j.get(Se), $e = Ve, $e.setIndex(Rt)), I.isMesh)
        k.wireframe === !0 ? (Ee.setLineWidth(k.wireframeLinewidth * _e()), $e.setMode(C.LINES)) : $e.setMode(C.TRIANGLES);
      else if (I.isLine) {
        let Te = k.linewidth;
        Te === void 0 && (Te = 1), Ee.setLineWidth(Te * _e()), I.isLineSegments ? $e.setMode(C.LINES) : I.isLineLoop ? $e.setMode(C.LINE_LOOP) : $e.setMode(C.LINE_STRIP);
      } else I.isPoints ? $e.setMode(C.POINTS) : I.isSprite && $e.setMode(C.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          $e.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        else if (we.get("WEBGL_multi_draw"))
          $e.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        else {
          const Te = I._multiDrawStarts, mt = I._multiDrawCounts, Qe = I._multiDrawCount, kt = Se ? j.get(Se).bytesPerElement : 1, Fn = Re.get(k).currentProgram.getUniforms();
          for (let Ct = 0; Ct < Qe; Ct++)
            Fn.setValue(C, "_gl_DrawID", Ct), $e.render(Te[Ct] / kt, mt[Ct]);
        }
      else if (I.isInstancedMesh)
        $e.renderInstances(Je, at, I.count);
      else if (N.isInstancedBufferGeometry) {
        const Te = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0, mt = Math.min(N.instanceCount, Te);
        $e.renderInstances(Je, at, mt);
      } else
        $e.render(Je, at);
    };
    function Ye(S, L, N) {
      S.transparent === !0 && S.side === 2 && S.forceSinglePass === !1 ? (S.side = 1, S.needsUpdate = !0, Li(S, L, N), S.side = 0, S.needsUpdate = !0, Li(S, L, N), S.side = 2) : Li(S, L, N);
    }
    this.compile = function(S, L, N = null) {
      N === null && (N = S), m = qe.get(N), m.init(L), M.push(m), N.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (m.pushLight(I), I.castShadow && m.pushShadow(I));
      }), S !== N && S.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (m.pushLight(I), I.castShadow && m.pushShadow(I));
      }), m.setupLights();
      const k = /* @__PURE__ */ new Set();
      return S.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite))
          return;
        const ne = I.material;
        if (ne)
          if (Array.isArray(ne))
            for (let he = 0; he < ne.length; he++) {
              const Me = ne[he];
              Ye(Me, N, I), k.add(Me);
            }
          else
            Ye(ne, N, I), k.add(ne);
      }), M.pop(), m = null, k;
    }, this.compileAsync = function(S, L, N = null) {
      const k = this.compile(S, L, N);
      return new Promise((I) => {
        function ne() {
          if (k.forEach(function(he) {
            Re.get(he).currentProgram.isReady() && k.delete(he);
          }), k.size === 0) {
            I(S);
            return;
          }
          setTimeout(ne, 10);
        }
        we.get("KHR_parallel_shader_compile") !== null ? ne() : setTimeout(ne, 10);
      });
    };
    let Tt = null;
    function Jt(S) {
      Tt && Tt(S);
    }
    function wr() {
      Sn.stop();
    }
    function Rr() {
      Sn.start();
    }
    const Sn = new oo();
    Sn.setAnimationLoop(Jt), typeof self < "u" && Sn.setContext(self), this.setAnimationLoop = function(S) {
      Tt = S, z.setAnimationLoop(S), S === null ? Sn.stop() : Sn.start();
    }, z.addEventListener("sessionstart", wr), z.addEventListener("sessionend", Rr), this.render = function(S, L) {
      if (L !== void 0 && L.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0) return;
      if (S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), z.enabled === !0 && z.isPresenting === !0 && (z.cameraAutoUpdate === !0 && z.updateCamera(L), L = z.getCamera()), S.isScene === !0 && S.onBeforeRender(v, S, L, w), m = qe.get(S, M.length), m.init(L), M.push(m), de.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Xe.setFromProjectionMatrix(de), Z = this.localClippingEnabled, W = te.init(this.clippingPlanes, Z), _ = me.get(S, p.length), _.init(), p.push(_), z.enabled === !0 && z.isPresenting === !0) {
        const ne = v.xr.getDepthSensingMesh();
        ne !== null && vs(ne, L, -1 / 0, v.sortObjects);
      }
      vs(S, L, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(H, se), le = z.enabled === !1 || z.isPresenting === !1 || z.hasDepthSensing() === !1, le && Ue.addToRenderList(_, S), this.info.render.frame++, W === !0 && te.beginShadows();
      const N = m.state.shadowsArray;
      be.render(N, S, L), W === !0 && te.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const k = _.opaque, I = _.transmissive;
      if (m.setupLights(), L.isArrayCamera) {
        const ne = L.cameras;
        if (I.length > 0)
          for (let he = 0, Me = ne.length; he < Me; he++) {
            const Se = ne[he];
            Pr(k, I, S, Se);
          }
        le && Ue.render(S);
        for (let he = 0, Me = ne.length; he < Me; he++) {
          const Se = ne[he];
          Cr(_, S, Se, Se.viewport);
        }
      } else
        I.length > 0 && Pr(k, I, S, L), le && Ue.render(S), Cr(_, S, L);
      w !== null && (E.updateMultisampleRenderTarget(w), E.updateRenderTargetMipmap(w)), S.isScene === !0 && S.onAfterRender(v, S, L), tt.resetDefaultState(), U = -1, K = null, M.pop(), M.length > 0 ? (m = M[M.length - 1], W === !0 && te.setGlobalState(v.clippingPlanes, m.state.camera)) : m = null, p.pop(), p.length > 0 ? _ = p[p.length - 1] : _ = null;
    };
    function vs(S, L, N, k) {
      if (S.visible === !1) return;
      if (S.layers.test(L.layers)) {
        if (S.isGroup)
          N = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(L);
        else if (S.isLight)
          m.pushLight(S), S.castShadow && m.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || Xe.intersectsSprite(S)) {
            k && J.setFromMatrixPosition(S.matrixWorld).applyMatrix4(de);
            const he = X.update(S), Me = S.material;
            Me.visible && _.push(S, he, Me, N, J.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || Xe.intersectsObject(S))) {
          const he = X.update(S), Me = S.material;
          if (k && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), J.copy(S.boundingSphere.center)) : (he.boundingSphere === null && he.computeBoundingSphere(), J.copy(he.boundingSphere.center)), J.applyMatrix4(S.matrixWorld).applyMatrix4(de)), Array.isArray(Me)) {
            const Se = he.groups;
            for (let De = 0, Ie = Se.length; De < Ie; De++) {
              const Ae = Se[De], Je = Me[Ae.materialIndex];
              Je && Je.visible && _.push(S, he, Je, N, J.z, Ae);
            }
          } else Me.visible && _.push(S, he, Me, N, J.z, null);
        }
      }
      const ne = S.children;
      for (let he = 0, Me = ne.length; he < Me; he++)
        vs(ne[he], L, N, k);
    }
    function Cr(S, L, N, k) {
      const I = S.opaque, ne = S.transmissive, he = S.transparent;
      m.setupLightsView(N), W === !0 && te.setGlobalState(v.clippingPlanes, N), k && Ee.viewport(b.copy(k)), I.length > 0 && Di(I, L, N), ne.length > 0 && Di(ne, L, N), he.length > 0 && Di(he, L, N), Ee.buffers.depth.setTest(!0), Ee.buffers.depth.setMask(!0), Ee.buffers.color.setMask(!0), Ee.setPolygonOffset(!1);
    }
    function Pr(S, L, N, k) {
      if ((N.isScene === !0 ? N.overrideMaterial : null) !== null)
        return;
      m.state.transmissionRenderTarget[k.id] === void 0 && (m.state.transmissionRenderTarget[k.id] = new Nt(1, 1, {
        generateMipmaps: !0,
        type: we.has("EXT_color_buffer_half_float") || we.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: je.workingColorSpace
      }));
      const ne = m.state.transmissionRenderTarget[k.id], he = k.viewport || b;
      ne.setSize(he.z, he.w);
      const Me = v.getRenderTarget();
      v.setRenderTarget(ne), v.getClearColor(O), V = v.getClearAlpha(), V < 1 && v.setClearColor(16777215, 0.5), v.clear(), le && Ue.render(N);
      const Se = v.toneMapping;
      v.toneMapping = 0;
      const De = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), m.setupLightsView(k), W === !0 && te.setGlobalState(v.clippingPlanes, k), Di(S, N, k), E.updateMultisampleRenderTarget(ne), E.updateRenderTargetMipmap(ne), we.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ie = !1;
        for (let Ae = 0, Je = L.length; Ae < Je; Ae++) {
          const it = L[Ae], at = it.object, Rt = it.geometry, $e = it.material, Te = it.group;
          if ($e.side === 2 && at.layers.test(k.layers)) {
            const mt = $e.side;
            $e.side = 1, $e.needsUpdate = !0, Dr(at, N, k, Rt, $e, Te), $e.side = mt, $e.needsUpdate = !0, Ie = !0;
          }
        }
        Ie === !0 && (E.updateMultisampleRenderTarget(ne), E.updateRenderTargetMipmap(ne));
      }
      v.setRenderTarget(Me), v.setClearColor(O, V), De !== void 0 && (k.viewport = De), v.toneMapping = Se;
    }
    function Di(S, L, N) {
      const k = L.isScene === !0 ? L.overrideMaterial : null;
      for (let I = 0, ne = S.length; I < ne; I++) {
        const he = S[I], Me = he.object, Se = he.geometry, De = k === null ? he.material : k, Ie = he.group;
        Me.layers.test(N.layers) && Dr(Me, L, N, Se, De, Ie);
      }
    }
    function Dr(S, L, N, k, I, ne) {
      S.onBeforeRender(v, L, N, k, I, ne), S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), I.onBeforeRender(v, L, N, k, S, ne), I.transparent === !0 && I.side === 2 && I.forceSinglePass === !1 ? (I.side = 1, I.needsUpdate = !0, v.renderBufferDirect(N, L, k, I, S, ne), I.side = 0, I.needsUpdate = !0, v.renderBufferDirect(N, L, k, I, S, ne), I.side = 2) : v.renderBufferDirect(N, L, k, I, S, ne), S.onAfterRender(v, L, N, k, I, ne);
    }
    function Li(S, L, N) {
      L.isScene !== !0 && (L = oe);
      const k = Re.get(S), I = m.state.lights, ne = m.state.shadowsArray, he = I.state.version, Me = ye.getParameters(S, I.state, ne, L, N), Se = ye.getProgramCacheKey(Me);
      let De = k.programs;
      k.environment = S.isMeshStandardMaterial ? L.environment : null, k.fog = L.fog, k.envMap = (S.isMeshStandardMaterial ? F : x).get(S.envMap || k.environment), k.envMapRotation = k.environment !== null && S.envMap === null ? L.environmentRotation : S.envMapRotation, De === void 0 && (S.addEventListener("dispose", We), De = /* @__PURE__ */ new Map(), k.programs = De);
      let Ie = De.get(Se);
      if (Ie !== void 0) {
        if (k.currentProgram === Ie && k.lightsStateVersion === he)
          return Ir(S, Me), Ie;
      } else
        Me.uniforms = ye.getUniforms(S), S.onBeforeCompile(Me, v), Ie = ye.acquireProgram(Me, Se), De.set(Se, Ie), k.uniforms = Me.uniforms;
      const Ae = k.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ae.clippingPlanes = te.uniform), Ir(S, Me), k.needsLights = Co(S), k.lightsStateVersion = he, k.needsLights && (Ae.ambientLightColor.value = I.state.ambient, Ae.lightProbe.value = I.state.probe, Ae.directionalLights.value = I.state.directional, Ae.directionalLightShadows.value = I.state.directionalShadow, Ae.spotLights.value = I.state.spot, Ae.spotLightShadows.value = I.state.spotShadow, Ae.rectAreaLights.value = I.state.rectArea, Ae.ltc_1.value = I.state.rectAreaLTC1, Ae.ltc_2.value = I.state.rectAreaLTC2, Ae.pointLights.value = I.state.point, Ae.pointLightShadows.value = I.state.pointShadow, Ae.hemisphereLights.value = I.state.hemi, Ae.directionalShadowMap.value = I.state.directionalShadowMap, Ae.directionalShadowMatrix.value = I.state.directionalShadowMatrix, Ae.spotShadowMap.value = I.state.spotShadowMap, Ae.spotLightMatrix.value = I.state.spotLightMatrix, Ae.spotLightMap.value = I.state.spotLightMap, Ae.pointShadowMap.value = I.state.pointShadowMap, Ae.pointShadowMatrix.value = I.state.pointShadowMatrix), k.currentProgram = Ie, k.uniformsList = null, Ie;
    }
    function Lr(S) {
      if (S.uniformsList === null) {
        const L = S.currentProgram.getUniforms();
        S.uniformsList = os.seqWithValue(L.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Ir(S, L) {
      const N = Re.get(S);
      N.outputColorSpace = L.outputColorSpace, N.batching = L.batching, N.batchingColor = L.batchingColor, N.instancing = L.instancing, N.instancingColor = L.instancingColor, N.instancingMorph = L.instancingMorph, N.skinning = L.skinning, N.morphTargets = L.morphTargets, N.morphNormals = L.morphNormals, N.morphColors = L.morphColors, N.morphTargetsCount = L.morphTargetsCount, N.numClippingPlanes = L.numClippingPlanes, N.numIntersection = L.numClipIntersection, N.vertexAlphas = L.vertexAlphas, N.vertexTangents = L.vertexTangents, N.toneMapping = L.toneMapping;
    }
    function wo(S, L, N, k, I) {
      L.isScene !== !0 && (L = oe), E.resetTextureUnits();
      const ne = L.fog, he = k.isMeshStandardMaterial ? L.environment : null, Me = w === null ? v.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : ht, Se = (k.isMeshStandardMaterial ? F : x).get(k.envMap || he), De = k.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4, Ie = !!N.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Ae = !!N.morphAttributes.position, Je = !!N.morphAttributes.normal, it = !!N.morphAttributes.color;
      let at = 0;
      k.toneMapped && (w === null || w.isXRRenderTarget === !0) && (at = v.toneMapping);
      const Rt = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, $e = Rt !== void 0 ? Rt.length : 0, Te = Re.get(k), mt = m.state.lights;
      if (W === !0 && (Z === !0 || S !== K)) {
        const It = S === K && k.id === U;
        te.setState(k, S, It);
      }
      let Qe = !1;
      k.version === Te.__version ? (Te.needsLights && Te.lightsStateVersion !== mt.state.version || Te.outputColorSpace !== Me || I.isBatchedMesh && Te.batching === !1 || !I.isBatchedMesh && Te.batching === !0 || I.isBatchedMesh && Te.batchingColor === !0 && I.colorTexture === null || I.isBatchedMesh && Te.batchingColor === !1 && I.colorTexture !== null || I.isInstancedMesh && Te.instancing === !1 || !I.isInstancedMesh && Te.instancing === !0 || I.isSkinnedMesh && Te.skinning === !1 || !I.isSkinnedMesh && Te.skinning === !0 || I.isInstancedMesh && Te.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && Te.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && Te.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && Te.instancingMorph === !1 && I.morphTexture !== null || Te.envMap !== Se || k.fog === !0 && Te.fog !== ne || Te.numClippingPlanes !== void 0 && (Te.numClippingPlanes !== te.numPlanes || Te.numIntersection !== te.numIntersection) || Te.vertexAlphas !== De || Te.vertexTangents !== Ie || Te.morphTargets !== Ae || Te.morphNormals !== Je || Te.morphColors !== it || Te.toneMapping !== at || Te.morphTargetsCount !== $e) && (Qe = !0) : (Qe = !0, Te.__version = k.version);
      let kt = Te.currentProgram;
      Qe === !0 && (kt = Li(k, L, I));
      let Fn = !1, Ct = !1, xs = !1;
      const ot = kt.getUniforms(), un = Te.uniforms;
      if (Ee.useProgram(kt.program) && (Fn = !0, Ct = !0, xs = !0), k.id !== U && (U = k.id, Ct = !0), Fn || K !== S) {
        Ce.reverseDepthBuffer ? (ge.copy(S.projectionMatrix), $o(ge), Qo(ge), ot.setValue(C, "projectionMatrix", ge)) : ot.setValue(C, "projectionMatrix", S.projectionMatrix), ot.setValue(C, "viewMatrix", S.matrixWorldInverse);
        const It = ot.map.cameraPosition;
        It !== void 0 && It.setValue(C, Q.setFromMatrixPosition(S.matrixWorld)), Ce.logarithmicDepthBuffer && ot.setValue(
          C,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && ot.setValue(C, "isOrthographic", S.isOrthographicCamera === !0), K !== S && (K = S, Ct = !0, xs = !0);
      }
      if (I.isSkinnedMesh) {
        ot.setOptional(C, I, "bindMatrix"), ot.setOptional(C, I, "bindMatrixInverse");
        const It = I.skeleton;
        It && (It.boneTexture === null && It.computeBoneTexture(), ot.setValue(C, "boneTexture", It.boneTexture, E));
      }
      I.isBatchedMesh && (ot.setOptional(C, I, "batchingTexture"), ot.setValue(C, "batchingTexture", I._matricesTexture, E), ot.setOptional(C, I, "batchingIdTexture"), ot.setValue(C, "batchingIdTexture", I._indirectTexture, E), ot.setOptional(C, I, "batchingColorTexture"), I._colorsTexture !== null && ot.setValue(C, "batchingColorTexture", I._colorsTexture, E));
      const Ms = N.morphAttributes;
      if ((Ms.position !== void 0 || Ms.normal !== void 0 || Ms.color !== void 0) && Fe.update(I, N, kt), (Ct || Te.receiveShadow !== I.receiveShadow) && (Te.receiveShadow = I.receiveShadow, ot.setValue(C, "receiveShadow", I.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (un.envMap.value = Se, un.flipEnvMap.value = Se.isCubeTexture && Se.isRenderTargetTexture === !1 ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && L.environment !== null && (un.envMapIntensity.value = L.environmentIntensity), Ct && (ot.setValue(C, "toneMappingExposure", v.toneMappingExposure), Te.needsLights && Ro(un, xs), ne && k.fog === !0 && ae.refreshFogUniforms(un, ne), ae.refreshMaterialUniforms(un, k, ee, B, m.state.transmissionRenderTarget[S.id]), os.upload(C, Lr(Te), un, E)), k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (os.upload(C, Lr(Te), un, E), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && ot.setValue(C, "center", I.center), ot.setValue(C, "modelViewMatrix", I.modelViewMatrix), ot.setValue(C, "normalMatrix", I.normalMatrix), ot.setValue(C, "modelMatrix", I.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const It = k.uniformsGroups;
        for (let Ss = 0, Po = It.length; Ss < Po; Ss++) {
          const Ur = It[Ss];
          D.update(Ur, kt), D.bind(Ur, kt);
        }
      }
      return kt;
    }
    function Ro(S, L) {
      S.ambientLightColor.needsUpdate = L, S.lightProbe.needsUpdate = L, S.directionalLights.needsUpdate = L, S.directionalLightShadows.needsUpdate = L, S.pointLights.needsUpdate = L, S.pointLightShadows.needsUpdate = L, S.spotLights.needsUpdate = L, S.spotLightShadows.needsUpdate = L, S.rectAreaLights.needsUpdate = L, S.hemisphereLights.needsUpdate = L;
    }
    function Co(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return T;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(S, L, N) {
      Re.get(S.texture).__webglTexture = L, Re.get(S.depthTexture).__webglTexture = N;
      const k = Re.get(S);
      k.__hasExternalTextures = !0, k.__autoAllocateDepthBuffer = N === void 0, k.__autoAllocateDepthBuffer || we.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(S, L) {
      const N = Re.get(S);
      N.__webglFramebuffer = L, N.__useDefaultFramebuffer = L === void 0;
    }, this.setRenderTarget = function(S, L = 0, N = 0) {
      w = S, T = L, R = N;
      let k = !0, I = null, ne = !1, he = !1;
      if (S) {
        const Se = Re.get(S);
        if (Se.__useDefaultFramebuffer !== void 0)
          Ee.bindFramebuffer(C.FRAMEBUFFER, null), k = !1;
        else if (Se.__webglFramebuffer === void 0)
          E.setupRenderTarget(S);
        else if (Se.__hasExternalTextures)
          E.rebindTextures(S, Re.get(S.texture).__webglTexture, Re.get(S.depthTexture).__webglTexture);
        else if (S.depthBuffer) {
          const Ae = S.depthTexture;
          if (Se.__boundDepthTexture !== Ae) {
            if (Ae !== null && Re.has(Ae) && (S.width !== Ae.image.width || S.height !== Ae.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(S);
          }
        }
        const De = S.texture;
        (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (he = !0);
        const Ie = Re.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ie[L]) ? I = Ie[L][N] : I = Ie[L], ne = !0) : S.samples > 0 && E.useMultisampledRTT(S) === !1 ? I = Re.get(S).__webglMultisampledFramebuffer : Array.isArray(Ie) ? I = Ie[N] : I = Ie, b.copy(S.viewport), A.copy(S.scissor), G = S.scissorTest;
      } else
        b.copy(ue).multiplyScalar(ee).floor(), A.copy(xe).multiplyScalar(ee).floor(), G = Ne;
      if (Ee.bindFramebuffer(C.FRAMEBUFFER, I) && k && Ee.drawBuffers(S, I), Ee.viewport(b), Ee.scissor(A), Ee.setScissorTest(G), ne) {
        const Se = Re.get(S.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + L, Se.__webglTexture, N);
      } else if (he) {
        const Se = Re.get(S.texture), De = L || 0;
        C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, Se.__webglTexture, N || 0, De);
      }
      U = -1;
    }, this.readRenderTargetPixels = function(S, L, N, k, I, ne, he) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Me = Re.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && he !== void 0 && (Me = Me[he]), Me) {
        Ee.bindFramebuffer(C.FRAMEBUFFER, Me);
        try {
          const Se = S.texture, De = Se.format, Ie = Se.type;
          if (!Ce.textureFormatReadable(De)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ce.textureTypeReadable(Ie)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= S.width - k && N >= 0 && N <= S.height - I && C.readPixels(L, N, k, I, Be.convert(De), Be.convert(Ie), ne);
        } finally {
          const Se = w !== null ? Re.get(w).__webglFramebuffer : null;
          Ee.bindFramebuffer(C.FRAMEBUFFER, Se);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(S, L, N, k, I, ne, he) {
      if (!(S && S.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Me = Re.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && he !== void 0 && (Me = Me[he]), Me) {
        const Se = S.texture, De = Se.format, Ie = Se.type;
        if (!Ce.textureFormatReadable(De))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ce.textureTypeReadable(Ie))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (L >= 0 && L <= S.width - k && N >= 0 && N <= S.height - I) {
          Ee.bindFramebuffer(C.FRAMEBUFFER, Me);
          const Ae = C.createBuffer();
          C.bindBuffer(C.PIXEL_PACK_BUFFER, Ae), C.bufferData(C.PIXEL_PACK_BUFFER, ne.byteLength, C.STREAM_READ), C.readPixels(L, N, k, I, Be.convert(De), Be.convert(Ie), 0);
          const Je = w !== null ? Re.get(w).__webglFramebuffer : null;
          Ee.bindFramebuffer(C.FRAMEBUFFER, Je);
          const it = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return C.flush(), await Yo(C, it, 4), C.bindBuffer(C.PIXEL_PACK_BUFFER, Ae), C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, ne), C.deleteBuffer(Ae), C.deleteSync(it), ne;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(S, L = null, N = 0) {
      S.isTexture !== !0 && (as("WebGLRenderer: copyFramebufferToTexture function signature has changed."), L = arguments[0] || null, S = arguments[1]);
      const k = Math.pow(2, -N), I = Math.floor(S.image.width * k), ne = Math.floor(S.image.height * k), he = L !== null ? L.x : 0, Me = L !== null ? L.y : 0;
      E.setTexture2D(S, 0), C.copyTexSubImage2D(C.TEXTURE_2D, N, 0, 0, he, Me, I, ne), Ee.unbindTexture();
    }, this.copyTextureToTexture = function(S, L, N = null, k = null, I = 0) {
      S.isTexture !== !0 && (as("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, S = arguments[1], L = arguments[2], I = arguments[3] || 0, N = null);
      let ne, he, Me, Se, De, Ie;
      N !== null ? (ne = N.max.x - N.min.x, he = N.max.y - N.min.y, Me = N.min.x, Se = N.min.y) : (ne = S.image.width, he = S.image.height, Me = 0, Se = 0), k !== null ? (De = k.x, Ie = k.y) : (De = 0, Ie = 0);
      const Ae = Be.convert(L.format), Je = Be.convert(L.type);
      E.setTexture2D(L, 0), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, L.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, L.unpackAlignment);
      const it = C.getParameter(C.UNPACK_ROW_LENGTH), at = C.getParameter(C.UNPACK_IMAGE_HEIGHT), Rt = C.getParameter(C.UNPACK_SKIP_PIXELS), $e = C.getParameter(C.UNPACK_SKIP_ROWS), Te = C.getParameter(C.UNPACK_SKIP_IMAGES), mt = S.isCompressedTexture ? S.mipmaps[I] : S.image;
      C.pixelStorei(C.UNPACK_ROW_LENGTH, mt.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, mt.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Me), C.pixelStorei(C.UNPACK_SKIP_ROWS, Se), S.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, I, De, Ie, ne, he, Ae, Je, mt.data) : S.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, I, De, Ie, mt.width, mt.height, Ae, mt.data) : C.texSubImage2D(C.TEXTURE_2D, I, De, Ie, ne, he, Ae, Je, mt), C.pixelStorei(C.UNPACK_ROW_LENGTH, it), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, at), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Rt), C.pixelStorei(C.UNPACK_SKIP_ROWS, $e), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Te), I === 0 && L.generateMipmaps && C.generateMipmap(C.TEXTURE_2D), Ee.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, L, N = null, k = null, I = 0) {
      S.isTexture !== !0 && (as("WebGLRenderer: copyTextureToTexture3D function signature has changed."), N = arguments[0] || null, k = arguments[1] || null, S = arguments[2], L = arguments[3], I = arguments[4] || 0);
      let ne, he, Me, Se, De, Ie, Ae, Je, it;
      const at = S.isCompressedTexture ? S.mipmaps[I] : S.image;
      N !== null ? (ne = N.max.x - N.min.x, he = N.max.y - N.min.y, Me = N.max.z - N.min.z, Se = N.min.x, De = N.min.y, Ie = N.min.z) : (ne = at.width, he = at.height, Me = at.depth, Se = 0, De = 0, Ie = 0), k !== null ? (Ae = k.x, Je = k.y, it = k.z) : (Ae = 0, Je = 0, it = 0);
      const Rt = Be.convert(L.format), $e = Be.convert(L.type);
      let Te;
      if (L.isData3DTexture)
        E.setTexture3D(L, 0), Te = C.TEXTURE_3D;
      else if (L.isDataArrayTexture || L.isCompressedArrayTexture)
        E.setTexture2DArray(L, 0), Te = C.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, L.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, L.unpackAlignment);
      const mt = C.getParameter(C.UNPACK_ROW_LENGTH), Qe = C.getParameter(C.UNPACK_IMAGE_HEIGHT), kt = C.getParameter(C.UNPACK_SKIP_PIXELS), Fn = C.getParameter(C.UNPACK_SKIP_ROWS), Ct = C.getParameter(C.UNPACK_SKIP_IMAGES);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, at.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, at.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Se), C.pixelStorei(C.UNPACK_SKIP_ROWS, De), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Ie), S.isDataTexture || S.isData3DTexture ? C.texSubImage3D(Te, I, Ae, Je, it, ne, he, Me, Rt, $e, at.data) : L.isCompressedArrayTexture ? C.compressedTexSubImage3D(Te, I, Ae, Je, it, ne, he, Me, Rt, at.data) : C.texSubImage3D(Te, I, Ae, Je, it, ne, he, Me, Rt, $e, at), C.pixelStorei(C.UNPACK_ROW_LENGTH, mt), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Qe), C.pixelStorei(C.UNPACK_SKIP_PIXELS, kt), C.pixelStorei(C.UNPACK_SKIP_ROWS, Fn), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Ct), I === 0 && L.generateMipmaps && C.generateMipmap(Te), Ee.unbindTexture();
    }, this.initRenderTarget = function(S) {
      Re.get(S).__webglFramebuffer === void 0 && E.setupRenderTarget(S);
    }, this.initTexture = function(S) {
      S.isCubeTexture ? E.setTextureCube(S, 0) : S.isData3DTexture ? E.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? E.setTexture2DArray(S, 0) : E.setTexture2D(S, 0), Ee.unbindTexture();
    }, this.resetState = function() {
      T = 0, R = 0, w = null, Ee.reset(), tt.reset();
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
    t.drawingBufferColorSpace = e === _r ? "display-p3" : "srgb", t.unpackColorSpace = je.workingColorSpace === fs ? "display-p3" : "srgb";
  }
}
class Aa extends rt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new jt(), this.environmentIntensity = 1, this.environmentRotation = new jt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class of {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = Vt();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const St = /* @__PURE__ */ new P();
class Mr {
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
      St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = et(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = et(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = et(t, this.array), n = et(n, this.array), i = et(i, this.array), r = et(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
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
      return new At(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Mr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const Ea = /* @__PURE__ */ new P(), Ta = /* @__PURE__ */ new He(), wa = /* @__PURE__ */ new He(), lf = /* @__PURE__ */ new P(), Ra = /* @__PURE__ */ new Pe(), Ji = /* @__PURE__ */ new P(), Qs = /* @__PURE__ */ new $t(), Ca = /* @__PURE__ */ new Pe(), Zs = /* @__PURE__ */ new ps();
class cf extends xt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Fr, this.bindMatrix = new Pe(), this.bindMatrixInverse = new Pe(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Yt()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Ji), this.boundingBox.expandByPoint(Ji);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new $t()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Ji), this.boundingSphere.expandByPoint(Ji);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Qs.copy(this.boundingSphere), Qs.applyMatrix4(i), e.ray.intersectsSphere(Qs) !== !1 && (Ca.copy(i).invert(), Zs.copy(e.ray).applyMatrix4(Ca), !(this.boundingBox !== null && Zs.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Zs)));
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
    const e = new He(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Fr ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Do ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Ta.fromBufferAttribute(i.attributes.skinIndex, e), wa.fromBufferAttribute(i.attributes.skinWeight, e), Ea.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = wa.getComponent(r);
      if (a !== 0) {
        const o = Ta.getComponent(r);
        Ra.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(lf.copy(Ea).applyMatrix4(Ra), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class mo extends rt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class gs extends pt {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = 1003, u = 1003, d, h) {
    super(null, a, o, l, c, u, i, r, d, h), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const Pa = /* @__PURE__ */ new Pe(), hf = /* @__PURE__ */ new Pe();
class _s {
  constructor(e = [], t = []) {
    this.uuid = Vt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Pe());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Pe();
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
      const o = e[r] ? e[r].matrixWorld : hf;
      Pa.multiplyMatrices(o, t[r]), Pa.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new _s(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new gs(t, e, e, 1023, 1015);
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
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new mo()), this.bones.push(a), this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]));
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
class or extends At {
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
const Yn = /* @__PURE__ */ new Pe(), Da = /* @__PURE__ */ new Pe(), es = [], La = /* @__PURE__ */ new Yt(), uf = /* @__PURE__ */ new Pe(), mi = /* @__PURE__ */ new xt(), gi = /* @__PURE__ */ new $t();
class df extends xt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new or(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, uf);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Yt()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Yn), La.copy(e.boundingBox).applyMatrix4(Yn), this.boundingBox.union(La);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new $t()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Yn), gi.copy(e.boundingSphere).applyMatrix4(Yn), this.boundingSphere.union(gi);
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
    if (mi.geometry = this.geometry, mi.material = this.material, mi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), gi.copy(this.boundingSphere), gi.applyMatrix4(n), e.ray.intersectsSphere(gi) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Yn), Da.multiplyMatrices(n, Yn), mi.matrixWorld = Da, mi.raycast(e, es);
        for (let a = 0, o = es.length; a < o; a++) {
          const l = es[a];
          l.instanceId = r, l.object = this, t.push(l);
        }
        es.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new or(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new gs(new Float32Array(i * this.count), i, this.count, 1028, 1015));
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
class go extends Kt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new re(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const us = /* @__PURE__ */ new P(), ds = /* @__PURE__ */ new P(), Ia = /* @__PURE__ */ new Pe(), _i = /* @__PURE__ */ new ps(), ts = /* @__PURE__ */ new $t(), Js = /* @__PURE__ */ new P(), Ua = /* @__PURE__ */ new P();
class Sr extends rt {
  constructor(e = new Xt(), t = new go()) {
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
        us.fromBufferAttribute(t, i - 1), ds.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += us.distanceTo(ds);
      e.setAttribute("lineDistance", new Wt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ts.copy(n.boundingSphere), ts.applyMatrix4(i), ts.radius += r, e.ray.intersectsSphere(ts) === !1) return;
    Ia.copy(i).invert(), _i.copy(e.ray).applyMatrix4(Ia);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, h = n.attributes.position;
    if (u !== null) {
      const f = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let _ = f, m = g - 1; _ < m; _ += c) {
        const p = u.getX(_), M = u.getX(_ + 1), v = ns(this, e, _i, l, p, M);
        v && t.push(v);
      }
      if (this.isLineLoop) {
        const _ = u.getX(g - 1), m = u.getX(f), p = ns(this, e, _i, l, _, m);
        p && t.push(p);
      }
    } else {
      const f = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let _ = f, m = g - 1; _ < m; _ += c) {
        const p = ns(this, e, _i, l, _, _ + 1);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const _ = ns(this, e, _i, l, g - 1, f);
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
function ns(s, e, t, n, i, r) {
  const a = s.geometry.attributes.position;
  if (us.fromBufferAttribute(a, i), ds.fromBufferAttribute(a, r), t.distanceSqToSegment(us, ds, Js, Ua) > n) return;
  Js.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(Js);
  if (!(l < e.near || l > e.far))
    return {
      distance: l,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Ua.clone().applyMatrix4(s.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s
    };
}
const Fa = /* @__PURE__ */ new P(), Na = /* @__PURE__ */ new P();
class ff extends Sr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Fa.fromBufferAttribute(t, i), Na.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Fa.distanceTo(Na);
      e.setAttribute("lineDistance", new Wt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class pf extends Sr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class _o extends Kt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new re(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const ka = /* @__PURE__ */ new Pe(), lr = /* @__PURE__ */ new ps(), is = /* @__PURE__ */ new $t(), ss = /* @__PURE__ */ new P();
class mf extends rt {
  constructor(e = new Xt(), t = new _o()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), is.copy(n.boundingSphere), is.applyMatrix4(i), is.radius += r, e.ray.intersectsSphere(is) === !1) return;
    ka.copy(i).invert(), lr.copy(e.ray).applyMatrix4(ka);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, d = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, a.start), f = Math.min(c.count, a.start + a.count);
      for (let g = h, _ = f; g < _; g++) {
        const m = c.getX(g);
        ss.fromBufferAttribute(d, m), Ba(ss, m, l, i, e, t, this);
      }
    } else {
      const h = Math.max(0, a.start), f = Math.min(d.count, a.start + a.count);
      for (let g = h, _ = f; g < _; g++)
        ss.fromBufferAttribute(d, g), Ba(ss, g, l, i, e, t, this);
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
function Ba(s, e, t, n, i, r, a) {
  const o = lr.distanceSqToPoint(s);
  if (o < t) {
    const l = new P();
    lr.closestPointToPoint(s, l), l.applyMatrix4(n);
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
class gf extends Mt {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}
class cn extends Kt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new re(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new re(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Le(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new jt(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Qt extends cn {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Le(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return vt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
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
function rs(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function _f(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function bf(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Oa(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[a++] = s[o + l];
  }
  return i;
}
function bo(s, e, t, n) {
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
class Pi {
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
class vf extends Pi {
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
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = r * u, this._offsetNext = a * u;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = this._offsetPrev, d = this._offsetNext, h = this._weightPrev, f = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, p = -h * m + 2 * h * _ - h * g, M = (1 + h) * m + (-1.5 - 2 * h) * _ + (-0.5 + h) * g + 1, v = (-1 - f) * m + (1.5 + f) * _ + 0.5 * g, y = f * m - f * _;
    for (let T = 0; T !== o; ++T)
      r[T] = p * a[u + T] + M * a[c + T] + v * a[l + T] + y * a[d + T];
    return r;
  }
}
class vo extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = (n - t) / (i - t), d = 1 - u;
    for (let h = 0; h !== o; ++h)
      r[h] = a[c + h] * d + a[l + h] * u;
    return r;
  }
}
class xf extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Zt {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = rs(t, this.TimeBufferType), this.values = rs(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
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
        times: rs(e.times, Array),
        values: rs(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new xf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new vo(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new vf(this.times, this.values, this.getValueSize(), e);
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
    if (i !== void 0 && _f(i))
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
      const c = e[o], u = e[o + 1];
      if (c !== u && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const d = o * n, h = d - n, f = d + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[d + g];
            if (_ !== t[h + g] || _ !== t[f + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const d = o * n, h = a * n;
          for (let f = 0; f !== n; ++f)
            t[h + f] = t[d + f];
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
Zt.prototype.TimeBufferType = Float32Array;
Zt.prototype.ValueBufferType = Float32Array;
Zt.prototype.DefaultInterpolation = 2301;
class ai extends Zt {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ai.prototype.ValueTypeName = "bool";
ai.prototype.ValueBufferType = Array;
ai.prototype.DefaultInterpolation = 2300;
ai.prototype.InterpolantFactoryMethodLinear = void 0;
ai.prototype.InterpolantFactoryMethodSmooth = void 0;
class xo extends Zt {
}
xo.prototype.ValueTypeName = "color";
class ti extends Zt {
}
ti.prototype.ValueTypeName = "number";
class Mf extends Pi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let u = c + o; c !== u; c += 4)
      Lt.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class ni extends Zt {
  InterpolantFactoryMethodLinear(e) {
    return new Mf(this.times, this.values, this.getValueSize(), e);
  }
}
ni.prototype.ValueTypeName = "quaternion";
ni.prototype.InterpolantFactoryMethodSmooth = void 0;
class oi extends Zt {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
oi.prototype.ValueTypeName = "string";
oi.prototype.ValueBufferType = Array;
oi.prototype.DefaultInterpolation = 2300;
oi.prototype.InterpolantFactoryMethodLinear = void 0;
oi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ii extends Zt {
}
ii.prototype.ValueTypeName = "vector";
class cr {
  constructor(e = "", t = -1, n = [], i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Vt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(yf(n[a]).scale(i));
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
      t.push(Zt.toJSON(n[r]));
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
      const u = bf(l);
      l = Oa(l, 1, u), c = Oa(c, 1, u), !i && l[0] === 0 && (l.push(r), c.push(c[0])), a.push(
        new ti(
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
      const c = e[o], u = c.name.match(r);
      if (u && u.length > 1) {
        const d = u[1];
        let h = i[d];
        h || (i[d] = h = []), h.push(c);
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
    const n = function(d, h, f, g, _) {
      if (f.length !== 0) {
        const m = [], p = [];
        bo(f, m, p, g), m.length !== 0 && _.push(new d(h, m, p));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let d = 0; d < c.length; d++) {
      const h = c[d].keys;
      if (!(!h || h.length === 0))
        if (h[0].morphTargets) {
          const f = {};
          let g;
          for (g = 0; g < h.length; g++)
            if (h[g].morphTargets)
              for (let _ = 0; _ < h[g].morphTargets.length; _++)
                f[h[g].morphTargets[_]] = -1;
          for (const _ in f) {
            const m = [], p = [];
            for (let M = 0; M !== h[g].morphTargets.length; ++M) {
              const v = h[g];
              m.push(v.time), p.push(v.morphTarget === _ ? 1 : 0);
            }
            i.push(new ti(".morphTargetInfluence[" + _ + "]", m, p));
          }
          l = f.length * a;
        } else {
          const f = ".bones[" + t[d].name + "]";
          n(
            ii,
            f + ".position",
            h,
            "pos",
            i
          ), n(
            ni,
            f + ".quaternion",
            h,
            "rot",
            i
          ), n(
            ii,
            f + ".scale",
            h,
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
function Sf(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ti;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ii;
    case "color":
      return xo;
    case "quaternion":
      return ni;
    case "bool":
    case "boolean":
      return ai;
    case "string":
      return oi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function yf(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Sf(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    bo(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const Mn = {
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
class Af {
  constructor(e, t, n) {
    const i = this;
    let r = !1, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      o++, r === !1 && i.onStart !== void 0 && i.onStart(u, a, o), r = !0;
    }, this.itemEnd = function(u) {
      a++, i.onProgress !== void 0 && i.onProgress(u, a, o), a === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, d) {
      return c.push(u, d), this;
    }, this.removeHandler = function(u) {
      const d = c.indexOf(u);
      return d !== -1 && c.splice(d, 2), this;
    }, this.getHandler = function(u) {
      for (let d = 0, h = c.length; d < h; d += 2) {
        const f = c[d], g = c[d + 1];
        if (f.global && (f.lastIndex = 0), f.test(u))
          return g;
      }
      return null;
    };
  }
}
const Ef = /* @__PURE__ */ new Af();
class li {
  constructor(e) {
    this.manager = e !== void 0 ? e : Ef, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
li.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const an = {};
class Tf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Mo extends li {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Mn.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (an[e] !== void 0) {
      an[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    an[e] = [], an[e].push({
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
        const u = an[e], d = c.body.getReader(), h = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), f = h ? parseInt(h) : 0, g = f !== 0;
        let _ = 0;
        const m = new ReadableStream({
          start(p) {
            M();
            function M() {
              d.read().then(({ done: v, value: y }) => {
                if (v)
                  p.close();
                else {
                  _ += y.byteLength;
                  const T = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: f });
                  for (let R = 0, w = u.length; R < w; R++) {
                    const U = u[R];
                    U.onProgress && U.onProgress(T);
                  }
                  p.enqueue(y), M();
                }
              }, (v) => {
                p.error(v);
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new Tf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const d = /charset="?([^;"\s]*)"?/i.exec(o), h = d && d[1] ? d[1].toLowerCase() : void 0, f = new TextDecoder(h);
            return c.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((c) => {
      Mn.add(e, c);
      const u = an[e];
      delete an[e];
      for (let d = 0, h = u.length; d < h; d++) {
        const f = u[d];
        f.onLoad && f.onLoad(c);
      }
    }).catch((c) => {
      const u = an[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete an[e];
      for (let d = 0, h = u.length; d < h; d++) {
        const f = u[d];
        f.onError && f.onError(c);
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
class wf extends li {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Mn.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const o = Ei("img");
    function l() {
      u(), Mn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(d) {
      u(), i && i(d), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class hr extends li {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new pt(), a = new wf(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class bs extends rt {
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
const er = /* @__PURE__ */ new Pe(), Ga = /* @__PURE__ */ new P(), za = /* @__PURE__ */ new P();
class yr {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Le(512, 512), this.map = null, this.mapPass = null, this.matrix = new Pe(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new vr(), this._frameExtents = new Le(1, 1), this._viewportCount = 1, this._viewports = [
      new He(0, 0, 1, 1)
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
    Ga.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ga), za.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(za), t.updateMatrixWorld(), er.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(er), n.set(
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
    ), n.multiply(er);
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
class Rf extends yr {
  constructor() {
    super(new wt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Jn * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Cf extends bs {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new Rf();
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
const Ha = /* @__PURE__ */ new Pe(), bi = /* @__PURE__ */ new P(), tr = /* @__PURE__ */ new P();
class Pf extends yr {
  constructor() {
    super(new wt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Le(4, 2), this._viewportCount = 6, this._viewports = [
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
      new He(2, 1, 1, 1),
      // negative X
      new He(0, 1, 1, 1),
      // positive Z
      new He(3, 1, 1, 1),
      // negative Z
      new He(1, 1, 1, 1),
      // positive Y
      new He(3, 0, 1, 1),
      // negative Y
      new He(1, 0, 1, 1)
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
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), bi.setFromMatrixPosition(e.matrixWorld), n.position.copy(bi), tr.copy(n.position), tr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(tr), n.updateMatrixWorld(), i.makeTranslation(-bi.x, -bi.y, -bi.z), Ha.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ha);
  }
}
class Df extends bs {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Pf();
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
class Lf extends yr {
  constructor() {
    super(new Ci(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class ur extends bs {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.shadow = new Lf();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class If extends bs {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Ai {
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
class Uf extends li {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Mn.get(e);
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
      return Mn.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), Mn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Mn.add(e, l), r.manager.itemStart(e);
  }
}
class Ff {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Va(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = Va();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Va() {
  return performance.now();
}
class Nf {
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
const Ar = "\\[\\]\\.:\\/", kf = new RegExp("[" + Ar + "]", "g"), Er = "[^" + Ar + "]", Bf = "[^" + Ar.replace("\\.", "") + "]", Of = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Er), Gf = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Bf), zf = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Er), Hf = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Er), Vf = new RegExp(
  "^" + Of + Gf + zf + Hf + "$"
), Wf = ["material", "materials", "bones", "map"];
class jf {
  constructor(e, t, n) {
    const i = n || Ze.parseTrackName(t);
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
class Ze {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Ze.parseTrackName(t), this.node = Ze.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Ze.Composite(e, t, n) : new Ze(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(kf, "");
  }
  static parseTrackName(e) {
    const t = Vf.exec(e);
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
      Wf.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
    if (e || (e = Ze.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
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
Ze.Composite = jf;
Ze.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Ze.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Ze.prototype.GetterByBindingType = [
  Ze.prototype._getValue_direct,
  Ze.prototype._getValue_array,
  Ze.prototype._getValue_arrayElement,
  Ze.prototype._getValue_toArray
];
Ze.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Ze.prototype._setValue_direct,
    Ze.prototype._setValue_direct_setNeedsUpdate,
    Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Ze.prototype._setValue_array,
    Ze.prototype._setValue_array_setNeedsUpdate,
    Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Ze.prototype._setValue_arrayElement,
    Ze.prototype._setValue_arrayElement_setNeedsUpdate,
    Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Ze.prototype._setValue_fromArray,
    Ze.prototype._setValue_fromArray_setNeedsUpdate,
    Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Xf {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const r = t.tracks, a = r.length, o = new Array(a), l = {
      endingStart: 2400,
      endingEnd: 2400
    };
    for (let c = 0; c !== a; ++c) {
      const u = r[c].createInterpolant(null);
      o[c] = u, u.settings = l;
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
          for (let u = 0, d = l.length; u !== d; ++u)
            l[u].evaluate(a), c[u].accumulateAdditive(o);
          break;
        case 2500:
        default:
          for (let u = 0, d = l.length; u !== d; ++u)
            l[u].evaluate(a), c[u].accumulate(i, o);
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
const qf = new Float32Array(1);
class Kf extends Un {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, r = i.length, a = e._propertyBindings, o = e._interpolants, l = n.uuid, c = this._bindingsByRootAndName;
    let u = c[l];
    u === void 0 && (u = {}, c[l] = u);
    for (let d = 0; d !== r; ++d) {
      const h = i[d], f = h.name;
      let g = u[f];
      if (g !== void 0)
        ++g.referenceCount, a[d] = g;
      else {
        if (g = a[d], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, l, f));
          continue;
        }
        const _ = t && t._propertyBindings[d].binding.parsedPath;
        g = new Nf(
          Ze.create(n, f, _),
          h.ValueTypeName,
          h.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, l, f), a[d] = g;
      }
      o[d].resultBuffer = g.buffer;
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
    const r = e._clip.uuid, a = this._actionsByClip, o = a[r], l = o.knownActions, c = l[l.length - 1], u = e._byClipCacheIndex;
    c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
    const d = o.actionByRoot, h = (e._localRoot || this._root).uuid;
    delete d[h], l.length === 0 && delete a[r], this._removeInactiveBindingsForAction(e);
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
    return n === void 0 && (n = new vo(
      new Float32Array(2),
      new Float32Array(2),
      1,
      qf
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
    let a = typeof e == "string" ? cr.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, l = this._actionsByClip[o];
    let c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = 2500), l !== void 0) {
      const d = l.actionByRoot[r];
      if (d !== void 0 && d.blendMode === n)
        return d;
      c = l.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null) return null;
    const u = new Xf(this, a, t, n);
    return this._bindAction(u, c), this._addInactiveAction(u, o, r), u;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, r = typeof e == "string" ? cr.findByName(n, e) : e, a = r ? r.uuid : e, o = this._actionsByClip[a];
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
        const u = c._cacheIndex, d = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, d._cacheIndex = u, t[u] = d, t.pop(), this._removeInactiveBindingsForAction(c);
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
  revision: gr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = gr);
const So = {
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
class ci {
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
const Yf = new Ci(-1, 1, 1, -1, 0, 1);
class $f extends Xt {
  constructor() {
    super(), this.setAttribute("position", new Wt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Wt([0, 2, 0, 0, 2, 0], 2));
  }
}
const Qf = new $f();
class Tr {
  constructor(e) {
    this._mesh = new xt(Qf, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Yf);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class yo extends ci {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof Mt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Ti.clone(e.uniforms), this.material = new Mt({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Tr(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Wa extends ci {
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
class Zf extends ci {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Jf {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new Le());
      this._width = n.width, this._height = n.height, t = new Nt(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: 1016 }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new yo(So), this.copyPass.material.blending = 0, this.clock = new Ff();
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
        Wa !== void 0 && (a instanceof Wa ? n = !0 : a instanceof Zf && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Le());
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
class ep extends ci {
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
const tp = {
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new re(0) },
    defaultOpacity: { value: 0 }
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

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  )
};
class si extends ci {
  constructor(e, t, n, i) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = i, this.resolution = e !== void 0 ? new Le(e.x, e.y) : new Le(256, 256), this.clearColor = new re(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let r = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new Nt(r, a, { type: 1016 }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let d = 0; d < this.nMips; d++) {
      const h = new Nt(r, a, { type: 1016 });
      h.texture.name = "UnrealBloomPass.h" + d, h.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(h);
      const f = new Nt(r, a, { type: 1016 });
      f.texture.name = "UnrealBloomPass.v" + d, f.texture.generateMipmaps = !1, this.renderTargetsVertical.push(f), r = Math.round(r / 2), a = Math.round(a / 2);
    }
    const o = tp;
    this.highPassUniforms = Ti.clone(o.uniforms), this.highPassUniforms.luminosityThreshold.value = i, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new Mt({
      uniforms: this.highPassUniforms,
      vertexShader: o.vertexShader,
      fragmentShader: o.fragmentShader
    }), this.separableBlurMaterials = [];
    const l = [3, 5, 7, 9, 11];
    r = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
    for (let d = 0; d < this.nMips; d++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])), this.separableBlurMaterials[d].uniforms.invSize.value = new Le(1 / r, 1 / a), r = Math.round(r / 2), a = Math.round(a / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1), new P(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const u = So;
    this.copyUniforms = Ti.clone(u.uniforms), this.blendMaterial = new Mt({
      uniforms: this.copyUniforms,
      vertexShader: u.vertexShader,
      fragmentShader: u.fragmentShader,
      blending: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new re(), this.oldClearAlpha = 1, this.basic = new xn(), this.fsQuad = new Tr(null);
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++)
      this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2), i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let r = 0; r < this.nMips; r++)
      this.renderTargetsHorizontal[r].setSize(n, i), this.renderTargetsVertical[r].setSize(n, i), this.separableBlurMaterials[r].uniforms.invSize.value = new Le(1 / n, 1 / i), n = Math.round(n / 2), i = Math.round(i / 2);
  }
  render(e, t, n, i, r) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const a = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), r && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let o = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      this.fsQuad.material = this.separableBlurMaterials[l], this.separableBlurMaterials[l].uniforms.colorTexture.value = o.texture, this.separableBlurMaterials[l].uniforms.direction.value = si.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l].texture, this.separableBlurMaterials[l].uniforms.direction.value = si.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), o = this.renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, r && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = a;
  }
  getSeperableBlurMaterial(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(0.39894 * Math.exp(-0.5 * n * n / (e * e)) / e);
    return new Mt({
      defines: {
        KERNEL_RADIUS: e
      },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new Le(0.5, 0.5) },
        // inverse texture size
        direction: { value: new Le(0.5, 0.5) },
        gaussianCoefficients: { value: t }
        // precomputed Gaussian coefficients
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(e) {
    return new Mt({
      defines: {
        NUM_MIPS: e
      },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
    });
  }
}
si.BlurDirectionX = new Le(1, 0);
si.BlurDirectionY = new Le(0, 1);
const np = {
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
class ip extends ci {
  constructor() {
    super();
    const e = np;
    this.uniforms = Ti.clone(e.uniforms), this.material = new gf({
      name: e.name,
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    }), this.fsQuad = new Tr(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, n) {
    this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, je.getTransfer(this._outputColorSpace) === nt && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === 7 && (this.material.defines.NEUTRAL_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
const on = {
  // Renderer
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
  // Bloom (UnrealBloomPass: strength, radius, threshold)
  bloom: {
    radius: 0.2,
    threshold: 0.9,
    emissiveBoost: 0.5
  },
  // Environment Map
  envMapColor: "#6e6b68",
  // LiftGammaGain
  liftGammaGain: {
    invGamma: [1 / 1.02, 1 / 1.02, 1 / 1.02],
    gain: [1.1, 1.1, 1.1]
  },
  avatar: {
    rotationY: -5
    // Y축 회전 (도)
  }
};
function ja(s, e) {
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
class sp extends li {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new cp(t);
    }), this.register(function(t) {
      return new hp(t);
    }), this.register(function(t) {
      return new vp(t);
    }), this.register(function(t) {
      return new xp(t);
    }), this.register(function(t) {
      return new Mp(t);
    }), this.register(function(t) {
      return new dp(t);
    }), this.register(function(t) {
      return new fp(t);
    }), this.register(function(t) {
      return new pp(t);
    }), this.register(function(t) {
      return new mp(t);
    }), this.register(function(t) {
      return new lp(t);
    }), this.register(function(t) {
      return new gp(t);
    }), this.register(function(t) {
      return new up(t);
    }), this.register(function(t) {
      return new bp(t);
    }), this.register(function(t) {
      return new _p(t);
    }), this.register(function(t) {
      return new ap(t);
    }), this.register(function(t) {
      return new Sp(t);
    }), this.register(function(t) {
      return new yp(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const c = Ai.extractUrlBase(e);
      a = Ai.resolveURL(c, this.path);
    } else
      a = Ai.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Mo(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, a, function(u) {
          t(u), r.manager.itemEnd(e);
        }, o);
      } catch (u) {
        o(u);
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
      if (l.decode(new Uint8Array(e, 0, 4)) === Ao) {
        try {
          a[ze.KHR_BINARY_GLTF] = new Ap(e);
        } catch (d) {
          i && i(d);
          return;
        }
        r = JSON.parse(a[ze.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(l.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new kp(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const d = this.pluginCallbacks[u](c);
      d.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[d.name] = d, a[d.name] = !0;
    }
    if (r.extensionsUsed)
      for (let u = 0; u < r.extensionsUsed.length; ++u) {
        const d = r.extensionsUsed[u], h = r.extensionsRequired || [];
        switch (d) {
          case ze.KHR_MATERIALS_UNLIT:
            a[d] = new op();
            break;
          case ze.KHR_DRACO_MESH_COMPRESSION:
            a[d] = new Ep(r, this.dracoLoader);
            break;
          case ze.KHR_TEXTURE_TRANSFORM:
            a[d] = new Tp();
            break;
          case ze.KHR_MESH_QUANTIZATION:
            a[d] = new wp();
            break;
          default:
            h.indexOf(d) >= 0 && o[d] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + d + '".');
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
function rp() {
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
const ze = {
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
class ap {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const u = new re(16777215);
    l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], ht);
    const d = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new ur(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Df(u), c.distance = d;
        break;
      case "spot":
        c = new Cf(u), c.distance = d, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, ln(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
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
class op {
  constructor() {
    this.name = ze.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return xn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new re(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], ht), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, gt));
    }
    return Promise.all(i);
  }
}
class lp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class cp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Le(o, o);
    }
    return Promise.all(r);
  }
}
class hp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class up {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class dp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
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
      t.sheenColor.setRGB(o[0], o[1], o[2], ht);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, gt)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class fp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class pp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new re().setRGB(o[0], o[1], o[2], ht), Promise.all(r);
  }
}
class mp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class gp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new re().setRGB(o[0], o[1], o[2], ht), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, gt)), Promise.all(r);
  }
}
class _p {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class bp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Qt;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class vp {
  constructor(e) {
    this.parser = e, this.name = ze.KHR_TEXTURE_BASISU;
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
class xp {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null;
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
class Mp {
  constructor(e) {
    this.parser = e, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null;
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
class Sp {
  constructor(e) {
    this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = e;
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
        const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, d = i.byteStride, h = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(u, d, h, i.mode, i.filter).then(function(f) {
          return f.buffer;
        }) : a.ready.then(function() {
          const f = new ArrayBuffer(u * d);
          return a.decodeGltfBuffer(new Uint8Array(f), u, d, h, i.mode, i.filter), f;
        });
      });
    } else
      return null;
  }
}
class yp {
  constructor(e) {
    this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== Ft.TRIANGLES && c.mode !== Ft.TRIANGLE_STRIP && c.mode !== Ft.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a)
      o.push(this.parser.getDependency("accessor", a[c]).then((u) => (l[c] = u, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const u = c.pop(), d = u.isGroup ? u.children : [u], h = c[0].count, f = [];
      for (const g of d) {
        const _ = new Pe(), m = new P(), p = new Lt(), M = new P(1, 1, 1), v = new df(g.geometry, g.material, h);
        for (let y = 0; y < h; y++)
          l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, y), l.ROTATION && p.fromBufferAttribute(l.ROTATION, y), l.SCALE && M.fromBufferAttribute(l.SCALE, y), v.setMatrixAt(y, _.compose(m, p, M));
        for (const y in l)
          if (y === "_COLOR_0") {
            const T = l[y];
            v.instanceColor = new or(T.array, T.itemSize, T.normalized);
          } else y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && g.geometry.setAttribute(y, l[y]);
        rt.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), f.push(v);
      }
      return u.isGroup ? (u.clear(), u.add(...f), u) : f[0];
    }));
  }
}
const Ao = "glTF", vi = 12, Xa = { JSON: 1313821514, BIN: 5130562 };
class Ap {
  constructor(e) {
    this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, vi), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Ao)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - vi, r = new DataView(e, vi);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const l = r.getUint32(a, !0);
      if (a += 4, l === Xa.JSON) {
        const c = new Uint8Array(e, vi + a, o);
        this.content = n.decode(c);
      } else if (l === Xa.BIN) {
        const c = vi + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ep {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const u in a) {
      const d = dr[u] || u.toLowerCase();
      o[d] = a[u];
    }
    for (const u in e.attributes) {
      const d = dr[u] || u.toLowerCase();
      if (a[u] !== void 0) {
        const h = n.accessors[e.attributes[u]], f = Zn[h.componentType];
        c[d] = f.name, l[d] = h.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(d, h) {
        i.decodeDracoFile(u, function(f) {
          for (const g in f.attributes) {
            const _ = f.attributes[g], m = l[g];
            m !== void 0 && (_.normalized = m);
          }
          d(f);
        }, o, c, ht, h);
      });
    });
  }
}
class Tp {
  constructor() {
    this.name = ze.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class wp {
  constructor() {
    this.name = ze.KHR_MESH_QUANTIZATION;
  }
}
class Eo extends Pi {
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
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, u = i - t, d = (n - t) / u, h = d * d, f = h * d, g = e * c, _ = g - c, m = -2 * f + 3 * h, p = f - h, M = 1 - m, v = p - h + d;
    for (let y = 0; y !== o; y++) {
      const T = a[_ + y + o], R = a[_ + y + l] * u, w = a[g + y + o], U = a[g + y] * u;
      r[y] = M * T + v * R + m * w + p * U;
    }
    return r;
  }
}
const Rp = new Lt();
class Cp extends Eo {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return Rp.fromArray(r).normalize().toArray(r), r;
  }
}
const Ft = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Zn = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, qa = {
  9728: 1003,
  9729: 1006,
  9984: 1004,
  9985: 1007,
  9986: 1005,
  9987: 1008
}, Ka = {
  33071: 1001,
  33648: 1002,
  10497: 1e3
}, nr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, dr = {
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
}, bn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Pp = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: 2301,
  STEP: 2300
}, ir = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Dp(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new cn({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), s.DefaultMaterial;
}
function Cn(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function ln(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Lp(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const d = e[c];
    if (d.POSITION !== void 0 && (n = !0), d.NORMAL !== void 0 && (i = !0), d.COLOR_0 !== void 0 && (r = !0), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [], o = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const d = e[c];
    if (n) {
      const h = d.POSITION !== void 0 ? t.getDependency("accessor", d.POSITION) : s.attributes.position;
      a.push(h);
    }
    if (i) {
      const h = d.NORMAL !== void 0 ? t.getDependency("accessor", d.NORMAL) : s.attributes.normal;
      o.push(h);
    }
    if (r) {
      const h = d.COLOR_0 !== void 0 ? t.getDependency("accessor", d.COLOR_0) : s.attributes.color;
      l.push(h);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], d = c[1], h = c[2];
    return n && (s.morphAttributes.position = u), i && (s.morphAttributes.normal = d), r && (s.morphAttributes.color = h), s.morphTargetsRelative = !0, s;
  });
}
function Ip(s, e) {
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
function Up(s) {
  let e;
  const t = s.extensions && s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + sr(t.attributes) : e = s.indices + ":" + sr(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + sr(s.targets[n]);
  return e;
}
function sr(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function fr(s) {
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
function Fp(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Np = new Pe();
class kp {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new rp(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, r = !1, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && a < 98 ? this.textureLoader = new hr(this.options.manager) : this.textureLoader = new Uf(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Mo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      return Cn(r, o, i), ln(o, i), Promise.all(n._invokeAll(function(l) {
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
      for (const [c, u] of a.children.entries())
        r(u, o.children[c]);
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
      return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, a) {
      n.load(Ai.resolveURL(t.uri, i.path), r, void 0, function() {
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
      const a = nr[i.type], o = Zn[i.componentType], l = i.normalized === !0, c = new o(i.count * a);
      return Promise.resolve(new At(c, a, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], l = nr[i.type], c = Zn[i.componentType], u = c.BYTES_PER_ELEMENT, d = u * l, h = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, m;
      if (f && f !== d) {
        const p = Math.floor(h / f), M = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let v = t.cache.get(M);
        v || (_ = new c(o, p * f, i.count * f / u), v = new of(_, f / u), t.cache.add(M, v)), m = new Mr(v, l, h % f / u, g);
      } else
        o === null ? _ = new c(i.count * l) : _ = new c(o, h, i.count * l), m = new At(_, l, g);
      if (i.sparse !== void 0) {
        const p = nr.SCALAR, M = Zn[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, y = i.sparse.values.byteOffset || 0, T = new M(a[1], v, i.sparse.count * p), R = new c(a[2], y, i.sparse.count * l);
        o !== null && (m = new At(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let w = 0, U = T.length; w < U; w++) {
          const K = T[w];
          if (m.setX(K, R[w * l]), l >= 2 && m.setY(K, R[w * l + 1]), l >= 3 && m.setZ(K, R[w * l + 2]), l >= 4 && m.setW(K, R[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
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
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = a.name || o.name || "", u.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (u.name = o.uri);
      const h = (r.samplers || {})[a.sampler] || {};
      return u.magFilter = qa[h.magFilter] || 1006, u.minFilter = qa[h.minFilter] || 1008, u.wrapS = Ka[h.wrapS] || 1e3, u.wrapT = Ka[h.wrapT] || 1e3, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((d) => d.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function(d) {
        c = !0;
        const h = new Blob([d], { type: a.mimeType });
        return l = o.createObjectURL(h), l;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(d) {
      return new Promise(function(h, f) {
        let g = h;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const m = new pt(_);
          m.needsUpdate = !0, h(m);
        }), t.load(Ai.resolveURL(d, r.path), g, void 0, f);
      });
    }).then(function(d) {
      return c === !0 && o.revokeObjectURL(l), ln(d, a), d.userData.mimeType = a.mimeType || Fp(a.uri), d;
    }).catch(function(d) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), d;
    });
    return this.sourceCache[e] = u, u;
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
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[ze.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = r.associations.get(a);
          a = r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, l);
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
      l || (l = new _o(), Kt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new go(), Kt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
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
    return cn;
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
    if (l[ze.KHR_MATERIALS_UNLIT]) {
      const d = i[ze.KHR_MATERIALS_UNLIT];
      a = d.getMaterialType(), c.push(d.extendParams(o, r, t));
    } else {
      const d = r.pbrMetallicRoughness || {};
      if (o.color = new re(1, 1, 1), o.opacity = 1, Array.isArray(d.baseColorFactor)) {
        const h = d.baseColorFactor;
        o.color.setRGB(h[0], h[1], h[2], ht), o.opacity = h[3];
      }
      d.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", d.baseColorTexture, gt)), o.metalness = d.metallicFactor !== void 0 ? d.metallicFactor : 1, o.roughness = d.roughnessFactor !== void 0 ? d.roughnessFactor : 1, d.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", d.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", d.metallicRoughnessTexture))), a = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === !0 && (o.side = 2);
    const u = r.alphaMode || ir.OPAQUE;
    if (u === ir.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, u === ir.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== xn && (c.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new Le(1, 1), r.normalTexture.scale !== void 0)) {
      const d = r.normalTexture.scale;
      o.normalScale.set(d, d);
    }
    if (r.occlusionTexture !== void 0 && a !== xn && (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== xn) {
      const d = r.emissiveFactor;
      o.emissive = new re().setRGB(d[0], d[1], d[2], ht);
    }
    return r.emissiveTexture !== void 0 && a !== xn && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, gt)), Promise.all(c).then(function() {
      const d = new a(o);
      return r.name && (d.name = r.name), ln(d, r), t.associations.set(d, { materials: e }), r.extensions && Cn(i, d, r), d;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Ze.sanitizeNodeName(e || "");
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
      return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return Ya(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], u = Up(c), d = i[u];
      if (d)
        a.push(d.promise);
      else {
        let h;
        c.extensions && c.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? h = r(c) : h = Ya(new Xt(), c, t), i[u] = { primitive: c, promise: h }, a.push(h);
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
      const u = a[l].material === void 0 ? Dp(this.cache) : this.getDependency("material", a[l].material);
      o.push(u);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], d = [];
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f], m = a[f];
        let p;
        const M = c[f];
        if (m.mode === Ft.TRIANGLES || m.mode === Ft.TRIANGLE_STRIP || m.mode === Ft.TRIANGLE_FAN || m.mode === void 0)
          p = r.isSkinnedMesh === !0 ? new cf(_, M) : new xt(_, M), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), m.mode === Ft.TRIANGLE_STRIP ? p.geometry = ja(p.geometry, 1) : m.mode === Ft.TRIANGLE_FAN && (p.geometry = ja(p.geometry, 2));
        else if (m.mode === Ft.LINES)
          p = new ff(_, M);
        else if (m.mode === Ft.LINE_STRIP)
          p = new Sr(_, M);
        else if (m.mode === Ft.LINE_LOOP)
          p = new pf(_, M);
        else if (m.mode === Ft.POINTS)
          p = new mf(_, M);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && Ip(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), ln(p, r), m.extensions && Cn(i, p, m), t.assignFinalMaterial(p), d.push(p);
      }
      for (let f = 0, g = d.length; f < g; f++)
        t.associations.set(d[f], {
          meshes: e,
          primitives: f
        });
      if (d.length === 1)
        return r.extensions && Cn(i, d[0], r), d[0];
      const h = new hn();
      r.extensions && Cn(i, h, r), t.associations.set(h, { meshes: e });
      for (let f = 0, g = d.length; f < g; f++)
        h.add(d[f]);
      return h;
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
    return n.type === "perspective" ? t = new wt(yi.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ci(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ln(t, n), Promise.resolve(t);
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
      for (let c = 0, u = a.length; c < u; c++) {
        const d = a[c];
        if (d) {
          o.push(d);
          const h = new Pe();
          r !== null && h.fromArray(r.array, c * 16), l.push(h);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new _s(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], u = [];
    for (let d = 0, h = i.channels.length; d < h; d++) {
      const f = i.channels[d], g = i.samplers[f.sampler], _ = f.target, m = _.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, M = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", p)), l.push(this.getDependency("accessor", M)), c.push(g), u.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(d) {
      const h = d[0], f = d[1], g = d[2], _ = d[3], m = d[4], p = [];
      for (let M = 0, v = h.length; M < v; M++) {
        const y = h[M], T = f[M], R = g[M], w = _[M], U = m[M];
        if (y === void 0) continue;
        y.updateMatrix && y.updateMatrix();
        const K = n._createAnimationTracks(y, T, R, w, U);
        if (K)
          for (let b = 0; b < K.length; b++)
            p.push(K[b]);
      }
      return new cr(r, void 0, p);
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
    for (let c = 0, u = o.length; c < u; c++)
      a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(a),
      l
    ]).then(function(c) {
      const u = c[0], d = c[1], h = c[2];
      h !== null && u.traverse(function(f) {
        f.isSkinnedMesh && f.bind(h, Np);
      });
      for (let f = 0, g = d.length; f < g; f++)
        u.add(d[f]);
      return u;
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
      let u;
      if (r.isBone === !0 ? u = new mo() : c.length > 1 ? u = new hn() : c.length === 1 ? u = c[0] : u = new rt(), u !== c[0])
        for (let d = 0, h = c.length; d < h; d++)
          u.add(c[d]);
      if (r.name && (u.userData.name = r.name, u.name = a), ln(u, r), r.extensions && Cn(n, u, r), r.matrix !== void 0) {
        const d = new Pe();
        d.fromArray(r.matrix), u.applyMatrix4(d);
      } else
        r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
      return i.associations.has(u) || i.associations.set(u, {}), i.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new hn();
    n.name && (r.name = i.createUniqueName(n.name)), ln(r, n), n.extensions && Cn(t, r, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let u = 0, d = l.length; u < d; u++)
        r.add(l[u]);
      const c = (u) => {
        const d = /* @__PURE__ */ new Map();
        for (const [h, f] of i.associations)
          (h instanceof Kt || h instanceof pt) && d.set(h, f);
        return u.traverse((h) => {
          const f = i.associations.get(h);
          f != null && d.set(h, f);
        }), d;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    bn[r.path] === bn.weights ? e.traverse(function(h) {
      h.morphTargetInfluences && l.push(h.name ? h.name : h.uuid);
    }) : l.push(o);
    let c;
    switch (bn[r.path]) {
      case bn.weights:
        c = ti;
        break;
      case bn.rotation:
        c = ni;
        break;
      case bn.position:
      case bn.scale:
        c = ii;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = ti;
            break;
          case 2:
          case 3:
          default:
            c = ii;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? Pp[i.interpolation] : 2301, d = this._getArrayFromAccessor(n);
    for (let h = 0, f = l.length; h < f; h++) {
      const g = new c(
        l[h] + "." + bn[r.path],
        t.array,
        d,
        u
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = fr(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ni ? Cp : Eo;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Bp(s, e, t) {
  const n = e.attributes, i = new Yt();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new P(l[0], l[1], l[2]),
        new P(c[0], c[1], c[2])
      ), o.normalized) {
        const u = fr(Zn[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
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
    for (let c = 0, u = r.length; c < u; c++) {
      const d = r[c];
      if (d.POSITION !== void 0) {
        const h = t.json.accessors[d.POSITION], f = h.min, g = h.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), h.normalized) {
            const _ = fr(Zn[h.componentType]);
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
  const a = new $t();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = a;
}
function Ya(s, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      s.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = dr[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return je.workingColorSpace !== ht && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`), ln(s, e), Bp(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Lp(s, e.targets, t) : s;
  });
}
var Op = function() {
  var s = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : s, r, a = WebAssembly.instantiate(o(i), {}).then(function(p) {
    r = p.instance, r.exports.__wasm_call_ctors();
  });
  function o(p) {
    for (var M = new Uint8Array(p.length), v = 0; v < p.length; ++v) {
      var y = p.charCodeAt(v);
      M[v] = y > 96 ? y - 97 : y > 64 ? y - 39 : y + 4;
    }
    for (var T = 0, v = 0; v < p.length; ++v)
      M[T++] = M[v] < 60 ? n[M[v]] : (M[v] - 60) * 64 + M[++v];
    return M.buffer.slice(0, T);
  }
  function l(p, M, v, y, T, R) {
    var w = r.exports.sbrk, U = v + 3 & -4, K = w(U * y), b = w(T.length), A = new Uint8Array(r.exports.memory.buffer);
    A.set(T, b);
    var G = p(K, v, y, b, T.length);
    if (G == 0 && R && R(K, U, y), M.set(A.subarray(K, K + v * y)), w(K - w(0)), G != 0)
      throw new Error("Malformed buffer data: " + G);
  }
  var c = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, u = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, d = [], h = 0;
  function f(p) {
    var M = {
      object: new Worker(p),
      pending: 0,
      requests: {}
    };
    return M.object.onmessage = function(v) {
      var y = v.data;
      M.pending -= y.count, M.requests[y.id][y.action](y.value), delete M.requests[y.id];
    }, M;
  }
  function g(p) {
    for (var M = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + l.toString() + m.toString(), v = new Blob([M], { type: "text/javascript" }), y = URL.createObjectURL(v), T = 0; T < p; ++T)
      d[T] = f(y);
    URL.revokeObjectURL(y);
  }
  function _(p, M, v, y, T) {
    for (var R = d[0], w = 1; w < d.length; ++w)
      d[w].pending < R.pending && (R = d[w]);
    return new Promise(function(U, K) {
      var b = new Uint8Array(v), A = h++;
      R.pending += p, R.requests[A] = { resolve: U, reject: K }, R.object.postMessage({ id: A, count: p, size: M, source: b, mode: y, filter: T }, [b.buffer]);
    });
  }
  function m(p) {
    a.then(function() {
      var M = p.data;
      try {
        var v = new Uint8Array(M.count * M.size);
        l(r.exports[M.mode], v, M.count, M.size, M.source, r.exports[M.filter]), self.postMessage({ id: M.id, count: M.count, action: "resolve", value: v }, [v.buffer]);
      } catch (y) {
        self.postMessage({ id: M.id, count: M.count, action: "reject", value: y });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(p) {
      g(p);
    },
    decodeVertexBuffer: function(p, M, v, y, T) {
      l(r.exports.meshopt_decodeVertexBuffer, p, M, v, y, r.exports[c[T]]);
    },
    decodeIndexBuffer: function(p, M, v, y) {
      l(r.exports.meshopt_decodeIndexBuffer, p, M, v, y);
    },
    decodeIndexSequence: function(p, M, v, y) {
      l(r.exports.meshopt_decodeIndexSequence, p, M, v, y);
    },
    decodeGltfBuffer: function(p, M, v, y, T, R) {
      l(r.exports[u[T]], p, M, v, y, r.exports[c[R]]);
    },
    decodeGltfBufferAsync: function(p, M, v, y, T) {
      return d.length > 0 ? _(p, M, v, u[y], c[T]) : a.then(function() {
        var R = new Uint8Array(p * M);
        return l(r.exports[u[y]], R, p, M, v, r.exports[c[T]]), R;
      });
    }
  };
}();
function Gp(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (l, c, u) => new re(l, c, u).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = !!e.emissiveMap, a = {
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
    rimColor: { value: e.rimColor ?? n(0.447, 0.565, 0.671) },
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {},
    ...r ? {
      emissiveMap: { value: e.emissiveMap },
      emissiveStrength: { value: e.emissiveStrength ?? 1 },
      emissiveTintColor: { value: e.emissiveTintColor ?? new re(1, 1, 1) }
    } : {},
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.onBeforeCompile = (l) => {
    for (const [_, m] of Object.entries(a))
      l.uniforms[_] = m;
    const d = (
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
            varying vec3 vObjPosition;
            ${i ? (
        /* glsl */
        `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
      ) : ""}
            ${r ? (
        /* glsl */
        `
            uniform sampler2D emissiveMap;
            uniform float emissiveStrength;
            uniform vec3 emissiveTintColor;
        `
      ) : ""}
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <common>",
      d + `
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
` + h
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
      const m = (
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
` + m
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
            ${r ? (
        /* glsl */
        `
            {
                // OZ_PBR_Mask2Tint_Emissive: emissiveMap.rgb + (tintColor * emissiveMap.a * strength)
                vec4 eSample = texture2D(emissiveMap, vMapUv);
                vec3 glow = emissiveTintColor * eSample.a * emissiveStrength;
                vec3 emTotal = eSample.rgb + glow;
                totalEmissiveRadiance += emTotal;

                // emissive 강한 픽셀 → PBR 라이팅 억제 (bloom 색상 유지)
                float emMask = clamp(length(emTotal) * 0.5, 0.0, 1.0);
                diffuseColor.rgb *= (1.0 - emMask);
            }
        `
      ) : ""}
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + g
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = ${r ? "1.0" : "0.0"};`
    );
  };
  const o = "OZMask2Tint" + (i ? "_PBR" : "") + (r ? "_E" : "");
  return t.customProgramCacheKey = () => o, t.userData.uniforms = a, t;
}
function zp(s) {
  return s.userData.decalSlots ?? null;
}
function Hp(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (h, f, g) => new re(h, f, g).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = e.decalSlots ?? 0, a = r > 0, o = [], l = {};
  let c = null;
  if (a) {
    const h = new Uint8Array([0, 0, 0, 0]);
    c = new gs(h, 1, 1, 1023), c.needsUpdate = !0;
  }
  for (let h = 0; h < r; h++) {
    const f = {
      enabled: { value: 0 },
      texture: { value: c },
      color: { value: new He(1, 1, 1, 1) },
      invMatrix: { value: new Pe() },
      useSkinColor: { value: 0 }
    };
    o.push(f), l[`decalEnabled${h}`] = f.enabled, l[`decalTex${h}`] = f.texture, l[`decalColor${h}`] = f.color, l[`decalInvMatrix${h}`] = f.invMatrix, l[`decalUseSkinColor${h}`] = f.useSkinColor;
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
    ...l
  };
  t.onBeforeCompile = (h) => {
    for (const [T, R] of Object.entries(u))
      h.uniforms[T] = R;
    const f = i ? (
      /* glsl */
      `
            uniform sampler2D pbrMaskMap;
            uniform float metallicIntensity;
            uniform float smoothnessIntensity;
            uniform float aoIntensity;
        `
    ) : "";
    let g = "";
    if (a) {
      g = `varying vec3 vWorldPosition;
`;
      for (let T = 0; T < r; T++)
        g += `
            uniform float decalEnabled${T};
            uniform sampler2D decalTex${T};
            uniform vec4 decalColor${T};
            uniform mat4 decalInvMatrix${T};
            uniform float decalUseSkinColor${T};
                `;
    }
    const _ = (
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
            ${f}
            ${g}
        `
    );
    h.fragmentShader = h.fragmentShader.replace(
      "#include <common>",
      _ + `
#include <common>`
    );
    let m = `varying vec3 vObjPosition;
`;
    a && (m += `varying vec3 vWorldPosition;
`), h.vertexShader = h.vertexShader.replace(
      "#include <common>",
      m + "#include <common>"
    );
    let p = `#include <skinning_vertex>
vObjPosition = transformed;`;
    a && (p += `
vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`), h.vertexShader = h.vertexShader.replace(
      "#include <skinning_vertex>",
      p
    );
    const M = (
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
    let v = "";
    if (a)
      for (let T = 0; T < r; T++)
        v += /* glsl */
        `
            if (decalEnabled${T} > 0.5) {
                vec4 dLocal${T} = decalInvMatrix${T} * vec4(vWorldPosition, 1.0);
                vec3 dUv${T} = dLocal${T}.xyz / dLocal${T}.w;
                if (dUv${T}.x >= 0.0 && dUv${T}.x <= 1.0 &&
                    dUv${T}.y >= 0.0 && dUv${T}.y <= 1.0 &&
                    dUv${T}.z >= 0.0 && dUv${T}.z <= 1.0) {
                    vec2 decalUv${T} = vec2(1.0 - dUv${T}.x, 1.0 - dUv${T}.y);
                    vec4 dSample${T} = texture2D(decalTex${T}, decalUv${T});
                    float dAlpha${T} = dSample${T}.a * decalColor${T}.a;
                    vec3 dTexColor${T} = dSample${T}.rgb;

                    if (decalUseSkinColor${T} > 0.5) {
                        // OZ_Decal_Skin: Blend(base=skinColor, blend=tex, mode=Multiply)
                        vec3 dResult${T} = tintColorR * dTexColor${T};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dResult${T}, dAlpha${T});
                    } else {
                        // OZ_Decal_Color: Blend(base=_Color, blend=tex, mode=HardLight)
                        vec3 dBase${T} = decalColor${T}.rgb;
                        vec3 dBlend${T} = dTexColor${T};
                        vec3 dHL1_${T} = 1.0 - 2.0 * (1.0 - dBase${T}) * (1.0 - dBlend${T});
                        vec3 dHL2_${T} = 2.0 * dBase${T} * dBlend${T};
                        vec3 dStep${T} = step(dBlend${T}, vec3(0.5));
                        vec3 dHardLight${T} = dHL2_${T} * dStep${T} + (1.0 - dStep${T}) * dHL1_${T};
                        diffuseColor.rgb = mix(diffuseColor.rgb, dHardLight${T}, dAlpha${T});
                    }
                }
            }
                `;
    if (h.fragmentShader = h.fragmentShader.replace(
      "#include <map_fragment>",
      `#include <map_fragment>
` + M + v
    ), i) {
      const T = (
        /* glsl */
        `
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
            `
      );
      h.fragmentShader = h.fragmentShader.replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
` + T
      );
      const R = (
        /* glsl */
        `
                {
                    vec4 pbrMask2 = texture2D(pbrMaskMap, vMapUv);
                    float smoothness = (1.0 - pbrMask2.a) * smoothnessIntensity;
                    roughnessFactor = 1.0 - smoothness;
                }
            `
      );
      h.fragmentShader = h.fragmentShader.replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
` + R
      );
      const w = (
        /* glsl */
        `
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
            `
      );
      h.fragmentShader = h.fragmentShader.replace(
        "#include <aomap_fragment>",
        `#include <aomap_fragment>
` + w
      );
    }
    const y = (
      /* glsl */
      `
            {
                vec3 viewDir = normalize(vViewPosition);
                float NdotV = dot(normal, viewDir);
                float fresnel = 1.0 - clamp(NdotV, 0.0, 1.0);
                float rim = pow(fresnel, rimEdgePower) * rimPower;
                totalEmissiveRadiance += rim * rimColor;
            }
        `
    );
    h.fragmentShader = h.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + y
    ), h.fragmentShader = h.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 0.0;`
    );
  };
  const d = a ? `_D${r}` : "";
  return t.customProgramCacheKey = () => (i ? "OZMaskTint_PBR" : "OZMaskTint") + d, t.userData.uniforms = u, a && (t.userData.decalSlots = o), t;
}
function Vp(s, e) {
  const t = s.clone(), n = !!e.blend, i = n || e.enableSecondaryLobe === !1, r = (l, c, u) => new re(l, c, u).convertSRGBToLinear(), a = {
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
    hairSpecIntensity: { value: 1 },
    hairGeomNormalTBN: { value: 0 },
    hairGaussianSpec: { value: 0 },
    hairSpecAAScale: { value: 0 },
    volumeMaskEnable: { value: 0 },
    volumeMaskCenter: { value: e.maskCenter ?? new P(0, 0, 0) },
    volumeMaskRadius: { value: e.maskRadius ?? 1 }
  };
  t.color.set(1, 1, 1), t.envMapIntensity = 0, t.side = e.doubleSided !== !1 ? 2 : 0, e.blend && (t.transparent = !0, t.depthWrite = !1, t.premultipliedAlpha = !0, t.alphaTest = 0);
  const o = e.normalInten ?? 1;
  if (e.normalMap)
    t.normalMap = e.normalMap, t.normalScale.set(o, o);
  else if (!t.normalMap) {
    const l = new Uint8Array([128, 128, 255, 255]), c = new gs(l, 1, 1, 1023);
    c.needsUpdate = !0, t.normalMap = c, t.normalScale.set(1, 1);
  }
  return t.onBeforeCompile = (l) => {
    for (const [h, f] of Object.entries(a))
      l.uniforms[h] = f;
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
            uniform float hairSpecIntensity;
            uniform float hairGeomNormalTBN;
            uniform float hairGaussianSpec;
            uniform float hairSpecAAScale;
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
    const u = (
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
` + u
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
    const d = (
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
                vec3 N_tbn = _hairGeomNormal;
                vec3 N = normal;
                #ifdef USE_TANGENT
                    // faceDirection 적용: DOUBLE_SIDED에서 vTangent/vBitangent은 raw varying이므로
                    // normal_fragment_begin에서 faceDirection이 곱해진 N_tbn과 일치시켜야 함.
                    vec3 T = normalize(vTangent) * faceDirection;
                    // vBitangent = cross(N, T) * tangent.w (탄젠트 핸드니스 포함)
                    // Unity와 동일한 방향. cross 직접 계산은 tangent.w 누락으로 방향 틀어짐.
                    vec3 B = normalize(vBitangent) * faceDirection;
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
                    float scatterFresnel1 = pow(clamp(-LdotV, 0.0, 1.0), 9.0)
                                          * pow(clamp(1.0 - geomNdotV * geomNdotV, 0.0, 1.0), 12.0);
                    float scatterFresnel2 = pow(clamp(1.0 - geomNdotV, 0.0, 1.0), 4.0);
                    float transmission = scatterFresnel1 + hairRimTransmission * scatterFresnel2;
                    vec3 specT = hairAlbedo * transmission;

                    // Diffuse
                    vec3 hairDiffuse = hairAlbedo * clamp(NdotL, 0.0, 1.0);

                    totalHairDirect += (hairDiffuse + specR + specT) * lightColor * RECIPROCAL_PI;
                }
                #endif

                // ── Ambient / GI ──
                // 커스텀 ambient 계산 제거 — three.js 기본 indirectDiffuse를 그대로 사용.
                // (이전에는 hemisphere+ambientLightColor를 직접 계산 후 hairAmbientScale=0.25로 축소 적용했음)

                totalEmissiveRadiance += totalHairDirect;
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + d
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
            reflectedLight.directDiffuse = vec3(0.0);
            reflectedLight.directSpecular = vec3(0.0);
            reflectedLight.indirectSpecular = vec3(0.0);`
    ), n || (l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 0.0;`
    ));
  }, t.customProgramCacheKey = () => e.blend ? "OZHairBlend" : i ? "OZHair_NoSec" : "OZHair", t.userData.hairUniforms = a, t;
}
function Wp(s, e) {
  const t = s.clone();
  t.transparent = !0, t.depthWrite = !1, t.side = 2, t.alphaTest = 0, t.metalness = 0, t.roughness = 1, t.envMapIntensity = 0;
  const n = (a, o, l) => new re(a, o, l).convertSRGBToLinear(), i = e.uvTransform ?? {
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
  return t.onBeforeCompile = (a) => {
    for (const [c, u] of Object.entries(r))
      a.uniforms[c] = u;
    const o = (
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
    a.fragmentShader = a.fragmentShader.replace(
      "#include <common>",
      o + `
#include <common>`
    );
    const l = (
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
    a.fragmentShader = a.fragmentShader.replace(
      "#include <map_fragment>",
      l
    ), a.fragmentShader = a.fragmentShader.replace(
      "#include <envmap_physical_pars_fragment>",
      `#include <envmap_physical_pars_fragment>
            #ifdef ENVMAP_TYPE_CUBE_UV
                #undef ENVMAP_TYPE_CUBE_UV
            #endif`
    ), a.fragmentShader = a.fragmentShader.replace(
      "#include <lights_fragment_end>",
      `#include <lights_fragment_end>
            reflectedLight.indirectDiffuse *= 0.25;`
    );
  }, t.customProgramCacheKey = () => "OZSpriteMaskTint", t.userData.eyeBlinkUniform = r.uvScaleYEyeBlink, t.userData.uvTransformUniforms = i, t.userData.uniforms = r, t;
}
function jp(s, e) {
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null;
  const n = (a, o, l) => new re(a, o, l).convertSRGBToLinear(), i = !!e.pbrMaskMap, r = {
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
  return t.onBeforeCompile = (a) => {
    for (const [u, d] of Object.entries(r))
      a.uniforms[u] = d;
    const l = (
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
    a.fragmentShader = a.fragmentShader.replace(
      "#include <common>",
      l + `
#include <common>`
    );
    const c = (
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
    a.fragmentShader = a.fragmentShader.replace(
      "#include <normal_fragment_maps>",
      `#include <normal_fragment_maps>
` + c
    ), i && (a.fragmentShader = a.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>

                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }
                `
    ), a.fragmentShader = a.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>

                {
                    // JPEG에 알파 채널 없음 → smoothnessIntensity를 직접 사용
                    roughnessFactor = 1.0 - smoothnessIntensity;
                }
                `
    ), a.fragmentShader = a.fragmentShader.replace(
      "#include <aomap_fragment>",
      `#include <aomap_fragment>

                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }
                `
    )), a.fragmentShader = a.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 0.0;`
    );
  }, t.customProgramCacheKey = () => i ? "OZLens_PBR" : "OZLens", t.userData.uniforms = r, t;
}
function Xp(s, e) {
  var a, o;
  const t = s.clone();
  t.alphaTest = 0, t.aoMap = null, t.emissive.set(0, 0, 0), t.emissiveMap = null, t.emissiveIntensity = 1;
  const n = { value: 0 }, i = !!e.pbrMaskMap, r = {
    emissiveBlinkMap: { value: e.emissiveMap },
    emissiveStrength: { value: e.emissiveStrength ?? 1 },
    blinkSpeed: { value: e.blinkSpeed ?? 3 },
    mapTiling: { value: new Le(((a = e.mapTiling) == null ? void 0 : a[0]) ?? 2, ((o = e.mapTiling) == null ? void 0 : o[1]) ?? 4) },
    uBlinkTime: n,
    ...i ? {
      pbrMaskMap: { value: e.pbrMaskMap },
      metallicIntensity: { value: e.metallicIntensity ?? 0.8 },
      smoothnessIntensity: { value: e.smoothness ?? 1 },
      aoIntensity: { value: e.aoIntensity ?? 1 }
    } : {}
  };
  return t.onBeforeCompile = (l) => {
    for (const [h, f] of Object.entries(r))
      l.uniforms[h] = f;
    const u = (
      /* glsl */
      `
            uniform sampler2D emissiveBlinkMap;
            uniform float emissiveStrength;
            uniform float blinkSpeed;
            uniform vec2 mapTiling;
            uniform float uBlinkTime;
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
      u + `
#include <common>`
    );
    const d = (
      /* glsl */
      `
            {
                vec3 eSample = texture2D(emissiveBlinkMap, vMapUv).rgb;
                vec3 emissive = eSample * emissiveStrength;

                // 포스터라이즈 UV → 셀별 노이즈
                vec2 posterized = floor(vMapUv / (1.0 / mapTiling)) * (1.0 / mapTiling);
                float noise = simpleNoise(posterized, 500.0);

                // 블링크: frac(noise * time * speed) >= 0.2
                float phase = fract(noise * uBlinkTime * blinkSpeed);
                float isOn = step(0.2, phase);

                totalEmissiveRadiance += emissive * isOn;

                // emissive ON → PBR 라이팅 억제 (diffuseColor=0이면 lights 계산 결과 ~0)
                // 이래야 bloom이 emissive 색상을 유지함 (흰색으로 날아가지 않음)
                diffuseColor.rgb *= (1.0 - isOn);
            }
        `
    );
    l.fragmentShader = l.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>
` + d
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
gl_FragColor.a = 1.0;`
    ), i && (l.fragmentShader = l.fragmentShader.replace(
      "#include <metalnessmap_fragment>",
      `#include <metalnessmap_fragment>
                {
                    vec4 pbrMask = texture2D(pbrMaskMap, vMapUv);
                    metalnessFactor = pbrMask.r * metallicIntensity;
                }`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <roughnessmap_fragment>",
      `#include <roughnessmap_fragment>
                {
                    vec4 pbrMask2 = texture2D(pbrMaskMap, vMapUv);
                    float smoothness = pbrMask2.a * smoothnessIntensity;
                    roughnessFactor = 1.0 - smoothness;
                }`
    ), l.fragmentShader = l.fragmentShader.replace(
      "#include <aomap_fragment>",
      `#include <aomap_fragment>
                {
                    vec4 pbrMask3 = texture2D(pbrMaskMap, vMapUv);
                    float aoFromMask = pbrMask3.g * aoIntensity;
                    reflectedLight.indirectDiffuse *= aoFromMask;
                }`
    ));
  }, t.customProgramCacheKey = () => i ? "OZEmissiveBlink_PBR" : "OZEmissiveBlink", t.userData.uniforms = r, { material: t, timeUniform: n };
}
const Ke = class Ke {
  constructor(e, t) {
    this.onProgress = null, this.gltfLoader = new sp().setMeshoptDecoder(Op), this.textureLoader = new hr(), this.boneMap = /* @__PURE__ */ new Map(), this.baseArmature = null, this.avatarRoot = new hn(), this.activeParts = /* @__PURE__ */ new Map(), this.isLoaded = !1, this.currentAvatarData = null, this.hairNodes = null, this.capMountGroup = null, this.capUseDefaultMount = !1, this.hairCapMountBone = "", this.blinkTimeUniforms = [], this.currentBlendShapes = [], this.volumeMaskEnabled = !1, this.debugSpheres = [], this.volumeMaskTargets = [], this.headJointMatrix = null, this._resourceSizes = /* @__PURE__ */ new Map(), this._partResources = /* @__PURE__ */ new Map(), this._decalTextures = [], this._hiResQueue = /* @__PURE__ */ new Map(), this.skinColorUniform = { value: new re(0.957, 0.769, 0.725).convertSRGBToLinear() }, this.uvTransforms = /* @__PURE__ */ new Map(), this.eyeBlinkUniform = { value: 1 }, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = 0, this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending = !1, this.decalsBaseUrl = "avatar/decals/", this.decalsMetadata = null, this.decalsMetadataPromise = null, this.partsMetadata = null, this.partsMetadataPromise = null, this.activeDecalProjectors = /* @__PURE__ */ new Map(), this.decalCategorySlots = /* @__PURE__ */ new Map(), this.faceDecalSlots = [], this.faceSkinnedMesh = null, this.swapSeq = /* @__PURE__ */ new Map(), this.baseSkeletonGlb = "avatar/skeleton/Msh_Ava_Bip.glb", this.animBaseUrl = "avatar/animations/", this.partsBaseUrl = "avatar/parts/", this.masksBaseUrl = "avatar/masks/", this.defaultPresetJson = '{"PresetPartsDatas":[{"Category":0,"ID":"Ava_H_008","Color":{"colors":[{"r":0.878,"g":0.369,"b":0.043,"a":1.0},{"r":0.8,"g":0.455,"b":0.29,"a":1.0}]}},{"Category":1,"ID":"Ava_F_001","Color":{"colors":[{"r":0.949,"g":0.875,"b":0.863,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":2,"ID":"Ava_B_001","Color":{"colors":[{"r":0.192,"g":0.129,"b":0.075,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":3,"ID":"Ava_E_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":4,"ID":"Ava_N_001","Color":{"colors":[]}},{"Category":5,"ID":"Ava_M_001","Color":{"colors":[{"r":0.156,"g":0.648,"b":1.0,"a":1.0},{"r":0.0,"g":0.0,"b":0.0,"a":0.0}]}},{"Category":6,"ID":"Ava_U_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":7,"ID":"Ava_L_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}},{"Category":9,"ID":"Ava_S_001","Color":{"colors":[{"r":0.851,"g":0.851,"b":0.851,"a":1.0},{"r":0.078,"g":0.459,"b":1.0,"a":1.0}]}}],"blendShapes":[],"PresetName":"UserPreset"}', this.mixer = null, this.animClips = /* @__PURE__ */ new Map(), this.currentAction = null, this.defaultAction = null, this.poseAction = null, this.prevMotionIndex = -1, this.defaultIdleName = "Ani_Idle_001_Idle", this.idleAnimations = [
      "Ani_Idle_002_Hi",
      "Ani_Idle_003_Leg",
      "Ani_Idle_004_Stretch"
    ], this._eyeBlinkPaused = !1, this._hairShiftDir = 1, this._hairNormalScale = 1, this._maxConcurrent = 0, this._activeFetches = 0, this._fetchQueue = [], this.scene = e, this.baseUrl = (t == null ? void 0 : t.baseUrl) ?? "", this.onProgress = (t == null ? void 0 : t.onProgress) ?? null, this.scene.add(this.avatarRoot);
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
    this.mixer && this.mixer.update(e);
    for (const t of this.blinkTimeUniforms)
      t.value += e;
    this.updateEyeBlink(e), this.updateVolumeMaskCenters(), this.updateDecalProjections();
  }
  getAvatarRoot() {
    return this.avatarRoot;
  }
  getBone(e) {
    return this.boneMap.get(e);
  }
  /** 눈 깜빡임 일시 정지/재개 (프로필 캡쳐용) */
  setEyeBlinkPaused(e) {
    e && (this.eyeBlinkUniform.value = 1, this.eyeBlinkElapsed = -1), this._eyeBlinkPaused = e;
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
  /** 특정 파츠의 머티리얼 속성을 런타임 수정 */
  setMaterialProperty(e, t, n, i) {
    for (const [, r] of this.activeParts)
      for (const a of r)
        a.traverse((o) => {
          var u, d, h;
          if (!o.isMesh) return;
          const l = o, c = Array.isArray(l.material) ? l.material : [l.material];
          for (const f of c) {
            if (f.name !== t) continue;
            const g = (u = f.userData) == null ? void 0 : u.hairUniforms;
            if (g) {
              if (n === "_BumpScale") {
                (d = f.normalScale) == null || d.set(i, i);
                return;
              }
              const m = Ke.HAIR_PROP_MAP[n];
              if (m && g[m]) {
                g[m].value = i;
                return;
              }
            }
            const _ = (h = f.userData) == null ? void 0 : h.uniforms;
            if (_) {
              const m = Ke.PROP_UNIFORM_MAP[n];
              if (m && _[m]) {
                _[m].value = i;
                return;
              }
            }
            f.userData[n] = i;
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
          var u, d, h, f, g;
          if (!a.isMesh) return;
          const o = a, l = o.material, c = Array.isArray(l) ? l : [l];
          for (const _ of c) {
            const m = !!((u = _.userData) != null && u.hasExplicitVolumeMask), p = e && m ? 1 : 0, M = (d = _.userData) == null ? void 0 : d.hairUniforms;
            M != null && M.volumeMaskEnable && (M.volumeMaskEnable.value = p, e && m && ((h = _.userData) != null && h.rawMaskCenterUnity) && this.volumeMaskTargets.push({
              uniforms: M,
              rawCenter: _.userData.rawMaskCenterUnity,
              mesh: o
            }));
            const v = (f = _.userData) == null ? void 0 : f.uniforms;
            v != null && v.volumeMaskEnable && (v.volumeMaskEnable.value = p, e && m && ((g = _.userData) != null && g.rawMaskCenterUnity) && this.volumeMaskTargets.push({
              uniforms: v,
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
  /** 개별 파츠 교체 (전체 리로드 없이) */
  async swapPart(e, t, n, i) {
    var d;
    const r = (this.swapSeq.get(e) ?? 0) + 1;
    this.swapSeq.set(e, r);
    const a = {
      Category: e,
      ID: t,
      Color: n ? { colors: n } : void 0
    };
    if (!t || t === "") {
      if (Ke.isDecalCategory(e)) {
        if (this.removeDecalCategory(e), this.currentAvatarData) {
          const m = this.currentAvatarData.PresetPartsDatas.findIndex((p) => p.Category === e);
          m >= 0 && this.currentAvatarData.PresetPartsDatas.splice(m, 1);
        }
        return;
      }
      const h = a.Category.toString(), f = this.activeParts.get(h);
      if (f) {
        for (const m of f)
          this.avatarRoot.remove(m), this.disposeMeshes(m);
        this.activeParts.delete(h);
      }
      this._partResources.delete(h);
      const g = `${a.Category}_Ex`, _ = this.activeParts.get(g);
      if (_) {
        for (const m of _)
          this.avatarRoot.remove(m), this.disposeMeshes(m);
        this.activeParts.delete(g);
      }
      if (this._partResources.delete(g), e === 8 && (this.capMountGroup && (this.capMountGroup.removeFromParent(), this.disposeMeshes(this.capMountGroup), this.capMountGroup = null), this.capUseDefaultMount = !1, this.hairCapMountBone = "", this.updateHairCapVisibility(), this.setVolumeMask(!1)), e === 0 && (this.hairCapMountBone = "", this.updateHairCapVisibility(), this.capMountGroup)) {
        const m = this.boneMap.get("Mount_HairCap_001");
        m && (this.capMountGroup.removeFromParent(), this.capMountGroup.scale.copy(m.scale), m.add(this.capMountGroup));
      }
      if (this.currentAvatarData) {
        const m = this.currentAvatarData.PresetPartsDatas.findIndex((p) => p.Category === e);
        m >= 0 && this.currentAvatarData.PresetPartsDatas.splice(m, 1);
      }
      return;
    }
    if (this.currentAvatarData) {
      const h = this.currentAvatarData.PresetPartsDatas.findIndex((f) => f.Category === e);
      h >= 0 ? this.currentAvatarData.PresetPartsDatas[h] = a : this.currentAvatarData.PresetPartsDatas.push(a);
    }
    if (e === 1 && this.getSkinColor(), Ke.isDecalCategory(e)) {
      await this.loadDecalPart(e, t, n, i == null ? void 0 : i.applySubColorToEx);
      return;
    }
    if (e === 17) {
      if (i != null && i.animationTrigger ? await this.playPose(i.animationTrigger) : console.warn("[Pose] animationTrigger가 없음 — options:", i), this.currentAvatarData) {
        const h = this.currentAvatarData.PresetPartsDatas.findIndex((f) => f.Category === e);
        h >= 0 ? this.currentAvatarData.PresetPartsDatas[h] = a : this.currentAvatarData.PresetPartsDatas.push(a);
      }
      return;
    }
    if (e === 4) {
      if (i != null && i.blendShapes && i.blendShapes.length > 0) {
        const h = /* @__PURE__ */ new Map();
        for (const g of this.currentBlendShapes) h.set(g.type, g.value);
        for (const g of i.blendShapes) h.set(g.type, g.value);
        const f = Array.from(h, ([g, _]) => ({ type: g, value: _ }));
        this.setBlendShapes(f);
      }
      if (this.currentAvatarData) {
        const h = this.currentAvatarData.PresetPartsDatas.findIndex((f) => f.Category === e);
        h >= 0 ? this.currentAvatarData.PresetPartsDatas[h] = a : this.currentAvatarData.PresetPartsDatas.push(a);
      }
      return;
    }
    e === 8 && (this.capUseDefaultMount = !!(i != null && i.useDefaultHairCapMount)), e === 0 && (this.hairCapMountBone = (i == null ? void 0 : i.capMountBone) ?? "");
    const o = this.volumeMaskEnabled && (e === 0 || e === 11), l = (d = this.partsMetadata) == null ? void 0 : d[t], c = l == null ? void 0 : l.files;
    try {
      await this.loadAndAttachPart(a, !1, r, c);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) !== r) return;
    const u = (h) => {
      if (!o) return;
      const f = a.Category.toString(), g = `${a.Category}_Ex`;
      for (const _ of [f, g]) {
        const m = this.activeParts.get(_);
        if (m) for (const p of m) p.visible = !h;
      }
    };
    u(!0);
    try {
      await this.loadAndAttachPart(a, !0, r, c);
    } catch {
    }
    if ((this.swapSeq.get(e) ?? 0) === r) {
      if (u(!0), (e === 8 || e === 0) && this.updateHairCapVisibility(), e === 8 && this.setVolumeMask(!!(i != null && i.useVolumeMask)), this.volumeMaskEnabled && (e === 0 || e === 11 || e === 1) && this.setVolumeMask(!0), u(!1), e === 1 && this.activeDecalProjectors.size > 0 && this.reorderDecalSlots(), e === 0 && this.capMountGroup) {
        const h = this.getCapMountBone();
        h && (this.capMountGroup.removeFromParent(), this.capMountGroup.scale.copy(h.scale), h.add(this.capMountGroup));
      }
      if (this.currentBlendShapes.length > 0 && this.applyBlendShapes(this.currentBlendShapes), i != null && i.blendShapes && i.blendShapes.length > 0) {
        const h = /* @__PURE__ */ new Map();
        for (const g of this.currentBlendShapes) h.set(g.type, g.value);
        for (const g of i.blendShapes) h.set(g.type, g.value);
        const f = Array.from(h, ([g, _]) => ({ type: g, value: _ }));
        this.setBlendShapes(f);
      }
      this.loadHiResTextures();
    }
  }
  /** Pose 애니메이션 재생 (trigger 이름으로 매칭, LoopRepeat) */
  async playPose(e) {
    if (!this.mixer) return;
    const t = Ke.POSE_ANIM_MAP[e];
    if (t !== void 0) {
      if (t === "") {
        this.poseAction = null, this.fadeToDefault();
        return;
      }
      await this.playAnimationByName(t, !0), this.poseAction = this.currentAction;
    }
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
  async loadAvatarFromData(e) {
    var u, d;
    this.currentAvatarData = e, this.clearAvatar(), (u = this.onProgress) == null || u.call(this, 0), this.getSkinColor(), performance.now(), performance.now();
    try {
      await this.loadBaseSkeleton();
    } catch (h) {
      console.error("[AvatarViewer] 스켈레톤 로드 실패:", h);
    }
    if (this.boneMap.size === 0) {
      console.error("[AvatarViewer] 본 노드 없음");
      return;
    }
    this.avatarRoot.updateMatrixWorld(!0), performance.now();
    const t = await this.loadPartsMetadata(), n = [], i = [];
    let r = null, a = null;
    for (const h of e.PresetPartsDatas)
      if (!(!h.ID || h.ID === "")) {
        if (h.Category === 17) {
          a = h;
          continue;
        }
        if (Ke.isDecalCategory(h.Category))
          n.push(h);
        else if (h.Category === 8)
          r = h;
        else {
          if (h.Category === 0) {
            const f = t[h.ID];
            this.hairCapMountBone = (f == null ? void 0 : f.capMountBone) ?? "";
          }
          i.push(h);
        }
      }
    const o = i.reduce((h, f) => {
      var _;
      const g = (_ = t[f.ID]) == null ? void 0 : _.files;
      return h + ((g == null ? void 0 : g.glb) !== !1 ? 1 : 0) + ((g == null ? void 0 : g.ex) !== !1 ? 1 : 0);
    }, 0) + (r ? 1 : 0);
    let l = 0;
    const c = () => {
      var h;
      l++, (h = this.onProgress) == null || h.call(this, 50 + l / Math.max(1, o) * 50);
    };
    if (await Promise.all(i.map(async (h) => {
      var g;
      const f = (g = t[h.ID]) == null ? void 0 : g.files;
      if ((f == null ? void 0 : f.glb) !== !1) {
        performance.now();
        try {
          await this.loadAndAttachPart(h, !1, void 0, f);
        } catch (_) {
          console.warn(`[AvatarViewer] 파츠 로드 실패: ${h.ID}`, _);
        }
        c();
      }
      if ((f == null ? void 0 : f.ex) !== !1) {
        performance.now();
        try {
          await this.loadAndAttachPart(h, !0, void 0, f);
        } catch {
        }
        c();
      }
    })), r) {
      const h = t[r.ID];
      this.capUseDefaultMount = !!(h != null && h.useDefaultHairCapMount), performance.now();
      try {
        await this.loadAndAttachPart(r, !1, void 0, h == null ? void 0 : h.files);
      } catch (f) {
        console.warn(`[AvatarViewer] Cap 로드 실패: ${r.ID}`, f);
      }
      c(), this.updateHairCapVisibility(), h != null && h.useVolumeMask && this.setVolumeMask(!0);
    }
    if (n.length > 0) {
      performance.now();
      for (const h of n)
        try {
          const f = t[h.ID];
          await this.loadDecalPart(h.Category, h.ID, (d = h.Color) == null ? void 0 : d.colors, !!(f != null && f.applySubColorToEx));
        } catch (f) {
          console.warn(`[Decal] 로드 실패: ${h.ID}`, f);
        }
    }
    if (performance.now(), e.blendShapes && this.applyBlendShapes(e.blendShapes), this.updateHairCapVisibility(), this.resetEyeBlink(), this.avatarRoot.traverse((h) => {
      h.isMesh && (h.frustumCulled = !1);
    }), performance.now(), this.animClips.size > 0 && this.initializeAnimation(), a) {
      const h = t[a.ID], f = (h == null ? void 0 : h.animationTrigger) ?? a.AnimationTrigger;
      f && await this.playPose(f);
    }
    this.isLoaded = !0, this.loadHiResTextures();
    for (const h of this.idleAnimations)
      this.loadAnimationClip(h);
  }
  /** @2x 고해상도 텍스처 백그라운드 로드 → 교체 */
  async loadHiResTextures() {
    if (this._hiResQueue.size === 0) return;
    const e = new hr(), t = (i) => new Promise((r) => {
      e.load(i, r, void 0, () => r(null));
    }), n = Array.from(this._hiResQueue.entries());
    this._hiResQueue.clear();
    for (const [, i] of n)
      for (const r of i) {
        const a = await t(r.url);
        a && (a.colorSpace = ht, a.flipY = !1, r.uniform ? r.uniform.value = a : r.material && r.prop && (r.material[r.prop] = a, r.material.needsUpdate = !0));
      }
  }
  clearAvatar() {
    this._hiResQueue.clear(), this.mixer && (this.mixer.stopAllAction(), this.mixer = null), this.currentAction = null, this.defaultAction = null, this.poseAction = null;
    for (const [, e] of this.activeParts)
      for (const t of e)
        this.avatarRoot.remove(t), this.disposeMeshes(t);
    this.activeParts.clear(), this.baseArmature && (this.avatarRoot.remove(this.baseArmature), this.baseArmature = null, this.boneMap.clear()), this.hairNodes = null, this.capMountGroup = null, this.capUseDefaultMount = !1, this.currentBlendShapes = [], this.hairCapMountBone = "", this.blinkTimeUniforms = [], this.uvTransforms.clear(), this._partResources.clear(), this._resourceSizes.clear(), this._decalTextures = [], this.volumeMaskTargets = [], this.headJointMatrix = null, this.clearAllDecals(), this.faceDecalSlots = [], this.faceSkinnedMesh = null, this.resetEyeBlink(), this.isLoaded = !1;
  }
  //#region Private
  resolve(e) {
    return this.baseUrl + e;
  }
  async loadBaseSkeleton() {
    performance.now();
    const e = this.resolve(this.baseSkeletonGlb), t = await this._fetchWithStream(e, (r) => {
      var a;
      (a = this.onProgress) == null || a.call(this, r * 50);
    });
    this._resourceSizes.set(e, t.byteLength);
    const n = await new Promise((r, a) => {
      this.gltfLoader.parse(t, "", r, a);
    });
    performance.now(), this.baseArmature = n.scene, this.avatarRoot.add(this.baseArmature), this.boneMap.clear();
    const i = n.scene.getObjectByName("Bip001");
    if (i && i.traverse((r) => {
      r.name && this.boneMap.set(r.name, r);
    }), n.animations && n.animations.length > 0) {
      this.animClips.clear();
      for (const r of n.animations)
        this.animClips.has(r.name) || this.animClips.set(r.name, r);
    }
  }
  async loadAndAttachPart(e, t = !1, n, i) {
    var Xe, W, Z, ge, de;
    const r = e.ID, a = t ? "_Ex" : "", o = i ?? {};
    if (t && o.ex === !1 || !t && o.glb === !1) return;
    const l = this.resolve(`${this.partsBaseUrl}${r}${a}.glb`), c = t ? `${e.Category}_Ex` : e.Category.toString(), d = [
      1,
      6,
      7,
      9,
      10,
      8
      /* Cap */
    ].includes(e.Category) && !t;
    let h = null, f = null, g = null;
    const m = [
      3,
      2,
      5
      /* Mouth */
    ].includes(e.Category);
    let p = null;
    const M = (e.Category === 0 || e.Category === 11) && !t;
    let v = null, y = null;
    const T = (Q) => this.loadTexture(Q).catch(() => null), R = (async () => {
      if (d) {
        performance.now();
        const [Q, J, oe, le] = await Promise.all([
          o.mask1 ? T(this.resolve(`${this.masksBaseUrl}${r}_mask1.${o.mask1}`)) : Promise.resolve(null),
          o.mask2 ? T(this.resolve(`${this.masksBaseUrl}${r}_mask2.${o.mask2}`)) : Promise.resolve(null),
          o.pbr ? T(this.resolve(`${this.masksBaseUrl}${r}_pbr.${o.pbr}`)) : Promise.resolve(null),
          o.emissive ? T(this.resolve(`${this.masksBaseUrl}${r}_emissive.${o.emissive}`)) : Promise.resolve(null)
        ]);
        Q && J ? h = { mask1: Q, mask2: J, pbr: oe ?? void 0 } : Q && (f = { mask: Q, pbr: oe ?? void 0 }), g = le;
      } else if (m) {
        const Q = t ? o.exMask1 : o.mask1;
        Q && (performance.now(), p = await T(
          this.resolve(`${this.masksBaseUrl}${r}${a}_mask1.${Q}`)
        ));
      } else if (M) {
        performance.now();
        const [Q, J] = await Promise.all([
          o.mask ? T(this.resolve(`${this.masksBaseUrl}${r}_mask.${o.mask}`)) : Promise.resolve(null),
          o.normal ? T(this.resolve(`${this.masksBaseUrl}${r}_normal.${o.normal}`)) : Promise.resolve(null)
        ]);
        v = Q, y = J, Q || console.warn(`[AvatarViewer] 헤어 마스크 텍스처 로드 실패: ${r}`);
      }
    })(), w = (async () => {
      const Q = await this.fetchWithProgress(l);
      return this._resourceSizes.set(l, Q.byteLength), new Promise((J, oe) => {
        this.gltfLoader.parse(Q, "", J, oe);
      });
    })(), [U] = await Promise.all([w, R]);
    if (n !== void 0 && this.swapSeq.get(e.Category) !== n) return;
    const K = ["Hair", "FaceType", "EyeBrow", "Eye", "Nose", "Mouth", "Upper", "Lower", "Cap", "Shoes", "Glasses", "Whiskers"], b = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), G = (Xe = U.parser) == null ? void 0 : Xe.json;
    if (G != null && G.images) {
      const Q = G.images.map((oe) => {
        var le, _e;
        return oe.bufferView != null ? ((_e = (le = G.bufferViews) == null ? void 0 : le[oe.bufferView]) == null ? void 0 : _e.byteLength) ?? 0 : 0;
      }), J = (W = U.parser) == null ? void 0 : W.associations;
      if (J) {
        for (const [oe, le] of J)
          if ((le == null ? void 0 : le.textures) !== void 0 && (oe != null && oe.isTexture)) {
            const _e = (ge = (Z = G.textures) == null ? void 0 : Z[le.textures]) == null ? void 0 : ge.source;
            if (_e !== void 0) {
              b.set(oe, Q[_e] ?? 0);
              const C = ((de = G.images[_e]) == null ? void 0 : de.mimeType) ?? "";
              A.set(oe, C);
            }
          }
      }
    }
    const O = /* @__PURE__ */ new Set(), V = [], $ = [], B = [], ee = /* @__PURE__ */ new Set();
    U.scene.traverse((Q) => {
      if (!Q.isMesh) return;
      const J = Q, oe = J.geometry, le = Array.isArray(J.material) ? J.material : [J.material], _e = [];
      for (const Ce of le) {
        const Ee = Ce.name || "unnamed";
        if (_e.push(Ee), !ee.has(Ee)) {
          ee.add(Ee);
          const ke = {};
          for (const [Re, E] of Object.entries(Ce.userData))
            typeof E == "number" && (ke[Re] = E);
          Object.keys(ke).length > 0 && B.push({ materialName: Ee, properties: ke });
        }
        if (Ce instanceof cn) {
          const ke = [
            ["map", Ce.map],
            ["normalMap", Ce.normalMap],
            ["aoMap", Ce.aoMap],
            ["emissiveMap", Ce.emissiveMap],
            ["roughnessMap", Ce.roughnessMap],
            ["metalnessMap", Ce.metalnessMap]
          ];
          for (const [Re, E] of ke)
            if (E && !O.has(E)) {
              O.add(E);
              const x = E.image, F = A.get(E) ?? "", j = F === "image/jpeg" ? ".jpg" : F === "image/png" ? ".png" : "";
              V.push({
                type: Re,
                name: (E.name || "") + j,
                url: "",
                size: b.get(E) ?? 0,
                texture: E,
                width: (x == null ? void 0 : x.width) ?? 0,
                height: (x == null ? void 0 : x.height) ?? 0
              });
            }
        }
      }
      const C = oe.getAttribute("position"), st = C ? C.count : 0, we = oe.index ? oe.index.count : st;
      $.push({
        name: J.name || "unnamed",
        vertexCount: st,
        triangleCount: Math.floor(we / 3),
        materialNames: _e
      });
    });
    const H = [], se = (Q, J, oe) => {
      if (!J) return;
      const le = this.resolve(`${this.masksBaseUrl}${r}${oe}`), _e = J.image, C = le.split("/").pop() || "";
      H.push({
        type: Q,
        name: C,
        url: le,
        size: this._resourceSizes.get(le) ?? 0,
        texture: J,
        width: (_e == null ? void 0 : _e.width) ?? 0,
        height: (_e == null ? void 0 : _e.height) ?? 0
      });
    };
    if (h) {
      const Q = h;
      se("mask1", Q.mask1, `_mask1.${o.mask1 || "png"}`), se("mask2", Q.mask2, `_mask2.${o.mask2 || "png"}`), se("pbr", Q.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (f) {
      const Q = f;
      se("mask", Q.mask, `_mask1.${o.mask1 || "png"}`), se("pbr", Q.pbr ?? null, `_pbr.${o.pbr || "png"}`);
    }
    if (g && se("emissive", g, `_emissive.${o.emissive || "png"}`), p && se("mask1", p, `${a}_mask1.${(t ? o.exMask1 : o.mask1) || "png"}`), v && se("mask", v, `_mask.${o.mask || "png"}`), y && se("normal", y, `_normal.${o.normal || "png"}`), this._partResources.set(c, {
      partId: r + a,
      category: e.Category,
      categoryName: K[e.Category] ?? `Cat${e.Category}`,
      isEx: t,
      glbUrl: l,
      glbSize: this._resourceSizes.get(l) ?? 0,
      embeddedTextures: V,
      externalTextures: H,
      meshes: $,
      materials: B
    }), e.Category === 0 && !t) {
      const Q = this.isCapActive();
      let J = null, oe = null;
      U.scene.traverse((le) => {
        le.name.endsWith("_Cap") ? (oe = le, le.visible = Q) : le.isSkinnedMesh && !J && (J = le, le.visible = !Q);
      }), J && oe ? this.hairNodes = { normal: J, cap: oe } : this.hairNodes = null;
    }
    const ue = e.Category === 8 && !t, xe = ue ? this.getCapMountBone() : null;
    if (U.scene.traverse((Q) => {
      var J, oe, le, _e, C, st;
      if (Q.isSkinnedMesh) {
        const we = Q;
        ue || this.rebindToBaseSkeleton(we);
        const Ce = we.material.name;
        if (Ce != null && Ce.endsWith("_Lens")) {
          this.applyLensMaterial(we, (J = e.Color) == null ? void 0 : J.colors);
          return;
        }
        if (Ce != null && Ce.endsWith("_Lamp")) {
          if (g) {
            const Ee = we.material, ke = Ee.userData, Re = (h == null ? void 0 : h.pbr) ?? (f == null ? void 0 : f.pbr), { material: E, timeUniform: x } = Xp(Ee, {
              emissiveMap: g,
              emissiveStrength: ke._Emissive_Strangth ?? 10,
              blinkSpeed: ke._Blink_Speed ?? 0.5,
              mapTiling: [ke._Map_Tiling_X ?? 2, ke._Map_Tiling_Y ?? 4],
              pbrMaskMap: Re ?? void 0,
              metallicIntensity: ke._MetallicIntensity,
              smoothness: ke._Smoothness,
              aoIntensity: ke._AOIntensity
            });
            we.material = E, this.blinkTimeUniforms.push(x);
          }
          return;
        }
        if (p)
          this.applySpriteMaskTintMaterial(we, p, (oe = e.Color) == null ? void 0 : oe.colors, e.Category, t);
        else if (M) {
          const Ee = we.material, ke = v ?? Ee.aoMap;
          ke && this.applyHairMaterial(we, ke, (le = e.Color) == null ? void 0 : le.colors, y);
        } else h ? this.applyMask2TintMaterial(we, h, (_e = e.Color) == null ? void 0 : _e.colors, g) : f ? this.applyMaskTintMaterial(we, f, e.Category, (C = e.Color) == null ? void 0 : C.colors) : (st = e.Color) != null && st.colors && this.applyColorsToMesh(we, e.Category, e.Color.colors);
      }
    }), ue && xe) {
      this.capMountGroup && (this.capMountGroup.removeFromParent(), this.disposeMeshes(this.capMountGroup));
      const Q = new hn();
      U.scene.updateMatrixWorld(!0);
      const J = U.scene.matrixWorld.clone().invert();
      U.scene.traverse((le) => {
        if (le.isSkinnedMesh) {
          const _e = le, C = new xt(_e.geometry, _e.material);
          C.name = _e.name, C.frustumCulled = !1, J.clone().multiply(_e.matrixWorld).decompose(C.position, C.quaternion, C.scale), Q.add(C);
        }
      }), Q.scale.copy(xe.scale), xe.add(Q), this.capMountGroup = Q;
      const oe = this.activeParts.get(c);
      if (oe)
        for (const le of oe)
          le.removeFromParent(), this.disposeMeshes(le);
      this.activeParts.set(c, [Q]);
    } else {
      this.avatarRoot.add(U.scene);
      const Q = this.activeParts.get(c);
      if (Q)
        for (const J of Q)
          this.avatarRoot.remove(J), this.disposeMeshes(J);
      this.activeParts.set(c, [U.scene]);
    }
    const Ne = o.hi;
    if (Ne && Object.keys(Ne).length > 0) {
      const Q = [], J = [];
      h ? (Ne.mask1 && J.push(["mask1", "maskTintMap1", "_mask1@2x.webp"]), Ne.mask2 && J.push(["mask2", "maskTintMap2", "_mask2@2x.webp"]), Ne.pbr && J.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : f ? (Ne.mask1 && J.push(["mask1", "maskTintMap", "_mask1@2x.webp"]), Ne.pbr && J.push(["pbr", "pbrMaskMap", "_pbr@2x.webp"])) : m ? (Ne[t ? "exMask1" : "mask1"] || Ne.mask1) && J.push(["mask1", "maskTintMap", `${a}_mask1@2x.webp`]) : M && Ne.mask && J.push(["mask", "hairMaskMap", "_mask@2x.webp"]), U.scene.traverse((oe) => {
        var C;
        if (!oe.isMesh) return;
        const le = oe.material, _e = (C = le == null ? void 0 : le.userData) == null ? void 0 : C.uniforms;
        if (_e)
          for (const [, st, we] of J)
            _e[st] && Q.push({
              uniform: _e[st],
              url: this.resolve(`${this.masksBaseUrl}${r}${we}`)
            });
      }), Ne.normal && y && U.scene.traverse((oe) => {
        if (!oe.isMesh) return;
        const le = oe.material;
        le != null && le.normalMap && Q.push({
          material: le,
          prop: "normalMap",
          url: this.resolve(`${this.masksBaseUrl}${r}_normal@2x.webp`)
        });
      }), Q.length > 0 && this._hiResQueue.set(e.Category + (t ? 100 : 0), Q);
    }
  }
  /** 스트림 기반 fetch (스켈레톤용 — 바이트 단위 진행률) */
  async _fetchWithStream(e, t, n = 3) {
    for (let i = 0; i < n; i++) {
      let r;
      try {
        r = await fetch(e);
      } catch (h) {
        if (i < n - 1) {
          await new Promise((f) => setTimeout(f, 500 * (i + 1)));
          continue;
        }
        throw h;
      }
      if (r.status === 429 && i < n - 1) {
        await new Promise((h) => setTimeout(h, 300 * (i + 1)));
        continue;
      }
      if (!r.ok) throw new Error(`Fetch failed ${r.status}: ${e}`);
      const a = parseInt(r.headers.get("content-length") || "0", 10);
      if (!r.body || a <= 0) {
        const h = await r.arrayBuffer();
        return t(1), h;
      }
      const o = r.body.getReader(), l = [];
      let c = 0;
      for (; ; ) {
        const { done: h, value: f } = await o.read();
        if (h) break;
        l.push(f), c += f.byteLength, t(c / a);
      }
      const u = new Uint8Array(c);
      let d = 0;
      for (const h of l)
        u.set(h, d), d += h.byteLength;
      return u.buffer;
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
  /** 429 자동 재시도 + 바이트 진행률 추적 fetch */
  async fetchWithProgress(e, t = 3) {
    await this._acquireFetchSlot();
    try {
      return await this._fetchWithProgressInner(e, t);
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
    const t = await this.fetchWithProgress(e), n = new Blob([t]);
    this._resourceSizes.set(e, n.size);
    const i = URL.createObjectURL(n);
    return new Promise((r, a) => {
      this.textureLoader.load(i, (o) => {
        URL.revokeObjectURL(i), o.flipY = !1, o.colorSpace = ht, r(o);
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
  applyMask2TintMaterial(e, t, n, i) {
    const a = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof cn)) return o;
      const l = (v) => new re(v.r, v.g, v.b).convertSRGBToLinear(), c = n != null && n[0] ? l(n[0]) : void 0, u = n != null && n[1] ? l(n[1]) : void 0, d = n != null && n[2] ? l(n[2]) : void 0, h = n != null && n[3] ? l(n[3]) : void 0, f = n != null && n[4] ? l(n[4]) : void 0, g = o.userData, _ = g._Emissive_Strangth != null && i, m = g._Mask_Center_X != null ? new P(g._Mask_Center_X, g._Mask_Center_Y, g._Mask_Center_Z) : void 0, p = g._Mask_Radius ?? void 0, M = Gp(o, {
        maskTintMap1: t.mask1,
        maskTintMap2: t.mask2,
        pbrMaskMap: t.pbr,
        tintColorR1Uniform: this.skinColorUniform,
        tintColorG1: c,
        tintColorB1: u,
        tintColorR2: d,
        tintColorG2: h,
        tintColorB2: f,
        metallicIntensity: g._MetallicIntensity,
        smoothness: g._Smoothness,
        aoIntensity: g._AOIntensity,
        rimPower: g._Rim_Power,
        rimEdgePower: g._Rim_Edge_Power,
        emissiveMap: _ ? i : void 0,
        emissiveStrength: g._Emissive_Strangth,
        emissiveTintColor: f,
        // _Mask2_Tint_B = colors[4]
        maskRadius: p
      });
      return m && (M.userData.rawMaskCenterUnity = m.clone(), M.userData.hasExplicitVolumeMask = !0), M;
    });
    e.material = a.length === 1 ? a[0] : a, this.attachVolumeMaskDepthMaterial(e);
  }
  applyMaskTintMaterial(e, t, n, i) {
    const a = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof cn)) return o;
      const l = (M) => new re(M.r, M.g, M.b).convertSRGBToLinear();
      let c, u, d, h = !1;
      n === 1 ? (c = i != null && i[0] ? l(i[0]) : void 0, u = i != null && i[1] ? l(i[1]) : void 0) : n === 10 ? (c = new re(0, 0, 0), u = i != null && i[0] ? l(i[0]) : void 0, d = i != null && i[1] ? l(i[1]) : void 0) : (h = !0, u = i != null && i[0] ? l(i[0]) : void 0, d = i != null && i[1] ? l(i[1]) : void 0);
      const f = o.userData, g = f._Mask_Center_X != null ? new P(f._Mask_Center_X, f._Mask_Center_Y, f._Mask_Center_Z) : void 0, _ = f._Mask_Radius ?? void 0, m = n === 1, p = Hp(o, {
        maskTintMap: t.mask,
        pbrMaskMap: t.pbr,
        tintColorR: c,
        tintColorRUniform: h ? this.skinColorUniform : void 0,
        tintColorG: u,
        tintColorB: d,
        metallicIntensity: f._MetallicIntensity,
        smoothness: f._Smoothness,
        aoIntensity: f._AOIntensity,
        rimPower: f._Rim_Power,
        rimEdgePower: f._Rim_Edge_Power,
        maskRadius: _,
        decalSlots: m ? Ke.MAX_DECAL_SLOTS : 0
      });
      if (g && (p.userData.rawMaskCenterUnity = g.clone(), p.userData.hasExplicitVolumeMask = !0), m) {
        const M = zp(p);
        M && (this.faceDecalSlots = M, this.faceSkinnedMesh = e);
      }
      return p;
    });
    e.material = a.length === 1 ? a[0] : a, this.attachVolumeMaskDepthMaterial(e);
  }
  applySpriteMaskTintMaterial(e, t, n, i, r) {
    const a = Array.isArray(e.material) ? e.material : [e.material], o = i === 3, l = i === 3 ? r ? "eye_r" : "eye_l" : i === 2 ? r ? "eyebrow_r" : "eyebrow_l" : "mouth_l", c = {
      rotation: { value: 0 },
      scale: { value: 1.5 },
      offsetX: { value: 0 },
      offsetY: { value: 0 }
    };
    this.uvTransforms.set(l, c);
    const u = a.map((d) => {
      if (!(d instanceof cn)) return d;
      const h = (_) => new re(_.r, _.g, _.b).convertSRGBToLinear(), f = n != null && n[0] ? h(n[0]) : void 0, g = n != null && n[1] ? h(n[1]) : void 0;
      return Wp(d, {
        maskTintMap: t,
        tintColorRUniform: this.skinColorUniform,
        tintColorG: f,
        tintColorB: g,
        uvScaleYEyeBlink: o ? this.eyeBlinkUniform : void 0,
        uvTransform: c
      });
    });
    e.material = u.length === 1 ? u[0] : u;
  }
  applyHairMaterial(e, t, n, i) {
    const a = (Array.isArray(e.material) ? e.material : [e.material]).map((o) => {
      if (!(o instanceof cn)) return o;
      const l = (m) => new re(m.r, m.g, m.b).convertSRGBToLinear(), c = n != null && n[0] ? l(n[0]) : void 0, u = n != null && n[1] ? l(n[1]) : void 0, d = o.transparent, h = o.userData, f = h._Mask_Center_X != null ? new P(h._Mask_Center_X, h._Mask_Center_Y, h._Mask_Center_Z) : void 0, g = h._Mask_Radius ?? void 0, _ = Vp(o, {
        baseColor: c,
        specColor: u,
        maskMap: t,
        normalMap: i ?? void 0,
        blend: d,
        smoothness: h._Smoothness,
        specularShift: h._SpecularShift,
        specularExponent: h._SpecularExponent,
        secondarySpecularShift: h._SecondarySpecularShift,
        secondarySpecularExponent: h._SecondarySpecularExponent,
        enableSecondaryLobe: h._EnableSecondaryLobe !== 0,
        hairRim: h._Hair_Rim ?? (d ? 1.5 : void 0),
        normalInten: h._BumpScale,
        shiftDirection: this._hairShiftDir,
        maskRadius: g
      });
      return f && (_.userData.rawMaskCenterUnity = f.clone(), _.userData.hasExplicitVolumeMask = !0), _;
    });
    e.material = a.length === 1 ? a[0] : a, this.attachVolumeMaskDepthMaterial(e);
  }
  applyLensMaterial(e, t) {
    const n = e.material, i = n.aoMap, r = (d) => new re(d.r, d.g, d.b).convertSRGBToLinear(), a = t != null && t[2] ? r(t[2]) : void 0, o = t != null && t[3] ? r(t[3]) : void 0, l = t != null && t[4] ? r(t[4]) : void 0, c = n.userData, u = 0.8;
    e.material = jp(n, {
      pbrMaskMap: i ?? void 0,
      topColor: a,
      bottomColor: o,
      specularColor: l,
      gradientSmooth: c._Gradient_Smooth,
      gradientPosition: c._Gradient_Position,
      specularPower: c._Specular_Power,
      fresnelPower: c._Fresnel_Power,
      smoothness: c._Smoothness,
      metallicIntensity: c._MetallicIntensity,
      aoIntensity: c._AOIntensity,
      lightScale: u
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
    const i = new _s(n, t.boneInverses);
    if (e.bind(i, e.bindMatrix), !this.headJointMatrix) {
      for (let r = 0; r < t.bones.length; r++)
        if (t.bones[r].name === "Bip001_Head" || t.bones[r].name === "Bip001_Head_1") {
          const a = t.boneInverses[r];
          this.headJointMatrix = a.clone().invert(), new P().setFromMatrixPosition(this.headJointMatrix);
          const l = new P(), c = new P(), u = new P();
          this.headJointMatrix.extractBasis(l, c, u);
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
    const i = new po({
      depthPacking: 3201
    }), r = {
      volumeMaskEnable: n.volumeMaskEnable,
      volumeMaskCenter: n.volumeMaskCenter,
      volumeMaskRadius: n.volumeMaskRadius
    };
    i.onBeforeCompile = (l) => {
      for (const [c, u] of Object.entries(r))
        l.uniforms[c] = u;
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
      if (r instanceof cn && n.length > 0 && n[0]) {
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
          const r = To[i.type];
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
          t && (t.offsetY.value = l / 45 * 0.15);
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
    this.mixer = new Kf(this.avatarRoot);
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
    t ? (i.setLoop(2201, 1 / 0), i.clampWhenFinished = !1) : (i.setLoop(2200, 1), i.clampWhenFinished = !0), this.currentAction && this.currentAction !== i ? (this.currentAction.enabled = !0, i.reset(), i.play(), i.crossFadeFrom(this.currentAction, 0.25, !0)) : (i.reset(), i.play()), this.currentAction = i;
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
    this.hairNodes.cap.visible = e, this.hairNodes.normal.visible = !e;
  }
  isCapActive() {
    const e = this.activeParts.get("8");
    return e != null && e.length > 0;
  }
  /** SmoothEyeBlink — 매 프레임 호출 */
  updateEyeBlink(e) {
    if (!this._eyeBlinkPaused) {
      if (this.eyeBlinkElapsed >= 0) {
        if (this.eyeBlinkElapsed += e, this.eyeBlinkElapsed >= Ke.BLINK_DURATION)
          this.eyeBlinkUniform.value = 1, this.eyeBlinkElapsed = -1, this.eyeBlinkDoublePending ? (this.eyeBlinkDoublePending = !1, this.eyeBlinkNextAt = 0.1) : this.eyeBlinkNextAt = Ke.BLINK_MIN_INTERVAL + Math.random() * (Ke.BLINK_MAX_INTERVAL - Ke.BLINK_MIN_INTERVAL);
        else {
          const t = this.eyeBlinkElapsed / Ke.BLINK_DURATION, n = Math.sin(t * Math.PI);
          this.eyeBlinkUniform.value = 1 - n * 0.85;
        }
        return;
      }
      this.eyeBlinkTimer += e, this.eyeBlinkTimer >= this.eyeBlinkNextAt && (this.eyeBlinkTimer = 0, this.eyeBlinkElapsed = 0, this.eyeBlinkDoublePending = Math.random() < Ke.BLINK_DOUBLE_CHANCE);
    }
  }
  /** 눈 깜빡임 타이머 초기화 (파츠 로드 완료 후 호출) */
  resetEyeBlink() {
    this.eyeBlinkUniform.value = 1, this.eyeBlinkElapsed = -1, this.eyeBlinkTimer = 0, this.eyeBlinkNextAt = Ke.BLINK_MIN_INTERVAL + Math.random() * (Ke.BLINK_MAX_INTERVAL - Ke.BLINK_MIN_INTERVAL), this.eyeBlinkDoublePending = !1;
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
  /** partsdata.json 로드 (최초 1회, 이후 캐시) */
  async loadPartsMetadata() {
    return this.partsMetadata ? this.partsMetadata : this.partsMetadataPromise ? this.partsMetadataPromise : (this.partsMetadataPromise = (async () => {
      try {
        const e = this.resolve("partsdata.json"), t = await fetch(e);
        if (!t.ok) throw new Error(`Failed: ${t.status}`);
        const n = await t.json();
        return this.partsMetadata = n, n;
      } catch (e) {
        return console.warn("[AvatarViewer] partsdata.json 로드 실패:", e), this.partsMetadata = {}, {};
      }
    })(), this.partsMetadataPromise);
  }
  /** 데칼 카테고리인지 확인 */
  static isDecalCategory(e) {
    return e >= 12 && e <= 16;
  }
  /** 데칼 파츠 로드 (texture + 프로젝터 설정) */
  async loadDecalPart(e, t, n, i) {
    const r = this.swapSeq.get(e) ?? 0;
    if (this.removeDecalCategory(e), !t || t === "") return;
    const a = await this.loadDecalsMetadata();
    if ((this.swapSeq.get(e) ?? 0) !== r) return;
    const o = a[t];
    if (!o || !o.projectors || o.projectors.length === 0) {
      console.warn(`[Decal] 메타데이터 없음: ${t}`, o);
      return;
    }
    const l = this.boneMap.get(o.bone);
    if (!l) {
      console.warn(`[Decal] 본 없음: ${o.bone}`);
      return;
    }
    const c = (g) => {
      const _ = (p) => p.r === 0 && p.g === 0 && p.b === 0 && p.a === 0;
      if (n && n.length > 0 && !_(n[0])) {
        const p = i && g > 0 && n.length > 1 ? 1 : 0, M = n[p], v = new re(M.r, M.g, M.b).convertSRGBToLinear();
        return new He(v.r, v.g, v.b, M.a);
      } else if (o.color) {
        const p = new re(o.color[0], o.color[1], o.color[2]).convertSRGBToLinear();
        return new He(p.r, p.g, p.b, o.color[3]);
      }
      return new He(1, 1, 1, 1);
    }, u = [], d = [], f = o.projectors.length > 1 ? ["", "_Ex"] : [""];
    for (const g of f)
      try {
        const _ = this.resolve(`${this.partsBaseUrl}${t}${g}.glb`), m = await fetch(_);
        if (m.ok) {
          const p = await m.arrayBuffer();
          this._resourceSizes.set(_, p.byteLength);
          const M = await new Promise((v, y) => {
            this.gltfLoader.parse(p, "", (T) => v(T.scene), y);
          });
          d.push(M);
        } else
          d.push(null);
      } catch {
        d.push(null);
      }
    if ((this.swapSeq.get(e) ?? 0) === r) {
      for (let g = 0; g < o.projectors.length; g++) {
        const _ = o.projectors[g];
        if (!_.texture || !_.size) continue;
        const m = this.findFreeDecalSlot();
        if (m < 0) {
          console.warn(`[Decal] 빈 슬롯 없음 (max ${Ke.MAX_DECAL_SLOTS})`);
          break;
        }
        let p;
        try {
          const w = this.resolve(this.decalsBaseUrl + _.texture);
          p = await this.loadTexture(w), p.colorSpace = gt, p.generateMipmaps = !1, p.minFilter = 1006;
          const U = p.image;
          this._decalTextures.push({
            type: "decal",
            name: w.split("/").pop() || "",
            url: w,
            size: this._resourceSizes.get(w) ?? 0,
            texture: p,
            width: (U == null ? void 0 : U.width) ?? 0,
            height: (U == null ? void 0 : U.height) ?? 0
          });
        } catch (w) {
          console.warn(`[Decal] 텍스처 로드 실패: ${_.texture}`, w);
          continue;
        }
        if ((this.swapSeq.get(e) ?? 0) !== r) return;
        const M = new Pe(), v = d[g] ?? d[0];
        if (v) {
          const w = v.children[0];
          w && (w.updateMatrix(), M.copy(w.matrix));
        } else if (_.position || _.rotation) {
          const w = new P(..._.position ?? [0, 0, 0]), U = new Lt(..._.rotation ?? [0, 0, 0, 1]);
          M.compose(w, U, new P(1, 1, 1));
        }
        const y = new Pe().set(
          1 / _.size[0],
          0,
          0,
          0.5,
          0,
          1 / _.size[1],
          0,
          0.5,
          0,
          0,
          1 / _.size[2],
          0.5,
          0,
          0,
          0,
          1
        ), T = c(g), R = {
          slotIndex: m,
          category: e,
          bone: l,
          localMatrix: M,
          sizeScaleMatrix: y,
          texture: p,
          color: T.clone(),
          hasSkinColor: !!o.hasSkinColor
        };
        this.activeDecalProjectors.set(m, R), u.push(m);
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
    for (let e = 0; e < Ke.MAX_DECAL_SLOTS; e++)
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
      const i = Ke.DECAL_DRAW_ORDER[t.category] ?? 0, r = Ke.DECAL_DRAW_ORDER[n.category] ?? 0;
      return i - r;
    });
    for (let t = 0; t < this.faceDecalSlots.length; t++)
      this.faceDecalSlots[t].enabled.value = 0;
    this.activeDecalProjectors.clear(), this.decalCategorySlots.clear();
    for (let t = 0; t < e.length && t < Ke.MAX_DECAL_SLOTS; t++) {
      const n = e[t];
      n.slotIndex = t, this.activeDecalProjectors.set(t, n);
      const i = this.decalCategorySlots.get(n.category) ?? [];
      i.push(t), this.decalCategorySlots.set(n.category, i);
      const r = this.faceDecalSlots[t];
      r.enabled.value = 1, r.texture.value = n.texture, r.color.value = n.color.clone(), r.useSkinColor.value = n.hasSkinColor ? 1 : 0;
    }
  }
  /** 매 프레임: 데칼 프로젝션 행렬 갱신 (본 애니메이션 반영) */
  updateDecalProjections() {
    if (this.activeDecalProjectors.size === 0 || this.faceDecalSlots.length === 0) return;
    const e = new Pe(), t = new Pe(), n = new Pe(), i = new Pe();
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
Ke.BLINK_DURATION = 0.15, Ke.BLINK_MIN_INTERVAL = 2, Ke.BLINK_MAX_INTERVAL = 6, Ke.BLINK_DOUBLE_CHANCE = 0.15, Ke.MAX_DECAL_SLOTS = 6, Ke.DECAL_DRAW_ORDER = {
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
}, Ke.HAIR_PROP_MAP = {
  _Smoothness: "hairSmoothness",
  _SpecularShift: "hairSpecShift",
  _SpecularExponent: "hairSpecExponent",
  _SecondarySpecularShift: "hairSecSpecShift",
  _SecondarySpecularExponent: "hairSecSpecExponent",
  _Hair_Rim: "hairRimTransmission"
}, Ke.PROP_UNIFORM_MAP = {
  _MetallicIntensity: "metallicIntensity",
  _Smoothness: "smoothnessIntensity",
  _AOIntensity: "aoIntensity",
  _Rim_Power: "rimPower",
  _Rim_Edge_Power: "rimEdgePower",
  _Emissive_Strangth: "emissiveStrength",
  _Blink_Speed: "blinkSpeed",
  _Gradient_Smooth: "lensGradientSmooth",
  _Gradient_Position: "lensGradientPosition",
  _Specular_Power: "lensSpecPower",
  _Fresnel_Power: "lensFresnelPower"
}, Ke.POSE_ANIM_MAP = {
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
  Pose_ZombieWalk: "Ani_012_ZombieWalk"
};
let pr = Ke;
var To = /* @__PURE__ */ ((s) => (s[s.Fat = 0] = "Fat", s[s.Muscles = 1] = "Muscles", s[s.Slimness = 2] = "Slimness", s[s.Thin = 3] = "Thin", s[s.BreastSize = 4] = "BreastSize", s[s.Neck_Width = 5] = "Neck_Width", s[s.EyeL_Rotate_Left = 6] = "EyeL_Rotate_Left", s[s.EyeL_Rotate_Right = 7] = "EyeL_Rotate_Right", s[s.EyeR_Rotate_Left = 8] = "EyeR_Rotate_Left", s[s.EyeR_Rotate_Right = 9] = "EyeR_Rotate_Right", s[s.EyeL_Move_Up = 10] = "EyeL_Move_Up", s[s.EyeL_Move_Down = 11] = "EyeL_Move_Down", s[s.EyeR_Move_Up = 12] = "EyeR_Move_Up", s[s.EyeR_Move_Down = 13] = "EyeR_Move_Down", s[s.EyeL_Scale_Up = 14] = "EyeL_Scale_Up", s[s.EyeL_Scale_Down = 15] = "EyeL_Scale_Down", s[s.EyeR_Scale_Up = 16] = "EyeR_Scale_Up", s[s.EyeR_Scale_Down = 17] = "EyeR_Scale_Down", s[s.EyeL_Move_In = 18] = "EyeL_Move_In", s[s.EyeL_Move_Out = 19] = "EyeL_Move_Out", s[s.EyeR_Move_In = 20] = "EyeR_Move_In", s[s.EyeR_Move_Out = 21] = "EyeR_Move_Out", s[s.BrowL_Rotate_Left = 22] = "BrowL_Rotate_Left", s[s.BrowL_Rotate_Right = 23] = "BrowL_Rotate_Right", s[s.BrowR_Rotate_Left = 24] = "BrowR_Rotate_Left", s[s.BrowR_Rotate_Right = 25] = "BrowR_Rotate_Right", s[s.BrowL_Move_Up = 26] = "BrowL_Move_Up", s[s.BrowL_Move_Down = 27] = "BrowL_Move_Down", s[s.BrowR_Move_Up = 28] = "BrowR_Move_Up", s[s.BrowR_Move_Down = 29] = "BrowR_Move_Down", s[s.BrowL_Scale_Up = 30] = "BrowL_Scale_Up", s[s.BrowL_Scale_Down = 31] = "BrowL_Scale_Down", s[s.BrowR_Scale_Up = 32] = "BrowR_Scale_Up", s[s.BrowR_Scale_Down = 33] = "BrowR_Scale_Down", s[s.BrowL_Move_In = 34] = "BrowL_Move_In", s[s.BrowL_Move_Out = 35] = "BrowL_Move_Out", s[s.BrowR_Move_In = 36] = "BrowR_Move_In", s[s.BrowR_Move_Out = 37] = "BrowR_Move_Out", s[s.Nose_Rotate_Left = 38] = "Nose_Rotate_Left", s[s.Nose_Rotate_Right = 39] = "Nose_Rotate_Right", s[s.Nose_Scale_Up = 40] = "Nose_Scale_Up", s[s.Nose_Scale_Down = 41] = "Nose_Scale_Down", s[s.Nose_Move_Left = 42] = "Nose_Move_Left", s[s.Nose_Move_Right = 43] = "Nose_Move_Right", s[s.Nose_Move_Up = 44] = "Nose_Move_Up", s[s.Nose_Move_Down = 45] = "Nose_Move_Down", s[s.Mouth_Rotate_Left = 46] = "Mouth_Rotate_Left", s[s.Mouth_Rotate_Right = 47] = "Mouth_Rotate_Right", s[s.Mouth_Scale_Up = 48] = "Mouth_Scale_Up", s[s.Mouth_Scale_Down = 49] = "Mouth_Scale_Down", s[s.Mouth_Move_Left = 50] = "Mouth_Move_Left", s[s.Mouth_Move_Right = 51] = "Mouth_Move_Right", s[s.Mouth_Move_Up = 52] = "Mouth_Move_Up", s[s.Mouth_Move_Down = 53] = "Mouth_Move_Down", s[s.Face_Vertical_Up = 54] = "Face_Vertical_Up", s[s.Face_Vertical_Down = 55] = "Face_Vertical_Down", s[s.Face_Horizon_Up = 56] = "Face_Horizon_Up", s[s.Face_Horizon_Down = 57] = "Face_Horizon_Down", s[s.Face_Nose_Scale_Up = 58] = "Face_Nose_Scale_Up", s[s.Face_Nose_Scale_Down = 59] = "Face_Nose_Scale_Down", s[s.Face_Ear_Fold = 60] = "Face_Ear_Fold", s[s.Glasses_Move_Up = 61] = "Glasses_Move_Up", s[s.Glasses_Move_Down = 62] = "Glasses_Move_Down", s[s.Face_Jaw_Square = 63] = "Face_Jaw_Square", s[s.Face_Jaw_Sharp = 64] = "Face_Jaw_Sharp", s[s.Face_Nose_Vertical_Down = 65] = "Face_Nose_Vertical_Down", s[s.Face_Nose_Vertical_Up = 66] = "Face_Nose_Vertical_Up", s[s.Face_Nose_Real_Down = 67] = "Face_Nose_Real_Down", s[s.Face_Nose_Real_Up = 68] = "Face_Nose_Real_Up", s))(To || {});
class qp {
  constructor(e) {
    this.visible = !0, this.ready = !1, this.nativeHeight = 0, this.hover = !1, this.disposed = !1, this.id = e.id, this.element = e.element, this.scene = e.scene, this.onLoaded = e.onLoaded, this.onError = e.onError, this.viewer = new pr(e.scene, { baseUrl: e.baseUrl }), this.root = this.viewer.getAvatarRoot();
  }
  get isDisposed() {
    return this.disposed;
  }
  /** AvatarViewer 내장 기본 프리셋 사용 (테스트 편의용) */
  async loadDefault() {
    var e, t;
    if (!this.disposed)
      try {
        if (await this.viewer.start(), this.disposed) return;
        this.measureNativeHeight(), (e = this.onLoaded) == null || e.call(this, this.id);
      } catch (n) {
        throw this.disposed || (t = this.onError) == null || t.call(this, this.id, n instanceof Error ? n : new Error(String(n))), n;
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
    const n = new Yt().setFromObject(this.root), i = new P();
    n.getSize(i), this.nativeHeight = i.y, this.root.scale.copy(e), this.root.position.copy(t), this.root.updateMatrixWorld(!0);
  }
  /** AvatarDataJson 객체 직접 전달 (내부 사용 — 콜백 발사 없음) */
  async loadDataInternal(e) {
    this.disposed || (await this.viewer.loadAvatarFromData(e), !this.disposed && this.measureNativeHeight());
  }
  /** AvatarDataJson 객체 직접 전달 — onLoaded/onError 발사 */
  async loadFromData(e) {
    var t, n;
    if (!this.disposed)
      try {
        await this.loadDataInternal(e), (t = this.onLoaded) == null || t.call(this, this.id);
      } catch (i) {
        throw this.disposed || (n = this.onError) == null || n.call(this, this.id, i instanceof Error ? i : new Error(String(i))), i;
      }
  }
  /**
   * 프리셋 URL fetch + 로드 — onLoaded/onError 발사.
   * API 응답이 { avatar_json: "..." } 래핑이면 풀고, 평탄 객체면 그대로 사용.
   */
  async loadFromUrl(e) {
    var t, n;
    if (!this.disposed)
      try {
        const i = await fetch(e);
        if (!i.ok) throw new Error(`preset HTTP ${i.status}: ${e}`);
        const r = await i.json(), a = typeof (r == null ? void 0 : r.avatar_json) == "string" ? JSON.parse(r.avatar_json) : r;
        await this.loadDataInternal(a), this.disposed || (t = this.onLoaded) == null || t.call(this, this.id);
      } catch (i) {
        throw this.disposed || (n = this.onError) == null || n.call(this, this.id, i instanceof Error ? i : new Error(String(i))), i;
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
function Kp(s) {
  return new Mt({
    uniforms: {
      uBaseColor: { value: new re(s) },
      uSlotSize: { value: new Le(1, 1) },
      // 픽셀 단위 (w, h)
      uCornerRadius: { value: 12 },
      // 픽셀 단위
      uOutlineWidth: { value: 1 },
      // 픽셀 단위
      uOutlineColor: { value: new He(1, 1, 1, 0.05) }
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
            uniform vec3 uBaseColor;
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

            // CSS radial-gradient(ellipse at center, color 0%, transparent endPercent) 근사.
            // distance / endPercent 를 0..1로 변환 후 smoothstep으로 fade out.
            // Aspect-ratio 보정을 위해 카드 비율 고려한 elliptical 거리 사용.
            float radialAlpha(vec2 uv, vec2 center, float endPercent, vec2 aspectScale) {
                vec2 d = (uv - center) * aspectScale;
                float dist = length(d) / endPercent;
                return 1.0 - smoothstep(0.0, 1.0, dist);
            }

            void main() {
                // 라운드 사각형 마스크
                vec2 pixelPos = (vUv - 0.5) * uSlotSize;
                float sdf = sdRoundedRect(pixelPos, uSlotSize * 0.5, uCornerRadius);
                float mask = 1.0 - smoothstep(-0.5, 0.5, sdf);
                if (mask <= 0.0) discard;

                // CSS ellipse는 박스 비율을 따라감 — 정사각형 ellipse가 카드 비율에 stretch.
                // shader에서 ellipse 형태를 matching하려면 uv를 box 비율로 normalize.
                // aspectScale = (1, w/h) 이면 짧은 축 기준 elliptical → CSS와 비슷.
                vec2 aspectScale = vec2(1.0, uSlotSize.x / uSlotSize.y);

                vec3 col = uBaseColor;

                // Layer 3 (가장 아래 → 위로): shadow at 70% 80%, black 0.25, end 50%
                float a3 = radialAlpha(vUv, vec2(0.7, 0.8), 0.5, aspectScale) * 0.25;
                col = mix(col, vec3(0.0), a3);

                // Layer 2: highlight at 85% 75%, white 0.12, end 45%
                float a2 = radialAlpha(vUv, vec2(0.85, 0.75), 0.45, aspectScale) * 0.12;
                col = mix(col, vec3(1.0), a2);

                // Layer 1 (가장 위): highlight at 30% 30%, white 0.15, end 40%
                float a1 = radialAlpha(vUv, vec2(0.3, 0.3), 0.4, aspectScale) * 0.15;
                col = mix(col, vec3(1.0), a1);

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
function Yp(s) {
  s.traverse((e) => {
    const t = e;
    if (!t.isMesh) return;
    const n = Array.isArray(t.material) ? t.material : [t.material];
    for (const i of n)
      i && (i.transparent || (i.transparent = !0, i.blending = 5, i.blendEquation = 100, i.blendSrc = 201, i.blendDst = 200, i.blendEquationAlpha = 100, i.blendSrcAlpha = 200, i.blendDstAlpha = 201, i.depthWrite = !0));
  });
}
function $a(s) {
  const e = new Lt().setFromEuler(
    new jt(
      yi.degToRad(s.x),
      yi.degToRad(-s.y),
      yi.degToRad(-s.z),
      "YXZ"
    )
  ), t = new P(0, 0, 1).applyQuaternion(e);
  return new P().addScaledVector(t, -5);
}
const In = class In {
  constructor(e) {
    this.composer = null, this.rafId = 0, this.lastT = 0, this.resizeObserver = null, this.paused = !1, this.instances = /* @__PURE__ */ new Map(), this.slotQuads = /* @__PURE__ */ new Map(), this.loadGen = 0, this.container = e.container, this.canvas = e.canvas, this.baseUrl = e.baseUrl, this.dprCap = e.dprCap ?? 1.5, this.onContextLost = e.onContextLost, this.renderer = new af({
      canvas: this.canvas,
      alpha: !0,
      antialias: !0,
      powerPreference: "high-performance"
    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.dprCap)), this.renderer.setClearColor(0, 0), this.renderer.toneMapping = 1, this.renderer.toneMappingExposure = on.toneMappingExposure, this.renderer.outputColorSpace = gt, this.canvas.addEventListener("webglcontextlost", (t) => {
      var n;
      t.preventDefault(), (n = this.onContextLost) == null || n.call(this);
    }, !1), this.scene = new Aa(), this.camera = new Ci(0, 1, 1, 0, 0.1, 2e3), this.camera.position.z = 1e3, this.setupLights(), this.setupEnvMap(), this.setupComposer(), this.setupResize(), this.start();
  }
  /**
   * EffectComposer 파이프라인 — oz-avatar.ts와 동일.
   * RenderPass → UnrealBloomPass(emissive boost) → LiftGammaGain → OutputPass.
   * LinearToneMapping + 강한 라이트 → HDR 값 폭발하므로 LGG가 필수 (압축).
   */
  setupComposer() {
    const e = this.container.clientWidth || 1, t = this.container.clientHeight || 1, n = Math.min(window.devicePixelRatio, this.dprCap), i = new Nt(e * n, t * n, {
      type: 1016,
      samples: 4
    });
    this.composer = new Jf(this.renderer, i), this.composer.addPass(new ep(this.scene, this.camera));
    const r = on.bloom, a = new si(
      new Le(e * n, t * n),
      0,
      r.radius,
      r.threshold
    );
    this.composer.addPass(a), a.materialHighPassFilter.fragmentShader = `
            uniform sampler2D tDiffuse;
            uniform vec3 defaultColor;
            uniform float defaultOpacity;
            uniform float luminosityThreshold;
            uniform float smoothWidth;
            varying vec2 vUv;
            void main() {
                vec4 texel = texture2D(tDiffuse, vUv);
                vec4 outputColor = vec4(defaultColor.rgb, defaultOpacity);
                float v = dot(texel.xyz, vec3(0.2126, 0.7152, 0.0722));
                float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
                vec4 extracted = mix(outputColor, texel, alpha);
                extracted *= (1.0 + texel.a * ${r.emissiveBoost.toFixed(2)});
                gl_FragColor = extracted;
            }
        `, a.materialHighPassFilter.needsUpdate = !0, this.composer.addPass(new yo({
      uniforms: {
        tDiffuse: { value: null },
        uInvGamma: { value: new P(...on.liftGammaGain.invGamma) },
        uGain: { value: new P(...on.liftGammaGain.gain) }
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
                    float peak = max(max(c.r, c.g), c.b);
                    if (peak > 1.0) {
                        c *= (1.0 + log(peak)) / peak;
                        c = clamp(c, 0.0, 1.0);
                    }
                    c = uGain * pow(c, uInvGamma);
                    vec3 outColor = clamp(c, 0.0, 1.0);
                    // alpha-preserving blending + opaque slot quad → tex.a가 정상.
                    // premultipliedAlpha=true 캔버스라 color * alpha 출력.
                    gl_FragColor = vec4(outColor * tex.a, tex.a);
                }
            `
    })), this.composer.addPass(new ip());
  }
  /**
   * SceneConfig 값으로 main / rim / ambient light 설정.
   * envMap은 setupEnvMap에서 별도 처리.
   */
  setupLights() {
    const e = on.mainLight, t = new ur(new re(e.color), e.intensity);
    t.target.position.set(0, 0, 0), this.scene.add(t.target), t.position.copy($a(e.rotation)), this.scene.add(t);
    const n = on.rimLight, i = new ur(new re(n.color), n.intensity);
    i.position.copy($a(n.rotation)), this.scene.add(i);
    const r = on.ambient, a = new If(new re(r.color), r.intensity);
    this.scene.add(a);
  }
  /** PMREM 환경맵 (specular IBL용 — oz-avatar.ts와 동일) */
  setupEnvMap() {
    const e = new rr(this.renderer), t = new Aa();
    t.background = new re(on.envMapColor), this.scene.environment = e.fromScene(t).texture, e.dispose();
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
  /**
   * 매 프레임 인스턴스 위치/스케일/가시 갱신 + 가시 카드만 viewer.update.
   * READ phase: 모든 element rect를 한 번에 읽어 layout reflow 1회로 묶음.
   */
  tickInstances(e) {
    if (this.instances.size === 0) return;
    const t = this.container.getBoundingClientRect(), n = this.container.clientHeight;
    for (const i of this.instances.values()) {
      const r = i.element.getBoundingClientRect(), a = r.left + r.width / 2 - t.left, o = r.top + r.height / 2 - t.top, l = n - o, c = this.slotQuads.get(i.id);
      c && (c.mesh.position.set(a, l, -500), c.mesh.scale.set(r.width, r.height, 1), c.material.uniforms.uSlotSize.value.set(r.width, r.height));
      const u = i.nativeHeight > 0 ? i.nativeHeight : 1.2, d = r.height * 0.6 / u, h = -(u / 2) * d;
      i.root.position.set(a, l + h, 0), i.root.scale.setScalar(d);
      const f = r.bottom > 0 && r.top < window.innerHeight;
      i.visible = f, i.root.visible = f && i.ready, c && (c.mesh.visible = f && i.ready), f && i.update(e);
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
    var l;
    this.clearInstances();
    const n = e.length;
    let i = 0;
    const r = () => {
      var c;
      i++, i >= n && ((c = t == null ? void 0 : t.onAllReady) == null || c.call(t, n));
    }, a = ++this.loadGen, o = [];
    for (const c of e) {
      const u = this.createSlotQuad(c.bgColor ?? "#2a2a2a");
      this.scene.add(u.mesh), this.slotQuads.set(c.id, u);
      const d = new qp({
        id: c.id,
        element: c.element,
        scene: this.scene,
        baseUrl: this.baseUrl,
        onLoaded: (h) => {
          d.isDisposed || Yp(d.root), setTimeout(() => {
            var f;
            d.isDisposed || (d.ready = !0, (f = t == null ? void 0 : t.onLoaded) == null || f.call(t, h), r());
          }, In.REVEAL_DELAY_MS);
        },
        onError: (h, f) => {
          var g;
          (g = t == null ? void 0 : t.onError) == null || g.call(t, h, f), r();
        }
      });
      d.root.rotation.y = yi.degToRad(on.avatar.rotationY), this.instances.set(c.id, d), o.push(() => d.isDisposed || a !== this.loadGen ? Promise.resolve() : c.presetUrl ? d.loadFromUrl(c.presetUrl) : d.loadDefault());
    }
    if (n === 0) {
      (l = t == null ? void 0 : t.onAllReady) == null || l.call(t, 0);
      return;
    }
    this.runBatchedLoads(o, a);
  }
  /**
   * 행 단위 batch 로드.
   * 한 번에 ROW_SIZE개씩 동시 시작하고, 모두 끝나야 다음 batch 시작.
   */
  async runBatchedLoads(e, t) {
    for (let n = 0; n < e.length; n += In.ROW_SIZE) {
      if (t !== this.loadGen) return;
      const i = e.slice(n, n + In.ROW_SIZE);
      await Promise.all(i.map((r) => r().catch(() => {
      })));
    }
  }
  /** 호버 상태 설정 (DOM 측에서 mouseenter/leave로 호출) */
  setHover(e, t) {
    const n = this.instances.get(e);
    n && (n.hover = t);
  }
  clearInstances() {
    this.loadGen++;
    for (const e of this.instances.values())
      e.dispose();
    this.instances.clear();
    for (const e of this.slotQuads.values())
      this.scene.remove(e.mesh), e.mesh.geometry.dispose(), e.material.dispose();
    this.slotQuads.clear();
  }
  /** Slot 배경 quad 생성 — 1x1 unit PlaneGeometry + RuntimeGradient ShaderMaterial */
  createSlotQuad(e) {
    const t = Kp(e), n = new Ri(1, 1), i = new xt(n, t);
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
In.ROW_SIZE = 4, In.REVEAL_DELAY_MS = 150;
let mr = In;
const $p = `
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
class Qp extends HTMLElement {
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
    e.innerHTML = `<style>${$p}</style>`, this.canvas = document.createElement("canvas"), e.appendChild(this.canvas);
    const t = this.parentElement;
    if (!t) {
      console.error("[oz-avatar-grid] parentElement 없음 — 부모 컨테이너가 필요합니다");
      return;
    }
    const n = parseFloat(this.getAttribute("dpr-cap") ?? "1.5"), i = this.getAttribute("base-url") ?? "";
    this.grid = new mr({
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
customElements.define("oz-avatar-grid", Qp);
export {
  Qp as OzAvatarGridElement
};
