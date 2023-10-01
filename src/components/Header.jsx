import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <nav class="bg-gray-900 text-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="50"
              height="50"
            >
              <g class="logo" fill-rule="nonzero" fill="#0ae9ae">
                {" "}
                {/* Teal color */}
                <path d="M23 23v65h65V23H23zm-1-1h67v67H22V22zM10 10v8h8v-8h-8zM9 9h10v10H9V9z"></path>
                <path d="M9.146 9.854a.5.5 0 1 1 .708-.708l9 9a.5.5 0 0 1-.708.708l-9-9zM33 22h1v66.168h-1zM66 22h1v66.168h-1zM44 22h1v66.168h-1zM77 22h1v66.168h-1zM55 22h1v66.168h-1z"></path>
                <path d="M88.584 34.084v-1H22.416v1zM88.584 78.084v-1H22.416v1zM88.584 56.084v-1H22.416v1zM88.584 45.084v-1H22.416v1zM89.084 67.084v-1H22.916v1zM13 18.5h1V89h-1zM18 14v-1h71v1z"></path>
                <path d="M88 9h1v9h-1zM9 89v-1h9v1z"></path>
              </g>
            </svg>

            <span class="self-center text-2xl ml-3 font-semibold whitespace-nowrap dark:text-white">
            GridFusion
            </span>
          </a>

          <div class="flex items-center">
            <a
              href="https://github.com/AhmerAli412/GridLayoutGenetrator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={30} color="white" className="mr-5" />{" "}
              {/* Use the GitHub icon */}
            </a>
          </div>
        </div>
      </nav>
      {/* <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}
    </div>
  );
};

export default Header;
