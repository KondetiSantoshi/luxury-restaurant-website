'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ReservationSection from './ReservationSection';

export default function ReservationModal({ isOpen, onClose, selectedMenu }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080706]/90 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          data-lenis-prevent="true"
          className="relative w-full max-w-3xl my-auto z-10 max-h-[88vh] overflow-y-auto rounded-3xl"
        >
          <ReservationSection
            preselectedMenu={selectedMenu}
            isModal={true}
            onClose={onClose}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
