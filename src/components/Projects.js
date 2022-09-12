import React from 'react'

function Projects() {
  return (
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
              <div class="md:shrink-0">
                  <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                  <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                  <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
              </div>
          </div>
      </div>
  )
}

export default Projects