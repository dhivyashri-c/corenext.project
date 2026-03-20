'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Wifi, Bot, Settings, Activity, CircuitBoard, MessageCircle } from 'lucide-react'

const categories = [
  {
    icon: CircuitBoard,
    name: 'Arduino Projects',
    description: 'Microcontroller-based projects with sensors, actuators, and IoT integration.',
    components: ['Arduino Uno/Mega', 'Sensors', 'LCD/OLED', 'Relay Module'],
    color: 'from-teal-600 to-emerald-600',
  },
  {
    icon: Cpu,
    name: 'Raspberry Pi',
    description: 'Linux-based projects with computer vision, AI, and full OS capabilities.',
    components: ['RPi 4', 'Pi Camera', 'GPIO Modules', 'Touch Screen'],
    color: 'from-red-600 to-pink-600',
  },
  {
    icon: Wifi,
    name: 'IoT Projects',
    description: 'Internet of Things solutions with cloud connectivity and mobile dashboards.',
    components: ['ESP32/ESP8266', 'MQTT', 'Firebase', 'Android App'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Bot,
    name: 'Robotics',
    description: 'Autonomous and semi-autonomous robotic systems with navigation and control.',
    components: ['DC Motors', 'Servo Motors', 'L298N Driver', 'IR Sensors'],
    color: 'from-orange-600 to-amber-600',
  },
  {
    icon: Settings,
    name: 'Automation Systems',
    description: 'Industrial and home automation with scheduled control and remote access.',
    components: ['PLC', 'Relay Boards', 'Solenoid Valves', 'HMI Panel'],
    color: 'from-violet-600 to-purple-600',
  },
  {
    icon: Activity,
    name: 'Sensor Based',
    description: 'Data acquisition and monitoring systems using various environmental sensors.',
    components: ['DHT22', 'MQ Sensors', 'Ultrasonic', 'Load Cell'],
    color: 'from-green-600 to-lime-600',
  },
  {
    icon: Zap,
    name: 'Embedded Systems',
    description: 'Low-level firmware programming for STM32, PIC, and ARM Cortex processors.',
    components: ['STM32', 'PIC Microcontroller', 'RTOS', 'UART/SPI/I2C'],
    color: 'from-yellow-600 to-orange-600',
  },
]

export default function HardwareSection() {
  return (
    <section id="hardware" className="section-padding bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hardware <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Physical hardware solutions with working prototypes, full documentation, and demo videos.
          </p>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 scroll-container">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 card-hover min-w-[260px] flex flex-col shrink-0"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4`}>
                <cat.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{cat.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.components.map((c) => (
                  <span key={c} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded border border-white/10">{c}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/+919876543210?text=Hi%20I%20need%20a%20hardware%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" /> Request Hardware Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
