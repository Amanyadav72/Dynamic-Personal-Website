-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view messages" ON public.messages;

-- Create a more restrictive policy that prevents public access to messages
-- For now, no one can read messages until proper admin authentication is implemented
CREATE POLICY "Only admin can view messages" 
ON public.messages 
FOR SELECT 
USING (false); -- This ensures no one can read messages until admin auth is set up

-- Keep the INSERT policy to allow public contact form submissions
-- The existing "Anyone can send messages" policy remains unchanged