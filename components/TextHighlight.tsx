import { ReactNode } from 'react';
import * as motion from 'motion/react-client'

interface ButtonProps {
    children: ReactNode;
}
const TextHighlight = ({ children }: ButtonProps) => {
    return (
        <motion.div 
            className='text-background bg-red-light p-2 rounded-xl'
            whileHover={{scale: 1.05}}
        >
            {children}
        </motion.div>
    );
}
export default TextHighlight;