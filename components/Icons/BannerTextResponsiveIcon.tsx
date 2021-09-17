import { motion } from 'framer-motion'
import React, { SVGAttributes } from 'react'
import { useMediaQuery } from 'react-responsive'

const BannerTextResponsiveIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  const md = useMediaQuery({ maxWidth: 768 })
  return (
    <svg {...props} viewBox="0 0 566 143" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M72.1706 61.03C71.5106 61.47 70.6123 61.965 69.4756 62.515C68.3389 63.065 67.0006 63.5417 65.4606 63.945C63.9573 64.3117 62.3073 64.4767 60.5106 64.44C57.3939 64.4033 54.6073 63.8533 52.1506 62.79C49.6939 61.7267 47.5856 60.2783 45.8256 58.445C44.1023 56.575 42.7823 54.4483 41.8656 52.065C40.9489 49.6817 40.4906 47.1333 40.4906 44.42C40.4906 41.45 40.9673 38.7183 41.9206 36.225C42.9106 33.695 44.2856 31.5133 46.0456 29.68C47.8056 27.81 49.8773 26.3617 52.2606 25.335C54.6806 24.3083 57.3206 23.795 60.1806 23.795C62.5639 23.795 64.7273 24.125 66.6706 24.785C68.6139 25.4083 70.2823 26.1417 71.6756 26.985L69.5306 31.99C68.4306 31.2567 67.0923 30.56 65.5156 29.9C63.9389 29.24 62.2156 28.91 60.3456 28.91C58.4023 28.91 56.5689 29.3133 54.8456 30.12C53.1223 30.89 51.6006 31.9717 50.2806 33.365C48.9606 34.7217 47.9156 36.335 47.1456 38.205C46.4123 40.0383 46.0456 42.0183 46.0456 44.145C46.0456 47.005 46.6323 49.59 47.8056 51.9C49.0156 54.1733 50.7023 55.97 52.8656 57.29C55.0656 58.61 57.6323 59.27 60.5656 59.27C62.6189 59.27 64.4156 58.9767 65.9556 58.39C67.5323 57.7667 68.8339 57.0517 69.8606 56.245L72.1706 61.03ZM84.4541 41.23L84.8391 46.565C85.4624 45.2817 86.3241 44.1817 87.4241 43.265C88.5241 42.3117 89.6607 41.5967 90.8341 41.12C92.0441 40.6067 93.0891 40.3317 93.9691 40.295L93.7491 45.41C92.0257 45.3367 90.5041 45.685 89.1841 46.455C87.8641 47.1883 86.8374 48.1967 86.1041 49.48C85.3707 50.7633 85.0041 52.1383 85.0041 53.605V64H79.8891V41.23H84.4541ZM110.161 64.55C107.594 64.55 105.358 64.0367 103.451 63.01C101.581 61.9467 100.133 60.4983 99.106 58.665C98.116 56.8317 97.621 54.76 97.621 52.45C97.621 50.2133 98.171 48.1783 99.271 46.345C100.408 44.475 101.929 43.0083 103.836 41.945C105.779 40.845 107.924 40.295 110.271 40.295C113.278 40.295 115.771 41.175 117.751 42.935C119.731 44.695 121.088 47.115 121.821 50.195L103.781 56.52C104.404 57.6567 105.284 58.555 106.421 59.215C107.558 59.8383 108.841 60.15 110.271 60.15C111.298 60.15 112.269 59.9667 113.186 59.6C114.103 59.2333 114.983 58.7567 115.826 58.17L118.191 61.965C117.018 62.735 115.716 63.3583 114.286 63.835C112.893 64.3117 111.518 64.55 110.161 64.55ZM102.681 52.175C102.644 52.615 102.663 53.0367 102.736 53.44L115.991 48.545C115.478 47.445 114.726 46.4733 113.736 45.63C112.783 44.7867 111.499 44.365 109.886 44.365C107.796 44.365 106.073 45.0983 104.716 46.565C103.359 48.0317 102.681 49.9017 102.681 52.175ZM137.69 64.55C135.527 64.55 133.565 64.0917 131.805 63.175C130.082 62.2583 128.707 60.92 127.68 59.16C126.69 57.3633 126.195 55.1817 126.195 52.615C126.195 50.0483 126.709 47.8483 127.735 46.015C128.799 44.1817 130.21 42.77 131.97 41.78C133.767 40.79 135.729 40.295 137.855 40.295C139.909 40.295 141.65 40.735 143.08 41.615C144.51 42.495 145.629 43.5583 146.435 44.805L146.82 41.23H151.55V64H146.435V60.26C145.995 60.8467 145.354 61.47 144.51 62.13C143.704 62.79 142.714 63.3583 141.54 63.835C140.404 64.3117 139.12 64.55 137.69 64.55ZM139.065 60.315C140.935 60.315 142.53 59.8017 143.85 58.775C145.17 57.7117 146.032 56.2817 146.435 54.485V49.975C145.995 48.3983 145.079 47.0967 143.685 46.07C142.292 45.0433 140.697 44.53 138.9 44.53C137.507 44.53 136.242 44.86 135.105 45.52C133.969 46.18 133.052 47.0967 132.355 48.27C131.695 49.4433 131.365 50.8 131.365 52.34C131.365 53.8433 131.714 55.2 132.41 56.41C133.107 57.5833 134.042 58.5367 135.215 59.27C136.389 59.9667 137.672 60.315 139.065 60.315ZM162.655 31.22H167.825V41.285H174.04V45.355H167.825V64H162.655V45.355H158.475V41.285H162.655V31.22ZM180.275 41.23H185.39V64H180.275V41.23ZM179.89 33.035C179.89 32.1917 180.201 31.5133 180.825 31C181.485 30.45 182.2 30.175 182.97 30.175C183.74 30.175 184.436 30.45 185.06 31C185.683 31.5133 185.995 32.1917 185.995 33.035C185.995 33.8783 185.683 34.575 185.06 35.125C184.436 35.6383 183.74 35.895 182.97 35.895C182.2 35.895 181.485 35.6383 180.825 35.125C180.201 34.575 179.89 33.8783 179.89 33.035ZM198.913 41.23L199.243 45.63C200.013 44.0167 201.205 42.7333 202.818 41.78C204.432 40.8267 206.302 40.35 208.428 40.35C210.555 40.35 212.297 40.9917 213.653 42.275C215.047 43.5217 215.78 45.1533 215.853 47.17V64H210.683V48.93C210.61 47.72 210.225 46.73 209.528 45.96C208.868 45.19 207.823 44.7867 206.393 44.75C204.413 44.75 202.745 45.5567 201.388 47.17C200.068 48.7467 199.408 50.8 199.408 53.33V64H194.293V41.23H198.913ZM235.694 75.275C233.164 75.275 231.055 74.835 229.369 73.955C227.682 73.1117 226.124 72.03 224.694 70.71L227.719 67.19C228.892 68.3633 230.102 69.2433 231.349 69.83C232.595 70.4533 234.007 70.765 235.584 70.765C238.15 70.765 240.112 70.1417 241.469 68.895C242.825 67.685 243.522 66.0717 243.559 64.055V59.875C242.789 61.2317 241.597 62.35 239.984 63.23C238.37 64.11 236.464 64.55 234.264 64.55C232.137 64.55 230.194 64.0183 228.434 62.955C226.71 61.8917 225.317 60.4617 224.254 58.665C223.227 56.8317 222.714 54.7783 222.714 52.505C222.714 50.1217 223.264 48.0133 224.364 46.18C225.464 44.3467 226.912 42.9167 228.709 41.89C230.505 40.8267 232.467 40.295 234.594 40.295C236.574 40.295 238.37 40.68 239.984 41.45C241.597 42.22 242.807 43.21 243.614 44.42L244.054 41.23H248.729V64.165C248.729 66.2183 248.197 68.0883 247.134 69.775C246.07 71.4617 244.567 72.8 242.624 73.79C240.68 74.78 238.37 75.275 235.694 75.275ZM227.884 52.34C227.884 53.8433 228.232 55.2 228.929 56.41C229.625 57.5833 230.56 58.5367 231.734 59.27C232.944 59.9667 234.282 60.315 235.749 60.315C237.729 60.315 239.415 59.7833 240.809 58.72C242.239 57.62 243.155 56.2267 243.559 54.54V50.03C243.082 48.4167 242.129 47.0967 240.699 46.07C239.269 45.0433 237.619 44.53 235.749 44.53C234.245 44.53 232.889 44.86 231.679 45.52C230.505 46.18 229.57 47.0967 228.874 48.27C228.214 49.4433 227.884 50.8 227.884 52.34ZM275.351 74.945L272.271 71.755C273.298 70.875 274.104 69.7933 274.691 68.51C275.278 67.2267 275.571 65.705 275.571 63.945V41.23H280.741V64.11C280.741 66.7133 280.301 68.895 279.421 70.655C278.578 72.4517 277.221 73.8817 275.351 74.945ZM275.186 33.035C275.186 32.1917 275.498 31.5133 276.121 31C276.781 30.45 277.496 30.175 278.266 30.175C279.036 30.175 279.733 30.45 280.356 31C280.979 31.5133 281.291 32.1917 281.291 33.035C281.291 33.8783 280.979 34.575 280.356 35.125C279.733 35.6383 279.036 35.895 278.266 35.895C277.496 35.895 276.781 35.6383 276.121 35.125C275.498 34.575 275.186 33.8783 275.186 33.035ZM287.328 52.395C287.328 50.1217 287.86 48.0683 288.923 46.235C290.023 44.4017 291.526 42.9533 293.433 41.89C295.34 40.8267 297.521 40.295 299.978 40.295C302.435 40.295 304.598 40.8267 306.468 41.89C308.338 42.9533 309.786 44.4017 310.813 46.235C311.876 48.0683 312.408 50.1217 312.408 52.395C312.408 54.6683 311.876 56.7217 310.813 58.555C309.786 60.3883 308.32 61.855 306.413 62.955C304.543 64.0183 302.361 64.55 299.868 64.55C297.448 64.55 295.285 64.055 293.378 63.065C291.508 62.075 290.023 60.6633 288.923 58.83C287.86 56.9967 287.328 54.8517 287.328 52.395ZM292.498 52.45C292.498 53.9167 292.81 55.255 293.433 56.465C294.093 57.6383 294.973 58.5733 296.073 59.27C297.173 59.9667 298.42 60.315 299.813 60.315C301.243 60.315 302.508 59.9667 303.608 59.27C304.708 58.5733 305.57 57.6383 306.193 56.465C306.853 55.255 307.183 53.9167 307.183 52.45C307.183 50.9833 306.853 49.6633 306.193 48.49C305.57 47.28 304.708 46.3267 303.608 45.63C302.508 44.8967 301.243 44.53 299.813 44.53C298.42 44.53 297.155 44.8967 296.018 45.63C294.918 46.3633 294.056 47.335 293.433 48.545C292.81 49.7183 292.498 51.02 292.498 52.45ZM333.194 64.55C331.25 64.55 329.527 64.1833 328.024 63.45C326.557 62.68 325.347 61.7083 324.394 60.535V64H319.279V21.375H324.394V44.31C325.31 43.1 326.594 42.1283 328.244 41.395C329.894 40.6617 331.764 40.295 333.854 40.295C335.87 40.295 337.722 40.79 339.409 41.78C341.095 42.7333 342.452 44.1083 343.479 45.905C344.505 47.7017 345.019 49.81 345.019 52.23C345.019 54.8333 344.469 57.0517 343.369 58.885C342.269 60.7183 340.82 62.13 339.024 63.12C337.227 64.0733 335.284 64.55 333.194 64.55ZM332.094 60.15C334.33 60.15 336.164 59.4167 337.594 57.95C339.06 56.4467 339.794 54.54 339.794 52.23C339.794 50.7633 339.445 49.4433 338.749 48.27C338.089 47.06 337.172 46.1067 335.999 45.41C334.862 44.7133 333.56 44.365 332.094 44.365C330.187 44.365 328.537 44.8783 327.144 45.905C325.75 46.9317 324.834 48.2517 324.394 49.865V54.54C324.834 56.1533 325.732 57.4917 327.089 58.555C328.445 59.6183 330.114 60.15 332.094 60.15ZM350.396 49.92H360.626V54.43H350.396V49.92ZM383.215 41.23L389.375 55.42L395.15 41.23H400.21L389.705 65.375L382.39 49.755L375.735 65.375L365.175 41.23H370.235L376.285 55.035L380.575 45.135L378.76 41.23H383.215ZM403.183 52.395C403.183 50.1217 403.714 48.0683 404.778 46.235C405.878 44.4017 407.381 42.9533 409.288 41.89C411.194 40.8267 413.376 40.295 415.833 40.295C418.289 40.295 420.453 40.8267 422.323 41.89C424.193 42.9533 425.641 44.4017 426.668 46.235C427.731 48.0683 428.263 50.1217 428.263 52.395C428.263 54.6683 427.731 56.7217 426.668 58.555C425.641 60.3883 424.174 61.855 422.268 62.955C420.398 64.0183 418.216 64.55 415.723 64.55C413.303 64.55 411.139 64.055 409.233 63.065C407.363 62.075 405.878 60.6633 404.778 58.83C403.714 56.9967 403.183 54.8517 403.183 52.395ZM408.353 52.45C408.353 53.9167 408.664 55.255 409.288 56.465C409.948 57.6383 410.828 58.5733 411.928 59.27C413.028 59.9667 414.274 60.315 415.668 60.315C417.098 60.315 418.363 59.9667 419.463 59.27C420.563 58.5733 421.424 57.6383 422.048 56.465C422.708 55.255 423.038 53.9167 423.038 52.45C423.038 50.9833 422.708 49.6633 422.048 48.49C421.424 47.28 420.563 46.3267 419.463 45.63C418.363 44.8967 417.098 44.53 415.668 44.53C414.274 44.53 413.009 44.8967 411.873 45.63C410.773 46.3633 409.911 47.335 409.288 48.545C408.664 49.7183 408.353 51.02 408.353 52.45ZM439.698 41.23L440.083 46.565C440.707 45.2817 441.568 44.1817 442.668 43.265C443.768 42.3117 444.905 41.5967 446.078 41.12C447.288 40.6067 448.333 40.3317 449.213 40.295L448.993 45.41C447.27 45.3367 445.748 45.685 444.428 46.455C443.108 47.1883 442.082 48.1967 441.348 49.48C440.615 50.7633 440.248 52.1383 440.248 53.605V64H435.133V41.23H439.698ZM458.012 31.22H463.182V41.285H469.397V45.355H463.182V64H458.012V45.355H453.832V41.285H458.012V31.22ZM475.631 64V21.375H480.636V45.355C481.443 43.8883 482.635 42.6967 484.211 41.78C485.788 40.8267 487.64 40.35 489.766 40.35C491.893 40.35 493.635 40.9917 494.991 42.275C496.385 43.5217 497.118 45.1533 497.191 47.17V64H492.021V48.93C491.948 47.72 491.563 46.73 490.866 45.96C490.206 45.19 489.161 44.7867 487.731 44.75C486.411 44.75 485.22 45.135 484.156 45.905C483.13 46.6383 482.305 47.6467 481.681 48.93C481.058 50.2133 480.746 51.68 480.746 53.33V64H475.631ZM507.957 74.945L513.182 63.285L502.622 41.23H508.397L515.712 57.455L522.972 41.23H527.702L513.017 74.945H507.957Z"
        fill="black"
        style={{ textAlign: 'center' }}
        initial={{ y: 200, skewY: 7 }}
        animate={{ y: 0, skewY: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M12.0517 112.23L12.4367 117.565C13.0601 116.282 13.9217 115.182 15.0217 114.265C16.1217 113.312 17.2584 112.597 18.4317 112.12C19.6417 111.607 20.6867 111.332 21.5667 111.295L21.3467 116.41C19.6234 116.337 18.1017 116.685 16.7817 117.455C15.4617 118.188 14.4351 119.197 13.7017 120.48C12.9684 121.763 12.6017 123.138 12.6017 124.605V135H7.48674V112.23H12.0517ZM37.7587 135.55C35.192 135.55 32.9553 135.037 31.0487 134.01C29.1787 132.947 27.7303 131.498 26.7037 129.665C25.7137 127.832 25.2187 125.76 25.2187 123.45C25.2187 121.213 25.7687 119.178 26.8687 117.345C28.0053 115.475 29.527 114.008 31.4337 112.945C33.377 111.845 35.522 111.295 37.8687 111.295C40.8753 111.295 43.3687 112.175 45.3487 113.935C47.3287 115.695 48.6853 118.115 49.4187 121.195L31.3787 127.52C32.002 128.657 32.882 129.555 34.0187 130.215C35.1553 130.838 36.4387 131.15 37.8687 131.15C38.8953 131.15 39.867 130.967 40.7837 130.6C41.7003 130.233 42.5803 129.757 43.4237 129.17L45.7887 132.965C44.6153 133.735 43.3137 134.358 41.8837 134.835C40.4903 135.312 39.1153 135.55 37.7587 135.55ZM30.2787 123.175C30.242 123.615 30.2603 124.037 30.3337 124.44L43.5887 119.545C43.0753 118.445 42.3237 117.473 41.3337 116.63C40.3803 115.787 39.097 115.365 37.4837 115.365C35.3937 115.365 33.6703 116.098 32.3137 117.565C30.957 119.032 30.2787 120.902 30.2787 123.175ZM62.2079 135.44C60.5579 135.44 58.9629 135.165 57.4229 134.615C55.9195 134.028 54.6729 133.167 53.6829 132.03L55.8829 129.06C56.7995 129.977 57.7712 130.673 58.7979 131.15C59.8245 131.59 60.8145 131.81 61.7679 131.81C62.8679 131.81 63.8212 131.59 64.6279 131.15C65.4712 130.71 65.8929 129.958 65.8929 128.895C65.8929 128.088 65.6179 127.447 65.0679 126.97C64.5545 126.493 63.8762 126.127 63.0329 125.87C62.2262 125.577 61.3829 125.283 60.5029 124.99C56.6162 123.743 54.6729 121.525 54.6729 118.335C54.6729 117.162 54.9662 116.043 55.5529 114.98C56.1762 113.917 57.0745 113.055 58.2479 112.395C59.4579 111.735 60.9429 111.405 62.7029 111.405C64.2795 111.405 65.6912 111.607 66.9379 112.01C68.1845 112.413 69.3579 113.055 70.4579 113.935L68.4229 117.07C67.7629 116.41 66.9745 115.915 66.0579 115.585C65.1779 115.218 64.3712 115.017 63.6379 114.98C62.6479 114.98 61.7679 115.218 60.9979 115.695C60.2645 116.172 59.8979 116.832 59.8979 117.675C59.8612 118.445 60.0995 119.068 60.6129 119.545C61.1262 119.985 61.7862 120.352 62.5929 120.645C63.4362 120.938 64.2795 121.213 65.1229 121.47C66.7729 122.02 68.1662 122.772 69.3029 123.725C70.4762 124.678 71.0629 126.072 71.0629 127.905C71.0629 129.958 70.3295 131.737 68.8629 133.24C67.3962 134.707 65.1779 135.44 62.2079 135.44ZM85.484 135.88C83.394 135.88 81.6707 135.257 80.314 134.01C78.9574 132.727 78.2607 131.077 78.224 129.06V112.23H83.339V127.245C83.4124 128.492 83.779 129.5 84.439 130.27C85.099 131.04 86.1257 131.443 87.519 131.48C88.7657 131.48 89.9024 131.113 90.929 130.38C91.9557 129.61 92.7624 128.583 93.349 127.3C93.9724 125.98 94.284 124.495 94.284 122.845V112.23H99.399V135H94.779L94.394 130.71C93.6607 132.213 92.4874 133.46 90.874 134.45C89.2974 135.403 87.5007 135.88 85.484 135.88ZM112.922 112.23L113.252 116.575C114.132 114.925 115.324 113.642 116.827 112.725C118.367 111.772 120.127 111.295 122.107 111.295C123.977 111.295 125.536 111.735 126.782 112.615C128.066 113.495 128.854 114.687 129.147 116.19C130.064 114.65 131.256 113.458 132.722 112.615C134.226 111.735 135.821 111.295 137.507 111.295C139.707 111.295 141.449 111.937 142.732 113.22C144.052 114.503 144.749 116.135 144.822 118.115V135H139.707V120.04C139.634 118.867 139.322 117.895 138.772 117.125C138.259 116.318 137.361 115.878 136.077 115.805C134.721 115.805 133.529 116.208 132.502 117.015C131.476 117.785 130.669 118.812 130.082 120.095C129.496 121.378 129.184 122.735 129.147 124.165V135H123.977V120.04C123.941 118.867 123.629 117.895 123.042 117.125C122.492 116.318 121.557 115.878 120.237 115.805C118.917 115.805 117.744 116.208 116.717 117.015C115.691 117.785 114.884 118.812 114.297 120.095C113.711 121.378 113.417 122.753 113.417 124.22V135H108.302V112.23H112.922ZM164.248 135.55C161.681 135.55 159.445 135.037 157.538 134.01C155.668 132.947 154.22 131.498 153.193 129.665C152.203 127.832 151.708 125.76 151.708 123.45C151.708 121.213 152.258 119.178 153.358 117.345C154.495 115.475 156.016 114.008 157.923 112.945C159.866 111.845 162.011 111.295 164.358 111.295C167.365 111.295 169.858 112.175 171.838 113.935C173.818 115.695 175.175 118.115 175.908 121.195L157.868 127.52C158.491 128.657 159.371 129.555 160.508 130.215C161.645 130.838 162.928 131.15 164.358 131.15C165.385 131.15 166.356 130.967 167.273 130.6C168.19 130.233 169.07 129.757 169.913 129.17L172.278 132.965C171.105 133.735 169.803 134.358 168.373 134.835C166.98 135.312 165.605 135.55 164.248 135.55ZM156.768 123.175C156.731 123.615 156.75 124.037 156.823 124.44L170.078 119.545C169.565 118.445 168.813 117.473 167.823 116.63C166.87 115.787 165.586 115.365 163.973 115.365C161.883 115.365 160.16 116.098 158.803 117.565C157.446 119.032 156.768 120.902 156.768 123.175ZM188.697 135.44C187.047 135.44 185.452 135.165 183.912 134.615C182.409 134.028 181.162 133.167 180.172 132.03L182.372 129.06C183.289 129.977 184.26 130.673 185.287 131.15C186.314 131.59 187.304 131.81 188.257 131.81C189.357 131.81 190.31 131.59 191.117 131.15C191.96 130.71 192.382 129.958 192.382 128.895C192.382 128.088 192.107 127.447 191.557 126.97C191.044 126.493 190.365 126.127 189.522 125.87C188.715 125.577 187.872 125.283 186.992 124.99C183.105 123.743 181.162 121.525 181.162 118.335C181.162 117.162 181.455 116.043 182.042 114.98C182.665 113.917 183.564 113.055 184.737 112.395C185.947 111.735 187.432 111.405 189.192 111.405C190.769 111.405 192.18 111.607 193.427 112.01C194.674 112.413 195.847 113.055 196.947 113.935L194.912 117.07C194.252 116.41 193.464 115.915 192.547 115.585C191.667 115.218 190.86 115.017 190.127 114.98C189.137 114.98 188.257 115.218 187.487 115.695C186.754 116.172 186.387 116.832 186.387 117.675C186.35 118.445 186.589 119.068 187.102 119.545C187.615 119.985 188.275 120.352 189.082 120.645C189.925 120.938 190.769 121.213 191.612 121.47C193.262 122.02 194.655 122.772 195.792 123.725C196.965 124.678 197.552 126.072 197.552 127.905C197.552 129.958 196.819 131.737 195.352 133.24C193.885 134.707 191.667 135.44 188.697 135.44ZM222.116 112.23H227.231V135H222.116V112.23ZM221.731 104.035C221.731 103.192 222.042 102.513 222.666 102C223.326 101.45 224.041 101.175 224.811 101.175C225.581 101.175 226.277 101.45 226.901 102C227.524 102.513 227.836 103.192 227.836 104.035C227.836 104.878 227.524 105.575 226.901 106.125C226.277 106.638 225.581 106.895 224.811 106.895C224.041 106.895 223.326 106.638 222.666 106.125C222.042 105.575 221.731 104.878 221.731 104.035ZM242.569 135.44C240.919 135.44 239.324 135.165 237.784 134.615C236.281 134.028 235.034 133.167 234.044 132.03L236.244 129.06C237.161 129.977 238.133 130.673 239.159 131.15C240.186 131.59 241.176 131.81 242.129 131.81C243.229 131.81 244.183 131.59 244.989 131.15C245.833 130.71 246.254 129.958 246.254 128.895C246.254 128.088 245.979 127.447 245.429 126.97C244.916 126.493 244.238 126.127 243.394 125.87C242.588 125.577 241.744 125.283 240.864 124.99C236.978 123.743 235.034 121.525 235.034 118.335C235.034 117.162 235.328 116.043 235.914 114.98C236.538 113.917 237.436 113.055 238.609 112.395C239.819 111.735 241.304 111.405 243.064 111.405C244.641 111.405 246.053 111.607 247.299 112.01C248.546 112.413 249.719 113.055 250.819 113.935L248.784 117.07C248.124 116.41 247.336 115.915 246.419 115.585C245.539 115.218 244.733 115.017 243.999 114.98C243.009 114.98 242.129 115.218 241.359 115.695C240.626 116.172 240.259 116.832 240.259 117.675C240.223 118.445 240.461 119.068 240.974 119.545C241.488 119.985 242.148 120.352 242.954 120.645C243.798 120.938 244.641 121.213 245.484 121.47C247.134 122.02 248.528 122.772 249.664 123.725C250.838 124.678 251.424 126.072 251.424 127.905C251.424 129.958 250.691 131.737 249.224 133.24C247.758 134.707 245.539 135.44 242.569 135.44ZM290.618 112.23L296.778 126.42L302.553 112.23H307.613L297.108 136.375L289.793 120.755L283.138 136.375L272.578 112.23H277.638L283.688 126.035L287.978 116.135L286.163 112.23H290.618ZM313.102 135V92.375H318.107V116.355C318.914 114.888 320.105 113.697 321.682 112.78C323.259 111.827 325.11 111.35 327.237 111.35C329.364 111.35 331.105 111.992 332.462 113.275C333.855 114.522 334.589 116.153 334.662 118.17V135H329.492V119.93C329.419 118.72 329.034 117.73 328.337 116.96C327.677 116.19 326.632 115.787 325.202 115.75C323.882 115.75 322.69 116.135 321.627 116.905C320.6 117.638 319.775 118.647 319.152 119.93C318.529 121.213 318.217 122.68 318.217 124.33V135H313.102ZM353.017 135.55C350.854 135.55 348.892 135.092 347.132 134.175C345.409 133.258 344.034 131.92 343.007 130.16C342.017 128.363 341.522 126.182 341.522 123.615C341.522 121.048 342.036 118.848 343.062 117.015C344.126 115.182 345.537 113.77 347.297 112.78C349.094 111.79 351.056 111.295 353.182 111.295C355.236 111.295 356.977 111.735 358.407 112.615C359.837 113.495 360.956 114.558 361.762 115.805L362.147 112.23H366.877V135H361.762V131.26C361.322 131.847 360.681 132.47 359.837 133.13C359.031 133.79 358.041 134.358 356.867 134.835C355.731 135.312 354.447 135.55 353.017 135.55ZM354.392 131.315C356.262 131.315 357.857 130.802 359.177 129.775C360.497 128.712 361.359 127.282 361.762 125.485V120.975C361.322 119.398 360.406 118.097 359.012 117.07C357.619 116.043 356.024 115.53 354.227 115.53C352.834 115.53 351.569 115.86 350.432 116.52C349.296 117.18 348.379 118.097 347.682 119.27C347.022 120.443 346.692 121.8 346.692 123.34C346.692 124.843 347.041 126.2 347.737 127.41C348.434 128.583 349.369 129.537 350.542 130.27C351.716 130.967 352.999 131.315 354.392 131.315ZM377.983 102.22H383.153V112.285H389.368V116.355H383.153V135H377.983V116.355H373.803V112.285H377.983V102.22ZM427.634 112.23L433.794 126.42L439.569 112.23H444.629L434.124 136.375L426.809 120.755L420.154 136.375L409.594 112.23H414.654L420.704 126.035L424.994 116.135L423.179 112.23H427.634ZM460.141 135.55C457.575 135.55 455.338 135.037 453.431 134.01C451.561 132.947 450.113 131.498 449.086 129.665C448.096 127.832 447.601 125.76 447.601 123.45C447.601 121.213 448.151 119.178 449.251 117.345C450.388 115.475 451.91 114.008 453.816 112.945C455.76 111.845 457.905 111.295 460.251 111.295C463.258 111.295 465.751 112.175 467.731 113.935C469.711 115.695 471.068 118.115 471.801 121.195L453.761 127.52C454.385 128.657 455.265 129.555 456.401 130.215C457.538 130.838 458.821 131.15 460.251 131.15C461.278 131.15 462.25 130.967 463.166 130.6C464.083 130.233 464.963 129.757 465.806 129.17L468.171 132.965C466.998 133.735 465.696 134.358 464.266 134.835C462.873 135.312 461.498 135.55 460.141 135.55ZM452.661 123.175C452.625 123.615 452.643 124.037 452.716 124.44L465.971 119.545C465.458 118.445 464.706 117.473 463.716 116.63C462.763 115.787 461.48 115.365 459.866 115.365C457.776 115.365 456.053 116.098 454.696 117.565C453.34 119.032 452.661 120.902 452.661 123.175ZM504.853 135.55C502.69 135.55 500.746 135.055 499.023 134.065C497.336 133.038 495.998 131.608 495.008 129.775C494.055 127.905 493.578 125.742 493.578 123.285C493.578 120.792 494.091 118.647 495.118 116.85C496.145 115.053 497.556 113.678 499.353 112.725C501.186 111.772 503.221 111.295 505.458 111.295C507.181 111.295 508.831 111.662 510.408 112.395C511.985 113.092 513.25 114.063 514.203 115.31V92.375H519.318V135H514.148V131.48C513.048 132.69 511.691 133.68 510.078 134.45C508.501 135.183 506.76 135.55 504.853 135.55ZM506.448 131.15C508.428 131.15 510.096 130.618 511.453 129.555C512.81 128.492 513.69 127.062 514.093 125.265V120.975C513.69 119.362 512.773 118.023 511.343 116.96C509.95 115.897 508.318 115.365 506.448 115.365C505.055 115.365 503.771 115.713 502.598 116.41C501.425 117.07 500.49 117.987 499.793 119.16C499.096 120.333 498.748 121.69 498.748 123.23C498.748 124.697 499.096 126.035 499.793 127.245C500.49 128.455 501.425 129.408 502.598 130.105C503.771 130.802 505.055 131.15 506.448 131.15ZM526.181 123.395C526.181 121.122 526.712 119.068 527.776 117.235C528.876 115.402 530.379 113.953 532.286 112.89C534.192 111.827 536.374 111.295 538.831 111.295C541.287 111.295 543.451 111.827 545.321 112.89C547.191 113.953 548.639 115.402 549.666 117.235C550.729 119.068 551.261 121.122 551.261 123.395C551.261 125.668 550.729 127.722 549.666 129.555C548.639 131.388 547.172 132.855 545.266 133.955C543.396 135.018 541.214 135.55 538.721 135.55C536.301 135.55 534.137 135.055 532.231 134.065C530.361 133.075 528.876 131.663 527.776 129.83C526.712 127.997 526.181 125.852 526.181 123.395ZM531.351 123.45C531.351 124.917 531.662 126.255 532.286 127.465C532.946 128.638 533.826 129.573 534.926 130.27C536.026 130.967 537.272 131.315 538.666 131.315C540.096 131.315 541.361 130.967 542.461 130.27C543.561 129.573 544.422 128.638 545.046 127.465C545.706 126.255 546.036 124.917 546.036 123.45C546.036 121.983 545.706 120.663 545.046 119.49C544.422 118.28 543.561 117.327 542.461 116.63C541.361 115.897 540.096 115.53 538.666 115.53C537.272 115.53 536.007 115.897 534.871 116.63C533.771 117.363 532.909 118.335 532.286 119.545C531.662 120.718 531.351 122.02 531.351 123.45ZM555.546 132.085C555.546 131.242 555.84 130.545 556.426 129.995C557.05 129.408 557.728 129.115 558.461 129.115C559.121 129.115 559.763 129.408 560.386 129.995C561.01 130.545 561.321 131.242 561.321 132.085C561.321 132.965 561.01 133.68 560.386 134.23C559.763 134.743 559.121 135 558.461 135C557.728 135 557.05 134.743 556.426 134.23C555.84 133.68 555.546 132.965 555.546 132.085Z"
        fill="black"
        initial={{ y: 100, opacity: 0, skewY: 7 }}
        animate={{ y: 0, opacity: 1, skewY: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.path
        d="M376.07 66.2985C363.009 67.0862 350.102 68.0547 337.515 69.1135C319.698 70.6114 301.887 72.1609 284.183 74.6143C278.61 75.3891 272.951 75.8797 267.414 76.8482C263.937 77.4551 259.328 78.3201 258.723 78.5009C258.406 78.6042 258.268 78.7593 258.224 78.8109C257.91 79.1725 257.967 79.521 258.144 79.7921C258.215 79.9084 258.395 80.1925 258.894 80.2313C292.266 82.8784 326.391 77.7133 359.803 77.171C417.746 76.2413 477.446 79.9343 534.929 87.9918C535.43 88.0564 535.918 87.7335 535.988 87.2557C536.072 86.7908 535.709 86.3389 535.207 86.2743C477.627 78.2039 417.83 74.498 359.775 75.4406C328.636 75.9442 296.883 80.4766 265.7 78.9271C266.417 78.798 267.119 78.6688 267.761 78.5526C273.276 77.5841 278.912 77.1064 284.462 76.3316C302.128 73.8782 319.902 72.3287 337.697 70.8438C359.775 68.9843 382.816 67.3832 406.038 66.6342C414.345 66.7504 422.625 66.8667 430.904 67.0087C448.816 67.3187 466.81 68.2225 484.68 69.4363C490.06 69.8108 495.44 70.1981 500.821 70.5339C502.605 70.6501 507.205 70.9858 507.846 70.9599C508.64 70.9341 508.794 70.3144 508.808 70.2111C508.849 69.9786 508.821 69.6558 508.431 69.3846C508.389 69.3459 508.139 69.2167 507.581 69.1392C475.09 64.5681 440.397 63.8064 406.066 64.904C369.853 64.4262 333.501 64.2195 297.38 64C296.863 64 296.441 64.3874 296.437 64.8652C296.434 65.343 296.851 65.7304 297.368 65.7433C323.522 65.8983 349.809 66.0531 376.07 66.2985Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.7 }}
        strokeWidth="1"
        fill="none"
        stroke="#ffd877"
      />
    </svg>
  )
}

export default BannerTextResponsiveIcon
