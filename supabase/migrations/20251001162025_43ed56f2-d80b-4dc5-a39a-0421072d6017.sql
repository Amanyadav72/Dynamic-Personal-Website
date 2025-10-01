-- Add INSERT policy to allow profile creation during user registration
-- This policy allows the handle_new_user trigger to create profiles
CREATE POLICY "Users can create their own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Also add an INSERT policy for user_roles to allow the trigger to assign default roles
-- The handle_new_user trigger needs to insert into user_roles as well
CREATE POLICY "System can create user roles during signup"
ON public.user_roles
FOR INSERT
WITH CHECK (user_id = auth.uid());