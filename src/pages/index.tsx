import React from "react"
import Head from "next/head"
import Link from "next/link"
import prisma from "../../lib/prisma"

export default function Home({ connected }) {
  return (
    <div>
      <Head>
        <title>Next.js full stack template.</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrismaConnectionSign connected={connected} />
      <main className="flex min-h-screen justify-center bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 py-20">
        <div>
          <h1 className="px-5 text-center text-4xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-6xl">
            Next.js
            <br />
            Advanced Starter
          </h1>

          <h2 className="mx-auto mt-8 max-w-4xl px-10 text-center text-base tracking-tight text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            Tailwind CSS 3.0, ESLint & Prettier without a single line of config!
            Easily extendable zero-config template for pros and beginners.
          </h2>

          <h2 className="mx-auto mt-8 max-w-2xl -rotate-2 rounded bg-gradient-to-r from-teal-500 to-blue-500 py-6 text-center text-base tracking-tight text-white sm:text-2xl md:mt-5 md:text-2xl">
            <span className="font-extrabold">Extension version</span> Prisma +
            NextAuth + Docker
          </h2>

          <div className="px-4 sm:px-0">
            <section
              className="mt-6 grid min-h-[350px] w-full grid-cols-1 rounded-lg bg-white sm:mt-20 sm:min-w-[1000px] sm:grid-cols-2"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center rounded-l-lg bg-gray-50">
                <FeatureList>
                  <Feature main="Tailwind CSS">
                    Fast design workflow with <InfoText text="Tailwind CSS" />
                  </Feature>

                  <Feature main="TypeScript">
                    <InfoText text="TypeScript" /> by default
                  </Feature>

                  <Feature main="ESLint config">
                    Customizable <InfoText text="ESLint config" />
                  </Feature>

                  <Feature main="Code formatting">
                    <InfoText text="Code formatting" /> with Prettier
                  </Feature>

                  <Feature main="Absolute imports">
                    Standardized <InfoText text="absolute imports" />
                  </Feature>

                  <Feature main="Absolute imports">
                    Ready-to-go <InfoText text="Jest" /> setup
                  </Feature>
                </FeatureList>
              </div>

              <div className="space-y-5 place-self-center px-4 py-24 text-center">
                <h3 className="text-3xl font-bold">Get it 👇</h3>

                <span className="inline-flex rounded-md shadow-sm">
                  <Link href="https://github.com/agcty/nextjs-advanced-starter">
                    <a
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-4 font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 active:bg-blue-700 sm:px-10"
                    >
                      Copy Template from GitHub
                    </a>
                  </Link>
                </span>
              </div>
            </section>
            <p className="mt-6 text-center text-xs font-medium text-gray-600">
              Built by{" "}
              <a
                className="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:underline focus:outline-none"
                href="https://twitter.com/agctyz"
              >
                @agctyz
              </a>
            </p>
          </div>

          <div className="px-4 sm:px-0">
            <h3 className="mx-auto mt-8 max-w-2xl rounded text-center text-base tracking-tight sm:text-2xl md:mt-5 md:text-2xl">
              <span className="font-extrabold">Extension : </span>
            </h3>
            <section
              className="grid min-h-[350px] w-full grid-cols-1 rounded-lg bg-white sm:mt-4 sm:min-w-[1000px] sm:grid-cols-2"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center rounded-l-lg bg-gray-800">
                <FeatureList>
                  <Feature main="Prisma" flavor={Flavor.Extension}>
                    Connect your Database with <InfoText text="Prisma" />
                  </Feature>

                  <Feature main="Docker" flavor={Flavor.Extension}>
                    with <InfoText text="Docker" /> deploy everywhere
                  </Feature>

                  <Feature main="ESLint config" flavor={Flavor.Extension}>
                    Secure with <InfoText text="Next Auth" />
                  </Feature>
                </FeatureList>
              </div>

              <div className="space-y-5 place-self-center px-4 py-24 text-center">
                <h3 className="text-3xl font-bold">Get it 👇</h3>

                <span className="inline-flex rounded-md shadow-sm">
                  <Link href="https://github.com/tallez/Next-Advanced-Prisma-Extension">
                    <a
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-4 font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-orange-500 focus:border-orange-700 focus:outline-none focus:ring-4 focus:ring-red-400 active:bg-red-700 sm:px-10"
                    >
                      Copy Template from GitHub
                    </a>
                  </Link>
                </span>
              </div>
            </section>
            <p className="mt-6 text-center text-xs font-medium text-gray-600">
              Extended by{" "}
              <a
                className="font-medium text-orange-600 transition duration-150 ease-in-out hover:text-orange-500 focus:underline focus:outline-none"
                href="https://github.com/tallez"
              >
                @tallez
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="space-y-5 px-12 py-12">{children}</ul>
}

enum Flavor {
  Original = "original",
  Extension = "extension",
}

function Feature({
  children,
  main,
  flavor = Flavor.Original,
}: {
  children: React.ReactNode
  main: string
  flavor?: Flavor
}) {
  if (flavor === "original") {
    var checkIconClass =
      "hiddden hidden h-5 w-5 flex-shrink-0 rounded-full bg-blue-600 p-1 text-gray-100 sm:inline"
    var textClass = "ml-3 hidden text-lg text-gray-600 sm:inline"
  } else if (flavor === "extension") {
    var checkIconClass =
      "hiddden hidden h-5 w-5 flex-shrink-0 rounded-full bg-orange-600 p-1 text-gray-100 sm:inline"
    var textClass = "ml-3 hidden text-lg text-white sm:inline"
  }
  return (
    <li className="flex items-center">
      <CheckIcon className={checkIconClass} />
      <p className={textClass}>{children}</p>

      <p className="mx-auto sm:hidden">
        <InfoText text={main} />
      </p>
    </li>
  )
}

function InfoText({ text }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 font-medium text-gray-700">
      <CheckIcon className="mr-3 inline-flex h-5 w-5 flex-shrink-0 rounded-full bg-blue-600 p-1 text-gray-100 sm:hidden" />
      {text}
    </span>
  )
}

function CheckIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

function PrismaConnectionSign({ connected }: { connected: boolean }) {
  var signal: React.ReactNode
  var classSignal: string
  if (connected) {
    signal = <div className="h-2 w-2 rounded-full bg-green-500"></div>
    classSignal =
      "fixed top-0 right-0 m-4 flex items-center justify-center space-x-4 rounded bg-gradient-to-r from-pink-500 to-orange-500 p-4"
  } else {
    signal = <div className="h-2 w-2 rounded-full bg-purple-800"></div>
    classSignal =
      "fixed top-0 right-0 m-4 flex items-center justify-center space-x-4 rounded bg-gradient-to-r from-teal-500 to-blue-500 p-4"
  }

  return (
    <div className={classSignal}>
      <span className="text-white">
        Prisma client is{" "}
        <span className="font-extrabold">
          {connected ? "connected" : "disconnected"}
        </span>
      </span>
      {signal}
    </div>
  )
}

export async function getServerSideProps() {
  try {
    await prisma.$connect()
    return {
      props: {
        connected: true,
      },
    }
  } catch (error) {
    return {
      props: {
        connected: false,
      },
    }
  } finally {
    await prisma.$disconnect()
  }
}
