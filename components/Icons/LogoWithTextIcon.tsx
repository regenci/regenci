import { motion } from 'framer-motion'
import React, { SVGAttributes } from 'react'

const LogoWithTextIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 162 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M6.15077 29.8066C5.84444 29.1154 5.9544 28.2971 5.9544 27.5506V23.1411V7.5542V2.11929C5.9603 1.17074 6.18219 1.09588 7.0344 1.09383H21.3689C24.391 1.09383 27.9039 0.879513 30.7944 1.8137C35.4099 3.30676 39.0584 6.33391 40.6126 11.2458C40.9975 12.463 41.2979 13.8577 41.2999 15.1426V16.9884C41.2606 20.4308 39.2508 24.508 36.8817 26.8235C36.0903 27.5967 35.0624 28.3627 34.1326 28.9452C33.8086 29.1482 33.0035 29.5584 32.8788 29.9132C32.761 30.2526 33.087 30.6731 33.2627 30.9346L34.7875 33.2931L40.7245 42.4197L42.1138 44.5731C42.2385 44.7864 42.4564 45.1781 42.2807 45.4201C42.1236 45.6365 41.6347 45.5986 41.398 45.5986H32.4635C31.5759 45.5975 31.4866 45.5596 30.9839 44.7782L30.4351 43.9578L27.9471 40.0611L19.6341 27.0378L17.1285 23.1411L15.8865 21.0902C15.6616 20.4185 16.3165 19.674 16.6562 19.1418L19.7656 14.3222C20.0209 13.9223 20.7357 12.4959 21.2668 12.6989C21.5133 12.7922 21.7479 13.1798 21.8932 13.3993L22.8417 14.8349L26.2368 20.0647C26.5264 20.4934 27.2707 21.8193 27.6565 22.007C28.1091 22.2264 29.0546 21.5578 29.4199 21.2789C30.8121 20.2186 31.7566 18.3881 31.7762 16.5782C31.7851 15.7332 31.6702 15.0031 31.356 14.2197C31.0683 13.5059 30.9368 13.1942 30.4547 12.5789C29.2353 11.0264 27.414 10.1271 25.4926 10.1178H23.9217H20.878H16.3617C15.4653 10.1353 15.3818 10.5219 15.3799 11.3484V15.04C15.3759 15.3148 15.375 15.4933 15.2846 15.7578C15.105 16.2849 13.6794 18.423 13.2856 19.0393L8.6711 26.2175C8.12913 27.0655 6.8243 29.2764 6.15077 29.8066ZM17.4417 35.1389C18.3194 35.4825 19.5388 35.342 20.4853 35.344C21.7921 35.3461 21.7951 35.8998 22.4539 36.9847L24.3331 40.0611C24.5451 40.418 25.365 41.5808 25.2295 41.9654C25.1234 42.2669 24.5628 42.2146 24.3144 42.2146H13.9071C13.6136 42.2146 13.2925 42.193 13.0235 42.3345C12.1664 42.7878 11.3034 45.0305 10.5601 45.4499C10.2607 45.618 9.91604 45.5975 9.58713 45.5986H0.947124C0.688906 45.5986 0.146942 45.6509 0.0261784 45.3494C-0.109312 45.012 0.316796 44.4326 0.488615 44.1629L2.35407 41.2917L10.567 28.576L12.7564 25.192C12.9557 24.8946 13.3642 24.1204 13.7147 24.0691C14.2017 23.9984 14.9616 25.4084 15.2159 25.8073L18.0966 30.3193C18.395 30.7879 19.0941 31.7231 19.0901 32.2677C19.0872 32.6963 18.7917 33.0665 18.558 33.3957C18.1466 33.9761 17.748 34.4837 17.4417 35.1389Z"
        stroke="black"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M71.936 20.064L72.104 22.392C72.376 21.832 72.752 21.352 73.232 20.952C73.712 20.536 74.208 20.224 74.72 20.016C75.248 19.792 75.704 19.672 76.088 19.656L75.992 21.888C75.24 21.856 74.576 22.008 74 22.344C73.424 22.664 72.976 23.104 72.656 23.664C72.336 24.224 72.176 24.824 72.176 25.464V30H69.944V20.064H71.936ZM85.5536 30.24C84.4336 30.24 83.4576 30.016 82.6256 29.568C81.8096 29.104 81.1776 28.472 80.7296 27.672C80.2976 26.872 80.0816 25.968 80.0816 24.96C80.0816 23.984 80.3216 23.096 80.8016 22.296C81.2976 21.48 81.9616 20.84 82.7936 20.376C83.6416 19.896 84.5776 19.656 85.6016 19.656C86.9136 19.656 88.0016 20.04 88.8656 20.808C89.7296 21.576 90.3216 22.632 90.6416 23.976L82.7696 26.736C83.0416 27.232 83.4256 27.624 83.9216 27.912C84.4176 28.184 84.9776 28.32 85.6016 28.32C86.0496 28.32 86.4736 28.24 86.8736 28.08C87.2736 27.92 87.6576 27.712 88.0256 27.456L89.0576 29.112C88.5456 29.448 87.9776 29.72 87.3536 29.928C86.7456 30.136 86.1456 30.24 85.5536 30.24ZM82.2896 24.84C82.2736 25.032 82.2816 25.216 82.3136 25.392L88.0976 23.256C87.8736 22.776 87.5456 22.352 87.1136 21.984C86.6976 21.616 86.1376 21.432 85.4336 21.432C84.5216 21.432 83.7696 21.752 83.1776 22.392C82.5856 23.032 82.2896 23.848 82.2896 24.84ZM100.614 34.92C99.5103 34.92 98.5903 34.728 97.8543 34.344C97.1183 33.976 96.4383 33.504 95.8143 32.928L97.1343 31.392C97.6463 31.904 98.1743 32.288 98.7183 32.544C99.2623 32.816 99.8783 32.952 100.566 32.952C101.686 32.952 102.542 32.68 103.134 32.136C103.726 31.608 104.03 30.904 104.046 30.024V28.2C103.71 28.792 103.19 29.28 102.486 29.664C101.782 30.048 100.95 30.24 99.9903 30.24C99.0623 30.24 98.2143 30.008 97.4463 29.544C96.6943 29.08 96.0863 28.456 95.6223 27.672C95.1743 26.872 94.9503 25.976 94.9503 24.984C94.9503 23.944 95.1903 23.024 95.6703 22.224C96.1503 21.424 96.7823 20.8 97.5663 20.352C98.3503 19.888 99.2063 19.656 100.134 19.656C100.998 19.656 101.782 19.824 102.486 20.16C103.19 20.496 103.718 20.928 104.07 21.456L104.262 20.064H106.302V30.072C106.302 30.968 106.07 31.784 105.606 32.52C105.142 33.256 104.486 33.84 103.638 34.272C102.79 34.704 101.782 34.92 100.614 34.92ZM97.2063 24.912C97.2063 25.568 97.3583 26.16 97.6623 26.688C97.9663 27.2 98.3743 27.616 98.8863 27.936C99.4143 28.24 99.9983 28.392 100.638 28.392C101.502 28.392 102.238 28.16 102.846 27.696C103.47 27.216 103.87 26.608 104.046 25.872V23.904C103.838 23.2 103.422 22.624 102.798 22.176C102.174 21.728 101.454 21.504 100.638 21.504C99.9823 21.504 99.3903 21.648 98.8623 21.936C98.3503 22.224 97.9423 22.624 97.6383 23.136C97.3503 23.648 97.2063 24.24 97.2063 24.912ZM117.19 30.24C116.07 30.24 115.094 30.016 114.262 29.568C113.446 29.104 112.814 28.472 112.366 27.672C111.934 26.872 111.718 25.968 111.718 24.96C111.718 23.984 111.958 23.096 112.438 22.296C112.934 21.48 113.598 20.84 114.43 20.376C115.278 19.896 116.214 19.656 117.238 19.656C118.55 19.656 119.638 20.04 120.502 20.808C121.366 21.576 121.958 22.632 122.278 23.976L114.406 26.736C114.678 27.232 115.062 27.624 115.558 27.912C116.054 28.184 116.614 28.32 117.238 28.32C117.686 28.32 118.11 28.24 118.51 28.08C118.91 27.92 119.294 27.712 119.662 27.456L120.694 29.112C120.182 29.448 119.614 29.72 118.99 29.928C118.382 30.136 117.782 30.24 117.19 30.24ZM113.926 24.84C113.91 25.032 113.918 25.216 113.95 25.392L119.734 23.256C119.51 22.776 119.182 22.352 118.75 21.984C118.334 21.616 117.774 21.432 117.07 21.432C116.158 21.432 115.406 21.752 114.814 22.392C114.222 23.032 113.926 23.848 113.926 24.84ZM129.466 20.064L129.61 21.984C129.946 21.28 130.466 20.72 131.17 20.304C131.874 19.888 132.69 19.68 133.618 19.68C134.546 19.68 135.306 19.96 135.898 20.52C136.506 21.064 136.826 21.776 136.858 22.656V30H134.602V23.424C134.57 22.896 134.402 22.464 134.098 22.128C133.81 21.792 133.354 21.616 132.73 21.6C131.866 21.6 131.138 21.952 130.546 22.656C129.97 23.344 129.682 24.24 129.682 25.344V30H127.45V20.064H129.466ZM151.18 29.064C150.732 29.432 150.196 29.72 149.572 29.928C148.948 30.136 148.324 30.24 147.7 30.24C146.628 30.24 145.676 30.024 144.844 29.592C144.028 29.16 143.388 28.552 142.924 27.768C142.476 26.984 142.252 26.064 142.252 25.008C142.252 23.952 142.492 23.04 142.972 22.272C143.468 21.488 144.108 20.88 144.892 20.448C145.692 20.016 146.556 19.8 147.484 19.8C148.284 19.8 148.996 19.912 149.62 20.136C150.244 20.36 150.788 20.664 151.252 21.048L150.124 22.512C149.836 22.304 149.484 22.112 149.068 21.936C148.652 21.744 148.188 21.648 147.676 21.648C147.084 21.648 146.548 21.8 146.068 22.104C145.588 22.392 145.204 22.792 144.916 23.304C144.628 23.8 144.484 24.368 144.484 25.008C144.484 25.632 144.628 26.2 144.916 26.712C145.204 27.224 145.604 27.632 146.116 27.936C146.628 28.24 147.22 28.392 147.892 28.392C148.308 28.392 148.692 28.328 149.044 28.2C149.412 28.072 149.74 27.896 150.028 27.672L151.18 29.064ZM156.461 20.064H158.693V30H156.461V20.064ZM156.293 16.488C156.293 16.12 156.429 15.824 156.701 15.6C156.989 15.36 157.301 15.24 157.637 15.24C157.973 15.24 158.277 15.36 158.549 15.6C158.821 15.824 158.957 16.12 158.957 16.488C158.957 16.856 158.821 17.16 158.549 17.4C158.277 17.624 157.973 17.736 157.637 17.736C157.301 17.736 156.989 17.624 156.701 17.4C156.429 17.16 156.293 16.856 156.293 16.488Z"
        fill="black"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </svg>
  )
}

export default LogoWithTextIcon