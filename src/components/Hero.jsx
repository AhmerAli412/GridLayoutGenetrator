import React from 'react'

const Hero = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Tired of CSS Grid?
        <br class="hidden lg:inline-block"/>here is the solution
      </h1>
      <p class="mb-8 leading-relaxed">A CSS Grid generator in ReactJS is a tool that allows users to create custom grid layouts using a graphical user interface. The generator provides a visual representation of the grid, allowing users to easily modify the number of columns and rows, as well as the size and placement of elements within the grid. The final result is a custom CSS grid that can be used to create flexible and responsive designs for web applications.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://blog.hootsuite.com/wp-content/uploads/2021/02/Instagram-grid-layouts_1080x1080.jpg"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero