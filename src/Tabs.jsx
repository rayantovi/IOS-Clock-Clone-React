import { Route, Routes, Link } from "react-router-dom";
import WorldClock from "./WorldClock";
import Alarm from "./Alarm";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import { useSelector, useDispatch } from "react-redux";
function Tabs(){
    //by defualt 
    const color = useSelector(state => state.counter.color);

    const dispatch = useDispatch();
  
    function handleIncrement() {
      dispatch({ type: 'ENABLE' });
    }
  
    function handleDecrement() {
      dispatch({ type: 'DISABLE' });
    }
  

    // let color = "#9A9A9A"
    // let color = "#EA9950"
    return (
        <>
        <section id="tabs">
            <Link className="tab" to="/" onClick={()=>handleIncrement()}>
                
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
fill={color} stroke="none">
<path d="M1260 2720 c-587 -123 -1002 -629 -1003 -1220 0 -520 329 -988 824
-1170 258 -95 570 -97 829 -5 349 125 638 414 764 765 93 257 91 571 -4 829
-154 417 -514 723 -950 805 -114 22 -348 20 -460 -4z m168 -402 l-3 -193 -25
-4 c-33 -4 -220 19 -242 31 -16 8 -15 15 18 81 44 87 102 173 140 208 30 28
93 69 107 69 4 0 6 -87 5 -192z m205 161 c26 -17 67 -56 92 -87 54 -68 128
-206 123 -230 -2 -13 -22 -19 -88 -28 -47 -7 -109 -13 -137 -13 l-53 -1 0 195
c0 107 4 195 8 195 5 0 30 -14 55 -31z m-483 -14 c0 -2 -17 -28 -37 -58 -21
-30 -56 -91 -78 -135 -21 -45 -44 -82 -50 -82 -20 1 -168 65 -169 75 -2 19
121 107 217 156 93 46 117 55 117 44z m805 -38 c78 -39 152 -86 199 -127 36
-32 36 -33 17 -47 -21 -14 -144 -63 -160 -63 -5 0 -26 37 -48 83 -22 45 -57
106 -77 136 -20 29 -36 55 -36 58 0 8 42 -8 105 -40z m-1080 -347 c33 -13 63
-26 67 -29 4 -4 1 -31 -7 -60 -16 -62 -43 -232 -53 -341 l-7 -75 -204 -3 -203
-2 6 57 c21 174 86 338 193 485 l34 48 57 -29 c31 -15 84 -38 117 -51z m1469
18 c53 -75 106 -180 135 -266 22 -66 51 -201 51 -240 l0 -22 -202 2 -203 3 -7
80 c-11 110 -37 269 -55 333 -8 30 -11 58 -7 62 5 4 49 24 98 44 49 19 98 42
110 50 11 8 24 15 28 15 4 1 27 -27 52 -61z m-1039 -111 l120 -12 3 -203 2
-202 -200 0 -200 0 0 61 c0 95 43 339 66 380 2 4 23 3 46 -2 24 -5 97 -15 163
-22z m614 -22 c25 -99 42 -205 48 -297 l6 -98 -202 0 -201 0 2 203 3 202 110
11 c61 7 121 14 135 17 14 2 39 5 56 6 29 1 32 -2 43 -44z m-1035 -632 c7
-100 30 -254 46 -308 24 -86 28 -79 -63 -115 -45 -18 -97 -41 -115 -52 -18
-11 -39 -18 -46 -15 -24 10 -123 169 -159 257 -38 93 -62 184 -73 273 l-6 57
204 0 205 0 7 -97z m546 -108 c0 -113 -1 -205 -2 -206 -2 0 -61 -7 -133 -14
-71 -8 -146 -17 -166 -21 l-36 -6 -17 68 c-31 135 -54 313 -47 377 1 4 91 7
201 7 l200 0 0 -205z m537 103 c-6 -98 -22 -201 -48 -304 -11 -44 -13 -46 -43
-40 -17 3 -87 11 -156 17 -69 6 -131 13 -137 15 -10 3 -13 53 -13 209 l0 205
202 0 201 0 -6 -102z m563 78 c0 -44 -28 -172 -55 -252 -31 -90 -100 -221
-148 -278 l-33 -39 -65 31 c-35 17 -90 40 -122 52 -55 21 -58 24 -52 49 25 94
47 224 57 334 l12 127 203 0 203 0 0 -24z m-1100 -726 c0 -170 -2 -190 -17
-190 -24 0 -92 56 -142 117 -51 62 -135 223 -123 235 10 10 134 25 220 27 l62
1 0 -190z m320 180 c52 -6 97 -14 101 -18 4 -4 -13 -49 -39 -100 -51 -104
-141 -211 -203 -243 l-39 -19 0 195 0 195 43 0 c23 0 85 -5 137 -10z m-724
-117 c14 -32 45 -90 70 -129 24 -40 44 -74 44 -77 0 -4 -19 1 -42 9 -90 31
-283 163 -275 187 4 14 124 65 155 66 18 1 27 -10 48 -56z m1084 26 c38 -18
70 -38 70 -45 0 -28 -291 -202 -321 -192 -5 2 7 25 26 52 19 27 53 87 75 133
30 62 45 83 60 83 11 0 51 -14 90 -31z"/>
</g>    
            </svg>
            <p style={{color: color}}>World Clock</p>
            </Link>
            <Link className="tab" to="/Alarm" onClick={()=>handleDecrement()}>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
fill="#9A9A9A" stroke="none">
<path d="M614 2782 c-142 -51 -234 -181 -234 -331 0 -70 15 -126 41 -152 40
-40 63 -29 303 153 126 94 233 182 239 195 17 38 -11 83 -72 116 -69 38 -200
47 -277 19z"/>
<path d="M2170 2787 c-98 -28 -153 -82 -134 -134 10 -28 29 -44 298 -246 187
-141 206 -149 250 -97 31 38 40 82 34 168 -9 124 -93 244 -205 294 -57 25
-180 33 -243 15z"/>
<path d="M1320 2585 c-88 -14 -174 -37 -249 -65 -315 -121 -584 -395 -696
-708 -111 -312 -93 -659 51 -944 37 -74 124 -205 172 -258 29 -32 38 -49 32
-60 -5 -8 -51 -57 -104 -109 -59 -58 -97 -104 -101 -121 -8 -37 18 -88 51
-100 62 -24 78 -16 199 101 l114 111 63 -40 c197 -123 428 -192 654 -192 216
0 469 77 652 198 l54 35 101 -100 c56 -56 112 -106 124 -112 62 -32 135 13
135 84 0 33 -10 47 -107 145 l-107 109 67 82 c432 535 340 1304 -205 1715
-258 195 -592 280 -900 229z m215 -397 c54 -24 55 -34 55 -458 0 -417 -2 -434
-49 -460 -12 -6 -137 -10 -331 -10 l-312 0 -29 29 c-46 46 -37 106 21 136 24
12 75 15 275 15 l245 0 0 343 c0 366 2 380 50 404 31 16 42 16 75 1z"/>
</g>
</svg>
            <p>Alarm</p>
            </Link>
            <Link className="tab" to="/Stopwatch">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
fill="#9A9A9A" stroke="none">
<path d="M1452 2898 c-58 -19 -83 -64 -90 -164 l-7 -88 -73 -12 c-383 -64
-741 -329 -918 -678 -105 -206 -139 -349 -138 -576 1 -173 18 -280 67 -420
117 -336 378 -617 697 -752 185 -79 320 -108 503 -108 145 0 232 12 362 52
201 61 369 157 516 295 258 243 408 585 409 928 0 101 -31 289 -66 391 -28 87
-123 276 -173 344 l-31 43 58 61 c90 94 104 171 42 231 -21 20 -42 29 -78 33
-58 5 -59 4 -142 -68 -34 -30 -67 -54 -72 -52 -5 1 -33 20 -62 41 -92 69 -179
117 -282 158 -101 41 -249 83 -290 83 -49 0 -54 8 -54 89 0 58 -5 84 -20 108
-35 59 -95 82 -158 61z m82 -639 c52 -24 56 -49 56 -391 l0 -313 36 -29 c117
-93 90 -283 -48 -341 -134 -55 -278 41 -278 185 0 65 18 106 69 155 l41 39 0
319 c0 198 4 326 10 337 11 20 56 49 77 50 7 0 23 -5 37 -11z"/>
</g>
</svg>

            <p style={{color: {color}}}>Stopwatch</p>
            </Link>
            <Link className="tab" to="/Timer">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
fill="#9A9A9A" stroke="none">
<path d="M1439 2761 c-24 -19 -24 -20 -29 -298 -5 -280 -1 -331 24 -353 26
-20 95 -15 121 10 24 23 25 26 27 229 l3 206 35 3 c63 7 207 -33 333 -91 264
-122 465 -348 557 -626 74 -227 71 -497 -10 -709 -133 -349 -429 -603 -787
-677 -103 -21 -324 -21 -428 0 -417 87 -743 411 -831 829 -24 112 -24 335 -1
434 40 166 95 285 198 429 49 68 59 88 59 123 0 33 -6 48 -29 71 -50 49 -110
34 -173 -43 -223 -276 -327 -650 -273 -982 62 -380 265 -689 592 -900 198
-128 495 -207 721 -192 349 22 633 153 874 404 242 251 375 601 354 927 -18
273 -103 504 -263 716 -196 261 -474 431 -799 490 -143 25 -244 25 -275 0z"/>
<path d="M922 2094 c-12 -8 -22 -26 -22 -38 0 -14 71 -125 177 -277 97 -140
201 -290 231 -334 105 -152 159 -195 246 -195 57 0 85 11 131 52 98 85 99 215
3 304 -32 30 -662 470 -705 493 -28 14 -34 14 -61 -5z"/>
</g>
</svg>
            <p>Timer</p>
            </Link>

        </section>
        <Routes>
            <Route path="/" element={ <WorldClock/> } />
            <Route path="/Alarm" element={ <Alarm/> } />
            <Route path="/Stopwatch" element={ <Stopwatch/> } />
            <Route path="/Timer" element={ <Timer/> } />
        </Routes>
        </>
    )
}

export default Tabs;